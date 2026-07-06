import { playSymbolAudio } from "./audio.js";
import { createRecognizer, matchesSymbol, isRecognitionSupported } from "./speech.js";
import { LEVELS, GAME_ITEMS } from "./levels.js";

const MAX_HEARTS = 3;
const PROGRESS_KEY = "zhuyin-game-progress";

// ── state ──────────────────────────────────────────────────────────────────────

let recognizer = null;
let playing = false;
let roundActive = false;   // ignore ASR results between rounds
let currentItem = null;
let levelIndex = 0;
let deck = [];
let roundIndex = 0;
let misses = 0;
let score = 0;
let rafId = 0;
let nextTimer = 0;

// ── DOM ────────────────────────────────────────────────────────────────────────

const $ = (id) => document.getElementById(id);
const playfield = () => $("playfield");
const tile = () => $("falling-tile");

// ── progress (stars per level, localStorage) ───────────────────────────────────

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
  playing = false;
  roundActive = false;
  cancelAnimationFrame(rafId);
  clearTimeout(nextTimer);
  recognizer?.stop();
  tile().hidden = true;
  setTranscript("");
  $("game-overlay").hidden = true;

  const progress = loadProgress();
  $("level-grid").innerHTML = LEVELS.map((lv, i) => {
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

  $("level-grid").querySelectorAll("button[data-level]").forEach(btn => {
    btn.addEventListener("click", () => startLevel(Number(btn.dataset.level)));
  });
  $("level-select").hidden = false;
}

// ── deck ───────────────────────────────────────────────────────────────────────

function buildDeck(level) {
  const shuffled = () => [...level.symbols].sort(() => Math.random() - 0.5);
  let ids = [];
  while (ids.length < level.rounds) ids = ids.concat(shuffled());
  return ids.slice(0, level.rounds).map(id => GAME_ITEMS[id]);
}

// ── HUD ────────────────────────────────────────────────────────────────────────

function renderHud() {
  const level = LEVELS[levelIndex];
  $("game-level-label").textContent = `第 ${levelIndex + 1} 關｜${level.name}`;
  $("game-round").textContent = `${Math.min(roundIndex + 1, level.rounds)}/${level.rounds}`;
  $("game-score").textContent = score;
  const hearts = MAX_HEARTS - misses;
  $("game-hearts").innerHTML = Array.from({ length: MAX_HEARTS }, (_, i) =>
    `<span class="heart${i < hearts ? "" : " heart--lost"}">${i < hearts ? "❤️" : "🤍"}</span>`
  ).join("");
}

function setTranscript(text, kind = "") {
  const el = $("game-transcript");
  el.textContent = text;
  el.className = `game-transcript${kind ? ` game-transcript--${kind}` : ""}`;
}

// ── falling animation ──────────────────────────────────────────────────────────

function startFall() {
  const fallMs = LEVELS[levelIndex].fallMs;
  const field = playfield();
  const t = tile();
  const fieldH = field.clientHeight;
  const tileH = t.offsetHeight;
  const start = performance.now();

  const step = (now) => {
    if (!roundActive) return;
    const progress = Math.min(1, (now - start) / fallMs);
    const y = -tileH + progress * (fieldH + tileH * 0.2);
    t.style.transform = `translateY(${y.toFixed(1)}px)`;

    const remaining = Math.ceil((fallMs - (now - start)) / 1000);
    $("tile-timer").textContent = Math.max(0, remaining);

    if (progress >= 1) {
      onMiss();
      return;
    }
    rafId = requestAnimationFrame(step);
  };
  rafId = requestAnimationFrame(step);
}

// ── rounds ─────────────────────────────────────────────────────────────────────

function startRound() {
  if (!playing) return;
  const level = LEVELS[levelIndex];
  if (roundIndex >= level.rounds) {
    levelComplete();
    return;
  }
  currentItem = deck[roundIndex];
  renderHud();

  const t = tile();
  t.hidden = false;
  t.className = "falling-tile";
  // multi-glyph items (結合韻／拼音) stack vertically like real zhuyin
  const glyphs = [...currentItem.symbol];
  const symEl = $("tile-symbol");
  symEl.innerHTML = glyphs.map(g => `<span>${g}</span>`).join("");
  symEl.classList.toggle("tile-symbol--multi", glyphs.length > 1);
  $("tile-emoji").textContent = currentItem.emoji ?? "✨";
  $("tile-timer").textContent = Math.ceil(level.fallMs / 1000);

  // random horizontal position, kept inside the playfield
  const field = playfield();
  const maxX = Math.max(0, field.clientWidth - t.offsetWidth - 16);
  t.style.left = `${8 + Math.random() * maxX}px`;
  t.style.transform = `translateY(${-t.offsetHeight}px)`;

  setTranscript("🎤 大聲說出它的發音！");
  roundActive = true;
  startFall();
}

function endRound(cls, delay) {
  roundActive = false;
  cancelAnimationFrame(rafId);
  tile().classList.add(cls);
  clearTimeout(nextTimer);
  nextTimer = setTimeout(() => {
    tile().hidden = true;
    if (misses >= MAX_HEARTS) levelFailed();
    else startRound();
  }, delay);
}

function onCorrect(heard) {
  score += 10;
  roundIndex += 1;
  renderHud();
  setTranscript(`⭐ 答對了！聽到「${heard}」`, "good");
  playSymbolAudio(currentItem.id, currentItem.exampleWord);
  endRound("falling-tile--correct", 900);
}

function onMiss() {
  misses += 1;
  roundIndex += 1;
  renderHud();
  setTranscript(`💧 是「${currentItem.symbol}」（${currentItem.exampleWord}）`, "bad");
  playSymbolAudio(currentItem.id, currentItem.exampleWord);
  endRound("falling-tile--miss", 1400);
}

// ── level lifecycle ────────────────────────────────────────────────────────────

function startLevel(idx) {
  levelIndex = idx;
  deck = buildDeck(LEVELS[idx]);
  roundIndex = 0;
  misses = 0;
  score = 0;
  playing = true;
  $("level-select").hidden = true;
  $("game-overlay").hidden = true;
  renderHud();

  if (!recognizer) {
    recognizer = createRecognizer({
      onText: (texts) => {
        if (!playing || !roundActive || !currentItem) return;
        setTranscript(`聽到：${texts[0]}`);
        if (matchesSymbol(texts, currentItem)) onCorrect(texts[0]);
      },
      onStateChange: (on, error) => {
        if (error) {
          playing = false;
          roundActive = false;
          cancelAnimationFrame(rafId);
          showOverlay({
            title: "需要麥克風權限",
            desc: "請到瀏覽器設定允許使用麥克風，再重新開始。",
            primary: { label: "回關卡選單", onClick: showLevelSelect },
          });
        }
      },
    });
  }
  recognizer.start();
  startRound();
}

function levelComplete() {
  playing = false;
  recognizer?.stop();
  const stars = misses === 0 ? 3 : misses === 1 ? 2 : 1;
  saveStars(levelIndex, stars);

  const hasNext = levelIndex + 1 < LEVELS.length;
  showOverlay({
    title: `第 ${levelIndex + 1} 關完成！`,
    stars,
    desc: `得分 ${score} 分`,
    primary: hasNext
      ? { label: "下一關 ▶", onClick: () => startLevel(levelIndex + 1) }
      : { label: "再玩一次", onClick: () => startLevel(levelIndex) },
    secondary: { label: "回關卡選單", onClick: showLevelSelect },
  });
}

function levelFailed() {
  playing = false;
  recognizer?.stop();
  showOverlay({
    title: "再試一次！",
    desc: `第 ${levelIndex + 1} 關｜得分 ${score} 分`,
    primary: { label: "再挑戰", onClick: () => startLevel(levelIndex) },
    secondary: { label: "回關卡選單", onClick: showLevelSelect },
  });
}

// ── overlay ────────────────────────────────────────────────────────────────────

function showOverlay({ title, desc, stars = 0, primary, secondary }) {
  $("overlay-title").textContent = title;
  $("overlay-desc").textContent = desc;

  const starsEl = $("overlay-stars");
  starsEl.hidden = stars === 0;
  starsEl.textContent = stars > 0
    ? "⭐".repeat(stars) + "☆".repeat(3 - stars)
    : "";

  const btn = $("overlay-btn");
  btn.textContent = primary.label;
  btn.onclick = primary.onClick;

  const btn2 = $("overlay-btn2");
  if (secondary) {
    btn2.hidden = false;
    btn2.textContent = secondary.label;
    btn2.onclick = secondary.onClick;
  } else {
    btn2.hidden = true;
  }

  $("game-overlay").hidden = false;
}

// ── init ───────────────────────────────────────────────────────────────────────

function init() {
  if (!isRecognitionSupported()) {
    showOverlay({
      title: "此瀏覽器不支援語音辨識",
      desc: "請改用 Safari（iPhone / iPad）或 Chrome 開啟。",
      primary: { label: "知道了", onClick: () => {} },
    });
    $("overlay-btn").disabled = true;
    return;
  }

  $("level-nav-btn").addEventListener("click", showLevelSelect);
  showLevelSelect();
}

document.addEventListener("DOMContentLoaded", init);
