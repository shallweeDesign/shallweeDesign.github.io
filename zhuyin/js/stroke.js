// SVG stroke animation — resolution-independent, scales without aliasing.
// Mask shapes are inlined as <path> elements (not <image> refs) so the browser
// renders them as live vectors — no rasterization, no hard edges at any zoom.

const SVG_NS = "http://www.w3.org/2000/svg";
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

function mkSVG(tag, attrs) {
  const el = document.createElementNS(SVG_NS, tag);
  if (attrs) for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
  return el;
}

// Extract all <path d="..."> strings from an SVG text.
function parsePaths(svgText) {
  const doc = new DOMParser().parseFromString(svgText, "image/svg+xml");
  return [...doc.querySelectorAll("path")]
    .map(p => p.getAttribute("d"))
    .filter(Boolean);
}

export class StrokeAnimator {
  /**
   * @param {SVGSVGElement} svg
   * @param {string} symbol      — Bopomofo char (e.g. "ㄅ"), used as track key
   * @param {string} symbolId    — romanized id (e.g. "b"), used for file paths
   * @param {number} totalStrokes
   * @param {(current: number) => void} [onTick]
   */
  constructor(svg, symbol, symbolId, totalStrokes, onTick) {
    this.svg = svg;
    svg.setAttribute("viewBox", "0 0 2048 2048");

    this.symbol = symbol;
    this.symbolId = symbolId;
    this.totalStrokes = totalStrokes;
    this.onTick = onTick ?? null;

    this.tracks = null;
    this.current = 0;
    this.playing = false;
    this._rafId = null;
    this._animGroup = null;

    this._defs = mkSVG("defs");
    svg.appendChild(this._defs);

    // null = not yet fetched; [] = fetched but no paths; [...] = ready
    this._pathData = Array(totalStrokes).fill(null);
    this._pathReady = this._preloadPaths();

    this._loadTracks();
  }

  _strokeSrc(n) {
    return `./strokes/${encodeURIComponent(this.symbolId)}/${n}.svg`;
  }

  // Fetch each stroke SVG and cache its path data for inline mask use.
  _preloadPaths() {
    return Array.from({ length: this.totalStrokes }, (_, i) =>
      fetch(this._strokeSrc(i + 1))
        .then(r => r.text())
        .then(text => {
          const paths = parsePaths(text);
          this._pathData[i] = paths.length ? paths : [];
          return this._pathData[i];
        })
        .catch(() => { this._pathData[i] = []; return []; })
    );
  }

  // Build or reuse a mask for the given stroke index.
  // Inline paths → browser renders them as vectors → smooth anti-aliased edges.
  // Falls back to <image> only if path data failed to load.
  _ensureMask(strokeIdx) {
    const id = `_zm_${strokeIdx}`;
    if (!this._defs.querySelector(`#${id}`)) {
      const mask = mkSVG("mask", { id });
      mask.setAttribute("style", "mask-type: alpha");
      const paths = this._pathData[strokeIdx];
      if (paths?.length) {
        for (const d of paths) {
          mask.appendChild(mkSVG("path", { d, fill: "black" }));
        }
      } else {
        // Fallback — still works but may have aliased edges at high zoom.
        mask.appendChild(mkSVG("image", {
          href: this._strokeSrc(strokeIdx + 1),
          width: "2048", height: "2048",
        }));
      }
      this._defs.appendChild(mask);
    }
    return id;
  }

  _addCommitted(strokeIdx) {
    const paths = this._pathData[strokeIdx];
    if (paths?.length) {
      // Render directly as <path> with outline — no mask needed, vector edges, clean outline.
      // paint-order:stroke fill draws the outline behind the fill, so only the outer
      // half of stroke-width is visible as the border.
      for (const d of paths) {
        this.svg.appendChild(mkSVG("path", { d, fill: INK }));
      }
    } else {
      // Fallback when path data unavailable (fetch failed).
      const maskId = this._ensureMask(strokeIdx);
      this.svg.appendChild(mkSVG("rect", {
        x: "0", y: "0", width: "2048", height: "2048",
        fill: INK,
        mask: `url(#${maskId})`,
      }));
    }
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
    if (this._animGroup) {
      this._animGroup.remove();
      this._animGroup = null;
    }
  }

  _clearSVG() {
    for (const child of [...this.svg.children]) {
      if (child !== this._defs) child.remove();
    }
  }

  _animateStroke(strokeIdx, onDone) {
    if (!this.tracks) return;
    const pts = smooth(this.tracks[strokeIdx]);

    const startRAF = () => {
      const maskId = this._ensureMask(strokeIdx);

      const g = mkSVG("g", { mask: `url(#${maskId})` });
      this.svg.appendChild(g);
      this._animGroup = g;

      let lastUpTo = 0;
      const t0 = performance.now();

      const tick = (now) => {
        const prog = Math.min((now - t0) / DRAW_MS, 1);
        const upTo = Math.ceil(prog * pts.length);

        // Append only new elements — incremental, no clear/rebuild.
        for (let i = lastUpTo; i < upTo && i < pts.length; i++) {
          const [x, y, sz] = pts[i];
          const r = (sz / 2) * BRUSH_SCALE;

          if (i > 0) {
            const [px, py, ps] = pts[i - 1];
            g.appendChild(mkSVG("line", {
              x1: px.toFixed(1), y1: py.toFixed(1),
              x2: x.toFixed(1),  y2: y.toFixed(1),
              stroke: INK,
              "stroke-width": (((ps + sz) / 2) * BRUSH_SCALE).toFixed(1),
              "stroke-linecap": "round",
            }));
          }
          g.appendChild(mkSVG("circle", {
            cx: x.toFixed(1), cy: y.toFixed(1),
            r: r.toFixed(1),
            fill: INK,
          }));
        }
        lastUpTo = upTo;

        if (prog < 1) {
          this._rafId = requestAnimationFrame(tick);
        } else {
          this._rafId = null;
          this._animGroup = null;
          g.remove();
          this._addCommitted(strokeIdx);
          onDone();
        }
      };
      this._rafId = requestAnimationFrame(tick);
    };

    // Wait for inline path data before starting — ensures the mask uses a
    // vector path, not the fallback <image>, so edges are properly anti-aliased.
    if (this._pathData[strokeIdx] !== null) {
      startRAF();
    } else {
      this._pathReady[strokeIdx]?.then(() => {
        if (this.playing) startRAF();
      });
    }
  }

  _showUpTo(n, animate) {
    if (!this.tracks) return;
    this._cancelAnim();
    this._clearSVG();
    if (n === 0) return;

    for (let s = 0; s < n - 1 && s < this.tracks.length; s++) {
      this._addCommitted(s);
    }
    const strokeIdx = n - 1;
    if (strokeIdx >= this.tracks.length) return;

    if (animate) {
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
      this._addCommitted(strokeIdx);
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
    this._clearSVG();
    this.onTick?.(this.current);
    setTimeout(() => this._showUpTo(1, true), 10);
  }

  // Reset for a new symbol without re-creating the object.
  reset(symbol, symbolId, totalStrokes) {
    this._cancelAnim();
    this.symbol = symbol;
    this.symbolId = symbolId;
    this.totalStrokes = totalStrokes;
    this.current = 0;
    this.playing = false;
    this._clearSVG();
    for (const mask of [...this._defs.querySelectorAll("mask")]) mask.remove();
    this._pathData = Array(totalStrokes).fill(null);
    this._pathReady = this._preloadPaths();
    this.onTick?.(0);
    this.tracks = _tracksCache ? (_tracksCache[symbol] ?? null) : null;
    if (this.tracks) {
      this.play();
    } else {
      this._loadTracks(true);
    }
  }
}
