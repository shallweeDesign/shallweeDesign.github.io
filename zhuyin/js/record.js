// Training-audio recorder (record.html): capture pronunciation samples for
// every game item, auto-trimmed with the same endpointing the matcher uses,
// stored in IndexedDB and exportable as a zip of 16 kHz mono PCM16 WAVs.
// Multiple takes per item are encouraged — more samples → better templates.

import { SAMPLE_RATE, findSpeech } from "./dsp.js";
import { GAME_ITEMS } from "./levels.js";
import { zhuyinSymbols, combinedFinals } from "./data.js";

const BLOCK = 160;              // 10 ms @16k
const AUTO_STOP_BLOCKS = 40;    // 0.4 s silence after speech ends the take
const MAX_TAKE_BLOCKS = 300;    // 3 s hard cap
const ARM_TIMEOUT_MS = 6000;    // give up if no speech at all

const $ = (id) => document.getElementById(id);

// ── IndexedDB ──────────────────────────────────────────────────────────────────

const DB_NAME = "zhuyin-training";

function openDb() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = () => {
      const store = req.result.createObjectStore("clips", { keyPath: "key", autoIncrement: true });
      store.createIndex("bySymbol", "symbolId");
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

function tx(db, mode, fn) {
  return new Promise((resolve, reject) => {
    const t = db.transaction("clips", mode);
    const out = fn(t.objectStore("clips"));
    t.oncomplete = () => resolve(out?.result ?? out);
    t.onerror = () => reject(t.error);
  });
}

const addClip = (db, clip) => tx(db, "readwrite", s => s.add(clip));
const allClips = (db) => new Promise((resolve, reject) => {
  const req = db.transaction("clips").objectStore("clips").getAll();
  req.onsuccess = () => resolve(req.result);
  req.onerror = () => reject(req.error);
});
const clipsFor = (db, symbolId) => new Promise((resolve, reject) => {
  const req = db.transaction("clips").objectStore("clips").index("bySymbol").getAll(symbolId);
  req.onsuccess = () => resolve(req.result);
  req.onerror = () => reject(req.error);
});
const deleteClip = (db, key) => tx(db, "readwrite", s => s.delete(key));

// ── WAV encode / zip (store method) ────────────────────────────────────────────

function encodeWav(samples, rate = SAMPLE_RATE) {
  const buf = new ArrayBuffer(44 + samples.length * 2);
  const v = new DataView(buf);
  const str = (off, s) => { for (let i = 0; i < s.length; i++) v.setUint8(off + i, s.charCodeAt(i)); };
  str(0, "RIFF"); v.setUint32(4, 36 + samples.length * 2, true); str(8, "WAVE");
  str(12, "fmt "); v.setUint32(16, 16, true); v.setUint16(20, 1, true); v.setUint16(22, 1, true);
  v.setUint32(24, rate, true); v.setUint32(28, rate * 2, true); v.setUint16(32, 2, true); v.setUint16(34, 16, true);
  str(36, "data"); v.setUint32(40, samples.length * 2, true);
  for (let i = 0; i < samples.length; i++) {
    v.setInt16(44 + i * 2, Math.max(-1, Math.min(1, samples[i])) * 0x7fff, true);
  }
  return new Uint8Array(buf);
}

const _crcTable = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c;
  }
  return t;
})();

function crc32(data) {
  let c = 0xffffffff;
  for (let i = 0; i < data.length; i++) c = _crcTable[(c ^ data[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

// entries: [{name, data: Uint8Array}] → zip Blob (no compression; WAVs don't shrink)
function makeZip(entries) {
  const enc = new TextEncoder();
  const parts = [];
  const central = [];
  let offset = 0;
  for (const { name, data } of entries) {
    const nameBytes = enc.encode(name);
    const crc = crc32(data);
    const local = new DataView(new ArrayBuffer(30));
    local.setUint32(0, 0x04034b50, true);
    local.setUint16(4, 20, true);
    local.setUint16(6, 0x0800, true);           // UTF-8 names (ê/ü ids)
    local.setUint16(8, 0, true);                // store
    local.setUint32(14, crc, true);
    local.setUint32(18, data.length, true);
    local.setUint32(22, data.length, true);
    local.setUint16(26, nameBytes.length, true);
    parts.push(new Uint8Array(local.buffer), nameBytes, data);

    const cd = new DataView(new ArrayBuffer(46));
    cd.setUint32(0, 0x02014b50, true);
    cd.setUint16(4, 20, true); cd.setUint16(6, 20, true);
    cd.setUint16(8, 0x0800, true);
    cd.setUint32(16, crc, true);
    cd.setUint32(20, data.length, true);
    cd.setUint32(24, data.length, true);
    cd.setUint16(28, nameBytes.length, true);
    cd.setUint32(42, offset, true);
    central.push(new Uint8Array(cd.buffer), nameBytes);
    offset += 30 + nameBytes.length + data.length;
  }
  const cdStart = offset;
  let cdLen = 0;
  for (const c of central) cdLen += c.length;
  const end = new DataView(new ArrayBuffer(22));
  end.setUint32(0, 0x06054b50, true);
  end.setUint16(8, entries.length, true);
  end.setUint16(10, entries.length, true);
  end.setUint32(12, cdLen, true);
  end.setUint32(16, cdStart, true);
  return new Blob([...parts, ...central, new Uint8Array(end.buffer)], { type: "application/zip" });
}

// ── mic capture with auto-stop ─────────────────────────────────────────────────

function resampleLinear(data, fromRate, toRate) {
  if (fromRate === toRate) return data;
  const outLen = Math.floor((data.length * toRate) / fromRate);
  const out = new Float32Array(outLen);
  const step = fromRate / toRate;
  for (let i = 0; i < outLen; i++) {
    const pos = i * step, i0 = Math.floor(pos);
    out[i] = data[i0] + (data[Math.min(i0 + 1, data.length - 1)] - data[i0]) * (pos - i0);
  }
  return out;
}

class Recorder {
  constructor() {
    this._ctx = new (window.AudioContext || window.webkitAudioContext)({ sampleRate: SAMPLE_RATE });
    if (this._ctx.state === "suspended") this._ctx.resume();
    this._armed = false;
  }

  async init() {
    if (this._stream) return;
    if (this._ctx.state === "suspended") await this._ctx.resume();
    this._stream = await navigator.mediaDevices.getUserMedia({
      audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true },
    });
    const src = this._ctx.createMediaStreamSource(this._stream);
    const ratio = this._ctx.sampleRate / SAMPLE_RATE;
    if (this._ctx.audioWorklet) {
      await this._ctx.audioWorklet.addModule("./js/capture-worklet.js");
      this._node = new AudioWorkletNode(this._ctx, "capture");
      this._node.port.onmessage = (e) => this._feed(resampleLinear(e.data, SAMPLE_RATE * ratio, SAMPLE_RATE));
    } else {
      this._node = this._ctx.createScriptProcessor(4096, 1, 1);
      this._node.onaudioprocess = (e) => this._feed(resampleLinear(e.inputBuffer.getChannelData(0).slice(0), SAMPLE_RATE * ratio, SAMPLE_RATE));
    }
    src.connect(this._node);
    const mute = this._ctx.createGain();
    mute.gain.value = 0;
    this._node.connect(mute).connect(this._ctx.destination);
  }

  // Resolves with trimmed Float32Array, or null when nothing was said.
  take() {
    return new Promise((resolve) => {
      this._chunks = [];
      this._blockCarry = new Float32Array(0);
      this._sawSpeech = false;
      this._silent = 0;
      this._blocks = 0;
      this._resolve = (samples) => { this._armed = false; clearTimeout(this._giveUp); resolve(samples); };
      this._giveUp = setTimeout(() => { if (this._armed && !this._sawSpeech) this._finish(); }, ARM_TIMEOUT_MS);
      this._armed = true;
    });
  }

  cancelTake() { if (this._armed) this._resolve(null); }

  _finish() {
    const total = this._chunks.reduce((n, c) => n + c.length, 0);
    const all = new Float32Array(total);
    let off = 0;
    for (const c of this._chunks) { all.set(c, off); off += c.length; }
    const seg = this._sawSpeech ? findSpeech(all, { minMs: 80, hangMs: 200 }) : null;
    if (!seg) return this._resolve(null);
    // keep 0.1 s of context either side
    const pad = Math.floor(SAMPLE_RATE * 0.1);
    this._resolve(all.slice(Math.max(0, seg[0] - pad), Math.min(all.length, seg[1] + pad)));
  }

  _feed(chunk) {
    if (!this._armed) return;
    this._chunks.push(chunk);
    const data = new Float32Array(this._blockCarry.length + chunk.length);
    data.set(this._blockCarry, 0);
    data.set(chunk, this._blockCarry.length);
    let off = 0;
    for (; off + BLOCK <= data.length; off += BLOCK) {
      let e = 0;
      for (let i = 0; i < BLOCK; i++) { const v = data[off + i]; e += v * v; }
      const rms = Math.sqrt(e / BLOCK);
      this._blocks++;
      if (rms > 0.012) { this._sawSpeech = true; this._silent = 0; }
      else if (this._sawSpeech) this._silent++;
      if ((this._sawSpeech && this._silent >= AUTO_STOP_BLOCKS) || this._blocks >= MAX_TAKE_BLOCKS) {
        this._blockCarry = new Float32Array(0);
        this._finish();
        return;
      }
    }
    this._blockCarry = data.slice(off);
  }
}

// ── page ───────────────────────────────────────────────────────────────────────

const baseIds = new Set(zhuyinSymbols.map(s => s.id));
const combinedIds = new Set(combinedFinals.map(c => c.id));
const SECTIONS = [
  { title: "聲符・韻符", ids: Object.keys(GAME_ITEMS).filter(id => baseIds.has(id)) },
  { title: "結合韻",     ids: Object.keys(GAME_ITEMS).filter(id => combinedIds.has(id)) },
  { title: "拼音",       ids: Object.keys(GAME_ITEMS).filter(id => !baseIds.has(id) && !combinedIds.has(id)) },
];

let db = null;
let recorder = null;
let currentId = null;
let pendingTake = null; // Float32Array awaiting 保存/重錄

async function refreshCounts() {
  const clips = await allClips(db);
  const counts = {};
  for (const c of clips) counts[c.symbolId] = (counts[c.symbolId] ?? 0) + 1;
  document.querySelectorAll(".rec-card").forEach(card => {
    const n = counts[card.dataset.id] ?? 0;
    const badge = card.querySelector(".rec-card__count");
    badge.textContent = n ? `${n} 段` : "";
    card.classList.toggle("rec-card--has", n > 0);
  });
  $("total-count").textContent = clips.length;
  return counts;
}

function playSamples(samples) {
  const url = URL.createObjectURL(new Blob([encodeWav(samples)], { type: "audio/wav" }));
  const audio = new Audio(url);
  audio.onended = () => URL.revokeObjectURL(url);
  audio.play();
}

function playReference(id) {
  const enc = encodeURIComponent(id);
  const audio = new Audio(`./audio/${enc}.wav`);
  audio.onerror = () => new Audio(`./audio/templates/${enc}.wav`).play();
  audio.play();
}

function setStatus(text, cls = "") {
  const el = $("panel-status");
  el.textContent = text;
  el.className = `rec-status ${cls}`;
}

async function renderTakes() {
  const list = $("panel-takes");
  const clips = await clipsFor(db, currentId);
  list.innerHTML = "";
  clips.forEach((clip, i) => {
    const row = document.createElement("div");
    row.className = "rec-take";
    row.innerHTML = `<span>第 ${i + 1} 段（${(clip.data.byteLength / 2 / SAMPLE_RATE).toFixed(1)}s）</span>`;
    const play = document.createElement("button");
    play.textContent = "▶️";
    play.onclick = () => playSamples(Float32Array.from(new Int16Array(clip.data), v => v / 32768));
    const del = document.createElement("button");
    del.textContent = "🗑";
    del.onclick = async () => { await deleteClip(db, clip.key); renderTakes(); refreshCounts(); };
    row.append(play, del);
    list.appendChild(row);
  });
}

function openPanel(id) {
  currentId = id;
  pendingTake = null;
  const item = GAME_ITEMS[id];
  $("panel-symbol").textContent = item.symbol;
  $("panel-word").textContent = `${item.emoji ?? ""} ${item.exampleWord}`;
  $("btn-save").hidden = true;
  $("btn-preview").hidden = true;
  setStatus("按 🎙 開始錄音");
  $("record-panel").hidden = false;
  renderTakes();
}

async function startTake() {
  recorder.cancelTake();
  setStatus("🎙 請說出這個音…", "rec-status--live");
  $("btn-take").disabled = true;
  const samples = await recorder.take();
  $("btn-take").disabled = false;
  if (!samples) {
    setStatus("沒有聽到聲音，再試一次", "rec-status--warn");
    return;
  }
  pendingTake = samples;
  setStatus(`錄到 ${(samples.length / SAMPLE_RATE).toFixed(1)} 秒 — 試聽後保存`, "rec-status--ok");
  $("btn-preview").hidden = false;
  $("btn-save").hidden = false;
  playSamples(samples);
}

async function saveTake() {
  if (!pendingTake) return;
  const pcm = new Int16Array(pendingTake.length);
  for (let i = 0; i < pendingTake.length; i++) {
    pcm[i] = Math.max(-1, Math.min(1, pendingTake[i])) * 0x7fff;
  }
  await addClip(db, { symbolId: currentId, ts: Date.now(), rate: SAMPLE_RATE, data: pcm.buffer });
  pendingTake = null;
  $("btn-save").hidden = true;
  $("btn-preview").hidden = true;
  setStatus("已保存！可以再錄一段或換下一個", "rec-status--ok");
  renderTakes();
  refreshCounts();
}

async function exportZip() {
  const clips = await allClips(db);
  if (!clips.length) { alert("還沒有任何錄音"); return; }
  const perId = {};
  const entries = clips.map(clip => {
    perId[clip.symbolId] = (perId[clip.symbolId] ?? 0) + 1;
    const f32 = Float32Array.from(new Int16Array(clip.data), v => v / 32768);
    return { name: `${clip.symbolId}/${clip.symbolId}-${perId[clip.symbolId]}.wav`, data: encodeWav(f32) };
  });
  const url = URL.createObjectURL(makeZip(entries));
  const a = document.createElement("a");
  a.href = url;
  a.download = `zhuyin-training-${new Date().toISOString().slice(0, 10)}.zip`;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 10000);
}

async function init() {
  db = await openDb();

  const grid = $("rec-grid");
  for (const section of SECTIONS) {
    const h = document.createElement("h2");
    h.className = "rec-section";
    h.textContent = section.title;
    grid.appendChild(h);
    const wrap = document.createElement("div");
    wrap.className = "rec-cards";
    for (const id of section.ids) {
      const item = GAME_ITEMS[id];
      const card = document.createElement("button");
      card.type = "button";
      card.className = "rec-card";
      card.dataset.id = id;
      card.innerHTML = `<span class="rec-card__symbol">${item.symbol}</span>
        <span class="rec-card__word">${item.emoji ?? ""} ${item.exampleWord}</span>
        <span class="rec-card__count"></span>`;
      card.onclick = () => openPanel(id);
      wrap.appendChild(card);
    }
    grid.appendChild(wrap);
  }

  $("btn-start").onclick = async () => {
    // constructed in the tap gesture — iOS audio session requirement
    if (!recorder) recorder = new Recorder();
    $("btn-start").disabled = true;
    $("btn-start").textContent = "🎤 麥克風確認中…";
    try {
      await recorder.init();
      $("mic-gate").hidden = true;
      $("rec-main").hidden = false;
    } catch {
      $("btn-start").disabled = false;
      $("btn-start").textContent = "🎤 重試（請允許麥克風）";
    }
  };

  $("btn-ref").onclick = () => playReference(currentId);
  $("btn-take").onclick = startTake;
  $("btn-preview").onclick = () => pendingTake && playSamples(pendingTake);
  $("btn-save").onclick = saveTake;
  $("btn-close").onclick = () => { recorder.cancelTake(); $("record-panel").hidden = true; };
  $("btn-export").onclick = exportZip;

  refreshCounts();
}

document.addEventListener("DOMContentLoaded", init);
