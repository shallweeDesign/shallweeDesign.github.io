// Matching game: flip a card to hear its sound, then flip (or drag onto) a
// second card — a correct pair flies into the 配對區 tray and scores.
// Both tap-tap and drag-to-drop resolve through the same `pending` state
// machine, so either input style plays the same way.

import { playSymbolAudio } from "./audio.js";
import { GAME_ITEMS } from "./levels.js";
import { MATCH_LEVELS } from "./match-levels.js";

const $ = (id) => document.getElementById(id);
const DRAG_THRESHOLD = 8; // px of pointer movement before a tap becomes a drag
const MISMATCH_DELAY = 850;

// ── state ──────────────────────────────────────────────────────────────────────

let levelIndex = 0;
let cards = [];          // [{uid, id, el, state}] state: "down" | "up" | "matched"
let pending = null;      // the one flipped-but-unmatched card, or null
let mistakes = 0;
let matchedPairs = 0;
let totalPairs = 0;
let score = 0;
let busy = false;        // true during a mismatch's flip-back delay (input locked)

// ── progress (stars per level, localStorage) ────────────────────────────────────

const PROGRESS_KEY = "zhuyin-match-progress";

function loadProgress() {
  try { return JSON.parse(localStorage.getItem(PROGRESS_KEY)) ?? {}; }
  catch { return {}; }
}

function saveStars(idx, stars) {
  const p = loadProgress();
  p[idx] = Math.max(p[idx] ?? 0, stars);
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(p));
}

function isUnlocked(idx, progress) {
  return idx === 0 || (progress[idx - 1] ?? 0) > 0;
}

// ── level select ───────────────────────────────────────────────────────────────

function showLevelSelect() {
  $("match-board").innerHTML = "";
  $("match-tray").innerHTML = "";
  $("match-overlay").hidden = true;

  const progress = loadProgress();
  $("match-level-grid").innerHTML = MATCH_LEVELS.map((lv, i) => {
    const unlocked = isUnlocked(i, progress);
    const stars = progress[i] ?? 0;
    const badge = stars > 0 ? "⭐".repeat(stars) : (unlocked ? "&nbsp;" : "🔒");
    return `<button type="button" class="level-btn${unlocked ? "" : " level-btn--locked"}"
      data-level="${i}" ${unlocked ? "" : "disabled"}>
      <span class="level-btn__num">${i + 1}</span>
      <span class="level-btn__name">${lv.name}</span>
      <span class="level-btn__stars">${badge}</span>
    </button>`;
  }).join("");

  $("match-level-grid").querySelectorAll("button[data-level]").forEach(btn => {
    btn.addEventListener("click", () => startLevel(Number(btn.dataset.level)));
  });
  $("match-level-select").hidden = false;
  $("match-level-label").textContent = "符號記憶配對";
}

// ── HUD ────────────────────────────────────────────────────────────────────────

function renderHud() {
  $("match-progress").textContent = `${matchedPairs}/${totalPairs}`;
  $("match-score").textContent = score;
}

// ── board ──────────────────────────────────────────────────────────────────────

function shuffled(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function gridColumns(cardCount) {
  return cardCount <= 6 ? 3 : 4; // 3–4 pairs → 3 cols; 5+ pairs → 4 cols
}

function buildCard(id, uid) {
  const item = GAME_ITEMS[id];
  const el = document.createElement("button");
  el.type = "button";
  el.className = "match-card";
  el.innerHTML = `
    <span class="match-card__face match-card__face--back" aria-hidden="true">🧩</span>
    <span class="match-card__face match-card__face--front">${item.symbol}</span>
  `;
  const card = { uid, id, el, state: "down" };
  el.addEventListener("pointerdown", (e) => onPointerDown(e, card));
  return card;
}

function startLevel(idx) {
  levelIndex = idx;
  const level = MATCH_LEVELS[idx];
  totalPairs = level.symbols.length;
  matchedPairs = 0;
  mistakes = 0;
  score = 0;
  pending = null;
  busy = false;

  const deck = shuffled(level.symbols.flatMap((id, i) => [
    { id, uid: `${i}a` },
    { id, uid: `${i}b` },
  ]));

  const board = $("match-board");
  board.innerHTML = "";
  board.style.setProperty("--cols", gridColumns(deck.length));
  $("match-tray").innerHTML = "";

  cards = deck.map(({ id, uid }) => {
    const card = buildCard(id, uid);
    board.appendChild(card.el);
    return card;
  });

  $("match-level-label").textContent = `第 ${idx + 1} 關｜${level.name}`;
  $("match-level-select").hidden = true;
  $("match-overlay").hidden = true;
  renderHud();
}

// ── card flip / flow ─────────────────────────────────────────────────────────────

function flipUp(card) {
  card.state = "up";
  card.el.classList.add("match-card--up");
  playSymbolAudio(card.id, GAME_ITEMS[card.id].exampleWord);
}

function flipDown(card) {
  card.state = "down";
  card.el.classList.remove("match-card--up");
}

function lockMatched(a, b) {
  for (const c of [a, b]) {
    c.state = "matched";
    c.el.classList.add("match-card--matched");
  }
  flyToTray(a);
}

function flyToTray(card) {
  const tray = $("match-tray");
  const chip = document.createElement("span");
  chip.className = "match-tray__chip";
  chip.textContent = GAME_ITEMS[card.id].symbol;
  tray.appendChild(chip);
  requestAnimationFrame(() => chip.classList.add("match-tray__chip--in"));
}

function resolvePair(a, b) {
  if (a.id === b.id) {
    matchedPairs += 1;
    score += 10;
    lockMatched(a, b);
    renderHud();
    if (matchedPairs >= totalPairs) {
      setTimeout(levelComplete, 500);
    }
  } else {
    mistakes += 1;
    busy = true;
    setTimeout(() => {
      flipDown(a);
      flipDown(b);
      busy = false;
    }, MISMATCH_DELAY);
  }
}

function selectCard(card) {
  if (busy || card.state === "matched") return;
  if (card.state === "up" && card === pending) {
    playSymbolAudio(card.id, GAME_ITEMS[card.id].exampleWord); // re-hear
    return;
  }
  if (!pending) {
    flipUp(card);
    pending = card;
    return;
  }
  const first = pending;
  pending = null;
  if (card.state === "down") flipUp(card);
  resolvePair(first, card);
}

// ── pointer drag (falls back to a plain tap when movement < threshold) ──────────

function onPointerDown(e, card) {
  if (busy || card.state === "matched") return;

  // A different card is already pending — the pairing intent is already
  // set, so this interaction is unambiguously "pick the second card".
  // Resolve immediately rather than starting a drag: dragging is only
  // meaningful for picking the *first* card (or for the single-gesture
  // drag-A-onto-B shortcut below, which starts here with pending===null).
  if (pending && pending !== card) {
    selectCard(card);
    return;
  }

  const startX = e.clientX, startY = e.clientY;
  const el = card.el;
  let dragging = false;
  el.setPointerCapture(e.pointerId);

  const onMove = (ev) => {
    const dx = ev.clientX - startX, dy = ev.clientY - startY;
    if (!dragging && Math.hypot(dx, dy) > DRAG_THRESHOLD) {
      dragging = true;
      if (card.state === "down") { flipUp(card); pending = card; } // pick-up
      el.classList.add("match-card--dragging");
    }
    if (dragging) el.style.transform = `translate(${dx}px, ${dy}px)`;
  };

  const onUp = (ev) => {
    el.releasePointerCapture(e.pointerId);
    el.removeEventListener("pointermove", onMove);
    el.removeEventListener("pointerup", onUp);
    el.removeEventListener("pointercancel", onUp);

    if (!dragging) {
      selectCard(card);
      return;
    }
    el.classList.remove("match-card--dragging");
    el.style.transform = "";
    const target = document.elementFromPoint(ev.clientX, ev.clientY)?.closest(".match-card");
    const targetCard = target && cards.find(c => c.el === target);
    if (targetCard && targetCard !== card && targetCard.state !== "matched") {
      selectCard(targetCard); // `pending` is already `card`, set in onMove
    }
    // dropped nowhere useful — card just stays face-up as `pending`
  };

  el.addEventListener("pointermove", onMove);
  el.addEventListener("pointerup", onUp);
  el.addEventListener("pointercancel", onUp);
}

// ── overlay ────────────────────────────────────────────────────────────────────

function showOverlay({ title, desc, stars = 0, primary, secondary }) {
  $("match-overlay-title").textContent = title;
  $("match-overlay-desc").textContent = desc;
  const starsEl = $("match-overlay-stars");
  starsEl.hidden = stars === 0;
  starsEl.textContent = stars > 0 ? "⭐".repeat(stars) + "☆".repeat(3 - stars) : "";
  const btn = $("match-overlay-btn");
  btn.textContent = primary.label;
  btn.onclick = primary.onClick;
  const btn2 = $("match-overlay-btn2");
  if (secondary) {
    btn2.hidden = false;
    btn2.textContent = secondary.label;
    btn2.onclick = secondary.onClick;
  } else {
    btn2.hidden = true;
  }
  $("match-overlay").hidden = false;
}

function levelComplete() {
  const stars = mistakes === 0 ? 3 : mistakes <= Math.ceil(totalPairs / 3) ? 2 : 1;
  saveStars(levelIndex, stars);
  const hasNext = levelIndex + 1 < MATCH_LEVELS.length;
  showOverlay({
    title: `第 ${levelIndex + 1} 關完成！`,
    stars,
    desc: `配對 ${totalPairs} 組｜錯了 ${mistakes} 次｜得分 ${score}`,
    primary: hasNext
      ? { label: "下一關 ▶", onClick: () => startLevel(levelIndex + 1) }
      : { label: "再玩一次", onClick: () => startLevel(levelIndex) },
    secondary: { label: "回關卡選單", onClick: showLevelSelect },
  });
}

// ── init ───────────────────────────────────────────────────────────────────────

function init() {
  $("match-level-nav-btn").addEventListener("click", showLevelSelect);
  showLevelSelect();
}

document.addEventListener("DOMContentLoaded", init);
