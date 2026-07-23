// Audio playback: MoE WAV files with Web Speech API fallback
// Tune these two constants together to balance WAV vs TTS loudness.
const WAV_VOLUME = 1.0;
const TTS_VOLUME = 1.0;

let _currentAudio = null;
let _speechSupported = null;
let _voice = null;
let _playToken = 0; // identifies the latest playSymbolAudio call, see below

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

// Symbols without a real recording (結合韻/拼音 items) fall back through:
// 1. ./audio/{id}.wav        — real recording, only the 37 base symbols have one
// 2. ./audio/templates/{id}.wav — synthesized WAV (built for the voice-match
//    game's templates) — sounds like a real clip, no live TTS latency
// 3. speechSynthesis         — last resort
export function playSymbolAudio(id, fallbackText) {
  // Cancel any ongoing TTS first — iOS keeps the speech audio session active
  // after speak() finishes, which ducks subsequent HTMLAudioElement volume.
  if (isSpeechSupported()) window.speechSynthesis.cancel();

  // Each call gets a token; every fallback stage checks it's still the
  // latest call before proceeding. Without this, a symbol that has to fall
  // all the way through to TTS (combined finals/pinyin — every WAV attempt
  // 404s) could have its fallback speech cancelled by a second call arriving
  // before the first one's network round-trips finish, landing on total
  // silence — exactly what happened once cards started triggering playback
  // twice per pick (once on press, once on zone-reveal).
  const token = ++_playToken;
  const isCurrent = () => token === _playToken;

  // Reuse one <audio> element instead of creating a new one per call —
  // rapid re-triggers used to create a second Audio object and .pause()
  // the first mid-load, which could itself reject the first call's promise.
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
    if (!isCurrent()) return; // superseded by a newer call — abandon
    audio.src = `./audio/templates/${filename}`;
    audio.play().catch(() => {
      if (!isCurrent()) return;
      speak(fallbackText, 0.85);
    });
  });
}
