// Direct bopomofo sound matcher — replaces cloud ASR with local template
// matching: the mic signal is segmented by energy, converted to MFCC, and
// compared (DTW) against the game's own pronunciation WAVs. Works offline,
// no hanzi detour, and reacts as soon as the child stops speaking.

import { SAMPLE_RATE, mfcc, dtw, findSpeech } from "./dsp.js";

const BLOCK = 160;                 // 10 ms endpointer blocks @16k
const PRE_ROLL_BLOCKS = 30;        // 0.3 s kept before speech onset
const ONSET_BLOCKS = 3;            // blocks above threshold to trigger
const HANG_BLOCKS = 25;            // 0.25 s below threshold ends utterance
const MAX_UTTER_BLOCKS = 160;      // 1.6 s hard cap
const MIN_UTTER_BLOCKS = 10;       // ignore blips < 0.1 s of speech

function resampleLinear(data, fromRate, toRate) {
  if (fromRate === toRate) return data;
  const outLen = Math.floor((data.length * toRate) / fromRate);
  const out = new Float32Array(outLen);
  const step = fromRate / toRate;
  for (let i = 0; i < outLen; i++) {
    const pos = i * step;
    const i0 = Math.floor(pos);
    const frac = pos - i0;
    out[i] = data[i0] + (data[Math.min(i0 + 1, data.length - 1)] - data[i0]) * frac;
  }
  return out;
}

export class VoiceMatcher {
  constructor({ onUtterance, onDebug } = {}) {
    this.onUtterance = onUtterance;
    this.onDebug = onDebug;
    this._templates = new Map(); // id → MFCC frames
    this._stream = null;
    this._node = null;
    this._source = null;
    this._active = false;
    // Created here (inside the click that starts a level) so iOS grants a
    // running audio session; everything after this may be async.
    this._ctx = new (window.AudioContext || window.webkitAudioContext)({ sampleRate: SAMPLE_RATE });
    if (this._ctx.state === "suspended") this._ctx.resume();
    this._resetEndpointer();
  }

  get stream() { return this._stream; }
  get templateCount() { return this._templates.size; }

  _dbg(msg) { this.onDebug?.(msg); }

  // ── templates ────────────────────────────────────────────────────────────────

  // Load + featurize pronunciation WAVs. Base symbols live in audio/,
  // synthesized syllable templates (結合韻/拼音) in audio/templates/.
  async init(ids) {
    const jobs = ids.map(async (id) => {
      const enc = encodeURIComponent(id);
      let buf = null;
      for (const url of [`./audio/${enc}.wav`, `./audio/templates/${enc}.wav`]) {
        try {
          const res = await fetch(url);
          if (res.ok) { buf = await res.arrayBuffer(); break; }
        } catch { /* try next */ }
      }
      if (!buf) { this._dbg(`template missing: ${id}`); return; }
      const audio = await this._ctx.decodeAudioData(buf);
      let data = audio.getChannelData(0);
      data = resampleLinear(data, audio.sampleRate, SAMPLE_RATE);
      const seg = findSpeech(data, { minMs: 60, hangMs: 150 });
      if (seg) data = data.subarray(seg[0], Math.min(seg[1], data.length));
      this._templates.set(id, mfcc(data));
    });
    await Promise.all(jobs);
    this._dbg(`templates ready: ${this._templates.size}/${ids.length}`);
  }

  // ── live capture ─────────────────────────────────────────────────────────────

  async start() {
    if (this._stream) return this._stream;
    if (this._ctx.state === "suspended") await this._ctx.resume();
    this._stream = await navigator.mediaDevices.getUserMedia({
      audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true },
    });
    this._source = this._ctx.createMediaStreamSource(this._stream);
    const ratio = this._ctx.sampleRate / SAMPLE_RATE;

    if (this._ctx.audioWorklet) {
      await this._ctx.audioWorklet.addModule("./js/capture-worklet.js");
      this._node = new AudioWorkletNode(this._ctx, "capture");
      this._node.port.onmessage = (e) => this._feed(e.data, ratio);
    } else {
      // Safari < 14.1 fallback
      this._node = this._ctx.createScriptProcessor(4096, 1, 1);
      this._node.onaudioprocess = (e) => this._feed(e.inputBuffer.getChannelData(0).slice(0), ratio);
    }
    this._source.connect(this._node);
    const mute = this._ctx.createGain(); // pull the graph without audible output
    mute.gain.value = 0;
    this._node.connect(mute).connect(this._ctx.destination);

    this._active = true;
    this._resetEndpointer();
    this._dbg(`mic capture @${this._ctx.sampleRate}Hz (${this._ctx.audioWorklet ? "worklet" : "script-processor"})`);
    return this._stream;
  }

  stop() {
    this._active = false;
    this._node?.disconnect();
    this._source?.disconnect();
    this._stream?.getTracks().forEach(t => t.stop());
    this._node = null;
    this._source = null;
    this._stream = null;
  }

  // ── streaming endpointer ─────────────────────────────────────────────────────

  _resetEndpointer() {
    this._carry = new Float32Array(0);
    this._preRoll = [];
    this._speech = null;   // null = idle, [] = collecting
    this._above = 0;
    this._below = 0;
    this._noise = 0.004;
  }

  _feed(chunk, ratio) {
    if (!this._active) return;
    if (ratio !== 1) chunk = resampleLinear(chunk, SAMPLE_RATE * ratio, SAMPLE_RATE);

    // stitch onto leftover samples, then consume whole 10 ms blocks
    const data = new Float32Array(this._carry.length + chunk.length);
    data.set(this._carry, 0);
    data.set(chunk, this._carry.length);
    let off = 0;
    for (; off + BLOCK <= data.length; off += BLOCK) {
      this._block(data.subarray(off, off + BLOCK));
    }
    this._carry = data.slice(off);
  }

  _block(block) {
    let e = 0;
    for (let i = 0; i < BLOCK; i++) e += block[i] * block[i];
    const rms = Math.sqrt(e / BLOCK);

    // adaptive noise floor: only learn from quiet blocks
    if (rms < this._noise * 2.5) this._noise = this._noise * 0.995 + rms * 0.005;
    const thresh = Math.max(this._noise * 4, 0.010);

    if (this._speech === null) {
      this._preRoll.push(block.slice(0));
      if (this._preRoll.length > PRE_ROLL_BLOCKS) this._preRoll.shift();
      this._above = rms > thresh ? this._above + 1 : 0;
      if (this._above >= ONSET_BLOCKS) {
        this._speech = [...this._preRoll];
        this._below = 0;
        this._speechBlocks = this._above;
      }
    } else {
      this._speech.push(block.slice(0));
      if (rms > thresh) { this._below = 0; this._speechBlocks++; }
      else this._below++;
      if (this._below >= HANG_BLOCKS || this._speech.length >= MAX_UTTER_BLOCKS) {
        const blocks = this._speech;
        const voiced = this._speechBlocks;
        this._speech = null;
        this._above = 0;
        this._preRoll = [];
        if (voiced >= MIN_UTTER_BLOCKS) {
          const utter = new Float32Array(blocks.length * BLOCK);
          blocks.forEach((b, i) => utter.set(b, i * BLOCK));
          this.onUtterance?.(utter);
        }
      }
    }
  }

  // ── matching ─────────────────────────────────────────────────────────────────

  // Rank candidate ids by DTW distance to the utterance. Returns
  // [{id, d}, …] sorted ascending (best first); [] if nothing usable.
  match(samples, candidateIds) {
    const seg = findSpeech(samples, { minMs: 80, hangMs: 200 });
    const trimmed = seg ? samples.subarray(seg[0], Math.min(seg[1], samples.length)) : samples;
    const frames = mfcc(trimmed);
    if (frames.length < 5) return [];
    const scores = [];
    for (const id of candidateIds) {
      const tpl = this._templates.get(id);
      if (tpl) scores.push({ id, d: dtw(frames, tpl) });
    }
    return scores.sort((a, b) => a.d - b.d);
  }
}
