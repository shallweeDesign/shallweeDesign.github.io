// Canvas stroke animation — ported from StrokeAnimated.tsx
// Uses destination-in compositing to clip brush within SVG stroke shape.

// Scale canvas by device pixel ratio so CSS zoom doesn't upscale raw pixels.
// Cap at 2× — 1024px is enough for 5× zoom on Retina without excessive memory.
const CANVAS_SIZE = Math.round(512 * Math.min(
  (typeof window !== "undefined" && window.devicePixelRatio) || 1, 2
));
const COORD_SCALE = CANVAS_SIZE / 2048;
const INK = "#222222";
const BRUSH_SCALE = 1.8;
const SMOOTH_STEPS = 20;
const DRAW_MS = 600;

let _tracksCache = null;
let _tracksPromise = null;

function loadTracks() {
  if (_tracksCache) return Promise.resolve(_tracksCache);
  return (_tracksPromise ??= fetch("./stroke-tracks.json")
    .then(r => r.json())
    .then(data => { _tracksCache = data; return data; }));
}

function smooth(pts) {
  const out = [];
  for (let i = 0; i + 1 < pts.length; i++) {
    for (let j = 0; j < SMOOTH_STEPS; j++) {
      const t = j / SMOOTH_STEPS;
      out.push([
        pts[i][0] + (pts[i + 1][0] - pts[i][0]) * t,
        pts[i][1] + (pts[i + 1][1] - pts[i][1]) * t,
        pts[i][2] + (pts[i + 1][2] - pts[i][2]) * t,
      ]);
    }
  }
  out.push(pts[pts.length - 1]);
  return out;
}

function paint(ctx, pts, from, to) {
  ctx.fillStyle = INK;
  ctx.strokeStyle = INK;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  for (let i = from; i < to && i < pts.length; i++) {
    const [x, y, sz] = pts[i];
    ctx.beginPath();
    ctx.arc(x * COORD_SCALE, y * COORD_SCALE, (sz / 2) * COORD_SCALE * BRUSH_SCALE, 0, Math.PI * 2);
    ctx.fill();
    if (i > 0) {
      const [px, py, ps] = pts[i - 1];
      ctx.beginPath();
      ctx.lineWidth = ((ps + sz) / 2) * COORD_SCALE * BRUSH_SCALE;
      ctx.moveTo(px * COORD_SCALE, py * COORD_SCALE);
      ctx.lineTo(x * COORD_SCALE, y * COORD_SCALE);
      ctx.stroke();
    }
  }
}

// paintMasked: draw brush strokes clipped to SVG mask, then composite onto mainCtx.
// Pass upTo=Infinity to draw all points (used for committed strokes).
// Pass alpha < 1 to render as a ghost guide.
function paintMasked(mainCtx, pts, upTo, mask, offCanvas, alpha = 1) {
  const oc = offCanvas.getContext("2d");
  oc.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  paint(oc, pts, 0, upTo);
  if (mask) {
    oc.globalCompositeOperation = "destination-in";
    oc.drawImage(mask, 0, 0);
    oc.globalCompositeOperation = "source-over";
  }
  mainCtx.save();
  mainCtx.globalAlpha = alpha;
  mainCtx.drawImage(offCanvas, 0, 0);
  mainCtx.restore();
}

export class StrokeAnimator {
  /**
   * @param {HTMLCanvasElement} canvas
   * @param {string} symbol      — Bopomofo char (e.g. "ㄅ"), used as track key
   * @param {string} symbolId    — romanized id (e.g. "b"), used for file paths
   * @param {number} totalStrokes
   * @param {(current: number) => void} [onTick]
   */
  constructor(canvas, symbol, symbolId, totalStrokes, onTick) {
    this.canvas = canvas;
    canvas.width = CANVAS_SIZE;
    canvas.height = CANVAS_SIZE;
    this.ctx = canvas.getContext("2d");
    this.symbol = symbol;
    this.symbolId = symbolId;
    this.totalStrokes = totalStrokes;
    this.onTick = onTick ?? null;

    this.tracks = null;
    this.current = 0;
    this.playing = false;
    this._rafId = null;
    this._committedSnapshot = null;
    this._maskCanvases = Array(totalStrokes).fill(null);

    this._offCanvas = document.createElement("canvas");
    this._offCanvas.width = CANVAS_SIZE;
    this._offCanvas.height = CANVAS_SIZE;

    this._loadMasks();
    this._loadTracks();
  }

  _strokeSrc(n) {
    return `./strokes/${encodeURIComponent(this.symbolId)}/${n}.svg`;
  }

  _loadMasks() {
    this._maskCanvases = Array(this.totalStrokes).fill(null);
    this._maskReady = Array.from({ length: this.totalStrokes }, (_, i) =>
      new Promise(resolve => {
        const img = new Image();
        img.onload = () => {
          const oc = document.createElement("canvas");
          oc.width = CANVAS_SIZE;
          oc.height = CANVAS_SIZE;
          oc.getContext("2d").drawImage(img, 0, 0, CANVAS_SIZE, CANVAS_SIZE);
          this._maskCanvases[i] = oc;
          resolve(oc);
        };
        img.onerror = () => resolve(null);
        img.src = this._strokeSrc(i + 1);
      })
    );
  }

  _loadTracks(autoPlay = false) {
    this._pendingAutoPlay = autoPlay;
    loadTracks().then(all => {
      this.tracks = all[this.symbol] ?? null;
      if (this._pendingAutoPlay) {
        this._pendingAutoPlay = false;
        this.play();
      }
    });
  }

  _cancelAnim() {
    if (this._rafId !== null) {
      cancelAnimationFrame(this._rafId);
      this._rafId = null;
    }
  }

  _animateStroke(strokeIdx, onDone) {
    if (!this.tracks) return;
    const pts = smooth(this.tracks[strokeIdx]);

    const startRAF = () => {
      const t0 = performance.now();
      const tick = (now) => {
        const prog = Math.min((now - t0) / DRAW_MS, 1);
        const upTo = Math.ceil(prog * pts.length);

        if (this._committedSnapshot) {
          this.ctx.putImageData(this._committedSnapshot, 0, 0);
        } else {
          this.ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
        }

        paintMasked(this.ctx, pts, upTo, this._maskCanvases[strokeIdx] ?? null, this._offCanvas);

        if (prog < 1) {
          this._rafId = requestAnimationFrame(tick);
        } else {
          this._rafId = null;
          onDone();
        }
      };
      this._rafId = requestAnimationFrame(tick);
    };

    if (this._maskCanvases[strokeIdx]) {
      startRAF();
    } else {
      // Mask not yet loaded — wait for it, then start only if still playing
      this._maskReady[strokeIdx]?.then(() => {
        if (this.playing) startRAF();
      });
    }
  }

  _showUpTo(n, animate) {
    if (!this.tracks) return;
    this._cancelAnim();
    this.ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    if (n === 0) { this._committedSnapshot = null; return; }

    const strokeIdx = n - 1;
    for (let s = 0; s < strokeIdx && s < this.tracks.length; s++) {
      paintMasked(this.ctx, smooth(this.tracks[s]), Infinity, this._maskCanvases[s] ?? null, this._offCanvas);
    }
    if (strokeIdx >= this.tracks.length) return;

    if (animate) {
      this._committedSnapshot = this.ctx.getImageData(0, 0, CANVAS_SIZE, CANVAS_SIZE);
      this._animateStroke(strokeIdx, () => {
        if (this.playing) {
          const next = this.current + 1;
          if (next <= this.totalStrokes) {
            this.current = next;
            this.onTick?.(this.current);
            setTimeout(() => this._showUpTo(next, true), 150);
          } else {
            this.playing = false;
            this.onTick?.(this.current);
          }
        }
      });
    } else {
      this._committedSnapshot = null;
      paintMasked(this.ctx, smooth(this.tracks[strokeIdx]), Infinity, this._maskCanvases[strokeIdx] ?? null, this._offCanvas);
    }
  }

  play() {
    if (!this.tracks) {
      this._pendingAutoPlay = true;
      return;
    }
    this._cancelAnim();
    this.playing = true;
    this.current = 1;
    this._committedSnapshot = null;
    this.ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    this.onTick?.(this.current);
    setTimeout(() => this._showUpTo(1, true), 10);
  }

  // Reset for a new symbol without re-creating the object
  reset(symbol, symbolId, totalStrokes) {
    this._cancelAnim();
    this.symbol = symbol;
    this.symbolId = symbolId;
    this.totalStrokes = totalStrokes;
    this.current = 0;
    this.playing = false;
    this._committedSnapshot = null;
    this.ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    this._loadMasks();
    this.onTick?.(0);
    // Always re-read from cache for new symbol key
    this.tracks = _tracksCache ? (_tracksCache[symbol] ?? null) : null;
    if (this.tracks) {
      this.play();
    } else {
      this._loadTracks(true);
    }
  }
}
