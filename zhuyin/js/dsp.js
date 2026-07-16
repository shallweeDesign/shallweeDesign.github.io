// Minimal audio DSP for the voice matcher: MFCC features + DTW distance.
// Everything assumes 16 kHz mono Float32 input.

export const SAMPLE_RATE = 16000;
export const FRAME_LEN = 400;   // 25 ms
export const HOP_LEN = 160;     // 10 ms
const FFT_SIZE = 512;
const N_MELS = 26;
const N_MFCC = 13;              // c1..c13 (c0 dropped — loudness-invariant)
const F_MIN = 100;
const F_MAX = 7000;

// ── FFT (iterative radix-2, real input) ────────────────────────────────────────

const _rev = new Uint16Array(FFT_SIZE);
for (let i = 0; i < FFT_SIZE; i++) {
  let r = 0;
  for (let b = 1, j = i; b < FFT_SIZE; b <<= 1, j >>= 1) r = (r << 1) | (j & 1);
  _rev[i] = r;
}
const _cos = new Float32Array(FFT_SIZE / 2);
const _sin = new Float32Array(FFT_SIZE / 2);
for (let i = 0; i < FFT_SIZE / 2; i++) {
  _cos[i] = Math.cos(-2 * Math.PI * i / FFT_SIZE);
  _sin[i] = Math.sin(-2 * Math.PI * i / FFT_SIZE);
}

// Power spectrum of one zero-padded frame → Float32Array(FFT_SIZE/2+1)
function powerSpectrum(frame) {
  const re = new Float32Array(FFT_SIZE);
  const im = new Float32Array(FFT_SIZE);
  for (let i = 0; i < frame.length; i++) re[_rev[i]] = frame[i];
  for (let size = 2; size <= FFT_SIZE; size <<= 1) {
    const half = size >> 1;
    const step = FFT_SIZE / size;
    for (let base = 0; base < FFT_SIZE; base += size) {
      for (let k = 0, t = 0; k < half; k++, t += step) {
        const c = _cos[t], s = _sin[t];
        const i0 = base + k, i1 = i0 + half;
        const tr = re[i1] * c - im[i1] * s;
        const ti = re[i1] * s + im[i1] * c;
        re[i1] = re[i0] - tr; im[i1] = im[i0] - ti;
        re[i0] += tr;         im[i0] += ti;
      }
    }
  }
  const out = new Float32Array(FFT_SIZE / 2 + 1);
  for (let i = 0; i <= FFT_SIZE / 2; i++) out[i] = re[i] * re[i] + im[i] * im[i];
  return out;
}

// ── mel filterbank + DCT ───────────────────────────────────────────────────────

const hz2mel = (f) => 2595 * Math.log10(1 + f / 700);
const mel2hz = (m) => 700 * (10 ** (m / 2595) - 1);

// [nMels][fftBins] triangle weights, built once
const _melBank = (() => {
  const nBins = FFT_SIZE / 2 + 1;
  const melPts = [];
  const mLo = hz2mel(F_MIN), mHi = hz2mel(F_MAX);
  for (let i = 0; i < N_MELS + 2; i++) melPts.push(mel2hz(mLo + (i * (mHi - mLo)) / (N_MELS + 1)));
  const bin = melPts.map(f => Math.floor(((FFT_SIZE + 1) * f) / SAMPLE_RATE));
  const bank = [];
  for (let m = 1; m <= N_MELS; m++) {
    const w = new Float32Array(nBins);
    for (let k = bin[m - 1]; k < bin[m]; k++) if (k >= 0 && k < nBins) w[k] = (k - bin[m - 1]) / (bin[m] - bin[m - 1] || 1);
    for (let k = bin[m]; k < bin[m + 1]; k++) if (k >= 0 && k < nBins) w[k] = (bin[m + 1] - k) / (bin[m + 1] - bin[m] || 1);
    bank.push(w);
  }
  return bank;
})();

const _hann = (() => {
  const w = new Float32Array(FRAME_LEN);
  for (let i = 0; i < FRAME_LEN; i++) w[i] = 0.5 - 0.5 * Math.cos((2 * Math.PI * i) / (FRAME_LEN - 1));
  return w;
})();

// ── MFCC ───────────────────────────────────────────────────────────────────────

// samples (Float32Array @16k) → array of Float32Array(N_MFCC), mean-normalized
export function mfcc(samples) {
  const frames = [];
  for (let start = 0; start + FRAME_LEN <= samples.length; start += HOP_LEN) {
    const frame = new Float32Array(FRAME_LEN);
    // pre-emphasis + Hann window
    frame[0] = samples[start] * _hann[0];
    for (let i = 1; i < FRAME_LEN; i++) {
      frame[i] = (samples[start + i] - 0.97 * samples[start + i - 1]) * _hann[i];
    }
    const power = powerSpectrum(frame);
    const logMel = new Float32Array(N_MELS);
    for (let m = 0; m < N_MELS; m++) {
      let e = 0;
      const w = _melBank[m];
      for (let k = 0; k < power.length; k++) e += w[k] * power[k];
      logMel[m] = Math.log(e + 1e-10);
    }
    // DCT-II, keep c1..c13
    const coeffs = new Float32Array(N_MFCC);
    for (let c = 1; c <= N_MFCC; c++) {
      let sum = 0;
      for (let m = 0; m < N_MELS; m++) sum += logMel[m] * Math.cos((Math.PI * c * (m + 0.5)) / N_MELS);
      coeffs[c - 1] = sum;
    }
    frames.push(coeffs);
  }
  // cepstral mean normalization (per utterance)
  if (frames.length) {
    const mean = new Float32Array(N_MFCC);
    for (const f of frames) for (let i = 0; i < N_MFCC; i++) mean[i] += f[i];
    for (let i = 0; i < N_MFCC; i++) mean[i] /= frames.length;
    for (const f of frames) for (let i = 0; i < N_MFCC; i++) f[i] -= mean[i];
  }
  return frames;
}

// ── DTW ────────────────────────────────────────────────────────────────────────

// Normalized DTW distance between two MFCC sequences (Sakoe-Chiba band).
export function dtw(a, b) {
  const n = a.length, m = b.length;
  if (!n || !m) return Infinity;
  // band must at least cover the length difference or the end is unreachable
  const band = Math.max(8, Math.ceil(Math.max(n, m) * 0.35), Math.abs(n - m) + 4);
  const INF = Infinity;
  let prev = new Float64Array(m + 1).fill(INF);
  let curr = new Float64Array(m + 1);
  prev[0] = 0;
  for (let i = 1; i <= n; i++) {
    curr.fill(INF);
    const jLo = Math.max(1, i - band), jHi = Math.min(m, i + band);
    for (let j = jLo; j <= jHi; j++) {
      const fa = a[i - 1], fb = b[j - 1];
      let d = 0;
      for (let k = 0; k < fa.length; k++) { const t = fa[k] - fb[k]; d += t * t; }
      d = Math.sqrt(d);
      curr[j] = d + Math.min(prev[j], curr[j - 1], prev[j - 1]);
    }
    [prev, curr] = [curr, prev];
  }
  return prev[m] / (n + m);
}

// ── energy-based endpointing ───────────────────────────────────────────────────

// Return [startSample, endSample] of the first speech segment, or null.
// Used both to trim templates and to segment live mic audio.
export function findSpeech(samples, { minMs = 100, hangMs = 250 } = {}) {
  const nFrames = Math.floor((samples.length - FRAME_LEN) / HOP_LEN) + 1;
  if (nFrames < 3) return null;
  const rms = new Float32Array(nFrames);
  for (let f = 0; f < nFrames; f++) {
    let e = 0;
    const off = f * HOP_LEN;
    for (let i = 0; i < FRAME_LEN; i++) e += samples[off + i] * samples[off + i];
    rms[f] = Math.sqrt(e / FRAME_LEN);
  }
  const sorted = [...rms].sort((x, y) => x - y);
  const floor = sorted[Math.floor(nFrames * 0.2)];
  const peak = sorted[nFrames - 1];
  // laxer of noise-floor-relative and peak-relative: already-trimmed clips
  // (templates) have no real silence, so a percentile floor alone overshoots
  const thresh = Math.max(Math.min(floor * 3, peak * 0.15), 0.006);
  const minFrames = Math.ceil(minMs / 10);
  const hangFrames = Math.ceil(hangMs / 10);

  let start = -1, below = 0;
  for (let f = 0; f < nFrames; f++) {
    if (rms[f] > thresh) {
      if (start < 0) start = f;
      below = 0;
    } else if (start >= 0) {
      below++;
      if (below >= hangFrames) {
        if (f - below - start + 1 >= minFrames) {
          return [Math.max(0, (start - 2) * HOP_LEN), (f - below + 3) * HOP_LEN + FRAME_LEN];
        }
        start = -1; below = 0; // too short — noise blip, keep looking
      }
    }
  }
  if (start >= 0 && nFrames - start >= minFrames) {
    return [Math.max(0, (start - 2) * HOP_LEN), samples.length];
  }
  return null;
}
