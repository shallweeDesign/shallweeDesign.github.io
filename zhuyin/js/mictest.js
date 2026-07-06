import { createRecognizer, matchesSymbol, isRecognitionSupported } from "./speech.js";
import { GAME_ITEMS } from "./levels.js";

const $ = (id) => document.getElementById(id);

// ── environment checks ─────────────────────────────────────────────────────────

function renderChecks() {
  const checks = [
    ["安全連線（HTTPS）", window.isSecureContext],
    ["麥克風收音（getUserMedia）", !!navigator.mediaDevices?.getUserMedia],
    ["語音辨識（SpeechRecognition）", isRecognitionSupported()],
  ];
  $("env-checks").innerHTML = checks.map(([label, ok]) =>
    `<li class="check ${ok ? "check--ok" : "check--fail"}">${ok ? "✅" : "❌"} ${label}</li>`
  ).join("");
}

// ── volume meter (getUserMedia + AnalyserNode) ─────────────────────────────────

let stream = null;
let audioCtx = null;
let meterRaf = 0;

async function startMeter() {
  stopRecognition(); // one mic consumer at a time — avoids iOS session conflicts
  try {
    stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  } catch (err) {
    $("meter-status").textContent = `❌ 無法開啟麥克風：${err.name}`;
    return;
  }
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const source = audioCtx.createMediaStreamSource(stream);
  const analyser = audioCtx.createAnalyser();
  analyser.fftSize = 512;
  source.connect(analyser);
  const buf = new Uint8Array(analyser.fftSize);

  $("meter-btn").textContent = "停止收音測試";
  $("meter-status").textContent = "🎤 收音中… 對著麥克風說話，綠條要會跳動";

  const loop = () => {
    analyser.getByteTimeDomainData(buf);
    let sum = 0;
    for (const v of buf) { const d = (v - 128) / 128; sum += d * d; }
    const rms = Math.sqrt(sum / buf.length);
    const pct = Math.min(100, rms * 300);
    $("meter-bar").style.width = `${pct.toFixed(1)}%`;
    meterRaf = requestAnimationFrame(loop);
  };
  loop();
}

function stopMeter() {
  cancelAnimationFrame(meterRaf);
  stream?.getTracks().forEach(t => t.stop());
  audioCtx?.close();
  stream = null;
  audioCtx = null;
  $("meter-bar").style.width = "0%";
  $("meter-btn").textContent = "開始收音測試";
  $("meter-status").textContent = "";
}

// ── recognition test ───────────────────────────────────────────────────────────

let recognizer = null;
let recognizing = false;
const logEntries = [];

function logResult(texts) {
  const heard = texts[0];
  const matched = Object.values(GAME_ITEMS)
    .filter(item => matchesSymbol(texts, item))
    .map(item => item.symbol);
  logEntries.unshift({ heard, matched });
  if (logEntries.length > 8) logEntries.pop();

  $("rec-log").innerHTML = logEntries.map(e =>
    `<li class="rec-entry">
      <span class="rec-entry__heard">「${e.heard}」</span>
      <span class="rec-entry__matched">${
        e.matched.length ? "→ " + e.matched.map(s => `<b>${s}</b>`).join("、") : "（沒有符合的符號）"
      }</span>
    </li>`
  ).join("");
}

function startRecognition() {
  stopMeter();
  if (!recognizer) {
    recognizer = createRecognizer({
      onText: logResult,
      onStateChange: (on, error) => {
        if (error) {
          recognizing = false;
          $("rec-btn").textContent = "開始辨識測試";
          $("rec-status").textContent = "❌ 沒有麥克風權限，請到瀏覽器設定允許";
        }
      },
    });
  }
  recognizer.start();
  recognizing = true;
  $("rec-btn").textContent = "停止辨識測試";
  $("rec-status").textContent = "🎤 辨識中… 試著說「ㄅ」（波）、「ㄚ」（啊）或任何詞";
}

function stopRecognition() {
  if (!recognizing) return;
  recognizer?.stop();
  recognizing = false;
  $("rec-btn").textContent = "開始辨識測試";
  $("rec-status").textContent = "";
}

// ── init ───────────────────────────────────────────────────────────────────────

function init() {
  renderChecks();

  $("meter-btn").addEventListener("click", () => {
    stream ? stopMeter() : startMeter();
  });

  $("rec-btn").addEventListener("click", () => {
    recognizing ? stopRecognition() : startRecognition();
  });

  if (!isRecognitionSupported()) $("rec-btn").disabled = true;
  if (!navigator.mediaDevices?.getUserMedia) $("meter-btn").disabled = true;
}

document.addEventListener("DOMContentLoaded", init);
