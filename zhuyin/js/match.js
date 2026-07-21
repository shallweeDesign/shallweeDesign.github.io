// Matching game: cards stay face-down until dragged — tapping one only plays
// its pronunciation as a listening hint, it never reveals the glyph. The
// real move is dragging a card into the fixed 配對區 (two slots): the first
// card flips face-up the moment it lands in slot 1, the second flips up and
// immediately settles the verdict when it lands in slot 2 — a correct pair
// scores and vanishes, a wrong one bounces back to its board position after
// a beat. Position memory only breaks for cards that are matched and
// removed — everything else keeps its board slot the whole level.

import { playSymbolAudio } from "./audio.js";
import { GAME_ITEMS } from "./levels.js";
import { MATCH_LEVELS } from "./match-levels.js";

const $ = (id) => document.getElementById(id);
const DRAG_THRESHOLD = 8;  // px of pointer movement before a tap becomes a drag
const JUDGE_DELAY = 350;   // let the 2nd card's flip + sound register before the verdict
const MISMATCH_DELAY = 700; // hold both symbols visible before bouncing back

// ── state ──────────────────────────────────────────────────────────────────────

let levelIndex = 0;
let cards = [];       // [{uid, id, el, state, zoneSlot, offset, homeRect}]
let zone = { slot1: null, slot2: null };
let mistakes = 0;
let matchedPairs = 0;
let totalPairs = 0;
let score = 0;
let busy = false;     // true while a placed pair is revealing/settling — input locked

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
  const card = { uid, id, el, state: "down", zoneSlot: null, offset: { x: 0, y: 0 }, homeRect: null };
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
  zone = { slot1: null, slot2: null };
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

  // home positions must be read after the grid has laid the cards out —
  // every later move is a translate() computed relative to this rect, so
  // other cards never reflow when one leaves for the zone
  requestAnimationFrame(() => {
    for (const card of cards) card.homeRect = card.el.getBoundingClientRect();
  });
}

// ── card flip + position helpers ─────────────────────────────────────────────────

function hear(card) {
  playSymbolAudio(card.id, GAME_ITEMS[card.id].exampleWord);
}

function flipUp(card) {
  card.state = "up";
  card.el.classList.add("match-card--up");
  hear(card);
}

function flipDown(card) {
  card.state = "down";
  card.el.classList.remove("match-card--up");
}

function setOffset(card, x, y) {
  card.offset = { x, y };
  card.el.style.transform = `translate(${x}px, ${y}px)`;
}

function moveToRect(card, targetRect) {
  const home = card.homeRect;
  const x = targetRect.left + (targetRect.width - home.width) / 2 - home.left;
  const y = targetRect.top + (targetRect.height - home.height) / 2 - home.top;
  setOffset(card, x, y);
}

function returnToBoard(card) {
  setOffset(card, 0, 0);
}

// Same as returnToBoard, but with a springy overshoot so a wrong guess
// reads as "bouncing back" rather than just sliding home.
function bounceHome(card) {
  const el = card.el;
  el.classList.add("match-card--bounce");
  el.addEventListener("transitionend", () => el.classList.remove("match-card--bounce"), { once: true });
  returnToBoard(card);
}

// ── matching zone (配對區) ───────────────────────────────────────────────────────

function placeInZone(card) {
  if (!zone.slot1) {
    zone.slot1 = card;
    card.zoneSlot = 1;
    flipUp(card); // reveal + play sound the moment it lands
    moveToRect(card, $("match-zone-slot-1").getBoundingClientRect());
    return;
  }
  zone.slot2 = card;
  card.zoneSlot = 2;
  flipUp(card);
  moveToRect(card, $("match-zone-slot-2").getBoundingClientRect());
  resolvePair(zone.slot1, zone.slot2);
}

function removeFromZone(card) {
  if (zone.slot1 === card) zone.slot1 = null;
  if (zone.slot2 === card) zone.slot2 = null;
  card.zoneSlot = null;
}

function lockMatched(card) {
  card.state = "matched";
  card.el.classList.add("match-card--matched");
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
  busy = true;
  setTimeout(() => finishResolve(a, b), JUDGE_DELAY);
}

function finishResolve(a, b) {
  if (a.id === b.id) {
    matchedPairs += 1;
    score += 10;
    lockMatched(a);
    lockMatched(b);
    flyToTray(a);
    zone = { slot1: null, slot2: null };
    busy = false;
    renderHud();
    if (matchedPairs >= totalPairs) setTimeout(levelComplete, 500);
  } else {
    mistakes += 1;
    setTimeout(() => {
      flipDown(a);
      flipDown(b);
      removeFromZone(a);
      removeFromZone(b);
      bounceHome(a);
      bounceHome(b);
      zone = { slot1: null, slot2: null };
      busy = false;
    }, MISMATCH_DELAY);
  }
}

// ── pointer drag (falls back to a plain tap when movement < threshold) ──────────

function onPointerDown(e, card) {
  if (busy || card.state === "matched") return;

  const startX = e.clientX, startY = e.clientY;
  const baseX = card.offset.x, baseY = card.offset.y;
  const el = card.el;
  let dragging = false;
  el.setPointerCapture(e.pointerId);

  const onMove = (ev) => {
    const dx = ev.clientX - startX, dy = ev.clientY - startY;
    if (!dragging && Math.hypot(dx, dy) > DRAG_THRESHOLD) {
      dragging = true;
      el.classList.add("match-card--dragging");
      hear(card); // picking the card up gives the same audio hint as a tap
    }
    if (dragging) el.style.transform = `translate(${baseX + dx}px, ${baseY + dy}px)`;
  };

  const onUp = (ev) => {
    el.releasePointerCapture(e.pointerId);
    el.removeEventListener("pointermove", onMove);
    el.removeEventListener("pointerup", onUp);
    el.removeEventListener("pointercancel", onUp);

    if (!dragging) {
      hear(card); // tap = listen only, never reveals the glyph
      return;
    }
    el.classList.remove("match-card--dragging");

    // the dragged card sits directly under the pointer, so it would
    // otherwise hit-test itself — exclude it for this one lookup
    el.style.pointerEvents = "none";
    const overZone = document.elementFromPoint(ev.clientX, ev.clientY)?.closest(".match-zone");
    el.style.pointerEvents = "";

    if (overZone && !busy && !card.zoneSlot) {
      placeInZone(card);
    } else {
      // dropped outside the zone, zone busy, or re-dragging an already-
      // placed card — always settle back to the board (simplest, most
      // predictable outcome for a kid to reason about)
      removeFromZone(card);
      returnToBoard(card);
    }
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
