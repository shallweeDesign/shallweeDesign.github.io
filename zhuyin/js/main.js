import { zhuyinSymbols, symbolById, SYMBOL_EMOJI } from "./data.js";
import { StrokeAnimator } from "./stroke.js";
import { playSymbolAudio, speak } from "./audio.js";

// ── helpers ────────────────────────────────────────────────────────────────────

// onTap: touchstart (passive) + click — for WAV audio (touchstart = valid iOS gesture)
function onTap(el, handler) {
  let lastFired = 0;
  const fire = () => {
    const now = Date.now();
    if (now - lastFired > 350) { lastFired = now; handler(); }
  };
  el.addEventListener("touchstart", fire, { passive: true });
  el.addEventListener("click", fire);
}

// onSpeak: touchend + click — iOS only accepts touchend/click for speechSynthesis
function onSpeak(el, handler) {
  let lastFired = 0;
  const fire = () => {
    const now = Date.now();
    if (now - lastFired > 350) { lastFired = now; handler(); }
  };
  el.addEventListener("touchend", fire, { passive: true });
  el.addEventListener("click", fire);
}

function parseZhuyin(syllable) {
  const tone = ["ˊ", "ˇ", "ˋ", "˙"].find(t => syllable.includes(t)) ?? "";
  const without = syllable.replace(/[ˊˇˋ˙]/g, "");
  const symbols = [...without].filter(Boolean);
  return { symbols: symbols.length ? symbols : [syllable], tone };
}

// Build the zhuyin column with absolute-positioned elements.
// Column height = 30px (matches char-glyph font-size).
// top values are percentages so they scale on small screens.
// Spec layout (px / 30 = %):
//   1 sym : sym@11px(36.67%) tone@9px(30%)
//   2 sym : sym1@6px(20%) sym2@17px(56.67%) tone@15px(50%)
//   3 sym : sym1@3px(10%) sym2@12px(40%) sym3@21px(70%) tone@18px(60%)
function zhuyinColHTML(symbols, tone) {
  const n = symbols.length;
  const symTops =
    n === 1 ? [36.667] :
    n === 2 ? [20, 56.667] :
              [10, 40, 70];
  const tonePct =
    n === 1 ? 30 :
    n === 2 ? 50 :
              60;

  const syms = symbols.slice(0, 3).map((s, i) =>
    `<span class="zy-sym" style="top:${symTops[i].toFixed(3)}%">${s}</span>`
  ).join("");

  const toneEl = tone
    ? `<span class="zy-tone" style="top:${tonePct}%">${tone}</span>`
    : "";

  return `<div class="zhuyin-col">${syms}${toneEl}</div>`;
}

// ── keyboard layout ─────────────────────────────────────────────────────────

const ROWS = [
  // Row 1
  ["b","d",{tone:"ˇ"},{tone:"ˋ"},"zh",{tone:"ˊ"},{tone:"˙"},"a","ai","an","er"],
  // Row 2
  ["p","t","g","j","ch","z","i","o","ei","en",null],
  // Row 3
  ["m","n","k","q","sh","c","u","e","ao","ang",null],
  // Row 4
  ["f","l","h","x","r","s","ü","ê","ou","eng",null],
];

// ── state ──────────────────────────────────────────────────────────────────────

let selected = zhuyinSymbols[0];

// ── display panel ──────────────────────────────────────────────────────────────

let animator = null;

function renderDisplayPanel() {
  const emoji = SYMBOL_EMOJI[selected.id] ?? "✨";
  const chars = [...selected.exampleWord];
  const syllables = selected.exampleZhuyin.split(" ");

  // Update stroke counter callback
  const strokeCounter = document.getElementById("stroke-counter");

  // Reset stroke animator for new symbol
  if (animator) {
    animator.reset(selected.symbol, selected.id, selected.strokeCount);
  }
  if (strokeCounter) strokeCounter.textContent = `共 ${selected.strokeCount} 筆`;

  // Update emoji
  const emojiEl = document.getElementById("example-emoji");
  if (emojiEl) emojiEl.textContent = emoji;

  // Update example word annotation
  const wordEl = document.getElementById("example-word");
  if (wordEl) {
    wordEl.innerHTML = chars.map((char, i) => {
      const { symbols, tone } = parseZhuyin(syllables[i] ?? "");
      return `<div class="char-col">
        <span class="char-glyph">${char}</span>
        ${zhuyinColHTML(symbols, tone)}
      </div>`;
    }).join("");
  }
}

// ── keyboard rendering ─────────────────────────────────────────────────────────

function renderKeyboard() {
  const kb = document.getElementById("keyboard");
  if (!kb) return;
  kb.innerHTML = "";

  for (const row of ROWS) {
    for (const key of row) {
      if (key === null) {
        const spacer = document.createElement("div");
        kb.appendChild(spacer);
        continue;
      }

      if (typeof key === "object" && key.tone) {
        const el = document.createElement("div");
        el.className = "key key--tone";
        el.textContent = key.tone;
        kb.appendChild(el);
        continue;
      }

      const id = key;
      const item = symbolById[id];
      if (!item) continue;

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `key key--symbol key--${item.category}`;
      btn.dataset.id = id;
      btn.setAttribute("aria-label", item.symbol);
      btn.innerHTML = `<span class="key-symbol">${item.symbol}</span><span class="key-label">${item.pinyin}</span>`;

      if (selected.id === id) btn.classList.add("key--active");

      onTap(btn, () => selectSymbol(item));
      kb.appendChild(btn);
    }
  }

  // Row 5: spacebar
  const spacebar = document.createElement("div");
  spacebar.className = "key key--spacebar";
  spacebar.innerHTML = `<span>空白</span><span class="spacebar-sep">=</span><span>一聲（陰平）</span>`;
  kb.appendChild(spacebar);
}

function updateKeyboardSelection() {
  document.querySelectorAll(".key--symbol").forEach(btn => {
    btn.classList.toggle("key--active", btn.dataset.id === selected.id);
  });
}

// ── select symbol ──────────────────────────────────────────────────────────────

function selectSymbol(item) {
  selected = item;
  playSymbolAudio(item.id, item.symbol);
  renderGhostStrokes();
  renderDisplayPanel();
  updateKeyboardSelection();
  resetStrokeZoom();
}

// ── stroke pinch-to-zoom ───────────────────────────────────────────────────────

let _strokeZoom = 1;

function resetStrokeZoom() {
  _strokeZoom = 1;
  const el = document.getElementById("stroke-zoom");
  if (el) { el.style.transform = ""; el.style.transformOrigin = "center center"; }
}

// ── ghost strokes (position guide) ────────────────────────────────────────────

function renderGhostStrokes() {
  const container = document.getElementById("ghost-strokes");
  if (!container) return;
  container.innerHTML = "";
  for (let i = 1; i <= selected.strokeCount; i++) {
    const img = document.createElement("img");
    img.src = `./strokes/${encodeURIComponent(selected.id)}/${i}.svg`;
    img.alt = "";
    img.setAttribute("aria-hidden", "true");
    img.className = "ghost-stroke";
    container.appendChild(img);
  }
}

// ── init ───────────────────────────────────────────────────────────────────────

function init() {
  const canvas = document.getElementById("stroke-canvas");
  if (canvas) {
    animator = new StrokeAnimator(
      canvas,
      selected.symbol,
      selected.id,
      selected.strokeCount,
      (current) => {
        const counter = document.getElementById("stroke-counter");
        if (counter) {
          counter.textContent = current === 0
            ? `共 ${selected.strokeCount} 筆`
            : `${current} / ${selected.strokeCount}`;
        }
      }
    );

    const strokeBtn = document.getElementById("stroke-btn");
    const strokeZoom = document.getElementById("stroke-zoom");
    if (strokeBtn && strokeZoom) {
      let _pinchStartDist = 0;
      let _pinchStartZoom = 1;
      let _lastTap = 0;
      let _lastFired = 0;

      const playStroke = () => {
        const now = Date.now();
        if (now - _lastFired > 350) {
          _lastFired = now;
          animator.play();
          playSymbolAudio(selected.id, selected.symbol);
        }
      };

      strokeBtn.addEventListener("touchstart", (e) => {
        if (e.touches.length === 2) {
          const t0 = e.touches[0], t1 = e.touches[1];
          _pinchStartDist = Math.hypot(t1.clientX - t0.clientX, t1.clientY - t0.clientY);
          _pinchStartZoom = _strokeZoom;
          // Zoom origin = midpoint of two fingers
          const rect = strokeBtn.getBoundingClientRect();
          const ox = ((t0.clientX + t1.clientX) / 2 - rect.left) / rect.width * 100;
          const oy = ((t0.clientY + t1.clientY) / 2 - rect.top) / rect.height * 100;
          strokeZoom.style.transformOrigin = `${ox.toFixed(1)}% ${oy.toFixed(1)}%`;
        } else if (e.touches.length === 1) {
          const now = Date.now();
          // Double-tap resets zoom
          if (now - _lastTap < 280 && _strokeZoom > 1) {
            resetStrokeZoom();
            _lastTap = 0;
            return;
          }
          _lastTap = now;
          playStroke();
        }
      }, { passive: true });

      strokeBtn.addEventListener("touchmove", (e) => {
        if (e.touches.length === 2) {
          e.preventDefault();
          const t0 = e.touches[0], t1 = e.touches[1];
          const dist = Math.hypot(t1.clientX - t0.clientX, t1.clientY - t0.clientY);
          _strokeZoom = Math.max(1, Math.min(5, _pinchStartZoom * dist / _pinchStartDist));
          strokeZoom.style.transform = `scale(${_strokeZoom.toFixed(3)})`;
        }
      }, { passive: false });

      // Desktop fallback
      strokeBtn.addEventListener("click", playStroke);
    }
  }

  // Word pronunciation button — uses onSpeak (touchend) for iOS speechSynthesis
  const wordBtn = document.getElementById("word-btn");
  if (wordBtn) {
    onSpeak(wordBtn, () => speak(selected.exampleWord));
  }

  renderDisplayPanel();
  renderGhostStrokes();
  renderKeyboard();
}

document.addEventListener("DOMContentLoaded", init);
