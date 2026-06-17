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
      const allButLast = symbols.slice(0, -1);
      const lastSym = symbols[symbols.length - 1];
      return `<div class="char-col">
        <span class="char-glyph">${char}</span>
        <div class="zhuyin-col">
          ${allButLast.map(s => `<span class="zy-sym">${s}</span>`).join("")}
          ${lastSym !== undefined ? `<div class="zy-last">
            ${tone ? `<span class="zy-tone">${tone}</span>` : ""}
            <span class="zy-sym">${lastSym}</span>
          </div>` : ""}
        </div>
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
    if (strokeBtn) {
      onTap(strokeBtn, () => {
        animator.play();
        playSymbolAudio(selected.id, selected.symbol);
      });
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
