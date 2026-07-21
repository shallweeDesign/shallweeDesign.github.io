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
  // Cancel any ongoing TTS first — iOS keeps the speech audio session active
  // after speak() finishes, which ducks subsequent HTMLAudioElement volume.
  if (isSpeechSupported()) window.speechSynthesis.cancel();

  // Reuse one <audio> element instead of creating a new one per call.
  // Rapid re-triggers (e.g. tap a card, then immediately drag it) used to
  // create a second Audio object and .pause() the first mid-load; that
  // pause() rejects the first call's play() promise, which fired its own
  // .catch(() => speak(...)) fallback — a stale TTS utterance landing on
  // top of (or instead of) the WAV that was actually supposed to play.
  // That's what showed up as "sometimes silent" / "sometimes a different,
  // quieter voice."
  if (!_currentAudio) {
    _currentAudio = new Audio();
  }
  const audio = _currentAudio;
  const filename = `${encodeURIComponent(id)}.wav`;
  audio.pause();
  audio.currentTime = 0;
  audio.volume = WAV_VOLUME;
  audio.src = `./audio/${filename}`;
  audio.play().catch(() => {
    // Only fall back if this call hasn't already been superseded by a
    // newer one (audio.src would have moved on by then — the browser
    // resolves it to an absolute URL, so compare by suffix).
    if (audio.src.endsWith(filename)) speak(fallbackText, 0.85);
  });
}
