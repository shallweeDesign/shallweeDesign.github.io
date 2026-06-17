// Audio playback: MoE WAV files with Web Speech API fallback
// Tune these two constants together to balance WAV vs TTS loudness.
const WAV_VOLUME = 1.0;
const TTS_VOLUME = 1.0;

let _currentAudio = null;
let _speechSupported = null;
let _voice = null;

function isSpeechSupported() {
  if (_speechSupported === null) {
    _speechSupported = typeof window !== "undefined" && !!window.speechSynthesis;
  }
  return _speechSupported;
}

function pickVoice() {
  if (!isSpeechSupported()) return;
  const voices = window.speechSynthesis.getVoices();
  _voice =
    voices.find(v => v.lang === "zh-TW") ??
    voices.find(v => v.lang.startsWith("zh-Hant")) ??
    voices.find(v => v.lang.startsWith("zh")) ??
    null;
}

if (typeof window !== "undefined" && window.speechSynthesis) {
  pickVoice();
  window.speechSynthesis.addEventListener("voiceschanged", pickVoice);
}

export function speak(text, rate = 0.8) {
  if (!isSpeechSupported()) return;
  const synth = window.speechSynthesis;
  synth.cancel();
  // iOS Safari sometimes leaves the synth in a suspended/paused state
  if (synth.paused) synth.resume();
  const utt = new SpeechSynthesisUtterance(text);
  utt.lang = "zh-TW";
  utt.rate = rate;
  utt.volume = TTS_VOLUME;
  if (_voice) utt.voice = _voice;
  synth.speak(utt);
}

export function playSymbolAudio(id, fallbackText) {
  if (_currentAudio) {
    _currentAudio.pause();
    _currentAudio.currentTime = 0;
  }
  const audio = new Audio(`./audio/${encodeURIComponent(id)}.wav`);
  audio.volume = WAV_VOLUME;
  _currentAudio = audio;
  audio.play().catch(() => speak(fallbackText, 0.85));
}
