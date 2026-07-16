import { playSymbolAudio } from "./audio.js";
import { createRecognizer, matchesSymbol, isRecognitionSupported } from "./speech.js";
import { VoiceMatcher } from "./voicematch.js";
import { LEVELS, GAME_ITEMS } from "./levels.js";
import { Waveform } from "./waveform.js";

const MAX_HEARTS = 3;
const PROGRESS_KEY = "zhuyin-game-progress";

// Debug switches: ?debug=1 shows an on-screen ASR event log (iPad has no
// console); ?nowave=1 skips the waveform's second getUserMedia session to
// test whether it starves SpeechRecognition of mic audio.
const PARAMS = new URLSearchParams(location.search);
const DEBUG = PARAMS.has("debug");
const NO_WAVE = PARAMS.has("nowave");
// "voice" (default) = local MFCC+DTW template matching against the game's own
// pronunciation WAVs; "asr" = legacy Web Speech API homophone matching.
const ENGINE = PARAMS.get("engine") === "asr" ? "asr" : "voice";
// Strict accept: the target must be rank-1 AND beat the runner-up by this
// factor. Ambiguous wins are rejected (measured 0% false-accepts vs 3.8%
// with the old margin rule; retries within the fall window are free).
const MIN_SEPARATION = 1.10;

let debugPanel = null;
function debugLog(msg) {
  if (!DEBUG) return;
  if (!debugPanel) {
    debugPanel = document.createElement("div");
    debugPanel.style.cssText =
      "position:fixed;left:0;right:0;bottom:0;max-height:38vh;overflow:hidden;" +
      "background:rgba(0,0,0,.78);color:#7CFC90;font:11px/1.45 Menlo,monospace;" +
      "padding:6px 10px;z-index:9999;pointer-events:none;white-space:pre-wrap;";
    document.body.appendChild(debugPanel);
  }
  const line = document.createElement("div");
  line.textContent = `${(performance.now() / 1000).toFixed(1)}s  ${msg}`;
  debugPanel.appendChild(line);
  while (debugPanel.childNodes.length > 40) debugPanel.removeChild(debugPanel.firstChild);
}

// ── state ──────────────────────────────────────────────────────────────────────

let recognizer = null;
let matcher = null;
let waveform = null;
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
  matcher?.stop();
  waveform?.stop();
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

let matcherReady = null;   // Promise: template loading
let grantedStream = null;  // mic stream acquired by the permission gate

// Permission gate: resolve with a live mic stream, or null if denied.
async function ensureMic() {
  if (grantedStream?.getTracks().some(t => t.readyState === "live")) return grantedStream;
  let alreadyGranted = false;
  try {
    const st = await navigator.permissions.query({ name: "microphone" });
    alreadyGranted = st.state === "granted";
  } catch { /* Safari has no mic permission query — just prompt */ }
  if (!alreadyGranted) {
    showOverlay({ title: "🎤 麥克風檢查中…", desc: "請在詢問視窗按「允許」" });
  }
  try {
    grantedStream = await navigator.mediaDevices.getUserMedia({
      audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true },
    });
    $("game-overlay").hidden = true;
    return grantedStream;
  } catch {
    return null;
  }
}

async function startLevel(idx) {
  // construct the matcher synchronously inside the tap gesture —
  // iOS only grants a running audio session to gesture-created contexts
  if (ENGINE === "voice" && !matcher) {
    matcher = new VoiceMatcher({ onUtterance: handleUtterance, onDebug: debugLog });
    matcherReady = matcher.init(Object.keys(GAME_ITEMS));
  }

  // don't enter the level until the mic is confirmed
  const stream = await ensureMic();
  if (!stream) {
    showOverlay({
      title: "需要麥克風權限",
      desc: "請到瀏覽器設定允許使用麥克風，再重新開始。",
      primary: { label: "再試一次", onClick: () => startLevel(idx) },
      secondary: { label: "回關卡選單", onClick: showLevelSelect },
    });
    return;
  }

  levelIndex = idx;
  deck = buildDeck(LEVELS[idx]);
  roundIndex = 0;
  misses = 0;
  score = 0;
  playing = true;
  $("level-select").hidden = true;
  $("game-overlay").hidden = true;
  renderHud();

  if (ENGINE === "voice") startVoiceEngine();
  else startAsrEngine();
  startRound();
}

function micDenied() {
  playing = false;
  roundActive = false;
  cancelAnimationFrame(rafId);
  waveform?.stop();
  showOverlay({
    title: "需要麥克風權限",
    desc: "請到瀏覽器設定允許使用麥克風，再重新開始。",
    primary: { label: "回關卡選單", onClick: showLevelSelect },
  });
}

function startWaveform(stream) {
  if (NO_WAVE) {
    debugLog("waveform disabled (?nowave=1)");
    return;
  }
  if (!waveform) waveform = new Waveform($("voice-wave"));
  waveform.start(stream); // best-effort — game runs fine without the visual
}

// ── voice engine (local MFCC+DTW template matching) ────────────────────────────

async function startVoiceEngine() {
  try {
    await matcherReady; // templates (matcher itself is created in startLevel)
    const stream = await matcher.start(grantedStream);
    startWaveform(stream); // share the matcher's mic session
  } catch (err) {
    debugLog(`voice engine failed: ${err?.message ?? err}`);
    micDenied();
  }
}

function handleUtterance(samples) {
  if (!playing || !roundActive || !currentItem) return;
  const candidates = LEVELS[levelIndex].symbols;
  const scores = matcher.match(samples, candidates);
  if (!scores.length) return;
  const target = currentItem.id;
  const won = scores[0].id === target;
  const sep = scores.length > 1 ? scores[1].d / scores[0].d : Infinity;
  const hit = won && sep >= MIN_SEPARATION;
  debugLog(`utt ${(samples.length / 16000).toFixed(2)}s → `
    + scores.slice(0, 3).map(s => `${s.id}:${s.d.toFixed(2)}`).join("  ")
    + `  target=${target} sep=${sep.toFixed(2)} hit=${hit}`);
  if (hit) onCorrect(currentItem.symbol);
  else if (won) setTranscript("🎤 很接近！再說清楚一次");
  else setTranscript("🎤 聽到了！再說一次試試");
}

// ── legacy Web Speech engine (?engine=asr) ─────────────────────────────────────

function startAsrEngine() {
  // Web Speech opens its own mic session — release the gate's stream first
  // so the two don't fight over the mic (iOS)
  grantedStream?.getTracks().forEach(t => t.stop());
  grantedStream = null;
  if (!recognizer) {
    recognizer = createRecognizer({
      onText: (texts) => {
        const hit = currentItem ? matchesSymbol(texts, currentItem) : false;
        debugLog(`heard [${texts.join(" ｜ ")}]  target=${currentItem?.id ?? "-"}  match=${hit}  active=${roundActive}`);
        if (!playing || !roundActive || !currentItem) return;
        setTranscript(`聽到：${texts[0]}`);
        if (hit) onCorrect(texts[0]);
      },
      onDebug: debugLog,
      onStateChange: (on, error) => {
        if (error) micDenied();
      },
    });
  }
  recognizer.start();
  startWaveform();
}

function levelComplete() {
  playing = false;
  recognizer?.stop();
  matcher?.stop();
  waveform?.stop();
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
  matcher?.stop();
  waveform?.stop();
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
  if (primary) {
    btn.hidden = false;
    btn.textContent = primary.label;
    btn.onclick = primary.onClick;
  } else {
    btn.hidden = true; // button-less state (e.g. permission check in progress)
  }

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
  const supported = ENGINE === "asr"
    ? isRecognitionSupported()
    : !!(navigator.mediaDevices?.getUserMedia && (window.AudioContext || window.webkitAudioContext));
  if (!supported) {
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
