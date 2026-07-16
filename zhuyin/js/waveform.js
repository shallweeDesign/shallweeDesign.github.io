// Scrolling voiceprint: opens its own getUserMedia stream and draws amplitude
// bars onto a canvas (voice-memo style). Runs alongside SpeechRecognition —
// they hold separate mic sessions; if getUserMedia fails (or iOS refuses a
// second session) start() resolves false and the caller just skips the visual.

const BAR_W = 3;
const BAR_GAP = 2;

export class Waveform {
  constructor(canvas, color = "#0ea5e9") {
    this.canvas = canvas;
    this.color = color;
    this._stream = null;
    this._audioCtx = null;
    this._analyser = null;
    this._buf = null;
    this._raf = 0;
    this._samples = [];
  }

  // Pass an existing MediaStream to share another consumer's mic session
  // (avoids a second getUserMedia, which iOS dislikes); we then don't own
  // the tracks and won't stop them.
  async start(existingStream) {
    if (this._stream) return true;
    if (existingStream) {
      this._stream = existingStream;
      this._owned = false;
    } else {
      if (!navigator.mediaDevices?.getUserMedia) return false;
      try {
        this._stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      } catch {
        return false;
      }
      this._owned = true;
    }
    this._audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (this._audioCtx.state === "suspended") this._audioCtx.resume();
    const src = this._audioCtx.createMediaStreamSource(this._stream);
    this._analyser = this._audioCtx.createAnalyser();
    this._analyser.fftSize = 512;
    src.connect(this._analyser);
    this._buf = new Uint8Array(this._analyser.fftSize);
    this._samples = [];
    this._draw();
    return true;
  }

  stop() {
    cancelAnimationFrame(this._raf);
    this._raf = 0;
    if (this._owned) this._stream?.getTracks().forEach(t => t.stop());
    this._audioCtx?.close();
    this._stream = null;
    this._audioCtx = null;
    const ctx = this.canvas.getContext("2d");
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  _draw() {
    const dpr = window.devicePixelRatio || 1;
    const w = this.canvas.clientWidth;
    const h = this.canvas.clientHeight;
    if (this.canvas.width !== w * dpr) {
      this.canvas.width = w * dpr;
      this.canvas.height = h * dpr;
    }

    this._analyser.getByteTimeDomainData(this._buf);
    let sum = 0;
    for (const v of this._buf) {
      const d = (v - 128) / 128;
      sum += d * d;
    }
    const rms = Math.sqrt(sum / this._buf.length);
    this._samples.push(Math.min(1, rms * 4));

    const capacity = Math.ceil(w / (BAR_W + BAR_GAP));
    if (this._samples.length > capacity) {
      this._samples.splice(0, this._samples.length - capacity);
    }

    const ctx = this.canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = this.color;

    // newest sample at the right edge, scrolling left
    for (let i = 0; i < this._samples.length; i++) {
      const x = w - (this._samples.length - i) * (BAR_W + BAR_GAP);
      const barH = Math.max(2, this._samples[i] * (h - 4));
      const y = (h - barH) / 2;
      if (ctx.roundRect) {
        ctx.beginPath();
        ctx.roundRect(x, y, BAR_W, barH, BAR_W / 2);
        ctx.fill();
      } else {
        ctx.fillRect(x, y, BAR_W, barH); // Safari < 16
      }
    }

    this._raf = requestAnimationFrame(() => this._draw());
  }
}
