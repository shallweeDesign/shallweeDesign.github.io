import { zhuyinSymbols, combinedFinals } from "./data.js";
import { StrokeAnimator } from "./stroke.js";
import { playSymbolAudio, speak } from "./audio.js";
import { mouthShapeSVG } from "./mouth.js";

function onTap(el, handler) {
  let lastFired = 0;
  const fire = () => {
    const now = Date.now();
    if (now - lastFired > 350) { lastFired = now; handler(); }
  };
  el.addEventListener("touchstart", fire, { passive: true });
  el.addEventListener("click", fire);
}

function onSpeak(el, handler) {
  let lastFired = 0;
  const fire = () => {
    const now = Date.now();
    if (now - lastFired > 350) { lastFired = now; handler(); }
  };
  el.addEventListener("touchend", fire, { passive: true });
  el.addEventListener("click", fire);
}

// ── filter state ───────────────────────────────────────────────────────────────

let activeFilter = "all";
const FILTERS = [
  { key: "all",       label: "全部" },
  { key: "consonant", label: "聲符（21）" },
  { key: "vowel",     label: "韻符（16）" },
  { key: "combined",  label: "結合韻（20）" },
];

// ── symbol card ────────────────────────────────────────────────────────────────

function createSymbolCard(item) {
  const isConsonant = item.category === "consonant";
  const card = document.createElement("div");
  card.className = `sym-card sym-card--${item.category}`;

  // group chip
  const chip = document.createElement("span");
  chip.className = "sym-chip";
  chip.textContent = item.group;
  card.appendChild(chip);

  // main symbol button
  const symBtn = document.createElement("button");
  symBtn.type = "button";
  symBtn.className = "sym-glyph";
  symBtn.setAttribute("aria-label", `播放「${item.symbol}」的發音`);
  symBtn.textContent = item.symbol;
  onTap(symBtn, () => playSymbolAudio(item.id, item.symbol));
  card.appendChild(symBtn);

  // pinyin
  const py = document.createElement("span");
  py.className = "sym-pinyin";
  py.textContent = item.pinyin;
  card.appendChild(py);

  // ── mouth toggle ────────────────────────────────────────────────────────────
  const mouthToggle = document.createElement("button");
  mouthToggle.type = "button";
  mouthToggle.className = "sym-toggle";
  mouthToggle.textContent = "看嘴型 ▼";
  card.appendChild(mouthToggle);

  const mouthSection = document.createElement("div");
  mouthSection.className = "sym-mouth hidden";
  mouthSection.innerHTML = `
    ${mouthShapeSVG(item.lipShape, item.tonguePosition)}
    <p class="sym-mouth-note">${item.mouthNote}</p>
  `;
  card.appendChild(mouthSection);

  let mouthOpen = false;
  onTap(mouthToggle, () => {
    mouthOpen = !mouthOpen;
    mouthToggle.textContent = mouthOpen ? "隱藏嘴型 ▲" : "看嘴型 ▼";
    mouthSection.classList.toggle("hidden", !mouthOpen);
  });

  // ── stroke toggle ───────────────────────────────────────────────────────────
  const strokeToggle = document.createElement("button");
  strokeToggle.type = "button";
  strokeToggle.className = "sym-toggle";
  strokeToggle.textContent = "看筆順 ▼";
  card.appendChild(strokeToggle);

  const strokeSection = document.createElement("div");
  strokeSection.className = "sym-stroke hidden";

  const strokeWrap = document.createElement("div");
  strokeWrap.className = "sym-stroke-wrap";

  const ghostContainer = document.createElement("div");
  ghostContainer.className = "sym-ghost";
  for (let i = 1; i <= item.strokeCount; i++) {
    const img = document.createElement("img");
    img.src = `./strokes/${encodeURIComponent(item.id)}/${i}.svg`;
    img.alt = "";
    img.setAttribute("aria-hidden", "true");
    ghostContainer.appendChild(img);
  }

  const canvas = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  canvas.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  canvas.className = "sym-svg";

  const counter = document.createElement("span");
  counter.className = "sym-stroke-counter";
  counter.textContent = `共 ${item.strokeCount} 筆`;

  strokeWrap.appendChild(ghostContainer);
  strokeWrap.appendChild(canvas);
  strokeWrap.appendChild(counter);
  strokeSection.appendChild(strokeWrap);
  card.appendChild(strokeSection);

  let strokeOpen = false;
  let animator = null;

  onTap(strokeToggle, () => {
    strokeOpen = !strokeOpen;
    strokeToggle.textContent = strokeOpen ? "隱藏筆順 ▲" : "看筆順 ▼";
    strokeSection.classList.toggle("hidden", !strokeOpen);

    if (strokeOpen && !animator) {
      animator = new StrokeAnimator(canvas, item.symbol, item.id, item.strokeCount, (current) => {
        counter.textContent = current === 0
          ? `共 ${item.strokeCount} 筆`
          : `${current} / ${item.strokeCount}`;
      });
      animator._pendingAutoPlay = true;
    } else if (strokeOpen && animator) {
      animator.play();
    }
  });

  onTap(strokeWrap, () => animator?.play());

  // ── example word ────────────────────────────────────────────────────────────
  const wordBtn = document.createElement("button");
  wordBtn.type = "button";
  wordBtn.className = "sym-word-btn";
  wordBtn.setAttribute("aria-label", `播放範例詞「${item.exampleWord}」的發音`);
  wordBtn.innerHTML = `
    <span class="sym-word-zy">${item.exampleZhuyin}</span>
    <span class="sym-word-char">${item.exampleWord}</span>
    <span aria-hidden="true">🔊</span>
  `;
  onSpeak(wordBtn, () => speak(item.exampleWord));
  card.appendChild(wordBtn);

  return card;
}

// ── combined final card ────────────────────────────────────────────────────────

function createCombinedCard(item) {
  const card = document.createElement("div");
  card.className = "sym-card sym-card--combined";

  const symBtn = document.createElement("button");
  symBtn.type = "button";
  symBtn.className = "sym-glyph";
  symBtn.textContent = item.symbols;
  onSpeak(symBtn, () => speak(item.exampleWord));
  card.appendChild(symBtn);

  const py = document.createElement("span");
  py.className = "sym-pinyin";
  py.textContent = item.pinyin;
  card.appendChild(py);

  const wordBtn = document.createElement("button");
  wordBtn.type = "button";
  wordBtn.className = "sym-word-btn";
  wordBtn.innerHTML = `
    <span class="sym-word-zy">${item.exampleZhuyin}</span>
    <span class="sym-word-char">${item.exampleWord}</span>
    <span aria-hidden="true">🔊</span>
  `;
  onSpeak(wordBtn, () => speak(item.exampleWord));
  card.appendChild(wordBtn);

  return card;
}

// ── group divider ──────────────────────────────────────────────────────────────

function createDivider(label, type) {
  const div = document.createElement("div");
  div.className = "sym-group-divider";
  div.innerHTML = `<span class="sym-group-label ${type ? "sym-group-label--" + type : ""}">${label}</span>`;
  return div;
}

function createCategoryDivider(category) {
  const labels = { consonant: "聲符", vowel: "韻符" };
  const div = document.createElement("div");
  div.className = `sym-cat-divider sym-cat-divider--${category}`;
  div.innerHTML = `<div class="sym-cat-line"></div><span class="sym-cat-badge">${labels[category]}</span><div class="sym-cat-line"></div>`;
  return div;
}

// ── render grid ────────────────────────────────────────────────────────────────

function renderGrid() {
  const grid = document.getElementById("symbol-grid");
  if (!grid) return;
  grid.innerHTML = "";

  if (activeFilter === "combined") {
    combinedFinals.forEach(item => grid.appendChild(createCombinedCard(item)));
    return;
  }

  const items = activeFilter === "all"
    ? zhuyinSymbols
    : zhuyinSymbols.filter(s => s.category === activeFilter);

  let lastGroup = null;
  let lastCategory = null;

  items.forEach(item => {
    if (item.category !== lastCategory && lastCategory !== null) {
      grid.appendChild(createCategoryDivider(item.category));
    }
    if (item.group !== lastGroup) {
      grid.appendChild(createDivider(item.group));
    }
    grid.appendChild(createSymbolCard(item));
    lastGroup = item.group;
    lastCategory = item.category;
  });
}

// ── filter tabs ────────────────────────────────────────────────────────────────

function renderFilters() {
  const nav = document.getElementById("filter-nav");
  if (!nav) return;

  FILTERS.forEach(({ key, label }) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `filter-btn ${key === activeFilter ? "filter-btn--active" : ""}`;
    btn.dataset.filter = key;
    btn.textContent = label;
    onTap(btn, () => {
      activeFilter = key;
      document.querySelectorAll(".filter-btn").forEach(b => {
        b.classList.toggle("filter-btn--active", b.dataset.filter === key);
      });
      renderGrid();
    });
    nav.appendChild(btn);
  });
}

// ── init ───────────────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  renderFilters();
  renderGrid();
});
