/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const es = "169";
const pn = "", Le = "srgb", gn = "srgb-linear", ns = "display-p3", sr = "display-p3-linear", ji = "linear", ie = "srgb", Qi = "rec709", tr = "p3";
const ys = "300 es";
class In {
  addEventListener(t, e) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[t] === void 0 && (n[t] = []), n[t].indexOf(e) === -1 && n[t].push(e);
  }
  hasEventListener(t, e) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[t] !== void 0 && n[t].indexOf(e) !== -1;
  }
  removeEventListener(t, e) {
    if (this._listeners === void 0) return;
    const r = this._listeners[t];
    if (r !== void 0) {
      const s = r.indexOf(e);
      s !== -1 && r.splice(s, 1);
    }
  }
  dispatchEvent(t) {
    if (this._listeners === void 0) return;
    const n = this._listeners[t.type];
    if (n !== void 0) {
      t.target = this;
      const r = n.slice(0);
      for (let s = 0, a = r.length; s < a; s++)
        r[s].call(this, t);
      t.target = null;
    }
  }
}
const xe = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], mr = Math.PI / 180, jr = 180 / Math.PI;
function an() {
  const i = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (xe[i & 255] + xe[i >> 8 & 255] + xe[i >> 16 & 255] + xe[i >> 24 & 255] + "-" + xe[t & 255] + xe[t >> 8 & 255] + "-" + xe[t >> 16 & 15 | 64] + xe[t >> 24 & 255] + "-" + xe[e & 63 | 128] + xe[e >> 8 & 255] + "-" + xe[e >> 16 & 255] + xe[e >> 24 & 255] + xe[n & 255] + xe[n >> 8 & 255] + xe[n >> 16 & 255] + xe[n >> 24 & 255]).toLowerCase();
}
function ve(i, t, e) {
  return Math.max(t, Math.min(e, i));
}
function mo(i, t) {
  return (i % t + t) % t;
}
function _r(i, t, e) {
  return (1 - e) * i + e * t;
}
function Je(i, t) {
  switch (t.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return i / 4294967295;
    case Uint16Array:
      return i / 65535;
    case Uint8Array:
      return i / 255;
    case Int32Array:
      return Math.max(i / 2147483647, -1);
    case Int16Array:
      return Math.max(i / 32767, -1);
    case Int8Array:
      return Math.max(i / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Qt(i, t) {
  switch (t.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return Math.round(i * 4294967295);
    case Uint16Array:
      return Math.round(i * 65535);
    case Uint8Array:
      return Math.round(i * 255);
    case Int32Array:
      return Math.round(i * 2147483647);
    case Int16Array:
      return Math.round(i * 32767);
    case Int8Array:
      return Math.round(i * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
class ot {
  constructor(t = 0, e = 0) {
    ot.prototype.isVector2 = !0, this.x = t, this.y = e;
  }
  get width() {
    return this.x;
  }
  set width(t) {
    this.x = t;
  }
  get height() {
    return this.y;
  }
  set height(t) {
    this.y = t;
  }
  set(t, e) {
    return this.x = t, this.y = e, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this;
  }
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this;
  }
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this;
  }
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this;
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  applyMatrix3(t) {
    const e = this.x, n = this.y, r = t.elements;
    return this.x = r[0] * e + r[3] * n + r[6], this.y = r[1] * e + r[4] * n + r[7], this;
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this;
  }
  clamp(t, e) {
    return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this;
  }
  clampScalar(t, e) {
    return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this;
  }
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y;
  }
  cross(t) {
    return this.x * t.y - this.y * t.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(t) {
    const e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (e === 0) return Math.PI / 2;
    const n = this.dot(t) / e;
    return Math.acos(ve(n, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const e = this.x - t.x, n = this.y - t.y;
    return e * e + n * n;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this;
  }
  lerpVectors(t, e, n) {
    return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y;
  }
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t;
  }
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this;
  }
  rotateAround(t, e) {
    const n = Math.cos(e), r = Math.sin(e), s = this.x - t.x, a = this.y - t.y;
    return this.x = s * n - a * r + t.x, this.y = s * r + a * n + t.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Lt {
  constructor(t, e, n, r, s, a, o, l, c) {
    Lt.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], t !== void 0 && this.set(t, e, n, r, s, a, o, l, c);
  }
  set(t, e, n, r, s, a, o, l, c) {
    const h = this.elements;
    return h[0] = t, h[1] = r, h[2] = o, h[3] = e, h[4] = s, h[5] = l, h[6] = n, h[7] = a, h[8] = c, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  copy(t) {
    const e = this.elements, n = t.elements;
    return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], this;
  }
  extractBasis(t, e, n) {
    return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(t) {
    const e = t.elements;
    return this.set(
      e[0],
      e[4],
      e[8],
      e[1],
      e[5],
      e[9],
      e[2],
      e[6],
      e[10]
    ), this;
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    const n = t.elements, r = e.elements, s = this.elements, a = n[0], o = n[3], l = n[6], c = n[1], h = n[4], u = n[7], d = n[2], f = n[5], _ = n[8], x = r[0], m = r[3], p = r[6], T = r[1], S = r[4], y = r[7], C = r[2], w = r[5], b = r[8];
    return s[0] = a * x + o * T + l * C, s[3] = a * m + o * S + l * w, s[6] = a * p + o * y + l * b, s[1] = c * x + h * T + u * C, s[4] = c * m + h * S + u * w, s[7] = c * p + h * y + u * b, s[2] = d * x + f * T + _ * C, s[5] = d * m + f * S + _ * w, s[8] = d * p + f * y + _ * b, this;
  }
  multiplyScalar(t) {
    const e = this.elements;
    return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this;
  }
  determinant() {
    const t = this.elements, e = t[0], n = t[1], r = t[2], s = t[3], a = t[4], o = t[5], l = t[6], c = t[7], h = t[8];
    return e * a * h - e * o * c - n * s * h + n * o * l + r * s * c - r * a * l;
  }
  invert() {
    const t = this.elements, e = t[0], n = t[1], r = t[2], s = t[3], a = t[4], o = t[5], l = t[6], c = t[7], h = t[8], u = h * a - o * c, d = o * l - h * s, f = c * s - a * l, _ = e * u + n * d + r * f;
    if (_ === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const x = 1 / _;
    return t[0] = u * x, t[1] = (r * c - h * n) * x, t[2] = (o * n - r * a) * x, t[3] = d * x, t[4] = (h * e - r * l) * x, t[5] = (r * s - o * e) * x, t[6] = f * x, t[7] = (n * l - c * e) * x, t[8] = (a * e - n * s) * x, this;
  }
  transpose() {
    let t;
    const e = this.elements;
    return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this;
  }
  getNormalMatrix(t) {
    return this.setFromMatrix4(t).invert().transpose();
  }
  transposeIntoArray(t) {
    const e = this.elements;
    return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this;
  }
  setUvTransform(t, e, n, r, s, a, o) {
    const l = Math.cos(s), c = Math.sin(s);
    return this.set(
      n * l,
      n * c,
      -n * (l * a + c * o) + a + t,
      -r * c,
      r * l,
      -r * (-c * a + l * o) + o + e,
      0,
      0,
      1
    ), this;
  }
  //
  scale(t, e) {
    return this.premultiply(gr.makeScale(t, e)), this;
  }
  rotate(t) {
    return this.premultiply(gr.makeRotation(-t)), this;
  }
  translate(t, e) {
    return this.premultiply(gr.makeTranslation(t, e)), this;
  }
  // for 2D Transforms
  makeTranslation(t, e) {
    return t.isVector2 ? this.set(
      1,
      0,
      t.x,
      0,
      1,
      t.y,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      t,
      0,
      1,
      e,
      0,
      0,
      1
    ), this;
  }
  makeRotation(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(
      e,
      -n,
      0,
      n,
      e,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(t, e) {
    return this.set(
      t,
      0,
      0,
      0,
      e,
      0,
      0,
      0,
      1
    ), this;
  }
  //
  equals(t) {
    const e = this.elements, n = t.elements;
    for (let r = 0; r < 9; r++)
      if (e[r] !== n[r]) return !1;
    return !0;
  }
  fromArray(t, e = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = t[n + e];
    return this;
  }
  toArray(t = [], e = 0) {
    const n = this.elements;
    return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const gr = /* @__PURE__ */ new Lt();
function ba(i) {
  for (let t = i.length - 1; t >= 0; --t)
    if (i[t] >= 65535) return !0;
  return !1;
}
function er(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function _o() {
  const i = er("canvas");
  return i.style.display = "block", i;
}
const Es = {};
function Ki(i) {
  i in Es || (Es[i] = !0, console.warn(i));
}
function go(i, t, e) {
  return new Promise(function(n, r) {
    function s() {
      switch (i.clientWaitSync(t, i.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case i.WAIT_FAILED:
          r();
          break;
        case i.TIMEOUT_EXPIRED:
          setTimeout(s, e);
          break;
        default:
          n();
      }
    }
    setTimeout(s, e);
  });
}
function vo(i) {
  const t = i.elements;
  t[2] = 0.5 * t[2] + 0.5 * t[3], t[6] = 0.5 * t[6] + 0.5 * t[7], t[10] = 0.5 * t[10] + 0.5 * t[11], t[14] = 0.5 * t[14] + 0.5 * t[15];
}
function xo(i) {
  const t = i.elements;
  t[11] === -1 ? (t[10] = -t[10] - 1, t[14] = -t[14]) : (t[10] = -t[10], t[14] = -t[14] + 1);
}
const Ts = /* @__PURE__ */ new Lt().set(
  0.8224621,
  0.177538,
  0,
  0.0331941,
  0.9668058,
  0,
  0.0170827,
  0.0723974,
  0.9105199
), As = /* @__PURE__ */ new Lt().set(
  1.2249401,
  -0.2249404,
  0,
  -0.0420569,
  1.0420571,
  0,
  -0.0196376,
  -0.0786361,
  1.0982735
), ai = {
  [gn]: {
    transfer: ji,
    primaries: Qi,
    luminanceCoefficients: [0.2126, 0.7152, 0.0722],
    toReference: (i) => i,
    fromReference: (i) => i
  },
  [Le]: {
    transfer: ie,
    primaries: Qi,
    luminanceCoefficients: [0.2126, 0.7152, 0.0722],
    toReference: (i) => i.convertSRGBToLinear(),
    fromReference: (i) => i.convertLinearToSRGB()
  },
  [sr]: {
    transfer: ji,
    primaries: tr,
    luminanceCoefficients: [0.2289, 0.6917, 0.0793],
    toReference: (i) => i.applyMatrix3(As),
    fromReference: (i) => i.applyMatrix3(Ts)
  },
  [ns]: {
    transfer: ie,
    primaries: tr,
    luminanceCoefficients: [0.2289, 0.6917, 0.0793],
    toReference: (i) => i.convertSRGBToLinear().applyMatrix3(As),
    fromReference: (i) => i.applyMatrix3(Ts).convertLinearToSRGB()
  }
}, So = /* @__PURE__ */ new Set([gn, sr]), Kt = {
  enabled: !0,
  _workingColorSpace: gn,
  get workingColorSpace() {
    return this._workingColorSpace;
  },
  set workingColorSpace(i) {
    if (!So.has(i))
      throw new Error(`Unsupported working color space, "${i}".`);
    this._workingColorSpace = i;
  },
  convert: function(i, t, e) {
    if (this.enabled === !1 || t === e || !t || !e)
      return i;
    const n = ai[t].toReference, r = ai[e].fromReference;
    return r(n(i));
  },
  fromWorkingColorSpace: function(i, t) {
    return this.convert(i, this._workingColorSpace, t);
  },
  toWorkingColorSpace: function(i, t) {
    return this.convert(i, t, this._workingColorSpace);
  },
  getPrimaries: function(i) {
    return ai[i].primaries;
  },
  getTransfer: function(i) {
    return i === pn ? ji : ai[i].transfer;
  },
  getLuminanceCoefficients: function(i, t = this._workingColorSpace) {
    return i.fromArray(ai[t].luminanceCoefficients);
  }
};
function Qn(i) {
  return i < 0.04045 ? i * 0.0773993808 : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function vr(i) {
  return i < 31308e-7 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
let Dn;
class Mo {
  static getDataURL(t) {
    if (/^data:/i.test(t.src) || typeof HTMLCanvasElement > "u")
      return t.src;
    let e;
    if (t instanceof HTMLCanvasElement)
      e = t;
    else {
      Dn === void 0 && (Dn = er("canvas")), Dn.width = t.width, Dn.height = t.height;
      const n = Dn.getContext("2d");
      t instanceof ImageData ? n.putImageData(t, 0, 0) : n.drawImage(t, 0, 0, t.width, t.height), e = Dn;
    }
    return e.width > 2048 || e.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t), e.toDataURL("image/jpeg", 0.6)) : e.toDataURL("image/png");
  }
  static sRGBToLinear(t) {
    if (typeof HTMLImageElement < "u" && t instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && t instanceof ImageBitmap) {
      const e = er("canvas");
      e.width = t.width, e.height = t.height;
      const n = e.getContext("2d");
      n.drawImage(t, 0, 0, t.width, t.height);
      const r = n.getImageData(0, 0, t.width, t.height), s = r.data;
      for (let a = 0; a < s.length; a++)
        s[a] = Qn(s[a] / 255) * 255;
      return n.putImageData(r, 0, 0), e;
    } else if (t.data) {
      const e = t.data.slice(0);
      for (let n = 0; n < e.length; n++)
        e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[n] = Math.floor(Qn(e[n] / 255) * 255) : e[n] = Qn(e[n]);
      return {
        data: e,
        width: t.width,
        height: t.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t;
  }
}
let yo = 0;
class wa {
  constructor(t = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: yo++ }), this.uuid = an(), this.data = t, this.dataReady = !0, this.version = 0;
  }
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    if (!e && t.images[this.uuid] !== void 0)
      return t.images[this.uuid];
    const n = {
      uuid: this.uuid,
      url: ""
    }, r = this.data;
    if (r !== null) {
      let s;
      if (Array.isArray(r)) {
        s = [];
        for (let a = 0, o = r.length; a < o; a++)
          r[a].isDataTexture ? s.push(xr(r[a].image)) : s.push(xr(r[a]));
      } else
        s = xr(r);
      n.url = s;
    }
    return e || (t.images[this.uuid] = n), n;
  }
}
function xr(i) {
  return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? Mo.getDataURL(i) : i.data ? {
    data: Array.from(i.data),
    width: i.width,
    height: i.height,
    type: i.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Eo = 0;
class Ee extends In {
  constructor(t = Ee.DEFAULT_IMAGE, e = Ee.DEFAULT_MAPPING, n = 1001, r = 1001, s = 1006, a = 1008, o = 1023, l = 1009, c = Ee.DEFAULT_ANISOTROPY, h = pn) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Eo++ }), this.uuid = an(), this.name = "", this.source = new wa(t), this.mipmaps = [], this.mapping = e, this.channel = 0, this.wrapS = n, this.wrapT = r, this.magFilter = s, this.minFilter = a, this.anisotropy = c, this.format = o, this.internalFormat = null, this.type = l, this.offset = new ot(0, 0), this.repeat = new ot(1, 1), this.center = new ot(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Lt(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = h, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.pmremVersion = 0;
  }
  get image() {
    return this.source.data;
  }
  set image(t = null) {
    this.source.data = t;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.name = t.name, this.source = t.source, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.channel = t.channel, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.colorSpace = t.colorSpace, this.userData = JSON.parse(JSON.stringify(t.userData)), this.needsUpdate = !0, this;
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    if (!e && t.textures[this.uuid] !== void 0)
      return t.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.6,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(t).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), e || (t.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(t) {
    if (this.mapping !== 300) return t;
    if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1)
      switch (this.wrapS) {
        case 1e3:
          t.x = t.x - Math.floor(t.x);
          break;
        case 1001:
          t.x = t.x < 0 ? 0 : 1;
          break;
        case 1002:
          Math.abs(Math.floor(t.x) % 2) === 1 ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
          break;
      }
    if (t.y < 0 || t.y > 1)
      switch (this.wrapT) {
        case 1e3:
          t.y = t.y - Math.floor(t.y);
          break;
        case 1001:
          t.y = t.y < 0 ? 0 : 1;
          break;
        case 1002:
          Math.abs(Math.floor(t.y) % 2) === 1 ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y);
          break;
      }
    return this.flipY && (t.y = 1 - t.y), t;
  }
  set needsUpdate(t) {
    t === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  set needsPMREMUpdate(t) {
    t === !0 && this.pmremVersion++;
  }
}
Ee.DEFAULT_IMAGE = null;
Ee.DEFAULT_MAPPING = 300;
Ee.DEFAULT_ANISOTROPY = 1;
class oe {
  constructor(t = 0, e = 0, n = 0, r = 1) {
    oe.prototype.isVector4 = !0, this.x = t, this.y = e, this.z = n, this.w = r;
  }
  get width() {
    return this.z;
  }
  set width(t) {
    this.z = t;
  }
  get height() {
    return this.w;
  }
  set height(t) {
    this.w = t;
  }
  set(t, e, n, r) {
    return this.x = t, this.y = e, this.z = n, this.w = r, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this.z = t, this.w = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setZ(t) {
    return this.z = t, this;
  }
  setW(t) {
    return this.w = t, this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      case 3:
        this.w = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this.z = t.z, this.w = t.w !== void 0 ? t.w : 1, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this.z += t, this.w += t, this;
  }
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this;
  }
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this;
  }
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this.w *= t.w, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this;
  }
  applyMatrix4(t) {
    const e = this.x, n = this.y, r = this.z, s = this.w, a = t.elements;
    return this.x = a[0] * e + a[4] * n + a[8] * r + a[12] * s, this.y = a[1] * e + a[5] * n + a[9] * r + a[13] * s, this.z = a[2] * e + a[6] * n + a[10] * r + a[14] * s, this.w = a[3] * e + a[7] * n + a[11] * r + a[15] * s, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  setAxisAngleFromQuaternion(t) {
    this.w = 2 * Math.acos(t.w);
    const e = Math.sqrt(1 - t.w * t.w);
    return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this;
  }
  setAxisAngleFromRotationMatrix(t) {
    let e, n, r, s;
    const l = t.elements, c = l[0], h = l[4], u = l[8], d = l[1], f = l[5], _ = l[9], x = l[2], m = l[6], p = l[10];
    if (Math.abs(h - d) < 0.01 && Math.abs(u - x) < 0.01 && Math.abs(_ - m) < 0.01) {
      if (Math.abs(h + d) < 0.1 && Math.abs(u + x) < 0.1 && Math.abs(_ + m) < 0.1 && Math.abs(c + f + p - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      e = Math.PI;
      const S = (c + 1) / 2, y = (f + 1) / 2, C = (p + 1) / 2, w = (h + d) / 4, b = (u + x) / 4, U = (_ + m) / 4;
      return S > y && S > C ? S < 0.01 ? (n = 0, r = 0.707106781, s = 0.707106781) : (n = Math.sqrt(S), r = w / n, s = b / n) : y > C ? y < 0.01 ? (n = 0.707106781, r = 0, s = 0.707106781) : (r = Math.sqrt(y), n = w / r, s = U / r) : C < 0.01 ? (n = 0.707106781, r = 0.707106781, s = 0) : (s = Math.sqrt(C), n = b / s, r = U / s), this.set(n, r, s, e), this;
    }
    let T = Math.sqrt((m - _) * (m - _) + (u - x) * (u - x) + (d - h) * (d - h));
    return Math.abs(T) < 1e-3 && (T = 1), this.x = (m - _) / T, this.y = (u - x) / T, this.z = (d - h) / T, this.w = Math.acos((c + f + p - 1) / 2), this;
  }
  setFromMatrixPosition(t) {
    const e = t.elements;
    return this.x = e[12], this.y = e[13], this.z = e[14], this.w = e[15], this;
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this;
  }
  clamp(t, e) {
    return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), this;
  }
  clampScalar(t, e) {
    return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this.w = Math.max(t, Math.min(e, this.w)), this;
  }
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this;
  }
  lerpVectors(t, e, n) {
    return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this.w = t.w + (e.w - t.w) * n, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w;
  }
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t;
  }
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class To extends In {
  constructor(t = 1, e = 1, n = {}) {
    super(), this.isRenderTarget = !0, this.width = t, this.height = e, this.depth = 1, this.scissor = new oe(0, 0, t, e), this.scissorTest = !1, this.viewport = new oe(0, 0, t, e);
    const r = { width: t, height: e, depth: 1 };
    n = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: 1006,
      depthBuffer: !0,
      stencilBuffer: !1,
      resolveDepthBuffer: !0,
      resolveStencilBuffer: !0,
      depthTexture: null,
      samples: 0,
      count: 1
    }, n);
    const s = new Ee(r, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace);
    s.flipY = !1, s.generateMipmaps = n.generateMipmaps, s.internalFormat = n.internalFormat, this.textures = [];
    const a = n.count;
    for (let o = 0; o < a; o++)
      this.textures[o] = s.clone(), this.textures[o].isRenderTargetTexture = !0;
    this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this.depthTexture = n.depthTexture, this.samples = n.samples;
  }
  get texture() {
    return this.textures[0];
  }
  set texture(t) {
    this.textures[0] = t;
  }
  setSize(t, e, n = 1) {
    if (this.width !== t || this.height !== e || this.depth !== n) {
      this.width = t, this.height = e, this.depth = n;
      for (let r = 0, s = this.textures.length; r < s; r++)
        this.textures[r].image.width = t, this.textures[r].image.height = e, this.textures[r].image.depth = n;
      this.dispose();
    }
    this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.width = t.width, this.height = t.height, this.depth = t.depth, this.scissor.copy(t.scissor), this.scissorTest = t.scissorTest, this.viewport.copy(t.viewport), this.textures.length = 0;
    for (let n = 0, r = t.textures.length; n < r; n++)
      this.textures[n] = t.textures[n].clone(), this.textures[n].isRenderTargetTexture = !0;
    const e = Object.assign({}, t.texture.image);
    return this.texture.source = new wa(e), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.resolveDepthBuffer = t.resolveDepthBuffer, this.resolveStencilBuffer = t.resolveStencilBuffer, t.depthTexture !== null && (this.depthTexture = t.depthTexture.clone()), this.samples = t.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Pn extends To {
  constructor(t = 1, e = 1, n = {}) {
    super(t, e, n), this.isWebGLRenderTarget = !0;
  }
}
class Ra extends Ee {
  constructor(t = null, e = 1, n = 1, r = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: t, width: e, height: n, depth: r }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(t) {
    this.layerUpdates.add(t);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class Ao extends Ee {
  constructor(t = null, e = 1, n = 1, r = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: t, width: e, height: n, depth: r }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Ze {
  constructor(t = 0, e = 0, n = 0, r = 1) {
    this.isQuaternion = !0, this._x = t, this._y = e, this._z = n, this._w = r;
  }
  static slerpFlat(t, e, n, r, s, a, o) {
    let l = n[r + 0], c = n[r + 1], h = n[r + 2], u = n[r + 3];
    const d = s[a + 0], f = s[a + 1], _ = s[a + 2], x = s[a + 3];
    if (o === 0) {
      t[e + 0] = l, t[e + 1] = c, t[e + 2] = h, t[e + 3] = u;
      return;
    }
    if (o === 1) {
      t[e + 0] = d, t[e + 1] = f, t[e + 2] = _, t[e + 3] = x;
      return;
    }
    if (u !== x || l !== d || c !== f || h !== _) {
      let m = 1 - o;
      const p = l * d + c * f + h * _ + u * x, T = p >= 0 ? 1 : -1, S = 1 - p * p;
      if (S > Number.EPSILON) {
        const C = Math.sqrt(S), w = Math.atan2(C, p * T);
        m = Math.sin(m * w) / C, o = Math.sin(o * w) / C;
      }
      const y = o * T;
      if (l = l * m + d * y, c = c * m + f * y, h = h * m + _ * y, u = u * m + x * y, m === 1 - o) {
        const C = 1 / Math.sqrt(l * l + c * c + h * h + u * u);
        l *= C, c *= C, h *= C, u *= C;
      }
    }
    t[e] = l, t[e + 1] = c, t[e + 2] = h, t[e + 3] = u;
  }
  static multiplyQuaternionsFlat(t, e, n, r, s, a) {
    const o = n[r], l = n[r + 1], c = n[r + 2], h = n[r + 3], u = s[a], d = s[a + 1], f = s[a + 2], _ = s[a + 3];
    return t[e] = o * _ + h * u + l * f - c * d, t[e + 1] = l * _ + h * d + c * u - o * f, t[e + 2] = c * _ + h * f + o * d - l * u, t[e + 3] = h * _ - o * u - l * d - c * f, t;
  }
  get x() {
    return this._x;
  }
  set x(t) {
    this._x = t, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    this._y = t, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    this._z = t, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(t) {
    this._w = t, this._onChangeCallback();
  }
  set(t, e, n, r) {
    return this._x = t, this._y = e, this._z = n, this._w = r, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(t) {
    return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this;
  }
  setFromEuler(t, e = !0) {
    const n = t._x, r = t._y, s = t._z, a = t._order, o = Math.cos, l = Math.sin, c = o(n / 2), h = o(r / 2), u = o(s / 2), d = l(n / 2), f = l(r / 2), _ = l(s / 2);
    switch (a) {
      case "XYZ":
        this._x = d * h * u + c * f * _, this._y = c * f * u - d * h * _, this._z = c * h * _ + d * f * u, this._w = c * h * u - d * f * _;
        break;
      case "YXZ":
        this._x = d * h * u + c * f * _, this._y = c * f * u - d * h * _, this._z = c * h * _ - d * f * u, this._w = c * h * u + d * f * _;
        break;
      case "ZXY":
        this._x = d * h * u - c * f * _, this._y = c * f * u + d * h * _, this._z = c * h * _ + d * f * u, this._w = c * h * u - d * f * _;
        break;
      case "ZYX":
        this._x = d * h * u - c * f * _, this._y = c * f * u + d * h * _, this._z = c * h * _ - d * f * u, this._w = c * h * u + d * f * _;
        break;
      case "YZX":
        this._x = d * h * u + c * f * _, this._y = c * f * u + d * h * _, this._z = c * h * _ - d * f * u, this._w = c * h * u - d * f * _;
        break;
      case "XZY":
        this._x = d * h * u - c * f * _, this._y = c * f * u - d * h * _, this._z = c * h * _ + d * f * u, this._w = c * h * u + d * f * _;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return e === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(t, e) {
    const n = e / 2, r = Math.sin(n);
    return this._x = t.x * r, this._y = t.y * r, this._z = t.z * r, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(t) {
    const e = t.elements, n = e[0], r = e[4], s = e[8], a = e[1], o = e[5], l = e[9], c = e[2], h = e[6], u = e[10], d = n + o + u;
    if (d > 0) {
      const f = 0.5 / Math.sqrt(d + 1);
      this._w = 0.25 / f, this._x = (h - l) * f, this._y = (s - c) * f, this._z = (a - r) * f;
    } else if (n > o && n > u) {
      const f = 2 * Math.sqrt(1 + n - o - u);
      this._w = (h - l) / f, this._x = 0.25 * f, this._y = (r + a) / f, this._z = (s + c) / f;
    } else if (o > u) {
      const f = 2 * Math.sqrt(1 + o - n - u);
      this._w = (s - c) / f, this._x = (r + a) / f, this._y = 0.25 * f, this._z = (l + h) / f;
    } else {
      const f = 2 * Math.sqrt(1 + u - n - o);
      this._w = (a - r) / f, this._x = (s + c) / f, this._y = (l + h) / f, this._z = 0.25 * f;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(t, e) {
    let n = t.dot(e) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = n)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = n), this.normalize();
  }
  angleTo(t) {
    return 2 * Math.acos(Math.abs(ve(this.dot(t), -1, 1)));
  }
  rotateTowards(t, e) {
    const n = this.angleTo(t);
    if (n === 0) return this;
    const r = Math.min(1, e / n);
    return this.slerp(t, r), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(t) {
    return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let t = this.length();
    return t === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this;
  }
  multiply(t) {
    return this.multiplyQuaternions(this, t);
  }
  premultiply(t) {
    return this.multiplyQuaternions(t, this);
  }
  multiplyQuaternions(t, e) {
    const n = t._x, r = t._y, s = t._z, a = t._w, o = e._x, l = e._y, c = e._z, h = e._w;
    return this._x = n * h + a * o + r * c - s * l, this._y = r * h + a * l + s * o - n * c, this._z = s * h + a * c + n * l - r * o, this._w = a * h - n * o - r * l - s * c, this._onChangeCallback(), this;
  }
  slerp(t, e) {
    if (e === 0) return this;
    if (e === 1) return this.copy(t);
    const n = this._x, r = this._y, s = this._z, a = this._w;
    let o = a * t._w + n * t._x + r * t._y + s * t._z;
    if (o < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, o = -o) : this.copy(t), o >= 1)
      return this._w = a, this._x = n, this._y = r, this._z = s, this;
    const l = 1 - o * o;
    if (l <= Number.EPSILON) {
      const f = 1 - e;
      return this._w = f * a + e * this._w, this._x = f * n + e * this._x, this._y = f * r + e * this._y, this._z = f * s + e * this._z, this.normalize(), this;
    }
    const c = Math.sqrt(l), h = Math.atan2(c, o), u = Math.sin((1 - e) * h) / c, d = Math.sin(e * h) / c;
    return this._w = a * u + this._w * d, this._x = n * u + this._x * d, this._y = r * u + this._y * d, this._z = s * u + this._z * d, this._onChangeCallback(), this;
  }
  slerpQuaternions(t, e, n) {
    return this.copy(t).slerp(e, n);
  }
  random() {
    const t = 2 * Math.PI * Math.random(), e = 2 * Math.PI * Math.random(), n = Math.random(), r = Math.sqrt(1 - n), s = Math.sqrt(n);
    return this.set(
      r * Math.sin(t),
      r * Math.cos(t),
      s * Math.sin(e),
      s * Math.cos(e)
    );
  }
  equals(t) {
    return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w;
  }
  fromArray(t, e = 0) {
    return this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t;
  }
  fromBufferAttribute(t, e) {
    return this._x = t.getX(e), this._y = t.getY(e), this._z = t.getZ(e), this._w = t.getW(e), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(t) {
    return this._onChangeCallback = t, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class I {
  constructor(t = 0, e = 0, n = 0) {
    I.prototype.isVector3 = !0, this.x = t, this.y = e, this.z = n;
  }
  set(t, e, n) {
    return n === void 0 && (n = this.z), this.x = t, this.y = e, this.z = n, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this.z = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setZ(t) {
    return this.z = t, this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this.z = t.z, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this.z += t.z, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this.z += t, this;
  }
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this;
  }
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this.z -= t.z, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this.z -= t, this;
  }
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this.z *= t, this;
  }
  multiplyVectors(t, e) {
    return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this;
  }
  applyEuler(t) {
    return this.applyQuaternion(bs.setFromEuler(t));
  }
  applyAxisAngle(t, e) {
    return this.applyQuaternion(bs.setFromAxisAngle(t, e));
  }
  applyMatrix3(t) {
    const e = this.x, n = this.y, r = this.z, s = t.elements;
    return this.x = s[0] * e + s[3] * n + s[6] * r, this.y = s[1] * e + s[4] * n + s[7] * r, this.z = s[2] * e + s[5] * n + s[8] * r, this;
  }
  applyNormalMatrix(t) {
    return this.applyMatrix3(t).normalize();
  }
  applyMatrix4(t) {
    const e = this.x, n = this.y, r = this.z, s = t.elements, a = 1 / (s[3] * e + s[7] * n + s[11] * r + s[15]);
    return this.x = (s[0] * e + s[4] * n + s[8] * r + s[12]) * a, this.y = (s[1] * e + s[5] * n + s[9] * r + s[13]) * a, this.z = (s[2] * e + s[6] * n + s[10] * r + s[14]) * a, this;
  }
  applyQuaternion(t) {
    const e = this.x, n = this.y, r = this.z, s = t.x, a = t.y, o = t.z, l = t.w, c = 2 * (a * r - o * n), h = 2 * (o * e - s * r), u = 2 * (s * n - a * e);
    return this.x = e + l * c + a * u - o * h, this.y = n + l * h + o * c - s * u, this.z = r + l * u + s * h - a * c, this;
  }
  project(t) {
    return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix);
  }
  unproject(t) {
    return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld);
  }
  transformDirection(t) {
    const e = this.x, n = this.y, r = this.z, s = t.elements;
    return this.x = s[0] * e + s[4] * n + s[8] * r, this.y = s[1] * e + s[5] * n + s[9] * r, this.z = s[2] * e + s[6] * n + s[10] * r, this.normalize();
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this.z /= t.z, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this;
  }
  clamp(t, e) {
    return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this;
  }
  clampScalar(t, e) {
    return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this;
  }
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z;
  }
  // TODO lengthSquared?
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this;
  }
  lerpVectors(t, e, n) {
    return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this;
  }
  cross(t) {
    return this.crossVectors(this, t);
  }
  crossVectors(t, e) {
    const n = t.x, r = t.y, s = t.z, a = e.x, o = e.y, l = e.z;
    return this.x = r * l - s * o, this.y = s * a - n * l, this.z = n * o - r * a, this;
  }
  projectOnVector(t) {
    const e = t.lengthSq();
    if (e === 0) return this.set(0, 0, 0);
    const n = t.dot(this) / e;
    return this.copy(t).multiplyScalar(n);
  }
  projectOnPlane(t) {
    return Sr.copy(this).projectOnVector(t), this.sub(Sr);
  }
  reflect(t) {
    return this.sub(Sr.copy(t).multiplyScalar(2 * this.dot(t)));
  }
  angleTo(t) {
    const e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (e === 0) return Math.PI / 2;
    const n = this.dot(t) / e;
    return Math.acos(ve(n, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const e = this.x - t.x, n = this.y - t.y, r = this.z - t.z;
    return e * e + n * n + r * r;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z);
  }
  setFromSpherical(t) {
    return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
  }
  setFromSphericalCoords(t, e, n) {
    const r = Math.sin(e) * t;
    return this.x = r * Math.sin(n), this.y = Math.cos(e) * t, this.z = r * Math.cos(n), this;
  }
  setFromCylindrical(t) {
    return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
  }
  setFromCylindricalCoords(t, e, n) {
    return this.x = t * Math.sin(e), this.y = n, this.z = t * Math.cos(e), this;
  }
  setFromMatrixPosition(t) {
    const e = t.elements;
    return this.x = e[12], this.y = e[13], this.z = e[14], this;
  }
  setFromMatrixScale(t) {
    const e = this.setFromMatrixColumn(t, 0).length(), n = this.setFromMatrixColumn(t, 1).length(), r = this.setFromMatrixColumn(t, 2).length();
    return this.x = e, this.y = n, this.z = r, this;
  }
  setFromMatrixColumn(t, e) {
    return this.fromArray(t.elements, e * 4);
  }
  setFromMatrix3Column(t, e) {
    return this.fromArray(t.elements, e * 3);
  }
  setFromEuler(t) {
    return this.x = t._x, this.y = t._y, this.z = t._z, this;
  }
  setFromColor(t) {
    return this.x = t.r, this.y = t.g, this.z = t.b, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z;
  }
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t;
  }
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const t = Math.random() * Math.PI * 2, e = Math.random() * 2 - 1, n = Math.sqrt(1 - e * e);
    return this.x = n * Math.cos(t), this.y = e, this.z = n * Math.sin(t), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const Sr = /* @__PURE__ */ new I(), bs = /* @__PURE__ */ new Ze();
class vi {
  constructor(t = new I(1 / 0, 1 / 0, 1 / 0), e = new I(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = t, this.max = e;
  }
  set(t, e) {
    return this.min.copy(t), this.max.copy(e), this;
  }
  setFromArray(t) {
    this.makeEmpty();
    for (let e = 0, n = t.length; e < n; e += 3)
      this.expandByPoint(ke.fromArray(t, e));
    return this;
  }
  setFromBufferAttribute(t) {
    this.makeEmpty();
    for (let e = 0, n = t.count; e < n; e++)
      this.expandByPoint(ke.fromBufferAttribute(t, e));
    return this;
  }
  setFromPoints(t) {
    this.makeEmpty();
    for (let e = 0, n = t.length; e < n; e++)
      this.expandByPoint(t[e]);
    return this;
  }
  setFromCenterAndSize(t, e) {
    const n = ke.copy(e).multiplyScalar(0.5);
    return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
  }
  setFromObject(t, e = !1) {
    return this.makeEmpty(), this.expandByObject(t, e);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.min.copy(t.min), this.max.copy(t.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(t) {
    return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(t) {
    return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min);
  }
  expandByPoint(t) {
    return this.min.min(t), this.max.max(t), this;
  }
  expandByVector(t) {
    return this.min.sub(t), this.max.add(t), this;
  }
  expandByScalar(t) {
    return this.min.addScalar(-t), this.max.addScalar(t), this;
  }
  expandByObject(t, e = !1) {
    t.updateWorldMatrix(!1, !1);
    const n = t.geometry;
    if (n !== void 0) {
      const s = n.getAttribute("position");
      if (e === !0 && s !== void 0 && t.isInstancedMesh !== !0)
        for (let a = 0, o = s.count; a < o; a++)
          t.isMesh === !0 ? t.getVertexPosition(a, ke) : ke.fromBufferAttribute(s, a), ke.applyMatrix4(t.matrixWorld), this.expandByPoint(ke);
      else
        t.boundingBox !== void 0 ? (t.boundingBox === null && t.computeBoundingBox(), Ei.copy(t.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), Ei.copy(n.boundingBox)), Ei.applyMatrix4(t.matrixWorld), this.union(Ei);
    }
    const r = t.children;
    for (let s = 0, a = r.length; s < a; s++)
      this.expandByObject(r[s], e);
    return this;
  }
  containsPoint(t) {
    return t.x >= this.min.x && t.x <= this.max.x && t.y >= this.min.y && t.y <= this.max.y && t.z >= this.min.z && t.z <= this.max.z;
  }
  containsBox(t) {
    return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z;
  }
  getParameter(t, e) {
    return e.set(
      (t.x - this.min.x) / (this.max.x - this.min.x),
      (t.y - this.min.y) / (this.max.y - this.min.y),
      (t.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(t) {
    return t.max.x >= this.min.x && t.min.x <= this.max.x && t.max.y >= this.min.y && t.min.y <= this.max.y && t.max.z >= this.min.z && t.min.z <= this.max.z;
  }
  intersectsSphere(t) {
    return this.clampPoint(t.center, ke), ke.distanceToSquared(t.center) <= t.radius * t.radius;
  }
  intersectsPlane(t) {
    let e, n;
    return t.normal.x > 0 ? (e = t.normal.x * this.min.x, n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, n = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, n += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, n += t.normal.z * this.min.z), e <= -t.constant && n >= -t.constant;
  }
  intersectsTriangle(t) {
    if (this.isEmpty())
      return !1;
    this.getCenter(oi), Ti.subVectors(this.max, oi), Un.subVectors(t.a, oi), Nn.subVectors(t.b, oi), Fn.subVectors(t.c, oi), ln.subVectors(Nn, Un), cn.subVectors(Fn, Nn), xn.subVectors(Un, Fn);
    let e = [
      0,
      -ln.z,
      ln.y,
      0,
      -cn.z,
      cn.y,
      0,
      -xn.z,
      xn.y,
      ln.z,
      0,
      -ln.x,
      cn.z,
      0,
      -cn.x,
      xn.z,
      0,
      -xn.x,
      -ln.y,
      ln.x,
      0,
      -cn.y,
      cn.x,
      0,
      -xn.y,
      xn.x,
      0
    ];
    return !Mr(e, Un, Nn, Fn, Ti) || (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Mr(e, Un, Nn, Fn, Ti)) ? !1 : (Ai.crossVectors(ln, cn), e = [Ai.x, Ai.y, Ai.z], Mr(e, Un, Nn, Fn, Ti));
  }
  clampPoint(t, e) {
    return e.copy(t).clamp(this.min, this.max);
  }
  distanceToPoint(t) {
    return this.clampPoint(t, ke).distanceTo(t);
  }
  getBoundingSphere(t) {
    return this.isEmpty() ? t.makeEmpty() : (this.getCenter(t.center), t.radius = this.getSize(ke).length() * 0.5), t;
  }
  intersect(t) {
    return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(t) {
    return this.min.min(t.min), this.max.max(t.max), this;
  }
  applyMatrix4(t) {
    return this.isEmpty() ? this : (tn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), tn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), tn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), tn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), tn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), tn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), tn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), tn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(tn), this);
  }
  translate(t) {
    return this.min.add(t), this.max.add(t), this;
  }
  equals(t) {
    return t.min.equals(this.min) && t.max.equals(this.max);
  }
}
const tn = [
  /* @__PURE__ */ new I(),
  /* @__PURE__ */ new I(),
  /* @__PURE__ */ new I(),
  /* @__PURE__ */ new I(),
  /* @__PURE__ */ new I(),
  /* @__PURE__ */ new I(),
  /* @__PURE__ */ new I(),
  /* @__PURE__ */ new I()
], ke = /* @__PURE__ */ new I(), Ei = /* @__PURE__ */ new vi(), Un = /* @__PURE__ */ new I(), Nn = /* @__PURE__ */ new I(), Fn = /* @__PURE__ */ new I(), ln = /* @__PURE__ */ new I(), cn = /* @__PURE__ */ new I(), xn = /* @__PURE__ */ new I(), oi = /* @__PURE__ */ new I(), Ti = /* @__PURE__ */ new I(), Ai = /* @__PURE__ */ new I(), Sn = /* @__PURE__ */ new I();
function Mr(i, t, e, n, r) {
  for (let s = 0, a = i.length - 3; s <= a; s += 3) {
    Sn.fromArray(i, s);
    const o = r.x * Math.abs(Sn.x) + r.y * Math.abs(Sn.y) + r.z * Math.abs(Sn.z), l = t.dot(Sn), c = e.dot(Sn), h = n.dot(Sn);
    if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > o)
      return !1;
  }
  return !0;
}
const bo = /* @__PURE__ */ new vi(), li = /* @__PURE__ */ new I(), yr = /* @__PURE__ */ new I();
class is {
  constructor(t = new I(), e = -1) {
    this.isSphere = !0, this.center = t, this.radius = e;
  }
  set(t, e) {
    return this.center.copy(t), this.radius = e, this;
  }
  setFromPoints(t, e) {
    const n = this.center;
    e !== void 0 ? n.copy(e) : bo.setFromPoints(t).getCenter(n);
    let r = 0;
    for (let s = 0, a = t.length; s < a; s++)
      r = Math.max(r, n.distanceToSquared(t[s]));
    return this.radius = Math.sqrt(r), this;
  }
  copy(t) {
    return this.center.copy(t.center), this.radius = t.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(t) {
    return t.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(t) {
    return t.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(t) {
    const e = this.radius + t.radius;
    return t.center.distanceToSquared(this.center) <= e * e;
  }
  intersectsBox(t) {
    return t.intersectsSphere(this);
  }
  intersectsPlane(t) {
    return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(t, e) {
    const n = this.center.distanceToSquared(t);
    return e.copy(t), n > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e;
  }
  getBoundingBox(t) {
    return this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t);
  }
  applyMatrix4(t) {
    return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this;
  }
  translate(t) {
    return this.center.add(t), this;
  }
  expandByPoint(t) {
    if (this.isEmpty())
      return this.center.copy(t), this.radius = 0, this;
    li.subVectors(t, this.center);
    const e = li.lengthSq();
    if (e > this.radius * this.radius) {
      const n = Math.sqrt(e), r = (n - this.radius) * 0.5;
      this.center.addScaledVector(li, r / n), this.radius += r;
    }
    return this;
  }
  union(t) {
    return t.isEmpty() ? this : this.isEmpty() ? (this.copy(t), this) : (this.center.equals(t.center) === !0 ? this.radius = Math.max(this.radius, t.radius) : (yr.subVectors(t.center, this.center).setLength(t.radius), this.expandByPoint(li.copy(t.center).add(yr)), this.expandByPoint(li.copy(t.center).sub(yr))), this);
  }
  equals(t) {
    return t.center.equals(this.center) && t.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const en = /* @__PURE__ */ new I(), Er = /* @__PURE__ */ new I(), bi = /* @__PURE__ */ new I(), hn = /* @__PURE__ */ new I(), Tr = /* @__PURE__ */ new I(), wi = /* @__PURE__ */ new I(), Ar = /* @__PURE__ */ new I();
class wo {
  constructor(t = new I(), e = new I(0, 0, -1)) {
    this.origin = t, this.direction = e;
  }
  set(t, e) {
    return this.origin.copy(t), this.direction.copy(e), this;
  }
  copy(t) {
    return this.origin.copy(t.origin), this.direction.copy(t.direction), this;
  }
  at(t, e) {
    return e.copy(this.origin).addScaledVector(this.direction, t);
  }
  lookAt(t) {
    return this.direction.copy(t).sub(this.origin).normalize(), this;
  }
  recast(t) {
    return this.origin.copy(this.at(t, en)), this;
  }
  closestPointToPoint(t, e) {
    e.subVectors(t, this.origin);
    const n = e.dot(this.direction);
    return n < 0 ? e.copy(this.origin) : e.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(t) {
    return Math.sqrt(this.distanceSqToPoint(t));
  }
  distanceSqToPoint(t) {
    const e = en.subVectors(t, this.origin).dot(this.direction);
    return e < 0 ? this.origin.distanceToSquared(t) : (en.copy(this.origin).addScaledVector(this.direction, e), en.distanceToSquared(t));
  }
  distanceSqToSegment(t, e, n, r) {
    Er.copy(t).add(e).multiplyScalar(0.5), bi.copy(e).sub(t).normalize(), hn.copy(this.origin).sub(Er);
    const s = t.distanceTo(e) * 0.5, a = -this.direction.dot(bi), o = hn.dot(this.direction), l = -hn.dot(bi), c = hn.lengthSq(), h = Math.abs(1 - a * a);
    let u, d, f, _;
    if (h > 0)
      if (u = a * l - o, d = a * o - l, _ = s * h, u >= 0)
        if (d >= -_)
          if (d <= _) {
            const x = 1 / h;
            u *= x, d *= x, f = u * (u + a * d + 2 * o) + d * (a * u + d + 2 * l) + c;
          } else
            d = s, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * l) + c;
        else
          d = -s, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * l) + c;
      else
        d <= -_ ? (u = Math.max(0, -(-a * s + o)), d = u > 0 ? -s : Math.min(Math.max(-s, -l), s), f = -u * u + d * (d + 2 * l) + c) : d <= _ ? (u = 0, d = Math.min(Math.max(-s, -l), s), f = d * (d + 2 * l) + c) : (u = Math.max(0, -(a * s + o)), d = u > 0 ? s : Math.min(Math.max(-s, -l), s), f = -u * u + d * (d + 2 * l) + c);
    else
      d = a > 0 ? -s : s, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * l) + c;
    return n && n.copy(this.origin).addScaledVector(this.direction, u), r && r.copy(Er).addScaledVector(bi, d), f;
  }
  intersectSphere(t, e) {
    en.subVectors(t.center, this.origin);
    const n = en.dot(this.direction), r = en.dot(en) - n * n, s = t.radius * t.radius;
    if (r > s) return null;
    const a = Math.sqrt(s - r), o = n - a, l = n + a;
    return l < 0 ? null : o < 0 ? this.at(l, e) : this.at(o, e);
  }
  intersectsSphere(t) {
    return this.distanceSqToPoint(t.center) <= t.radius * t.radius;
  }
  distanceToPlane(t) {
    const e = t.normal.dot(this.direction);
    if (e === 0)
      return t.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(t.normal) + t.constant) / e;
    return n >= 0 ? n : null;
  }
  intersectPlane(t, e) {
    const n = this.distanceToPlane(t);
    return n === null ? null : this.at(n, e);
  }
  intersectsPlane(t) {
    const e = t.distanceToPoint(this.origin);
    return e === 0 || t.normal.dot(this.direction) * e < 0;
  }
  intersectBox(t, e) {
    let n, r, s, a, o, l;
    const c = 1 / this.direction.x, h = 1 / this.direction.y, u = 1 / this.direction.z, d = this.origin;
    return c >= 0 ? (n = (t.min.x - d.x) * c, r = (t.max.x - d.x) * c) : (n = (t.max.x - d.x) * c, r = (t.min.x - d.x) * c), h >= 0 ? (s = (t.min.y - d.y) * h, a = (t.max.y - d.y) * h) : (s = (t.max.y - d.y) * h, a = (t.min.y - d.y) * h), n > a || s > r || ((s > n || isNaN(n)) && (n = s), (a < r || isNaN(r)) && (r = a), u >= 0 ? (o = (t.min.z - d.z) * u, l = (t.max.z - d.z) * u) : (o = (t.max.z - d.z) * u, l = (t.min.z - d.z) * u), n > l || o > r) || ((o > n || n !== n) && (n = o), (l < r || r !== r) && (r = l), r < 0) ? null : this.at(n >= 0 ? n : r, e);
  }
  intersectsBox(t) {
    return this.intersectBox(t, en) !== null;
  }
  intersectTriangle(t, e, n, r, s) {
    Tr.subVectors(e, t), wi.subVectors(n, t), Ar.crossVectors(Tr, wi);
    let a = this.direction.dot(Ar), o;
    if (a > 0) {
      if (r) return null;
      o = 1;
    } else if (a < 0)
      o = -1, a = -a;
    else
      return null;
    hn.subVectors(this.origin, t);
    const l = o * this.direction.dot(wi.crossVectors(hn, wi));
    if (l < 0)
      return null;
    const c = o * this.direction.dot(Tr.cross(hn));
    if (c < 0 || l + c > a)
      return null;
    const h = -o * hn.dot(Ar);
    return h < 0 ? null : this.at(h / a, s);
  }
  applyMatrix4(t) {
    return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this;
  }
  equals(t) {
    return t.origin.equals(this.origin) && t.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class re {
  constructor(t, e, n, r, s, a, o, l, c, h, u, d, f, _, x, m) {
    re.prototype.isMatrix4 = !0, this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ], t !== void 0 && this.set(t, e, n, r, s, a, o, l, c, h, u, d, f, _, x, m);
  }
  set(t, e, n, r, s, a, o, l, c, h, u, d, f, _, x, m) {
    const p = this.elements;
    return p[0] = t, p[4] = e, p[8] = n, p[12] = r, p[1] = s, p[5] = a, p[9] = o, p[13] = l, p[2] = c, p[6] = h, p[10] = u, p[14] = d, p[3] = f, p[7] = _, p[11] = x, p[15] = m, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  clone() {
    return new re().fromArray(this.elements);
  }
  copy(t) {
    const e = this.elements, n = t.elements;
    return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], e[9] = n[9], e[10] = n[10], e[11] = n[11], e[12] = n[12], e[13] = n[13], e[14] = n[14], e[15] = n[15], this;
  }
  copyPosition(t) {
    const e = this.elements, n = t.elements;
    return e[12] = n[12], e[13] = n[13], e[14] = n[14], this;
  }
  setFromMatrix3(t) {
    const e = t.elements;
    return this.set(
      e[0],
      e[3],
      e[6],
      0,
      e[1],
      e[4],
      e[7],
      0,
      e[2],
      e[5],
      e[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractBasis(t, e, n) {
    return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(t, e, n) {
    return this.set(
      t.x,
      e.x,
      n.x,
      0,
      t.y,
      e.y,
      n.y,
      0,
      t.z,
      e.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(t) {
    const e = this.elements, n = t.elements, r = 1 / Bn.setFromMatrixColumn(t, 0).length(), s = 1 / Bn.setFromMatrixColumn(t, 1).length(), a = 1 / Bn.setFromMatrixColumn(t, 2).length();
    return e[0] = n[0] * r, e[1] = n[1] * r, e[2] = n[2] * r, e[3] = 0, e[4] = n[4] * s, e[5] = n[5] * s, e[6] = n[6] * s, e[7] = 0, e[8] = n[8] * a, e[9] = n[9] * a, e[10] = n[10] * a, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
  }
  makeRotationFromEuler(t) {
    const e = this.elements, n = t.x, r = t.y, s = t.z, a = Math.cos(n), o = Math.sin(n), l = Math.cos(r), c = Math.sin(r), h = Math.cos(s), u = Math.sin(s);
    if (t.order === "XYZ") {
      const d = a * h, f = a * u, _ = o * h, x = o * u;
      e[0] = l * h, e[4] = -l * u, e[8] = c, e[1] = f + _ * c, e[5] = d - x * c, e[9] = -o * l, e[2] = x - d * c, e[6] = _ + f * c, e[10] = a * l;
    } else if (t.order === "YXZ") {
      const d = l * h, f = l * u, _ = c * h, x = c * u;
      e[0] = d + x * o, e[4] = _ * o - f, e[8] = a * c, e[1] = a * u, e[5] = a * h, e[9] = -o, e[2] = f * o - _, e[6] = x + d * o, e[10] = a * l;
    } else if (t.order === "ZXY") {
      const d = l * h, f = l * u, _ = c * h, x = c * u;
      e[0] = d - x * o, e[4] = -a * u, e[8] = _ + f * o, e[1] = f + _ * o, e[5] = a * h, e[9] = x - d * o, e[2] = -a * c, e[6] = o, e[10] = a * l;
    } else if (t.order === "ZYX") {
      const d = a * h, f = a * u, _ = o * h, x = o * u;
      e[0] = l * h, e[4] = _ * c - f, e[8] = d * c + x, e[1] = l * u, e[5] = x * c + d, e[9] = f * c - _, e[2] = -c, e[6] = o * l, e[10] = a * l;
    } else if (t.order === "YZX") {
      const d = a * l, f = a * c, _ = o * l, x = o * c;
      e[0] = l * h, e[4] = x - d * u, e[8] = _ * u + f, e[1] = u, e[5] = a * h, e[9] = -o * h, e[2] = -c * h, e[6] = f * u + _, e[10] = d - x * u;
    } else if (t.order === "XZY") {
      const d = a * l, f = a * c, _ = o * l, x = o * c;
      e[0] = l * h, e[4] = -u, e[8] = c * h, e[1] = d * u + x, e[5] = a * h, e[9] = f * u - _, e[2] = _ * u - f, e[6] = o * h, e[10] = x * u + d;
    }
    return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
  }
  makeRotationFromQuaternion(t) {
    return this.compose(Ro, t, Co);
  }
  lookAt(t, e, n) {
    const r = this.elements;
    return Pe.subVectors(t, e), Pe.lengthSq() === 0 && (Pe.z = 1), Pe.normalize(), un.crossVectors(n, Pe), un.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Pe.x += 1e-4 : Pe.z += 1e-4, Pe.normalize(), un.crossVectors(n, Pe)), un.normalize(), Ri.crossVectors(Pe, un), r[0] = un.x, r[4] = Ri.x, r[8] = Pe.x, r[1] = un.y, r[5] = Ri.y, r[9] = Pe.y, r[2] = un.z, r[6] = Ri.z, r[10] = Pe.z, this;
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    const n = t.elements, r = e.elements, s = this.elements, a = n[0], o = n[4], l = n[8], c = n[12], h = n[1], u = n[5], d = n[9], f = n[13], _ = n[2], x = n[6], m = n[10], p = n[14], T = n[3], S = n[7], y = n[11], C = n[15], w = r[0], b = r[4], U = r[8], K = r[12], g = r[1], E = r[5], z = r[9], O = r[13], V = r[2], J = r[6], G = r[10], Q = r[14], H = r[3], lt = r[7], ct = r[11], vt = r[15];
    return s[0] = a * w + o * g + l * V + c * H, s[4] = a * b + o * E + l * J + c * lt, s[8] = a * U + o * z + l * G + c * ct, s[12] = a * K + o * O + l * Q + c * vt, s[1] = h * w + u * g + d * V + f * H, s[5] = h * b + u * E + d * J + f * lt, s[9] = h * U + u * z + d * G + f * ct, s[13] = h * K + u * O + d * Q + f * vt, s[2] = _ * w + x * g + m * V + p * H, s[6] = _ * b + x * E + m * J + p * lt, s[10] = _ * U + x * z + m * G + p * ct, s[14] = _ * K + x * O + m * Q + p * vt, s[3] = T * w + S * g + y * V + C * H, s[7] = T * b + S * E + y * J + C * lt, s[11] = T * U + S * z + y * G + C * ct, s[15] = T * K + S * O + y * Q + C * vt, this;
  }
  multiplyScalar(t) {
    const e = this.elements;
    return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this;
  }
  determinant() {
    const t = this.elements, e = t[0], n = t[4], r = t[8], s = t[12], a = t[1], o = t[5], l = t[9], c = t[13], h = t[2], u = t[6], d = t[10], f = t[14], _ = t[3], x = t[7], m = t[11], p = t[15];
    return _ * (+s * l * u - r * c * u - s * o * d + n * c * d + r * o * f - n * l * f) + x * (+e * l * f - e * c * d + s * a * d - r * a * f + r * c * h - s * l * h) + m * (+e * c * u - e * o * f - s * a * u + n * a * f + s * o * h - n * c * h) + p * (-r * o * h - e * l * u + e * o * d + r * a * u - n * a * d + n * l * h);
  }
  transpose() {
    const t = this.elements;
    let e;
    return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this;
  }
  setPosition(t, e, n) {
    const r = this.elements;
    return t.isVector3 ? (r[12] = t.x, r[13] = t.y, r[14] = t.z) : (r[12] = t, r[13] = e, r[14] = n), this;
  }
  invert() {
    const t = this.elements, e = t[0], n = t[1], r = t[2], s = t[3], a = t[4], o = t[5], l = t[6], c = t[7], h = t[8], u = t[9], d = t[10], f = t[11], _ = t[12], x = t[13], m = t[14], p = t[15], T = u * m * c - x * d * c + x * l * f - o * m * f - u * l * p + o * d * p, S = _ * d * c - h * m * c - _ * l * f + a * m * f + h * l * p - a * d * p, y = h * x * c - _ * u * c + _ * o * f - a * x * f - h * o * p + a * u * p, C = _ * u * l - h * x * l - _ * o * d + a * x * d + h * o * m - a * u * m, w = e * T + n * S + r * y + s * C;
    if (w === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const b = 1 / w;
    return t[0] = T * b, t[1] = (x * d * s - u * m * s - x * r * f + n * m * f + u * r * p - n * d * p) * b, t[2] = (o * m * s - x * l * s + x * r * c - n * m * c - o * r * p + n * l * p) * b, t[3] = (u * l * s - o * d * s - u * r * c + n * d * c + o * r * f - n * l * f) * b, t[4] = S * b, t[5] = (h * m * s - _ * d * s + _ * r * f - e * m * f - h * r * p + e * d * p) * b, t[6] = (_ * l * s - a * m * s - _ * r * c + e * m * c + a * r * p - e * l * p) * b, t[7] = (a * d * s - h * l * s + h * r * c - e * d * c - a * r * f + e * l * f) * b, t[8] = y * b, t[9] = (_ * u * s - h * x * s - _ * n * f + e * x * f + h * n * p - e * u * p) * b, t[10] = (a * x * s - _ * o * s + _ * n * c - e * x * c - a * n * p + e * o * p) * b, t[11] = (h * o * s - a * u * s - h * n * c + e * u * c + a * n * f - e * o * f) * b, t[12] = C * b, t[13] = (h * x * r - _ * u * r + _ * n * d - e * x * d - h * n * m + e * u * m) * b, t[14] = (_ * o * r - a * x * r - _ * n * l + e * x * l + a * n * m - e * o * m) * b, t[15] = (a * u * r - h * o * r + h * n * l - e * u * l - a * n * d + e * o * d) * b, this;
  }
  scale(t) {
    const e = this.elements, n = t.x, r = t.y, s = t.z;
    return e[0] *= n, e[4] *= r, e[8] *= s, e[1] *= n, e[5] *= r, e[9] *= s, e[2] *= n, e[6] *= r, e[10] *= s, e[3] *= n, e[7] *= r, e[11] *= s, this;
  }
  getMaxScaleOnAxis() {
    const t = this.elements, e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2], n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6], r = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
    return Math.sqrt(Math.max(e, n, r));
  }
  makeTranslation(t, e, n) {
    return t.isVector3 ? this.set(
      1,
      0,
      0,
      t.x,
      0,
      1,
      0,
      t.y,
      0,
      0,
      1,
      t.z,
      0,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      0,
      t,
      0,
      1,
      0,
      e,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationX(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      e,
      -n,
      0,
      0,
      n,
      e,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(
      e,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      e,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationZ(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(
      e,
      -n,
      0,
      0,
      n,
      e,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationAxis(t, e) {
    const n = Math.cos(e), r = Math.sin(e), s = 1 - n, a = t.x, o = t.y, l = t.z, c = s * a, h = s * o;
    return this.set(
      c * a + n,
      c * o - r * l,
      c * l + r * o,
      0,
      c * o + r * l,
      h * o + n,
      h * l - r * a,
      0,
      c * l - r * o,
      h * l + r * a,
      s * l * l + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(t, e, n) {
    return this.set(
      t,
      0,
      0,
      0,
      0,
      e,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeShear(t, e, n, r, s, a) {
    return this.set(
      1,
      n,
      s,
      0,
      t,
      1,
      a,
      0,
      e,
      r,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(t, e, n) {
    const r = this.elements, s = e._x, a = e._y, o = e._z, l = e._w, c = s + s, h = a + a, u = o + o, d = s * c, f = s * h, _ = s * u, x = a * h, m = a * u, p = o * u, T = l * c, S = l * h, y = l * u, C = n.x, w = n.y, b = n.z;
    return r[0] = (1 - (x + p)) * C, r[1] = (f + y) * C, r[2] = (_ - S) * C, r[3] = 0, r[4] = (f - y) * w, r[5] = (1 - (d + p)) * w, r[6] = (m + T) * w, r[7] = 0, r[8] = (_ + S) * b, r[9] = (m - T) * b, r[10] = (1 - (d + x)) * b, r[11] = 0, r[12] = t.x, r[13] = t.y, r[14] = t.z, r[15] = 1, this;
  }
  decompose(t, e, n) {
    const r = this.elements;
    let s = Bn.set(r[0], r[1], r[2]).length();
    const a = Bn.set(r[4], r[5], r[6]).length(), o = Bn.set(r[8], r[9], r[10]).length();
    this.determinant() < 0 && (s = -s), t.x = r[12], t.y = r[13], t.z = r[14], He.copy(this);
    const c = 1 / s, h = 1 / a, u = 1 / o;
    return He.elements[0] *= c, He.elements[1] *= c, He.elements[2] *= c, He.elements[4] *= h, He.elements[5] *= h, He.elements[6] *= h, He.elements[8] *= u, He.elements[9] *= u, He.elements[10] *= u, e.setFromRotationMatrix(He), n.x = s, n.y = a, n.z = o, this;
  }
  makePerspective(t, e, n, r, s, a, o = 2e3) {
    const l = this.elements, c = 2 * s / (e - t), h = 2 * s / (n - r), u = (e + t) / (e - t), d = (n + r) / (n - r);
    let f, _;
    if (o === 2e3)
      f = -(a + s) / (a - s), _ = -2 * a * s / (a - s);
    else if (o === 2001)
      f = -a / (a - s), _ = -a * s / (a - s);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return l[0] = c, l[4] = 0, l[8] = u, l[12] = 0, l[1] = 0, l[5] = h, l[9] = d, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = f, l[14] = _, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  makeOrthographic(t, e, n, r, s, a, o = 2e3) {
    const l = this.elements, c = 1 / (e - t), h = 1 / (n - r), u = 1 / (a - s), d = (e + t) * c, f = (n + r) * h;
    let _, x;
    if (o === 2e3)
      _ = (a + s) * u, x = -2 * u;
    else if (o === 2001)
      _ = s * u, x = -1 * u;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -d, l[1] = 0, l[5] = 2 * h, l[9] = 0, l[13] = -f, l[2] = 0, l[6] = 0, l[10] = x, l[14] = -_, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
  }
  equals(t) {
    const e = this.elements, n = t.elements;
    for (let r = 0; r < 16; r++)
      if (e[r] !== n[r]) return !1;
    return !0;
  }
  fromArray(t, e = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = t[n + e];
    return this;
  }
  toArray(t = [], e = 0) {
    const n = this.elements;
    return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t[e + 9] = n[9], t[e + 10] = n[10], t[e + 11] = n[11], t[e + 12] = n[12], t[e + 13] = n[13], t[e + 14] = n[14], t[e + 15] = n[15], t;
  }
}
const Bn = /* @__PURE__ */ new I(), He = /* @__PURE__ */ new re(), Ro = /* @__PURE__ */ new I(0, 0, 0), Co = /* @__PURE__ */ new I(1, 1, 1), un = /* @__PURE__ */ new I(), Ri = /* @__PURE__ */ new I(), Pe = /* @__PURE__ */ new I(), ws = /* @__PURE__ */ new re(), Rs = /* @__PURE__ */ new Ze();
class qe {
  constructor(t = 0, e = 0, n = 0, r = qe.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = t, this._y = e, this._z = n, this._order = r;
  }
  get x() {
    return this._x;
  }
  set x(t) {
    this._x = t, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    this._y = t, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    this._z = t, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(t) {
    this._order = t, this._onChangeCallback();
  }
  set(t, e, n, r = this._order) {
    return this._x = t, this._y = e, this._z = n, this._order = r, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(t) {
    return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(t, e = this._order, n = !0) {
    const r = t.elements, s = r[0], a = r[4], o = r[8], l = r[1], c = r[5], h = r[9], u = r[2], d = r[6], f = r[10];
    switch (e) {
      case "XYZ":
        this._y = Math.asin(ve(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-h, f), this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(d, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-ve(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(o, f), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-u, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(ve(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(-u, f), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(l, s));
        break;
      case "ZYX":
        this._y = Math.asin(-ve(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._x = Math.atan2(d, f), this._z = Math.atan2(l, s)) : (this._x = 0, this._z = Math.atan2(-a, c));
        break;
      case "YZX":
        this._z = Math.asin(ve(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-h, c), this._y = Math.atan2(-u, s)) : (this._x = 0, this._y = Math.atan2(o, f));
        break;
      case "XZY":
        this._z = Math.asin(-ve(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-h, f), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e);
    }
    return this._order = e, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(t, e, n) {
    return ws.makeRotationFromQuaternion(t), this.setFromRotationMatrix(ws, e, n);
  }
  setFromVector3(t, e = this._order) {
    return this.set(t.x, t.y, t.z, e);
  }
  reorder(t) {
    return Rs.setFromEuler(this), this.setFromQuaternion(Rs, t);
  }
  equals(t) {
    return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order;
  }
  fromArray(t) {
    return this._x = t[0], this._y = t[1], this._z = t[2], t[3] !== void 0 && (this._order = t[3]), this._onChangeCallback(), this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t;
  }
  _onChange(t) {
    return this._onChangeCallback = t, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
qe.DEFAULT_ORDER = "XYZ";
class Ca {
  constructor() {
    this.mask = 1;
  }
  set(t) {
    this.mask = (1 << t | 0) >>> 0;
  }
  enable(t) {
    this.mask |= 1 << t | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(t) {
    this.mask ^= 1 << t | 0;
  }
  disable(t) {
    this.mask &= ~(1 << t | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(t) {
    return (this.mask & t.mask) !== 0;
  }
  isEnabled(t) {
    return (this.mask & (1 << t | 0)) !== 0;
  }
}
let Po = 0;
const Cs = /* @__PURE__ */ new I(), On = /* @__PURE__ */ new Ze(), nn = /* @__PURE__ */ new re(), Ci = /* @__PURE__ */ new I(), ci = /* @__PURE__ */ new I(), Io = /* @__PURE__ */ new I(), Lo = /* @__PURE__ */ new Ze(), Ps = /* @__PURE__ */ new I(1, 0, 0), Is = /* @__PURE__ */ new I(0, 1, 0), Ls = /* @__PURE__ */ new I(0, 0, 1), Ds = { type: "added" }, Do = { type: "removed" }, zn = { type: "childadded", child: null }, br = { type: "childremoved", child: null };
class _e extends In {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Po++ }), this.uuid = an(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = _e.DEFAULT_UP.clone();
    const t = new I(), e = new qe(), n = new Ze(), r = new I(1, 1, 1);
    function s() {
      n.setFromEuler(e, !1);
    }
    function a() {
      e.setFromQuaternion(n, void 0, !1);
    }
    e._onChange(s), n._onChange(a), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: r
      },
      modelViewMatrix: {
        value: new re()
      },
      normalMatrix: {
        value: new Lt()
      }
    }), this.matrix = new re(), this.matrixWorld = new re(), this.matrixAutoUpdate = _e.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = _e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new Ca(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(t) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(t) {
    return this.quaternion.premultiply(t), this;
  }
  setRotationFromAxisAngle(t, e) {
    this.quaternion.setFromAxisAngle(t, e);
  }
  setRotationFromEuler(t) {
    this.quaternion.setFromEuler(t, !0);
  }
  setRotationFromMatrix(t) {
    this.quaternion.setFromRotationMatrix(t);
  }
  setRotationFromQuaternion(t) {
    this.quaternion.copy(t);
  }
  rotateOnAxis(t, e) {
    return On.setFromAxisAngle(t, e), this.quaternion.multiply(On), this;
  }
  rotateOnWorldAxis(t, e) {
    return On.setFromAxisAngle(t, e), this.quaternion.premultiply(On), this;
  }
  rotateX(t) {
    return this.rotateOnAxis(Ps, t);
  }
  rotateY(t) {
    return this.rotateOnAxis(Is, t);
  }
  rotateZ(t) {
    return this.rotateOnAxis(Ls, t);
  }
  translateOnAxis(t, e) {
    return Cs.copy(t).applyQuaternion(this.quaternion), this.position.add(Cs.multiplyScalar(e)), this;
  }
  translateX(t) {
    return this.translateOnAxis(Ps, t);
  }
  translateY(t) {
    return this.translateOnAxis(Is, t);
  }
  translateZ(t) {
    return this.translateOnAxis(Ls, t);
  }
  localToWorld(t) {
    return this.updateWorldMatrix(!0, !1), t.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(t) {
    return this.updateWorldMatrix(!0, !1), t.applyMatrix4(nn.copy(this.matrixWorld).invert());
  }
  lookAt(t, e, n) {
    t.isVector3 ? Ci.copy(t) : Ci.set(t, e, n);
    const r = this.parent;
    this.updateWorldMatrix(!0, !1), ci.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? nn.lookAt(ci, Ci, this.up) : nn.lookAt(Ci, ci, this.up), this.quaternion.setFromRotationMatrix(nn), r && (nn.extractRotation(r.matrixWorld), On.setFromRotationMatrix(nn), this.quaternion.premultiply(On.invert()));
  }
  add(t) {
    if (arguments.length > 1) {
      for (let e = 0; e < arguments.length; e++)
        this.add(arguments[e]);
      return this;
    }
    return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (t.removeFromParent(), t.parent = this, this.children.push(t), t.dispatchEvent(Ds), zn.child = t, this.dispatchEvent(zn), zn.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this);
  }
  remove(t) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const e = this.children.indexOf(t);
    return e !== -1 && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(Do), br.child = t, this.dispatchEvent(br), br.child = null), this;
  }
  removeFromParent() {
    const t = this.parent;
    return t !== null && t.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(t) {
    return this.updateWorldMatrix(!0, !1), nn.copy(this.matrixWorld).invert(), t.parent !== null && (t.parent.updateWorldMatrix(!0, !1), nn.multiply(t.parent.matrixWorld)), t.applyMatrix4(nn), t.removeFromParent(), t.parent = this, this.children.push(t), t.updateWorldMatrix(!1, !0), t.dispatchEvent(Ds), zn.child = t, this.dispatchEvent(zn), zn.child = null, this;
  }
  getObjectById(t) {
    return this.getObjectByProperty("id", t);
  }
  getObjectByName(t) {
    return this.getObjectByProperty("name", t);
  }
  getObjectByProperty(t, e) {
    if (this[t] === e) return this;
    for (let n = 0, r = this.children.length; n < r; n++) {
      const a = this.children[n].getObjectByProperty(t, e);
      if (a !== void 0)
        return a;
    }
  }
  getObjectsByProperty(t, e, n = []) {
    this[t] === e && n.push(this);
    const r = this.children;
    for (let s = 0, a = r.length; s < a; s++)
      r[s].getObjectsByProperty(t, e, n);
    return n;
  }
  getWorldPosition(t) {
    return this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(t) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ci, t, Io), t;
  }
  getWorldScale(t) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ci, Lo, t), t;
  }
  getWorldDirection(t) {
    this.updateWorldMatrix(!0, !1);
    const e = this.matrixWorld.elements;
    return t.set(e[8], e[9], e[10]).normalize();
  }
  raycast() {
  }
  traverse(t) {
    t(this);
    const e = this.children;
    for (let n = 0, r = e.length; n < r; n++)
      e[n].traverse(t);
  }
  traverseVisible(t) {
    if (this.visible === !1) return;
    t(this);
    const e = this.children;
    for (let n = 0, r = e.length; n < r; n++)
      e[n].traverseVisible(t);
  }
  traverseAncestors(t) {
    const e = this.parent;
    e !== null && (t(e), e.traverseAncestors(t));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(t) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, t = !0);
    const e = this.children;
    for (let n = 0, r = e.length; n < r; n++)
      e[n].updateMatrixWorld(t);
  }
  updateWorldMatrix(t, e) {
    const n = this.parent;
    if (t === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), e === !0) {
      const r = this.children;
      for (let s = 0, a = r.length; s < a; s++)
        r[s].updateWorldMatrix(!1, !0);
    }
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string", n = {};
    e && (t = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, n.metadata = {
      version: 4.6,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const r = {};
    r.uuid = this.uuid, r.type = this.type, this.name !== "" && (r.name = this.name), this.castShadow === !0 && (r.castShadow = !0), this.receiveShadow === !0 && (r.receiveShadow = !0), this.visible === !1 && (r.visible = !1), this.frustumCulled === !1 && (r.frustumCulled = !1), this.renderOrder !== 0 && (r.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), r.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (r.type = "BatchedMesh", r.perObjectFrustumCulled = this.perObjectFrustumCulled, r.sortObjects = this.sortObjects, r.drawRanges = this._drawRanges, r.reservedRanges = this._reservedRanges, r.visibility = this._visibility, r.active = this._active, r.bounds = this._bounds.map((o) => ({
      boxInitialized: o.boxInitialized,
      boxMin: o.box.min.toArray(),
      boxMax: o.box.max.toArray(),
      sphereInitialized: o.sphereInitialized,
      sphereRadius: o.sphere.radius,
      sphereCenter: o.sphere.center.toArray()
    })), r.maxInstanceCount = this._maxInstanceCount, r.maxVertexCount = this._maxVertexCount, r.maxIndexCount = this._maxIndexCount, r.geometryInitialized = this._geometryInitialized, r.geometryCount = this._geometryCount, r.matricesTexture = this._matricesTexture.toJSON(t), this._colorsTexture !== null && (r.colorsTexture = this._colorsTexture.toJSON(t)), this.boundingSphere !== null && (r.boundingSphere = {
      center: r.boundingSphere.center.toArray(),
      radius: r.boundingSphere.radius
    }), this.boundingBox !== null && (r.boundingBox = {
      min: r.boundingBox.min.toArray(),
      max: r.boundingBox.max.toArray()
    }));
    function s(o, l) {
      return o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(t)), l.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(t).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (r.environment = this.environment.toJSON(t).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = s(t.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const l = o.shapes;
        if (Array.isArray(l))
          for (let c = 0, h = l.length; c < h; c++) {
            const u = l[c];
            s(t.shapes, u);
          }
        else
          s(t.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(t.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const o = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          o.push(s(t.materials, this.material[l]));
        r.material = o;
      } else
        r.material = s(t.materials, this.material);
    if (this.children.length > 0) {
      r.children = [];
      for (let o = 0; o < this.children.length; o++)
        r.children.push(this.children[o].toJSON(t).object);
    }
    if (this.animations.length > 0) {
      r.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const l = this.animations[o];
        r.animations.push(s(t.animations, l));
      }
    }
    if (e) {
      const o = a(t.geometries), l = a(t.materials), c = a(t.textures), h = a(t.images), u = a(t.shapes), d = a(t.skeletons), f = a(t.animations), _ = a(t.nodes);
      o.length > 0 && (n.geometries = o), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), h.length > 0 && (n.images = h), u.length > 0 && (n.shapes = u), d.length > 0 && (n.skeletons = d), f.length > 0 && (n.animations = f), _.length > 0 && (n.nodes = _);
    }
    return n.object = r, n;
    function a(o) {
      const l = [];
      for (const c in o) {
        const h = o[c];
        delete h.metadata, l.push(h);
      }
      return l;
    }
  }
  clone(t) {
    return new this.constructor().copy(this, t);
  }
  copy(t, e = !0) {
    if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.animations = t.animations.slice(), this.userData = JSON.parse(JSON.stringify(t.userData)), e === !0)
      for (let n = 0; n < t.children.length; n++) {
        const r = t.children[n];
        this.add(r.clone());
      }
    return this;
  }
}
_e.DEFAULT_UP = /* @__PURE__ */ new I(0, 1, 0);
_e.DEFAULT_MATRIX_AUTO_UPDATE = !0;
_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const We = /* @__PURE__ */ new I(), rn = /* @__PURE__ */ new I(), wr = /* @__PURE__ */ new I(), sn = /* @__PURE__ */ new I(), Gn = /* @__PURE__ */ new I(), Vn = /* @__PURE__ */ new I(), Us = /* @__PURE__ */ new I(), Rr = /* @__PURE__ */ new I(), Cr = /* @__PURE__ */ new I(), Pr = /* @__PURE__ */ new I(), Ir = /* @__PURE__ */ new oe(), Lr = /* @__PURE__ */ new oe(), Dr = /* @__PURE__ */ new oe();
class Oe {
  constructor(t = new I(), e = new I(), n = new I()) {
    this.a = t, this.b = e, this.c = n;
  }
  static getNormal(t, e, n, r) {
    r.subVectors(n, e), We.subVectors(t, e), r.cross(We);
    const s = r.lengthSq();
    return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(t, e, n, r, s) {
    We.subVectors(r, e), rn.subVectors(n, e), wr.subVectors(t, e);
    const a = We.dot(We), o = We.dot(rn), l = We.dot(wr), c = rn.dot(rn), h = rn.dot(wr), u = a * c - o * o;
    if (u === 0)
      return s.set(0, 0, 0), null;
    const d = 1 / u, f = (c * l - o * h) * d, _ = (a * h - o * l) * d;
    return s.set(1 - f - _, _, f);
  }
  static containsPoint(t, e, n, r) {
    return this.getBarycoord(t, e, n, r, sn) === null ? !1 : sn.x >= 0 && sn.y >= 0 && sn.x + sn.y <= 1;
  }
  static getInterpolation(t, e, n, r, s, a, o, l) {
    return this.getBarycoord(t, e, n, r, sn) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(s, sn.x), l.addScaledVector(a, sn.y), l.addScaledVector(o, sn.z), l);
  }
  static getInterpolatedAttribute(t, e, n, r, s, a) {
    return Ir.setScalar(0), Lr.setScalar(0), Dr.setScalar(0), Ir.fromBufferAttribute(t, e), Lr.fromBufferAttribute(t, n), Dr.fromBufferAttribute(t, r), a.setScalar(0), a.addScaledVector(Ir, s.x), a.addScaledVector(Lr, s.y), a.addScaledVector(Dr, s.z), a;
  }
  static isFrontFacing(t, e, n, r) {
    return We.subVectors(n, e), rn.subVectors(t, e), We.cross(rn).dot(r) < 0;
  }
  set(t, e, n) {
    return this.a.copy(t), this.b.copy(e), this.c.copy(n), this;
  }
  setFromPointsAndIndices(t, e, n, r) {
    return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[r]), this;
  }
  setFromAttributeAndIndices(t, e, n, r) {
    return this.a.fromBufferAttribute(t, e), this.b.fromBufferAttribute(t, n), this.c.fromBufferAttribute(t, r), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
  }
  getArea() {
    return We.subVectors(this.c, this.b), rn.subVectors(this.a, this.b), We.cross(rn).length() * 0.5;
  }
  getMidpoint(t) {
    return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(t) {
    return Oe.getNormal(this.a, this.b, this.c, t);
  }
  getPlane(t) {
    return t.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(t, e) {
    return Oe.getBarycoord(t, this.a, this.b, this.c, e);
  }
  getInterpolation(t, e, n, r, s) {
    return Oe.getInterpolation(t, this.a, this.b, this.c, e, n, r, s);
  }
  containsPoint(t) {
    return Oe.containsPoint(t, this.a, this.b, this.c);
  }
  isFrontFacing(t) {
    return Oe.isFrontFacing(this.a, this.b, this.c, t);
  }
  intersectsBox(t) {
    return t.intersectsTriangle(this);
  }
  closestPointToPoint(t, e) {
    const n = this.a, r = this.b, s = this.c;
    let a, o;
    Gn.subVectors(r, n), Vn.subVectors(s, n), Rr.subVectors(t, n);
    const l = Gn.dot(Rr), c = Vn.dot(Rr);
    if (l <= 0 && c <= 0)
      return e.copy(n);
    Cr.subVectors(t, r);
    const h = Gn.dot(Cr), u = Vn.dot(Cr);
    if (h >= 0 && u <= h)
      return e.copy(r);
    const d = l * u - h * c;
    if (d <= 0 && l >= 0 && h <= 0)
      return a = l / (l - h), e.copy(n).addScaledVector(Gn, a);
    Pr.subVectors(t, s);
    const f = Gn.dot(Pr), _ = Vn.dot(Pr);
    if (_ >= 0 && f <= _)
      return e.copy(s);
    const x = f * c - l * _;
    if (x <= 0 && c >= 0 && _ <= 0)
      return o = c / (c - _), e.copy(n).addScaledVector(Vn, o);
    const m = h * _ - f * u;
    if (m <= 0 && u - h >= 0 && f - _ >= 0)
      return Us.subVectors(s, r), o = (u - h) / (u - h + (f - _)), e.copy(r).addScaledVector(Us, o);
    const p = 1 / (m + x + d);
    return a = x * p, o = d * p, e.copy(n).addScaledVector(Gn, a).addScaledVector(Vn, o);
  }
  equals(t) {
    return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
  }
}
const Pa = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, dn = { h: 0, s: 0, l: 0 }, Pi = { h: 0, s: 0, l: 0 };
function Ur(i, t, e) {
  return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? i + (t - i) * 6 * e : e < 1 / 2 ? t : e < 2 / 3 ? i + (t - i) * 6 * (2 / 3 - e) : i;
}
class Gt {
  constructor(t, e, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(t, e, n);
  }
  set(t, e, n) {
    if (e === void 0 && n === void 0) {
      const r = t;
      r && r.isColor ? this.copy(r) : typeof r == "number" ? this.setHex(r) : typeof r == "string" && this.setStyle(r);
    } else
      this.setRGB(t, e, n);
    return this;
  }
  setScalar(t) {
    return this.r = t, this.g = t, this.b = t, this;
  }
  setHex(t, e = Le) {
    return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (t & 255) / 255, Kt.toWorkingColorSpace(this, e), this;
  }
  setRGB(t, e, n, r = Kt.workingColorSpace) {
    return this.r = t, this.g = e, this.b = n, Kt.toWorkingColorSpace(this, r), this;
  }
  setHSL(t, e, n, r = Kt.workingColorSpace) {
    if (t = mo(t, 1), e = ve(e, 0, 1), n = ve(n, 0, 1), e === 0)
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + e) : n + e - n * e, a = 2 * n - s;
      this.r = Ur(a, s, t + 1 / 3), this.g = Ur(a, s, t), this.b = Ur(a, s, t - 1 / 3);
    }
    return Kt.toWorkingColorSpace(this, r), this;
  }
  setStyle(t, e = Le) {
    function n(s) {
      s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.");
    }
    let r;
    if (r = /^(\w+)\(([^\)]*)\)/.exec(t)) {
      let s;
      const a = r[1], o = r[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setRGB(
              Math.min(255, parseInt(s[1], 10)) / 255,
              Math.min(255, parseInt(s[2], 10)) / 255,
              Math.min(255, parseInt(s[3], 10)) / 255,
              e
            );
          if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setRGB(
              Math.min(100, parseInt(s[1], 10)) / 100,
              Math.min(100, parseInt(s[2], 10)) / 100,
              Math.min(100, parseInt(s[3], 10)) / 100,
              e
            );
          break;
        case "hsl":
        case "hsla":
          if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setHSL(
              parseFloat(s[1]) / 360,
              parseFloat(s[2]) / 100,
              parseFloat(s[3]) / 100,
              e
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + t);
      }
    } else if (r = /^\#([A-Fa-f\d]+)$/.exec(t)) {
      const s = r[1], a = s.length;
      if (a === 3)
        return this.setRGB(
          parseInt(s.charAt(0), 16) / 15,
          parseInt(s.charAt(1), 16) / 15,
          parseInt(s.charAt(2), 16) / 15,
          e
        );
      if (a === 6)
        return this.setHex(parseInt(s, 16), e);
      console.warn("THREE.Color: Invalid hex color " + t);
    } else if (t && t.length > 0)
      return this.setColorName(t, e);
    return this;
  }
  setColorName(t, e = Le) {
    const n = Pa[t.toLowerCase()];
    return n !== void 0 ? this.setHex(n, e) : console.warn("THREE.Color: Unknown color " + t), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(t) {
    return this.r = t.r, this.g = t.g, this.b = t.b, this;
  }
  copySRGBToLinear(t) {
    return this.r = Qn(t.r), this.g = Qn(t.g), this.b = Qn(t.b), this;
  }
  copyLinearToSRGB(t) {
    return this.r = vr(t.r), this.g = vr(t.g), this.b = vr(t.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(t = Le) {
    return Kt.fromWorkingColorSpace(Se.copy(this), t), Math.round(ve(Se.r * 255, 0, 255)) * 65536 + Math.round(ve(Se.g * 255, 0, 255)) * 256 + Math.round(ve(Se.b * 255, 0, 255));
  }
  getHexString(t = Le) {
    return ("000000" + this.getHex(t).toString(16)).slice(-6);
  }
  getHSL(t, e = Kt.workingColorSpace) {
    Kt.fromWorkingColorSpace(Se.copy(this), e);
    const n = Se.r, r = Se.g, s = Se.b, a = Math.max(n, r, s), o = Math.min(n, r, s);
    let l, c;
    const h = (o + a) / 2;
    if (o === a)
      l = 0, c = 0;
    else {
      const u = a - o;
      switch (c = h <= 0.5 ? u / (a + o) : u / (2 - a - o), a) {
        case n:
          l = (r - s) / u + (r < s ? 6 : 0);
          break;
        case r:
          l = (s - n) / u + 2;
          break;
        case s:
          l = (n - r) / u + 4;
          break;
      }
      l /= 6;
    }
    return t.h = l, t.s = c, t.l = h, t;
  }
  getRGB(t, e = Kt.workingColorSpace) {
    return Kt.fromWorkingColorSpace(Se.copy(this), e), t.r = Se.r, t.g = Se.g, t.b = Se.b, t;
  }
  getStyle(t = Le) {
    Kt.fromWorkingColorSpace(Se.copy(this), t);
    const e = Se.r, n = Se.g, r = Se.b;
    return t !== Le ? `color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})` : `rgb(${Math.round(e * 255)},${Math.round(n * 255)},${Math.round(r * 255)})`;
  }
  offsetHSL(t, e, n) {
    return this.getHSL(dn), this.setHSL(dn.h + t, dn.s + e, dn.l + n);
  }
  add(t) {
    return this.r += t.r, this.g += t.g, this.b += t.b, this;
  }
  addColors(t, e) {
    return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this;
  }
  addScalar(t) {
    return this.r += t, this.g += t, this.b += t, this;
  }
  sub(t) {
    return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this;
  }
  multiply(t) {
    return this.r *= t.r, this.g *= t.g, this.b *= t.b, this;
  }
  multiplyScalar(t) {
    return this.r *= t, this.g *= t, this.b *= t, this;
  }
  lerp(t, e) {
    return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this;
  }
  lerpColors(t, e, n) {
    return this.r = t.r + (e.r - t.r) * n, this.g = t.g + (e.g - t.g) * n, this.b = t.b + (e.b - t.b) * n, this;
  }
  lerpHSL(t, e) {
    this.getHSL(dn), t.getHSL(Pi);
    const n = _r(dn.h, Pi.h, e), r = _r(dn.s, Pi.s, e), s = _r(dn.l, Pi.l, e);
    return this.setHSL(n, r, s), this;
  }
  setFromVector3(t) {
    return this.r = t.x, this.g = t.y, this.b = t.z, this;
  }
  applyMatrix3(t) {
    const e = this.r, n = this.g, r = this.b, s = t.elements;
    return this.r = s[0] * e + s[3] * n + s[6] * r, this.g = s[1] * e + s[4] * n + s[7] * r, this.b = s[2] * e + s[5] * n + s[8] * r, this;
  }
  equals(t) {
    return t.r === this.r && t.g === this.g && t.b === this.b;
  }
  fromArray(t, e = 0) {
    return this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t;
  }
  fromBufferAttribute(t, e) {
    return this.r = t.getX(e), this.g = t.getY(e), this.b = t.getZ(e), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const Se = /* @__PURE__ */ new Gt();
Gt.NAMES = Pa;
let Uo = 0;
class ni extends In {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Uo++ }), this.uuid = an(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Gt(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = 7680, this.stencilZFail = 7680, this.stencilZPass = 7680, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(t) {
    this._alphaTest > 0 != t > 0 && this.version++, this._alphaTest = t;
  }
  // onBeforeRender and onBeforeCompile only supported in WebGLRenderer
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(t) {
    if (t !== void 0)
      for (const e in t) {
        const n = t[e];
        if (n === void 0) {
          console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);
          continue;
        }
        const r = this[e];
        if (r === void 0) {
          console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);
          continue;
        }
        r && r.isColor ? r.set(n) : r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[e] = n;
      }
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    e && (t = {
      textures: {},
      images: {}
    });
    const n = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(t).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(t).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(t).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(t).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== 1 && (n.blending = this.blending), this.side !== 0 && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== 204 && (n.blendSrc = this.blendSrc), this.blendDst !== 205 && (n.blendDst = this.blendDst), this.blendEquation !== 100 && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== 3 && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== 519 && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== 7680 && (n.stencilFail = this.stencilFail), this.stencilZFail !== 7680 && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== 7680 && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function r(s) {
      const a = [];
      for (const o in s) {
        const l = s[o];
        delete l.metadata, a.push(l);
      }
      return a;
    }
    if (e) {
      const s = r(t.textures), a = r(t.images);
      s.length > 0 && (n.textures = s), a.length > 0 && (n.images = a);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.name = t.name, this.blending = t.blending, this.side = t.side, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.blendColor.copy(t.blendColor), this.blendAlpha = t.blendAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite;
    const e = t.clippingPlanes;
    let n = null;
    if (e !== null) {
      const r = e.length;
      n = new Array(r);
      for (let s = 0; s !== r; ++s)
        n[s] = e[s].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.alphaHash = t.alphaHash, this.alphaToCoverage = t.alphaToCoverage, this.premultipliedAlpha = t.premultipliedAlpha, this.forceSinglePass = t.forceSinglePass, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  onBuild() {
    console.warn("Material: onBuild() has been removed.");
  }
}
class Ia extends ni {
  constructor(t) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Gt(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new qe(), this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this;
  }
}
const he = /* @__PURE__ */ new I(), Ii = /* @__PURE__ */ new ot();
class Xe {
  constructor(t, e, n = !1) {
    if (Array.isArray(t))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = t, this.itemSize = e, this.count = t !== void 0 ? t.length / e : 0, this.normalized = n, this.usage = 35044, this.updateRanges = [], this.gpuType = 1015, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  setUsage(t) {
    return this.usage = t, this;
  }
  addUpdateRange(t, e) {
    this.updateRanges.push({ start: t, count: e });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(t) {
    return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this.gpuType = t.gpuType, this;
  }
  copyAt(t, e, n) {
    t *= this.itemSize, n *= e.itemSize;
    for (let r = 0, s = this.itemSize; r < s; r++)
      this.array[t + r] = e.array[n + r];
    return this;
  }
  copyArray(t) {
    return this.array.set(t), this;
  }
  applyMatrix3(t) {
    if (this.itemSize === 2)
      for (let e = 0, n = this.count; e < n; e++)
        Ii.fromBufferAttribute(this, e), Ii.applyMatrix3(t), this.setXY(e, Ii.x, Ii.y);
    else if (this.itemSize === 3)
      for (let e = 0, n = this.count; e < n; e++)
        he.fromBufferAttribute(this, e), he.applyMatrix3(t), this.setXYZ(e, he.x, he.y, he.z);
    return this;
  }
  applyMatrix4(t) {
    for (let e = 0, n = this.count; e < n; e++)
      he.fromBufferAttribute(this, e), he.applyMatrix4(t), this.setXYZ(e, he.x, he.y, he.z);
    return this;
  }
  applyNormalMatrix(t) {
    for (let e = 0, n = this.count; e < n; e++)
      he.fromBufferAttribute(this, e), he.applyNormalMatrix(t), this.setXYZ(e, he.x, he.y, he.z);
    return this;
  }
  transformDirection(t) {
    for (let e = 0, n = this.count; e < n; e++)
      he.fromBufferAttribute(this, e), he.transformDirection(t), this.setXYZ(e, he.x, he.y, he.z);
    return this;
  }
  set(t, e = 0) {
    return this.array.set(t, e), this;
  }
  getComponent(t, e) {
    let n = this.array[t * this.itemSize + e];
    return this.normalized && (n = Je(n, this.array)), n;
  }
  setComponent(t, e, n) {
    return this.normalized && (n = Qt(n, this.array)), this.array[t * this.itemSize + e] = n, this;
  }
  getX(t) {
    let e = this.array[t * this.itemSize];
    return this.normalized && (e = Je(e, this.array)), e;
  }
  setX(t, e) {
    return this.normalized && (e = Qt(e, this.array)), this.array[t * this.itemSize] = e, this;
  }
  getY(t) {
    let e = this.array[t * this.itemSize + 1];
    return this.normalized && (e = Je(e, this.array)), e;
  }
  setY(t, e) {
    return this.normalized && (e = Qt(e, this.array)), this.array[t * this.itemSize + 1] = e, this;
  }
  getZ(t) {
    let e = this.array[t * this.itemSize + 2];
    return this.normalized && (e = Je(e, this.array)), e;
  }
  setZ(t, e) {
    return this.normalized && (e = Qt(e, this.array)), this.array[t * this.itemSize + 2] = e, this;
  }
  getW(t) {
    let e = this.array[t * this.itemSize + 3];
    return this.normalized && (e = Je(e, this.array)), e;
  }
  setW(t, e) {
    return this.normalized && (e = Qt(e, this.array)), this.array[t * this.itemSize + 3] = e, this;
  }
  setXY(t, e, n) {
    return t *= this.itemSize, this.normalized && (e = Qt(e, this.array), n = Qt(n, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this;
  }
  setXYZ(t, e, n, r) {
    return t *= this.itemSize, this.normalized && (e = Qt(e, this.array), n = Qt(n, this.array), r = Qt(r, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = r, this;
  }
  setXYZW(t, e, n, r, s) {
    return t *= this.itemSize, this.normalized && (e = Qt(e, this.array), n = Qt(n, this.array), r = Qt(r, this.array), s = Qt(s, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = r, this.array[t + 3] = s, this;
  }
  onUpload(t) {
    return this.onUploadCallback = t, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const t = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (t.name = this.name), this.usage !== 35044 && (t.usage = this.usage), t;
  }
}
class La extends Xe {
  constructor(t, e, n) {
    super(new Uint16Array(t), e, n);
  }
}
class Da extends Xe {
  constructor(t, e, n) {
    super(new Uint32Array(t), e, n);
  }
}
class ue extends Xe {
  constructor(t, e, n) {
    super(new Float32Array(t), e, n);
  }
}
let No = 0;
const Be = /* @__PURE__ */ new re(), Nr = /* @__PURE__ */ new _e(), kn = /* @__PURE__ */ new I(), Ie = /* @__PURE__ */ new vi(), hi = /* @__PURE__ */ new vi(), pe = /* @__PURE__ */ new I();
class Ge extends In {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: No++ }), this.uuid = an(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(t) {
    return Array.isArray(t) ? this.index = new (ba(t) ? Da : La)(t, 1) : this.index = t, this;
  }
  getAttribute(t) {
    return this.attributes[t];
  }
  setAttribute(t, e) {
    return this.attributes[t] = e, this;
  }
  deleteAttribute(t) {
    return delete this.attributes[t], this;
  }
  hasAttribute(t) {
    return this.attributes[t] !== void 0;
  }
  addGroup(t, e, n = 0) {
    this.groups.push({
      start: t,
      count: e,
      materialIndex: n
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(t, e) {
    this.drawRange.start = t, this.drawRange.count = e;
  }
  applyMatrix4(t) {
    const e = this.attributes.position;
    e !== void 0 && (e.applyMatrix4(t), e.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new Lt().getNormalMatrix(t);
      n.applyNormalMatrix(s), n.needsUpdate = !0;
    }
    const r = this.attributes.tangent;
    return r !== void 0 && (r.transformDirection(t), r.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(t) {
    return Be.makeRotationFromQuaternion(t), this.applyMatrix4(Be), this;
  }
  rotateX(t) {
    return Be.makeRotationX(t), this.applyMatrix4(Be), this;
  }
  rotateY(t) {
    return Be.makeRotationY(t), this.applyMatrix4(Be), this;
  }
  rotateZ(t) {
    return Be.makeRotationZ(t), this.applyMatrix4(Be), this;
  }
  translate(t, e, n) {
    return Be.makeTranslation(t, e, n), this.applyMatrix4(Be), this;
  }
  scale(t, e, n) {
    return Be.makeScale(t, e, n), this.applyMatrix4(Be), this;
  }
  lookAt(t) {
    return Nr.lookAt(t), Nr.updateMatrix(), this.applyMatrix4(Nr.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(kn).negate(), this.translate(kn.x, kn.y, kn.z), this;
  }
  setFromPoints(t) {
    const e = [];
    for (let n = 0, r = t.length; n < r; n++) {
      const s = t[n];
      e.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute("position", new ue(e, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new vi());
    const t = this.attributes.position, e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(
        new I(-1 / 0, -1 / 0, -1 / 0),
        new I(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (t !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(t), e)
        for (let n = 0, r = e.length; n < r; n++) {
          const s = e[n];
          Ie.setFromBufferAttribute(s), this.morphTargetsRelative ? (pe.addVectors(this.boundingBox.min, Ie.min), this.boundingBox.expandByPoint(pe), pe.addVectors(this.boundingBox.max, Ie.max), this.boundingBox.expandByPoint(pe)) : (this.boundingBox.expandByPoint(Ie.min), this.boundingBox.expandByPoint(Ie.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new is());
    const t = this.attributes.position, e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new I(), 1 / 0);
      return;
    }
    if (t) {
      const n = this.boundingSphere.center;
      if (Ie.setFromBufferAttribute(t), e)
        for (let s = 0, a = e.length; s < a; s++) {
          const o = e[s];
          hi.setFromBufferAttribute(o), this.morphTargetsRelative ? (pe.addVectors(Ie.min, hi.min), Ie.expandByPoint(pe), pe.addVectors(Ie.max, hi.max), Ie.expandByPoint(pe)) : (Ie.expandByPoint(hi.min), Ie.expandByPoint(hi.max));
        }
      Ie.getCenter(n);
      let r = 0;
      for (let s = 0, a = t.count; s < a; s++)
        pe.fromBufferAttribute(t, s), r = Math.max(r, n.distanceToSquared(pe));
      if (e)
        for (let s = 0, a = e.length; s < a; s++) {
          const o = e[s], l = this.morphTargetsRelative;
          for (let c = 0, h = o.count; c < h; c++)
            pe.fromBufferAttribute(o, c), l && (kn.fromBufferAttribute(t, c), pe.add(kn)), r = Math.max(r, n.distanceToSquared(pe));
        }
      this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const t = this.index, e = this.attributes;
    if (t === null || e.position === void 0 || e.normal === void 0 || e.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = e.position, r = e.normal, s = e.uv;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Xe(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"), o = [], l = [];
    for (let U = 0; U < n.count; U++)
      o[U] = new I(), l[U] = new I();
    const c = new I(), h = new I(), u = new I(), d = new ot(), f = new ot(), _ = new ot(), x = new I(), m = new I();
    function p(U, K, g) {
      c.fromBufferAttribute(n, U), h.fromBufferAttribute(n, K), u.fromBufferAttribute(n, g), d.fromBufferAttribute(s, U), f.fromBufferAttribute(s, K), _.fromBufferAttribute(s, g), h.sub(c), u.sub(c), f.sub(d), _.sub(d);
      const E = 1 / (f.x * _.y - _.x * f.y);
      isFinite(E) && (x.copy(h).multiplyScalar(_.y).addScaledVector(u, -f.y).multiplyScalar(E), m.copy(u).multiplyScalar(f.x).addScaledVector(h, -_.x).multiplyScalar(E), o[U].add(x), o[K].add(x), o[g].add(x), l[U].add(m), l[K].add(m), l[g].add(m));
    }
    let T = this.groups;
    T.length === 0 && (T = [{
      start: 0,
      count: t.count
    }]);
    for (let U = 0, K = T.length; U < K; ++U) {
      const g = T[U], E = g.start, z = g.count;
      for (let O = E, V = E + z; O < V; O += 3)
        p(
          t.getX(O + 0),
          t.getX(O + 1),
          t.getX(O + 2)
        );
    }
    const S = new I(), y = new I(), C = new I(), w = new I();
    function b(U) {
      C.fromBufferAttribute(r, U), w.copy(C);
      const K = o[U];
      S.copy(K), S.sub(C.multiplyScalar(C.dot(K))).normalize(), y.crossVectors(w, K);
      const E = y.dot(l[U]) < 0 ? -1 : 1;
      a.setXYZW(U, S.x, S.y, S.z, E);
    }
    for (let U = 0, K = T.length; U < K; ++U) {
      const g = T[U], E = g.start, z = g.count;
      for (let O = E, V = E + z; O < V; O += 3)
        b(t.getX(O + 0)), b(t.getX(O + 1)), b(t.getX(O + 2));
    }
  }
  computeVertexNormals() {
    const t = this.index, e = this.getAttribute("position");
    if (e !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new Xe(new Float32Array(e.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let d = 0, f = n.count; d < f; d++)
          n.setXYZ(d, 0, 0, 0);
      const r = new I(), s = new I(), a = new I(), o = new I(), l = new I(), c = new I(), h = new I(), u = new I();
      if (t)
        for (let d = 0, f = t.count; d < f; d += 3) {
          const _ = t.getX(d + 0), x = t.getX(d + 1), m = t.getX(d + 2);
          r.fromBufferAttribute(e, _), s.fromBufferAttribute(e, x), a.fromBufferAttribute(e, m), h.subVectors(a, s), u.subVectors(r, s), h.cross(u), o.fromBufferAttribute(n, _), l.fromBufferAttribute(n, x), c.fromBufferAttribute(n, m), o.add(h), l.add(h), c.add(h), n.setXYZ(_, o.x, o.y, o.z), n.setXYZ(x, l.x, l.y, l.z), n.setXYZ(m, c.x, c.y, c.z);
        }
      else
        for (let d = 0, f = e.count; d < f; d += 3)
          r.fromBufferAttribute(e, d + 0), s.fromBufferAttribute(e, d + 1), a.fromBufferAttribute(e, d + 2), h.subVectors(a, s), u.subVectors(r, s), h.cross(u), n.setXYZ(d + 0, h.x, h.y, h.z), n.setXYZ(d + 1, h.x, h.y, h.z), n.setXYZ(d + 2, h.x, h.y, h.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  normalizeNormals() {
    const t = this.attributes.normal;
    for (let e = 0, n = t.count; e < n; e++)
      pe.fromBufferAttribute(t, e), pe.normalize(), t.setXYZ(e, pe.x, pe.y, pe.z);
  }
  toNonIndexed() {
    function t(o, l) {
      const c = o.array, h = o.itemSize, u = o.normalized, d = new c.constructor(l.length * h);
      let f = 0, _ = 0;
      for (let x = 0, m = l.length; x < m; x++) {
        o.isInterleavedBufferAttribute ? f = l[x] * o.data.stride + o.offset : f = l[x] * h;
        for (let p = 0; p < h; p++)
          d[_++] = c[f++];
      }
      return new Xe(d, h, u);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const e = new Ge(), n = this.index.array, r = this.attributes;
    for (const o in r) {
      const l = r[o], c = t(l, n);
      e.setAttribute(o, c);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const l = [], c = s[o];
      for (let h = 0, u = c.length; h < u; h++) {
        const d = c[h], f = t(d, n);
        l.push(f);
      }
      e.morphAttributes[o] = l;
    }
    e.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, l = a.length; o < l; o++) {
      const c = a[o];
      e.addGroup(c.start, c.count, c.materialIndex);
    }
    return e;
  }
  toJSON() {
    const t = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (t.uuid = this.uuid, t.type = this.type, this.name !== "" && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), this.parameters !== void 0) {
      const l = this.parameters;
      for (const c in l)
        l[c] !== void 0 && (t[c] = l[c]);
      return t;
    }
    t.data = { attributes: {} };
    const e = this.index;
    e !== null && (t.data.index = {
      type: e.array.constructor.name,
      array: Array.prototype.slice.call(e.array)
    });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      t.data.attributes[l] = c.toJSON(t.data);
    }
    const r = {};
    let s = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], h = [];
      for (let u = 0, d = c.length; u < d; u++) {
        const f = c[u];
        h.push(f.toJSON(t.data));
      }
      h.length > 0 && (r[l] = h, s = !0);
    }
    s && (t.data.morphAttributes = r, t.data.morphTargetsRelative = this.morphTargetsRelative);
    const a = this.groups;
    a.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return o !== null && (t.data.boundingSphere = {
      center: o.center.toArray(),
      radius: o.radius
    }), t;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const e = {};
    this.name = t.name;
    const n = t.index;
    n !== null && this.setIndex(n.clone(e));
    const r = t.attributes;
    for (const c in r) {
      const h = r[c];
      this.setAttribute(c, h.clone(e));
    }
    const s = t.morphAttributes;
    for (const c in s) {
      const h = [], u = s[c];
      for (let d = 0, f = u.length; d < f; d++)
        h.push(u[d].clone(e));
      this.morphAttributes[c] = h;
    }
    this.morphTargetsRelative = t.morphTargetsRelative;
    const a = t.groups;
    for (let c = 0, h = a.length; c < h; c++) {
      const u = a[c];
      this.addGroup(u.start, u.count, u.materialIndex);
    }
    const o = t.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const l = t.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Ns = /* @__PURE__ */ new re(), Mn = /* @__PURE__ */ new wo(), Li = /* @__PURE__ */ new is(), Fs = /* @__PURE__ */ new I(), Di = /* @__PURE__ */ new I(), Ui = /* @__PURE__ */ new I(), Ni = /* @__PURE__ */ new I(), Fr = /* @__PURE__ */ new I(), Fi = /* @__PURE__ */ new I(), Bs = /* @__PURE__ */ new I(), Bi = /* @__PURE__ */ new I();
class Ne extends _e {
  constructor(t = new Ge(), e = new Ia()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = t, this.material = e, this.updateMorphTargets();
  }
  copy(t, e) {
    return super.copy(t, e), t.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), t.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this;
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes, n = Object.keys(e);
    if (n.length > 0) {
      const r = e[n[0]];
      if (r !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = r.length; s < a; s++) {
          const o = r[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
  getVertexPosition(t, e) {
    const n = this.geometry, r = n.attributes.position, s = n.morphAttributes.position, a = n.morphTargetsRelative;
    e.fromBufferAttribute(r, t);
    const o = this.morphTargetInfluences;
    if (s && o) {
      Fi.set(0, 0, 0);
      for (let l = 0, c = s.length; l < c; l++) {
        const h = o[l], u = s[l];
        h !== 0 && (Fr.fromBufferAttribute(u, t), a ? Fi.addScaledVector(Fr, h) : Fi.addScaledVector(Fr.sub(e), h));
      }
      e.add(Fi);
    }
    return e;
  }
  raycast(t, e) {
    const n = this.geometry, r = this.material, s = this.matrixWorld;
    r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Li.copy(n.boundingSphere), Li.applyMatrix4(s), Mn.copy(t.ray).recast(t.near), !(Li.containsPoint(Mn.origin) === !1 && (Mn.intersectSphere(Li, Fs) === null || Mn.origin.distanceToSquared(Fs) > (t.far - t.near) ** 2)) && (Ns.copy(s).invert(), Mn.copy(t.ray).applyMatrix4(Ns), !(n.boundingBox !== null && Mn.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(t, e, Mn)));
  }
  _computeIntersections(t, e, n) {
    let r;
    const s = this.geometry, a = this.material, o = s.index, l = s.attributes.position, c = s.attributes.uv, h = s.attributes.uv1, u = s.attributes.normal, d = s.groups, f = s.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let _ = 0, x = d.length; _ < x; _++) {
          const m = d[_], p = a[m.materialIndex], T = Math.max(m.start, f.start), S = Math.min(o.count, Math.min(m.start + m.count, f.start + f.count));
          for (let y = T, C = S; y < C; y += 3) {
            const w = o.getX(y), b = o.getX(y + 1), U = o.getX(y + 2);
            r = Oi(this, p, t, n, c, h, u, w, b, U), r && (r.faceIndex = Math.floor(y / 3), r.face.materialIndex = m.materialIndex, e.push(r));
          }
        }
      else {
        const _ = Math.max(0, f.start), x = Math.min(o.count, f.start + f.count);
        for (let m = _, p = x; m < p; m += 3) {
          const T = o.getX(m), S = o.getX(m + 1), y = o.getX(m + 2);
          r = Oi(this, a, t, n, c, h, u, T, S, y), r && (r.faceIndex = Math.floor(m / 3), e.push(r));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(a))
        for (let _ = 0, x = d.length; _ < x; _++) {
          const m = d[_], p = a[m.materialIndex], T = Math.max(m.start, f.start), S = Math.min(l.count, Math.min(m.start + m.count, f.start + f.count));
          for (let y = T, C = S; y < C; y += 3) {
            const w = y, b = y + 1, U = y + 2;
            r = Oi(this, p, t, n, c, h, u, w, b, U), r && (r.faceIndex = Math.floor(y / 3), r.face.materialIndex = m.materialIndex, e.push(r));
          }
        }
      else {
        const _ = Math.max(0, f.start), x = Math.min(l.count, f.start + f.count);
        for (let m = _, p = x; m < p; m += 3) {
          const T = m, S = m + 1, y = m + 2;
          r = Oi(this, a, t, n, c, h, u, T, S, y), r && (r.faceIndex = Math.floor(m / 3), e.push(r));
        }
      }
  }
}
function Fo(i, t, e, n, r, s, a, o) {
  let l;
  if (t.side === 1 ? l = n.intersectTriangle(a, s, r, !0, o) : l = n.intersectTriangle(r, s, a, t.side === 0, o), l === null) return null;
  Bi.copy(o), Bi.applyMatrix4(i.matrixWorld);
  const c = e.ray.origin.distanceTo(Bi);
  return c < e.near || c > e.far ? null : {
    distance: c,
    point: Bi.clone(),
    object: i
  };
}
function Oi(i, t, e, n, r, s, a, o, l, c) {
  i.getVertexPosition(o, Di), i.getVertexPosition(l, Ui), i.getVertexPosition(c, Ni);
  const h = Fo(i, t, e, n, Di, Ui, Ni, Bs);
  if (h) {
    const u = new I();
    Oe.getBarycoord(Bs, Di, Ui, Ni, u), r && (h.uv = Oe.getInterpolatedAttribute(r, o, l, c, u, new ot())), s && (h.uv1 = Oe.getInterpolatedAttribute(s, o, l, c, u, new ot())), a && (h.normal = Oe.getInterpolatedAttribute(a, o, l, c, u, new I()), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
    const d = {
      a: o,
      b: l,
      c,
      normal: new I(),
      materialIndex: 0
    };
    Oe.getNormal(Di, Ui, Ni, d.normal), h.face = d, h.barycoord = u;
  }
  return h;
}
class xi extends Ge {
  constructor(t = 1, e = 1, n = 1, r = 1, s = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: t,
      height: e,
      depth: n,
      widthSegments: r,
      heightSegments: s,
      depthSegments: a
    };
    const o = this;
    r = Math.floor(r), s = Math.floor(s), a = Math.floor(a);
    const l = [], c = [], h = [], u = [];
    let d = 0, f = 0;
    _("z", "y", "x", -1, -1, n, e, t, a, s, 0), _("z", "y", "x", 1, -1, n, e, -t, a, s, 1), _("x", "z", "y", 1, 1, t, n, e, r, a, 2), _("x", "z", "y", 1, -1, t, n, -e, r, a, 3), _("x", "y", "z", 1, -1, t, e, n, r, s, 4), _("x", "y", "z", -1, -1, t, e, -n, r, s, 5), this.setIndex(l), this.setAttribute("position", new ue(c, 3)), this.setAttribute("normal", new ue(h, 3)), this.setAttribute("uv", new ue(u, 2));
    function _(x, m, p, T, S, y, C, w, b, U, K) {
      const g = y / b, E = C / U, z = y / 2, O = C / 2, V = w / 2, J = b + 1, G = U + 1;
      let Q = 0, H = 0;
      const lt = new I();
      for (let ct = 0; ct < G; ct++) {
        const vt = ct * E - O;
        for (let Wt = 0; Wt < J; Wt++) {
          const Jt = Wt * g - z;
          lt[x] = Jt * T, lt[m] = vt * S, lt[p] = V, c.push(lt.x, lt.y, lt.z), lt[x] = 0, lt[m] = 0, lt[p] = w > 0 ? 1 : -1, h.push(lt.x, lt.y, lt.z), u.push(Wt / b), u.push(1 - ct / U), Q += 1;
        }
      }
      for (let ct = 0; ct < U; ct++)
        for (let vt = 0; vt < b; vt++) {
          const Wt = d + vt + J * ct, Jt = d + vt + J * (ct + 1), W = d + (vt + 1) + J * (ct + 1), $ = d + (vt + 1) + J * ct;
          l.push(Wt, Jt, $), l.push(Jt, W, $), H += 6;
        }
      o.addGroup(f, H, K), f += H, d += Q;
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new xi(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments);
  }
}
function ti(i) {
  const t = {};
  for (const e in i) {
    t[e] = {};
    for (const n in i[e]) {
      const r = i[e][n];
      r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? r.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), t[e][n] = null) : t[e][n] = r.clone() : Array.isArray(r) ? t[e][n] = r.slice() : t[e][n] = r;
    }
  }
  return t;
}
function ye(i) {
  const t = {};
  for (let e = 0; e < i.length; e++) {
    const n = ti(i[e]);
    for (const r in n)
      t[r] = n[r];
  }
  return t;
}
function Bo(i) {
  const t = [];
  for (let e = 0; e < i.length; e++)
    t.push(i[e].clone());
  return t;
}
function Ua(i) {
  const t = i.getRenderTarget();
  return t === null ? i.outputColorSpace : t.isXRRenderTarget === !0 ? t.texture.colorSpace : Kt.workingColorSpace;
}
const Oo = { clone: ti, merge: ye };
var zo = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Go = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class _n extends ni {
  constructor(t) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = zo, this.fragmentShader = Go, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
      clipCullDistance: !1,
      // set to use vertex shader clipping
      multiDraw: !1
      // set to use vertex shader multi_draw / enable gl_DrawID
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, t !== void 0 && this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = ti(t.uniforms), this.uniformsGroups = Bo(t.uniformsGroups), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.fog = t.fog, this.lights = t.lights, this.clipping = t.clipping, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    e.glslVersion = this.glslVersion, e.uniforms = {};
    for (const r in this.uniforms) {
      const a = this.uniforms[r].value;
      a && a.isTexture ? e.uniforms[r] = {
        type: "t",
        value: a.toJSON(t).uuid
      } : a && a.isColor ? e.uniforms[r] = {
        type: "c",
        value: a.getHex()
      } : a && a.isVector2 ? e.uniforms[r] = {
        type: "v2",
        value: a.toArray()
      } : a && a.isVector3 ? e.uniforms[r] = {
        type: "v3",
        value: a.toArray()
      } : a && a.isVector4 ? e.uniforms[r] = {
        type: "v4",
        value: a.toArray()
      } : a && a.isMatrix3 ? e.uniforms[r] = {
        type: "m3",
        value: a.toArray()
      } : a && a.isMatrix4 ? e.uniforms[r] = {
        type: "m4",
        value: a.toArray()
      } : e.uniforms[r] = {
        value: a
      };
    }
    Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader, e.lights = this.lights, e.clipping = this.clipping;
    const n = {};
    for (const r in this.extensions)
      this.extensions[r] === !0 && (n[r] = !0);
    return Object.keys(n).length > 0 && (e.extensions = n), e;
  }
}
class Na extends _e {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new re(), this.projectionMatrix = new re(), this.projectionMatrixInverse = new re(), this.coordinateSystem = 2e3;
  }
  copy(t, e) {
    return super.copy(t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this.coordinateSystem = t.coordinateSystem, this;
  }
  getWorldDirection(t) {
    return super.getWorldDirection(t).negate();
  }
  updateMatrixWorld(t) {
    super.updateMatrixWorld(t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(t, e) {
    super.updateWorldMatrix(t, e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const fn = /* @__PURE__ */ new I(), Os = /* @__PURE__ */ new ot(), zs = /* @__PURE__ */ new ot();
class De extends Na {
  constructor(t = 50, e = 1, n = 0.1, r = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = t, this.zoom = 1, this.near = n, this.far = r, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(t, e) {
    return super.copy(t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = t.view === null ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this;
  }
  /**
   * Sets the FOV by focal length in respect to the current .filmGauge.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * Values for focal length and film gauge must have the same unit.
   */
  setFocalLength(t) {
    const e = 0.5 * this.getFilmHeight() / t;
    this.fov = jr * 2 * Math.atan(e), this.updateProjectionMatrix();
  }
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength() {
    const t = Math.tan(mr * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / t;
  }
  getEffectiveFOV() {
    return jr * 2 * Math.atan(
      Math.tan(mr * 0.5 * this.fov) / this.zoom
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  /**
   * Computes the 2D bounds of the camera's viewable rectangle at a given distance along the viewing direction.
   * Sets minTarget and maxTarget to the coordinates of the lower-left and upper-right corners of the view rectangle.
   */
  getViewBounds(t, e, n) {
    fn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), e.set(fn.x, fn.y).multiplyScalar(-t / fn.z), fn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(fn.x, fn.y).multiplyScalar(-t / fn.z);
  }
  /**
   * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
   * Copies the result into the target Vector2, where x is width and y is height.
   */
  getViewSize(t, e) {
    return this.getViewBounds(t, Os, zs), e.subVectors(zs, Os);
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *
   * then for each monitor you would call it like this
   *
   *   const w = 1920;
   *   const h = 1080;
   *   const fullWidth = w * 3;
   *   const fullHeight = h * 2;
   *
   *   --A--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   *   --B--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   *   --C--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   *   --D--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   *   --E--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   *   --F--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   *
   *   Note there is no reason monitors have to be the same size or in a grid.
   */
  setViewOffset(t, e, n, r, s, a) {
    this.aspect = t / e, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const t = this.near;
    let e = t * Math.tan(mr * 0.5 * this.fov) / this.zoom, n = 2 * e, r = this.aspect * n, s = -0.5 * r;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = a.fullWidth, c = a.fullHeight;
      s += a.offsetX * r / l, e -= a.offsetY * n / c, r *= a.width / l, n *= a.height / c;
    }
    const o = this.filmOffset;
    o !== 0 && (s += t * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + r, e, e - n, t, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, this.view !== null && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e;
  }
}
const Hn = -90, Wn = 1;
class Vo extends _e {
  constructor(t, e, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const r = new De(Hn, Wn, t, e);
    r.layers = this.layers, this.add(r);
    const s = new De(Hn, Wn, t, e);
    s.layers = this.layers, this.add(s);
    const a = new De(Hn, Wn, t, e);
    a.layers = this.layers, this.add(a);
    const o = new De(Hn, Wn, t, e);
    o.layers = this.layers, this.add(o);
    const l = new De(Hn, Wn, t, e);
    l.layers = this.layers, this.add(l);
    const c = new De(Hn, Wn, t, e);
    c.layers = this.layers, this.add(c);
  }
  updateCoordinateSystem() {
    const t = this.coordinateSystem, e = this.children.concat(), [n, r, s, a, o, l] = e;
    for (const c of e) this.remove(c);
    if (t === 2e3)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
    else if (t === 2001)
      n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), r.up.set(0, -1, 0), r.lookAt(1, 0, 0), s.up.set(0, 0, 1), s.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + t);
    for (const c of e)
      this.add(c), c.updateMatrixWorld();
  }
  update(t, e) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: r } = this;
    this.coordinateSystem !== t.coordinateSystem && (this.coordinateSystem = t.coordinateSystem, this.updateCoordinateSystem());
    const [s, a, o, l, c, h] = this.children, u = t.getRenderTarget(), d = t.getActiveCubeFace(), f = t.getActiveMipmapLevel(), _ = t.xr.enabled;
    t.xr.enabled = !1;
    const x = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, t.setRenderTarget(n, 0, r), t.render(e, s), t.setRenderTarget(n, 1, r), t.render(e, a), t.setRenderTarget(n, 2, r), t.render(e, o), t.setRenderTarget(n, 3, r), t.render(e, l), t.setRenderTarget(n, 4, r), t.render(e, c), n.texture.generateMipmaps = x, t.setRenderTarget(n, 5, r), t.render(e, h), t.setRenderTarget(u, d, f), t.xr.enabled = _, n.texture.needsPMREMUpdate = !0;
  }
}
class Fa extends Ee {
  constructor(t, e, n, r, s, a, o, l, c, h) {
    t = t !== void 0 ? t : [], e = e !== void 0 ? e : 301, super(t, e, n, r, s, a, o, l, c, h), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(t) {
    this.image = t;
  }
}
class ko extends Pn {
  constructor(t = 1, e = {}) {
    super(t, t, e), this.isWebGLCubeRenderTarget = !0;
    const n = { width: t, height: t, depth: 1 }, r = [n, n, n, n, n, n];
    this.texture = new Fa(r, e.mapping, e.wrapS, e.wrapT, e.magFilter, e.minFilter, e.format, e.type, e.anisotropy, e.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = e.generateMipmaps !== void 0 ? e.generateMipmaps : !1, this.texture.minFilter = e.minFilter !== void 0 ? e.minFilter : 1006;
  }
  fromEquirectangularTexture(t, e) {
    this.texture.type = e.type, this.texture.colorSpace = e.colorSpace, this.texture.generateMipmaps = e.generateMipmaps, this.texture.minFilter = e.minFilter, this.texture.magFilter = e.magFilter;
    const n = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
      )
    }, r = new xi(5, 5, 5), s = new _n({
      name: "CubemapFromEquirect",
      uniforms: ti(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: 1,
      blending: 0
    });
    s.uniforms.tEquirect.value = e;
    const a = new Ne(r, s), o = e.minFilter;
    return e.minFilter === 1008 && (e.minFilter = 1006), new Vo(1, 10, this).update(t, a), e.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  clear(t, e, n, r) {
    const s = t.getRenderTarget();
    for (let a = 0; a < 6; a++)
      t.setRenderTarget(this, a), t.clear(e, n, r);
    t.setRenderTarget(s);
  }
}
const Br = /* @__PURE__ */ new I(), Ho = /* @__PURE__ */ new I(), Wo = /* @__PURE__ */ new Lt();
class An {
  constructor(t = new I(1, 0, 0), e = 0) {
    this.isPlane = !0, this.normal = t, this.constant = e;
  }
  set(t, e) {
    return this.normal.copy(t), this.constant = e, this;
  }
  setComponents(t, e, n, r) {
    return this.normal.set(t, e, n), this.constant = r, this;
  }
  setFromNormalAndCoplanarPoint(t, e) {
    return this.normal.copy(t), this.constant = -e.dot(this.normal), this;
  }
  setFromCoplanarPoints(t, e, n) {
    const r = Br.subVectors(n, e).cross(Ho.subVectors(t, e)).normalize();
    return this.setFromNormalAndCoplanarPoint(r, t), this;
  }
  copy(t) {
    return this.normal.copy(t.normal), this.constant = t.constant, this;
  }
  normalize() {
    const t = 1 / this.normal.length();
    return this.normal.multiplyScalar(t), this.constant *= t, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(t) {
    return this.normal.dot(t) + this.constant;
  }
  distanceToSphere(t) {
    return this.distanceToPoint(t.center) - t.radius;
  }
  projectPoint(t, e) {
    return e.copy(t).addScaledVector(this.normal, -this.distanceToPoint(t));
  }
  intersectLine(t, e) {
    const n = t.delta(Br), r = this.normal.dot(n);
    if (r === 0)
      return this.distanceToPoint(t.start) === 0 ? e.copy(t.start) : null;
    const s = -(t.start.dot(this.normal) + this.constant) / r;
    return s < 0 || s > 1 ? null : e.copy(t.start).addScaledVector(n, s);
  }
  intersectsLine(t) {
    const e = this.distanceToPoint(t.start), n = this.distanceToPoint(t.end);
    return e < 0 && n > 0 || n < 0 && e > 0;
  }
  intersectsBox(t) {
    return t.intersectsPlane(this);
  }
  intersectsSphere(t) {
    return t.intersectsPlane(this);
  }
  coplanarPoint(t) {
    return t.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(t, e) {
    const n = e || Wo.getNormalMatrix(t), r = this.coplanarPoint(Br).applyMatrix4(t), s = this.normal.applyMatrix3(n).normalize();
    return this.constant = -r.dot(s), this;
  }
  translate(t) {
    return this.constant -= t.dot(this.normal), this;
  }
  equals(t) {
    return t.normal.equals(this.normal) && t.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const yn = /* @__PURE__ */ new is(), zi = /* @__PURE__ */ new I();
class rs {
  constructor(t = new An(), e = new An(), n = new An(), r = new An(), s = new An(), a = new An()) {
    this.planes = [t, e, n, r, s, a];
  }
  set(t, e, n, r, s, a) {
    const o = this.planes;
    return o[0].copy(t), o[1].copy(e), o[2].copy(n), o[3].copy(r), o[4].copy(s), o[5].copy(a), this;
  }
  copy(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++)
      e[n].copy(t.planes[n]);
    return this;
  }
  setFromProjectionMatrix(t, e = 2e3) {
    const n = this.planes, r = t.elements, s = r[0], a = r[1], o = r[2], l = r[3], c = r[4], h = r[5], u = r[6], d = r[7], f = r[8], _ = r[9], x = r[10], m = r[11], p = r[12], T = r[13], S = r[14], y = r[15];
    if (n[0].setComponents(l - s, d - c, m - f, y - p).normalize(), n[1].setComponents(l + s, d + c, m + f, y + p).normalize(), n[2].setComponents(l + a, d + h, m + _, y + T).normalize(), n[3].setComponents(l - a, d - h, m - _, y - T).normalize(), n[4].setComponents(l - o, d - u, m - x, y - S).normalize(), e === 2e3)
      n[5].setComponents(l + o, d + u, m + x, y + S).normalize();
    else if (e === 2001)
      n[5].setComponents(o, u, x, S).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + e);
    return this;
  }
  intersectsObject(t) {
    if (t.boundingSphere !== void 0)
      t.boundingSphere === null && t.computeBoundingSphere(), yn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);
    else {
      const e = t.geometry;
      e.boundingSphere === null && e.computeBoundingSphere(), yn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld);
    }
    return this.intersectsSphere(yn);
  }
  intersectsSprite(t) {
    return yn.center.set(0, 0, 0), yn.radius = 0.7071067811865476, yn.applyMatrix4(t.matrixWorld), this.intersectsSphere(yn);
  }
  intersectsSphere(t) {
    const e = this.planes, n = t.center, r = -t.radius;
    for (let s = 0; s < 6; s++)
      if (e[s].distanceToPoint(n) < r)
        return !1;
    return !0;
  }
  intersectsBox(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++) {
      const r = e[n];
      if (zi.x = r.normal.x > 0 ? t.max.x : t.min.x, zi.y = r.normal.y > 0 ? t.max.y : t.min.y, zi.z = r.normal.z > 0 ? t.max.z : t.min.z, r.distanceToPoint(zi) < 0)
        return !1;
    }
    return !0;
  }
  containsPoint(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++)
      if (e[n].distanceToPoint(t) < 0)
        return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function Ba() {
  let i = null, t = !1, e = null, n = null;
  function r(s, a) {
    e(s, a), n = i.requestAnimationFrame(r);
  }
  return {
    start: function() {
      t !== !0 && e !== null && (n = i.requestAnimationFrame(r), t = !0);
    },
    stop: function() {
      i.cancelAnimationFrame(n), t = !1;
    },
    setAnimationLoop: function(s) {
      e = s;
    },
    setContext: function(s) {
      i = s;
    }
  };
}
function Xo(i) {
  const t = /* @__PURE__ */ new WeakMap();
  function e(o, l) {
    const c = o.array, h = o.usage, u = c.byteLength, d = i.createBuffer();
    i.bindBuffer(l, d), i.bufferData(l, c, h), o.onUploadCallback();
    let f;
    if (c instanceof Float32Array)
      f = i.FLOAT;
    else if (c instanceof Uint16Array)
      o.isFloat16BufferAttribute ? f = i.HALF_FLOAT : f = i.UNSIGNED_SHORT;
    else if (c instanceof Int16Array)
      f = i.SHORT;
    else if (c instanceof Uint32Array)
      f = i.UNSIGNED_INT;
    else if (c instanceof Int32Array)
      f = i.INT;
    else if (c instanceof Int8Array)
      f = i.BYTE;
    else if (c instanceof Uint8Array)
      f = i.UNSIGNED_BYTE;
    else if (c instanceof Uint8ClampedArray)
      f = i.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c);
    return {
      buffer: d,
      type: f,
      bytesPerElement: c.BYTES_PER_ELEMENT,
      version: o.version,
      size: u
    };
  }
  function n(o, l, c) {
    const h = l.array, u = l.updateRanges;
    if (i.bindBuffer(c, o), u.length === 0)
      i.bufferSubData(c, 0, h);
    else {
      u.sort((f, _) => f.start - _.start);
      let d = 0;
      for (let f = 1; f < u.length; f++) {
        const _ = u[d], x = u[f];
        x.start <= _.start + _.count + 1 ? _.count = Math.max(
          _.count,
          x.start + x.count - _.start
        ) : (++d, u[d] = x);
      }
      u.length = d + 1;
      for (let f = 0, _ = u.length; f < _; f++) {
        const x = u[f];
        i.bufferSubData(
          c,
          x.start * h.BYTES_PER_ELEMENT,
          h,
          x.start,
          x.count
        );
      }
      l.clearUpdateRanges();
    }
    l.onUploadCallback();
  }
  function r(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), t.get(o);
  }
  function s(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const l = t.get(o);
    l && (i.deleteBuffer(l.buffer), t.delete(o));
  }
  function a(o, l) {
    if (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute) {
      const h = t.get(o);
      (!h || h.version < o.version) && t.set(o, {
        buffer: o.buffer,
        type: o.type,
        bytesPerElement: o.elementSize,
        version: o.version
      });
      return;
    }
    const c = t.get(o);
    if (c === void 0)
      t.set(o, e(o, l));
    else if (c.version < o.version) {
      if (c.size !== o.array.byteLength)
        throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      n(c.buffer, o, l), c.version = o.version;
    }
  }
  return {
    get: r,
    remove: s,
    update: a
  };
}
class ar extends Ge {
  constructor(t = 1, e = 1, n = 1, r = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: t,
      height: e,
      widthSegments: n,
      heightSegments: r
    };
    const s = t / 2, a = e / 2, o = Math.floor(n), l = Math.floor(r), c = o + 1, h = l + 1, u = t / o, d = e / l, f = [], _ = [], x = [], m = [];
    for (let p = 0; p < h; p++) {
      const T = p * d - a;
      for (let S = 0; S < c; S++) {
        const y = S * u - s;
        _.push(y, -T, 0), x.push(0, 0, 1), m.push(S / o), m.push(1 - p / l);
      }
    }
    for (let p = 0; p < l; p++)
      for (let T = 0; T < o; T++) {
        const S = T + c * p, y = T + c * (p + 1), C = T + 1 + c * (p + 1), w = T + 1 + c * p;
        f.push(S, y, w), f.push(y, C, w);
      }
    this.setIndex(f), this.setAttribute("position", new ue(_, 3)), this.setAttribute("normal", new ue(x, 3)), this.setAttribute("uv", new ue(m, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new ar(t.width, t.height, t.widthSegments, t.heightSegments);
  }
}
var qo = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, Yo = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, Ko = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, Jo = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Zo = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, $o = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, jo = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, Qo = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, tl = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`, el = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, nl = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, il = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, rl = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, sl = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, al = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, ol = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, ll = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, cl = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, hl = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, ul = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, dl = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, fl = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, pl = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`, ml = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, _l = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, gl = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, vl = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, xl = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, Sl = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Ml = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, yl = "gl_FragColor = linearToOutputTexel( gl_FragColor );", El = `
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, Tl = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, Al = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, bl = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, wl = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Rl = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, Cl = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, Pl = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, Il = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Ll = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Dl = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, Ul = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, Nl = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, Fl = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, Bl = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, Ol = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, zl = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, Gl = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, Vl = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, kl = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, Hl = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, Wl = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, Xl = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, ql = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, Yl = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, Kl = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Jl = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Zl = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, $l = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, jl = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, Ql = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, tc = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, ec = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, nc = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, ic = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, rc = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, sc = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, ac = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, oc = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`, lc = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, cc = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, hc = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, uc = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, dc = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, fc = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, pc = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, mc = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, _c = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, gc = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, vc = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, xc = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Sc = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, Mc = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, yc = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Ec = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Tc = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Ac = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, bc = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, wc = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`, Rc = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, Cc = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, Pc = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, Ic = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Lc = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, Dc = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, Uc = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, Nc = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, Fc = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Bc = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Oc = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, zc = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, Gc = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, Vc = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, kc = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, Hc = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, Wc = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Xc = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, qc = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Yc = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Kc = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Jc = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Zc = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, $c = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, jc = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, Qc = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, th = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, eh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, nh = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, ih = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, rh = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, sh = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, ah = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, oh = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, lh = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, ch = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, hh = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, uh = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, dh = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, fh = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, ph = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, mh = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, _h = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, gh = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, vh = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, xh = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, Sh = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Mh = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, yh = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Eh = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Th = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, It = {
  alphahash_fragment: qo,
  alphahash_pars_fragment: Yo,
  alphamap_fragment: Ko,
  alphamap_pars_fragment: Jo,
  alphatest_fragment: Zo,
  alphatest_pars_fragment: $o,
  aomap_fragment: jo,
  aomap_pars_fragment: Qo,
  batching_pars_vertex: tl,
  batching_vertex: el,
  begin_vertex: nl,
  beginnormal_vertex: il,
  bsdfs: rl,
  iridescence_fragment: sl,
  bumpmap_pars_fragment: al,
  clipping_planes_fragment: ol,
  clipping_planes_pars_fragment: ll,
  clipping_planes_pars_vertex: cl,
  clipping_planes_vertex: hl,
  color_fragment: ul,
  color_pars_fragment: dl,
  color_pars_vertex: fl,
  color_vertex: pl,
  common: ml,
  cube_uv_reflection_fragment: _l,
  defaultnormal_vertex: gl,
  displacementmap_pars_vertex: vl,
  displacementmap_vertex: xl,
  emissivemap_fragment: Sl,
  emissivemap_pars_fragment: Ml,
  colorspace_fragment: yl,
  colorspace_pars_fragment: El,
  envmap_fragment: Tl,
  envmap_common_pars_fragment: Al,
  envmap_pars_fragment: bl,
  envmap_pars_vertex: wl,
  envmap_physical_pars_fragment: Ol,
  envmap_vertex: Rl,
  fog_vertex: Cl,
  fog_pars_vertex: Pl,
  fog_fragment: Il,
  fog_pars_fragment: Ll,
  gradientmap_pars_fragment: Dl,
  lightmap_pars_fragment: Ul,
  lights_lambert_fragment: Nl,
  lights_lambert_pars_fragment: Fl,
  lights_pars_begin: Bl,
  lights_toon_fragment: zl,
  lights_toon_pars_fragment: Gl,
  lights_phong_fragment: Vl,
  lights_phong_pars_fragment: kl,
  lights_physical_fragment: Hl,
  lights_physical_pars_fragment: Wl,
  lights_fragment_begin: Xl,
  lights_fragment_maps: ql,
  lights_fragment_end: Yl,
  logdepthbuf_fragment: Kl,
  logdepthbuf_pars_fragment: Jl,
  logdepthbuf_pars_vertex: Zl,
  logdepthbuf_vertex: $l,
  map_fragment: jl,
  map_pars_fragment: Ql,
  map_particle_fragment: tc,
  map_particle_pars_fragment: ec,
  metalnessmap_fragment: nc,
  metalnessmap_pars_fragment: ic,
  morphinstance_vertex: rc,
  morphcolor_vertex: sc,
  morphnormal_vertex: ac,
  morphtarget_pars_vertex: oc,
  morphtarget_vertex: lc,
  normal_fragment_begin: cc,
  normal_fragment_maps: hc,
  normal_pars_fragment: uc,
  normal_pars_vertex: dc,
  normal_vertex: fc,
  normalmap_pars_fragment: pc,
  clearcoat_normal_fragment_begin: mc,
  clearcoat_normal_fragment_maps: _c,
  clearcoat_pars_fragment: gc,
  iridescence_pars_fragment: vc,
  opaque_fragment: xc,
  packing: Sc,
  premultiplied_alpha_fragment: Mc,
  project_vertex: yc,
  dithering_fragment: Ec,
  dithering_pars_fragment: Tc,
  roughnessmap_fragment: Ac,
  roughnessmap_pars_fragment: bc,
  shadowmap_pars_fragment: wc,
  shadowmap_pars_vertex: Rc,
  shadowmap_vertex: Cc,
  shadowmask_pars_fragment: Pc,
  skinbase_vertex: Ic,
  skinning_pars_vertex: Lc,
  skinning_vertex: Dc,
  skinnormal_vertex: Uc,
  specularmap_fragment: Nc,
  specularmap_pars_fragment: Fc,
  tonemapping_fragment: Bc,
  tonemapping_pars_fragment: Oc,
  transmission_fragment: zc,
  transmission_pars_fragment: Gc,
  uv_pars_fragment: Vc,
  uv_pars_vertex: kc,
  uv_vertex: Hc,
  worldpos_vertex: Wc,
  background_vert: Xc,
  background_frag: qc,
  backgroundCube_vert: Yc,
  backgroundCube_frag: Kc,
  cube_vert: Jc,
  cube_frag: Zc,
  depth_vert: $c,
  depth_frag: jc,
  distanceRGBA_vert: Qc,
  distanceRGBA_frag: th,
  equirect_vert: eh,
  equirect_frag: nh,
  linedashed_vert: ih,
  linedashed_frag: rh,
  meshbasic_vert: sh,
  meshbasic_frag: ah,
  meshlambert_vert: oh,
  meshlambert_frag: lh,
  meshmatcap_vert: ch,
  meshmatcap_frag: hh,
  meshnormal_vert: uh,
  meshnormal_frag: dh,
  meshphong_vert: fh,
  meshphong_frag: ph,
  meshphysical_vert: mh,
  meshphysical_frag: _h,
  meshtoon_vert: gh,
  meshtoon_frag: vh,
  points_vert: xh,
  points_frag: Sh,
  shadow_vert: Mh,
  shadow_frag: yh,
  sprite_vert: Eh,
  sprite_frag: Th
}, et = {
  common: {
    diffuse: { value: /* @__PURE__ */ new Gt(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Lt() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Lt() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new Lt() }
  },
  envmap: {
    envMap: { value: null },
    envMapRotation: { value: /* @__PURE__ */ new Lt() },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    // basic, lambert, phong
    ior: { value: 1.5 },
    // physical
    refractionRatio: { value: 0.98 }
    // basic, lambert, phong
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 },
    aoMapTransform: { value: /* @__PURE__ */ new Lt() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new Lt() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new Lt() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new Lt() },
    normalScale: { value: /* @__PURE__ */ new ot(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new Lt() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new Lt() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new Lt() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new Lt() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new Gt(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotShadowMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    // TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new Gt(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Lt() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Lt() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new Gt(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new ot(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Lt() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Lt() },
    alphaTest: { value: 0 }
  }
}, Ke = {
  basic: {
    uniforms: /* @__PURE__ */ ye([
      et.common,
      et.specularmap,
      et.envmap,
      et.aomap,
      et.lightmap,
      et.fog
    ]),
    vertexShader: It.meshbasic_vert,
    fragmentShader: It.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ ye([
      et.common,
      et.specularmap,
      et.envmap,
      et.aomap,
      et.lightmap,
      et.emissivemap,
      et.bumpmap,
      et.normalmap,
      et.displacementmap,
      et.fog,
      et.lights,
      {
        emissive: { value: /* @__PURE__ */ new Gt(0) }
      }
    ]),
    vertexShader: It.meshlambert_vert,
    fragmentShader: It.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ ye([
      et.common,
      et.specularmap,
      et.envmap,
      et.aomap,
      et.lightmap,
      et.emissivemap,
      et.bumpmap,
      et.normalmap,
      et.displacementmap,
      et.fog,
      et.lights,
      {
        emissive: { value: /* @__PURE__ */ new Gt(0) },
        specular: { value: /* @__PURE__ */ new Gt(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: It.meshphong_vert,
    fragmentShader: It.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ ye([
      et.common,
      et.envmap,
      et.aomap,
      et.lightmap,
      et.emissivemap,
      et.bumpmap,
      et.normalmap,
      et.displacementmap,
      et.roughnessmap,
      et.metalnessmap,
      et.fog,
      et.lights,
      {
        emissive: { value: /* @__PURE__ */ new Gt(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: It.meshphysical_vert,
    fragmentShader: It.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ ye([
      et.common,
      et.aomap,
      et.lightmap,
      et.emissivemap,
      et.bumpmap,
      et.normalmap,
      et.displacementmap,
      et.gradientmap,
      et.fog,
      et.lights,
      {
        emissive: { value: /* @__PURE__ */ new Gt(0) }
      }
    ]),
    vertexShader: It.meshtoon_vert,
    fragmentShader: It.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ ye([
      et.common,
      et.bumpmap,
      et.normalmap,
      et.displacementmap,
      et.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: It.meshmatcap_vert,
    fragmentShader: It.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ ye([
      et.points,
      et.fog
    ]),
    vertexShader: It.points_vert,
    fragmentShader: It.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ ye([
      et.common,
      et.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: It.linedashed_vert,
    fragmentShader: It.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ ye([
      et.common,
      et.displacementmap
    ]),
    vertexShader: It.depth_vert,
    fragmentShader: It.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ ye([
      et.common,
      et.bumpmap,
      et.normalmap,
      et.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: It.meshnormal_vert,
    fragmentShader: It.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ ye([
      et.sprite,
      et.fog
    ]),
    vertexShader: It.sprite_vert,
    fragmentShader: It.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Lt() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: It.background_vert,
    fragmentShader: It.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 },
      backgroundRotation: { value: /* @__PURE__ */ new Lt() }
    },
    vertexShader: It.backgroundCube_vert,
    fragmentShader: It.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: It.cube_vert,
    fragmentShader: It.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: It.equirect_vert,
    fragmentShader: It.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ ye([
      et.common,
      et.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new I() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: It.distanceRGBA_vert,
    fragmentShader: It.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ ye([
      et.lights,
      et.fog,
      {
        color: { value: /* @__PURE__ */ new Gt(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: It.shadow_vert,
    fragmentShader: It.shadow_frag
  }
};
Ke.physical = {
  uniforms: /* @__PURE__ */ ye([
    Ke.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new Lt() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new Lt() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new ot(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new Lt() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new Lt() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new Lt() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new Gt(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new Lt() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new Lt() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new Lt() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new ot() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new Lt() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new Gt(0) },
      specularColor: { value: /* @__PURE__ */ new Gt(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new Lt() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new Lt() },
      anisotropyVector: { value: /* @__PURE__ */ new ot() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new Lt() }
    }
  ]),
  vertexShader: It.meshphysical_vert,
  fragmentShader: It.meshphysical_frag
};
const Gi = { r: 0, b: 0, g: 0 }, En = /* @__PURE__ */ new qe(), Ah = /* @__PURE__ */ new re();
function bh(i, t, e, n, r, s, a) {
  const o = new Gt(0);
  let l = s === !0 ? 0 : 1, c, h, u = null, d = 0, f = null;
  function _(T) {
    let S = T.isScene === !0 ? T.background : null;
    return S && S.isTexture && (S = (T.backgroundBlurriness > 0 ? e : t).get(S)), S;
  }
  function x(T) {
    let S = !1;
    const y = _(T);
    y === null ? p(o, l) : y && y.isColor && (p(y, 1), S = !0);
    const C = i.xr.getEnvironmentBlendMode();
    C === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : C === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (i.autoClear || S) && (n.buffers.depth.setTest(!0), n.buffers.depth.setMask(!0), n.buffers.color.setMask(!0), i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil));
  }
  function m(T, S) {
    const y = _(S);
    y && (y.isCubeTexture || y.mapping === 306) ? (h === void 0 && (h = new Ne(
      new xi(1, 1, 1),
      new _n({
        name: "BackgroundCubeMaterial",
        uniforms: ti(Ke.backgroundCube.uniforms),
        vertexShader: Ke.backgroundCube.vertexShader,
        fragmentShader: Ke.backgroundCube.fragmentShader,
        side: 1,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(C, w, b) {
      this.matrixWorld.copyPosition(b.matrixWorld);
    }, Object.defineProperty(h.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), r.update(h)), En.copy(S.backgroundRotation), En.x *= -1, En.y *= -1, En.z *= -1, y.isCubeTexture && y.isRenderTargetTexture === !1 && (En.y *= -1, En.z *= -1), h.material.uniforms.envMap.value = y, h.material.uniforms.flipEnvMap.value = y.isCubeTexture && y.isRenderTargetTexture === !1 ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = S.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = S.backgroundIntensity, h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ah.makeRotationFromEuler(En)), h.material.toneMapped = Kt.getTransfer(y.colorSpace) !== ie, (u !== y || d !== y.version || f !== i.toneMapping) && (h.material.needsUpdate = !0, u = y, d = y.version, f = i.toneMapping), h.layers.enableAll(), T.unshift(h, h.geometry, h.material, 0, 0, null)) : y && y.isTexture && (c === void 0 && (c = new Ne(
      new ar(2, 2),
      new _n({
        name: "BackgroundMaterial",
        uniforms: ti(Ke.background.uniforms),
        vertexShader: Ke.background.vertexShader,
        fragmentShader: Ke.background.fragmentShader,
        side: 0,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), r.update(c)), c.material.uniforms.t2D.value = y, c.material.uniforms.backgroundIntensity.value = S.backgroundIntensity, c.material.toneMapped = Kt.getTransfer(y.colorSpace) !== ie, y.matrixAutoUpdate === !0 && y.updateMatrix(), c.material.uniforms.uvTransform.value.copy(y.matrix), (u !== y || d !== y.version || f !== i.toneMapping) && (c.material.needsUpdate = !0, u = y, d = y.version, f = i.toneMapping), c.layers.enableAll(), T.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function p(T, S) {
    T.getRGB(Gi, Ua(i)), n.buffers.color.setClear(Gi.r, Gi.g, Gi.b, S, a);
  }
  return {
    getClearColor: function() {
      return o;
    },
    setClearColor: function(T, S = 1) {
      o.set(T), l = S, p(o, l);
    },
    getClearAlpha: function() {
      return l;
    },
    setClearAlpha: function(T) {
      l = T, p(o, l);
    },
    render: x,
    addToRenderList: m
  };
}
function wh(i, t) {
  const e = i.getParameter(i.MAX_VERTEX_ATTRIBS), n = {}, r = d(null);
  let s = r, a = !1;
  function o(g, E, z, O, V) {
    let J = !1;
    const G = u(O, z, E);
    s !== G && (s = G, c(s.object)), J = f(g, O, z, V), J && _(g, O, z, V), V !== null && t.update(V, i.ELEMENT_ARRAY_BUFFER), (J || a) && (a = !1, y(g, E, z, O), V !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, t.get(V).buffer));
  }
  function l() {
    return i.createVertexArray();
  }
  function c(g) {
    return i.bindVertexArray(g);
  }
  function h(g) {
    return i.deleteVertexArray(g);
  }
  function u(g, E, z) {
    const O = z.wireframe === !0;
    let V = n[g.id];
    V === void 0 && (V = {}, n[g.id] = V);
    let J = V[E.id];
    J === void 0 && (J = {}, V[E.id] = J);
    let G = J[O];
    return G === void 0 && (G = d(l()), J[O] = G), G;
  }
  function d(g) {
    const E = [], z = [], O = [];
    for (let V = 0; V < e; V++)
      E[V] = 0, z[V] = 0, O[V] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: E,
      enabledAttributes: z,
      attributeDivisors: O,
      object: g,
      attributes: {},
      index: null
    };
  }
  function f(g, E, z, O) {
    const V = s.attributes, J = E.attributes;
    let G = 0;
    const Q = z.getAttributes();
    for (const H in Q)
      if (Q[H].location >= 0) {
        const ct = V[H];
        let vt = J[H];
        if (vt === void 0 && (H === "instanceMatrix" && g.instanceMatrix && (vt = g.instanceMatrix), H === "instanceColor" && g.instanceColor && (vt = g.instanceColor)), ct === void 0 || ct.attribute !== vt || vt && ct.data !== vt.data) return !0;
        G++;
      }
    return s.attributesNum !== G || s.index !== O;
  }
  function _(g, E, z, O) {
    const V = {}, J = E.attributes;
    let G = 0;
    const Q = z.getAttributes();
    for (const H in Q)
      if (Q[H].location >= 0) {
        let ct = J[H];
        ct === void 0 && (H === "instanceMatrix" && g.instanceMatrix && (ct = g.instanceMatrix), H === "instanceColor" && g.instanceColor && (ct = g.instanceColor));
        const vt = {};
        vt.attribute = ct, ct && ct.data && (vt.data = ct.data), V[H] = vt, G++;
      }
    s.attributes = V, s.attributesNum = G, s.index = O;
  }
  function x() {
    const g = s.newAttributes;
    for (let E = 0, z = g.length; E < z; E++)
      g[E] = 0;
  }
  function m(g) {
    p(g, 0);
  }
  function p(g, E) {
    const z = s.newAttributes, O = s.enabledAttributes, V = s.attributeDivisors;
    z[g] = 1, O[g] === 0 && (i.enableVertexAttribArray(g), O[g] = 1), V[g] !== E && (i.vertexAttribDivisor(g, E), V[g] = E);
  }
  function T() {
    const g = s.newAttributes, E = s.enabledAttributes;
    for (let z = 0, O = E.length; z < O; z++)
      E[z] !== g[z] && (i.disableVertexAttribArray(z), E[z] = 0);
  }
  function S(g, E, z, O, V, J, G) {
    G === !0 ? i.vertexAttribIPointer(g, E, z, V, J) : i.vertexAttribPointer(g, E, z, O, V, J);
  }
  function y(g, E, z, O) {
    x();
    const V = O.attributes, J = z.getAttributes(), G = E.defaultAttributeValues;
    for (const Q in J) {
      const H = J[Q];
      if (H.location >= 0) {
        let lt = V[Q];
        if (lt === void 0 && (Q === "instanceMatrix" && g.instanceMatrix && (lt = g.instanceMatrix), Q === "instanceColor" && g.instanceColor && (lt = g.instanceColor)), lt !== void 0) {
          const ct = lt.normalized, vt = lt.itemSize, Wt = t.get(lt);
          if (Wt === void 0) continue;
          const Jt = Wt.buffer, W = Wt.type, $ = Wt.bytesPerElement, _t = W === i.INT || W === i.UNSIGNED_INT || lt.gpuType === 1013;
          if (lt.isInterleavedBufferAttribute) {
            const ht = lt.data, Ct = ht.stride, Et = lt.offset;
            if (ht.isInstancedInterleavedBuffer) {
              for (let Bt = 0; Bt < H.locationSize; Bt++)
                p(H.location + Bt, ht.meshPerAttribute);
              g.isInstancedMesh !== !0 && O._maxInstanceCount === void 0 && (O._maxInstanceCount = ht.meshPerAttribute * ht.count);
            } else
              for (let Bt = 0; Bt < H.locationSize; Bt++)
                m(H.location + Bt);
            i.bindBuffer(i.ARRAY_BUFFER, Jt);
            for (let Bt = 0; Bt < H.locationSize; Bt++)
              S(
                H.location + Bt,
                vt / H.locationSize,
                W,
                ct,
                Ct * $,
                (Et + vt / H.locationSize * Bt) * $,
                _t
              );
          } else {
            if (lt.isInstancedBufferAttribute) {
              for (let ht = 0; ht < H.locationSize; ht++)
                p(H.location + ht, lt.meshPerAttribute);
              g.isInstancedMesh !== !0 && O._maxInstanceCount === void 0 && (O._maxInstanceCount = lt.meshPerAttribute * lt.count);
            } else
              for (let ht = 0; ht < H.locationSize; ht++)
                m(H.location + ht);
            i.bindBuffer(i.ARRAY_BUFFER, Jt);
            for (let ht = 0; ht < H.locationSize; ht++)
              S(
                H.location + ht,
                vt / H.locationSize,
                W,
                ct,
                vt * $,
                vt / H.locationSize * ht * $,
                _t
              );
          }
        } else if (G !== void 0) {
          const ct = G[Q];
          if (ct !== void 0)
            switch (ct.length) {
              case 2:
                i.vertexAttrib2fv(H.location, ct);
                break;
              case 3:
                i.vertexAttrib3fv(H.location, ct);
                break;
              case 4:
                i.vertexAttrib4fv(H.location, ct);
                break;
              default:
                i.vertexAttrib1fv(H.location, ct);
            }
        }
      }
    }
    T();
  }
  function C() {
    U();
    for (const g in n) {
      const E = n[g];
      for (const z in E) {
        const O = E[z];
        for (const V in O)
          h(O[V].object), delete O[V];
        delete E[z];
      }
      delete n[g];
    }
  }
  function w(g) {
    if (n[g.id] === void 0) return;
    const E = n[g.id];
    for (const z in E) {
      const O = E[z];
      for (const V in O)
        h(O[V].object), delete O[V];
      delete E[z];
    }
    delete n[g.id];
  }
  function b(g) {
    for (const E in n) {
      const z = n[E];
      if (z[g.id] === void 0) continue;
      const O = z[g.id];
      for (const V in O)
        h(O[V].object), delete O[V];
      delete z[g.id];
    }
  }
  function U() {
    K(), a = !0, s !== r && (s = r, c(s.object));
  }
  function K() {
    r.geometry = null, r.program = null, r.wireframe = !1;
  }
  return {
    setup: o,
    reset: U,
    resetDefaultState: K,
    dispose: C,
    releaseStatesOfGeometry: w,
    releaseStatesOfProgram: b,
    initAttributes: x,
    enableAttribute: m,
    disableUnusedAttributes: T
  };
}
function Rh(i, t, e) {
  let n;
  function r(c) {
    n = c;
  }
  function s(c, h) {
    i.drawArrays(n, c, h), e.update(h, n, 1);
  }
  function a(c, h, u) {
    u !== 0 && (i.drawArraysInstanced(n, c, h, u), e.update(h, n, u));
  }
  function o(c, h, u) {
    if (u === 0) return;
    t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, c, 0, h, 0, u);
    let f = 0;
    for (let _ = 0; _ < u; _++)
      f += h[_];
    e.update(f, n, 1);
  }
  function l(c, h, u, d) {
    if (u === 0) return;
    const f = t.get("WEBGL_multi_draw");
    if (f === null)
      for (let _ = 0; _ < c.length; _++)
        a(c[_], h[_], d[_]);
    else {
      f.multiDrawArraysInstancedWEBGL(n, c, 0, h, 0, d, 0, u);
      let _ = 0;
      for (let x = 0; x < u; x++)
        _ += h[x];
      for (let x = 0; x < d.length; x++)
        e.update(_, n, d[x]);
    }
  }
  this.setMode = r, this.render = s, this.renderInstances = a, this.renderMultiDraw = o, this.renderMultiDrawInstances = l;
}
function Ch(i, t, e, n) {
  let r;
  function s() {
    if (r !== void 0) return r;
    if (t.has("EXT_texture_filter_anisotropic") === !0) {
      const b = t.get("EXT_texture_filter_anisotropic");
      r = i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      r = 0;
    return r;
  }
  function a(b) {
    return !(b !== 1023 && n.convert(b) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function o(b) {
    const U = b === 1016 && (t.has("EXT_color_buffer_half_float") || t.has("EXT_color_buffer_float"));
    return !(b !== 1009 && n.convert(b) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
    b !== 1015 && !U);
  }
  function l(b) {
    if (b === "highp") {
      if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0)
        return "highp";
      b = "mediump";
    }
    return b === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let c = e.precision !== void 0 ? e.precision : "highp";
  const h = l(c);
  h !== c && (console.warn("THREE.WebGLRenderer:", c, "not supported, using", h, "instead."), c = h);
  const u = e.logarithmicDepthBuffer === !0, d = e.reverseDepthBuffer === !0 && t.has("EXT_clip_control");
  if (d === !0) {
    const b = t.get("EXT_clip_control");
    b.clipControlEXT(b.LOWER_LEFT_EXT, b.ZERO_TO_ONE_EXT);
  }
  const f = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), _ = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS), x = i.getParameter(i.MAX_TEXTURE_SIZE), m = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE), p = i.getParameter(i.MAX_VERTEX_ATTRIBS), T = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS), S = i.getParameter(i.MAX_VARYING_VECTORS), y = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS), C = _ > 0, w = i.getParameter(i.MAX_SAMPLES);
  return {
    isWebGL2: !0,
    // keeping this for backwards compatibility
    getMaxAnisotropy: s,
    getMaxPrecision: l,
    textureFormatReadable: a,
    textureTypeReadable: o,
    precision: c,
    logarithmicDepthBuffer: u,
    reverseDepthBuffer: d,
    maxTextures: f,
    maxVertexTextures: _,
    maxTextureSize: x,
    maxCubemapSize: m,
    maxAttributes: p,
    maxVertexUniforms: T,
    maxVaryings: S,
    maxFragmentUniforms: y,
    vertexTextures: C,
    maxSamples: w
  };
}
function Ph(i) {
  const t = this;
  let e = null, n = 0, r = !1, s = !1;
  const a = new An(), o = new Lt(), l = { value: null, needsUpdate: !1 };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(u, d) {
    const f = u.length !== 0 || d || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || r;
    return r = d, n = u.length, f;
  }, this.beginShadows = function() {
    s = !0, h(null);
  }, this.endShadows = function() {
    s = !1;
  }, this.setGlobalState = function(u, d) {
    e = h(u, d, 0);
  }, this.setState = function(u, d, f) {
    const _ = u.clippingPlanes, x = u.clipIntersection, m = u.clipShadows, p = i.get(u);
    if (!r || _ === null || _.length === 0 || s && !m)
      s ? h(null) : c();
    else {
      const T = s ? 0 : n, S = T * 4;
      let y = p.clippingState || null;
      l.value = y, y = h(_, d, S, f);
      for (let C = 0; C !== S; ++C)
        y[C] = e[C];
      p.clippingState = y, this.numIntersection = x ? this.numPlanes : 0, this.numPlanes += T;
    }
  };
  function c() {
    l.value !== e && (l.value = e, l.needsUpdate = n > 0), t.numPlanes = n, t.numIntersection = 0;
  }
  function h(u, d, f, _) {
    const x = u !== null ? u.length : 0;
    let m = null;
    if (x !== 0) {
      if (m = l.value, _ !== !0 || m === null) {
        const p = f + x * 4, T = d.matrixWorldInverse;
        o.getNormalMatrix(T), (m === null || m.length < p) && (m = new Float32Array(p));
        for (let S = 0, y = f; S !== x; ++S, y += 4)
          a.copy(u[S]).applyMatrix4(T, o), a.normal.toArray(m, y), m[y + 3] = a.constant;
      }
      l.value = m, l.needsUpdate = !0;
    }
    return t.numPlanes = x, t.numIntersection = 0, m;
  }
}
function Ih(i) {
  let t = /* @__PURE__ */ new WeakMap();
  function e(a, o) {
    return o === 303 ? a.mapping = 301 : o === 304 && (a.mapping = 302), a;
  }
  function n(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === 303 || o === 304)
        if (t.has(a)) {
          const l = t.get(a).texture;
          return e(l, a.mapping);
        } else {
          const l = a.image;
          if (l && l.height > 0) {
            const c = new ko(l.height);
            return c.fromEquirectangularTexture(i, a), t.set(a, c), a.addEventListener("dispose", r), e(c.texture, a.mapping);
          } else
            return null;
        }
    }
    return a;
  }
  function r(a) {
    const o = a.target;
    o.removeEventListener("dispose", r);
    const l = t.get(o);
    l !== void 0 && (t.delete(o), l.dispose());
  }
  function s() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: s
  };
}
class Oa extends Na {
  constructor(t = -1, e = 1, n = 1, r = -1, s = 0.1, a = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = n, this.bottom = r, this.near = s, this.far = a, this.updateProjectionMatrix();
  }
  copy(t, e) {
    return super.copy(t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = t.view === null ? null : Object.assign({}, t.view), this;
  }
  setViewOffset(t, e, n, r, s, a) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const t = (this.right - this.left) / (2 * this.zoom), e = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, r = (this.top + this.bottom) / 2;
    let s = n - t, a = n + t, o = r + e, l = r - e;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += c * this.view.offsetX, a = s + c * this.view.width, o -= h * this.view.offsetY, l = o - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, a, o, l, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, this.view !== null && (e.object.view = Object.assign({}, this.view)), e;
  }
}
const $n = 4, Gs = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], wn = 20, Or = /* @__PURE__ */ new Oa(), Vs = /* @__PURE__ */ new Gt();
let zr = null, Gr = 0, Vr = 0, kr = !1;
const bn = (1 + Math.sqrt(5)) / 2, Xn = 1 / bn, ks = [
  /* @__PURE__ */ new I(-bn, Xn, 0),
  /* @__PURE__ */ new I(bn, Xn, 0),
  /* @__PURE__ */ new I(-Xn, 0, bn),
  /* @__PURE__ */ new I(Xn, 0, bn),
  /* @__PURE__ */ new I(0, bn, -Xn),
  /* @__PURE__ */ new I(0, bn, Xn),
  /* @__PURE__ */ new I(-1, 1, -1),
  /* @__PURE__ */ new I(1, 1, -1),
  /* @__PURE__ */ new I(-1, 1, 1),
  /* @__PURE__ */ new I(1, 1, 1)
];
class Hs {
  constructor(t) {
    this._renderer = t, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  /**
   * Generates a PMREM from a supplied Scene, which can be faster than using an
   * image if networking bandwidth is low. Optional sigma specifies a blur radius
   * in radians to be applied to the scene before PMREM generation. Optional near
   * and far planes ensure the scene is rendered in its entirety (the cubeCamera
   * is placed at the origin).
   */
  fromScene(t, e = 0, n = 0.1, r = 100) {
    zr = this._renderer.getRenderTarget(), Gr = this._renderer.getActiveCubeFace(), Vr = this._renderer.getActiveMipmapLevel(), kr = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(256);
    const s = this._allocateTargets();
    return s.depthBuffer = !0, this._sceneToCubeUV(t, n, r, s), e > 0 && this._blur(s, 0, 0, e), this._applyPMREM(s), this._cleanup(s), s;
  }
  /**
   * Generates a PMREM from an equirectangular texture, which can be either LDR
   * or HDR. The ideal input image size is 1k (1024 x 512),
   * as this matches best with the 256 x 256 cubemap output.
   * The smallest supported equirectangular image size is 64 x 32.
   */
  fromEquirectangular(t, e = null) {
    return this._fromTexture(t, e);
  }
  /**
   * Generates a PMREM from an cubemap texture, which can be either LDR
   * or HDR. The ideal input cube size is 256 x 256,
   * as this matches best with the 256 x 256 cubemap output.
   * The smallest supported cube size is 16 x 16.
   */
  fromCubemap(t, e = null) {
    return this._fromTexture(t, e);
  }
  /**
   * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = qs(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Xs(), this._compileMaterial(this._equirectMaterial));
  }
  /**
   * Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
   * so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
   * one of them will cause any others to also become unusable.
   */
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  // private interface
  _setSize(t) {
    this._lodMax = Math.floor(Math.log2(t)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let t = 0; t < this._lodPlanes.length; t++)
      this._lodPlanes[t].dispose();
  }
  _cleanup(t) {
    this._renderer.setRenderTarget(zr, Gr, Vr), this._renderer.xr.enabled = kr, t.scissorTest = !1, Vi(t, 0, 0, t.width, t.height);
  }
  _fromTexture(t, e) {
    t.mapping === 301 || t.mapping === 302 ? this._setSize(t.image.length === 0 ? 16 : t.image[0].width || t.image[0].image.width) : this._setSize(t.image.width / 4), zr = this._renderer.getRenderTarget(), Gr = this._renderer.getActiveCubeFace(), Vr = this._renderer.getActiveMipmapLevel(), kr = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
    const n = e || this._allocateTargets();
    return this._textureToCubeUV(t, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const t = 3 * Math.max(this._cubeSize, 112), e = 4 * this._cubeSize, n = {
      magFilter: 1006,
      minFilter: 1006,
      generateMipmaps: !1,
      type: 1016,
      format: 1023,
      colorSpace: gn,
      depthBuffer: !1
    }, r = Ws(t, e, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== t || this._pingPongRenderTarget.height !== e) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Ws(t, e, n);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = Lh(s)), this._blurMaterial = Dh(s, t, e);
    }
    return r;
  }
  _compileMaterial(t) {
    const e = new Ne(this._lodPlanes[0], t);
    this._renderer.compile(e, Or);
  }
  _sceneToCubeUV(t, e, n, r) {
    const o = new De(90, 1, e, n), l = [1, -1, 1, 1, 1, 1], c = [1, 1, 1, -1, -1, -1], h = this._renderer, u = h.autoClear, d = h.toneMapping;
    h.getClearColor(Vs), h.toneMapping = 0, h.autoClear = !1;
    const f = new Ia({
      name: "PMREM.Background",
      side: 1,
      depthWrite: !1,
      depthTest: !1
    }), _ = new Ne(new xi(), f);
    let x = !1;
    const m = t.background;
    m ? m.isColor && (f.color.copy(m), t.background = null, x = !0) : (f.color.copy(Vs), x = !0);
    for (let p = 0; p < 6; p++) {
      const T = p % 3;
      T === 0 ? (o.up.set(0, l[p], 0), o.lookAt(c[p], 0, 0)) : T === 1 ? (o.up.set(0, 0, l[p]), o.lookAt(0, c[p], 0)) : (o.up.set(0, l[p], 0), o.lookAt(0, 0, c[p]));
      const S = this._cubeSize;
      Vi(r, T * S, p > 2 ? S : 0, S, S), h.setRenderTarget(r), x && h.render(_, o), h.render(t, o);
    }
    _.geometry.dispose(), _.material.dispose(), h.toneMapping = d, h.autoClear = u, t.background = m;
  }
  _textureToCubeUV(t, e) {
    const n = this._renderer, r = t.mapping === 301 || t.mapping === 302;
    r ? (this._cubemapMaterial === null && (this._cubemapMaterial = qs()), this._cubemapMaterial.uniforms.flipEnvMap.value = t.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Xs());
    const s = r ? this._cubemapMaterial : this._equirectMaterial, a = new Ne(this._lodPlanes[0], s), o = s.uniforms;
    o.envMap.value = t;
    const l = this._cubeSize;
    Vi(e, 0, 0, 3 * l, 2 * l), n.setRenderTarget(e), n.render(a, Or);
  }
  _applyPMREM(t) {
    const e = this._renderer, n = e.autoClear;
    e.autoClear = !1;
    const r = this._lodPlanes.length;
    for (let s = 1; s < r; s++) {
      const a = Math.sqrt(this._sigmas[s] * this._sigmas[s] - this._sigmas[s - 1] * this._sigmas[s - 1]), o = ks[(r - s - 1) % ks.length];
      this._blur(t, s - 1, s, a, o);
    }
    e.autoClear = n;
  }
  /**
   * This is a two-pass Gaussian blur for a cubemap. Normally this is done
   * vertically and horizontally, but this breaks down on a cube. Here we apply
   * the blur latitudinally (around the poles), and then longitudinally (towards
   * the poles) to approximate the orthogonally-separable blur. It is least
   * accurate at the poles, but still does a decent job.
   */
  _blur(t, e, n, r, s) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(
      t,
      a,
      e,
      n,
      r,
      "latitudinal",
      s
    ), this._halfBlur(
      a,
      t,
      n,
      n,
      r,
      "longitudinal",
      s
    );
  }
  _halfBlur(t, e, n, r, s, a, o) {
    const l = this._renderer, c = this._blurMaterial;
    a !== "latitudinal" && a !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const h = 3, u = new Ne(this._lodPlanes[r], c), d = c.uniforms, f = this._sizeLods[n] - 1, _ = isFinite(s) ? Math.PI / (2 * f) : 2 * Math.PI / (2 * wn - 1), x = s / _, m = isFinite(s) ? 1 + Math.floor(h * x) : wn;
    m > wn && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${wn}`);
    const p = [];
    let T = 0;
    for (let b = 0; b < wn; ++b) {
      const U = b / x, K = Math.exp(-U * U / 2);
      p.push(K), b === 0 ? T += K : b < m && (T += 2 * K);
    }
    for (let b = 0; b < p.length; b++)
      p[b] = p[b] / T;
    d.envMap.value = t.texture, d.samples.value = m, d.weights.value = p, d.latitudinal.value = a === "latitudinal", o && (d.poleAxis.value = o);
    const { _lodMax: S } = this;
    d.dTheta.value = _, d.mipInt.value = S - n;
    const y = this._sizeLods[r], C = 3 * y * (r > S - $n ? r - S + $n : 0), w = 4 * (this._cubeSize - y);
    Vi(e, C, w, 3 * y, 2 * y), l.setRenderTarget(e), l.render(u, Or);
  }
}
function Lh(i) {
  const t = [], e = [], n = [];
  let r = i;
  const s = i - $n + 1 + Gs.length;
  for (let a = 0; a < s; a++) {
    const o = Math.pow(2, r);
    e.push(o);
    let l = 1 / o;
    a > i - $n ? l = Gs[a - i + $n - 1] : a === 0 && (l = 0), n.push(l);
    const c = 1 / (o - 2), h = -c, u = 1 + c, d = [h, h, u, h, u, u, h, h, u, u, h, u], f = 6, _ = 6, x = 3, m = 2, p = 1, T = new Float32Array(x * _ * f), S = new Float32Array(m * _ * f), y = new Float32Array(p * _ * f);
    for (let w = 0; w < f; w++) {
      const b = w % 3 * 2 / 3 - 1, U = w > 2 ? 0 : -1, K = [
        b,
        U,
        0,
        b + 2 / 3,
        U,
        0,
        b + 2 / 3,
        U + 1,
        0,
        b,
        U,
        0,
        b + 2 / 3,
        U + 1,
        0,
        b,
        U + 1,
        0
      ];
      T.set(K, x * _ * w), S.set(d, m * _ * w);
      const g = [w, w, w, w, w, w];
      y.set(g, p * _ * w);
    }
    const C = new Ge();
    C.setAttribute("position", new Xe(T, x)), C.setAttribute("uv", new Xe(S, m)), C.setAttribute("faceIndex", new Xe(y, p)), t.push(C), r > $n && r--;
  }
  return { lodPlanes: t, sizeLods: e, sigmas: n };
}
function Ws(i, t, e) {
  const n = new Pn(i, t, e);
  return n.texture.mapping = 306, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function Vi(i, t, e, n, r) {
  i.viewport.set(t, e, n, r), i.scissor.set(t, e, n, r);
}
function Dh(i, t, e) {
  const n = new Float32Array(wn), r = new I(0, 1, 0);
  return new _n({
    name: "SphericalGaussianBlur",
    defines: {
      n: wn,
      CUBEUV_TEXEL_WIDTH: 1 / t,
      CUBEUV_TEXEL_HEIGHT: 1 / e,
      CUBEUV_MAX_MIP: `${i}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: r }
    },
    vertexShader: ss(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`
    ),
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function Xs() {
  return new _n({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: ss(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`
    ),
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function qs() {
  return new _n({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: ss(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`
    ),
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function ss() {
  return (
    /* glsl */
    `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
  );
}
function Uh(i) {
  let t = /* @__PURE__ */ new WeakMap(), e = null;
  function n(o) {
    if (o && o.isTexture) {
      const l = o.mapping, c = l === 303 || l === 304, h = l === 301 || l === 302;
      if (c || h) {
        let u = t.get(o);
        const d = u !== void 0 ? u.texture.pmremVersion : 0;
        if (o.isRenderTargetTexture && o.pmremVersion !== d)
          return e === null && (e = new Hs(i)), u = c ? e.fromEquirectangular(o, u) : e.fromCubemap(o, u), u.texture.pmremVersion = o.pmremVersion, t.set(o, u), u.texture;
        if (u !== void 0)
          return u.texture;
        {
          const f = o.image;
          return c && f && f.height > 0 || h && f && r(f) ? (e === null && (e = new Hs(i)), u = c ? e.fromEquirectangular(o) : e.fromCubemap(o), u.texture.pmremVersion = o.pmremVersion, t.set(o, u), o.addEventListener("dispose", s), u.texture) : null;
        }
      }
    }
    return o;
  }
  function r(o) {
    let l = 0;
    const c = 6;
    for (let h = 0; h < c; h++)
      o[h] !== void 0 && l++;
    return l === c;
  }
  function s(o) {
    const l = o.target;
    l.removeEventListener("dispose", s);
    const c = t.get(l);
    c !== void 0 && (t.delete(l), c.dispose());
  }
  function a() {
    t = /* @__PURE__ */ new WeakMap(), e !== null && (e.dispose(), e = null);
  }
  return {
    get: n,
    dispose: a
  };
}
function Nh(i) {
  const t = {};
  function e(n) {
    if (t[n] !== void 0)
      return t[n];
    let r;
    switch (n) {
      case "WEBGL_depth_texture":
        r = i.getExtension("WEBGL_depth_texture") || i.getExtension("MOZ_WEBGL_depth_texture") || i.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        r = i.getExtension("EXT_texture_filter_anisotropic") || i.getExtension("MOZ_EXT_texture_filter_anisotropic") || i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        r = i.getExtension("WEBGL_compressed_texture_s3tc") || i.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        r = i.getExtension("WEBGL_compressed_texture_pvrtc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        r = i.getExtension(n);
    }
    return t[n] = r, r;
  }
  return {
    has: function(n) {
      return e(n) !== null;
    },
    init: function() {
      e("EXT_color_buffer_float"), e("WEBGL_clip_cull_distance"), e("OES_texture_float_linear"), e("EXT_color_buffer_half_float"), e("WEBGL_multisampled_render_to_texture"), e("WEBGL_render_shared_exponent");
    },
    get: function(n) {
      const r = e(n);
      return r === null && Ki("THREE.WebGLRenderer: " + n + " extension not supported."), r;
    }
  };
}
function Fh(i, t, e, n) {
  const r = {}, s = /* @__PURE__ */ new WeakMap();
  function a(u) {
    const d = u.target;
    d.index !== null && t.remove(d.index);
    for (const _ in d.attributes)
      t.remove(d.attributes[_]);
    for (const _ in d.morphAttributes) {
      const x = d.morphAttributes[_];
      for (let m = 0, p = x.length; m < p; m++)
        t.remove(x[m]);
    }
    d.removeEventListener("dispose", a), delete r[d.id];
    const f = s.get(d);
    f && (t.remove(f), s.delete(d)), n.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === !0 && delete d._maxInstanceCount, e.memory.geometries--;
  }
  function o(u, d) {
    return r[d.id] === !0 || (d.addEventListener("dispose", a), r[d.id] = !0, e.memory.geometries++), d;
  }
  function l(u) {
    const d = u.attributes;
    for (const _ in d)
      t.update(d[_], i.ARRAY_BUFFER);
    const f = u.morphAttributes;
    for (const _ in f) {
      const x = f[_];
      for (let m = 0, p = x.length; m < p; m++)
        t.update(x[m], i.ARRAY_BUFFER);
    }
  }
  function c(u) {
    const d = [], f = u.index, _ = u.attributes.position;
    let x = 0;
    if (f !== null) {
      const T = f.array;
      x = f.version;
      for (let S = 0, y = T.length; S < y; S += 3) {
        const C = T[S + 0], w = T[S + 1], b = T[S + 2];
        d.push(C, w, w, b, b, C);
      }
    } else if (_ !== void 0) {
      const T = _.array;
      x = _.version;
      for (let S = 0, y = T.length / 3 - 1; S < y; S += 3) {
        const C = S + 0, w = S + 1, b = S + 2;
        d.push(C, w, w, b, b, C);
      }
    } else
      return;
    const m = new (ba(d) ? Da : La)(d, 1);
    m.version = x;
    const p = s.get(u);
    p && t.remove(p), s.set(u, m);
  }
  function h(u) {
    const d = s.get(u);
    if (d) {
      const f = u.index;
      f !== null && d.version < f.version && c(u);
    } else
      c(u);
    return s.get(u);
  }
  return {
    get: o,
    update: l,
    getWireframeAttribute: h
  };
}
function Bh(i, t, e) {
  let n;
  function r(d) {
    n = d;
  }
  let s, a;
  function o(d) {
    s = d.type, a = d.bytesPerElement;
  }
  function l(d, f) {
    i.drawElements(n, f, s, d * a), e.update(f, n, 1);
  }
  function c(d, f, _) {
    _ !== 0 && (i.drawElementsInstanced(n, f, s, d * a, _), e.update(f, n, _));
  }
  function h(d, f, _) {
    if (_ === 0) return;
    t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, f, 0, s, d, 0, _);
    let m = 0;
    for (let p = 0; p < _; p++)
      m += f[p];
    e.update(m, n, 1);
  }
  function u(d, f, _, x) {
    if (_ === 0) return;
    const m = t.get("WEBGL_multi_draw");
    if (m === null)
      for (let p = 0; p < d.length; p++)
        c(d[p] / a, f[p], x[p]);
    else {
      m.multiDrawElementsInstancedWEBGL(n, f, 0, s, d, 0, x, 0, _);
      let p = 0;
      for (let T = 0; T < _; T++)
        p += f[T];
      for (let T = 0; T < x.length; T++)
        e.update(p, n, x[T]);
    }
  }
  this.setMode = r, this.setIndex = o, this.render = l, this.renderInstances = c, this.renderMultiDraw = h, this.renderMultiDrawInstances = u;
}
function Oh(i) {
  const t = {
    geometries: 0,
    textures: 0
  }, e = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(s, a, o) {
    switch (e.calls++, a) {
      case i.TRIANGLES:
        e.triangles += o * (s / 3);
        break;
      case i.LINES:
        e.lines += o * (s / 2);
        break;
      case i.LINE_STRIP:
        e.lines += o * (s - 1);
        break;
      case i.LINE_LOOP:
        e.lines += o * s;
        break;
      case i.POINTS:
        e.points += o * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function r() {
    e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0;
  }
  return {
    memory: t,
    render: e,
    programs: null,
    autoReset: !0,
    reset: r,
    update: n
  };
}
function zh(i, t, e) {
  const n = /* @__PURE__ */ new WeakMap(), r = new oe();
  function s(a, o, l) {
    const c = a.morphTargetInfluences, h = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, u = h !== void 0 ? h.length : 0;
    let d = n.get(o);
    if (d === void 0 || d.count !== u) {
      let K = function() {
        b.dispose(), n.delete(o), o.removeEventListener("dispose", K);
      };
      d !== void 0 && d.texture.dispose();
      const f = o.morphAttributes.position !== void 0, _ = o.morphAttributes.normal !== void 0, x = o.morphAttributes.color !== void 0, m = o.morphAttributes.position || [], p = o.morphAttributes.normal || [], T = o.morphAttributes.color || [];
      let S = 0;
      f === !0 && (S = 1), _ === !0 && (S = 2), x === !0 && (S = 3);
      let y = o.attributes.position.count * S, C = 1;
      y > t.maxTextureSize && (C = Math.ceil(y / t.maxTextureSize), y = t.maxTextureSize);
      const w = new Float32Array(y * C * 4 * u), b = new Ra(w, y, C, u);
      b.type = 1015, b.needsUpdate = !0;
      const U = S * 4;
      for (let g = 0; g < u; g++) {
        const E = m[g], z = p[g], O = T[g], V = y * C * 4 * g;
        for (let J = 0; J < E.count; J++) {
          const G = J * U;
          f === !0 && (r.fromBufferAttribute(E, J), w[V + G + 0] = r.x, w[V + G + 1] = r.y, w[V + G + 2] = r.z, w[V + G + 3] = 0), _ === !0 && (r.fromBufferAttribute(z, J), w[V + G + 4] = r.x, w[V + G + 5] = r.y, w[V + G + 6] = r.z, w[V + G + 7] = 0), x === !0 && (r.fromBufferAttribute(O, J), w[V + G + 8] = r.x, w[V + G + 9] = r.y, w[V + G + 10] = r.z, w[V + G + 11] = O.itemSize === 4 ? r.w : 1);
        }
      }
      d = {
        count: u,
        texture: b,
        size: new ot(y, C)
      }, n.set(o, d), o.addEventListener("dispose", K);
    }
    if (a.isInstancedMesh === !0 && a.morphTexture !== null)
      l.getUniforms().setValue(i, "morphTexture", a.morphTexture, e);
    else {
      let f = 0;
      for (let x = 0; x < c.length; x++)
        f += c[x];
      const _ = o.morphTargetsRelative ? 1 : 1 - f;
      l.getUniforms().setValue(i, "morphTargetBaseInfluence", _), l.getUniforms().setValue(i, "morphTargetInfluences", c);
    }
    l.getUniforms().setValue(i, "morphTargetsTexture", d.texture, e), l.getUniforms().setValue(i, "morphTargetsTextureSize", d.size);
  }
  return {
    update: s
  };
}
function Gh(i, t, e, n) {
  let r = /* @__PURE__ */ new WeakMap();
  function s(l) {
    const c = n.render.frame, h = l.geometry, u = t.get(l, h);
    if (r.get(u) !== c && (t.update(u), r.set(u, c)), l.isInstancedMesh && (l.hasEventListener("dispose", o) === !1 && l.addEventListener("dispose", o), r.get(l) !== c && (e.update(l.instanceMatrix, i.ARRAY_BUFFER), l.instanceColor !== null && e.update(l.instanceColor, i.ARRAY_BUFFER), r.set(l, c))), l.isSkinnedMesh) {
      const d = l.skeleton;
      r.get(d) !== c && (d.update(), r.set(d, c));
    }
    return u;
  }
  function a() {
    r = /* @__PURE__ */ new WeakMap();
  }
  function o(l) {
    const c = l.target;
    c.removeEventListener("dispose", o), e.remove(c.instanceMatrix), c.instanceColor !== null && e.remove(c.instanceColor);
  }
  return {
    update: s,
    dispose: a
  };
}
class za extends Ee {
  constructor(t, e, n, r, s, a, o, l, c, h = 1026) {
    if (h !== 1026 && h !== 1027)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && h === 1026 && (n = 1014), n === void 0 && h === 1027 && (n = 1020), super(null, r, s, a, o, l, h, n, c), this.isDepthTexture = !0, this.image = { width: t, height: e }, this.magFilter = o !== void 0 ? o : 1003, this.minFilter = l !== void 0 ? l : 1003, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(t) {
    return super.copy(t), this.compareFunction = t.compareFunction, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return this.compareFunction !== null && (e.compareFunction = this.compareFunction), e;
  }
}
const Ga = /* @__PURE__ */ new Ee(), Ys = /* @__PURE__ */ new za(1, 1), Va = /* @__PURE__ */ new Ra(), ka = /* @__PURE__ */ new Ao(), Ha = /* @__PURE__ */ new Fa(), Ks = [], Js = [], Zs = new Float32Array(16), $s = new Float32Array(9), js = new Float32Array(4);
function ii(i, t, e) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const r = t * e;
  let s = Ks[r];
  if (s === void 0 && (s = new Float32Array(r), Ks[r] = s), t !== 0) {
    n.toArray(s, 0);
    for (let a = 1, o = 0; a !== t; ++a)
      o += e, i[a].toArray(s, o);
  }
  return s;
}
function de(i, t) {
  if (i.length !== t.length) return !1;
  for (let e = 0, n = i.length; e < n; e++)
    if (i[e] !== t[e]) return !1;
  return !0;
}
function fe(i, t) {
  for (let e = 0, n = t.length; e < n; e++)
    i[e] = t[e];
}
function or(i, t) {
  let e = Js[t];
  e === void 0 && (e = new Int32Array(t), Js[t] = e);
  for (let n = 0; n !== t; ++n)
    e[n] = i.allocateTextureUnit();
  return e;
}
function Vh(i, t) {
  const e = this.cache;
  e[0] !== t && (i.uniform1f(this.addr, t), e[0] = t);
}
function kh(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) && (i.uniform2f(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (de(e, t)) return;
    i.uniform2fv(this.addr, t), fe(e, t);
  }
}
function Hh(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3f(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else if (t.r !== void 0)
    (e[0] !== t.r || e[1] !== t.g || e[2] !== t.b) && (i.uniform3f(this.addr, t.r, t.g, t.b), e[0] = t.r, e[1] = t.g, e[2] = t.b);
  else {
    if (de(e, t)) return;
    i.uniform3fv(this.addr, t), fe(e, t);
  }
}
function Wh(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4f(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (de(e, t)) return;
    i.uniform4fv(this.addr, t), fe(e, t);
  }
}
function Xh(i, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (de(e, t)) return;
    i.uniformMatrix2fv(this.addr, !1, t), fe(e, t);
  } else {
    if (de(e, n)) return;
    js.set(n), i.uniformMatrix2fv(this.addr, !1, js), fe(e, n);
  }
}
function qh(i, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (de(e, t)) return;
    i.uniformMatrix3fv(this.addr, !1, t), fe(e, t);
  } else {
    if (de(e, n)) return;
    $s.set(n), i.uniformMatrix3fv(this.addr, !1, $s), fe(e, n);
  }
}
function Yh(i, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (de(e, t)) return;
    i.uniformMatrix4fv(this.addr, !1, t), fe(e, t);
  } else {
    if (de(e, n)) return;
    Zs.set(n), i.uniformMatrix4fv(this.addr, !1, Zs), fe(e, n);
  }
}
function Kh(i, t) {
  const e = this.cache;
  e[0] !== t && (i.uniform1i(this.addr, t), e[0] = t);
}
function Jh(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) && (i.uniform2i(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (de(e, t)) return;
    i.uniform2iv(this.addr, t), fe(e, t);
  }
}
function Zh(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3i(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else {
    if (de(e, t)) return;
    i.uniform3iv(this.addr, t), fe(e, t);
  }
}
function $h(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4i(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (de(e, t)) return;
    i.uniform4iv(this.addr, t), fe(e, t);
  }
}
function jh(i, t) {
  const e = this.cache;
  e[0] !== t && (i.uniform1ui(this.addr, t), e[0] = t);
}
function Qh(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) && (i.uniform2ui(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (de(e, t)) return;
    i.uniform2uiv(this.addr, t), fe(e, t);
  }
}
function tu(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3ui(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else {
    if (de(e, t)) return;
    i.uniform3uiv(this.addr, t), fe(e, t);
  }
}
function eu(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4ui(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (de(e, t)) return;
    i.uniform4uiv(this.addr, t), fe(e, t);
  }
}
function nu(i, t, e) {
  const n = this.cache, r = e.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r);
  let s;
  this.type === i.SAMPLER_2D_SHADOW ? (Ys.compareFunction = 515, s = Ys) : s = Ga, e.setTexture2D(t || s, r);
}
function iu(i, t, e) {
  const n = this.cache, r = e.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), e.setTexture3D(t || ka, r);
}
function ru(i, t, e) {
  const n = this.cache, r = e.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), e.setTextureCube(t || Ha, r);
}
function su(i, t, e) {
  const n = this.cache, r = e.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), e.setTexture2DArray(t || Va, r);
}
function au(i) {
  switch (i) {
    case 5126:
      return Vh;
    case 35664:
      return kh;
    case 35665:
      return Hh;
    case 35666:
      return Wh;
    case 35674:
      return Xh;
    case 35675:
      return qh;
    case 35676:
      return Yh;
    case 5124:
    case 35670:
      return Kh;
    case 35667:
    case 35671:
      return Jh;
    case 35668:
    case 35672:
      return Zh;
    case 35669:
    case 35673:
      return $h;
    case 5125:
      return jh;
    case 36294:
      return Qh;
    case 36295:
      return tu;
    case 36296:
      return eu;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return nu;
    case 35679:
    case 36299:
    case 36307:
      return iu;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return ru;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return su;
  }
}
function ou(i, t) {
  i.uniform1fv(this.addr, t);
}
function lu(i, t) {
  const e = ii(t, this.size, 2);
  i.uniform2fv(this.addr, e);
}
function cu(i, t) {
  const e = ii(t, this.size, 3);
  i.uniform3fv(this.addr, e);
}
function hu(i, t) {
  const e = ii(t, this.size, 4);
  i.uniform4fv(this.addr, e);
}
function uu(i, t) {
  const e = ii(t, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, e);
}
function du(i, t) {
  const e = ii(t, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, e);
}
function fu(i, t) {
  const e = ii(t, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, e);
}
function pu(i, t) {
  i.uniform1iv(this.addr, t);
}
function mu(i, t) {
  i.uniform2iv(this.addr, t);
}
function _u(i, t) {
  i.uniform3iv(this.addr, t);
}
function gu(i, t) {
  i.uniform4iv(this.addr, t);
}
function vu(i, t) {
  i.uniform1uiv(this.addr, t);
}
function xu(i, t) {
  i.uniform2uiv(this.addr, t);
}
function Su(i, t) {
  i.uniform3uiv(this.addr, t);
}
function Mu(i, t) {
  i.uniform4uiv(this.addr, t);
}
function yu(i, t, e) {
  const n = this.cache, r = t.length, s = or(e, r);
  de(n, s) || (i.uniform1iv(this.addr, s), fe(n, s));
  for (let a = 0; a !== r; ++a)
    e.setTexture2D(t[a] || Ga, s[a]);
}
function Eu(i, t, e) {
  const n = this.cache, r = t.length, s = or(e, r);
  de(n, s) || (i.uniform1iv(this.addr, s), fe(n, s));
  for (let a = 0; a !== r; ++a)
    e.setTexture3D(t[a] || ka, s[a]);
}
function Tu(i, t, e) {
  const n = this.cache, r = t.length, s = or(e, r);
  de(n, s) || (i.uniform1iv(this.addr, s), fe(n, s));
  for (let a = 0; a !== r; ++a)
    e.setTextureCube(t[a] || Ha, s[a]);
}
function Au(i, t, e) {
  const n = this.cache, r = t.length, s = or(e, r);
  de(n, s) || (i.uniform1iv(this.addr, s), fe(n, s));
  for (let a = 0; a !== r; ++a)
    e.setTexture2DArray(t[a] || Va, s[a]);
}
function bu(i) {
  switch (i) {
    case 5126:
      return ou;
    case 35664:
      return lu;
    case 35665:
      return cu;
    case 35666:
      return hu;
    case 35674:
      return uu;
    case 35675:
      return du;
    case 35676:
      return fu;
    case 5124:
    case 35670:
      return pu;
    case 35667:
    case 35671:
      return mu;
    case 35668:
    case 35672:
      return _u;
    case 35669:
    case 35673:
      return gu;
    case 5125:
      return vu;
    case 36294:
      return xu;
    case 36295:
      return Su;
    case 36296:
      return Mu;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return yu;
    case 35679:
    case 36299:
    case 36307:
      return Eu;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Tu;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Au;
  }
}
class wu {
  constructor(t, e, n) {
    this.id = t, this.addr = n, this.cache = [], this.type = e.type, this.setValue = au(e.type);
  }
}
class Ru {
  constructor(t, e, n) {
    this.id = t, this.addr = n, this.cache = [], this.type = e.type, this.size = e.size, this.setValue = bu(e.type);
  }
}
class Cu {
  constructor(t) {
    this.id = t, this.seq = [], this.map = {};
  }
  setValue(t, e, n) {
    const r = this.seq;
    for (let s = 0, a = r.length; s !== a; ++s) {
      const o = r[s];
      o.setValue(t, e[o.id], n);
    }
  }
}
const Hr = /(\w+)(\])?(\[|\.)?/g;
function Qs(i, t) {
  i.seq.push(t), i.map[t.id] = t;
}
function Pu(i, t, e) {
  const n = i.name, r = n.length;
  for (Hr.lastIndex = 0; ; ) {
    const s = Hr.exec(n), a = Hr.lastIndex;
    let o = s[1];
    const l = s[2] === "]", c = s[3];
    if (l && (o = o | 0), c === void 0 || c === "[" && a + 2 === r) {
      Qs(e, c === void 0 ? new wu(o, i, t) : new Ru(o, i, t));
      break;
    } else {
      let u = e.map[o];
      u === void 0 && (u = new Cu(o), Qs(e, u)), e = u;
    }
  }
}
class Ji {
  constructor(t, e) {
    this.seq = [], this.map = {};
    const n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
    for (let r = 0; r < n; ++r) {
      const s = t.getActiveUniform(e, r), a = t.getUniformLocation(e, s.name);
      Pu(s, a, this);
    }
  }
  setValue(t, e, n, r) {
    const s = this.map[e];
    s !== void 0 && s.setValue(t, n, r);
  }
  setOptional(t, e, n) {
    const r = e[n];
    r !== void 0 && this.setValue(t, n, r);
  }
  static upload(t, e, n, r) {
    for (let s = 0, a = e.length; s !== a; ++s) {
      const o = e[s], l = n[o.id];
      l.needsUpdate !== !1 && o.setValue(t, l.value, r);
    }
  }
  static seqWithValue(t, e) {
    const n = [];
    for (let r = 0, s = t.length; r !== s; ++r) {
      const a = t[r];
      a.id in e && n.push(a);
    }
    return n;
  }
}
function ta(i, t, e) {
  const n = i.createShader(t);
  return i.shaderSource(n, e), i.compileShader(n), n;
}
const Iu = 37297;
let Lu = 0;
function Du(i, t) {
  const e = i.split(`
`), n = [], r = Math.max(t - 6, 0), s = Math.min(t + 6, e.length);
  for (let a = r; a < s; a++) {
    const o = a + 1;
    n.push(`${o === t ? ">" : " "} ${o}: ${e[a]}`);
  }
  return n.join(`
`);
}
function Uu(i) {
  const t = Kt.getPrimaries(Kt.workingColorSpace), e = Kt.getPrimaries(i);
  let n;
  switch (t === e ? n = "" : t === tr && e === Qi ? n = "LinearDisplayP3ToLinearSRGB" : t === Qi && e === tr && (n = "LinearSRGBToLinearDisplayP3"), i) {
    case gn:
    case sr:
      return [n, "LinearTransferOETF"];
    case Le:
    case ns:
      return [n, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space:", i), [n, "LinearTransferOETF"];
  }
}
function ea(i, t, e) {
  const n = i.getShaderParameter(t, i.COMPILE_STATUS), r = i.getShaderInfoLog(t).trim();
  if (n && r === "") return "";
  const s = /ERROR: 0:(\d+)/.exec(r);
  if (s) {
    const a = parseInt(s[1]);
    return e.toUpperCase() + `

` + r + `

` + Du(i.getShaderSource(t), a);
  } else
    return r;
}
function Nu(i, t) {
  const e = Uu(t);
  return `vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`;
}
function Fu(i, t) {
  let e;
  switch (t) {
    case 1:
      e = "Linear";
      break;
    case 2:
      e = "Reinhard";
      break;
    case 3:
      e = "Cineon";
      break;
    case 4:
      e = "ACESFilmic";
      break;
    case 6:
      e = "AgX";
      break;
    case 7:
      e = "Neutral";
      break;
    case 5:
      e = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t), e = "Linear";
  }
  return "vec3 " + i + "( vec3 color ) { return " + e + "ToneMapping( color ); }";
}
const ki = /* @__PURE__ */ new I();
function Bu() {
  Kt.getLuminanceCoefficients(ki);
  const i = ki.x.toFixed(4), t = ki.y.toFixed(4), e = ki.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,
    "	return dot( weights, rgb );",
    "}"
  ].join(`
`);
}
function Ou(i) {
  return [
    i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "",
    i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""
  ].filter(mi).join(`
`);
}
function zu(i) {
  const t = [];
  for (const e in i) {
    const n = i[e];
    n !== !1 && t.push("#define " + e + " " + n);
  }
  return t.join(`
`);
}
function Gu(i, t) {
  const e = {}, n = i.getProgramParameter(t, i.ACTIVE_ATTRIBUTES);
  for (let r = 0; r < n; r++) {
    const s = i.getActiveAttrib(t, r), a = s.name;
    let o = 1;
    s.type === i.FLOAT_MAT2 && (o = 2), s.type === i.FLOAT_MAT3 && (o = 3), s.type === i.FLOAT_MAT4 && (o = 4), e[a] = {
      type: s.type,
      location: i.getAttribLocation(t, a),
      locationSize: o
    };
  }
  return e;
}
function mi(i) {
  return i !== "";
}
function na(i, t) {
  const e = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
  return i.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, e).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function ia(i, t) {
  return i.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
}
const Vu = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Qr(i) {
  return i.replace(Vu, Hu);
}
const ku = /* @__PURE__ */ new Map();
function Hu(i, t) {
  let e = It[t];
  if (e === void 0) {
    const n = ku.get(t);
    if (n !== void 0)
      e = It[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', t, n);
    else
      throw new Error("Can not resolve #include <" + t + ">");
  }
  return Qr(e);
}
const Wu = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function ra(i) {
  return i.replace(Wu, Xu);
}
function Xu(i, t, e, n) {
  let r = "";
  for (let s = parseInt(t); s < parseInt(e); s++)
    r += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function sa(i) {
  let t = `precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;
  return i.precision === "highp" ? t += `
#define HIGH_PRECISION` : i.precision === "mediump" ? t += `
#define MEDIUM_PRECISION` : i.precision === "lowp" && (t += `
#define LOW_PRECISION`), t;
}
function qu(i) {
  let t = "SHADOWMAP_TYPE_BASIC";
  return i.shadowMapType === 1 ? t = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === 2 ? t = "SHADOWMAP_TYPE_PCF_SOFT" : i.shadowMapType === 3 && (t = "SHADOWMAP_TYPE_VSM"), t;
}
function Yu(i) {
  let t = "ENVMAP_TYPE_CUBE";
  if (i.envMap)
    switch (i.envMapMode) {
      case 301:
      case 302:
        t = "ENVMAP_TYPE_CUBE";
        break;
      case 306:
        t = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return t;
}
function Ku(i) {
  let t = "ENVMAP_MODE_REFLECTION";
  if (i.envMap)
    switch (i.envMapMode) {
      case 302:
        t = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return t;
}
function Ju(i) {
  let t = "ENVMAP_BLENDING_NONE";
  if (i.envMap)
    switch (i.combine) {
      case 0:
        t = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case 1:
        t = "ENVMAP_BLENDING_MIX";
        break;
      case 2:
        t = "ENVMAP_BLENDING_ADD";
        break;
    }
  return t;
}
function Zu(i) {
  const t = i.envMapCubeUVHeight;
  if (t === null) return null;
  const e = Math.log2(t) - 2, n = 1 / t;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, e), 7 * 16)), texelHeight: n, maxMip: e };
}
function $u(i, t, e, n) {
  const r = i.getContext(), s = e.defines;
  let a = e.vertexShader, o = e.fragmentShader;
  const l = qu(e), c = Yu(e), h = Ku(e), u = Ju(e), d = Zu(e), f = Ou(e), _ = zu(s), x = r.createProgram();
  let m, p, T = e.glslVersion ? "#version " + e.glslVersion + `
` : "";
  e.isRawShaderMaterial ? (m = [
    "#define SHADER_TYPE " + e.shaderType,
    "#define SHADER_NAME " + e.shaderName,
    _
  ].filter(mi).join(`
`), m.length > 0 && (m += `
`), p = [
    "#define SHADER_TYPE " + e.shaderType,
    "#define SHADER_NAME " + e.shaderName,
    _
  ].filter(mi).join(`
`), p.length > 0 && (p += `
`)) : (m = [
    sa(e),
    "#define SHADER_TYPE " + e.shaderType,
    "#define SHADER_NAME " + e.shaderName,
    _,
    e.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
    e.batching ? "#define USE_BATCHING" : "",
    e.batchingColor ? "#define USE_BATCHING_COLOR" : "",
    e.instancing ? "#define USE_INSTANCING" : "",
    e.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    e.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
    e.useFog && e.fog ? "#define USE_FOG" : "",
    e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "",
    e.map ? "#define USE_MAP" : "",
    e.envMap ? "#define USE_ENVMAP" : "",
    e.envMap ? "#define " + h : "",
    e.lightMap ? "#define USE_LIGHTMAP" : "",
    e.aoMap ? "#define USE_AOMAP" : "",
    e.bumpMap ? "#define USE_BUMPMAP" : "",
    e.normalMap ? "#define USE_NORMALMAP" : "",
    e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    e.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
    e.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    e.anisotropy ? "#define USE_ANISOTROPY" : "",
    e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    e.specularMap ? "#define USE_SPECULARMAP" : "",
    e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    e.metalnessMap ? "#define USE_METALNESSMAP" : "",
    e.alphaMap ? "#define USE_ALPHAMAP" : "",
    e.alphaHash ? "#define USE_ALPHAHASH" : "",
    e.transmission ? "#define USE_TRANSMISSION" : "",
    e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    e.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    //
    e.mapUv ? "#define MAP_UV " + e.mapUv : "",
    e.alphaMapUv ? "#define ALPHAMAP_UV " + e.alphaMapUv : "",
    e.lightMapUv ? "#define LIGHTMAP_UV " + e.lightMapUv : "",
    e.aoMapUv ? "#define AOMAP_UV " + e.aoMapUv : "",
    e.emissiveMapUv ? "#define EMISSIVEMAP_UV " + e.emissiveMapUv : "",
    e.bumpMapUv ? "#define BUMPMAP_UV " + e.bumpMapUv : "",
    e.normalMapUv ? "#define NORMALMAP_UV " + e.normalMapUv : "",
    e.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + e.displacementMapUv : "",
    e.metalnessMapUv ? "#define METALNESSMAP_UV " + e.metalnessMapUv : "",
    e.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + e.roughnessMapUv : "",
    e.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + e.anisotropyMapUv : "",
    e.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + e.clearcoatMapUv : "",
    e.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + e.clearcoatNormalMapUv : "",
    e.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + e.clearcoatRoughnessMapUv : "",
    e.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + e.iridescenceMapUv : "",
    e.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + e.iridescenceThicknessMapUv : "",
    e.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + e.sheenColorMapUv : "",
    e.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + e.sheenRoughnessMapUv : "",
    e.specularMapUv ? "#define SPECULARMAP_UV " + e.specularMapUv : "",
    e.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + e.specularColorMapUv : "",
    e.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + e.specularIntensityMapUv : "",
    e.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + e.transmissionMapUv : "",
    e.thicknessMapUv ? "#define THICKNESSMAP_UV " + e.thicknessMapUv : "",
    //
    e.vertexTangents && e.flatShading === !1 ? "#define USE_TANGENT" : "",
    e.vertexColors ? "#define USE_COLOR" : "",
    e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    e.vertexUv1s ? "#define USE_UV1" : "",
    e.vertexUv2s ? "#define USE_UV2" : "",
    e.vertexUv3s ? "#define USE_UV3" : "",
    e.pointsUvs ? "#define USE_POINTS_UV" : "",
    e.flatShading ? "#define FLAT_SHADED" : "",
    e.skinning ? "#define USE_SKINNING" : "",
    e.morphTargets ? "#define USE_MORPHTARGETS" : "",
    e.morphNormals && e.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    e.morphColors ? "#define USE_MORPHCOLORS" : "",
    e.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + e.morphTextureStride : "",
    e.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + e.morphTargetsCount : "",
    e.doubleSided ? "#define DOUBLE_SIDED" : "",
    e.flipSided ? "#define FLIP_SIDED" : "",
    e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    e.shadowMapEnabled ? "#define " + l : "",
    e.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    e.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "#ifdef USE_INSTANCING_MORPH",
    "	uniform sampler2D morphTexture;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_UV1",
    "	attribute vec2 uv1;",
    "#endif",
    "#ifdef USE_UV2",
    "	attribute vec2 uv2;",
    "#endif",
    "#ifdef USE_UV3",
    "	attribute vec2 uv3;",
    "#endif",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(mi).join(`
`), p = [
    sa(e),
    "#define SHADER_TYPE " + e.shaderType,
    "#define SHADER_NAME " + e.shaderName,
    _,
    e.useFog && e.fog ? "#define USE_FOG" : "",
    e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "",
    e.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
    e.map ? "#define USE_MAP" : "",
    e.matcap ? "#define USE_MATCAP" : "",
    e.envMap ? "#define USE_ENVMAP" : "",
    e.envMap ? "#define " + c : "",
    e.envMap ? "#define " + h : "",
    e.envMap ? "#define " + u : "",
    d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "",
    d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "",
    d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "",
    e.lightMap ? "#define USE_LIGHTMAP" : "",
    e.aoMap ? "#define USE_AOMAP" : "",
    e.bumpMap ? "#define USE_BUMPMAP" : "",
    e.normalMap ? "#define USE_NORMALMAP" : "",
    e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    e.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    e.anisotropy ? "#define USE_ANISOTROPY" : "",
    e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    e.clearcoat ? "#define USE_CLEARCOAT" : "",
    e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    e.dispersion ? "#define USE_DISPERSION" : "",
    e.iridescence ? "#define USE_IRIDESCENCE" : "",
    e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    e.specularMap ? "#define USE_SPECULARMAP" : "",
    e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    e.metalnessMap ? "#define USE_METALNESSMAP" : "",
    e.alphaMap ? "#define USE_ALPHAMAP" : "",
    e.alphaTest ? "#define USE_ALPHATEST" : "",
    e.alphaHash ? "#define USE_ALPHAHASH" : "",
    e.sheen ? "#define USE_SHEEN" : "",
    e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    e.transmission ? "#define USE_TRANSMISSION" : "",
    e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    e.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    e.vertexTangents && e.flatShading === !1 ? "#define USE_TANGENT" : "",
    e.vertexColors || e.instancingColor || e.batchingColor ? "#define USE_COLOR" : "",
    e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    e.vertexUv1s ? "#define USE_UV1" : "",
    e.vertexUv2s ? "#define USE_UV2" : "",
    e.vertexUv3s ? "#define USE_UV3" : "",
    e.pointsUvs ? "#define USE_POINTS_UV" : "",
    e.gradientMap ? "#define USE_GRADIENTMAP" : "",
    e.flatShading ? "#define FLAT_SHADED" : "",
    e.doubleSided ? "#define DOUBLE_SIDED" : "",
    e.flipSided ? "#define FLIP_SIDED" : "",
    e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    e.shadowMapEnabled ? "#define " + l : "",
    e.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    e.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    e.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    e.toneMapping !== 0 ? "#define TONE_MAPPING" : "",
    e.toneMapping !== 0 ? It.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    e.toneMapping !== 0 ? Fu("toneMapping", e.toneMapping) : "",
    e.dithering ? "#define DITHERING" : "",
    e.opaque ? "#define OPAQUE" : "",
    It.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    Nu("linearToOutputTexel", e.outputColorSpace),
    Bu(),
    e.useDepthPacking ? "#define DEPTH_PACKING " + e.depthPacking : "",
    `
`
  ].filter(mi).join(`
`)), a = Qr(a), a = na(a, e), a = ia(a, e), o = Qr(o), o = na(o, e), o = ia(o, e), a = ra(a), o = ra(o), e.isRawShaderMaterial !== !0 && (T = `#version 300 es
`, m = [
    f,
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + m, p = [
    "#define varying in",
    e.glslVersion === ys ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    e.glslVersion === ys ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + p);
  const S = T + m + a, y = T + p + o, C = ta(r, r.VERTEX_SHADER, S), w = ta(r, r.FRAGMENT_SHADER, y);
  r.attachShader(x, C), r.attachShader(x, w), e.index0AttributeName !== void 0 ? r.bindAttribLocation(x, 0, e.index0AttributeName) : e.morphTargets === !0 && r.bindAttribLocation(x, 0, "position"), r.linkProgram(x);
  function b(E) {
    if (i.debug.checkShaderErrors) {
      const z = r.getProgramInfoLog(x).trim(), O = r.getShaderInfoLog(C).trim(), V = r.getShaderInfoLog(w).trim();
      let J = !0, G = !0;
      if (r.getProgramParameter(x, r.LINK_STATUS) === !1)
        if (J = !1, typeof i.debug.onShaderError == "function")
          i.debug.onShaderError(r, x, C, w);
        else {
          const Q = ea(r, C, "vertex"), H = ea(r, w, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(x, r.VALIDATE_STATUS) + `

Material Name: ` + E.name + `
Material Type: ` + E.type + `

Program Info Log: ` + z + `
` + Q + `
` + H
          );
        }
      else z !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", z) : (O === "" || V === "") && (G = !1);
      G && (E.diagnostics = {
        runnable: J,
        programLog: z,
        vertexShader: {
          log: O,
          prefix: m
        },
        fragmentShader: {
          log: V,
          prefix: p
        }
      });
    }
    r.deleteShader(C), r.deleteShader(w), U = new Ji(r, x), K = Gu(r, x);
  }
  let U;
  this.getUniforms = function() {
    return U === void 0 && b(this), U;
  };
  let K;
  this.getAttributes = function() {
    return K === void 0 && b(this), K;
  };
  let g = e.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return g === !1 && (g = r.getProgramParameter(x, Iu)), g;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), r.deleteProgram(x), this.program = void 0;
  }, this.type = e.shaderType, this.name = e.shaderName, this.id = Lu++, this.cacheKey = t, this.usedTimes = 1, this.program = x, this.vertexShader = C, this.fragmentShader = w, this;
}
let ju = 0;
class Qu {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(t) {
    const e = t.vertexShader, n = t.fragmentShader, r = this._getShaderStage(e), s = this._getShaderStage(n), a = this._getShaderCacheForMaterial(t);
    return a.has(r) === !1 && (a.add(r), r.usedTimes++), a.has(s) === !1 && (a.add(s), s.usedTimes++), this;
  }
  remove(t) {
    const e = this.materialCache.get(t);
    for (const n of e)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(t), this;
  }
  getVertexShaderID(t) {
    return this._getShaderStage(t.vertexShader).id;
  }
  getFragmentShaderID(t) {
    return this._getShaderStage(t.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(t) {
    const e = this.materialCache;
    let n = e.get(t);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), e.set(t, n)), n;
  }
  _getShaderStage(t) {
    const e = this.shaderCache;
    let n = e.get(t);
    return n === void 0 && (n = new td(t), e.set(t, n)), n;
  }
}
class td {
  constructor(t) {
    this.id = ju++, this.code = t, this.usedTimes = 0;
  }
}
function ed(i, t, e, n, r, s, a) {
  const o = new Ca(), l = new Qu(), c = /* @__PURE__ */ new Set(), h = [], u = r.logarithmicDepthBuffer, d = r.reverseDepthBuffer, f = r.vertexTextures;
  let _ = r.precision;
  const x = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function m(g) {
    return c.add(g), g === 0 ? "uv" : `uv${g}`;
  }
  function p(g, E, z, O, V) {
    const J = O.fog, G = V.geometry, Q = g.isMeshStandardMaterial ? O.environment : null, H = (g.isMeshStandardMaterial ? e : t).get(g.envMap || Q), lt = H && H.mapping === 306 ? H.image.height : null, ct = x[g.type];
    g.precision !== null && (_ = r.getMaxPrecision(g.precision), _ !== g.precision && console.warn("THREE.WebGLProgram.getParameters:", g.precision, "not supported, using", _, "instead."));
    const vt = G.morphAttributes.position || G.morphAttributes.normal || G.morphAttributes.color, Wt = vt !== void 0 ? vt.length : 0;
    let Jt = 0;
    G.morphAttributes.position !== void 0 && (Jt = 1), G.morphAttributes.normal !== void 0 && (Jt = 2), G.morphAttributes.color !== void 0 && (Jt = 3);
    let W, $, _t, ht;
    if (ct) {
      const Ae = Ke[ct];
      W = Ae.vertexShader, $ = Ae.fragmentShader;
    } else
      W = g.vertexShader, $ = g.fragmentShader, l.update(g), _t = l.getVertexShaderID(g), ht = l.getFragmentShaderID(g);
    const Ct = i.getRenderTarget(), Et = V.isInstancedMesh === !0, Bt = V.isBatchedMesh === !0, jt = !!g.map, Ot = !!g.matcap, R = !!H, we = !!g.aoMap, Ut = !!g.lightMap, Vt = !!g.bumpMap, At = !!g.normalMap, ee = !!g.displacementMap, Rt = !!g.emissiveMap, A = !!g.metalnessMap, v = !!g.roughnessMap, N = g.anisotropy > 0, q = g.clearcoat > 0, Z = g.dispersion > 0, X = g.iridescence > 0, xt = g.sheen > 0, nt = g.transmission > 0, ut = N && !!g.anisotropyMap, kt = q && !!g.clearcoatMap, j = q && !!g.clearcoatNormalMap, dt = q && !!g.clearcoatRoughnessMap, bt = X && !!g.iridescenceMap, wt = X && !!g.iridescenceThicknessMap, ft = xt && !!g.sheenColorMap, Nt = xt && !!g.sheenRoughnessMap, Pt = !!g.specularMap, te = !!g.specularColorMap, P = !!g.specularIntensityMap, st = nt && !!g.transmissionMap, k = nt && !!g.thicknessMap, Y = !!g.gradientMap, it = !!g.alphaMap, at = g.alphaTest > 0, zt = !!g.alphaHash, ce = !!g.extensions;
    let Te = 0;
    g.toneMapped && (Ct === null || Ct.isXRRenderTarget === !0) && (Te = i.toneMapping);
    const Xt = {
      shaderID: ct,
      shaderType: g.type,
      shaderName: g.name,
      vertexShader: W,
      fragmentShader: $,
      defines: g.defines,
      customVertexShaderID: _t,
      customFragmentShaderID: ht,
      isRawShaderMaterial: g.isRawShaderMaterial === !0,
      glslVersion: g.glslVersion,
      precision: _,
      batching: Bt,
      batchingColor: Bt && V._colorsTexture !== null,
      instancing: Et,
      instancingColor: Et && V.instanceColor !== null,
      instancingMorph: Et && V.morphTexture !== null,
      supportsVertexTextures: f,
      outputColorSpace: Ct === null ? i.outputColorSpace : Ct.isXRRenderTarget === !0 ? Ct.texture.colorSpace : gn,
      alphaToCoverage: !!g.alphaToCoverage,
      map: jt,
      matcap: Ot,
      envMap: R,
      envMapMode: R && H.mapping,
      envMapCubeUVHeight: lt,
      aoMap: we,
      lightMap: Ut,
      bumpMap: Vt,
      normalMap: At,
      displacementMap: f && ee,
      emissiveMap: Rt,
      normalMapObjectSpace: At && g.normalMapType === 1,
      normalMapTangentSpace: At && g.normalMapType === 0,
      metalnessMap: A,
      roughnessMap: v,
      anisotropy: N,
      anisotropyMap: ut,
      clearcoat: q,
      clearcoatMap: kt,
      clearcoatNormalMap: j,
      clearcoatRoughnessMap: dt,
      dispersion: Z,
      iridescence: X,
      iridescenceMap: bt,
      iridescenceThicknessMap: wt,
      sheen: xt,
      sheenColorMap: ft,
      sheenRoughnessMap: Nt,
      specularMap: Pt,
      specularColorMap: te,
      specularIntensityMap: P,
      transmission: nt,
      transmissionMap: st,
      thicknessMap: k,
      gradientMap: Y,
      opaque: g.transparent === !1 && g.blending === 1 && g.alphaToCoverage === !1,
      alphaMap: it,
      alphaTest: at,
      alphaHash: zt,
      combine: g.combine,
      //
      mapUv: jt && m(g.map.channel),
      aoMapUv: we && m(g.aoMap.channel),
      lightMapUv: Ut && m(g.lightMap.channel),
      bumpMapUv: Vt && m(g.bumpMap.channel),
      normalMapUv: At && m(g.normalMap.channel),
      displacementMapUv: ee && m(g.displacementMap.channel),
      emissiveMapUv: Rt && m(g.emissiveMap.channel),
      metalnessMapUv: A && m(g.metalnessMap.channel),
      roughnessMapUv: v && m(g.roughnessMap.channel),
      anisotropyMapUv: ut && m(g.anisotropyMap.channel),
      clearcoatMapUv: kt && m(g.clearcoatMap.channel),
      clearcoatNormalMapUv: j && m(g.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: dt && m(g.clearcoatRoughnessMap.channel),
      iridescenceMapUv: bt && m(g.iridescenceMap.channel),
      iridescenceThicknessMapUv: wt && m(g.iridescenceThicknessMap.channel),
      sheenColorMapUv: ft && m(g.sheenColorMap.channel),
      sheenRoughnessMapUv: Nt && m(g.sheenRoughnessMap.channel),
      specularMapUv: Pt && m(g.specularMap.channel),
      specularColorMapUv: te && m(g.specularColorMap.channel),
      specularIntensityMapUv: P && m(g.specularIntensityMap.channel),
      transmissionMapUv: st && m(g.transmissionMap.channel),
      thicknessMapUv: k && m(g.thicknessMap.channel),
      alphaMapUv: it && m(g.alphaMap.channel),
      //
      vertexTangents: !!G.attributes.tangent && (At || N),
      vertexColors: g.vertexColors,
      vertexAlphas: g.vertexColors === !0 && !!G.attributes.color && G.attributes.color.itemSize === 4,
      pointsUvs: V.isPoints === !0 && !!G.attributes.uv && (jt || it),
      fog: !!J,
      useFog: g.fog === !0,
      fogExp2: !!J && J.isFogExp2,
      flatShading: g.flatShading === !0,
      sizeAttenuation: g.sizeAttenuation === !0,
      logarithmicDepthBuffer: u,
      reverseDepthBuffer: d,
      skinning: V.isSkinnedMesh === !0,
      morphTargets: G.morphAttributes.position !== void 0,
      morphNormals: G.morphAttributes.normal !== void 0,
      morphColors: G.morphAttributes.color !== void 0,
      morphTargetsCount: Wt,
      morphTextureStride: Jt,
      numDirLights: E.directional.length,
      numPointLights: E.point.length,
      numSpotLights: E.spot.length,
      numSpotLightMaps: E.spotLightMap.length,
      numRectAreaLights: E.rectArea.length,
      numHemiLights: E.hemi.length,
      numDirLightShadows: E.directionalShadowMap.length,
      numPointLightShadows: E.pointShadowMap.length,
      numSpotLightShadows: E.spotShadowMap.length,
      numSpotLightShadowsWithMaps: E.numSpotLightShadowsWithMaps,
      numLightProbes: E.numLightProbes,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: g.dithering,
      shadowMapEnabled: i.shadowMap.enabled && z.length > 0,
      shadowMapType: i.shadowMap.type,
      toneMapping: Te,
      decodeVideoTexture: jt && g.map.isVideoTexture === !0 && Kt.getTransfer(g.map.colorSpace) === ie,
      premultipliedAlpha: g.premultipliedAlpha,
      doubleSided: g.side === 2,
      flipSided: g.side === 1,
      useDepthPacking: g.depthPacking >= 0,
      depthPacking: g.depthPacking || 0,
      index0AttributeName: g.index0AttributeName,
      extensionClipCullDistance: ce && g.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: (ce && g.extensions.multiDraw === !0 || Bt) && n.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: g.customProgramCacheKey()
    };
    return Xt.vertexUv1s = c.has(1), Xt.vertexUv2s = c.has(2), Xt.vertexUv3s = c.has(3), c.clear(), Xt;
  }
  function T(g) {
    const E = [];
    if (g.shaderID ? E.push(g.shaderID) : (E.push(g.customVertexShaderID), E.push(g.customFragmentShaderID)), g.defines !== void 0)
      for (const z in g.defines)
        E.push(z), E.push(g.defines[z]);
    return g.isRawShaderMaterial === !1 && (S(E, g), y(E, g), E.push(i.outputColorSpace)), E.push(g.customProgramCacheKey), E.join();
  }
  function S(g, E) {
    g.push(E.precision), g.push(E.outputColorSpace), g.push(E.envMapMode), g.push(E.envMapCubeUVHeight), g.push(E.mapUv), g.push(E.alphaMapUv), g.push(E.lightMapUv), g.push(E.aoMapUv), g.push(E.bumpMapUv), g.push(E.normalMapUv), g.push(E.displacementMapUv), g.push(E.emissiveMapUv), g.push(E.metalnessMapUv), g.push(E.roughnessMapUv), g.push(E.anisotropyMapUv), g.push(E.clearcoatMapUv), g.push(E.clearcoatNormalMapUv), g.push(E.clearcoatRoughnessMapUv), g.push(E.iridescenceMapUv), g.push(E.iridescenceThicknessMapUv), g.push(E.sheenColorMapUv), g.push(E.sheenRoughnessMapUv), g.push(E.specularMapUv), g.push(E.specularColorMapUv), g.push(E.specularIntensityMapUv), g.push(E.transmissionMapUv), g.push(E.thicknessMapUv), g.push(E.combine), g.push(E.fogExp2), g.push(E.sizeAttenuation), g.push(E.morphTargetsCount), g.push(E.morphAttributeCount), g.push(E.numDirLights), g.push(E.numPointLights), g.push(E.numSpotLights), g.push(E.numSpotLightMaps), g.push(E.numHemiLights), g.push(E.numRectAreaLights), g.push(E.numDirLightShadows), g.push(E.numPointLightShadows), g.push(E.numSpotLightShadows), g.push(E.numSpotLightShadowsWithMaps), g.push(E.numLightProbes), g.push(E.shadowMapType), g.push(E.toneMapping), g.push(E.numClippingPlanes), g.push(E.numClipIntersection), g.push(E.depthPacking);
  }
  function y(g, E) {
    o.disableAll(), E.supportsVertexTextures && o.enable(0), E.instancing && o.enable(1), E.instancingColor && o.enable(2), E.instancingMorph && o.enable(3), E.matcap && o.enable(4), E.envMap && o.enable(5), E.normalMapObjectSpace && o.enable(6), E.normalMapTangentSpace && o.enable(7), E.clearcoat && o.enable(8), E.iridescence && o.enable(9), E.alphaTest && o.enable(10), E.vertexColors && o.enable(11), E.vertexAlphas && o.enable(12), E.vertexUv1s && o.enable(13), E.vertexUv2s && o.enable(14), E.vertexUv3s && o.enable(15), E.vertexTangents && o.enable(16), E.anisotropy && o.enable(17), E.alphaHash && o.enable(18), E.batching && o.enable(19), E.dispersion && o.enable(20), E.batchingColor && o.enable(21), g.push(o.mask), o.disableAll(), E.fog && o.enable(0), E.useFog && o.enable(1), E.flatShading && o.enable(2), E.logarithmicDepthBuffer && o.enable(3), E.reverseDepthBuffer && o.enable(4), E.skinning && o.enable(5), E.morphTargets && o.enable(6), E.morphNormals && o.enable(7), E.morphColors && o.enable(8), E.premultipliedAlpha && o.enable(9), E.shadowMapEnabled && o.enable(10), E.doubleSided && o.enable(11), E.flipSided && o.enable(12), E.useDepthPacking && o.enable(13), E.dithering && o.enable(14), E.transmission && o.enable(15), E.sheen && o.enable(16), E.opaque && o.enable(17), E.pointsUvs && o.enable(18), E.decodeVideoTexture && o.enable(19), E.alphaToCoverage && o.enable(20), g.push(o.mask);
  }
  function C(g) {
    const E = x[g.type];
    let z;
    if (E) {
      const O = Ke[E];
      z = Oo.clone(O.uniforms);
    } else
      z = g.uniforms;
    return z;
  }
  function w(g, E) {
    let z;
    for (let O = 0, V = h.length; O < V; O++) {
      const J = h[O];
      if (J.cacheKey === E) {
        z = J, ++z.usedTimes;
        break;
      }
    }
    return z === void 0 && (z = new $u(i, E, g, s), h.push(z)), z;
  }
  function b(g) {
    if (--g.usedTimes === 0) {
      const E = h.indexOf(g);
      h[E] = h[h.length - 1], h.pop(), g.destroy();
    }
  }
  function U(g) {
    l.remove(g);
  }
  function K() {
    l.dispose();
  }
  return {
    getParameters: p,
    getProgramCacheKey: T,
    getUniforms: C,
    acquireProgram: w,
    releaseProgram: b,
    releaseShaderCache: U,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: h,
    dispose: K
  };
}
function nd() {
  let i = /* @__PURE__ */ new WeakMap();
  function t(a) {
    return i.has(a);
  }
  function e(a) {
    let o = i.get(a);
    return o === void 0 && (o = {}, i.set(a, o)), o;
  }
  function n(a) {
    i.delete(a);
  }
  function r(a, o, l) {
    i.get(a)[o] = l;
  }
  function s() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    has: t,
    get: e,
    remove: n,
    update: r,
    dispose: s
  };
}
function id(i, t) {
  return i.groupOrder !== t.groupOrder ? i.groupOrder - t.groupOrder : i.renderOrder !== t.renderOrder ? i.renderOrder - t.renderOrder : i.material.id !== t.material.id ? i.material.id - t.material.id : i.z !== t.z ? i.z - t.z : i.id - t.id;
}
function aa(i, t) {
  return i.groupOrder !== t.groupOrder ? i.groupOrder - t.groupOrder : i.renderOrder !== t.renderOrder ? i.renderOrder - t.renderOrder : i.z !== t.z ? t.z - i.z : i.id - t.id;
}
function oa() {
  const i = [];
  let t = 0;
  const e = [], n = [], r = [];
  function s() {
    t = 0, e.length = 0, n.length = 0, r.length = 0;
  }
  function a(u, d, f, _, x, m) {
    let p = i[t];
    return p === void 0 ? (p = {
      id: u.id,
      object: u,
      geometry: d,
      material: f,
      groupOrder: _,
      renderOrder: u.renderOrder,
      z: x,
      group: m
    }, i[t] = p) : (p.id = u.id, p.object = u, p.geometry = d, p.material = f, p.groupOrder = _, p.renderOrder = u.renderOrder, p.z = x, p.group = m), t++, p;
  }
  function o(u, d, f, _, x, m) {
    const p = a(u, d, f, _, x, m);
    f.transmission > 0 ? n.push(p) : f.transparent === !0 ? r.push(p) : e.push(p);
  }
  function l(u, d, f, _, x, m) {
    const p = a(u, d, f, _, x, m);
    f.transmission > 0 ? n.unshift(p) : f.transparent === !0 ? r.unshift(p) : e.unshift(p);
  }
  function c(u, d) {
    e.length > 1 && e.sort(u || id), n.length > 1 && n.sort(d || aa), r.length > 1 && r.sort(d || aa);
  }
  function h() {
    for (let u = t, d = i.length; u < d; u++) {
      const f = i[u];
      if (f.id === null) break;
      f.id = null, f.object = null, f.geometry = null, f.material = null, f.group = null;
    }
  }
  return {
    opaque: e,
    transmissive: n,
    transparent: r,
    init: s,
    push: o,
    unshift: l,
    finish: h,
    sort: c
  };
}
function rd() {
  let i = /* @__PURE__ */ new WeakMap();
  function t(n, r) {
    const s = i.get(n);
    let a;
    return s === void 0 ? (a = new oa(), i.set(n, [a])) : r >= s.length ? (a = new oa(), s.push(a)) : a = s[r], a;
  }
  function e() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    dispose: e
  };
}
function sd() {
  const i = {};
  return {
    get: function(t) {
      if (i[t.id] !== void 0)
        return i[t.id];
      let e;
      switch (t.type) {
        case "DirectionalLight":
          e = {
            direction: new I(),
            color: new Gt()
          };
          break;
        case "SpotLight":
          e = {
            position: new I(),
            direction: new I(),
            color: new Gt(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          e = {
            position: new I(),
            color: new Gt(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          e = {
            direction: new I(),
            skyColor: new Gt(),
            groundColor: new Gt()
          };
          break;
        case "RectAreaLight":
          e = {
            color: new Gt(),
            position: new I(),
            halfWidth: new I(),
            halfHeight: new I()
          };
          break;
      }
      return i[t.id] = e, e;
    }
  };
}
function ad() {
  const i = {};
  return {
    get: function(t) {
      if (i[t.id] !== void 0)
        return i[t.id];
      let e;
      switch (t.type) {
        case "DirectionalLight":
          e = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new ot()
          };
          break;
        case "SpotLight":
          e = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new ot()
          };
          break;
        case "PointLight":
          e = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new ot(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return i[t.id] = e, e;
    }
  };
}
let od = 0;
function ld(i, t) {
  return (t.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (t.map ? 1 : 0) - (i.map ? 1 : 0);
}
function cd(i) {
  const t = new sd(), e = ad(), n = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1,
      numLightProbes: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0,
    numLightProbes: 0
  };
  for (let c = 0; c < 9; c++) n.probe.push(new I());
  const r = new I(), s = new re(), a = new re();
  function o(c) {
    let h = 0, u = 0, d = 0;
    for (let K = 0; K < 9; K++) n.probe[K].set(0, 0, 0);
    let f = 0, _ = 0, x = 0, m = 0, p = 0, T = 0, S = 0, y = 0, C = 0, w = 0, b = 0;
    c.sort(ld);
    for (let K = 0, g = c.length; K < g; K++) {
      const E = c[K], z = E.color, O = E.intensity, V = E.distance, J = E.shadow && E.shadow.map ? E.shadow.map.texture : null;
      if (E.isAmbientLight)
        h += z.r * O, u += z.g * O, d += z.b * O;
      else if (E.isLightProbe) {
        for (let G = 0; G < 9; G++)
          n.probe[G].addScaledVector(E.sh.coefficients[G], O);
        b++;
      } else if (E.isDirectionalLight) {
        const G = t.get(E);
        if (G.color.copy(E.color).multiplyScalar(E.intensity), E.castShadow) {
          const Q = E.shadow, H = e.get(E);
          H.shadowIntensity = Q.intensity, H.shadowBias = Q.bias, H.shadowNormalBias = Q.normalBias, H.shadowRadius = Q.radius, H.shadowMapSize = Q.mapSize, n.directionalShadow[f] = H, n.directionalShadowMap[f] = J, n.directionalShadowMatrix[f] = E.shadow.matrix, T++;
        }
        n.directional[f] = G, f++;
      } else if (E.isSpotLight) {
        const G = t.get(E);
        G.position.setFromMatrixPosition(E.matrixWorld), G.color.copy(z).multiplyScalar(O), G.distance = V, G.coneCos = Math.cos(E.angle), G.penumbraCos = Math.cos(E.angle * (1 - E.penumbra)), G.decay = E.decay, n.spot[x] = G;
        const Q = E.shadow;
        if (E.map && (n.spotLightMap[C] = E.map, C++, Q.updateMatrices(E), E.castShadow && w++), n.spotLightMatrix[x] = Q.matrix, E.castShadow) {
          const H = e.get(E);
          H.shadowIntensity = Q.intensity, H.shadowBias = Q.bias, H.shadowNormalBias = Q.normalBias, H.shadowRadius = Q.radius, H.shadowMapSize = Q.mapSize, n.spotShadow[x] = H, n.spotShadowMap[x] = J, y++;
        }
        x++;
      } else if (E.isRectAreaLight) {
        const G = t.get(E);
        G.color.copy(z).multiplyScalar(O), G.halfWidth.set(E.width * 0.5, 0, 0), G.halfHeight.set(0, E.height * 0.5, 0), n.rectArea[m] = G, m++;
      } else if (E.isPointLight) {
        const G = t.get(E);
        if (G.color.copy(E.color).multiplyScalar(E.intensity), G.distance = E.distance, G.decay = E.decay, E.castShadow) {
          const Q = E.shadow, H = e.get(E);
          H.shadowIntensity = Q.intensity, H.shadowBias = Q.bias, H.shadowNormalBias = Q.normalBias, H.shadowRadius = Q.radius, H.shadowMapSize = Q.mapSize, H.shadowCameraNear = Q.camera.near, H.shadowCameraFar = Q.camera.far, n.pointShadow[_] = H, n.pointShadowMap[_] = J, n.pointShadowMatrix[_] = E.shadow.matrix, S++;
        }
        n.point[_] = G, _++;
      } else if (E.isHemisphereLight) {
        const G = t.get(E);
        G.skyColor.copy(E.color).multiplyScalar(O), G.groundColor.copy(E.groundColor).multiplyScalar(O), n.hemi[p] = G, p++;
      }
    }
    m > 0 && (i.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = et.LTC_FLOAT_1, n.rectAreaLTC2 = et.LTC_FLOAT_2) : (n.rectAreaLTC1 = et.LTC_HALF_1, n.rectAreaLTC2 = et.LTC_HALF_2)), n.ambient[0] = h, n.ambient[1] = u, n.ambient[2] = d;
    const U = n.hash;
    (U.directionalLength !== f || U.pointLength !== _ || U.spotLength !== x || U.rectAreaLength !== m || U.hemiLength !== p || U.numDirectionalShadows !== T || U.numPointShadows !== S || U.numSpotShadows !== y || U.numSpotMaps !== C || U.numLightProbes !== b) && (n.directional.length = f, n.spot.length = x, n.rectArea.length = m, n.point.length = _, n.hemi.length = p, n.directionalShadow.length = T, n.directionalShadowMap.length = T, n.pointShadow.length = S, n.pointShadowMap.length = S, n.spotShadow.length = y, n.spotShadowMap.length = y, n.directionalShadowMatrix.length = T, n.pointShadowMatrix.length = S, n.spotLightMatrix.length = y + C - w, n.spotLightMap.length = C, n.numSpotLightShadowsWithMaps = w, n.numLightProbes = b, U.directionalLength = f, U.pointLength = _, U.spotLength = x, U.rectAreaLength = m, U.hemiLength = p, U.numDirectionalShadows = T, U.numPointShadows = S, U.numSpotShadows = y, U.numSpotMaps = C, U.numLightProbes = b, n.version = od++);
  }
  function l(c, h) {
    let u = 0, d = 0, f = 0, _ = 0, x = 0;
    const m = h.matrixWorldInverse;
    for (let p = 0, T = c.length; p < T; p++) {
      const S = c[p];
      if (S.isDirectionalLight) {
        const y = n.directional[u];
        y.direction.setFromMatrixPosition(S.matrixWorld), r.setFromMatrixPosition(S.target.matrixWorld), y.direction.sub(r), y.direction.transformDirection(m), u++;
      } else if (S.isSpotLight) {
        const y = n.spot[f];
        y.position.setFromMatrixPosition(S.matrixWorld), y.position.applyMatrix4(m), y.direction.setFromMatrixPosition(S.matrixWorld), r.setFromMatrixPosition(S.target.matrixWorld), y.direction.sub(r), y.direction.transformDirection(m), f++;
      } else if (S.isRectAreaLight) {
        const y = n.rectArea[_];
        y.position.setFromMatrixPosition(S.matrixWorld), y.position.applyMatrix4(m), a.identity(), s.copy(S.matrixWorld), s.premultiply(m), a.extractRotation(s), y.halfWidth.set(S.width * 0.5, 0, 0), y.halfHeight.set(0, S.height * 0.5, 0), y.halfWidth.applyMatrix4(a), y.halfHeight.applyMatrix4(a), _++;
      } else if (S.isPointLight) {
        const y = n.point[d];
        y.position.setFromMatrixPosition(S.matrixWorld), y.position.applyMatrix4(m), d++;
      } else if (S.isHemisphereLight) {
        const y = n.hemi[x];
        y.direction.setFromMatrixPosition(S.matrixWorld), y.direction.transformDirection(m), x++;
      }
    }
  }
  return {
    setup: o,
    setupView: l,
    state: n
  };
}
function la(i) {
  const t = new cd(i), e = [], n = [];
  function r(h) {
    c.camera = h, e.length = 0, n.length = 0;
  }
  function s(h) {
    e.push(h);
  }
  function a(h) {
    n.push(h);
  }
  function o() {
    t.setup(e);
  }
  function l(h) {
    t.setupView(e, h);
  }
  const c = {
    lightsArray: e,
    shadowsArray: n,
    camera: null,
    lights: t,
    transmissionRenderTarget: {}
  };
  return {
    init: r,
    state: c,
    setupLights: o,
    setupLightsView: l,
    pushLight: s,
    pushShadow: a
  };
}
function hd(i) {
  let t = /* @__PURE__ */ new WeakMap();
  function e(r, s = 0) {
    const a = t.get(r);
    let o;
    return a === void 0 ? (o = new la(i), t.set(r, [o])) : s >= a.length ? (o = new la(i), a.push(o)) : o = a[s], o;
  }
  function n() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: n
  };
}
class ud extends ni {
  constructor(t) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.depthPacking = t.depthPacking, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this;
  }
}
class dd extends ni {
  constructor(t) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this;
  }
}
const fd = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, pd = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function md(i, t, e) {
  let n = new rs();
  const r = new ot(), s = new ot(), a = new oe(), o = new ud({ depthPacking: 3201 }), l = new dd(), c = {}, h = e.maxTextureSize, u = { 0: 1, 1: 0, 2: 2 }, d = new _n({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new ot() },
      radius: { value: 4 }
    },
    vertexShader: fd,
    fragmentShader: pd
  }), f = d.clone();
  f.defines.HORIZONTAL_PASS = 1;
  const _ = new Ge();
  _.setAttribute(
    "position",
    new Xe(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const x = new Ne(_, d), m = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1;
  let p = this.type;
  this.render = function(w, b, U) {
    if (m.enabled === !1 || m.autoUpdate === !1 && m.needsUpdate === !1 || w.length === 0) return;
    const K = i.getRenderTarget(), g = i.getActiveCubeFace(), E = i.getActiveMipmapLevel(), z = i.state;
    z.setBlending(0), z.buffers.color.setClear(1, 1, 1, 1), z.buffers.depth.setTest(!0), z.setScissorTest(!1);
    const O = p !== 3 && this.type === 3, V = p === 3 && this.type !== 3;
    for (let J = 0, G = w.length; J < G; J++) {
      const Q = w[J], H = Q.shadow;
      if (H === void 0) {
        console.warn("THREE.WebGLShadowMap:", Q, "has no shadow.");
        continue;
      }
      if (H.autoUpdate === !1 && H.needsUpdate === !1) continue;
      r.copy(H.mapSize);
      const lt = H.getFrameExtents();
      if (r.multiply(lt), s.copy(H.mapSize), (r.x > h || r.y > h) && (r.x > h && (s.x = Math.floor(h / lt.x), r.x = s.x * lt.x, H.mapSize.x = s.x), r.y > h && (s.y = Math.floor(h / lt.y), r.y = s.y * lt.y, H.mapSize.y = s.y)), H.map === null || O === !0 || V === !0) {
        const vt = this.type !== 3 ? { minFilter: 1003, magFilter: 1003 } : {};
        H.map !== null && H.map.dispose(), H.map = new Pn(r.x, r.y, vt), H.map.texture.name = Q.name + ".shadowMap", H.camera.updateProjectionMatrix();
      }
      i.setRenderTarget(H.map), i.clear();
      const ct = H.getViewportCount();
      for (let vt = 0; vt < ct; vt++) {
        const Wt = H.getViewport(vt);
        a.set(
          s.x * Wt.x,
          s.y * Wt.y,
          s.x * Wt.z,
          s.y * Wt.w
        ), z.viewport(a), H.updateMatrices(Q, vt), n = H.getFrustum(), y(b, U, H.camera, Q, this.type);
      }
      H.isPointLightShadow !== !0 && this.type === 3 && T(H, U), H.needsUpdate = !1;
    }
    p = this.type, m.needsUpdate = !1, i.setRenderTarget(K, g, E);
  };
  function T(w, b) {
    const U = t.update(x);
    d.defines.VSM_SAMPLES !== w.blurSamples && (d.defines.VSM_SAMPLES = w.blurSamples, f.defines.VSM_SAMPLES = w.blurSamples, d.needsUpdate = !0, f.needsUpdate = !0), w.mapPass === null && (w.mapPass = new Pn(r.x, r.y)), d.uniforms.shadow_pass.value = w.map.texture, d.uniforms.resolution.value = w.mapSize, d.uniforms.radius.value = w.radius, i.setRenderTarget(w.mapPass), i.clear(), i.renderBufferDirect(b, null, U, d, x, null), f.uniforms.shadow_pass.value = w.mapPass.texture, f.uniforms.resolution.value = w.mapSize, f.uniforms.radius.value = w.radius, i.setRenderTarget(w.map), i.clear(), i.renderBufferDirect(b, null, U, f, x, null);
  }
  function S(w, b, U, K) {
    let g = null;
    const E = U.isPointLight === !0 ? w.customDistanceMaterial : w.customDepthMaterial;
    if (E !== void 0)
      g = E;
    else if (g = U.isPointLight === !0 ? l : o, i.localClippingEnabled && b.clipShadows === !0 && Array.isArray(b.clippingPlanes) && b.clippingPlanes.length !== 0 || b.displacementMap && b.displacementScale !== 0 || b.alphaMap && b.alphaTest > 0 || b.map && b.alphaTest > 0) {
      const z = g.uuid, O = b.uuid;
      let V = c[z];
      V === void 0 && (V = {}, c[z] = V);
      let J = V[O];
      J === void 0 && (J = g.clone(), V[O] = J, b.addEventListener("dispose", C)), g = J;
    }
    if (g.visible = b.visible, g.wireframe = b.wireframe, K === 3 ? g.side = b.shadowSide !== null ? b.shadowSide : b.side : g.side = b.shadowSide !== null ? b.shadowSide : u[b.side], g.alphaMap = b.alphaMap, g.alphaTest = b.alphaTest, g.map = b.map, g.clipShadows = b.clipShadows, g.clippingPlanes = b.clippingPlanes, g.clipIntersection = b.clipIntersection, g.displacementMap = b.displacementMap, g.displacementScale = b.displacementScale, g.displacementBias = b.displacementBias, g.wireframeLinewidth = b.wireframeLinewidth, g.linewidth = b.linewidth, U.isPointLight === !0 && g.isMeshDistanceMaterial === !0) {
      const z = i.properties.get(g);
      z.light = U;
    }
    return g;
  }
  function y(w, b, U, K, g) {
    if (w.visible === !1) return;
    if (w.layers.test(b.layers) && (w.isMesh || w.isLine || w.isPoints) && (w.castShadow || w.receiveShadow && g === 3) && (!w.frustumCulled || n.intersectsObject(w))) {
      w.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse, w.matrixWorld);
      const O = t.update(w), V = w.material;
      if (Array.isArray(V)) {
        const J = O.groups;
        for (let G = 0, Q = J.length; G < Q; G++) {
          const H = J[G], lt = V[H.materialIndex];
          if (lt && lt.visible) {
            const ct = S(w, lt, K, g);
            w.onBeforeShadow(i, w, b, U, O, ct, H), i.renderBufferDirect(U, null, O, ct, w, H), w.onAfterShadow(i, w, b, U, O, ct, H);
          }
        }
      } else if (V.visible) {
        const J = S(w, V, K, g);
        w.onBeforeShadow(i, w, b, U, O, J, null), i.renderBufferDirect(U, null, O, J, w, null), w.onAfterShadow(i, w, b, U, O, J, null);
      }
    }
    const z = w.children;
    for (let O = 0, V = z.length; O < V; O++)
      y(z[O], b, U, K, g);
  }
  function C(w) {
    w.target.removeEventListener("dispose", C);
    for (const U in c) {
      const K = c[U], g = w.target.uuid;
      g in K && (K[g].dispose(), delete K[g]);
    }
  }
}
const _d = {
  0: 1,
  2: 6,
  4: 7,
  3: 5,
  1: 0,
  6: 2,
  7: 4,
  5: 3
};
function gd(i) {
  function t() {
    let P = !1;
    const st = new oe();
    let k = null;
    const Y = new oe(0, 0, 0, 0);
    return {
      setMask: function(it) {
        k !== it && !P && (i.colorMask(it, it, it, it), k = it);
      },
      setLocked: function(it) {
        P = it;
      },
      setClear: function(it, at, zt, ce, Te) {
        Te === !0 && (it *= ce, at *= ce, zt *= ce), st.set(it, at, zt, ce), Y.equals(st) === !1 && (i.clearColor(it, at, zt, ce), Y.copy(st));
      },
      reset: function() {
        P = !1, k = null, Y.set(-1, 0, 0, 0);
      }
    };
  }
  function e() {
    let P = !1, st = !1, k = null, Y = null, it = null;
    return {
      setReversed: function(at) {
        st = at;
      },
      setTest: function(at) {
        at ? _t(i.DEPTH_TEST) : ht(i.DEPTH_TEST);
      },
      setMask: function(at) {
        k !== at && !P && (i.depthMask(at), k = at);
      },
      setFunc: function(at) {
        if (st && (at = _d[at]), Y !== at) {
          switch (at) {
            case 0:
              i.depthFunc(i.NEVER);
              break;
            case 1:
              i.depthFunc(i.ALWAYS);
              break;
            case 2:
              i.depthFunc(i.LESS);
              break;
            case 3:
              i.depthFunc(i.LEQUAL);
              break;
            case 4:
              i.depthFunc(i.EQUAL);
              break;
            case 5:
              i.depthFunc(i.GEQUAL);
              break;
            case 6:
              i.depthFunc(i.GREATER);
              break;
            case 7:
              i.depthFunc(i.NOTEQUAL);
              break;
            default:
              i.depthFunc(i.LEQUAL);
          }
          Y = at;
        }
      },
      setLocked: function(at) {
        P = at;
      },
      setClear: function(at) {
        it !== at && (i.clearDepth(at), it = at);
      },
      reset: function() {
        P = !1, k = null, Y = null, it = null;
      }
    };
  }
  function n() {
    let P = !1, st = null, k = null, Y = null, it = null, at = null, zt = null, ce = null, Te = null;
    return {
      setTest: function(Xt) {
        P || (Xt ? _t(i.STENCIL_TEST) : ht(i.STENCIL_TEST));
      },
      setMask: function(Xt) {
        st !== Xt && !P && (i.stencilMask(Xt), st = Xt);
      },
      setFunc: function(Xt, Ae, Qe) {
        (k !== Xt || Y !== Ae || it !== Qe) && (i.stencilFunc(Xt, Ae, Qe), k = Xt, Y = Ae, it = Qe);
      },
      setOp: function(Xt, Ae, Qe) {
        (at !== Xt || zt !== Ae || ce !== Qe) && (i.stencilOp(Xt, Ae, Qe), at = Xt, zt = Ae, ce = Qe);
      },
      setLocked: function(Xt) {
        P = Xt;
      },
      setClear: function(Xt) {
        Te !== Xt && (i.clearStencil(Xt), Te = Xt);
      },
      reset: function() {
        P = !1, st = null, k = null, Y = null, it = null, at = null, zt = null, ce = null, Te = null;
      }
    };
  }
  const r = new t(), s = new e(), a = new n(), o = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap();
  let c = {}, h = {}, u = /* @__PURE__ */ new WeakMap(), d = [], f = null, _ = !1, x = null, m = null, p = null, T = null, S = null, y = null, C = null, w = new Gt(0, 0, 0), b = 0, U = !1, K = null, g = null, E = null, z = null, O = null;
  const V = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let J = !1, G = 0;
  const Q = i.getParameter(i.VERSION);
  Q.indexOf("WebGL") !== -1 ? (G = parseFloat(/^WebGL (\d)/.exec(Q)[1]), J = G >= 1) : Q.indexOf("OpenGL ES") !== -1 && (G = parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]), J = G >= 2);
  let H = null, lt = {};
  const ct = i.getParameter(i.SCISSOR_BOX), vt = i.getParameter(i.VIEWPORT), Wt = new oe().fromArray(ct), Jt = new oe().fromArray(vt);
  function W(P, st, k, Y) {
    const it = new Uint8Array(4), at = i.createTexture();
    i.bindTexture(P, at), i.texParameteri(P, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(P, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let zt = 0; zt < k; zt++)
      P === i.TEXTURE_3D || P === i.TEXTURE_2D_ARRAY ? i.texImage3D(st, 0, i.RGBA, 1, 1, Y, 0, i.RGBA, i.UNSIGNED_BYTE, it) : i.texImage2D(st + zt, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, it);
    return at;
  }
  const $ = {};
  $[i.TEXTURE_2D] = W(i.TEXTURE_2D, i.TEXTURE_2D, 1), $[i.TEXTURE_CUBE_MAP] = W(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), $[i.TEXTURE_2D_ARRAY] = W(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), $[i.TEXTURE_3D] = W(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1), r.setClear(0, 0, 0, 1), s.setClear(1), a.setClear(0), _t(i.DEPTH_TEST), s.setFunc(3), Ut(!1), Vt(1), _t(i.CULL_FACE), R(0);
  function _t(P) {
    c[P] !== !0 && (i.enable(P), c[P] = !0);
  }
  function ht(P) {
    c[P] !== !1 && (i.disable(P), c[P] = !1);
  }
  function Ct(P, st) {
    return h[P] !== st ? (i.bindFramebuffer(P, st), h[P] = st, P === i.DRAW_FRAMEBUFFER && (h[i.FRAMEBUFFER] = st), P === i.FRAMEBUFFER && (h[i.DRAW_FRAMEBUFFER] = st), !0) : !1;
  }
  function Et(P, st) {
    let k = d, Y = !1;
    if (P) {
      k = u.get(st), k === void 0 && (k = [], u.set(st, k));
      const it = P.textures;
      if (k.length !== it.length || k[0] !== i.COLOR_ATTACHMENT0) {
        for (let at = 0, zt = it.length; at < zt; at++)
          k[at] = i.COLOR_ATTACHMENT0 + at;
        k.length = it.length, Y = !0;
      }
    } else
      k[0] !== i.BACK && (k[0] = i.BACK, Y = !0);
    Y && i.drawBuffers(k);
  }
  function Bt(P) {
    return f !== P ? (i.useProgram(P), f = P, !0) : !1;
  }
  const jt = {
    100: i.FUNC_ADD,
    101: i.FUNC_SUBTRACT,
    102: i.FUNC_REVERSE_SUBTRACT
  };
  jt[103] = i.MIN, jt[104] = i.MAX;
  const Ot = {
    200: i.ZERO,
    201: i.ONE,
    202: i.SRC_COLOR,
    204: i.SRC_ALPHA,
    210: i.SRC_ALPHA_SATURATE,
    208: i.DST_COLOR,
    206: i.DST_ALPHA,
    203: i.ONE_MINUS_SRC_COLOR,
    205: i.ONE_MINUS_SRC_ALPHA,
    209: i.ONE_MINUS_DST_COLOR,
    207: i.ONE_MINUS_DST_ALPHA,
    211: i.CONSTANT_COLOR,
    212: i.ONE_MINUS_CONSTANT_COLOR,
    213: i.CONSTANT_ALPHA,
    214: i.ONE_MINUS_CONSTANT_ALPHA
  };
  function R(P, st, k, Y, it, at, zt, ce, Te, Xt) {
    if (P === 0) {
      _ === !0 && (ht(i.BLEND), _ = !1);
      return;
    }
    if (_ === !1 && (_t(i.BLEND), _ = !0), P !== 5) {
      if (P !== x || Xt !== U) {
        if ((m !== 100 || S !== 100) && (i.blendEquation(i.FUNC_ADD), m = 100, S = 100), Xt)
          switch (P) {
            case 1:
              i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case 2:
              i.blendFunc(i.ONE, i.ONE);
              break;
            case 3:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case 4:
              i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", P);
              break;
          }
        else
          switch (P) {
            case 1:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case 2:
              i.blendFunc(i.SRC_ALPHA, i.ONE);
              break;
            case 3:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case 4:
              i.blendFunc(i.ZERO, i.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", P);
              break;
          }
        p = null, T = null, y = null, C = null, w.set(0, 0, 0), b = 0, x = P, U = Xt;
      }
      return;
    }
    it = it || st, at = at || k, zt = zt || Y, (st !== m || it !== S) && (i.blendEquationSeparate(jt[st], jt[it]), m = st, S = it), (k !== p || Y !== T || at !== y || zt !== C) && (i.blendFuncSeparate(Ot[k], Ot[Y], Ot[at], Ot[zt]), p = k, T = Y, y = at, C = zt), (ce.equals(w) === !1 || Te !== b) && (i.blendColor(ce.r, ce.g, ce.b, Te), w.copy(ce), b = Te), x = P, U = !1;
  }
  function we(P, st) {
    P.side === 2 ? ht(i.CULL_FACE) : _t(i.CULL_FACE);
    let k = P.side === 1;
    st && (k = !k), Ut(k), P.blending === 1 && P.transparent === !1 ? R(0) : R(P.blending, P.blendEquation, P.blendSrc, P.blendDst, P.blendEquationAlpha, P.blendSrcAlpha, P.blendDstAlpha, P.blendColor, P.blendAlpha, P.premultipliedAlpha), s.setFunc(P.depthFunc), s.setTest(P.depthTest), s.setMask(P.depthWrite), r.setMask(P.colorWrite);
    const Y = P.stencilWrite;
    a.setTest(Y), Y && (a.setMask(P.stencilWriteMask), a.setFunc(P.stencilFunc, P.stencilRef, P.stencilFuncMask), a.setOp(P.stencilFail, P.stencilZFail, P.stencilZPass)), ee(P.polygonOffset, P.polygonOffsetFactor, P.polygonOffsetUnits), P.alphaToCoverage === !0 ? _t(i.SAMPLE_ALPHA_TO_COVERAGE) : ht(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Ut(P) {
    K !== P && (P ? i.frontFace(i.CW) : i.frontFace(i.CCW), K = P);
  }
  function Vt(P) {
    P !== 0 ? (_t(i.CULL_FACE), P !== g && (P === 1 ? i.cullFace(i.BACK) : P === 2 ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : ht(i.CULL_FACE), g = P;
  }
  function At(P) {
    P !== E && (J && i.lineWidth(P), E = P);
  }
  function ee(P, st, k) {
    P ? (_t(i.POLYGON_OFFSET_FILL), (z !== st || O !== k) && (i.polygonOffset(st, k), z = st, O = k)) : ht(i.POLYGON_OFFSET_FILL);
  }
  function Rt(P) {
    P ? _t(i.SCISSOR_TEST) : ht(i.SCISSOR_TEST);
  }
  function A(P) {
    P === void 0 && (P = i.TEXTURE0 + V - 1), H !== P && (i.activeTexture(P), H = P);
  }
  function v(P, st, k) {
    k === void 0 && (H === null ? k = i.TEXTURE0 + V - 1 : k = H);
    let Y = lt[k];
    Y === void 0 && (Y = { type: void 0, texture: void 0 }, lt[k] = Y), (Y.type !== P || Y.texture !== st) && (H !== k && (i.activeTexture(k), H = k), i.bindTexture(P, st || $[P]), Y.type = P, Y.texture = st);
  }
  function N() {
    const P = lt[H];
    P !== void 0 && P.type !== void 0 && (i.bindTexture(P.type, null), P.type = void 0, P.texture = void 0);
  }
  function q() {
    try {
      i.compressedTexImage2D.apply(i, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function Z() {
    try {
      i.compressedTexImage3D.apply(i, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function X() {
    try {
      i.texSubImage2D.apply(i, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function xt() {
    try {
      i.texSubImage3D.apply(i, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function nt() {
    try {
      i.compressedTexSubImage2D.apply(i, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function ut() {
    try {
      i.compressedTexSubImage3D.apply(i, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function kt() {
    try {
      i.texStorage2D.apply(i, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function j() {
    try {
      i.texStorage3D.apply(i, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function dt() {
    try {
      i.texImage2D.apply(i, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function bt() {
    try {
      i.texImage3D.apply(i, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function wt(P) {
    Wt.equals(P) === !1 && (i.scissor(P.x, P.y, P.z, P.w), Wt.copy(P));
  }
  function ft(P) {
    Jt.equals(P) === !1 && (i.viewport(P.x, P.y, P.z, P.w), Jt.copy(P));
  }
  function Nt(P, st) {
    let k = l.get(st);
    k === void 0 && (k = /* @__PURE__ */ new WeakMap(), l.set(st, k));
    let Y = k.get(P);
    Y === void 0 && (Y = i.getUniformBlockIndex(st, P.name), k.set(P, Y));
  }
  function Pt(P, st) {
    const Y = l.get(st).get(P);
    o.get(st) !== Y && (i.uniformBlockBinding(st, Y, P.__bindingPointIndex), o.set(st, Y));
  }
  function te() {
    i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(!0, !0, !0, !0), i.clearColor(0, 0, 0, 0), i.depthMask(!0), i.depthFunc(i.LESS), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), c = {}, H = null, lt = {}, h = {}, u = /* @__PURE__ */ new WeakMap(), d = [], f = null, _ = !1, x = null, m = null, p = null, T = null, S = null, y = null, C = null, w = new Gt(0, 0, 0), b = 0, U = !1, K = null, g = null, E = null, z = null, O = null, Wt.set(0, 0, i.canvas.width, i.canvas.height), Jt.set(0, 0, i.canvas.width, i.canvas.height), r.reset(), s.reset(), a.reset();
  }
  return {
    buffers: {
      color: r,
      depth: s,
      stencil: a
    },
    enable: _t,
    disable: ht,
    bindFramebuffer: Ct,
    drawBuffers: Et,
    useProgram: Bt,
    setBlending: R,
    setMaterial: we,
    setFlipSided: Ut,
    setCullFace: Vt,
    setLineWidth: At,
    setPolygonOffset: ee,
    setScissorTest: Rt,
    activeTexture: A,
    bindTexture: v,
    unbindTexture: N,
    compressedTexImage2D: q,
    compressedTexImage3D: Z,
    texImage2D: dt,
    texImage3D: bt,
    updateUBOMapping: Nt,
    uniformBlockBinding: Pt,
    texStorage2D: kt,
    texStorage3D: j,
    texSubImage2D: X,
    texSubImage3D: xt,
    compressedTexSubImage2D: nt,
    compressedTexSubImage3D: ut,
    scissor: wt,
    viewport: ft,
    reset: te
  };
}
function ca(i, t, e, n) {
  const r = vd(n);
  switch (e) {
    case 1021:
      return i * t;
    case 1024:
      return i * t;
    case 1025:
      return i * t * 2;
    case 1028:
      return i * t / r.components * r.byteLength;
    case 1029:
      return i * t / r.components * r.byteLength;
    case 1030:
      return i * t * 2 / r.components * r.byteLength;
    case 1031:
      return i * t * 2 / r.components * r.byteLength;
    case 1022:
      return i * t * 3 / r.components * r.byteLength;
    case 1023:
      return i * t * 4 / r.components * r.byteLength;
    case 1033:
      return i * t * 4 / r.components * r.byteLength;
    case 33776:
    case 33777:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case 33778:
    case 33779:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case 35841:
    case 35843:
      return Math.max(i, 16) * Math.max(t, 8) / 4;
    case 35840:
    case 35842:
      return Math.max(i, 8) * Math.max(t, 8) / 2;
    case 36196:
    case 37492:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case 37496:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case 37808:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case 37809:
      return Math.floor((i + 4) / 5) * Math.floor((t + 3) / 4) * 16;
    case 37810:
      return Math.floor((i + 4) / 5) * Math.floor((t + 4) / 5) * 16;
    case 37811:
      return Math.floor((i + 5) / 6) * Math.floor((t + 4) / 5) * 16;
    case 37812:
      return Math.floor((i + 5) / 6) * Math.floor((t + 5) / 6) * 16;
    case 37813:
      return Math.floor((i + 7) / 8) * Math.floor((t + 4) / 5) * 16;
    case 37814:
      return Math.floor((i + 7) / 8) * Math.floor((t + 5) / 6) * 16;
    case 37815:
      return Math.floor((i + 7) / 8) * Math.floor((t + 7) / 8) * 16;
    case 37816:
      return Math.floor((i + 9) / 10) * Math.floor((t + 4) / 5) * 16;
    case 37817:
      return Math.floor((i + 9) / 10) * Math.floor((t + 5) / 6) * 16;
    case 37818:
      return Math.floor((i + 9) / 10) * Math.floor((t + 7) / 8) * 16;
    case 37819:
      return Math.floor((i + 9) / 10) * Math.floor((t + 9) / 10) * 16;
    case 37820:
      return Math.floor((i + 11) / 12) * Math.floor((t + 9) / 10) * 16;
    case 37821:
      return Math.floor((i + 11) / 12) * Math.floor((t + 11) / 12) * 16;
    case 36492:
    case 36494:
    case 36495:
      return Math.ceil(i / 4) * Math.ceil(t / 4) * 16;
    case 36283:
    case 36284:
      return Math.ceil(i / 4) * Math.ceil(t / 4) * 8;
    case 36285:
    case 36286:
      return Math.ceil(i / 4) * Math.ceil(t / 4) * 16;
  }
  throw new Error(
    `Unable to determine texture byte length for ${e} format.`
  );
}
function vd(i) {
  switch (i) {
    case 1009:
    case 1010:
      return { byteLength: 1, components: 1 };
    case 1012:
    case 1011:
    case 1016:
      return { byteLength: 2, components: 1 };
    case 1017:
    case 1018:
      return { byteLength: 2, components: 4 };
    case 1014:
    case 1013:
    case 1015:
      return { byteLength: 4, components: 1 };
    case 35902:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${i}.`);
}
function xd(i, t, e, n, r, s, a) {
  const o = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), c = new ot(), h = /* @__PURE__ */ new WeakMap();
  let u;
  const d = /* @__PURE__ */ new WeakMap();
  let f = !1;
  try {
    f = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function _(A, v) {
    return f ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(A, v)
    ) : er("canvas");
  }
  function x(A, v, N) {
    let q = 1;
    const Z = Rt(A);
    if ((Z.width > N || Z.height > N) && (q = N / Math.max(Z.width, Z.height)), q < 1)
      if (typeof HTMLImageElement < "u" && A instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && A instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && A instanceof ImageBitmap || typeof VideoFrame < "u" && A instanceof VideoFrame) {
        const X = Math.floor(q * Z.width), xt = Math.floor(q * Z.height);
        u === void 0 && (u = _(X, xt));
        const nt = v ? _(X, xt) : u;
        return nt.width = X, nt.height = xt, nt.getContext("2d").drawImage(A, 0, 0, X, xt), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + Z.width + "x" + Z.height + ") to (" + X + "x" + xt + ")."), nt;
      } else
        return "data" in A && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + Z.width + "x" + Z.height + ")."), A;
    return A;
  }
  function m(A) {
    return A.generateMipmaps && A.minFilter !== 1003 && A.minFilter !== 1006;
  }
  function p(A) {
    i.generateMipmap(A);
  }
  function T(A, v, N, q, Z = !1) {
    if (A !== null) {
      if (i[A] !== void 0) return i[A];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + A + "'");
    }
    let X = v;
    if (v === i.RED && (N === i.FLOAT && (X = i.R32F), N === i.HALF_FLOAT && (X = i.R16F), N === i.UNSIGNED_BYTE && (X = i.R8)), v === i.RED_INTEGER && (N === i.UNSIGNED_BYTE && (X = i.R8UI), N === i.UNSIGNED_SHORT && (X = i.R16UI), N === i.UNSIGNED_INT && (X = i.R32UI), N === i.BYTE && (X = i.R8I), N === i.SHORT && (X = i.R16I), N === i.INT && (X = i.R32I)), v === i.RG && (N === i.FLOAT && (X = i.RG32F), N === i.HALF_FLOAT && (X = i.RG16F), N === i.UNSIGNED_BYTE && (X = i.RG8)), v === i.RG_INTEGER && (N === i.UNSIGNED_BYTE && (X = i.RG8UI), N === i.UNSIGNED_SHORT && (X = i.RG16UI), N === i.UNSIGNED_INT && (X = i.RG32UI), N === i.BYTE && (X = i.RG8I), N === i.SHORT && (X = i.RG16I), N === i.INT && (X = i.RG32I)), v === i.RGB_INTEGER && (N === i.UNSIGNED_BYTE && (X = i.RGB8UI), N === i.UNSIGNED_SHORT && (X = i.RGB16UI), N === i.UNSIGNED_INT && (X = i.RGB32UI), N === i.BYTE && (X = i.RGB8I), N === i.SHORT && (X = i.RGB16I), N === i.INT && (X = i.RGB32I)), v === i.RGBA_INTEGER && (N === i.UNSIGNED_BYTE && (X = i.RGBA8UI), N === i.UNSIGNED_SHORT && (X = i.RGBA16UI), N === i.UNSIGNED_INT && (X = i.RGBA32UI), N === i.BYTE && (X = i.RGBA8I), N === i.SHORT && (X = i.RGBA16I), N === i.INT && (X = i.RGBA32I)), v === i.RGB && N === i.UNSIGNED_INT_5_9_9_9_REV && (X = i.RGB9_E5), v === i.RGBA) {
      const xt = Z ? ji : Kt.getTransfer(q);
      N === i.FLOAT && (X = i.RGBA32F), N === i.HALF_FLOAT && (X = i.RGBA16F), N === i.UNSIGNED_BYTE && (X = xt === ie ? i.SRGB8_ALPHA8 : i.RGBA8), N === i.UNSIGNED_SHORT_4_4_4_4 && (X = i.RGBA4), N === i.UNSIGNED_SHORT_5_5_5_1 && (X = i.RGB5_A1);
    }
    return (X === i.R16F || X === i.R32F || X === i.RG16F || X === i.RG32F || X === i.RGBA16F || X === i.RGBA32F) && t.get("EXT_color_buffer_float"), X;
  }
  function S(A, v) {
    let N;
    return A ? v === null || v === 1014 || v === 1020 ? N = i.DEPTH24_STENCIL8 : v === 1015 ? N = i.DEPTH32F_STENCIL8 : v === 1012 && (N = i.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : v === null || v === 1014 || v === 1020 ? N = i.DEPTH_COMPONENT24 : v === 1015 ? N = i.DEPTH_COMPONENT32F : v === 1012 && (N = i.DEPTH_COMPONENT16), N;
  }
  function y(A, v) {
    return m(A) === !0 || A.isFramebufferTexture && A.minFilter !== 1003 && A.minFilter !== 1006 ? Math.log2(Math.max(v.width, v.height)) + 1 : A.mipmaps !== void 0 && A.mipmaps.length > 0 ? A.mipmaps.length : A.isCompressedTexture && Array.isArray(A.image) ? v.mipmaps.length : 1;
  }
  function C(A) {
    const v = A.target;
    v.removeEventListener("dispose", C), b(v), v.isVideoTexture && h.delete(v);
  }
  function w(A) {
    const v = A.target;
    v.removeEventListener("dispose", w), K(v);
  }
  function b(A) {
    const v = n.get(A);
    if (v.__webglInit === void 0) return;
    const N = A.source, q = d.get(N);
    if (q) {
      const Z = q[v.__cacheKey];
      Z.usedTimes--, Z.usedTimes === 0 && U(A), Object.keys(q).length === 0 && d.delete(N);
    }
    n.remove(A);
  }
  function U(A) {
    const v = n.get(A);
    i.deleteTexture(v.__webglTexture);
    const N = A.source, q = d.get(N);
    delete q[v.__cacheKey], a.memory.textures--;
  }
  function K(A) {
    const v = n.get(A);
    if (A.depthTexture && A.depthTexture.dispose(), A.isWebGLCubeRenderTarget)
      for (let q = 0; q < 6; q++) {
        if (Array.isArray(v.__webglFramebuffer[q]))
          for (let Z = 0; Z < v.__webglFramebuffer[q].length; Z++) i.deleteFramebuffer(v.__webglFramebuffer[q][Z]);
        else
          i.deleteFramebuffer(v.__webglFramebuffer[q]);
        v.__webglDepthbuffer && i.deleteRenderbuffer(v.__webglDepthbuffer[q]);
      }
    else {
      if (Array.isArray(v.__webglFramebuffer))
        for (let q = 0; q < v.__webglFramebuffer.length; q++) i.deleteFramebuffer(v.__webglFramebuffer[q]);
      else
        i.deleteFramebuffer(v.__webglFramebuffer);
      if (v.__webglDepthbuffer && i.deleteRenderbuffer(v.__webglDepthbuffer), v.__webglMultisampledFramebuffer && i.deleteFramebuffer(v.__webglMultisampledFramebuffer), v.__webglColorRenderbuffer)
        for (let q = 0; q < v.__webglColorRenderbuffer.length; q++)
          v.__webglColorRenderbuffer[q] && i.deleteRenderbuffer(v.__webglColorRenderbuffer[q]);
      v.__webglDepthRenderbuffer && i.deleteRenderbuffer(v.__webglDepthRenderbuffer);
    }
    const N = A.textures;
    for (let q = 0, Z = N.length; q < Z; q++) {
      const X = n.get(N[q]);
      X.__webglTexture && (i.deleteTexture(X.__webglTexture), a.memory.textures--), n.remove(N[q]);
    }
    n.remove(A);
  }
  let g = 0;
  function E() {
    g = 0;
  }
  function z() {
    const A = g;
    return A >= r.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + A + " texture units while this GPU supports only " + r.maxTextures), g += 1, A;
  }
  function O(A) {
    const v = [];
    return v.push(A.wrapS), v.push(A.wrapT), v.push(A.wrapR || 0), v.push(A.magFilter), v.push(A.minFilter), v.push(A.anisotropy), v.push(A.internalFormat), v.push(A.format), v.push(A.type), v.push(A.generateMipmaps), v.push(A.premultiplyAlpha), v.push(A.flipY), v.push(A.unpackAlignment), v.push(A.colorSpace), v.join();
  }
  function V(A, v) {
    const N = n.get(A);
    if (A.isVideoTexture && At(A), A.isRenderTargetTexture === !1 && A.version > 0 && N.__version !== A.version) {
      const q = A.image;
      if (q === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (q.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        Jt(N, A, v);
        return;
      }
    }
    e.bindTexture(i.TEXTURE_2D, N.__webglTexture, i.TEXTURE0 + v);
  }
  function J(A, v) {
    const N = n.get(A);
    if (A.version > 0 && N.__version !== A.version) {
      Jt(N, A, v);
      return;
    }
    e.bindTexture(i.TEXTURE_2D_ARRAY, N.__webglTexture, i.TEXTURE0 + v);
  }
  function G(A, v) {
    const N = n.get(A);
    if (A.version > 0 && N.__version !== A.version) {
      Jt(N, A, v);
      return;
    }
    e.bindTexture(i.TEXTURE_3D, N.__webglTexture, i.TEXTURE0 + v);
  }
  function Q(A, v) {
    const N = n.get(A);
    if (A.version > 0 && N.__version !== A.version) {
      W(N, A, v);
      return;
    }
    e.bindTexture(i.TEXTURE_CUBE_MAP, N.__webglTexture, i.TEXTURE0 + v);
  }
  const H = {
    1e3: i.REPEAT,
    1001: i.CLAMP_TO_EDGE,
    1002: i.MIRRORED_REPEAT
  }, lt = {
    1003: i.NEAREST,
    1004: i.NEAREST_MIPMAP_NEAREST,
    1005: i.NEAREST_MIPMAP_LINEAR,
    1006: i.LINEAR,
    1007: i.LINEAR_MIPMAP_NEAREST,
    1008: i.LINEAR_MIPMAP_LINEAR
  }, ct = {
    512: i.NEVER,
    519: i.ALWAYS,
    513: i.LESS,
    515: i.LEQUAL,
    514: i.EQUAL,
    518: i.GEQUAL,
    516: i.GREATER,
    517: i.NOTEQUAL
  };
  function vt(A, v) {
    if (v.type === 1015 && t.has("OES_texture_float_linear") === !1 && (v.magFilter === 1006 || v.magFilter === 1007 || v.magFilter === 1005 || v.magFilter === 1008 || v.minFilter === 1006 || v.minFilter === 1007 || v.minFilter === 1005 || v.minFilter === 1008) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), i.texParameteri(A, i.TEXTURE_WRAP_S, H[v.wrapS]), i.texParameteri(A, i.TEXTURE_WRAP_T, H[v.wrapT]), (A === i.TEXTURE_3D || A === i.TEXTURE_2D_ARRAY) && i.texParameteri(A, i.TEXTURE_WRAP_R, H[v.wrapR]), i.texParameteri(A, i.TEXTURE_MAG_FILTER, lt[v.magFilter]), i.texParameteri(A, i.TEXTURE_MIN_FILTER, lt[v.minFilter]), v.compareFunction && (i.texParameteri(A, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE), i.texParameteri(A, i.TEXTURE_COMPARE_FUNC, ct[v.compareFunction])), t.has("EXT_texture_filter_anisotropic") === !0) {
      if (v.magFilter === 1003 || v.minFilter !== 1005 && v.minFilter !== 1008 || v.type === 1015 && t.has("OES_texture_float_linear") === !1) return;
      if (v.anisotropy > 1 || n.get(v).__currentAnisotropy) {
        const N = t.get("EXT_texture_filter_anisotropic");
        i.texParameterf(A, N.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(v.anisotropy, r.getMaxAnisotropy())), n.get(v).__currentAnisotropy = v.anisotropy;
      }
    }
  }
  function Wt(A, v) {
    let N = !1;
    A.__webglInit === void 0 && (A.__webglInit = !0, v.addEventListener("dispose", C));
    const q = v.source;
    let Z = d.get(q);
    Z === void 0 && (Z = {}, d.set(q, Z));
    const X = O(v);
    if (X !== A.__cacheKey) {
      Z[X] === void 0 && (Z[X] = {
        texture: i.createTexture(),
        usedTimes: 0
      }, a.memory.textures++, N = !0), Z[X].usedTimes++;
      const xt = Z[A.__cacheKey];
      xt !== void 0 && (Z[A.__cacheKey].usedTimes--, xt.usedTimes === 0 && U(v)), A.__cacheKey = X, A.__webglTexture = Z[X].texture;
    }
    return N;
  }
  function Jt(A, v, N) {
    let q = i.TEXTURE_2D;
    (v.isDataArrayTexture || v.isCompressedArrayTexture) && (q = i.TEXTURE_2D_ARRAY), v.isData3DTexture && (q = i.TEXTURE_3D);
    const Z = Wt(A, v), X = v.source;
    e.bindTexture(q, A.__webglTexture, i.TEXTURE0 + N);
    const xt = n.get(X);
    if (X.version !== xt.__version || Z === !0) {
      e.activeTexture(i.TEXTURE0 + N);
      const nt = Kt.getPrimaries(Kt.workingColorSpace), ut = v.colorSpace === pn ? null : Kt.getPrimaries(v.colorSpace), kt = v.colorSpace === pn || nt === ut ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, v.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, v.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, kt);
      let j = x(v.image, !1, r.maxTextureSize);
      j = ee(v, j);
      const dt = s.convert(v.format, v.colorSpace), bt = s.convert(v.type);
      let wt = T(v.internalFormat, dt, bt, v.colorSpace, v.isVideoTexture);
      vt(q, v);
      let ft;
      const Nt = v.mipmaps, Pt = v.isVideoTexture !== !0, te = xt.__version === void 0 || Z === !0, P = X.dataReady, st = y(v, j);
      if (v.isDepthTexture)
        wt = S(v.format === 1027, v.type), te && (Pt ? e.texStorage2D(i.TEXTURE_2D, 1, wt, j.width, j.height) : e.texImage2D(i.TEXTURE_2D, 0, wt, j.width, j.height, 0, dt, bt, null));
      else if (v.isDataTexture)
        if (Nt.length > 0) {
          Pt && te && e.texStorage2D(i.TEXTURE_2D, st, wt, Nt[0].width, Nt[0].height);
          for (let k = 0, Y = Nt.length; k < Y; k++)
            ft = Nt[k], Pt ? P && e.texSubImage2D(i.TEXTURE_2D, k, 0, 0, ft.width, ft.height, dt, bt, ft.data) : e.texImage2D(i.TEXTURE_2D, k, wt, ft.width, ft.height, 0, dt, bt, ft.data);
          v.generateMipmaps = !1;
        } else
          Pt ? (te && e.texStorage2D(i.TEXTURE_2D, st, wt, j.width, j.height), P && e.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, j.width, j.height, dt, bt, j.data)) : e.texImage2D(i.TEXTURE_2D, 0, wt, j.width, j.height, 0, dt, bt, j.data);
      else if (v.isCompressedTexture)
        if (v.isCompressedArrayTexture) {
          Pt && te && e.texStorage3D(i.TEXTURE_2D_ARRAY, st, wt, Nt[0].width, Nt[0].height, j.depth);
          for (let k = 0, Y = Nt.length; k < Y; k++)
            if (ft = Nt[k], v.format !== 1023)
              if (dt !== null)
                if (Pt) {
                  if (P)
                    if (v.layerUpdates.size > 0) {
                      const it = ca(ft.width, ft.height, v.format, v.type);
                      for (const at of v.layerUpdates) {
                        const zt = ft.data.subarray(
                          at * it / ft.data.BYTES_PER_ELEMENT,
                          (at + 1) * it / ft.data.BYTES_PER_ELEMENT
                        );
                        e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, k, 0, 0, at, ft.width, ft.height, 1, dt, zt, 0, 0);
                      }
                      v.clearLayerUpdates();
                    } else
                      e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, k, 0, 0, 0, ft.width, ft.height, j.depth, dt, ft.data, 0, 0);
                } else
                  e.compressedTexImage3D(i.TEXTURE_2D_ARRAY, k, wt, ft.width, ft.height, j.depth, 0, ft.data, 0, 0);
              else
                console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
            else
              Pt ? P && e.texSubImage3D(i.TEXTURE_2D_ARRAY, k, 0, 0, 0, ft.width, ft.height, j.depth, dt, bt, ft.data) : e.texImage3D(i.TEXTURE_2D_ARRAY, k, wt, ft.width, ft.height, j.depth, 0, dt, bt, ft.data);
        } else {
          Pt && te && e.texStorage2D(i.TEXTURE_2D, st, wt, Nt[0].width, Nt[0].height);
          for (let k = 0, Y = Nt.length; k < Y; k++)
            ft = Nt[k], v.format !== 1023 ? dt !== null ? Pt ? P && e.compressedTexSubImage2D(i.TEXTURE_2D, k, 0, 0, ft.width, ft.height, dt, ft.data) : e.compressedTexImage2D(i.TEXTURE_2D, k, wt, ft.width, ft.height, 0, ft.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Pt ? P && e.texSubImage2D(i.TEXTURE_2D, k, 0, 0, ft.width, ft.height, dt, bt, ft.data) : e.texImage2D(i.TEXTURE_2D, k, wt, ft.width, ft.height, 0, dt, bt, ft.data);
        }
      else if (v.isDataArrayTexture)
        if (Pt) {
          if (te && e.texStorage3D(i.TEXTURE_2D_ARRAY, st, wt, j.width, j.height, j.depth), P)
            if (v.layerUpdates.size > 0) {
              const k = ca(j.width, j.height, v.format, v.type);
              for (const Y of v.layerUpdates) {
                const it = j.data.subarray(
                  Y * k / j.data.BYTES_PER_ELEMENT,
                  (Y + 1) * k / j.data.BYTES_PER_ELEMENT
                );
                e.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, Y, j.width, j.height, 1, dt, bt, it);
              }
              v.clearLayerUpdates();
            } else
              e.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, j.width, j.height, j.depth, dt, bt, j.data);
        } else
          e.texImage3D(i.TEXTURE_2D_ARRAY, 0, wt, j.width, j.height, j.depth, 0, dt, bt, j.data);
      else if (v.isData3DTexture)
        Pt ? (te && e.texStorage3D(i.TEXTURE_3D, st, wt, j.width, j.height, j.depth), P && e.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, j.width, j.height, j.depth, dt, bt, j.data)) : e.texImage3D(i.TEXTURE_3D, 0, wt, j.width, j.height, j.depth, 0, dt, bt, j.data);
      else if (v.isFramebufferTexture) {
        if (te)
          if (Pt)
            e.texStorage2D(i.TEXTURE_2D, st, wt, j.width, j.height);
          else {
            let k = j.width, Y = j.height;
            for (let it = 0; it < st; it++)
              e.texImage2D(i.TEXTURE_2D, it, wt, k, Y, 0, dt, bt, null), k >>= 1, Y >>= 1;
          }
      } else if (Nt.length > 0) {
        if (Pt && te) {
          const k = Rt(Nt[0]);
          e.texStorage2D(i.TEXTURE_2D, st, wt, k.width, k.height);
        }
        for (let k = 0, Y = Nt.length; k < Y; k++)
          ft = Nt[k], Pt ? P && e.texSubImage2D(i.TEXTURE_2D, k, 0, 0, dt, bt, ft) : e.texImage2D(i.TEXTURE_2D, k, wt, dt, bt, ft);
        v.generateMipmaps = !1;
      } else if (Pt) {
        if (te) {
          const k = Rt(j);
          e.texStorage2D(i.TEXTURE_2D, st, wt, k.width, k.height);
        }
        P && e.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, dt, bt, j);
      } else
        e.texImage2D(i.TEXTURE_2D, 0, wt, dt, bt, j);
      m(v) && p(q), xt.__version = X.version, v.onUpdate && v.onUpdate(v);
    }
    A.__version = v.version;
  }
  function W(A, v, N) {
    if (v.image.length !== 6) return;
    const q = Wt(A, v), Z = v.source;
    e.bindTexture(i.TEXTURE_CUBE_MAP, A.__webglTexture, i.TEXTURE0 + N);
    const X = n.get(Z);
    if (Z.version !== X.__version || q === !0) {
      e.activeTexture(i.TEXTURE0 + N);
      const xt = Kt.getPrimaries(Kt.workingColorSpace), nt = v.colorSpace === pn ? null : Kt.getPrimaries(v.colorSpace), ut = v.colorSpace === pn || xt === nt ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, v.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, v.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, ut);
      const kt = v.isCompressedTexture || v.image[0].isCompressedTexture, j = v.image[0] && v.image[0].isDataTexture, dt = [];
      for (let Y = 0; Y < 6; Y++)
        !kt && !j ? dt[Y] = x(v.image[Y], !0, r.maxCubemapSize) : dt[Y] = j ? v.image[Y].image : v.image[Y], dt[Y] = ee(v, dt[Y]);
      const bt = dt[0], wt = s.convert(v.format, v.colorSpace), ft = s.convert(v.type), Nt = T(v.internalFormat, wt, ft, v.colorSpace), Pt = v.isVideoTexture !== !0, te = X.__version === void 0 || q === !0, P = Z.dataReady;
      let st = y(v, bt);
      vt(i.TEXTURE_CUBE_MAP, v);
      let k;
      if (kt) {
        Pt && te && e.texStorage2D(i.TEXTURE_CUBE_MAP, st, Nt, bt.width, bt.height);
        for (let Y = 0; Y < 6; Y++) {
          k = dt[Y].mipmaps;
          for (let it = 0; it < k.length; it++) {
            const at = k[it];
            v.format !== 1023 ? wt !== null ? Pt ? P && e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, it, 0, 0, at.width, at.height, wt, at.data) : e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, it, Nt, at.width, at.height, 0, at.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Pt ? P && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, it, 0, 0, at.width, at.height, wt, ft, at.data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, it, Nt, at.width, at.height, 0, wt, ft, at.data);
          }
        }
      } else {
        if (k = v.mipmaps, Pt && te) {
          k.length > 0 && st++;
          const Y = Rt(dt[0]);
          e.texStorage2D(i.TEXTURE_CUBE_MAP, st, Nt, Y.width, Y.height);
        }
        for (let Y = 0; Y < 6; Y++)
          if (j) {
            Pt ? P && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, 0, 0, 0, dt[Y].width, dt[Y].height, wt, ft, dt[Y].data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, 0, Nt, dt[Y].width, dt[Y].height, 0, wt, ft, dt[Y].data);
            for (let it = 0; it < k.length; it++) {
              const zt = k[it].image[Y].image;
              Pt ? P && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, it + 1, 0, 0, zt.width, zt.height, wt, ft, zt.data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, it + 1, Nt, zt.width, zt.height, 0, wt, ft, zt.data);
            }
          } else {
            Pt ? P && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, 0, 0, 0, wt, ft, dt[Y]) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, 0, Nt, wt, ft, dt[Y]);
            for (let it = 0; it < k.length; it++) {
              const at = k[it];
              Pt ? P && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, it + 1, 0, 0, wt, ft, at.image[Y]) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, it + 1, Nt, wt, ft, at.image[Y]);
            }
          }
      }
      m(v) && p(i.TEXTURE_CUBE_MAP), X.__version = Z.version, v.onUpdate && v.onUpdate(v);
    }
    A.__version = v.version;
  }
  function $(A, v, N, q, Z, X) {
    const xt = s.convert(N.format, N.colorSpace), nt = s.convert(N.type), ut = T(N.internalFormat, xt, nt, N.colorSpace);
    if (!n.get(v).__hasExternalTextures) {
      const j = Math.max(1, v.width >> X), dt = Math.max(1, v.height >> X);
      Z === i.TEXTURE_3D || Z === i.TEXTURE_2D_ARRAY ? e.texImage3D(Z, X, ut, j, dt, v.depth, 0, xt, nt, null) : e.texImage2D(Z, X, ut, j, dt, 0, xt, nt, null);
    }
    e.bindFramebuffer(i.FRAMEBUFFER, A), Vt(v) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, q, Z, n.get(N).__webglTexture, 0, Ut(v)) : (Z === i.TEXTURE_2D || Z >= i.TEXTURE_CUBE_MAP_POSITIVE_X && Z <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, q, Z, n.get(N).__webglTexture, X), e.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function _t(A, v, N) {
    if (i.bindRenderbuffer(i.RENDERBUFFER, A), v.depthBuffer) {
      const q = v.depthTexture, Z = q && q.isDepthTexture ? q.type : null, X = S(v.stencilBuffer, Z), xt = v.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, nt = Ut(v);
      Vt(v) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, nt, X, v.width, v.height) : N ? i.renderbufferStorageMultisample(i.RENDERBUFFER, nt, X, v.width, v.height) : i.renderbufferStorage(i.RENDERBUFFER, X, v.width, v.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, xt, i.RENDERBUFFER, A);
    } else {
      const q = v.textures;
      for (let Z = 0; Z < q.length; Z++) {
        const X = q[Z], xt = s.convert(X.format, X.colorSpace), nt = s.convert(X.type), ut = T(X.internalFormat, xt, nt, X.colorSpace), kt = Ut(v);
        N && Vt(v) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, kt, ut, v.width, v.height) : Vt(v) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, kt, ut, v.width, v.height) : i.renderbufferStorage(i.RENDERBUFFER, ut, v.width, v.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function ht(A, v) {
    if (v && v.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (e.bindFramebuffer(i.FRAMEBUFFER, A), !(v.depthTexture && v.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(v.depthTexture).__webglTexture || v.depthTexture.image.width !== v.width || v.depthTexture.image.height !== v.height) && (v.depthTexture.image.width = v.width, v.depthTexture.image.height = v.height, v.depthTexture.needsUpdate = !0), V(v.depthTexture, 0);
    const q = n.get(v.depthTexture).__webglTexture, Z = Ut(v);
    if (v.depthTexture.format === 1026)
      Vt(v) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, q, 0, Z) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, q, 0);
    else if (v.depthTexture.format === 1027)
      Vt(v) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, q, 0, Z) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, q, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function Ct(A) {
    const v = n.get(A), N = A.isWebGLCubeRenderTarget === !0;
    if (v.__boundDepthTexture !== A.depthTexture) {
      const q = A.depthTexture;
      if (v.__depthDisposeCallback && v.__depthDisposeCallback(), q) {
        const Z = () => {
          delete v.__boundDepthTexture, delete v.__depthDisposeCallback, q.removeEventListener("dispose", Z);
        };
        q.addEventListener("dispose", Z), v.__depthDisposeCallback = Z;
      }
      v.__boundDepthTexture = q;
    }
    if (A.depthTexture && !v.__autoAllocateDepthBuffer) {
      if (N) throw new Error("target.depthTexture not supported in Cube render targets");
      ht(v.__webglFramebuffer, A);
    } else if (N) {
      v.__webglDepthbuffer = [];
      for (let q = 0; q < 6; q++)
        if (e.bindFramebuffer(i.FRAMEBUFFER, v.__webglFramebuffer[q]), v.__webglDepthbuffer[q] === void 0)
          v.__webglDepthbuffer[q] = i.createRenderbuffer(), _t(v.__webglDepthbuffer[q], A, !1);
        else {
          const Z = A.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, X = v.__webglDepthbuffer[q];
          i.bindRenderbuffer(i.RENDERBUFFER, X), i.framebufferRenderbuffer(i.FRAMEBUFFER, Z, i.RENDERBUFFER, X);
        }
    } else if (e.bindFramebuffer(i.FRAMEBUFFER, v.__webglFramebuffer), v.__webglDepthbuffer === void 0)
      v.__webglDepthbuffer = i.createRenderbuffer(), _t(v.__webglDepthbuffer, A, !1);
    else {
      const q = A.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, Z = v.__webglDepthbuffer;
      i.bindRenderbuffer(i.RENDERBUFFER, Z), i.framebufferRenderbuffer(i.FRAMEBUFFER, q, i.RENDERBUFFER, Z);
    }
    e.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function Et(A, v, N) {
    const q = n.get(A);
    v !== void 0 && $(q.__webglFramebuffer, A, A.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0), N !== void 0 && Ct(A);
  }
  function Bt(A) {
    const v = A.texture, N = n.get(A), q = n.get(v);
    A.addEventListener("dispose", w);
    const Z = A.textures, X = A.isWebGLCubeRenderTarget === !0, xt = Z.length > 1;
    if (xt || (q.__webglTexture === void 0 && (q.__webglTexture = i.createTexture()), q.__version = v.version, a.memory.textures++), X) {
      N.__webglFramebuffer = [];
      for (let nt = 0; nt < 6; nt++)
        if (v.mipmaps && v.mipmaps.length > 0) {
          N.__webglFramebuffer[nt] = [];
          for (let ut = 0; ut < v.mipmaps.length; ut++)
            N.__webglFramebuffer[nt][ut] = i.createFramebuffer();
        } else
          N.__webglFramebuffer[nt] = i.createFramebuffer();
    } else {
      if (v.mipmaps && v.mipmaps.length > 0) {
        N.__webglFramebuffer = [];
        for (let nt = 0; nt < v.mipmaps.length; nt++)
          N.__webglFramebuffer[nt] = i.createFramebuffer();
      } else
        N.__webglFramebuffer = i.createFramebuffer();
      if (xt)
        for (let nt = 0, ut = Z.length; nt < ut; nt++) {
          const kt = n.get(Z[nt]);
          kt.__webglTexture === void 0 && (kt.__webglTexture = i.createTexture(), a.memory.textures++);
        }
      if (A.samples > 0 && Vt(A) === !1) {
        N.__webglMultisampledFramebuffer = i.createFramebuffer(), N.__webglColorRenderbuffer = [], e.bindFramebuffer(i.FRAMEBUFFER, N.__webglMultisampledFramebuffer);
        for (let nt = 0; nt < Z.length; nt++) {
          const ut = Z[nt];
          N.__webglColorRenderbuffer[nt] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, N.__webglColorRenderbuffer[nt]);
          const kt = s.convert(ut.format, ut.colorSpace), j = s.convert(ut.type), dt = T(ut.internalFormat, kt, j, ut.colorSpace, A.isXRRenderTarget === !0), bt = Ut(A);
          i.renderbufferStorageMultisample(i.RENDERBUFFER, bt, dt, A.width, A.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + nt, i.RENDERBUFFER, N.__webglColorRenderbuffer[nt]);
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null), A.depthBuffer && (N.__webglDepthRenderbuffer = i.createRenderbuffer(), _t(N.__webglDepthRenderbuffer, A, !0)), e.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (X) {
      e.bindTexture(i.TEXTURE_CUBE_MAP, q.__webglTexture), vt(i.TEXTURE_CUBE_MAP, v);
      for (let nt = 0; nt < 6; nt++)
        if (v.mipmaps && v.mipmaps.length > 0)
          for (let ut = 0; ut < v.mipmaps.length; ut++)
            $(N.__webglFramebuffer[nt][ut], A, v, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + nt, ut);
        else
          $(N.__webglFramebuffer[nt], A, v, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + nt, 0);
      m(v) && p(i.TEXTURE_CUBE_MAP), e.unbindTexture();
    } else if (xt) {
      for (let nt = 0, ut = Z.length; nt < ut; nt++) {
        const kt = Z[nt], j = n.get(kt);
        e.bindTexture(i.TEXTURE_2D, j.__webglTexture), vt(i.TEXTURE_2D, kt), $(N.__webglFramebuffer, A, kt, i.COLOR_ATTACHMENT0 + nt, i.TEXTURE_2D, 0), m(kt) && p(i.TEXTURE_2D);
      }
      e.unbindTexture();
    } else {
      let nt = i.TEXTURE_2D;
      if ((A.isWebGL3DRenderTarget || A.isWebGLArrayRenderTarget) && (nt = A.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), e.bindTexture(nt, q.__webglTexture), vt(nt, v), v.mipmaps && v.mipmaps.length > 0)
        for (let ut = 0; ut < v.mipmaps.length; ut++)
          $(N.__webglFramebuffer[ut], A, v, i.COLOR_ATTACHMENT0, nt, ut);
      else
        $(N.__webglFramebuffer, A, v, i.COLOR_ATTACHMENT0, nt, 0);
      m(v) && p(nt), e.unbindTexture();
    }
    A.depthBuffer && Ct(A);
  }
  function jt(A) {
    const v = A.textures;
    for (let N = 0, q = v.length; N < q; N++) {
      const Z = v[N];
      if (m(Z)) {
        const X = A.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : i.TEXTURE_2D, xt = n.get(Z).__webglTexture;
        e.bindTexture(X, xt), p(X), e.unbindTexture();
      }
    }
  }
  const Ot = [], R = [];
  function we(A) {
    if (A.samples > 0) {
      if (Vt(A) === !1) {
        const v = A.textures, N = A.width, q = A.height;
        let Z = i.COLOR_BUFFER_BIT;
        const X = A.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, xt = n.get(A), nt = v.length > 1;
        if (nt)
          for (let ut = 0; ut < v.length; ut++)
            e.bindFramebuffer(i.FRAMEBUFFER, xt.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ut, i.RENDERBUFFER, null), e.bindFramebuffer(i.FRAMEBUFFER, xt.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ut, i.TEXTURE_2D, null, 0);
        e.bindFramebuffer(i.READ_FRAMEBUFFER, xt.__webglMultisampledFramebuffer), e.bindFramebuffer(i.DRAW_FRAMEBUFFER, xt.__webglFramebuffer);
        for (let ut = 0; ut < v.length; ut++) {
          if (A.resolveDepthBuffer && (A.depthBuffer && (Z |= i.DEPTH_BUFFER_BIT), A.stencilBuffer && A.resolveStencilBuffer && (Z |= i.STENCIL_BUFFER_BIT)), nt) {
            i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, xt.__webglColorRenderbuffer[ut]);
            const kt = n.get(v[ut]).__webglTexture;
            i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, kt, 0);
          }
          i.blitFramebuffer(0, 0, N, q, 0, 0, N, q, Z, i.NEAREST), l === !0 && (Ot.length = 0, R.length = 0, Ot.push(i.COLOR_ATTACHMENT0 + ut), A.depthBuffer && A.resolveDepthBuffer === !1 && (Ot.push(X), R.push(X), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, R)), i.invalidateFramebuffer(i.READ_FRAMEBUFFER, Ot));
        }
        if (e.bindFramebuffer(i.READ_FRAMEBUFFER, null), e.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), nt)
          for (let ut = 0; ut < v.length; ut++) {
            e.bindFramebuffer(i.FRAMEBUFFER, xt.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ut, i.RENDERBUFFER, xt.__webglColorRenderbuffer[ut]);
            const kt = n.get(v[ut]).__webglTexture;
            e.bindFramebuffer(i.FRAMEBUFFER, xt.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ut, i.TEXTURE_2D, kt, 0);
          }
        e.bindFramebuffer(i.DRAW_FRAMEBUFFER, xt.__webglMultisampledFramebuffer);
      } else if (A.depthBuffer && A.resolveDepthBuffer === !1 && l) {
        const v = A.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
        i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [v]);
      }
    }
  }
  function Ut(A) {
    return Math.min(r.maxSamples, A.samples);
  }
  function Vt(A) {
    const v = n.get(A);
    return A.samples > 0 && t.has("WEBGL_multisampled_render_to_texture") === !0 && v.__useRenderToTexture !== !1;
  }
  function At(A) {
    const v = a.render.frame;
    h.get(A) !== v && (h.set(A, v), A.update());
  }
  function ee(A, v) {
    const N = A.colorSpace, q = A.format, Z = A.type;
    return A.isCompressedTexture === !0 || A.isVideoTexture === !0 || N !== gn && N !== pn && (Kt.getTransfer(N) === ie ? (q !== 1023 || Z !== 1009) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", N)), v;
  }
  function Rt(A) {
    return typeof HTMLImageElement < "u" && A instanceof HTMLImageElement ? (c.width = A.naturalWidth || A.width, c.height = A.naturalHeight || A.height) : typeof VideoFrame < "u" && A instanceof VideoFrame ? (c.width = A.displayWidth, c.height = A.displayHeight) : (c.width = A.width, c.height = A.height), c;
  }
  this.allocateTextureUnit = z, this.resetTextureUnits = E, this.setTexture2D = V, this.setTexture2DArray = J, this.setTexture3D = G, this.setTextureCube = Q, this.rebindTextures = Et, this.setupRenderTarget = Bt, this.updateRenderTargetMipmap = jt, this.updateMultisampleRenderTarget = we, this.setupDepthRenderbuffer = Ct, this.setupFrameBufferTexture = $, this.useMultisampledRTT = Vt;
}
function Sd(i, t) {
  function e(n, r = pn) {
    let s;
    const a = Kt.getTransfer(r);
    if (n === 1009) return i.UNSIGNED_BYTE;
    if (n === 1017) return i.UNSIGNED_SHORT_4_4_4_4;
    if (n === 1018) return i.UNSIGNED_SHORT_5_5_5_1;
    if (n === 35902) return i.UNSIGNED_INT_5_9_9_9_REV;
    if (n === 1010) return i.BYTE;
    if (n === 1011) return i.SHORT;
    if (n === 1012) return i.UNSIGNED_SHORT;
    if (n === 1013) return i.INT;
    if (n === 1014) return i.UNSIGNED_INT;
    if (n === 1015) return i.FLOAT;
    if (n === 1016) return i.HALF_FLOAT;
    if (n === 1021) return i.ALPHA;
    if (n === 1022) return i.RGB;
    if (n === 1023) return i.RGBA;
    if (n === 1024) return i.LUMINANCE;
    if (n === 1025) return i.LUMINANCE_ALPHA;
    if (n === 1026) return i.DEPTH_COMPONENT;
    if (n === 1027) return i.DEPTH_STENCIL;
    if (n === 1028) return i.RED;
    if (n === 1029) return i.RED_INTEGER;
    if (n === 1030) return i.RG;
    if (n === 1031) return i.RG_INTEGER;
    if (n === 1033) return i.RGBA_INTEGER;
    if (n === 33776 || n === 33777 || n === 33778 || n === 33779)
      if (a === ie)
        if (s = t.get("WEBGL_compressed_texture_s3tc_srgb"), s !== null) {
          if (n === 33776) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === 33777) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === 33778) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === 33779) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (s = t.get("WEBGL_compressed_texture_s3tc"), s !== null) {
        if (n === 33776) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === 33777) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === 33778) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === 33779) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (n === 35840 || n === 35841 || n === 35842 || n === 35843)
      if (s = t.get("WEBGL_compressed_texture_pvrtc"), s !== null) {
        if (n === 35840) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === 35841) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === 35842) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === 35843) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (n === 36196 || n === 37492 || n === 37496)
      if (s = t.get("WEBGL_compressed_texture_etc"), s !== null) {
        if (n === 36196 || n === 37492) return a === ie ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
        if (n === 37496) return a === ie ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (n === 37808 || n === 37809 || n === 37810 || n === 37811 || n === 37812 || n === 37813 || n === 37814 || n === 37815 || n === 37816 || n === 37817 || n === 37818 || n === 37819 || n === 37820 || n === 37821)
      if (s = t.get("WEBGL_compressed_texture_astc"), s !== null) {
        if (n === 37808) return a === ie ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === 37809) return a === ie ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === 37810) return a === ie ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === 37811) return a === ie ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === 37812) return a === ie ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === 37813) return a === ie ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === 37814) return a === ie ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === 37815) return a === ie ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === 37816) return a === ie ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === 37817) return a === ie ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === 37818) return a === ie ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === 37819) return a === ie ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === 37820) return a === ie ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === 37821) return a === ie ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (n === 36492 || n === 36494 || n === 36495)
      if (s = t.get("EXT_texture_compression_bptc"), s !== null) {
        if (n === 36492) return a === ie ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === 36494) return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === 36495) return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else
        return null;
    if (n === 36283 || n === 36284 || n === 36285 || n === 36286)
      if (s = t.get("EXT_texture_compression_rgtc"), s !== null) {
        if (n === 36492) return s.COMPRESSED_RED_RGTC1_EXT;
        if (n === 36284) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === 36285) return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === 36286) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return n === 1020 ? i.UNSIGNED_INT_24_8 : i[n] !== void 0 ? i[n] : null;
  }
  return { convert: e };
}
class Md extends De {
  constructor(t = []) {
    super(), this.isArrayCamera = !0, this.cameras = t;
  }
}
class mn extends _e {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const yd = { type: "move" };
class Wr {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new mn(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new mn(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new I(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new I()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new mn(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new I(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new I()), this._grip;
  }
  dispatchEvent(t) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(t), this._grip !== null && this._grip.dispatchEvent(t), this._hand !== null && this._hand.dispatchEvent(t), this;
  }
  connect(t) {
    if (t && t.hand) {
      const e = this._hand;
      if (e)
        for (const n of t.hand.values())
          this._getHandJoint(e, n);
    }
    return this.dispatchEvent({ type: "connected", data: t }), this;
  }
  disconnect(t) {
    return this.dispatchEvent({ type: "disconnected", data: t }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(t, e, n) {
    let r = null, s = null, a = null;
    const o = this._targetRay, l = this._grip, c = this._hand;
    if (t && e.session.visibilityState !== "visible-blurred") {
      if (c && t.hand) {
        a = !0;
        for (const x of t.hand.values()) {
          const m = e.getJointPose(x, n), p = this._getHandJoint(c, x);
          m !== null && (p.matrix.fromArray(m.transform.matrix), p.matrix.decompose(p.position, p.rotation, p.scale), p.matrixWorldNeedsUpdate = !0, p.jointRadius = m.radius), p.visible = m !== null;
        }
        const h = c.joints["index-finger-tip"], u = c.joints["thumb-tip"], d = h.position.distanceTo(u.position), f = 0.02, _ = 5e-3;
        c.inputState.pinching && d > f + _ ? (c.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: t.handedness,
          target: this
        })) : !c.inputState.pinching && d <= f - _ && (c.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: t.handedness,
          target: this
        }));
      } else
        l !== null && t.gripSpace && (s = e.getPose(t.gripSpace, n), s !== null && (l.matrix.fromArray(s.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(s.linearVelocity)) : l.hasLinearVelocity = !1, s.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(s.angularVelocity)) : l.hasAngularVelocity = !1));
      o !== null && (r = e.getPose(t.targetRaySpace, n), r === null && s !== null && (r = s), r !== null && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(yd)));
    }
    return o !== null && (o.visible = r !== null), l !== null && (l.visible = s !== null), c !== null && (c.visible = a !== null), this;
  }
  // private method
  _getHandJoint(t, e) {
    if (t.joints[e.jointName] === void 0) {
      const n = new mn();
      n.matrixAutoUpdate = !1, n.visible = !1, t.joints[e.jointName] = n, t.add(n);
    }
    return t.joints[e.jointName];
  }
}
const Ed = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, Td = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class Ad {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(t, e, n) {
    if (this.texture === null) {
      const r = new Ee(), s = t.properties.get(r);
      s.__webglTexture = e.texture, (e.depthNear != n.depthNear || e.depthFar != n.depthFar) && (this.depthNear = e.depthNear, this.depthFar = e.depthFar), this.texture = r;
    }
  }
  getMesh(t) {
    if (this.texture !== null && this.mesh === null) {
      const e = t.cameras[0].viewport, n = new _n({
        vertexShader: Ed,
        fragmentShader: Td,
        uniforms: {
          depthColor: { value: this.texture },
          depthWidth: { value: e.z },
          depthHeight: { value: e.w }
        }
      });
      this.mesh = new Ne(new ar(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
  getDepthTexture() {
    return this.texture;
  }
}
class bd extends In {
  constructor(t, e) {
    super();
    const n = this;
    let r = null, s = 1, a = null, o = "local-floor", l = 1, c = null, h = null, u = null, d = null, f = null, _ = null;
    const x = new Ad(), m = e.getContextAttributes();
    let p = null, T = null;
    const S = [], y = [], C = new ot();
    let w = null;
    const b = new De();
    b.layers.enable(1), b.viewport = new oe();
    const U = new De();
    U.layers.enable(2), U.viewport = new oe();
    const K = [b, U], g = new Md();
    g.layers.enable(1), g.layers.enable(2);
    let E = null, z = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(W) {
      let $ = S[W];
      return $ === void 0 && ($ = new Wr(), S[W] = $), $.getTargetRaySpace();
    }, this.getControllerGrip = function(W) {
      let $ = S[W];
      return $ === void 0 && ($ = new Wr(), S[W] = $), $.getGripSpace();
    }, this.getHand = function(W) {
      let $ = S[W];
      return $ === void 0 && ($ = new Wr(), S[W] = $), $.getHandSpace();
    };
    function O(W) {
      const $ = y.indexOf(W.inputSource);
      if ($ === -1)
        return;
      const _t = S[$];
      _t !== void 0 && (_t.update(W.inputSource, W.frame, c || a), _t.dispatchEvent({ type: W.type, data: W.inputSource }));
    }
    function V() {
      r.removeEventListener("select", O), r.removeEventListener("selectstart", O), r.removeEventListener("selectend", O), r.removeEventListener("squeeze", O), r.removeEventListener("squeezestart", O), r.removeEventListener("squeezeend", O), r.removeEventListener("end", V), r.removeEventListener("inputsourceschange", J);
      for (let W = 0; W < S.length; W++) {
        const $ = y[W];
        $ !== null && (y[W] = null, S[W].disconnect($));
      }
      E = null, z = null, x.reset(), t.setRenderTarget(p), f = null, d = null, u = null, r = null, T = null, Jt.stop(), n.isPresenting = !1, t.setPixelRatio(w), t.setSize(C.width, C.height, !1), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(W) {
      s = W, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(W) {
      o = W, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || a;
    }, this.setReferenceSpace = function(W) {
      c = W;
    }, this.getBaseLayer = function() {
      return d !== null ? d : f;
    }, this.getBinding = function() {
      return u;
    }, this.getFrame = function() {
      return _;
    }, this.getSession = function() {
      return r;
    }, this.setSession = async function(W) {
      if (r = W, r !== null) {
        if (p = t.getRenderTarget(), r.addEventListener("select", O), r.addEventListener("selectstart", O), r.addEventListener("selectend", O), r.addEventListener("squeeze", O), r.addEventListener("squeezestart", O), r.addEventListener("squeezeend", O), r.addEventListener("end", V), r.addEventListener("inputsourceschange", J), m.xrCompatible !== !0 && await e.makeXRCompatible(), w = t.getPixelRatio(), t.getSize(C), r.renderState.layers === void 0) {
          const $ = {
            antialias: m.antialias,
            alpha: !0,
            depth: m.depth,
            stencil: m.stencil,
            framebufferScaleFactor: s
          };
          f = new XRWebGLLayer(r, e, $), r.updateRenderState({ baseLayer: f }), t.setPixelRatio(1), t.setSize(f.framebufferWidth, f.framebufferHeight, !1), T = new Pn(
            f.framebufferWidth,
            f.framebufferHeight,
            {
              format: 1023,
              type: 1009,
              colorSpace: t.outputColorSpace,
              stencilBuffer: m.stencil
            }
          );
        } else {
          let $ = null, _t = null, ht = null;
          m.depth && (ht = m.stencil ? e.DEPTH24_STENCIL8 : e.DEPTH_COMPONENT24, $ = m.stencil ? 1027 : 1026, _t = m.stencil ? 1020 : 1014);
          const Ct = {
            colorFormat: e.RGBA8,
            depthFormat: ht,
            scaleFactor: s
          };
          u = new XRWebGLBinding(r, e), d = u.createProjectionLayer(Ct), r.updateRenderState({ layers: [d] }), t.setPixelRatio(1), t.setSize(d.textureWidth, d.textureHeight, !1), T = new Pn(
            d.textureWidth,
            d.textureHeight,
            {
              format: 1023,
              type: 1009,
              depthTexture: new za(d.textureWidth, d.textureHeight, _t, void 0, void 0, void 0, void 0, void 0, void 0, $),
              stencilBuffer: m.stencil,
              colorSpace: t.outputColorSpace,
              samples: m.antialias ? 4 : 0,
              resolveDepthBuffer: d.ignoreDepthValues === !1
            }
          );
        }
        T.isXRRenderTarget = !0, this.setFoveation(l), c = null, a = await r.requestReferenceSpace(o), Jt.setContext(r), Jt.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (r !== null)
        return r.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return x.getDepthTexture();
    };
    function J(W) {
      for (let $ = 0; $ < W.removed.length; $++) {
        const _t = W.removed[$], ht = y.indexOf(_t);
        ht >= 0 && (y[ht] = null, S[ht].disconnect(_t));
      }
      for (let $ = 0; $ < W.added.length; $++) {
        const _t = W.added[$];
        let ht = y.indexOf(_t);
        if (ht === -1) {
          for (let Et = 0; Et < S.length; Et++)
            if (Et >= y.length) {
              y.push(_t), ht = Et;
              break;
            } else if (y[Et] === null) {
              y[Et] = _t, ht = Et;
              break;
            }
          if (ht === -1) break;
        }
        const Ct = S[ht];
        Ct && Ct.connect(_t);
      }
    }
    const G = new I(), Q = new I();
    function H(W, $, _t) {
      G.setFromMatrixPosition($.matrixWorld), Q.setFromMatrixPosition(_t.matrixWorld);
      const ht = G.distanceTo(Q), Ct = $.projectionMatrix.elements, Et = _t.projectionMatrix.elements, Bt = Ct[14] / (Ct[10] - 1), jt = Ct[14] / (Ct[10] + 1), Ot = (Ct[9] + 1) / Ct[5], R = (Ct[9] - 1) / Ct[5], we = (Ct[8] - 1) / Ct[0], Ut = (Et[8] + 1) / Et[0], Vt = Bt * we, At = Bt * Ut, ee = ht / (-we + Ut), Rt = ee * -we;
      if ($.matrixWorld.decompose(W.position, W.quaternion, W.scale), W.translateX(Rt), W.translateZ(ee), W.matrixWorld.compose(W.position, W.quaternion, W.scale), W.matrixWorldInverse.copy(W.matrixWorld).invert(), Ct[10] === -1)
        W.projectionMatrix.copy($.projectionMatrix), W.projectionMatrixInverse.copy($.projectionMatrixInverse);
      else {
        const A = Bt + ee, v = jt + ee, N = Vt - Rt, q = At + (ht - Rt), Z = Ot * jt / v * A, X = R * jt / v * A;
        W.projectionMatrix.makePerspective(N, q, Z, X, A, v), W.projectionMatrixInverse.copy(W.projectionMatrix).invert();
      }
    }
    function lt(W, $) {
      $ === null ? W.matrixWorld.copy(W.matrix) : W.matrixWorld.multiplyMatrices($.matrixWorld, W.matrix), W.matrixWorldInverse.copy(W.matrixWorld).invert();
    }
    this.updateCamera = function(W) {
      if (r === null) return;
      let $ = W.near, _t = W.far;
      x.texture !== null && (x.depthNear > 0 && ($ = x.depthNear), x.depthFar > 0 && (_t = x.depthFar)), g.near = U.near = b.near = $, g.far = U.far = b.far = _t, (E !== g.near || z !== g.far) && (r.updateRenderState({
        depthNear: g.near,
        depthFar: g.far
      }), E = g.near, z = g.far);
      const ht = W.parent, Ct = g.cameras;
      lt(g, ht);
      for (let Et = 0; Et < Ct.length; Et++)
        lt(Ct[Et], ht);
      Ct.length === 2 ? H(g, b, U) : g.projectionMatrix.copy(b.projectionMatrix), ct(W, g, ht);
    };
    function ct(W, $, _t) {
      _t === null ? W.matrix.copy($.matrixWorld) : (W.matrix.copy(_t.matrixWorld), W.matrix.invert(), W.matrix.multiply($.matrixWorld)), W.matrix.decompose(W.position, W.quaternion, W.scale), W.updateMatrixWorld(!0), W.projectionMatrix.copy($.projectionMatrix), W.projectionMatrixInverse.copy($.projectionMatrixInverse), W.isPerspectiveCamera && (W.fov = jr * 2 * Math.atan(1 / W.projectionMatrix.elements[5]), W.zoom = 1);
    }
    this.getCamera = function() {
      return g;
    }, this.getFoveation = function() {
      if (!(d === null && f === null))
        return l;
    }, this.setFoveation = function(W) {
      l = W, d !== null && (d.fixedFoveation = W), f !== null && f.fixedFoveation !== void 0 && (f.fixedFoveation = W);
    }, this.hasDepthSensing = function() {
      return x.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return x.getMesh(g);
    };
    let vt = null;
    function Wt(W, $) {
      if (h = $.getViewerPose(c || a), _ = $, h !== null) {
        const _t = h.views;
        f !== null && (t.setRenderTargetFramebuffer(T, f.framebuffer), t.setRenderTarget(T));
        let ht = !1;
        _t.length !== g.cameras.length && (g.cameras.length = 0, ht = !0);
        for (let Et = 0; Et < _t.length; Et++) {
          const Bt = _t[Et];
          let jt = null;
          if (f !== null)
            jt = f.getViewport(Bt);
          else {
            const R = u.getViewSubImage(d, Bt);
            jt = R.viewport, Et === 0 && (t.setRenderTargetTextures(
              T,
              R.colorTexture,
              d.ignoreDepthValues ? void 0 : R.depthStencilTexture
            ), t.setRenderTarget(T));
          }
          let Ot = K[Et];
          Ot === void 0 && (Ot = new De(), Ot.layers.enable(Et), Ot.viewport = new oe(), K[Et] = Ot), Ot.matrix.fromArray(Bt.transform.matrix), Ot.matrix.decompose(Ot.position, Ot.quaternion, Ot.scale), Ot.projectionMatrix.fromArray(Bt.projectionMatrix), Ot.projectionMatrixInverse.copy(Ot.projectionMatrix).invert(), Ot.viewport.set(jt.x, jt.y, jt.width, jt.height), Et === 0 && (g.matrix.copy(Ot.matrix), g.matrix.decompose(g.position, g.quaternion, g.scale)), ht === !0 && g.cameras.push(Ot);
        }
        const Ct = r.enabledFeatures;
        if (Ct && Ct.includes("depth-sensing")) {
          const Et = u.getDepthInformation(_t[0]);
          Et && Et.isValid && Et.texture && x.init(t, Et, r.renderState);
        }
      }
      for (let _t = 0; _t < S.length; _t++) {
        const ht = y[_t], Ct = S[_t];
        ht !== null && Ct !== void 0 && Ct.update(ht, $, c || a);
      }
      vt && vt(W, $), $.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: $ }), _ = null;
    }
    const Jt = new Ba();
    Jt.setAnimationLoop(Wt), this.setAnimationLoop = function(W) {
      vt = W;
    }, this.dispose = function() {
    };
  }
}
const Tn = /* @__PURE__ */ new qe(), wd = /* @__PURE__ */ new re();
function Rd(i, t) {
  function e(m, p) {
    m.matrixAutoUpdate === !0 && m.updateMatrix(), p.value.copy(m.matrix);
  }
  function n(m, p) {
    p.color.getRGB(m.fogColor.value, Ua(i)), p.isFog ? (m.fogNear.value = p.near, m.fogFar.value = p.far) : p.isFogExp2 && (m.fogDensity.value = p.density);
  }
  function r(m, p, T, S, y) {
    p.isMeshBasicMaterial || p.isMeshLambertMaterial ? s(m, p) : p.isMeshToonMaterial ? (s(m, p), u(m, p)) : p.isMeshPhongMaterial ? (s(m, p), h(m, p)) : p.isMeshStandardMaterial ? (s(m, p), d(m, p), p.isMeshPhysicalMaterial && f(m, p, y)) : p.isMeshMatcapMaterial ? (s(m, p), _(m, p)) : p.isMeshDepthMaterial ? s(m, p) : p.isMeshDistanceMaterial ? (s(m, p), x(m, p)) : p.isMeshNormalMaterial ? s(m, p) : p.isLineBasicMaterial ? (a(m, p), p.isLineDashedMaterial && o(m, p)) : p.isPointsMaterial ? l(m, p, T, S) : p.isSpriteMaterial ? c(m, p) : p.isShadowMaterial ? (m.color.value.copy(p.color), m.opacity.value = p.opacity) : p.isShaderMaterial && (p.uniformsNeedUpdate = !1);
  }
  function s(m, p) {
    m.opacity.value = p.opacity, p.color && m.diffuse.value.copy(p.color), p.emissive && m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity), p.map && (m.map.value = p.map, e(p.map, m.mapTransform)), p.alphaMap && (m.alphaMap.value = p.alphaMap, e(p.alphaMap, m.alphaMapTransform)), p.bumpMap && (m.bumpMap.value = p.bumpMap, e(p.bumpMap, m.bumpMapTransform), m.bumpScale.value = p.bumpScale, p.side === 1 && (m.bumpScale.value *= -1)), p.normalMap && (m.normalMap.value = p.normalMap, e(p.normalMap, m.normalMapTransform), m.normalScale.value.copy(p.normalScale), p.side === 1 && m.normalScale.value.negate()), p.displacementMap && (m.displacementMap.value = p.displacementMap, e(p.displacementMap, m.displacementMapTransform), m.displacementScale.value = p.displacementScale, m.displacementBias.value = p.displacementBias), p.emissiveMap && (m.emissiveMap.value = p.emissiveMap, e(p.emissiveMap, m.emissiveMapTransform)), p.specularMap && (m.specularMap.value = p.specularMap, e(p.specularMap, m.specularMapTransform)), p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest);
    const T = t.get(p), S = T.envMap, y = T.envMapRotation;
    S && (m.envMap.value = S, Tn.copy(y), Tn.x *= -1, Tn.y *= -1, Tn.z *= -1, S.isCubeTexture && S.isRenderTargetTexture === !1 && (Tn.y *= -1, Tn.z *= -1), m.envMapRotation.value.setFromMatrix4(wd.makeRotationFromEuler(Tn)), m.flipEnvMap.value = S.isCubeTexture && S.isRenderTargetTexture === !1 ? -1 : 1, m.reflectivity.value = p.reflectivity, m.ior.value = p.ior, m.refractionRatio.value = p.refractionRatio), p.lightMap && (m.lightMap.value = p.lightMap, m.lightMapIntensity.value = p.lightMapIntensity, e(p.lightMap, m.lightMapTransform)), p.aoMap && (m.aoMap.value = p.aoMap, m.aoMapIntensity.value = p.aoMapIntensity, e(p.aoMap, m.aoMapTransform));
  }
  function a(m, p) {
    m.diffuse.value.copy(p.color), m.opacity.value = p.opacity, p.map && (m.map.value = p.map, e(p.map, m.mapTransform));
  }
  function o(m, p) {
    m.dashSize.value = p.dashSize, m.totalSize.value = p.dashSize + p.gapSize, m.scale.value = p.scale;
  }
  function l(m, p, T, S) {
    m.diffuse.value.copy(p.color), m.opacity.value = p.opacity, m.size.value = p.size * T, m.scale.value = S * 0.5, p.map && (m.map.value = p.map, e(p.map, m.uvTransform)), p.alphaMap && (m.alphaMap.value = p.alphaMap, e(p.alphaMap, m.alphaMapTransform)), p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest);
  }
  function c(m, p) {
    m.diffuse.value.copy(p.color), m.opacity.value = p.opacity, m.rotation.value = p.rotation, p.map && (m.map.value = p.map, e(p.map, m.mapTransform)), p.alphaMap && (m.alphaMap.value = p.alphaMap, e(p.alphaMap, m.alphaMapTransform)), p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest);
  }
  function h(m, p) {
    m.specular.value.copy(p.specular), m.shininess.value = Math.max(p.shininess, 1e-4);
  }
  function u(m, p) {
    p.gradientMap && (m.gradientMap.value = p.gradientMap);
  }
  function d(m, p) {
    m.metalness.value = p.metalness, p.metalnessMap && (m.metalnessMap.value = p.metalnessMap, e(p.metalnessMap, m.metalnessMapTransform)), m.roughness.value = p.roughness, p.roughnessMap && (m.roughnessMap.value = p.roughnessMap, e(p.roughnessMap, m.roughnessMapTransform)), p.envMap && (m.envMapIntensity.value = p.envMapIntensity);
  }
  function f(m, p, T) {
    m.ior.value = p.ior, p.sheen > 0 && (m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen), m.sheenRoughness.value = p.sheenRoughness, p.sheenColorMap && (m.sheenColorMap.value = p.sheenColorMap, e(p.sheenColorMap, m.sheenColorMapTransform)), p.sheenRoughnessMap && (m.sheenRoughnessMap.value = p.sheenRoughnessMap, e(p.sheenRoughnessMap, m.sheenRoughnessMapTransform))), p.clearcoat > 0 && (m.clearcoat.value = p.clearcoat, m.clearcoatRoughness.value = p.clearcoatRoughness, p.clearcoatMap && (m.clearcoatMap.value = p.clearcoatMap, e(p.clearcoatMap, m.clearcoatMapTransform)), p.clearcoatRoughnessMap && (m.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap, e(p.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)), p.clearcoatNormalMap && (m.clearcoatNormalMap.value = p.clearcoatNormalMap, e(p.clearcoatNormalMap, m.clearcoatNormalMapTransform), m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale), p.side === 1 && m.clearcoatNormalScale.value.negate())), p.dispersion > 0 && (m.dispersion.value = p.dispersion), p.iridescence > 0 && (m.iridescence.value = p.iridescence, m.iridescenceIOR.value = p.iridescenceIOR, m.iridescenceThicknessMinimum.value = p.iridescenceThicknessRange[0], m.iridescenceThicknessMaximum.value = p.iridescenceThicknessRange[1], p.iridescenceMap && (m.iridescenceMap.value = p.iridescenceMap, e(p.iridescenceMap, m.iridescenceMapTransform)), p.iridescenceThicknessMap && (m.iridescenceThicknessMap.value = p.iridescenceThicknessMap, e(p.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))), p.transmission > 0 && (m.transmission.value = p.transmission, m.transmissionSamplerMap.value = T.texture, m.transmissionSamplerSize.value.set(T.width, T.height), p.transmissionMap && (m.transmissionMap.value = p.transmissionMap, e(p.transmissionMap, m.transmissionMapTransform)), m.thickness.value = p.thickness, p.thicknessMap && (m.thicknessMap.value = p.thicknessMap, e(p.thicknessMap, m.thicknessMapTransform)), m.attenuationDistance.value = p.attenuationDistance, m.attenuationColor.value.copy(p.attenuationColor)), p.anisotropy > 0 && (m.anisotropyVector.value.set(p.anisotropy * Math.cos(p.anisotropyRotation), p.anisotropy * Math.sin(p.anisotropyRotation)), p.anisotropyMap && (m.anisotropyMap.value = p.anisotropyMap, e(p.anisotropyMap, m.anisotropyMapTransform))), m.specularIntensity.value = p.specularIntensity, m.specularColor.value.copy(p.specularColor), p.specularColorMap && (m.specularColorMap.value = p.specularColorMap, e(p.specularColorMap, m.specularColorMapTransform)), p.specularIntensityMap && (m.specularIntensityMap.value = p.specularIntensityMap, e(p.specularIntensityMap, m.specularIntensityMapTransform));
  }
  function _(m, p) {
    p.matcap && (m.matcap.value = p.matcap);
  }
  function x(m, p) {
    const T = t.get(p).light;
    m.referencePosition.value.setFromMatrixPosition(T.matrixWorld), m.nearDistance.value = T.shadow.camera.near, m.farDistance.value = T.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: r
  };
}
function Cd(i, t, e, n) {
  let r = {}, s = {}, a = [];
  const o = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(T, S) {
    const y = S.program;
    n.uniformBlockBinding(T, y);
  }
  function c(T, S) {
    let y = r[T.id];
    y === void 0 && (_(T), y = h(T), r[T.id] = y, T.addEventListener("dispose", m));
    const C = S.program;
    n.updateUBOMapping(T, C);
    const w = t.render.frame;
    s[T.id] !== w && (d(T), s[T.id] = w);
  }
  function h(T) {
    const S = u();
    T.__bindingPointIndex = S;
    const y = i.createBuffer(), C = T.__size, w = T.usage;
    return i.bindBuffer(i.UNIFORM_BUFFER, y), i.bufferData(i.UNIFORM_BUFFER, C, w), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, S, y), y;
  }
  function u() {
    for (let T = 0; T < o; T++)
      if (a.indexOf(T) === -1)
        return a.push(T), T;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function d(T) {
    const S = r[T.id], y = T.uniforms, C = T.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, S);
    for (let w = 0, b = y.length; w < b; w++) {
      const U = Array.isArray(y[w]) ? y[w] : [y[w]];
      for (let K = 0, g = U.length; K < g; K++) {
        const E = U[K];
        if (f(E, w, K, C) === !0) {
          const z = E.__offset, O = Array.isArray(E.value) ? E.value : [E.value];
          let V = 0;
          for (let J = 0; J < O.length; J++) {
            const G = O[J], Q = x(G);
            typeof G == "number" || typeof G == "boolean" ? (E.__data[0] = G, i.bufferSubData(i.UNIFORM_BUFFER, z + V, E.__data)) : G.isMatrix3 ? (E.__data[0] = G.elements[0], E.__data[1] = G.elements[1], E.__data[2] = G.elements[2], E.__data[3] = 0, E.__data[4] = G.elements[3], E.__data[5] = G.elements[4], E.__data[6] = G.elements[5], E.__data[7] = 0, E.__data[8] = G.elements[6], E.__data[9] = G.elements[7], E.__data[10] = G.elements[8], E.__data[11] = 0) : (G.toArray(E.__data, V), V += Q.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          i.bufferSubData(i.UNIFORM_BUFFER, z, E.__data);
        }
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function f(T, S, y, C) {
    const w = T.value, b = S + "_" + y;
    if (C[b] === void 0)
      return typeof w == "number" || typeof w == "boolean" ? C[b] = w : C[b] = w.clone(), !0;
    {
      const U = C[b];
      if (typeof w == "number" || typeof w == "boolean") {
        if (U !== w)
          return C[b] = w, !0;
      } else if (U.equals(w) === !1)
        return U.copy(w), !0;
    }
    return !1;
  }
  function _(T) {
    const S = T.uniforms;
    let y = 0;
    const C = 16;
    for (let b = 0, U = S.length; b < U; b++) {
      const K = Array.isArray(S[b]) ? S[b] : [S[b]];
      for (let g = 0, E = K.length; g < E; g++) {
        const z = K[g], O = Array.isArray(z.value) ? z.value : [z.value];
        for (let V = 0, J = O.length; V < J; V++) {
          const G = O[V], Q = x(G), H = y % C, lt = H % Q.boundary, ct = H + lt;
          y += lt, ct !== 0 && C - ct < Q.storage && (y += C - ct), z.__data = new Float32Array(Q.storage / Float32Array.BYTES_PER_ELEMENT), z.__offset = y, y += Q.storage;
        }
      }
    }
    const w = y % C;
    return w > 0 && (y += C - w), T.__size = y, T.__cache = {}, this;
  }
  function x(T) {
    const S = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof T == "number" || typeof T == "boolean" ? (S.boundary = 4, S.storage = 4) : T.isVector2 ? (S.boundary = 8, S.storage = 8) : T.isVector3 || T.isColor ? (S.boundary = 16, S.storage = 12) : T.isVector4 ? (S.boundary = 16, S.storage = 16) : T.isMatrix3 ? (S.boundary = 48, S.storage = 48) : T.isMatrix4 ? (S.boundary = 64, S.storage = 64) : T.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", T), S;
  }
  function m(T) {
    const S = T.target;
    S.removeEventListener("dispose", m);
    const y = a.indexOf(S.__bindingPointIndex);
    a.splice(y, 1), i.deleteBuffer(r[S.id]), delete r[S.id], delete s[S.id];
  }
  function p() {
    for (const T in r)
      i.deleteBuffer(r[T]);
    a = [], r = {}, s = {};
  }
  return {
    bind: l,
    update: c,
    dispose: p
  };
}
class Wa {
  constructor(t = {}) {
    const {
      canvas: e = _o(),
      context: n = null,
      depth: r = !0,
      stencil: s = !1,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: l = !0,
      preserveDrawingBuffer: c = !1,
      powerPreference: h = "default",
      failIfMajorPerformanceCaveat: u = !1
    } = t;
    this.isWebGLRenderer = !0;
    let d;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext)
        throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      d = n.getContextAttributes().alpha;
    } else
      d = a;
    const f = new Uint32Array(4), _ = new Int32Array(4);
    let x = null, m = null;
    const p = [], T = [];
    this.domElement = e, this.debug = {
      /**
       * Enables error checking and reporting when shader programs are being compiled
       * @type {boolean}
       */
      checkShaderErrors: !0,
      /**
       * Callback for custom error reporting.
       * @type {?Function}
       */
      onShaderError: null
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this._outputColorSpace = Le, this.toneMapping = 0, this.toneMappingExposure = 1;
    const S = this;
    let y = !1, C = 0, w = 0, b = null, U = -1, K = null;
    const g = new oe(), E = new oe();
    let z = null;
    const O = new Gt(0);
    let V = 0, J = e.width, G = e.height, Q = 1, H = null, lt = null;
    const ct = new oe(0, 0, J, G), vt = new oe(0, 0, J, G);
    let Wt = !1;
    const Jt = new rs();
    let W = !1, $ = !1;
    const _t = new re(), ht = new re(), Ct = new I(), Et = new oe(), Bt = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    let jt = !1;
    function Ot() {
      return b === null ? Q : 1;
    }
    let R = n;
    function we(M, L) {
      return e.getContext(M, L);
    }
    try {
      const M = {
        alpha: !0,
        depth: r,
        stencil: s,
        antialias: o,
        premultipliedAlpha: l,
        preserveDrawingBuffer: c,
        powerPreference: h,
        failIfMajorPerformanceCaveat: u
      };
      if ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${es}`), e.addEventListener("webglcontextlost", Y, !1), e.addEventListener("webglcontextrestored", it, !1), e.addEventListener("webglcontextcreationerror", at, !1), R === null) {
        const L = "webgl2";
        if (R = we(L, M), R === null)
          throw we(L) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (M) {
      throw console.error("THREE.WebGLRenderer: " + M.message), M;
    }
    let Ut, Vt, At, ee, Rt, A, v, N, q, Z, X, xt, nt, ut, kt, j, dt, bt, wt, ft, Nt, Pt, te, P;
    function st() {
      Ut = new Nh(R), Ut.init(), Pt = new Sd(R, Ut), Vt = new Ch(R, Ut, t, Pt), At = new gd(R), Vt.reverseDepthBuffer && At.buffers.depth.setReversed(!0), ee = new Oh(R), Rt = new nd(), A = new xd(R, Ut, At, Rt, Vt, Pt, ee), v = new Ih(S), N = new Uh(S), q = new Xo(R), te = new wh(R, q), Z = new Fh(R, q, ee, te), X = new Gh(R, Z, q, ee), wt = new zh(R, Vt, A), j = new Ph(Rt), xt = new ed(S, v, N, Ut, Vt, te, j), nt = new Rd(S, Rt), ut = new rd(), kt = new hd(Ut), bt = new bh(S, v, N, At, X, d, l), dt = new md(S, X, Vt), P = new Cd(R, ee, Vt, At), ft = new Rh(R, Ut, ee), Nt = new Bh(R, Ut, ee), ee.programs = xt.programs, S.capabilities = Vt, S.extensions = Ut, S.properties = Rt, S.renderLists = ut, S.shadowMap = dt, S.state = At, S.info = ee;
    }
    st();
    const k = new bd(S, R);
    this.xr = k, this.getContext = function() {
      return R;
    }, this.getContextAttributes = function() {
      return R.getContextAttributes();
    }, this.forceContextLoss = function() {
      const M = Ut.get("WEBGL_lose_context");
      M && M.loseContext();
    }, this.forceContextRestore = function() {
      const M = Ut.get("WEBGL_lose_context");
      M && M.restoreContext();
    }, this.getPixelRatio = function() {
      return Q;
    }, this.setPixelRatio = function(M) {
      M !== void 0 && (Q = M, this.setSize(J, G, !1));
    }, this.getSize = function(M) {
      return M.set(J, G);
    }, this.setSize = function(M, L, F = !0) {
      if (k.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      J = M, G = L, e.width = Math.floor(M * Q), e.height = Math.floor(L * Q), F === !0 && (e.style.width = M + "px", e.style.height = L + "px"), this.setViewport(0, 0, M, L);
    }, this.getDrawingBufferSize = function(M) {
      return M.set(J * Q, G * Q).floor();
    }, this.setDrawingBufferSize = function(M, L, F) {
      J = M, G = L, Q = F, e.width = Math.floor(M * F), e.height = Math.floor(L * F), this.setViewport(0, 0, M, L);
    }, this.getCurrentViewport = function(M) {
      return M.copy(g);
    }, this.getViewport = function(M) {
      return M.copy(ct);
    }, this.setViewport = function(M, L, F, B) {
      M.isVector4 ? ct.set(M.x, M.y, M.z, M.w) : ct.set(M, L, F, B), At.viewport(g.copy(ct).multiplyScalar(Q).round());
    }, this.getScissor = function(M) {
      return M.copy(vt);
    }, this.setScissor = function(M, L, F, B) {
      M.isVector4 ? vt.set(M.x, M.y, M.z, M.w) : vt.set(M, L, F, B), At.scissor(E.copy(vt).multiplyScalar(Q).round());
    }, this.getScissorTest = function() {
      return Wt;
    }, this.setScissorTest = function(M) {
      At.setScissorTest(Wt = M);
    }, this.setOpaqueSort = function(M) {
      H = M;
    }, this.setTransparentSort = function(M) {
      lt = M;
    }, this.getClearColor = function(M) {
      return M.copy(bt.getClearColor());
    }, this.setClearColor = function() {
      bt.setClearColor.apply(bt, arguments);
    }, this.getClearAlpha = function() {
      return bt.getClearAlpha();
    }, this.setClearAlpha = function() {
      bt.setClearAlpha.apply(bt, arguments);
    }, this.clear = function(M = !0, L = !0, F = !0) {
      let B = 0;
      if (M) {
        let D = !1;
        if (b !== null) {
          const tt = b.texture.format;
          D = tt === 1033 || tt === 1031 || tt === 1029;
        }
        if (D) {
          const tt = b.texture.type, rt = tt === 1009 || tt === 1014 || tt === 1012 || tt === 1020 || tt === 1017 || tt === 1018, pt = bt.getClearColor(), gt = bt.getClearAlpha(), yt = pt.r, Tt = pt.g, St = pt.b;
          rt ? (f[0] = yt, f[1] = Tt, f[2] = St, f[3] = gt, R.clearBufferuiv(R.COLOR, 0, f)) : (_[0] = yt, _[1] = Tt, _[2] = St, _[3] = gt, R.clearBufferiv(R.COLOR, 0, _));
        } else
          B |= R.COLOR_BUFFER_BIT;
      }
      L && (B |= R.DEPTH_BUFFER_BIT, R.clearDepth(this.capabilities.reverseDepthBuffer ? 0 : 1)), F && (B |= R.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), R.clear(B);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      e.removeEventListener("webglcontextlost", Y, !1), e.removeEventListener("webglcontextrestored", it, !1), e.removeEventListener("webglcontextcreationerror", at, !1), ut.dispose(), kt.dispose(), Rt.dispose(), v.dispose(), N.dispose(), X.dispose(), te.dispose(), P.dispose(), xt.dispose(), k.dispose(), k.removeEventListener("sessionstart", ps), k.removeEventListener("sessionend", ms), vn.stop();
    };
    function Y(M) {
      M.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), y = !0;
    }
    function it() {
      console.log("THREE.WebGLRenderer: Context Restored."), y = !1;
      const M = ee.autoReset, L = dt.enabled, F = dt.autoUpdate, B = dt.needsUpdate, D = dt.type;
      st(), ee.autoReset = M, dt.enabled = L, dt.autoUpdate = F, dt.needsUpdate = B, dt.type = D;
    }
    function at(M) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", M.statusMessage);
    }
    function zt(M) {
      const L = M.target;
      L.removeEventListener("dispose", zt), ce(L);
    }
    function ce(M) {
      Te(M), Rt.remove(M);
    }
    function Te(M) {
      const L = Rt.get(M).programs;
      L !== void 0 && (L.forEach(function(F) {
        xt.releaseProgram(F);
      }), M.isShaderMaterial && xt.releaseShaderCache(M));
    }
    this.renderBufferDirect = function(M, L, F, B, D, tt) {
      L === null && (L = Bt);
      const rt = D.isMesh && D.matrixWorld.determinant() < 0, pt = ho(M, L, F, B, D);
      At.setMaterial(B, rt);
      let gt = F.index, yt = 1;
      if (B.wireframe === !0) {
        if (gt = Z.getWireframeAttribute(F), gt === void 0) return;
        yt = 2;
      }
      const Tt = F.drawRange, St = F.attributes.position;
      let Zt = Tt.start * yt, ne = (Tt.start + Tt.count) * yt;
      tt !== null && (Zt = Math.max(Zt, tt.start * yt), ne = Math.min(ne, (tt.start + tt.count) * yt)), gt !== null ? (Zt = Math.max(Zt, 0), ne = Math.min(ne, gt.count)) : St != null && (Zt = Math.max(Zt, 0), ne = Math.min(ne, St.count));
      const ae = ne - Zt;
      if (ae < 0 || ae === 1 / 0) return;
      te.setup(D, B, pt, F, gt);
      let Re, qt = ft;
      if (gt !== null && (Re = q.get(gt), qt = Nt, qt.setIndex(Re)), D.isMesh)
        B.wireframe === !0 ? (At.setLineWidth(B.wireframeLinewidth * Ot()), qt.setMode(R.LINES)) : qt.setMode(R.TRIANGLES);
      else if (D.isLine) {
        let Mt = B.linewidth;
        Mt === void 0 && (Mt = 1), At.setLineWidth(Mt * Ot()), D.isLineSegments ? qt.setMode(R.LINES) : D.isLineLoop ? qt.setMode(R.LINE_LOOP) : qt.setMode(R.LINE_STRIP);
      } else D.isPoints ? qt.setMode(R.POINTS) : D.isSprite && qt.setMode(R.TRIANGLES);
      if (D.isBatchedMesh)
        if (D._multiDrawInstances !== null)
          qt.renderMultiDrawInstances(D._multiDrawStarts, D._multiDrawCounts, D._multiDrawCount, D._multiDrawInstances);
        else if (Ut.get("WEBGL_multi_draw"))
          qt.renderMultiDraw(D._multiDrawStarts, D._multiDrawCounts, D._multiDrawCount);
        else {
          const Mt = D._multiDrawStarts, ge = D._multiDrawCounts, Yt = D._multiDrawCount, Ve = gt ? q.get(gt).bytesPerElement : 1, Ln = Rt.get(B).currentProgram.getUniforms();
          for (let Ce = 0; Ce < Yt; Ce++)
            Ln.setValue(R, "_gl_DrawID", Ce), qt.render(Mt[Ce] / Ve, ge[Ce]);
        }
      else if (D.isInstancedMesh)
        qt.renderInstances(Zt, ae, D.count);
      else if (F.isInstancedBufferGeometry) {
        const Mt = F._maxInstanceCount !== void 0 ? F._maxInstanceCount : 1 / 0, ge = Math.min(F.instanceCount, Mt);
        qt.renderInstances(Zt, ae, ge);
      } else
        qt.render(Zt, ae);
    };
    function Xt(M, L, F) {
      M.transparent === !0 && M.side === 2 && M.forceSinglePass === !1 ? (M.side = 1, M.needsUpdate = !0, yi(M, L, F), M.side = 0, M.needsUpdate = !0, yi(M, L, F), M.side = 2) : yi(M, L, F);
    }
    this.compile = function(M, L, F = null) {
      F === null && (F = M), m = kt.get(F), m.init(L), T.push(m), F.traverseVisible(function(D) {
        D.isLight && D.layers.test(L.layers) && (m.pushLight(D), D.castShadow && m.pushShadow(D));
      }), M !== F && M.traverseVisible(function(D) {
        D.isLight && D.layers.test(L.layers) && (m.pushLight(D), D.castShadow && m.pushShadow(D));
      }), m.setupLights();
      const B = /* @__PURE__ */ new Set();
      return M.traverse(function(D) {
        if (!(D.isMesh || D.isPoints || D.isLine || D.isSprite))
          return;
        const tt = D.material;
        if (tt)
          if (Array.isArray(tt))
            for (let rt = 0; rt < tt.length; rt++) {
              const pt = tt[rt];
              Xt(pt, F, D), B.add(pt);
            }
          else
            Xt(tt, F, D), B.add(tt);
      }), T.pop(), m = null, B;
    }, this.compileAsync = function(M, L, F = null) {
      const B = this.compile(M, L, F);
      return new Promise((D) => {
        function tt() {
          if (B.forEach(function(rt) {
            Rt.get(rt).currentProgram.isReady() && B.delete(rt);
          }), B.size === 0) {
            D(M);
            return;
          }
          setTimeout(tt, 10);
        }
        Ut.get("KHR_parallel_shader_compile") !== null ? tt() : setTimeout(tt, 10);
      });
    };
    let Ae = null;
    function Qe(M) {
      Ae && Ae(M);
    }
    function ps() {
      vn.stop();
    }
    function ms() {
      vn.start();
    }
    const vn = new Ba();
    vn.setAnimationLoop(Qe), typeof self < "u" && vn.setContext(self), this.setAnimationLoop = function(M) {
      Ae = M, k.setAnimationLoop(M), M === null ? vn.stop() : vn.start();
    }, k.addEventListener("sessionstart", ps), k.addEventListener("sessionend", ms), this.render = function(M, L) {
      if (L !== void 0 && L.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (y === !0) return;
      if (M.matrixWorldAutoUpdate === !0 && M.updateMatrixWorld(), L.parent === null && L.matrixWorldAutoUpdate === !0 && L.updateMatrixWorld(), k.enabled === !0 && k.isPresenting === !0 && (k.cameraAutoUpdate === !0 && k.updateCamera(L), L = k.getCamera()), M.isScene === !0 && M.onBeforeRender(S, M, L, b), m = kt.get(M, T.length), m.init(L), T.push(m), ht.multiplyMatrices(L.projectionMatrix, L.matrixWorldInverse), Jt.setFromProjectionMatrix(ht), $ = this.localClippingEnabled, W = j.init(this.clippingPlanes, $), x = ut.get(M, p.length), x.init(), p.push(x), k.enabled === !0 && k.isPresenting === !0) {
        const tt = S.xr.getDepthSensingMesh();
        tt !== null && ur(tt, L, -1 / 0, S.sortObjects);
      }
      ur(M, L, 0, S.sortObjects), x.finish(), S.sortObjects === !0 && x.sort(H, lt), jt = k.enabled === !1 || k.isPresenting === !1 || k.hasDepthSensing() === !1, jt && bt.addToRenderList(x, M), this.info.render.frame++, W === !0 && j.beginShadows();
      const F = m.state.shadowsArray;
      dt.render(F, M, L), W === !0 && j.endShadows(), this.info.autoReset === !0 && this.info.reset();
      const B = x.opaque, D = x.transmissive;
      if (m.setupLights(), L.isArrayCamera) {
        const tt = L.cameras;
        if (D.length > 0)
          for (let rt = 0, pt = tt.length; rt < pt; rt++) {
            const gt = tt[rt];
            gs(B, D, M, gt);
          }
        jt && bt.render(M);
        for (let rt = 0, pt = tt.length; rt < pt; rt++) {
          const gt = tt[rt];
          _s(x, M, gt, gt.viewport);
        }
      } else
        D.length > 0 && gs(B, D, M, L), jt && bt.render(M), _s(x, M, L);
      b !== null && (A.updateMultisampleRenderTarget(b), A.updateRenderTargetMipmap(b)), M.isScene === !0 && M.onAfterRender(S, M, L), te.resetDefaultState(), U = -1, K = null, T.pop(), T.length > 0 ? (m = T[T.length - 1], W === !0 && j.setGlobalState(S.clippingPlanes, m.state.camera)) : m = null, p.pop(), p.length > 0 ? x = p[p.length - 1] : x = null;
    };
    function ur(M, L, F, B) {
      if (M.visible === !1) return;
      if (M.layers.test(L.layers)) {
        if (M.isGroup)
          F = M.renderOrder;
        else if (M.isLOD)
          M.autoUpdate === !0 && M.update(L);
        else if (M.isLight)
          m.pushLight(M), M.castShadow && m.pushShadow(M);
        else if (M.isSprite) {
          if (!M.frustumCulled || Jt.intersectsSprite(M)) {
            B && Et.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ht);
            const rt = X.update(M), pt = M.material;
            pt.visible && x.push(M, rt, pt, F, Et.z, null);
          }
        } else if ((M.isMesh || M.isLine || M.isPoints) && (!M.frustumCulled || Jt.intersectsObject(M))) {
          const rt = X.update(M), pt = M.material;
          if (B && (M.boundingSphere !== void 0 ? (M.boundingSphere === null && M.computeBoundingSphere(), Et.copy(M.boundingSphere.center)) : (rt.boundingSphere === null && rt.computeBoundingSphere(), Et.copy(rt.boundingSphere.center)), Et.applyMatrix4(M.matrixWorld).applyMatrix4(ht)), Array.isArray(pt)) {
            const gt = rt.groups;
            for (let yt = 0, Tt = gt.length; yt < Tt; yt++) {
              const St = gt[yt], Zt = pt[St.materialIndex];
              Zt && Zt.visible && x.push(M, rt, Zt, F, Et.z, St);
            }
          } else pt.visible && x.push(M, rt, pt, F, Et.z, null);
        }
      }
      const tt = M.children;
      for (let rt = 0, pt = tt.length; rt < pt; rt++)
        ur(tt[rt], L, F, B);
    }
    function _s(M, L, F, B) {
      const D = M.opaque, tt = M.transmissive, rt = M.transparent;
      m.setupLightsView(F), W === !0 && j.setGlobalState(S.clippingPlanes, F), B && At.viewport(g.copy(B)), D.length > 0 && Mi(D, L, F), tt.length > 0 && Mi(tt, L, F), rt.length > 0 && Mi(rt, L, F), At.buffers.depth.setTest(!0), At.buffers.depth.setMask(!0), At.buffers.color.setMask(!0), At.setPolygonOffset(!1);
    }
    function gs(M, L, F, B) {
      if ((F.isScene === !0 ? F.overrideMaterial : null) !== null)
        return;
      m.state.transmissionRenderTarget[B.id] === void 0 && (m.state.transmissionRenderTarget[B.id] = new Pn(1, 1, {
        generateMipmaps: !0,
        type: Ut.has("EXT_color_buffer_half_float") || Ut.has("EXT_color_buffer_float") ? 1016 : 1009,
        minFilter: 1008,
        samples: 4,
        stencilBuffer: s,
        resolveDepthBuffer: !1,
        resolveStencilBuffer: !1,
        colorSpace: Kt.workingColorSpace
      }));
      const tt = m.state.transmissionRenderTarget[B.id], rt = B.viewport || g;
      tt.setSize(rt.z, rt.w);
      const pt = S.getRenderTarget();
      S.setRenderTarget(tt), S.getClearColor(O), V = S.getClearAlpha(), V < 1 && S.setClearColor(16777215, 0.5), S.clear(), jt && bt.render(F);
      const gt = S.toneMapping;
      S.toneMapping = 0;
      const yt = B.viewport;
      if (B.viewport !== void 0 && (B.viewport = void 0), m.setupLightsView(B), W === !0 && j.setGlobalState(S.clippingPlanes, B), Mi(M, F, B), A.updateMultisampleRenderTarget(tt), A.updateRenderTargetMipmap(tt), Ut.has("WEBGL_multisampled_render_to_texture") === !1) {
        let Tt = !1;
        for (let St = 0, Zt = L.length; St < Zt; St++) {
          const ne = L[St], ae = ne.object, Re = ne.geometry, qt = ne.material, Mt = ne.group;
          if (qt.side === 2 && ae.layers.test(B.layers)) {
            const ge = qt.side;
            qt.side = 1, qt.needsUpdate = !0, vs(ae, F, B, Re, qt, Mt), qt.side = ge, qt.needsUpdate = !0, Tt = !0;
          }
        }
        Tt === !0 && (A.updateMultisampleRenderTarget(tt), A.updateRenderTargetMipmap(tt));
      }
      S.setRenderTarget(pt), S.setClearColor(O, V), yt !== void 0 && (B.viewport = yt), S.toneMapping = gt;
    }
    function Mi(M, L, F) {
      const B = L.isScene === !0 ? L.overrideMaterial : null;
      for (let D = 0, tt = M.length; D < tt; D++) {
        const rt = M[D], pt = rt.object, gt = rt.geometry, yt = B === null ? rt.material : B, Tt = rt.group;
        pt.layers.test(F.layers) && vs(pt, L, F, gt, yt, Tt);
      }
    }
    function vs(M, L, F, B, D, tt) {
      M.onBeforeRender(S, L, F, B, D, tt), M.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse, M.matrixWorld), M.normalMatrix.getNormalMatrix(M.modelViewMatrix), D.onBeforeRender(S, L, F, B, M, tt), D.transparent === !0 && D.side === 2 && D.forceSinglePass === !1 ? (D.side = 1, D.needsUpdate = !0, S.renderBufferDirect(F, L, B, D, M, tt), D.side = 0, D.needsUpdate = !0, S.renderBufferDirect(F, L, B, D, M, tt), D.side = 2) : S.renderBufferDirect(F, L, B, D, M, tt), M.onAfterRender(S, L, F, B, D, tt);
    }
    function yi(M, L, F) {
      L.isScene !== !0 && (L = Bt);
      const B = Rt.get(M), D = m.state.lights, tt = m.state.shadowsArray, rt = D.state.version, pt = xt.getParameters(M, D.state, tt, L, F), gt = xt.getProgramCacheKey(pt);
      let yt = B.programs;
      B.environment = M.isMeshStandardMaterial ? L.environment : null, B.fog = L.fog, B.envMap = (M.isMeshStandardMaterial ? N : v).get(M.envMap || B.environment), B.envMapRotation = B.environment !== null && M.envMap === null ? L.environmentRotation : M.envMapRotation, yt === void 0 && (M.addEventListener("dispose", zt), yt = /* @__PURE__ */ new Map(), B.programs = yt);
      let Tt = yt.get(gt);
      if (Tt !== void 0) {
        if (B.currentProgram === Tt && B.lightsStateVersion === rt)
          return Ss(M, pt), Tt;
      } else
        pt.uniforms = xt.getUniforms(M), M.onBeforeCompile(pt, S), Tt = xt.acquireProgram(pt, gt), yt.set(gt, Tt), B.uniforms = pt.uniforms;
      const St = B.uniforms;
      return (!M.isShaderMaterial && !M.isRawShaderMaterial || M.clipping === !0) && (St.clippingPlanes = j.uniform), Ss(M, pt), B.needsLights = fo(M), B.lightsStateVersion = rt, B.needsLights && (St.ambientLightColor.value = D.state.ambient, St.lightProbe.value = D.state.probe, St.directionalLights.value = D.state.directional, St.directionalLightShadows.value = D.state.directionalShadow, St.spotLights.value = D.state.spot, St.spotLightShadows.value = D.state.spotShadow, St.rectAreaLights.value = D.state.rectArea, St.ltc_1.value = D.state.rectAreaLTC1, St.ltc_2.value = D.state.rectAreaLTC2, St.pointLights.value = D.state.point, St.pointLightShadows.value = D.state.pointShadow, St.hemisphereLights.value = D.state.hemi, St.directionalShadowMap.value = D.state.directionalShadowMap, St.directionalShadowMatrix.value = D.state.directionalShadowMatrix, St.spotShadowMap.value = D.state.spotShadowMap, St.spotLightMatrix.value = D.state.spotLightMatrix, St.spotLightMap.value = D.state.spotLightMap, St.pointShadowMap.value = D.state.pointShadowMap, St.pointShadowMatrix.value = D.state.pointShadowMatrix), B.currentProgram = Tt, B.uniformsList = null, Tt;
    }
    function xs(M) {
      if (M.uniformsList === null) {
        const L = M.currentProgram.getUniforms();
        M.uniformsList = Ji.seqWithValue(L.seq, M.uniforms);
      }
      return M.uniformsList;
    }
    function Ss(M, L) {
      const F = Rt.get(M);
      F.outputColorSpace = L.outputColorSpace, F.batching = L.batching, F.batchingColor = L.batchingColor, F.instancing = L.instancing, F.instancingColor = L.instancingColor, F.instancingMorph = L.instancingMorph, F.skinning = L.skinning, F.morphTargets = L.morphTargets, F.morphNormals = L.morphNormals, F.morphColors = L.morphColors, F.morphTargetsCount = L.morphTargetsCount, F.numClippingPlanes = L.numClippingPlanes, F.numIntersection = L.numClipIntersection, F.vertexAlphas = L.vertexAlphas, F.vertexTangents = L.vertexTangents, F.toneMapping = L.toneMapping;
    }
    function ho(M, L, F, B, D) {
      L.isScene !== !0 && (L = Bt), A.resetTextureUnits();
      const tt = L.fog, rt = B.isMeshStandardMaterial ? L.environment : null, pt = b === null ? S.outputColorSpace : b.isXRRenderTarget === !0 ? b.texture.colorSpace : gn, gt = (B.isMeshStandardMaterial ? N : v).get(B.envMap || rt), yt = B.vertexColors === !0 && !!F.attributes.color && F.attributes.color.itemSize === 4, Tt = !!F.attributes.tangent && (!!B.normalMap || B.anisotropy > 0), St = !!F.morphAttributes.position, Zt = !!F.morphAttributes.normal, ne = !!F.morphAttributes.color;
      let ae = 0;
      B.toneMapped && (b === null || b.isXRRenderTarget === !0) && (ae = S.toneMapping);
      const Re = F.morphAttributes.position || F.morphAttributes.normal || F.morphAttributes.color, qt = Re !== void 0 ? Re.length : 0, Mt = Rt.get(B), ge = m.state.lights;
      if (W === !0 && ($ === !0 || M !== K)) {
        const Fe = M === K && B.id === U;
        j.setState(B, M, Fe);
      }
      let Yt = !1;
      B.version === Mt.__version ? (Mt.needsLights && Mt.lightsStateVersion !== ge.state.version || Mt.outputColorSpace !== pt || D.isBatchedMesh && Mt.batching === !1 || !D.isBatchedMesh && Mt.batching === !0 || D.isBatchedMesh && Mt.batchingColor === !0 && D.colorTexture === null || D.isBatchedMesh && Mt.batchingColor === !1 && D.colorTexture !== null || D.isInstancedMesh && Mt.instancing === !1 || !D.isInstancedMesh && Mt.instancing === !0 || D.isSkinnedMesh && Mt.skinning === !1 || !D.isSkinnedMesh && Mt.skinning === !0 || D.isInstancedMesh && Mt.instancingColor === !0 && D.instanceColor === null || D.isInstancedMesh && Mt.instancingColor === !1 && D.instanceColor !== null || D.isInstancedMesh && Mt.instancingMorph === !0 && D.morphTexture === null || D.isInstancedMesh && Mt.instancingMorph === !1 && D.morphTexture !== null || Mt.envMap !== gt || B.fog === !0 && Mt.fog !== tt || Mt.numClippingPlanes !== void 0 && (Mt.numClippingPlanes !== j.numPlanes || Mt.numIntersection !== j.numIntersection) || Mt.vertexAlphas !== yt || Mt.vertexTangents !== Tt || Mt.morphTargets !== St || Mt.morphNormals !== Zt || Mt.morphColors !== ne || Mt.toneMapping !== ae || Mt.morphTargetsCount !== qt) && (Yt = !0) : (Yt = !0, Mt.__version = B.version);
      let Ve = Mt.currentProgram;
      Yt === !0 && (Ve = yi(B, L, D));
      let Ln = !1, Ce = !1, dr = !1;
      const le = Ve.getUniforms(), on = Mt.uniforms;
      if (At.useProgram(Ve.program) && (Ln = !0, Ce = !0, dr = !0), B.id !== U && (U = B.id, Ce = !0), Ln || K !== M) {
        Vt.reverseDepthBuffer ? (_t.copy(M.projectionMatrix), vo(_t), xo(_t), le.setValue(R, "projectionMatrix", _t)) : le.setValue(R, "projectionMatrix", M.projectionMatrix), le.setValue(R, "viewMatrix", M.matrixWorldInverse);
        const Fe = le.map.cameraPosition;
        Fe !== void 0 && Fe.setValue(R, Ct.setFromMatrixPosition(M.matrixWorld)), Vt.logarithmicDepthBuffer && le.setValue(
          R,
          "logDepthBufFC",
          2 / (Math.log(M.far + 1) / Math.LN2)
        ), (B.isMeshPhongMaterial || B.isMeshToonMaterial || B.isMeshLambertMaterial || B.isMeshBasicMaterial || B.isMeshStandardMaterial || B.isShaderMaterial) && le.setValue(R, "isOrthographic", M.isOrthographicCamera === !0), K !== M && (K = M, Ce = !0, dr = !0);
      }
      if (D.isSkinnedMesh) {
        le.setOptional(R, D, "bindMatrix"), le.setOptional(R, D, "bindMatrixInverse");
        const Fe = D.skeleton;
        Fe && (Fe.boneTexture === null && Fe.computeBoneTexture(), le.setValue(R, "boneTexture", Fe.boneTexture, A));
      }
      D.isBatchedMesh && (le.setOptional(R, D, "batchingTexture"), le.setValue(R, "batchingTexture", D._matricesTexture, A), le.setOptional(R, D, "batchingIdTexture"), le.setValue(R, "batchingIdTexture", D._indirectTexture, A), le.setOptional(R, D, "batchingColorTexture"), D._colorsTexture !== null && le.setValue(R, "batchingColorTexture", D._colorsTexture, A));
      const fr = F.morphAttributes;
      if ((fr.position !== void 0 || fr.normal !== void 0 || fr.color !== void 0) && wt.update(D, F, Ve), (Ce || Mt.receiveShadow !== D.receiveShadow) && (Mt.receiveShadow = D.receiveShadow, le.setValue(R, "receiveShadow", D.receiveShadow)), B.isMeshGouraudMaterial && B.envMap !== null && (on.envMap.value = gt, on.flipEnvMap.value = gt.isCubeTexture && gt.isRenderTargetTexture === !1 ? -1 : 1), B.isMeshStandardMaterial && B.envMap === null && L.environment !== null && (on.envMapIntensity.value = L.environmentIntensity), Ce && (le.setValue(R, "toneMappingExposure", S.toneMappingExposure), Mt.needsLights && uo(on, dr), tt && B.fog === !0 && nt.refreshFogUniforms(on, tt), nt.refreshMaterialUniforms(on, B, Q, G, m.state.transmissionRenderTarget[M.id]), Ji.upload(R, xs(Mt), on, A)), B.isShaderMaterial && B.uniformsNeedUpdate === !0 && (Ji.upload(R, xs(Mt), on, A), B.uniformsNeedUpdate = !1), B.isSpriteMaterial && le.setValue(R, "center", D.center), le.setValue(R, "modelViewMatrix", D.modelViewMatrix), le.setValue(R, "normalMatrix", D.normalMatrix), le.setValue(R, "modelMatrix", D.matrixWorld), B.isShaderMaterial || B.isRawShaderMaterial) {
        const Fe = B.uniformsGroups;
        for (let pr = 0, po = Fe.length; pr < po; pr++) {
          const Ms = Fe[pr];
          P.update(Ms, Ve), P.bind(Ms, Ve);
        }
      }
      return Ve;
    }
    function uo(M, L) {
      M.ambientLightColor.needsUpdate = L, M.lightProbe.needsUpdate = L, M.directionalLights.needsUpdate = L, M.directionalLightShadows.needsUpdate = L, M.pointLights.needsUpdate = L, M.pointLightShadows.needsUpdate = L, M.spotLights.needsUpdate = L, M.spotLightShadows.needsUpdate = L, M.rectAreaLights.needsUpdate = L, M.hemisphereLights.needsUpdate = L;
    }
    function fo(M) {
      return M.isMeshLambertMaterial || M.isMeshToonMaterial || M.isMeshPhongMaterial || M.isMeshStandardMaterial || M.isShadowMaterial || M.isShaderMaterial && M.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return C;
    }, this.getActiveMipmapLevel = function() {
      return w;
    }, this.getRenderTarget = function() {
      return b;
    }, this.setRenderTargetTextures = function(M, L, F) {
      Rt.get(M.texture).__webglTexture = L, Rt.get(M.depthTexture).__webglTexture = F;
      const B = Rt.get(M);
      B.__hasExternalTextures = !0, B.__autoAllocateDepthBuffer = F === void 0, B.__autoAllocateDepthBuffer || Ut.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), B.__useRenderToTexture = !1);
    }, this.setRenderTargetFramebuffer = function(M, L) {
      const F = Rt.get(M);
      F.__webglFramebuffer = L, F.__useDefaultFramebuffer = L === void 0;
    }, this.setRenderTarget = function(M, L = 0, F = 0) {
      b = M, C = L, w = F;
      let B = !0, D = null, tt = !1, rt = !1;
      if (M) {
        const gt = Rt.get(M);
        if (gt.__useDefaultFramebuffer !== void 0)
          At.bindFramebuffer(R.FRAMEBUFFER, null), B = !1;
        else if (gt.__webglFramebuffer === void 0)
          A.setupRenderTarget(M);
        else if (gt.__hasExternalTextures)
          A.rebindTextures(M, Rt.get(M.texture).__webglTexture, Rt.get(M.depthTexture).__webglTexture);
        else if (M.depthBuffer) {
          const St = M.depthTexture;
          if (gt.__boundDepthTexture !== St) {
            if (St !== null && Rt.has(St) && (M.width !== St.image.width || M.height !== St.image.height))
              throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            A.setupDepthRenderbuffer(M);
          }
        }
        const yt = M.texture;
        (yt.isData3DTexture || yt.isDataArrayTexture || yt.isCompressedArrayTexture) && (rt = !0);
        const Tt = Rt.get(M).__webglFramebuffer;
        M.isWebGLCubeRenderTarget ? (Array.isArray(Tt[L]) ? D = Tt[L][F] : D = Tt[L], tt = !0) : M.samples > 0 && A.useMultisampledRTT(M) === !1 ? D = Rt.get(M).__webglMultisampledFramebuffer : Array.isArray(Tt) ? D = Tt[F] : D = Tt, g.copy(M.viewport), E.copy(M.scissor), z = M.scissorTest;
      } else
        g.copy(ct).multiplyScalar(Q).floor(), E.copy(vt).multiplyScalar(Q).floor(), z = Wt;
      if (At.bindFramebuffer(R.FRAMEBUFFER, D) && B && At.drawBuffers(M, D), At.viewport(g), At.scissor(E), At.setScissorTest(z), tt) {
        const gt = Rt.get(M.texture);
        R.framebufferTexture2D(R.FRAMEBUFFER, R.COLOR_ATTACHMENT0, R.TEXTURE_CUBE_MAP_POSITIVE_X + L, gt.__webglTexture, F);
      } else if (rt) {
        const gt = Rt.get(M.texture), yt = L || 0;
        R.framebufferTextureLayer(R.FRAMEBUFFER, R.COLOR_ATTACHMENT0, gt.__webglTexture, F || 0, yt);
      }
      U = -1;
    }, this.readRenderTargetPixels = function(M, L, F, B, D, tt, rt) {
      if (!(M && M.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let pt = Rt.get(M).__webglFramebuffer;
      if (M.isWebGLCubeRenderTarget && rt !== void 0 && (pt = pt[rt]), pt) {
        At.bindFramebuffer(R.FRAMEBUFFER, pt);
        try {
          const gt = M.texture, yt = gt.format, Tt = gt.type;
          if (!Vt.textureFormatReadable(yt)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!Vt.textureTypeReadable(Tt)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          L >= 0 && L <= M.width - B && F >= 0 && F <= M.height - D && R.readPixels(L, F, B, D, Pt.convert(yt), Pt.convert(Tt), tt);
        } finally {
          const gt = b !== null ? Rt.get(b).__webglFramebuffer : null;
          At.bindFramebuffer(R.FRAMEBUFFER, gt);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(M, L, F, B, D, tt, rt) {
      if (!(M && M.isWebGLRenderTarget))
        throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let pt = Rt.get(M).__webglFramebuffer;
      if (M.isWebGLCubeRenderTarget && rt !== void 0 && (pt = pt[rt]), pt) {
        const gt = M.texture, yt = gt.format, Tt = gt.type;
        if (!Vt.textureFormatReadable(yt))
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
        if (!Vt.textureTypeReadable(Tt))
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
        if (L >= 0 && L <= M.width - B && F >= 0 && F <= M.height - D) {
          At.bindFramebuffer(R.FRAMEBUFFER, pt);
          const St = R.createBuffer();
          R.bindBuffer(R.PIXEL_PACK_BUFFER, St), R.bufferData(R.PIXEL_PACK_BUFFER, tt.byteLength, R.STREAM_READ), R.readPixels(L, F, B, D, Pt.convert(yt), Pt.convert(Tt), 0);
          const Zt = b !== null ? Rt.get(b).__webglFramebuffer : null;
          At.bindFramebuffer(R.FRAMEBUFFER, Zt);
          const ne = R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return R.flush(), await go(R, ne, 4), R.bindBuffer(R.PIXEL_PACK_BUFFER, St), R.getBufferSubData(R.PIXEL_PACK_BUFFER, 0, tt), R.deleteBuffer(St), R.deleteSync(ne), tt;
        } else
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
      }
    }, this.copyFramebufferToTexture = function(M, L = null, F = 0) {
      M.isTexture !== !0 && (Ki("WebGLRenderer: copyFramebufferToTexture function signature has changed."), L = arguments[0] || null, M = arguments[1]);
      const B = Math.pow(2, -F), D = Math.floor(M.image.width * B), tt = Math.floor(M.image.height * B), rt = L !== null ? L.x : 0, pt = L !== null ? L.y : 0;
      A.setTexture2D(M, 0), R.copyTexSubImage2D(R.TEXTURE_2D, F, 0, 0, rt, pt, D, tt), At.unbindTexture();
    }, this.copyTextureToTexture = function(M, L, F = null, B = null, D = 0) {
      M.isTexture !== !0 && (Ki("WebGLRenderer: copyTextureToTexture function signature has changed."), B = arguments[0] || null, M = arguments[1], L = arguments[2], D = arguments[3] || 0, F = null);
      let tt, rt, pt, gt, yt, Tt;
      F !== null ? (tt = F.max.x - F.min.x, rt = F.max.y - F.min.y, pt = F.min.x, gt = F.min.y) : (tt = M.image.width, rt = M.image.height, pt = 0, gt = 0), B !== null ? (yt = B.x, Tt = B.y) : (yt = 0, Tt = 0);
      const St = Pt.convert(L.format), Zt = Pt.convert(L.type);
      A.setTexture2D(L, 0), R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL, L.flipY), R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL, L.premultiplyAlpha), R.pixelStorei(R.UNPACK_ALIGNMENT, L.unpackAlignment);
      const ne = R.getParameter(R.UNPACK_ROW_LENGTH), ae = R.getParameter(R.UNPACK_IMAGE_HEIGHT), Re = R.getParameter(R.UNPACK_SKIP_PIXELS), qt = R.getParameter(R.UNPACK_SKIP_ROWS), Mt = R.getParameter(R.UNPACK_SKIP_IMAGES), ge = M.isCompressedTexture ? M.mipmaps[D] : M.image;
      R.pixelStorei(R.UNPACK_ROW_LENGTH, ge.width), R.pixelStorei(R.UNPACK_IMAGE_HEIGHT, ge.height), R.pixelStorei(R.UNPACK_SKIP_PIXELS, pt), R.pixelStorei(R.UNPACK_SKIP_ROWS, gt), M.isDataTexture ? R.texSubImage2D(R.TEXTURE_2D, D, yt, Tt, tt, rt, St, Zt, ge.data) : M.isCompressedTexture ? R.compressedTexSubImage2D(R.TEXTURE_2D, D, yt, Tt, ge.width, ge.height, St, ge.data) : R.texSubImage2D(R.TEXTURE_2D, D, yt, Tt, tt, rt, St, Zt, ge), R.pixelStorei(R.UNPACK_ROW_LENGTH, ne), R.pixelStorei(R.UNPACK_IMAGE_HEIGHT, ae), R.pixelStorei(R.UNPACK_SKIP_PIXELS, Re), R.pixelStorei(R.UNPACK_SKIP_ROWS, qt), R.pixelStorei(R.UNPACK_SKIP_IMAGES, Mt), D === 0 && L.generateMipmaps && R.generateMipmap(R.TEXTURE_2D), At.unbindTexture();
    }, this.copyTextureToTexture3D = function(M, L, F = null, B = null, D = 0) {
      M.isTexture !== !0 && (Ki("WebGLRenderer: copyTextureToTexture3D function signature has changed."), F = arguments[0] || null, B = arguments[1] || null, M = arguments[2], L = arguments[3], D = arguments[4] || 0);
      let tt, rt, pt, gt, yt, Tt, St, Zt, ne;
      const ae = M.isCompressedTexture ? M.mipmaps[D] : M.image;
      F !== null ? (tt = F.max.x - F.min.x, rt = F.max.y - F.min.y, pt = F.max.z - F.min.z, gt = F.min.x, yt = F.min.y, Tt = F.min.z) : (tt = ae.width, rt = ae.height, pt = ae.depth, gt = 0, yt = 0, Tt = 0), B !== null ? (St = B.x, Zt = B.y, ne = B.z) : (St = 0, Zt = 0, ne = 0);
      const Re = Pt.convert(L.format), qt = Pt.convert(L.type);
      let Mt;
      if (L.isData3DTexture)
        A.setTexture3D(L, 0), Mt = R.TEXTURE_3D;
      else if (L.isDataArrayTexture || L.isCompressedArrayTexture)
        A.setTexture2DArray(L, 0), Mt = R.TEXTURE_2D_ARRAY;
      else {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        return;
      }
      R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL, L.flipY), R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL, L.premultiplyAlpha), R.pixelStorei(R.UNPACK_ALIGNMENT, L.unpackAlignment);
      const ge = R.getParameter(R.UNPACK_ROW_LENGTH), Yt = R.getParameter(R.UNPACK_IMAGE_HEIGHT), Ve = R.getParameter(R.UNPACK_SKIP_PIXELS), Ln = R.getParameter(R.UNPACK_SKIP_ROWS), Ce = R.getParameter(R.UNPACK_SKIP_IMAGES);
      R.pixelStorei(R.UNPACK_ROW_LENGTH, ae.width), R.pixelStorei(R.UNPACK_IMAGE_HEIGHT, ae.height), R.pixelStorei(R.UNPACK_SKIP_PIXELS, gt), R.pixelStorei(R.UNPACK_SKIP_ROWS, yt), R.pixelStorei(R.UNPACK_SKIP_IMAGES, Tt), M.isDataTexture || M.isData3DTexture ? R.texSubImage3D(Mt, D, St, Zt, ne, tt, rt, pt, Re, qt, ae.data) : L.isCompressedArrayTexture ? R.compressedTexSubImage3D(Mt, D, St, Zt, ne, tt, rt, pt, Re, ae.data) : R.texSubImage3D(Mt, D, St, Zt, ne, tt, rt, pt, Re, qt, ae), R.pixelStorei(R.UNPACK_ROW_LENGTH, ge), R.pixelStorei(R.UNPACK_IMAGE_HEIGHT, Yt), R.pixelStorei(R.UNPACK_SKIP_PIXELS, Ve), R.pixelStorei(R.UNPACK_SKIP_ROWS, Ln), R.pixelStorei(R.UNPACK_SKIP_IMAGES, Ce), D === 0 && L.generateMipmaps && R.generateMipmap(Mt), At.unbindTexture();
    }, this.initRenderTarget = function(M) {
      Rt.get(M).__webglFramebuffer === void 0 && A.setupRenderTarget(M);
    }, this.initTexture = function(M) {
      M.isCubeTexture ? A.setTextureCube(M, 0) : M.isData3DTexture ? A.setTexture3D(M, 0) : M.isDataArrayTexture || M.isCompressedArrayTexture ? A.setTexture2DArray(M, 0) : A.setTexture2D(M, 0), At.unbindTexture();
    }, this.resetState = function() {
      C = 0, w = 0, b = null, At.reset(), te.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return 2e3;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(t) {
    this._outputColorSpace = t;
    const e = this.getContext();
    e.drawingBufferColorSpace = t === ns ? "display-p3" : "srgb", e.unpackColorSpace = Kt.workingColorSpace === sr ? "display-p3" : "srgb";
  }
}
class Xa extends _e {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new qe(), this.environmentIntensity = 1, this.environmentRotation = new qe(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(t, e) {
    return super.copy(t, e), t.background !== null && (this.background = t.background.clone()), t.environment !== null && (this.environment = t.environment.clone()), t.fog !== null && (this.fog = t.fog.clone()), this.backgroundBlurriness = t.backgroundBlurriness, this.backgroundIntensity = t.backgroundIntensity, this.backgroundRotation.copy(t.backgroundRotation), this.environmentIntensity = t.environmentIntensity, this.environmentRotation.copy(t.environmentRotation), t.overrideMaterial !== null && (this.overrideMaterial = t.overrideMaterial.clone()), this.matrixAutoUpdate = t.matrixAutoUpdate, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return this.fog !== null && (e.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (e.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (e.object.backgroundIntensity = this.backgroundIntensity), e.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (e.object.environmentIntensity = this.environmentIntensity), e.object.environmentRotation = this.environmentRotation.toArray(), e;
  }
}
class Pd {
  constructor(t, e) {
    this.isInterleavedBuffer = !0, this.array = t, this.stride = e, this.count = t !== void 0 ? t.length / e : 0, this.usage = 35044, this.updateRanges = [], this.version = 0, this.uuid = an();
  }
  onUploadCallback() {
  }
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  setUsage(t) {
    return this.usage = t, this;
  }
  addUpdateRange(t, e) {
    this.updateRanges.push({ start: t, count: e });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(t) {
    return this.array = new t.array.constructor(t.array), this.count = t.count, this.stride = t.stride, this.usage = t.usage, this;
  }
  copyAt(t, e, n) {
    t *= this.stride, n *= e.stride;
    for (let r = 0, s = this.stride; r < s; r++)
      this.array[t + r] = e.array[n + r];
    return this;
  }
  set(t, e = 0) {
    return this.array.set(t, e), this;
  }
  clone(t) {
    t.arrayBuffers === void 0 && (t.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = an()), t.arrayBuffers[this.array.buffer._uuid] === void 0 && (t.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const e = new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(e, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(t) {
    return this.onUploadCallback = t, this;
  }
  toJSON(t) {
    return t.arrayBuffers === void 0 && (t.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = an()), t.arrayBuffers[this.array.buffer._uuid] === void 0 && (t.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
}
const Me = /* @__PURE__ */ new I();
class nr {
  constructor(t, e, n, r = !1) {
    this.isInterleavedBufferAttribute = !0, this.name = "", this.data = t, this.itemSize = e, this.offset = n, this.normalized = r;
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(t) {
    this.data.needsUpdate = t;
  }
  applyMatrix4(t) {
    for (let e = 0, n = this.data.count; e < n; e++)
      Me.fromBufferAttribute(this, e), Me.applyMatrix4(t), this.setXYZ(e, Me.x, Me.y, Me.z);
    return this;
  }
  applyNormalMatrix(t) {
    for (let e = 0, n = this.count; e < n; e++)
      Me.fromBufferAttribute(this, e), Me.applyNormalMatrix(t), this.setXYZ(e, Me.x, Me.y, Me.z);
    return this;
  }
  transformDirection(t) {
    for (let e = 0, n = this.count; e < n; e++)
      Me.fromBufferAttribute(this, e), Me.transformDirection(t), this.setXYZ(e, Me.x, Me.y, Me.z);
    return this;
  }
  getComponent(t, e) {
    let n = this.array[t * this.data.stride + this.offset + e];
    return this.normalized && (n = Je(n, this.array)), n;
  }
  setComponent(t, e, n) {
    return this.normalized && (n = Qt(n, this.array)), this.data.array[t * this.data.stride + this.offset + e] = n, this;
  }
  setX(t, e) {
    return this.normalized && (e = Qt(e, this.array)), this.data.array[t * this.data.stride + this.offset] = e, this;
  }
  setY(t, e) {
    return this.normalized && (e = Qt(e, this.array)), this.data.array[t * this.data.stride + this.offset + 1] = e, this;
  }
  setZ(t, e) {
    return this.normalized && (e = Qt(e, this.array)), this.data.array[t * this.data.stride + this.offset + 2] = e, this;
  }
  setW(t, e) {
    return this.normalized && (e = Qt(e, this.array)), this.data.array[t * this.data.stride + this.offset + 3] = e, this;
  }
  getX(t) {
    let e = this.data.array[t * this.data.stride + this.offset];
    return this.normalized && (e = Je(e, this.array)), e;
  }
  getY(t) {
    let e = this.data.array[t * this.data.stride + this.offset + 1];
    return this.normalized && (e = Je(e, this.array)), e;
  }
  getZ(t) {
    let e = this.data.array[t * this.data.stride + this.offset + 2];
    return this.normalized && (e = Je(e, this.array)), e;
  }
  getW(t) {
    let e = this.data.array[t * this.data.stride + this.offset + 3];
    return this.normalized && (e = Je(e, this.array)), e;
  }
  setXY(t, e, n) {
    return t = t * this.data.stride + this.offset, this.normalized && (e = Qt(e, this.array), n = Qt(n, this.array)), this.data.array[t + 0] = e, this.data.array[t + 1] = n, this;
  }
  setXYZ(t, e, n, r) {
    return t = t * this.data.stride + this.offset, this.normalized && (e = Qt(e, this.array), n = Qt(n, this.array), r = Qt(r, this.array)), this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = r, this;
  }
  setXYZW(t, e, n, r, s) {
    return t = t * this.data.stride + this.offset, this.normalized && (e = Qt(e, this.array), n = Qt(n, this.array), r = Qt(r, this.array), s = Qt(s, this.array)), this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = r, this.data.array[t + 3] = s, this;
  }
  clone(t) {
    if (t === void 0) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const e = [];
      for (let n = 0; n < this.count; n++) {
        const r = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++)
          e.push(this.data.array[r + s]);
      }
      return new Xe(new this.array.constructor(e), this.itemSize, this.normalized);
    } else
      return t.interleavedBuffers === void 0 && (t.interleavedBuffers = {}), t.interleavedBuffers[this.data.uuid] === void 0 && (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)), new nr(t.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(t) {
    if (t === void 0) {
      console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
      const e = [];
      for (let n = 0; n < this.count; n++) {
        const r = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++)
          e.push(this.data.array[r + s]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: e,
        normalized: this.normalized
      };
    } else
      return t.interleavedBuffers === void 0 && (t.interleavedBuffers = {}), t.interleavedBuffers[this.data.uuid] === void 0 && (t.interleavedBuffers[this.data.uuid] = this.data.toJSON(t)), {
        isInterleavedBufferAttribute: !0,
        itemSize: this.itemSize,
        data: this.data.uuid,
        offset: this.offset,
        normalized: this.normalized
      };
  }
}
class qa extends ni {
  constructor(t) {
    super(), this.isSpriteMaterial = !0, this.type = "SpriteMaterial", this.color = new Gt(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.rotation = t.rotation, this.sizeAttenuation = t.sizeAttenuation, this.fog = t.fog, this;
  }
}
let qn;
const ui = /* @__PURE__ */ new I(), Yn = /* @__PURE__ */ new I(), Kn = /* @__PURE__ */ new I(), Jn = /* @__PURE__ */ new ot(), di = /* @__PURE__ */ new ot(), Ya = /* @__PURE__ */ new re(), Hi = /* @__PURE__ */ new I(), fi = /* @__PURE__ */ new I(), Wi = /* @__PURE__ */ new I(), ha = /* @__PURE__ */ new ot(), Xr = /* @__PURE__ */ new ot(), ua = /* @__PURE__ */ new ot();
class Id extends _e {
  constructor(t = new qa()) {
    if (super(), this.isSprite = !0, this.type = "Sprite", qn === void 0) {
      qn = new Ge();
      const e = new Float32Array([
        -0.5,
        -0.5,
        0,
        0,
        0,
        0.5,
        -0.5,
        0,
        1,
        0,
        0.5,
        0.5,
        0,
        1,
        1,
        -0.5,
        0.5,
        0,
        0,
        1
      ]), n = new Pd(e, 5);
      qn.setIndex([0, 1, 2, 0, 2, 3]), qn.setAttribute("position", new nr(n, 3, 0, !1)), qn.setAttribute("uv", new nr(n, 2, 3, !1));
    }
    this.geometry = qn, this.material = t, this.center = new ot(0.5, 0.5);
  }
  raycast(t, e) {
    t.camera === null && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), Yn.setFromMatrixScale(this.matrixWorld), Ya.copy(t.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse, this.matrixWorld), Kn.setFromMatrixPosition(this.modelViewMatrix), t.camera.isPerspectiveCamera && this.material.sizeAttenuation === !1 && Yn.multiplyScalar(-Kn.z);
    const n = this.material.rotation;
    let r, s;
    n !== 0 && (s = Math.cos(n), r = Math.sin(n));
    const a = this.center;
    Xi(Hi.set(-0.5, -0.5, 0), Kn, a, Yn, r, s), Xi(fi.set(0.5, -0.5, 0), Kn, a, Yn, r, s), Xi(Wi.set(0.5, 0.5, 0), Kn, a, Yn, r, s), ha.set(0, 0), Xr.set(1, 0), ua.set(1, 1);
    let o = t.ray.intersectTriangle(Hi, fi, Wi, !1, ui);
    if (o === null && (Xi(fi.set(-0.5, 0.5, 0), Kn, a, Yn, r, s), Xr.set(0, 1), o = t.ray.intersectTriangle(Hi, Wi, fi, !1, ui), o === null))
      return;
    const l = t.ray.origin.distanceTo(ui);
    l < t.near || l > t.far || e.push({
      distance: l,
      point: ui.clone(),
      uv: Oe.getInterpolation(ui, Hi, fi, Wi, ha, Xr, ua, new ot()),
      face: null,
      object: this
    });
  }
  copy(t, e) {
    return super.copy(t, e), t.center !== void 0 && this.center.copy(t.center), this.material = t.material, this;
  }
}
function Xi(i, t, e, n, r, s) {
  Jn.subVectors(i, e).addScalar(0.5).multiply(n), r !== void 0 ? (di.x = s * Jn.x - r * Jn.y, di.y = r * Jn.x + s * Jn.y) : di.copy(Jn), i.copy(t), i.x += di.x, i.y += di.y, i.applyMatrix4(Ya);
}
class Ld extends Ee {
  constructor(t, e, n, r, s, a, o, l, c) {
    super(t, e, n, r, s, a, o, l, c), this.isCanvasTexture = !0, this.needsUpdate = !0;
  }
}
class $e {
  constructor() {
    this.type = "Curve", this.arcLengthDivisions = 200;
  }
  // Virtual base class method to overwrite and implement in subclasses
  //	- t [0 .. 1]
  getPoint() {
    return console.warn("THREE.Curve: .getPoint() not implemented."), null;
  }
  // Get point at relative position in curve according to arc length
  // - u [0 .. 1]
  getPointAt(t, e) {
    const n = this.getUtoTmapping(t);
    return this.getPoint(n, e);
  }
  // Get sequence of points using getPoint( t )
  getPoints(t = 5) {
    const e = [];
    for (let n = 0; n <= t; n++)
      e.push(this.getPoint(n / t));
    return e;
  }
  // Get sequence of points using getPointAt( u )
  getSpacedPoints(t = 5) {
    const e = [];
    for (let n = 0; n <= t; n++)
      e.push(this.getPointAt(n / t));
    return e;
  }
  // Get total curve arc length
  getLength() {
    const t = this.getLengths();
    return t[t.length - 1];
  }
  // Get list of cumulative segment lengths
  getLengths(t = this.arcLengthDivisions) {
    if (this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate)
      return this.cacheArcLengths;
    this.needsUpdate = !1;
    const e = [];
    let n, r = this.getPoint(0), s = 0;
    e.push(0);
    for (let a = 1; a <= t; a++)
      n = this.getPoint(a / t), s += n.distanceTo(r), e.push(s), r = n;
    return this.cacheArcLengths = e, e;
  }
  updateArcLengths() {
    this.needsUpdate = !0, this.getLengths();
  }
  // Given u ( 0 .. 1 ), get a t to find p. This gives you points which are equidistant
  getUtoTmapping(t, e) {
    const n = this.getLengths();
    let r = 0;
    const s = n.length;
    let a;
    e ? a = e : a = t * n[s - 1];
    let o = 0, l = s - 1, c;
    for (; o <= l; )
      if (r = Math.floor(o + (l - o) / 2), c = n[r] - a, c < 0)
        o = r + 1;
      else if (c > 0)
        l = r - 1;
      else {
        l = r;
        break;
      }
    if (r = l, n[r] === a)
      return r / (s - 1);
    const h = n[r], d = n[r + 1] - h, f = (a - h) / d;
    return (r + f) / (s - 1);
  }
  // Returns a unit vector tangent at t
  // In case any sub curve does not implement its tangent derivation,
  // 2 points a small delta apart will be used to find its gradient
  // which seems to give a reasonable approximation
  getTangent(t, e) {
    let r = t - 1e-4, s = t + 1e-4;
    r < 0 && (r = 0), s > 1 && (s = 1);
    const a = this.getPoint(r), o = this.getPoint(s), l = e || (a.isVector2 ? new ot() : new I());
    return l.copy(o).sub(a).normalize(), l;
  }
  getTangentAt(t, e) {
    const n = this.getUtoTmapping(t);
    return this.getTangent(n, e);
  }
  computeFrenetFrames(t, e) {
    const n = new I(), r = [], s = [], a = [], o = new I(), l = new re();
    for (let f = 0; f <= t; f++) {
      const _ = f / t;
      r[f] = this.getTangentAt(_, new I());
    }
    s[0] = new I(), a[0] = new I();
    let c = Number.MAX_VALUE;
    const h = Math.abs(r[0].x), u = Math.abs(r[0].y), d = Math.abs(r[0].z);
    h <= c && (c = h, n.set(1, 0, 0)), u <= c && (c = u, n.set(0, 1, 0)), d <= c && n.set(0, 0, 1), o.crossVectors(r[0], n).normalize(), s[0].crossVectors(r[0], o), a[0].crossVectors(r[0], s[0]);
    for (let f = 1; f <= t; f++) {
      if (s[f] = s[f - 1].clone(), a[f] = a[f - 1].clone(), o.crossVectors(r[f - 1], r[f]), o.length() > Number.EPSILON) {
        o.normalize();
        const _ = Math.acos(ve(r[f - 1].dot(r[f]), -1, 1));
        s[f].applyMatrix4(l.makeRotationAxis(o, _));
      }
      a[f].crossVectors(r[f], s[f]);
    }
    if (e === !0) {
      let f = Math.acos(ve(s[0].dot(s[t]), -1, 1));
      f /= t, r[0].dot(o.crossVectors(s[0], s[t])) > 0 && (f = -f);
      for (let _ = 1; _ <= t; _++)
        s[_].applyMatrix4(l.makeRotationAxis(r[_], f * _)), a[_].crossVectors(r[_], s[_]);
    }
    return {
      tangents: r,
      normals: s,
      binormals: a
    };
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.arcLengthDivisions = t.arcLengthDivisions, this;
  }
  toJSON() {
    const t = {
      metadata: {
        version: 4.6,
        type: "Curve",
        generator: "Curve.toJSON"
      }
    };
    return t.arcLengthDivisions = this.arcLengthDivisions, t.type = this.type, t;
  }
  fromJSON(t) {
    return this.arcLengthDivisions = t.arcLengthDivisions, this;
  }
}
class as extends $e {
  constructor(t = 0, e = 0, n = 1, r = 1, s = 0, a = Math.PI * 2, o = !1, l = 0) {
    super(), this.isEllipseCurve = !0, this.type = "EllipseCurve", this.aX = t, this.aY = e, this.xRadius = n, this.yRadius = r, this.aStartAngle = s, this.aEndAngle = a, this.aClockwise = o, this.aRotation = l;
  }
  getPoint(t, e = new ot()) {
    const n = e, r = Math.PI * 2;
    let s = this.aEndAngle - this.aStartAngle;
    const a = Math.abs(s) < Number.EPSILON;
    for (; s < 0; ) s += r;
    for (; s > r; ) s -= r;
    s < Number.EPSILON && (a ? s = 0 : s = r), this.aClockwise === !0 && !a && (s === r ? s = -r : s = s - r);
    const o = this.aStartAngle + t * s;
    let l = this.aX + this.xRadius * Math.cos(o), c = this.aY + this.yRadius * Math.sin(o);
    if (this.aRotation !== 0) {
      const h = Math.cos(this.aRotation), u = Math.sin(this.aRotation), d = l - this.aX, f = c - this.aY;
      l = d * h - f * u + this.aX, c = d * u + f * h + this.aY;
    }
    return n.set(l, c);
  }
  copy(t) {
    return super.copy(t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.aX = this.aX, t.aY = this.aY, t.xRadius = this.xRadius, t.yRadius = this.yRadius, t.aStartAngle = this.aStartAngle, t.aEndAngle = this.aEndAngle, t.aClockwise = this.aClockwise, t.aRotation = this.aRotation, t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this;
  }
}
class Dd extends as {
  constructor(t, e, n, r, s, a) {
    super(t, e, n, n, r, s, a), this.isArcCurve = !0, this.type = "ArcCurve";
  }
}
function os() {
  let i = 0, t = 0, e = 0, n = 0;
  function r(s, a, o, l) {
    i = s, t = o, e = -3 * s + 3 * a - 2 * o - l, n = 2 * s - 2 * a + o + l;
  }
  return {
    initCatmullRom: function(s, a, o, l, c) {
      r(a, o, c * (o - s), c * (l - a));
    },
    initNonuniformCatmullRom: function(s, a, o, l, c, h, u) {
      let d = (a - s) / c - (o - s) / (c + h) + (o - a) / h, f = (o - a) / h - (l - a) / (h + u) + (l - o) / u;
      d *= h, f *= h, r(a, o, d, f);
    },
    calc: function(s) {
      const a = s * s, o = a * s;
      return i + t * s + e * a + n * o;
    }
  };
}
const qi = /* @__PURE__ */ new I(), qr = /* @__PURE__ */ new os(), Yr = /* @__PURE__ */ new os(), Kr = /* @__PURE__ */ new os();
class Ud extends $e {
  constructor(t = [], e = !1, n = "centripetal", r = 0.5) {
    super(), this.isCatmullRomCurve3 = !0, this.type = "CatmullRomCurve3", this.points = t, this.closed = e, this.curveType = n, this.tension = r;
  }
  getPoint(t, e = new I()) {
    const n = e, r = this.points, s = r.length, a = (s - (this.closed ? 0 : 1)) * t;
    let o = Math.floor(a), l = a - o;
    this.closed ? o += o > 0 ? 0 : (Math.floor(Math.abs(o) / s) + 1) * s : l === 0 && o === s - 1 && (o = s - 2, l = 1);
    let c, h;
    this.closed || o > 0 ? c = r[(o - 1) % s] : (qi.subVectors(r[0], r[1]).add(r[0]), c = qi);
    const u = r[o % s], d = r[(o + 1) % s];
    if (this.closed || o + 2 < s ? h = r[(o + 2) % s] : (qi.subVectors(r[s - 1], r[s - 2]).add(r[s - 1]), h = qi), this.curveType === "centripetal" || this.curveType === "chordal") {
      const f = this.curveType === "chordal" ? 0.5 : 0.25;
      let _ = Math.pow(c.distanceToSquared(u), f), x = Math.pow(u.distanceToSquared(d), f), m = Math.pow(d.distanceToSquared(h), f);
      x < 1e-4 && (x = 1), _ < 1e-4 && (_ = x), m < 1e-4 && (m = x), qr.initNonuniformCatmullRom(c.x, u.x, d.x, h.x, _, x, m), Yr.initNonuniformCatmullRom(c.y, u.y, d.y, h.y, _, x, m), Kr.initNonuniformCatmullRom(c.z, u.z, d.z, h.z, _, x, m);
    } else this.curveType === "catmullrom" && (qr.initCatmullRom(c.x, u.x, d.x, h.x, this.tension), Yr.initCatmullRom(c.y, u.y, d.y, h.y, this.tension), Kr.initCatmullRom(c.z, u.z, d.z, h.z, this.tension));
    return n.set(
      qr.calc(l),
      Yr.calc(l),
      Kr.calc(l)
    ), n;
  }
  copy(t) {
    super.copy(t), this.points = [];
    for (let e = 0, n = t.points.length; e < n; e++) {
      const r = t.points[e];
      this.points.push(r.clone());
    }
    return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this;
  }
  toJSON() {
    const t = super.toJSON();
    t.points = [];
    for (let e = 0, n = this.points.length; e < n; e++) {
      const r = this.points[e];
      t.points.push(r.toArray());
    }
    return t.closed = this.closed, t.curveType = this.curveType, t.tension = this.tension, t;
  }
  fromJSON(t) {
    super.fromJSON(t), this.points = [];
    for (let e = 0, n = t.points.length; e < n; e++) {
      const r = t.points[e];
      this.points.push(new I().fromArray(r));
    }
    return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this;
  }
}
function da(i, t, e, n, r) {
  const s = (n - t) * 0.5, a = (r - e) * 0.5, o = i * i, l = i * o;
  return (2 * e - 2 * n + s + a) * l + (-3 * e + 3 * n - 2 * s - a) * o + s * i + e;
}
function Nd(i, t) {
  const e = 1 - i;
  return e * e * t;
}
function Fd(i, t) {
  return 2 * (1 - i) * i * t;
}
function Bd(i, t) {
  return i * i * t;
}
function _i(i, t, e, n) {
  return Nd(i, t) + Fd(i, e) + Bd(i, n);
}
function Od(i, t) {
  const e = 1 - i;
  return e * e * e * t;
}
function zd(i, t) {
  const e = 1 - i;
  return 3 * e * e * i * t;
}
function Gd(i, t) {
  return 3 * (1 - i) * i * i * t;
}
function Vd(i, t) {
  return i * i * i * t;
}
function gi(i, t, e, n, r) {
  return Od(i, t) + zd(i, e) + Gd(i, n) + Vd(i, r);
}
class Ka extends $e {
  constructor(t = new ot(), e = new ot(), n = new ot(), r = new ot()) {
    super(), this.isCubicBezierCurve = !0, this.type = "CubicBezierCurve", this.v0 = t, this.v1 = e, this.v2 = n, this.v3 = r;
  }
  getPoint(t, e = new ot()) {
    const n = e, r = this.v0, s = this.v1, a = this.v2, o = this.v3;
    return n.set(
      gi(t, r.x, s.x, a.x, o.x),
      gi(t, r.y, s.y, a.y, o.y)
    ), n;
  }
  copy(t) {
    return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this;
  }
}
class kd extends $e {
  constructor(t = new I(), e = new I(), n = new I(), r = new I()) {
    super(), this.isCubicBezierCurve3 = !0, this.type = "CubicBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = n, this.v3 = r;
  }
  getPoint(t, e = new I()) {
    const n = e, r = this.v0, s = this.v1, a = this.v2, o = this.v3;
    return n.set(
      gi(t, r.x, s.x, a.x, o.x),
      gi(t, r.y, s.y, a.y, o.y),
      gi(t, r.z, s.z, a.z, o.z)
    ), n;
  }
  copy(t) {
    return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this;
  }
}
class Ja extends $e {
  constructor(t = new ot(), e = new ot()) {
    super(), this.isLineCurve = !0, this.type = "LineCurve", this.v1 = t, this.v2 = e;
  }
  getPoint(t, e = new ot()) {
    const n = e;
    return t === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n;
  }
  // Line curve is linear, so we can overwrite default getPointAt
  getPointAt(t, e) {
    return this.getPoint(t, e);
  }
  getTangent(t, e = new ot()) {
    return e.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(t, e) {
    return this.getTangent(t, e);
  }
  copy(t) {
    return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
  }
}
class Hd extends $e {
  constructor(t = new I(), e = new I()) {
    super(), this.isLineCurve3 = !0, this.type = "LineCurve3", this.v1 = t, this.v2 = e;
  }
  getPoint(t, e = new I()) {
    const n = e;
    return t === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n;
  }
  // Line curve is linear, so we can overwrite default getPointAt
  getPointAt(t, e) {
    return this.getPoint(t, e);
  }
  getTangent(t, e = new I()) {
    return e.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(t, e) {
    return this.getTangent(t, e);
  }
  copy(t) {
    return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
  }
}
class Za extends $e {
  constructor(t = new ot(), e = new ot(), n = new ot()) {
    super(), this.isQuadraticBezierCurve = !0, this.type = "QuadraticBezierCurve", this.v0 = t, this.v1 = e, this.v2 = n;
  }
  getPoint(t, e = new ot()) {
    const n = e, r = this.v0, s = this.v1, a = this.v2;
    return n.set(
      _i(t, r.x, s.x, a.x),
      _i(t, r.y, s.y, a.y)
    ), n;
  }
  copy(t) {
    return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
  }
}
class Wd extends $e {
  constructor(t = new I(), e = new I(), n = new I()) {
    super(), this.isQuadraticBezierCurve3 = !0, this.type = "QuadraticBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = n;
  }
  getPoint(t, e = new I()) {
    const n = e, r = this.v0, s = this.v1, a = this.v2;
    return n.set(
      _i(t, r.x, s.x, a.x),
      _i(t, r.y, s.y, a.y),
      _i(t, r.z, s.z, a.z)
    ), n;
  }
  copy(t) {
    return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
  }
}
class $a extends $e {
  constructor(t = []) {
    super(), this.isSplineCurve = !0, this.type = "SplineCurve", this.points = t;
  }
  getPoint(t, e = new ot()) {
    const n = e, r = this.points, s = (r.length - 1) * t, a = Math.floor(s), o = s - a, l = r[a === 0 ? a : a - 1], c = r[a], h = r[a > r.length - 2 ? r.length - 1 : a + 1], u = r[a > r.length - 3 ? r.length - 1 : a + 2];
    return n.set(
      da(o, l.x, c.x, h.x, u.x),
      da(o, l.y, c.y, h.y, u.y)
    ), n;
  }
  copy(t) {
    super.copy(t), this.points = [];
    for (let e = 0, n = t.points.length; e < n; e++) {
      const r = t.points[e];
      this.points.push(r.clone());
    }
    return this;
  }
  toJSON() {
    const t = super.toJSON();
    t.points = [];
    for (let e = 0, n = this.points.length; e < n; e++) {
      const r = this.points[e];
      t.points.push(r.toArray());
    }
    return t;
  }
  fromJSON(t) {
    super.fromJSON(t), this.points = [];
    for (let e = 0, n = t.points.length; e < n; e++) {
      const r = t.points[e];
      this.points.push(new ot().fromArray(r));
    }
    return this;
  }
}
var fa = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ArcCurve: Dd,
  CatmullRomCurve3: Ud,
  CubicBezierCurve: Ka,
  CubicBezierCurve3: kd,
  EllipseCurve: as,
  LineCurve: Ja,
  LineCurve3: Hd,
  QuadraticBezierCurve: Za,
  QuadraticBezierCurve3: Wd,
  SplineCurve: $a
});
class Xd extends $e {
  constructor() {
    super(), this.type = "CurvePath", this.curves = [], this.autoClose = !1;
  }
  add(t) {
    this.curves.push(t);
  }
  closePath() {
    const t = this.curves[0].getPoint(0), e = this.curves[this.curves.length - 1].getPoint(1);
    if (!t.equals(e)) {
      const n = t.isVector2 === !0 ? "LineCurve" : "LineCurve3";
      this.curves.push(new fa[n](e, t));
    }
    return this;
  }
  // To get accurate point with reference to
  // entire path distance at time t,
  // following has to be done:
  // 1. Length of each sub path have to be known
  // 2. Locate and identify type of curve
  // 3. Get t for the curve
  // 4. Return curve.getPointAt(t')
  getPoint(t, e) {
    const n = t * this.getLength(), r = this.getCurveLengths();
    let s = 0;
    for (; s < r.length; ) {
      if (r[s] >= n) {
        const a = r[s] - n, o = this.curves[s], l = o.getLength(), c = l === 0 ? 0 : 1 - a / l;
        return o.getPointAt(c, e);
      }
      s++;
    }
    return null;
  }
  // We cannot use the default THREE.Curve getPoint() with getLength() because in
  // THREE.Curve, getLength() depends on getPoint() but in THREE.CurvePath
  // getPoint() depends on getLength
  getLength() {
    const t = this.getCurveLengths();
    return t[t.length - 1];
  }
  // cacheLengths must be recalculated.
  updateArcLengths() {
    this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths();
  }
  // Compute lengths and cache them
  // We cannot overwrite getLengths() because UtoT mapping uses it.
  getCurveLengths() {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
      return this.cacheLengths;
    const t = [];
    let e = 0;
    for (let n = 0, r = this.curves.length; n < r; n++)
      e += this.curves[n].getLength(), t.push(e);
    return this.cacheLengths = t, t;
  }
  getSpacedPoints(t = 40) {
    const e = [];
    for (let n = 0; n <= t; n++)
      e.push(this.getPoint(n / t));
    return this.autoClose && e.push(e[0]), e;
  }
  getPoints(t = 12) {
    const e = [];
    let n;
    for (let r = 0, s = this.curves; r < s.length; r++) {
      const a = s[r], o = a.isEllipseCurve ? t * 2 : a.isLineCurve || a.isLineCurve3 ? 1 : a.isSplineCurve ? t * a.points.length : t, l = a.getPoints(o);
      for (let c = 0; c < l.length; c++) {
        const h = l[c];
        n && n.equals(h) || (e.push(h), n = h);
      }
    }
    return this.autoClose && e.length > 1 && !e[e.length - 1].equals(e[0]) && e.push(e[0]), e;
  }
  copy(t) {
    super.copy(t), this.curves = [];
    for (let e = 0, n = t.curves.length; e < n; e++) {
      const r = t.curves[e];
      this.curves.push(r.clone());
    }
    return this.autoClose = t.autoClose, this;
  }
  toJSON() {
    const t = super.toJSON();
    t.autoClose = this.autoClose, t.curves = [];
    for (let e = 0, n = this.curves.length; e < n; e++) {
      const r = this.curves[e];
      t.curves.push(r.toJSON());
    }
    return t;
  }
  fromJSON(t) {
    super.fromJSON(t), this.autoClose = t.autoClose, this.curves = [];
    for (let e = 0, n = t.curves.length; e < n; e++) {
      const r = t.curves[e];
      this.curves.push(new fa[r.type]().fromJSON(r));
    }
    return this;
  }
}
class qd extends Xd {
  constructor(t) {
    super(), this.type = "Path", this.currentPoint = new ot(), t && this.setFromPoints(t);
  }
  setFromPoints(t) {
    this.moveTo(t[0].x, t[0].y);
    for (let e = 1, n = t.length; e < n; e++)
      this.lineTo(t[e].x, t[e].y);
    return this;
  }
  moveTo(t, e) {
    return this.currentPoint.set(t, e), this;
  }
  lineTo(t, e) {
    const n = new Ja(this.currentPoint.clone(), new ot(t, e));
    return this.curves.push(n), this.currentPoint.set(t, e), this;
  }
  quadraticCurveTo(t, e, n, r) {
    const s = new Za(
      this.currentPoint.clone(),
      new ot(t, e),
      new ot(n, r)
    );
    return this.curves.push(s), this.currentPoint.set(n, r), this;
  }
  bezierCurveTo(t, e, n, r, s, a) {
    const o = new Ka(
      this.currentPoint.clone(),
      new ot(t, e),
      new ot(n, r),
      new ot(s, a)
    );
    return this.curves.push(o), this.currentPoint.set(s, a), this;
  }
  splineThru(t) {
    const e = [this.currentPoint.clone()].concat(t), n = new $a(e);
    return this.curves.push(n), this.currentPoint.copy(t[t.length - 1]), this;
  }
  arc(t, e, n, r, s, a) {
    const o = this.currentPoint.x, l = this.currentPoint.y;
    return this.absarc(
      t + o,
      e + l,
      n,
      r,
      s,
      a
    ), this;
  }
  absarc(t, e, n, r, s, a) {
    return this.absellipse(t, e, n, n, r, s, a), this;
  }
  ellipse(t, e, n, r, s, a, o, l) {
    const c = this.currentPoint.x, h = this.currentPoint.y;
    return this.absellipse(t + c, e + h, n, r, s, a, o, l), this;
  }
  absellipse(t, e, n, r, s, a, o, l) {
    const c = new as(t, e, n, r, s, a, o, l);
    if (this.curves.length > 0) {
      const u = c.getPoint(0);
      u.equals(this.currentPoint) || this.lineTo(u.x, u.y);
    }
    this.curves.push(c);
    const h = c.getPoint(1);
    return this.currentPoint.copy(h), this;
  }
  copy(t) {
    return super.copy(t), this.currentPoint.copy(t.currentPoint), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.currentPoint = this.currentPoint.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.currentPoint.fromArray(t.currentPoint), this;
  }
}
class ls extends Ge {
  constructor(t = [new ot(0, -0.5), new ot(0.5, 0), new ot(0, 0.5)], e = 12, n = 0, r = Math.PI * 2) {
    super(), this.type = "LatheGeometry", this.parameters = {
      points: t,
      segments: e,
      phiStart: n,
      phiLength: r
    }, e = Math.floor(e), r = ve(r, 0, Math.PI * 2);
    const s = [], a = [], o = [], l = [], c = [], h = 1 / e, u = new I(), d = new ot(), f = new I(), _ = new I(), x = new I();
    let m = 0, p = 0;
    for (let T = 0; T <= t.length - 1; T++)
      switch (T) {
        case 0:
          m = t[T + 1].x - t[T].x, p = t[T + 1].y - t[T].y, f.x = p * 1, f.y = -m, f.z = p * 0, x.copy(f), f.normalize(), l.push(f.x, f.y, f.z);
          break;
        case t.length - 1:
          l.push(x.x, x.y, x.z);
          break;
        default:
          m = t[T + 1].x - t[T].x, p = t[T + 1].y - t[T].y, f.x = p * 1, f.y = -m, f.z = p * 0, _.copy(f), f.x += x.x, f.y += x.y, f.z += x.z, f.normalize(), l.push(f.x, f.y, f.z), x.copy(_);
      }
    for (let T = 0; T <= e; T++) {
      const S = n + T * h * r, y = Math.sin(S), C = Math.cos(S);
      for (let w = 0; w <= t.length - 1; w++) {
        u.x = t[w].x * y, u.y = t[w].y, u.z = t[w].x * C, a.push(u.x, u.y, u.z), d.x = T / e, d.y = w / (t.length - 1), o.push(d.x, d.y);
        const b = l[3 * w + 0] * y, U = l[3 * w + 1], K = l[3 * w + 0] * C;
        c.push(b, U, K);
      }
    }
    for (let T = 0; T < e; T++)
      for (let S = 0; S < t.length - 1; S++) {
        const y = S + T * t.length, C = y, w = y + t.length, b = y + t.length + 1, U = y + 1;
        s.push(C, w, U), s.push(b, U, w);
      }
    this.setIndex(s), this.setAttribute("position", new ue(a, 3)), this.setAttribute("uv", new ue(o, 2)), this.setAttribute("normal", new ue(c, 3));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new ls(t.points, t.segments, t.phiStart, t.phiLength);
  }
}
class lr extends ls {
  constructor(t = 1, e = 1, n = 4, r = 8) {
    const s = new qd();
    s.absarc(0, -e / 2, t, Math.PI * 1.5, 0), s.absarc(0, e / 2, t, 0, Math.PI * 0.5), super(s.getPoints(n), r), this.type = "CapsuleGeometry", this.parameters = {
      radius: t,
      length: e,
      capSegments: n,
      radialSegments: r
    };
  }
  static fromJSON(t) {
    return new lr(t.radius, t.length, t.capSegments, t.radialSegments);
  }
}
class cs extends Ge {
  constructor(t = 1, e = 1, n = 1, r = 32, s = 1, a = !1, o = 0, l = Math.PI * 2) {
    super(), this.type = "CylinderGeometry", this.parameters = {
      radiusTop: t,
      radiusBottom: e,
      height: n,
      radialSegments: r,
      heightSegments: s,
      openEnded: a,
      thetaStart: o,
      thetaLength: l
    };
    const c = this;
    r = Math.floor(r), s = Math.floor(s);
    const h = [], u = [], d = [], f = [];
    let _ = 0;
    const x = [], m = n / 2;
    let p = 0;
    T(), a === !1 && (t > 0 && S(!0), e > 0 && S(!1)), this.setIndex(h), this.setAttribute("position", new ue(u, 3)), this.setAttribute("normal", new ue(d, 3)), this.setAttribute("uv", new ue(f, 2));
    function T() {
      const y = new I(), C = new I();
      let w = 0;
      const b = (e - t) / n;
      for (let U = 0; U <= s; U++) {
        const K = [], g = U / s, E = g * (e - t) + t;
        for (let z = 0; z <= r; z++) {
          const O = z / r, V = O * l + o, J = Math.sin(V), G = Math.cos(V);
          C.x = E * J, C.y = -g * n + m, C.z = E * G, u.push(C.x, C.y, C.z), y.set(J, b, G).normalize(), d.push(y.x, y.y, y.z), f.push(O, 1 - g), K.push(_++);
        }
        x.push(K);
      }
      for (let U = 0; U < r; U++)
        for (let K = 0; K < s; K++) {
          const g = x[K][U], E = x[K + 1][U], z = x[K + 1][U + 1], O = x[K][U + 1];
          t > 0 && (h.push(g, E, O), w += 3), e > 0 && (h.push(E, z, O), w += 3);
        }
      c.addGroup(p, w, 0), p += w;
    }
    function S(y) {
      const C = _, w = new ot(), b = new I();
      let U = 0;
      const K = y === !0 ? t : e, g = y === !0 ? 1 : -1;
      for (let z = 1; z <= r; z++)
        u.push(0, m * g, 0), d.push(0, g, 0), f.push(0.5, 0.5), _++;
      const E = _;
      for (let z = 0; z <= r; z++) {
        const V = z / r * l + o, J = Math.cos(V), G = Math.sin(V);
        b.x = K * G, b.y = m * g, b.z = K * J, u.push(b.x, b.y, b.z), d.push(0, g, 0), w.x = J * 0.5 + 0.5, w.y = G * 0.5 * g + 0.5, f.push(w.x, w.y), _++;
      }
      for (let z = 0; z < r; z++) {
        const O = C + z, V = E + z;
        y === !0 ? h.push(V, V + 1, O) : h.push(V + 1, V, O), U += 3;
      }
      c.addGroup(p, U, y === !0 ? 1 : 2), p += U;
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new cs(t.radiusTop, t.radiusBottom, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
  }
}
class Rn extends cs {
  constructor(t = 1, e = 1, n = 32, r = 1, s = !1, a = 0, o = Math.PI * 2) {
    super(0, t, e, n, r, s, a, o), this.type = "ConeGeometry", this.parameters = {
      radius: t,
      height: e,
      radialSegments: n,
      heightSegments: r,
      openEnded: s,
      thetaStart: a,
      thetaLength: o
    };
  }
  static fromJSON(t) {
    return new Rn(t.radius, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
  }
}
class se extends Ge {
  constructor(t = 1, e = 32, n = 16, r = 0, s = Math.PI * 2, a = 0, o = Math.PI) {
    super(), this.type = "SphereGeometry", this.parameters = {
      radius: t,
      widthSegments: e,
      heightSegments: n,
      phiStart: r,
      phiLength: s,
      thetaStart: a,
      thetaLength: o
    }, e = Math.max(3, Math.floor(e)), n = Math.max(2, Math.floor(n));
    const l = Math.min(a + o, Math.PI);
    let c = 0;
    const h = [], u = new I(), d = new I(), f = [], _ = [], x = [], m = [];
    for (let p = 0; p <= n; p++) {
      const T = [], S = p / n;
      let y = 0;
      p === 0 && a === 0 ? y = 0.5 / e : p === n && l === Math.PI && (y = -0.5 / e);
      for (let C = 0; C <= e; C++) {
        const w = C / e;
        u.x = -t * Math.cos(r + w * s) * Math.sin(a + S * o), u.y = t * Math.cos(a + S * o), u.z = t * Math.sin(r + w * s) * Math.sin(a + S * o), _.push(u.x, u.y, u.z), d.copy(u).normalize(), x.push(d.x, d.y, d.z), m.push(w + y, 1 - S), T.push(c++);
      }
      h.push(T);
    }
    for (let p = 0; p < n; p++)
      for (let T = 0; T < e; T++) {
        const S = h[p][T + 1], y = h[p][T], C = h[p + 1][T], w = h[p + 1][T + 1];
        (p !== 0 || a > 0) && f.push(S, y, w), (p !== n - 1 || l < Math.PI) && f.push(y, C, w);
      }
    this.setIndex(f), this.setAttribute("position", new ue(_, 3)), this.setAttribute("normal", new ue(x, 3)), this.setAttribute("uv", new ue(m, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new se(t.radius, t.widthSegments, t.heightSegments, t.phiStart, t.phiLength, t.thetaStart, t.thetaLength);
  }
}
class cr extends Ge {
  constructor(t = 1, e = 0.4, n = 12, r = 48, s = Math.PI * 2) {
    super(), this.type = "TorusGeometry", this.parameters = {
      radius: t,
      tube: e,
      radialSegments: n,
      tubularSegments: r,
      arc: s
    }, n = Math.floor(n), r = Math.floor(r);
    const a = [], o = [], l = [], c = [], h = new I(), u = new I(), d = new I();
    for (let f = 0; f <= n; f++)
      for (let _ = 0; _ <= r; _++) {
        const x = _ / r * s, m = f / n * Math.PI * 2;
        u.x = (t + e * Math.cos(m)) * Math.cos(x), u.y = (t + e * Math.cos(m)) * Math.sin(x), u.z = e * Math.sin(m), o.push(u.x, u.y, u.z), h.x = t * Math.cos(x), h.y = t * Math.sin(x), d.subVectors(u, h).normalize(), l.push(d.x, d.y, d.z), c.push(_ / r), c.push(f / n);
      }
    for (let f = 1; f <= n; f++)
      for (let _ = 1; _ <= r; _++) {
        const x = (r + 1) * f + _ - 1, m = (r + 1) * (f - 1) + _ - 1, p = (r + 1) * (f - 1) + _, T = (r + 1) * f + _;
        a.push(x, m, T), a.push(m, p, T);
      }
    this.setIndex(a), this.setAttribute("position", new ue(o, 3)), this.setAttribute("normal", new ue(l, 3)), this.setAttribute("uv", new ue(c, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new cr(t.radius, t.tube, t.radialSegments, t.tubularSegments, t.arc);
  }
}
class Cn extends ni {
  constructor(t) {
    super(), this.isMeshStandardMaterial = !0, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new Gt(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Gt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new ot(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new qe(), this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.defines = { STANDARD: "" }, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.envMapIntensity = t.envMapIntensity, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.flatShading = t.flatShading, this.fog = t.fog, this;
  }
}
function Yi(i, t, e) {
  return !i || // let 'undefined' and 'null' pass
  !e && i.constructor === t ? i : typeof t.BYTES_PER_ELEMENT == "number" ? new t(i) : Array.prototype.slice.call(i);
}
function Yd(i) {
  return ArrayBuffer.isView(i) && !(i instanceof DataView);
}
function Kd(i) {
  function t(r, s) {
    return i[r] - i[s];
  }
  const e = i.length, n = new Array(e);
  for (let r = 0; r !== e; ++r) n[r] = r;
  return n.sort(t), n;
}
function pa(i, t, e) {
  const n = i.length, r = new i.constructor(n);
  for (let s = 0, a = 0; a !== n; ++s) {
    const o = e[s] * t;
    for (let l = 0; l !== t; ++l)
      r[a++] = i[o + l];
  }
  return r;
}
function ja(i, t, e, n) {
  let r = 1, s = i[0];
  for (; s !== void 0 && s[n] === void 0; )
    s = i[r++];
  if (s === void 0) return;
  let a = s[n];
  if (a !== void 0)
    if (Array.isArray(a))
      do
        a = s[n], a !== void 0 && (t.push(s.time), e.push.apply(e, a)), s = i[r++];
      while (s !== void 0);
    else if (a.toArray !== void 0)
      do
        a = s[n], a !== void 0 && (t.push(s.time), a.toArray(e, e.length)), s = i[r++];
      while (s !== void 0);
    else
      do
        a = s[n], a !== void 0 && (t.push(s.time), e.push(a)), s = i[r++];
      while (s !== void 0);
}
class hr {
  constructor(t, e, n, r) {
    this.parameterPositions = t, this._cachedIndex = 0, this.resultBuffer = r !== void 0 ? r : new e.constructor(n), this.sampleValues = e, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
  }
  evaluate(t) {
    const e = this.parameterPositions;
    let n = this._cachedIndex, r = e[n], s = e[n - 1];
    t: {
      e: {
        let a;
        n: {
          i: if (!(t < r)) {
            for (let o = n + 2; ; ) {
              if (r === void 0) {
                if (t < s) break i;
                return n = e.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
              }
              if (n === o) break;
              if (s = r, r = e[++n], t < r)
                break e;
            }
            a = e.length;
            break n;
          }
          if (!(t >= s)) {
            const o = e[1];
            t < o && (n = 2, s = o);
            for (let l = n - 2; ; ) {
              if (s === void 0)
                return this._cachedIndex = 0, this.copySampleValue_(0);
              if (n === l) break;
              if (r = s, s = e[--n - 1], t >= s)
                break e;
            }
            a = n, n = 0;
            break n;
          }
          break t;
        }
        for (; n < a; ) {
          const o = n + a >>> 1;
          t < e[o] ? a = o : n = o + 1;
        }
        if (r = e[n], s = e[n - 1], s === void 0)
          return this._cachedIndex = 0, this.copySampleValue_(0);
        if (r === void 0)
          return n = e.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
      }
      this._cachedIndex = n, this.intervalChanged_(n, s, r);
    }
    return this.interpolate_(n, s, t, r);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(t) {
    const e = this.resultBuffer, n = this.sampleValues, r = this.valueSize, s = t * r;
    for (let a = 0; a !== r; ++a)
      e[a] = n[s + a];
    return e;
  }
  // Template methods for derived classes:
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {
  }
}
class Jd extends hr {
  constructor(t, e, n, r) {
    super(t, e, n, r), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
      endingStart: 2400,
      endingEnd: 2400
    };
  }
  intervalChanged_(t, e, n) {
    const r = this.parameterPositions;
    let s = t - 2, a = t + 1, o = r[s], l = r[a];
    if (o === void 0)
      switch (this.getSettings_().endingStart) {
        case 2401:
          s = t, o = 2 * e - n;
          break;
        case 2402:
          s = r.length - 2, o = e + r[s] - r[s + 1];
          break;
        default:
          s = t, o = n;
      }
    if (l === void 0)
      switch (this.getSettings_().endingEnd) {
        case 2401:
          a = t, l = 2 * n - e;
          break;
        case 2402:
          a = 1, l = n + r[1] - r[0];
          break;
        default:
          a = t - 1, l = e;
      }
    const c = (n - e) * 0.5, h = this.valueSize;
    this._weightPrev = c / (e - o), this._weightNext = c / (l - n), this._offsetPrev = s * h, this._offsetNext = a * h;
  }
  interpolate_(t, e, n, r) {
    const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = t * o, c = l - o, h = this._offsetPrev, u = this._offsetNext, d = this._weightPrev, f = this._weightNext, _ = (n - e) / (r - e), x = _ * _, m = x * _, p = -d * m + 2 * d * x - d * _, T = (1 + d) * m + (-1.5 - 2 * d) * x + (-0.5 + d) * _ + 1, S = (-1 - f) * m + (1.5 + f) * x + 0.5 * _, y = f * m - f * x;
    for (let C = 0; C !== o; ++C)
      s[C] = p * a[h + C] + T * a[c + C] + S * a[l + C] + y * a[u + C];
    return s;
  }
}
class Qa extends hr {
  constructor(t, e, n, r) {
    super(t, e, n, r);
  }
  interpolate_(t, e, n, r) {
    const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = t * o, c = l - o, h = (n - e) / (r - e), u = 1 - h;
    for (let d = 0; d !== o; ++d)
      s[d] = a[c + d] * u + a[l + d] * h;
    return s;
  }
}
class Zd extends hr {
  constructor(t, e, n, r) {
    super(t, e, n, r);
  }
  interpolate_(t) {
    return this.copySampleValue_(t - 1);
  }
}
class je {
  constructor(t, e, n, r) {
    if (t === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (e === void 0 || e.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
    this.name = t, this.times = Yi(e, this.TimeBufferType), this.values = Yi(n, this.ValueBufferType), this.setInterpolation(r || this.DefaultInterpolation);
  }
  // Serialization (in static context, because of constructor invocation
  // and automatic invocation of .toJSON):
  static toJSON(t) {
    const e = t.constructor;
    let n;
    if (e.toJSON !== this.toJSON)
      n = e.toJSON(t);
    else {
      n = {
        name: t.name,
        times: Yi(t.times, Array),
        values: Yi(t.values, Array)
      };
      const r = t.getInterpolation();
      r !== t.DefaultInterpolation && (n.interpolation = r);
    }
    return n.type = t.ValueTypeName, n;
  }
  InterpolantFactoryMethodDiscrete(t) {
    return new Zd(this.times, this.values, this.getValueSize(), t);
  }
  InterpolantFactoryMethodLinear(t) {
    return new Qa(this.times, this.values, this.getValueSize(), t);
  }
  InterpolantFactoryMethodSmooth(t) {
    return new Jd(this.times, this.values, this.getValueSize(), t);
  }
  setInterpolation(t) {
    let e;
    switch (t) {
      case 2300:
        e = this.InterpolantFactoryMethodDiscrete;
        break;
      case 2301:
        e = this.InterpolantFactoryMethodLinear;
        break;
      case 2302:
        e = this.InterpolantFactoryMethodSmooth;
        break;
    }
    if (e === void 0) {
      const n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
      if (this.createInterpolant === void 0)
        if (t !== this.DefaultInterpolation)
          this.setInterpolation(this.DefaultInterpolation);
        else
          throw new Error(n);
      return console.warn("THREE.KeyframeTrack:", n), this;
    }
    return this.createInterpolant = e, this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return 2300;
      case this.InterpolantFactoryMethodLinear:
        return 2301;
      case this.InterpolantFactoryMethodSmooth:
        return 2302;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  // move all keyframes either forwards or backwards in time
  shift(t) {
    if (t !== 0) {
      const e = this.times;
      for (let n = 0, r = e.length; n !== r; ++n)
        e[n] += t;
    }
    return this;
  }
  // scale all keyframe times by a factor (useful for frame <-> seconds conversions)
  scale(t) {
    if (t !== 1) {
      const e = this.times;
      for (let n = 0, r = e.length; n !== r; ++n)
        e[n] *= t;
    }
    return this;
  }
  // removes keyframes before and after animation without changing any values within the range [startTime, endTime].
  // IMPORTANT: We do not shift around keys to the start of the track time, because for interpolated keys this will change their values
  trim(t, e) {
    const n = this.times, r = n.length;
    let s = 0, a = r - 1;
    for (; s !== r && n[s] < t; )
      ++s;
    for (; a !== -1 && n[a] > e; )
      --a;
    if (++a, s !== 0 || a !== r) {
      s >= a && (a = Math.max(a, 1), s = a - 1);
      const o = this.getValueSize();
      this.times = n.slice(s, a), this.values = this.values.slice(s * o, a * o);
    }
    return this;
  }
  // ensure we do not get a GarbageInGarbageOut situation, make sure tracks are at least minimally viable
  validate() {
    let t = !0;
    const e = this.getValueSize();
    e - Math.floor(e) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), t = !1);
    const n = this.times, r = this.values, s = n.length;
    s === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), t = !1);
    let a = null;
    for (let o = 0; o !== s; o++) {
      const l = n[o];
      if (typeof l == "number" && isNaN(l)) {
        console.error("THREE.KeyframeTrack: Time is not a valid number.", this, o, l), t = !1;
        break;
      }
      if (a !== null && a > l) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, o, l, a), t = !1;
        break;
      }
      a = l;
    }
    if (r !== void 0 && Yd(r))
      for (let o = 0, l = r.length; o !== l; ++o) {
        const c = r[o];
        if (isNaN(c)) {
          console.error("THREE.KeyframeTrack: Value is not a valid number.", this, o, c), t = !1;
          break;
        }
      }
    return t;
  }
  // removes equivalent sequential keys as common in morph target sequences
  // (0,0,0,0,1,1,1,0,0,0,0,0,0,0) --> (0,0,1,1,0,0)
  optimize() {
    const t = this.times.slice(), e = this.values.slice(), n = this.getValueSize(), r = this.getInterpolation() === 2302, s = t.length - 1;
    let a = 1;
    for (let o = 1; o < s; ++o) {
      let l = !1;
      const c = t[o], h = t[o + 1];
      if (c !== h && (o !== 1 || c !== t[0]))
        if (r)
          l = !0;
        else {
          const u = o * n, d = u - n, f = u + n;
          for (let _ = 0; _ !== n; ++_) {
            const x = e[u + _];
            if (x !== e[d + _] || x !== e[f + _]) {
              l = !0;
              break;
            }
          }
        }
      if (l) {
        if (o !== a) {
          t[a] = t[o];
          const u = o * n, d = a * n;
          for (let f = 0; f !== n; ++f)
            e[d + f] = e[u + f];
        }
        ++a;
      }
    }
    if (s > 0) {
      t[a] = t[s];
      for (let o = s * n, l = a * n, c = 0; c !== n; ++c)
        e[l + c] = e[o + c];
      ++a;
    }
    return a !== t.length ? (this.times = t.slice(0, a), this.values = e.slice(0, a * n)) : (this.times = t, this.values = e), this;
  }
  clone() {
    const t = this.times.slice(), e = this.values.slice(), n = this.constructor, r = new n(this.name, t, e);
    return r.createInterpolant = this.createInterpolant, r;
  }
}
je.prototype.TimeBufferType = Float32Array;
je.prototype.ValueBufferType = Float32Array;
je.prototype.DefaultInterpolation = 2301;
class ri extends je {
  // No interpolation parameter because only InterpolateDiscrete is valid.
  constructor(t, e, n) {
    super(t, e, n);
  }
}
ri.prototype.ValueTypeName = "bool";
ri.prototype.ValueBufferType = Array;
ri.prototype.DefaultInterpolation = 2300;
ri.prototype.InterpolantFactoryMethodLinear = void 0;
ri.prototype.InterpolantFactoryMethodSmooth = void 0;
class to extends je {
}
to.prototype.ValueTypeName = "color";
class ir extends je {
}
ir.prototype.ValueTypeName = "number";
class $d extends hr {
  constructor(t, e, n, r) {
    super(t, e, n, r);
  }
  interpolate_(t, e, n, r) {
    const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = (n - e) / (r - e);
    let c = t * o;
    for (let h = c + o; c !== h; c += 4)
      Ze.slerpFlat(s, 0, a, c - o, a, c, l);
    return s;
  }
}
class Si extends je {
  InterpolantFactoryMethodLinear(t) {
    return new $d(this.times, this.values, this.getValueSize(), t);
  }
}
Si.prototype.ValueTypeName = "quaternion";
Si.prototype.InterpolantFactoryMethodSmooth = void 0;
class si extends je {
  // No interpolation parameter because only InterpolateDiscrete is valid.
  constructor(t, e, n) {
    super(t, e, n);
  }
}
si.prototype.ValueTypeName = "string";
si.prototype.ValueBufferType = Array;
si.prototype.DefaultInterpolation = 2300;
si.prototype.InterpolantFactoryMethodLinear = void 0;
si.prototype.InterpolantFactoryMethodSmooth = void 0;
class ei extends je {
}
ei.prototype.ValueTypeName = "vector";
class be {
  constructor(t = "", e = -1, n = [], r = 2500) {
    this.name = t, this.tracks = n, this.duration = e, this.blendMode = r, this.uuid = an(), this.duration < 0 && this.resetDuration();
  }
  static parse(t) {
    const e = [], n = t.tracks, r = 1 / (t.fps || 1);
    for (let a = 0, o = n.length; a !== o; ++a)
      e.push(Qd(n[a]).scale(r));
    const s = new this(t.name, t.duration, e, t.blendMode);
    return s.uuid = t.uuid, s;
  }
  static toJSON(t) {
    const e = [], n = t.tracks, r = {
      name: t.name,
      duration: t.duration,
      tracks: e,
      uuid: t.uuid,
      blendMode: t.blendMode
    };
    for (let s = 0, a = n.length; s !== a; ++s)
      e.push(je.toJSON(n[s]));
    return r;
  }
  static CreateFromMorphTargetSequence(t, e, n, r) {
    const s = e.length, a = [];
    for (let o = 0; o < s; o++) {
      let l = [], c = [];
      l.push(
        (o + s - 1) % s,
        o,
        (o + 1) % s
      ), c.push(0, 1, 0);
      const h = Kd(l);
      l = pa(l, 1, h), c = pa(c, 1, h), !r && l[0] === 0 && (l.push(s), c.push(c[0])), a.push(
        new ir(
          ".morphTargetInfluences[" + e[o].name + "]",
          l,
          c
        ).scale(1 / n)
      );
    }
    return new this(t, -1, a);
  }
  static findByName(t, e) {
    let n = t;
    if (!Array.isArray(t)) {
      const r = t;
      n = r.geometry && r.geometry.animations || r.animations;
    }
    for (let r = 0; r < n.length; r++)
      if (n[r].name === e)
        return n[r];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(t, e, n) {
    const r = {}, s = /^([\w-]*?)([\d]+)$/;
    for (let o = 0, l = t.length; o < l; o++) {
      const c = t[o], h = c.name.match(s);
      if (h && h.length > 1) {
        const u = h[1];
        let d = r[u];
        d || (r[u] = d = []), d.push(c);
      }
    }
    const a = [];
    for (const o in r)
      a.push(this.CreateFromMorphTargetSequence(o, r[o], e, n));
    return a;
  }
  // parse the animation.hierarchy format
  static parseAnimation(t, e) {
    if (!t)
      return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
    const n = function(u, d, f, _, x) {
      if (f.length !== 0) {
        const m = [], p = [];
        ja(f, m, p, _), m.length !== 0 && x.push(new u(d, m, p));
      }
    }, r = [], s = t.name || "default", a = t.fps || 30, o = t.blendMode;
    let l = t.length || -1;
    const c = t.hierarchy || [];
    for (let u = 0; u < c.length; u++) {
      const d = c[u].keys;
      if (!(!d || d.length === 0))
        if (d[0].morphTargets) {
          const f = {};
          let _;
          for (_ = 0; _ < d.length; _++)
            if (d[_].morphTargets)
              for (let x = 0; x < d[_].morphTargets.length; x++)
                f[d[_].morphTargets[x]] = -1;
          for (const x in f) {
            const m = [], p = [];
            for (let T = 0; T !== d[_].morphTargets.length; ++T) {
              const S = d[_];
              m.push(S.time), p.push(S.morphTarget === x ? 1 : 0);
            }
            r.push(new ir(".morphTargetInfluence[" + x + "]", m, p));
          }
          l = f.length * a;
        } else {
          const f = ".bones[" + e[u].name + "]";
          n(
            ei,
            f + ".position",
            d,
            "pos",
            r
          ), n(
            Si,
            f + ".quaternion",
            d,
            "rot",
            r
          ), n(
            ei,
            f + ".scale",
            d,
            "scl",
            r
          );
        }
    }
    return r.length === 0 ? null : new this(s, l, r, o);
  }
  resetDuration() {
    const t = this.tracks;
    let e = 0;
    for (let n = 0, r = t.length; n !== r; ++n) {
      const s = this.tracks[n];
      e = Math.max(e, s.times[s.times.length - 1]);
    }
    return this.duration = e, this;
  }
  trim() {
    for (let t = 0; t < this.tracks.length; t++)
      this.tracks[t].trim(0, this.duration);
    return this;
  }
  validate() {
    let t = !0;
    for (let e = 0; e < this.tracks.length; e++)
      t = t && this.tracks[e].validate();
    return t;
  }
  optimize() {
    for (let t = 0; t < this.tracks.length; t++)
      this.tracks[t].optimize();
    return this;
  }
  clone() {
    const t = [];
    for (let e = 0; e < this.tracks.length; e++)
      t.push(this.tracks[e].clone());
    return new this.constructor(this.name, this.duration, t, this.blendMode);
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
}
function jd(i) {
  switch (i.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return ir;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return ei;
    case "color":
      return to;
    case "quaternion":
      return Si;
    case "bool":
    case "boolean":
      return ri;
    case "string":
      return si;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + i);
}
function Qd(i) {
  if (i.type === void 0)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const t = jd(i.type);
  if (i.times === void 0) {
    const e = [], n = [];
    ja(i.keys, e, n, "value"), i.times = e, i.values = n;
  }
  return t.parse !== void 0 ? t.parse(i) : new t(i.name, i.times, i.values, i.interpolation);
}
class eo extends _e {
  constructor(t, e = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new Gt(t), this.intensity = e;
  }
  dispose() {
  }
  copy(t, e) {
    return super.copy(t, e), this.color.copy(t.color), this.intensity = t.intensity, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, this.groundColor !== void 0 && (e.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (e.object.distance = this.distance), this.angle !== void 0 && (e.object.angle = this.angle), this.decay !== void 0 && (e.object.decay = this.decay), this.penumbra !== void 0 && (e.object.penumbra = this.penumbra), this.shadow !== void 0 && (e.object.shadow = this.shadow.toJSON()), this.target !== void 0 && (e.object.target = this.target.uuid), e;
  }
}
class no extends eo {
  constructor(t, e, n) {
    super(t, n), this.isHemisphereLight = !0, this.type = "HemisphereLight", this.position.copy(_e.DEFAULT_UP), this.updateMatrix(), this.groundColor = new Gt(e);
  }
  copy(t, e) {
    return super.copy(t, e), this.groundColor.copy(t.groundColor), this;
  }
}
const Jr = /* @__PURE__ */ new re(), ma = /* @__PURE__ */ new I(), _a = /* @__PURE__ */ new I();
class tf {
  constructor(t) {
    this.camera = t, this.intensity = 1, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new ot(512, 512), this.map = null, this.mapPass = null, this.matrix = new re(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new rs(), this._frameExtents = new ot(1, 1), this._viewportCount = 1, this._viewports = [
      new oe(0, 0, 1, 1)
    ];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(t) {
    const e = this.camera, n = this.matrix;
    ma.setFromMatrixPosition(t.matrixWorld), e.position.copy(ma), _a.setFromMatrixPosition(t.target.matrixWorld), e.lookAt(_a), e.updateMatrixWorld(), Jr.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Jr), n.set(
      0.5,
      0,
      0,
      0.5,
      0,
      0.5,
      0,
      0.5,
      0,
      0,
      0.5,
      0.5,
      0,
      0,
      0,
      1
    ), n.multiply(Jr);
  }
  getViewport(t) {
    return this._viewports[t];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(t) {
    return this.camera = t.camera.clone(), this.intensity = t.intensity, this.bias = t.bias, this.radius = t.radius, this.mapSize.copy(t.mapSize), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const t = {};
    return this.intensity !== 1 && (t.intensity = this.intensity), this.bias !== 0 && (t.bias = this.bias), this.normalBias !== 0 && (t.normalBias = this.normalBias), this.radius !== 1 && (t.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (t.mapSize = this.mapSize.toArray()), t.camera = this.camera.toJSON(!1).object, delete t.camera.matrix, t;
  }
}
class ef extends tf {
  constructor() {
    super(new Oa(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class io extends eo {
  constructor(t, e) {
    super(t, e), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(_e.DEFAULT_UP), this.updateMatrix(), this.target = new _e(), this.shadow = new ef();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(t) {
    return super.copy(t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this;
  }
}
class ro {
  constructor(t = !0) {
    this.autoStart = t, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
  }
  start() {
    this.startTime = ga(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
  }
  stop() {
    this.getElapsedTime(), this.running = !1, this.autoStart = !1;
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let t = 0;
    if (this.autoStart && !this.running)
      return this.start(), 0;
    if (this.running) {
      const e = ga();
      t = (e - this.oldTime) / 1e3, this.oldTime = e, this.elapsedTime += t;
    }
    return t;
  }
}
function ga() {
  return performance.now();
}
class nf {
  constructor(t, e, n) {
    this.binding = t, this.valueSize = n;
    let r, s, a;
    switch (e) {
      case "quaternion":
        r = this._slerp, s = this._slerpAdditive, a = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(n * 6), this._workIndex = 5;
        break;
      case "string":
      case "bool":
        r = this._select, s = this._select, a = this._setAdditiveIdentityOther, this.buffer = new Array(n * 5);
        break;
      default:
        r = this._lerp, s = this._lerpAdditive, a = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(n * 5);
    }
    this._mixBufferRegion = r, this._mixBufferRegionAdditive = s, this._setIdentity = a, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0;
  }
  // accumulate data in the 'incoming' region into 'accu<i>'
  accumulate(t, e) {
    const n = this.buffer, r = this.valueSize, s = t * r + r;
    let a = this.cumulativeWeight;
    if (a === 0) {
      for (let o = 0; o !== r; ++o)
        n[s + o] = n[o];
      a = e;
    } else {
      a += e;
      const o = e / a;
      this._mixBufferRegion(n, s, 0, o, r);
    }
    this.cumulativeWeight = a;
  }
  // accumulate data in the 'incoming' region into 'add'
  accumulateAdditive(t) {
    const e = this.buffer, n = this.valueSize, r = n * this._addIndex;
    this.cumulativeWeightAdditive === 0 && this._setIdentity(), this._mixBufferRegionAdditive(e, r, 0, t, n), this.cumulativeWeightAdditive += t;
  }
  // apply the state of 'accu<i>' to the binding when accus differ
  apply(t) {
    const e = this.valueSize, n = this.buffer, r = t * e + e, s = this.cumulativeWeight, a = this.cumulativeWeightAdditive, o = this.binding;
    if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, s < 1) {
      const l = e * this._origIndex;
      this._mixBufferRegion(
        n,
        r,
        l,
        1 - s,
        e
      );
    }
    a > 0 && this._mixBufferRegionAdditive(n, r, this._addIndex * e, 1, e);
    for (let l = e, c = e + e; l !== c; ++l)
      if (n[l] !== n[l + e]) {
        o.setValue(n, r);
        break;
      }
  }
  // remember the state of the bound property and copy it to both accus
  saveOriginalState() {
    const t = this.binding, e = this.buffer, n = this.valueSize, r = n * this._origIndex;
    t.getValue(e, r);
    for (let s = n, a = r; s !== a; ++s)
      e[s] = e[r + s % n];
    this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0;
  }
  // apply the state previously taken via 'saveOriginalState' to the binding
  restoreOriginalState() {
    const t = this.valueSize * 3;
    this.binding.setValue(this.buffer, t);
  }
  _setAdditiveIdentityNumeric() {
    const t = this._addIndex * this.valueSize, e = t + this.valueSize;
    for (let n = t; n < e; n++)
      this.buffer[n] = 0;
  }
  _setAdditiveIdentityQuaternion() {
    this._setAdditiveIdentityNumeric(), this.buffer[this._addIndex * this.valueSize + 3] = 1;
  }
  _setAdditiveIdentityOther() {
    const t = this._origIndex * this.valueSize, e = this._addIndex * this.valueSize;
    for (let n = 0; n < this.valueSize; n++)
      this.buffer[e + n] = this.buffer[t + n];
  }
  // mix functions
  _select(t, e, n, r, s) {
    if (r >= 0.5)
      for (let a = 0; a !== s; ++a)
        t[e + a] = t[n + a];
  }
  _slerp(t, e, n, r) {
    Ze.slerpFlat(t, e, t, e, t, n, r);
  }
  _slerpAdditive(t, e, n, r, s) {
    const a = this._workIndex * s;
    Ze.multiplyQuaternionsFlat(t, a, t, e, t, n), Ze.slerpFlat(t, e, t, e, t, a, r);
  }
  _lerp(t, e, n, r, s) {
    const a = 1 - r;
    for (let o = 0; o !== s; ++o) {
      const l = e + o;
      t[l] = t[l] * a + t[n + o] * r;
    }
  }
  _lerpAdditive(t, e, n, r, s) {
    for (let a = 0; a !== s; ++a) {
      const o = e + a;
      t[o] = t[o] + t[n + a] * r;
    }
  }
}
const hs = "\\[\\]\\.:\\/", rf = new RegExp("[" + hs + "]", "g"), us = "[^" + hs + "]", sf = "[^" + hs.replace("\\.", "") + "]", af = /* @__PURE__ */ /((?:WC+[\/:])*)/.source.replace("WC", us), of = /* @__PURE__ */ /(WCOD+)?/.source.replace("WCOD", sf), lf = /* @__PURE__ */ /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", us), cf = /* @__PURE__ */ /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", us), hf = new RegExp(
  "^" + af + of + lf + cf + "$"
), uf = ["material", "materials", "bones", "map"];
class df {
  constructor(t, e, n) {
    const r = n || $t.parseTrackName(e);
    this._targetGroup = t, this._bindings = t.subscribe_(e, r);
  }
  getValue(t, e) {
    this.bind();
    const n = this._targetGroup.nCachedObjects_, r = this._bindings[n];
    r !== void 0 && r.getValue(t, e);
  }
  setValue(t, e) {
    const n = this._bindings;
    for (let r = this._targetGroup.nCachedObjects_, s = n.length; r !== s; ++r)
      n[r].setValue(t, e);
  }
  bind() {
    const t = this._bindings;
    for (let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e)
      t[e].bind();
  }
  unbind() {
    const t = this._bindings;
    for (let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e)
      t[e].unbind();
  }
}
class $t {
  constructor(t, e, n) {
    this.path = e, this.parsedPath = n || $t.parseTrackName(e), this.node = $t.findNode(t, this.parsedPath.nodeName), this.rootNode = t, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(t, e, n) {
    return t && t.isAnimationObjectGroup ? new $t.Composite(t, e, n) : new $t(t, e, n);
  }
  /**
   * Replaces spaces with underscores and removes unsupported characters from
   * node names, to ensure compatibility with parseTrackName().
   *
   * @param {string} name Node name to be sanitized.
   * @return {string}
   */
  static sanitizeNodeName(t) {
    return t.replace(/\s/g, "_").replace(rf, "");
  }
  static parseTrackName(t) {
    const e = hf.exec(t);
    if (e === null)
      throw new Error("PropertyBinding: Cannot parse trackName: " + t);
    const n = {
      // directoryName: matches[ 1 ], // (tschw) currently unused
      nodeName: e[2],
      objectName: e[3],
      objectIndex: e[4],
      propertyName: e[5],
      // required
      propertyIndex: e[6]
    }, r = n.nodeName && n.nodeName.lastIndexOf(".");
    if (r !== void 0 && r !== -1) {
      const s = n.nodeName.substring(r + 1);
      uf.indexOf(s) !== -1 && (n.nodeName = n.nodeName.substring(0, r), n.objectName = s);
    }
    if (n.propertyName === null || n.propertyName.length === 0)
      throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t);
    return n;
  }
  static findNode(t, e) {
    if (e === void 0 || e === "" || e === "." || e === -1 || e === t.name || e === t.uuid)
      return t;
    if (t.skeleton) {
      const n = t.skeleton.getBoneByName(e);
      if (n !== void 0)
        return n;
    }
    if (t.children) {
      const n = function(s) {
        for (let a = 0; a < s.length; a++) {
          const o = s[a];
          if (o.name === e || o.uuid === e)
            return o;
          const l = n(o.children);
          if (l) return l;
        }
        return null;
      }, r = n(t.children);
      if (r)
        return r;
    }
    return null;
  }
  // these are used to "bind" a nonexistent property
  _getValue_unavailable() {
  }
  _setValue_unavailable() {
  }
  // Getters
  _getValue_direct(t, e) {
    t[e] = this.targetObject[this.propertyName];
  }
  _getValue_array(t, e) {
    const n = this.resolvedProperty;
    for (let r = 0, s = n.length; r !== s; ++r)
      t[e++] = n[r];
  }
  _getValue_arrayElement(t, e) {
    t[e] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(t, e) {
    this.resolvedProperty.toArray(t, e);
  }
  // Direct
  _setValue_direct(t, e) {
    this.targetObject[this.propertyName] = t[e];
  }
  _setValue_direct_setNeedsUpdate(t, e) {
    this.targetObject[this.propertyName] = t[e], this.targetObject.needsUpdate = !0;
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(t, e) {
    this.targetObject[this.propertyName] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // EntireArray
  _setValue_array(t, e) {
    const n = this.resolvedProperty;
    for (let r = 0, s = n.length; r !== s; ++r)
      n[r] = t[e++];
  }
  _setValue_array_setNeedsUpdate(t, e) {
    const n = this.resolvedProperty;
    for (let r = 0, s = n.length; r !== s; ++r)
      n[r] = t[e++];
    this.targetObject.needsUpdate = !0;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(t, e) {
    const n = this.resolvedProperty;
    for (let r = 0, s = n.length; r !== s; ++r)
      n[r] = t[e++];
    this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // ArrayElement
  _setValue_arrayElement(t, e) {
    this.resolvedProperty[this.propertyIndex] = t[e];
  }
  _setValue_arrayElement_setNeedsUpdate(t, e) {
    this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.needsUpdate = !0;
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(t, e) {
    this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // HasToFromArray
  _setValue_fromArray(t, e) {
    this.resolvedProperty.fromArray(t, e);
  }
  _setValue_fromArray_setNeedsUpdate(t, e) {
    this.resolvedProperty.fromArray(t, e), this.targetObject.needsUpdate = !0;
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(t, e) {
    this.resolvedProperty.fromArray(t, e), this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _getValue_unbound(t, e) {
    this.bind(), this.getValue(t, e);
  }
  _setValue_unbound(t, e) {
    this.bind(), this.setValue(t, e);
  }
  // create getter / setter pair for a property in the scene graph
  bind() {
    let t = this.node;
    const e = this.parsedPath, n = e.objectName, r = e.propertyName;
    let s = e.propertyIndex;
    if (t || (t = $t.findNode(this.rootNode, e.nodeName), this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t) {
      console.warn("THREE.PropertyBinding: No target node found for track: " + this.path + ".");
      return;
    }
    if (n) {
      let c = e.objectIndex;
      switch (n) {
        case "materials":
          if (!t.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!t.material.materials) {
            console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            return;
          }
          t = t.material.materials;
          break;
        case "bones":
          if (!t.skeleton) {
            console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            return;
          }
          t = t.skeleton.bones;
          for (let h = 0; h < t.length; h++)
            if (t[h].name === c) {
              c = h;
              break;
            }
          break;
        case "map":
          if ("map" in t) {
            t = t.map;
            break;
          }
          if (!t.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!t.material.map) {
            console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
            return;
          }
          t = t.material.map;
          break;
        default:
          if (t[n] === void 0) {
            console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
            return;
          }
          t = t[n];
      }
      if (c !== void 0) {
        if (t[c] === void 0) {
          console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
          return;
        }
        t = t[c];
      }
    }
    const a = t[r];
    if (a === void 0) {
      const c = e.nodeName;
      console.error("THREE.PropertyBinding: Trying to update property for track: " + c + "." + r + " but it wasn't found.", t);
      return;
    }
    let o = this.Versioning.None;
    this.targetObject = t, t.needsUpdate !== void 0 ? o = this.Versioning.NeedsUpdate : t.matrixWorldNeedsUpdate !== void 0 && (o = this.Versioning.MatrixWorldNeedsUpdate);
    let l = this.BindingType.Direct;
    if (s !== void 0) {
      if (r === "morphTargetInfluences") {
        if (!t.geometry) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          return;
        }
        if (!t.geometry.morphAttributes) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
          return;
        }
        t.morphTargetDictionary[s] !== void 0 && (s = t.morphTargetDictionary[s]);
      }
      l = this.BindingType.ArrayElement, this.resolvedProperty = a, this.propertyIndex = s;
    } else a.fromArray !== void 0 && a.toArray !== void 0 ? (l = this.BindingType.HasFromToArray, this.resolvedProperty = a) : Array.isArray(a) ? (l = this.BindingType.EntireArray, this.resolvedProperty = a) : this.propertyName = r;
    this.getValue = this.GetterByBindingType[l], this.setValue = this.SetterByBindingTypeAndVersioning[l][o];
  }
  unbind() {
    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
}
$t.Composite = df;
$t.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3
};
$t.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2
};
$t.prototype.GetterByBindingType = [
  $t.prototype._getValue_direct,
  $t.prototype._getValue_array,
  $t.prototype._getValue_arrayElement,
  $t.prototype._getValue_toArray
];
$t.prototype.SetterByBindingTypeAndVersioning = [
  [
    // Direct
    $t.prototype._setValue_direct,
    $t.prototype._setValue_direct_setNeedsUpdate,
    $t.prototype._setValue_direct_setMatrixWorldNeedsUpdate
  ],
  [
    // EntireArray
    $t.prototype._setValue_array,
    $t.prototype._setValue_array_setNeedsUpdate,
    $t.prototype._setValue_array_setMatrixWorldNeedsUpdate
  ],
  [
    // ArrayElement
    $t.prototype._setValue_arrayElement,
    $t.prototype._setValue_arrayElement_setNeedsUpdate,
    $t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
  ],
  [
    // HasToFromArray
    $t.prototype._setValue_fromArray,
    $t.prototype._setValue_fromArray_setNeedsUpdate,
    $t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
  ]
];
class ff {
  constructor(t, e, n = null, r = e.blendMode) {
    this._mixer = t, this._clip = e, this._localRoot = n, this.blendMode = r;
    const s = e.tracks, a = s.length, o = new Array(a), l = {
      endingStart: 2400,
      endingEnd: 2400
    };
    for (let c = 0; c !== a; ++c) {
      const h = s[c].createInterpolant(null);
      o[c] = h, h.settings = l;
    }
    this._interpolantSettings = l, this._interpolants = o, this._propertyBindings = new Array(a), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = 2201, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0;
  }
  // State & Scheduling
  play() {
    return this._mixer._activateAction(this), this;
  }
  stop() {
    return this._mixer._deactivateAction(this), this.reset();
  }
  reset() {
    return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping();
  }
  isRunning() {
    return this.enabled && !this.paused && this.timeScale !== 0 && this._startTime === null && this._mixer._isActiveAction(this);
  }
  // return true when play has been called
  isScheduled() {
    return this._mixer._isActiveAction(this);
  }
  startAt(t) {
    return this._startTime = t, this;
  }
  setLoop(t, e) {
    return this.loop = t, this.repetitions = e, this;
  }
  // Weight
  // set the weight stopping any scheduled fading
  // although .enabled = false yields an effective weight of zero, this
  // method does *not* change .enabled, because it would be confusing
  setEffectiveWeight(t) {
    return this.weight = t, this._effectiveWeight = this.enabled ? t : 0, this.stopFading();
  }
  // return the weight considering fading and .enabled
  getEffectiveWeight() {
    return this._effectiveWeight;
  }
  fadeIn(t) {
    return this._scheduleFading(t, 0, 1);
  }
  fadeOut(t) {
    return this._scheduleFading(t, 1, 0);
  }
  crossFadeFrom(t, e, n) {
    if (t.fadeOut(e), this.fadeIn(e), n) {
      const r = this._clip.duration, s = t._clip.duration, a = s / r, o = r / s;
      t.warp(1, a, e), this.warp(o, 1, e);
    }
    return this;
  }
  crossFadeTo(t, e, n) {
    return t.crossFadeFrom(this, e, n);
  }
  stopFading() {
    const t = this._weightInterpolant;
    return t !== null && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this;
  }
  // Time Scale Control
  // set the time scale stopping any scheduled warping
  // although .paused = true yields an effective time scale of zero, this
  // method does *not* change .paused, because it would be confusing
  setEffectiveTimeScale(t) {
    return this.timeScale = t, this._effectiveTimeScale = this.paused ? 0 : t, this.stopWarping();
  }
  // return the time scale considering warping and .paused
  getEffectiveTimeScale() {
    return this._effectiveTimeScale;
  }
  setDuration(t) {
    return this.timeScale = this._clip.duration / t, this.stopWarping();
  }
  syncWith(t) {
    return this.time = t.time, this.timeScale = t.timeScale, this.stopWarping();
  }
  halt(t) {
    return this.warp(this._effectiveTimeScale, 0, t);
  }
  warp(t, e, n) {
    const r = this._mixer, s = r.time, a = this.timeScale;
    let o = this._timeScaleInterpolant;
    o === null && (o = r._lendControlInterpolant(), this._timeScaleInterpolant = o);
    const l = o.parameterPositions, c = o.sampleValues;
    return l[0] = s, l[1] = s + n, c[0] = t / a, c[1] = e / a, this;
  }
  stopWarping() {
    const t = this._timeScaleInterpolant;
    return t !== null && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this;
  }
  // Object Accessors
  getMixer() {
    return this._mixer;
  }
  getClip() {
    return this._clip;
  }
  getRoot() {
    return this._localRoot || this._mixer._root;
  }
  // Interna
  _update(t, e, n, r) {
    if (!this.enabled) {
      this._updateWeight(t);
      return;
    }
    const s = this._startTime;
    if (s !== null) {
      const l = (t - s) * n;
      l < 0 || n === 0 ? e = 0 : (this._startTime = null, e = n * l);
    }
    e *= this._updateTimeScale(t);
    const a = this._updateTime(e), o = this._updateWeight(t);
    if (o > 0) {
      const l = this._interpolants, c = this._propertyBindings;
      switch (this.blendMode) {
        case 2501:
          for (let h = 0, u = l.length; h !== u; ++h)
            l[h].evaluate(a), c[h].accumulateAdditive(o);
          break;
        case 2500:
        default:
          for (let h = 0, u = l.length; h !== u; ++h)
            l[h].evaluate(a), c[h].accumulate(r, o);
      }
    }
  }
  _updateWeight(t) {
    let e = 0;
    if (this.enabled) {
      e = this.weight;
      const n = this._weightInterpolant;
      if (n !== null) {
        const r = n.evaluate(t)[0];
        e *= r, t > n.parameterPositions[1] && (this.stopFading(), r === 0 && (this.enabled = !1));
      }
    }
    return this._effectiveWeight = e, e;
  }
  _updateTimeScale(t) {
    let e = 0;
    if (!this.paused) {
      e = this.timeScale;
      const n = this._timeScaleInterpolant;
      if (n !== null) {
        const r = n.evaluate(t)[0];
        e *= r, t > n.parameterPositions[1] && (this.stopWarping(), e === 0 ? this.paused = !0 : this.timeScale = e);
      }
    }
    return this._effectiveTimeScale = e, e;
  }
  _updateTime(t) {
    const e = this._clip.duration, n = this.loop;
    let r = this.time + t, s = this._loopCount;
    const a = n === 2202;
    if (t === 0)
      return s === -1 ? r : a && (s & 1) === 1 ? e - r : r;
    if (n === 2200) {
      s === -1 && (this._loopCount = 0, this._setEndings(!0, !0, !1));
      t: {
        if (r >= e)
          r = e;
        else if (r < 0)
          r = 0;
        else {
          this.time = r;
          break t;
        }
        this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, this.time = r, this._mixer.dispatchEvent({
          type: "finished",
          action: this,
          direction: t < 0 ? -1 : 1
        });
      }
    } else {
      if (s === -1 && (t >= 0 ? (s = 0, this._setEndings(!0, this.repetitions === 0, a)) : this._setEndings(this.repetitions === 0, !0, a)), r >= e || r < 0) {
        const o = Math.floor(r / e);
        r -= e * o, s += Math.abs(o);
        const l = this.repetitions - s;
        if (l <= 0)
          this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, r = t > 0 ? e : 0, this.time = r, this._mixer.dispatchEvent({
            type: "finished",
            action: this,
            direction: t > 0 ? 1 : -1
          });
        else {
          if (l === 1) {
            const c = t < 0;
            this._setEndings(c, !c, a);
          } else
            this._setEndings(!1, !1, a);
          this._loopCount = s, this.time = r, this._mixer.dispatchEvent({
            type: "loop",
            action: this,
            loopDelta: o
          });
        }
      } else
        this.time = r;
      if (a && (s & 1) === 1)
        return e - r;
    }
    return r;
  }
  _setEndings(t, e, n) {
    const r = this._interpolantSettings;
    n ? (r.endingStart = 2401, r.endingEnd = 2401) : (t ? r.endingStart = this.zeroSlopeAtStart ? 2401 : 2400 : r.endingStart = 2402, e ? r.endingEnd = this.zeroSlopeAtEnd ? 2401 : 2400 : r.endingEnd = 2402);
  }
  _scheduleFading(t, e, n) {
    const r = this._mixer, s = r.time;
    let a = this._weightInterpolant;
    a === null && (a = r._lendControlInterpolant(), this._weightInterpolant = a);
    const o = a.parameterPositions, l = a.sampleValues;
    return o[0] = s, l[0] = e, o[1] = s + t, l[1] = n, this;
  }
}
const pf = new Float32Array(1);
class so extends In {
  constructor(t) {
    super(), this._root = t, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1;
  }
  _bindAction(t, e) {
    const n = t._localRoot || this._root, r = t._clip.tracks, s = r.length, a = t._propertyBindings, o = t._interpolants, l = n.uuid, c = this._bindingsByRootAndName;
    let h = c[l];
    h === void 0 && (h = {}, c[l] = h);
    for (let u = 0; u !== s; ++u) {
      const d = r[u], f = d.name;
      let _ = h[f];
      if (_ !== void 0)
        ++_.referenceCount, a[u] = _;
      else {
        if (_ = a[u], _ !== void 0) {
          _._cacheIndex === null && (++_.referenceCount, this._addInactiveBinding(_, l, f));
          continue;
        }
        const x = e && e._propertyBindings[u].binding.parsedPath;
        _ = new nf(
          $t.create(n, f, x),
          d.ValueTypeName,
          d.getValueSize()
        ), ++_.referenceCount, this._addInactiveBinding(_, l, f), a[u] = _;
      }
      o[u].resultBuffer = _.buffer;
    }
  }
  _activateAction(t) {
    if (!this._isActiveAction(t)) {
      if (t._cacheIndex === null) {
        const n = (t._localRoot || this._root).uuid, r = t._clip.uuid, s = this._actionsByClip[r];
        this._bindAction(
          t,
          s && s.knownActions[0]
        ), this._addInactiveAction(t, r, n);
      }
      const e = t._propertyBindings;
      for (let n = 0, r = e.length; n !== r; ++n) {
        const s = e[n];
        s.useCount++ === 0 && (this._lendBinding(s), s.saveOriginalState());
      }
      this._lendAction(t);
    }
  }
  _deactivateAction(t) {
    if (this._isActiveAction(t)) {
      const e = t._propertyBindings;
      for (let n = 0, r = e.length; n !== r; ++n) {
        const s = e[n];
        --s.useCount === 0 && (s.restoreOriginalState(), this._takeBackBinding(s));
      }
      this._takeBackAction(t);
    }
  }
  // Memory manager
  _initMemoryManager() {
    this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
    const t = this;
    this.stats = {
      actions: {
        get total() {
          return t._actions.length;
        },
        get inUse() {
          return t._nActiveActions;
        }
      },
      bindings: {
        get total() {
          return t._bindings.length;
        },
        get inUse() {
          return t._nActiveBindings;
        }
      },
      controlInterpolants: {
        get total() {
          return t._controlInterpolants.length;
        },
        get inUse() {
          return t._nActiveControlInterpolants;
        }
      }
    };
  }
  // Memory management for AnimationAction objects
  _isActiveAction(t) {
    const e = t._cacheIndex;
    return e !== null && e < this._nActiveActions;
  }
  _addInactiveAction(t, e, n) {
    const r = this._actions, s = this._actionsByClip;
    let a = s[e];
    if (a === void 0)
      a = {
        knownActions: [t],
        actionByRoot: {}
      }, t._byClipCacheIndex = 0, s[e] = a;
    else {
      const o = a.knownActions;
      t._byClipCacheIndex = o.length, o.push(t);
    }
    t._cacheIndex = r.length, r.push(t), a.actionByRoot[n] = t;
  }
  _removeInactiveAction(t) {
    const e = this._actions, n = e[e.length - 1], r = t._cacheIndex;
    n._cacheIndex = r, e[r] = n, e.pop(), t._cacheIndex = null;
    const s = t._clip.uuid, a = this._actionsByClip, o = a[s], l = o.knownActions, c = l[l.length - 1], h = t._byClipCacheIndex;
    c._byClipCacheIndex = h, l[h] = c, l.pop(), t._byClipCacheIndex = null;
    const u = o.actionByRoot, d = (t._localRoot || this._root).uuid;
    delete u[d], l.length === 0 && delete a[s], this._removeInactiveBindingsForAction(t);
  }
  _removeInactiveBindingsForAction(t) {
    const e = t._propertyBindings;
    for (let n = 0, r = e.length; n !== r; ++n) {
      const s = e[n];
      --s.referenceCount === 0 && this._removeInactiveBinding(s);
    }
  }
  _lendAction(t) {
    const e = this._actions, n = t._cacheIndex, r = this._nActiveActions++, s = e[r];
    t._cacheIndex = r, e[r] = t, s._cacheIndex = n, e[n] = s;
  }
  _takeBackAction(t) {
    const e = this._actions, n = t._cacheIndex, r = --this._nActiveActions, s = e[r];
    t._cacheIndex = r, e[r] = t, s._cacheIndex = n, e[n] = s;
  }
  // Memory management for PropertyMixer objects
  _addInactiveBinding(t, e, n) {
    const r = this._bindingsByRootAndName, s = this._bindings;
    let a = r[e];
    a === void 0 && (a = {}, r[e] = a), a[n] = t, t._cacheIndex = s.length, s.push(t);
  }
  _removeInactiveBinding(t) {
    const e = this._bindings, n = t.binding, r = n.rootNode.uuid, s = n.path, a = this._bindingsByRootAndName, o = a[r], l = e[e.length - 1], c = t._cacheIndex;
    l._cacheIndex = c, e[c] = l, e.pop(), delete o[s], Object.keys(o).length === 0 && delete a[r];
  }
  _lendBinding(t) {
    const e = this._bindings, n = t._cacheIndex, r = this._nActiveBindings++, s = e[r];
    t._cacheIndex = r, e[r] = t, s._cacheIndex = n, e[n] = s;
  }
  _takeBackBinding(t) {
    const e = this._bindings, n = t._cacheIndex, r = --this._nActiveBindings, s = e[r];
    t._cacheIndex = r, e[r] = t, s._cacheIndex = n, e[n] = s;
  }
  // Memory management of Interpolants for weight and time scale
  _lendControlInterpolant() {
    const t = this._controlInterpolants, e = this._nActiveControlInterpolants++;
    let n = t[e];
    return n === void 0 && (n = new Qa(
      new Float32Array(2),
      new Float32Array(2),
      1,
      pf
    ), n.__cacheIndex = e, t[e] = n), n;
  }
  _takeBackControlInterpolant(t) {
    const e = this._controlInterpolants, n = t.__cacheIndex, r = --this._nActiveControlInterpolants, s = e[r];
    t.__cacheIndex = r, e[r] = t, s.__cacheIndex = n, e[n] = s;
  }
  // return an action for a clip optionally using a custom root target
  // object (this method allocates a lot of dynamic memory in case a
  // previously unknown clip/root combination is specified)
  clipAction(t, e, n) {
    const r = e || this._root, s = r.uuid;
    let a = typeof t == "string" ? be.findByName(r, t) : t;
    const o = a !== null ? a.uuid : t, l = this._actionsByClip[o];
    let c = null;
    if (n === void 0 && (a !== null ? n = a.blendMode : n = 2500), l !== void 0) {
      const u = l.actionByRoot[s];
      if (u !== void 0 && u.blendMode === n)
        return u;
      c = l.knownActions[0], a === null && (a = c._clip);
    }
    if (a === null) return null;
    const h = new ff(this, a, e, n);
    return this._bindAction(h, c), this._addInactiveAction(h, o, s), h;
  }
  // get an existing action
  existingAction(t, e) {
    const n = e || this._root, r = n.uuid, s = typeof t == "string" ? be.findByName(n, t) : t, a = s ? s.uuid : t, o = this._actionsByClip[a];
    return o !== void 0 && o.actionByRoot[r] || null;
  }
  // deactivates all previously scheduled actions
  stopAllAction() {
    const t = this._actions, e = this._nActiveActions;
    for (let n = e - 1; n >= 0; --n)
      t[n].stop();
    return this;
  }
  // advance the time and update apply the animation
  update(t) {
    t *= this.timeScale;
    const e = this._actions, n = this._nActiveActions, r = this.time += t, s = Math.sign(t), a = this._accuIndex ^= 1;
    for (let c = 0; c !== n; ++c)
      e[c]._update(r, t, s, a);
    const o = this._bindings, l = this._nActiveBindings;
    for (let c = 0; c !== l; ++c)
      o[c].apply(a);
    return this;
  }
  // Allows you to seek to a specific time in an animation.
  setTime(t) {
    this.time = 0;
    for (let e = 0; e < this._actions.length; e++)
      this._actions[e].time = 0;
    return this.update(t);
  }
  // return this mixer's root target object
  getRoot() {
    return this._root;
  }
  // free all resources specific to a particular clip
  uncacheClip(t) {
    const e = this._actions, n = t.uuid, r = this._actionsByClip, s = r[n];
    if (s !== void 0) {
      const a = s.knownActions;
      for (let o = 0, l = a.length; o !== l; ++o) {
        const c = a[o];
        this._deactivateAction(c);
        const h = c._cacheIndex, u = e[e.length - 1];
        c._cacheIndex = null, c._byClipCacheIndex = null, u._cacheIndex = h, e[h] = u, e.pop(), this._removeInactiveBindingsForAction(c);
      }
      delete r[n];
    }
  }
  // free all resources specific to a particular root target object
  uncacheRoot(t) {
    const e = t.uuid, n = this._actionsByClip;
    for (const a in n) {
      const o = n[a].actionByRoot, l = o[e];
      l !== void 0 && (this._deactivateAction(l), this._removeInactiveAction(l));
    }
    const r = this._bindingsByRootAndName, s = r[e];
    if (s !== void 0)
      for (const a in s) {
        const o = s[a];
        o.restoreOriginalState(), this._removeInactiveBinding(o);
      }
  }
  // remove a targeted clip from the cache
  uncacheAction(t, e) {
    const n = this.existingAction(t, e);
    n !== null && (this._deactivateAction(n), this._removeInactiveAction(n));
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: es
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = es);
const ao = {
  penguin: { suit: 2832999, belly: 16645109, accent: 16098851 },
  cat: { suit: 15241818, belly: 16774114, accent: 16748451 }
}, oo = {
  penguin: { eyeStyle: "round", browStyle: "straight", mouthStyle: "o", hairStyle: "fringe", fringe: 5 },
  cat: { eyeStyle: "almond", browStyle: "arched", mouthStyle: "cat", hairStyle: "twintails", fringe: 4 }
}, va = {
  animal: "penguin",
  skin: 16767421,
  // 膚色 / skin tone
  hair: 3089184,
  // 髮色 / hair colour
  blush: 16751272,
  // 腮紅 / cheeks
  eye: 2366490,
  // 眼珠 / iris
  eyeSize: 1,
  // 眼睛大小倍率 / eye scale multiplier
  fringe: 5,
  // 瀏海片數 / fringe tuft count
  ...ao.penguin,
  // suit / belly / accent
  ...oo.penguin
  // eyeStyle / browStyle / mouthStyle / hairStyle
}, mf = 0.72, ds = 0.16;
function Zn(i, t = 0.62) {
  return new Cn({ color: i, roughness: t, metalness: 0.02 });
}
function Ft(i, t, e, { pos: n, scale: r, rot: s } = {}) {
  const a = new Ne(t, e);
  return n && a.position.set(...n), r && a.scale.set(...r), s && a.rotation.set(...s), a.castShadow = !0, a.receiveShadow = !0, i.add(a), a;
}
function ze(i, t, e) {
  const n = new mn();
  return n.name = t, e && n.position.set(...e), i.add(n), n;
}
function ts(i = {}) {
  const t = i.animal ?? va.animal, e = { ...va, animal: t, ...ao[t], ...oo[t], ...i }, n = {
    skin: Zn(e.skin, 0.72),
    hair: Zn(e.hair, 0.78),
    suit: Zn(e.suit, 0.66),
    belly: Zn(e.belly, 0.7),
    accent: Zn(e.accent, 0.5),
    blush: new Cn({
      color: e.blush,
      roughness: 0.85,
      metalness: 0,
      transparent: !0,
      opacity: 0.72
    }),
    eye: new Cn({ color: e.eye, roughness: 0.25, metalness: 0.05 }),
    glint: new Cn({ color: 16777215, roughness: 0.15, emissive: 3355443 }),
    mouth: Zn(8203061, 0.6)
  }, r = xa[t] ?? xa.penguin, s = new mn();
  s.name = "chibi";
  const a = r.rig === "quad", o = ze(s, "hips", [0, a ? fs : ds, 0]);
  for (const c of r.parts) c(o, n);
  const l = ze(o, "head", a ? Sf : [0, mf, 0]);
  return r.hood(l, n), Af(l, n, e), { root: s, animations: Df(r.rig), rig: r.rig, source: "chibi", materials: n, config: e };
}
function _f(i, t) {
  const e = new se(0.4, 24, 18);
  Ft(i, e, t.suit, { pos: [0, 0.32, 0], scale: [0.94, 1.1, 0.86] }), Ft(i, e, t.belly, { pos: [0, 0.29, 0.055], scale: [0.74, 0.92, 0.8] }), Ft(i, new Rn(0.09, 0.16, 12), t.suit, {
    pos: [0, 0.06, -0.3],
    rot: [Math.PI * 0.62, 0, 0]
  });
}
function gf(i, t) {
  const e = new se(0.17, 16, 12);
  for (const n of [-1, 1]) {
    const r = ze(i, n < 0 ? "wingL" : "wingR", [n * 0.42, 0.5, 0]);
    r.rotation.z = n * -Dt, Ft(r, e, t.suit, { pos: [0, -0.18, 0], scale: [0.52, 1.3, 0.85] });
  }
}
function vf(i, t) {
  const e = new se(0.12, 14, 10);
  for (const n of [-1, 1]) {
    const r = ze(i, n < 0 ? "footL" : "footR", [n * 0.155, -0.12, 0]);
    Ft(r, e, t.accent, { pos: [0, 0, 0.06], scale: [0.72, 0.34, 1.15] });
  }
}
function xf(i, t) {
  lo(i, t), Ft(i, new Rn(0.075, 0.17, 14), t.accent, {
    pos: [0, 0.19, 0.19],
    rot: [Math.PI * 0.44, 0, 0]
  }), co(i, t, 0.245);
}
const fs = 0.34, Sf = [0, 0.2, 0.44];
function Mf(i, t) {
  const e = new se(0.34, 22, 16);
  Ft(i, e, t.suit, { pos: [0, 0, 0], scale: [0.92, 0.9, 1.4] }), Ft(i, e, t.belly, { pos: [0, -0.09, 0.12], scale: [0.7, 0.68, 1.12] }), yf(i, t);
}
function yf(i, t) {
  const e = ze(i, "tail", [0, 0.14, -0.44]), n = new se(0.055, 12, 10), r = 7;
  for (let s = 0; s < r; s++) {
    const a = s / (r - 1), o = a * Math.PI * 0.55, l = 1 - a * 0.4;
    Ft(e, n, s === r - 1 ? t.belly : t.suit, {
      pos: [0, Math.sin(o) * 0.4, -Math.cos(o) * 0.16 + 0.16],
      scale: [l, l, l]
    });
  }
}
function Ef(i, t) {
  const e = new se(0.1, 14, 10), n = new se(0.082, 14, 10), r = new se(0.02, 8, 6);
  for (const [s, a, o] of [
    ["legFL", -1, 1],
    ["legFR", 1, 1],
    ["legBL", -1, -1],
    ["legBR", 1, -1]
  ]) {
    const l = ze(i, s, [a * 0.185, -0.12, o * 0.3]);
    Ft(l, e, t.suit, { pos: [0, -0.06, 0], scale: [0.85, 1.15, 0.85] }), Ft(l, n, t.belly, { pos: [0, -0.17, 0.015], scale: [0.92, 0.72, 1.1] });
    for (const c of [-0.032, 0.032])
      Ft(l, r, t.accent, { pos: [c, -0.215, 0.02], scale: [1, 0.6, 1] });
  }
}
function Tf(i, t) {
  lo(i, t);
  for (const n of [-1, 1]) {
    const r = ze(i, n < 0 ? "earL" : "earR", [n * 0.2, 0.28, 0.02]);
    r.rotation.set(-0.05, 0, n * 0.42), Ft(r, new Rn(0.11, 0.24, 4), t.suit, { rot: [0, Math.PI / 4, 0] }), Ft(r, new Rn(0.065, 0.15, 4), t.accent, {
      pos: [0, 0.015, 0.04],
      rot: [0, Math.PI / 4, 0]
    });
  }
  Ft(i, new Rn(0.045, 0.05, 3), t.accent, {
    pos: [0, 0.185, 0.215],
    rot: [Math.PI * 0.42, 0, Math.PI]
  });
  const e = new lr(6e-3, 0.16, 3, 6);
  for (const n of [-1, 1])
    for (const [r, s] of [0.05, 0, -0.05].entries())
      Ft(i, e, t.belly, {
        pos: [n * 0.255, s - 0.02, 0.185],
        rot: [0, n * 0.75, n * (Math.PI / 2 + (r - 1) * 0.24)]
      });
  co(i, t, 0.215);
}
const xa = {
  penguin: { rig: "biped", parts: [_f, gf, vf], hood: xf },
  cat: { rig: "quad", parts: [Mf, Ef], hood: Tf }
};
function lo(i, t) {
  Ft(i, new se(0.34, 26, 20), t.suit, {
    pos: [0, 0.01, -0.05],
    scale: [1, 0.98, 1.02]
  }), Ft(i, new cr(0.285, 0.038, 12, 32), t.belly, { pos: [0, 0, 0.19] });
}
function co(i, t, e) {
  for (const n of [-1, 1])
    Ft(i, new se(0.04, 14, 12), t.eye, {
      pos: [n * 0.115, e, 0.185]
    });
}
function rr(i, t, e) {
  const n = new cr(i, t, 6, 18, e);
  return n.rotateZ(-Math.PI / 2 - e / 2), n;
}
function Af(i, t, e) {
  const n = Ft(i, new se(0.3, 26, 20), t.skin, {
    pos: [0, -0.01, 0.03],
    scale: [1, 1.02, 0.98]
  });
  n.name = "face", bf(i, t, e), wf(i, t, e);
  for (const r of [-1, 1])
    Ft(i, new se(0.062, 14, 10), t.blush, {
      pos: [r * 0.185, -0.055, 0.235],
      scale: [1.15, 0.72, 0.4]
    });
  Rf(i, t, e), Cf(i, t, e);
}
function bf(i, t, e) {
  const n = new se(0.063, 16, 12), r = new se(0.021, 10, 8), s = e.eyeStyle === "smiley", a = s ? rr(0.058, 0.014, 2.3) : null;
  for (const o of [-1, 1]) {
    const l = ze(i, o < 0 ? "eyeL" : "eyeR", [o * 0.118, 0.025, 0.265]), c = ze(l, o < 0 ? "eyeLSize" : "eyeRSize");
    if (c.scale.setScalar(e.eyeSize), s) {
      Ft(c, a, t.eye, { rot: [0, 0, Math.PI] });
      continue;
    }
    const h = e.eyeStyle === "almond";
    Ft(c, n, t.eye, {
      scale: h ? [1, 0.7, 1] : void 0,
      rot: h ? [0, 0, o * -0.22] : void 0
    }), Ft(c, r, t.glint, { pos: [o * 0.02, h ? 0.018 : 0.028, 0.05] }), Ft(c, new se(0.011, 8, 6), t.glint, { pos: [o * -0.025, -0.02, 0.052] });
  }
}
function wf(i, t, e) {
  const n = e.browStyle;
  for (const r of [-1, 1]) {
    const s = ze(i, r < 0 ? "browL" : "browR", [r * 0.12, 0.135, 0.27]);
    if (s.rotation.z = r * Ht, n === "none") continue;
    if (n === "arched") {
      Ft(s, rr(0.05, 0.012, 1.7), t.hair, { rot: [0, 0, Math.PI - r * Ht] });
      continue;
    }
    const a = n === "thick";
    Ft(s, new lr(a ? 0.019 : 0.012, a ? 0.08 : 0.075, 4, 8), t.hair);
  }
}
function Rf(i, t, e) {
  const n = ze(i, "mouth", [0, -0.115, 0.295]);
  if (n.scale.set(1, 0.55, 1), e.mouthStyle === "smile") {
    Ft(n, rr(0.058, 0.013, 2), t.mouth, { pos: [0, 0.03, 0] });
    return;
  }
  if (e.mouthStyle === "cat") {
    const r = rr(0.03, 0.011, 2.6);
    for (const s of [-1, 1]) Ft(n, r, t.mouth, { pos: [s * 0.028, 0.015, 0] });
    return;
  }
  Ft(n, new se(0.05, 16, 12), t.mouth, { scale: [1, 0.8, 0.55] });
}
function Cf(i, t, e) {
  if (e.hairStyle === "none") return;
  const n = ze(i, "hair"), r = new se(0.075, 14, 10), s = e.fringe;
  for (let a = 0; a < s; a++) {
    const o = s === 1 ? 0 : a / (s - 1) * 2 - 1, l = o * 0.62;
    Ft(n, r, t.hair, {
      pos: [Math.sin(l) * 0.24, 0.155 - Math.abs(o) * 0.03, Math.cos(l) * 0.2],
      scale: [0.85, 0.75, 0.7],
      rot: [0, l, o * 0.35]
    });
  }
  if (e.hairStyle === "short")
    for (const a of [-1, 1])
      Ft(n, r, t.hair, {
        pos: [a * 0.245, 0.02, 0.135],
        scale: [0.7, 1.15, 0.62],
        rot: [0, a * 0.5, a * 0.12]
      });
  if (e.hairStyle === "twintails") {
    const a = new se(0.055, 12, 10);
    for (const o of [-1, 1]) {
      Ft(n, new se(0.035, 10, 8), t.blush, {
        pos: [o * 0.285, 0.115, 0.06],
        scale: [1, 0.8, 0.8]
      });
      for (let l = 0; l < 4; l++) {
        const c = l / 3;
        Ft(n, a, t.hair, {
          pos: [o * (0.31 + c * 0.06), 0.05 - c * 0.2, 0.04 - c * 0.02],
          scale: [1 - c * 0.3, 1 - c * 0.2, 1 - c * 0.3]
        });
      }
    }
  }
}
const pi = new Ze(), Pf = new qe();
function mt(i, t, e) {
  const n = [];
  for (const [r, s, a] of e)
    pi.setFromEuler(Pf.set(r, s, a)), n.push(pi.x, pi.y, pi.z, pi.w);
  return new Si(`${i}.quaternion`, t, n);
}
function Ue(i, t, e) {
  return new ei(`${i}.position`, t, e.flat());
}
function me(i, t, e) {
  return new ei(`${i}.scale`, t, e.flat());
}
const Dt = 0.16, Ht = Math.PI / 2 - 0.16, Sa = [
  ["head", "euler", [0, 0, 0]],
  ["browL", "euler", [0, 0, Ht]],
  ["browR", "euler", [0, 0, -Ht]],
  ["eyeL", "scale", [1, 1, 1]],
  ["eyeR", "scale", [1, 1, 1]],
  ["mouth", "scale", [1, 0.55, 1]]
], If = {
  biped: [
    ["hips", "position", [0, ds, 0]],
    ["hips", "euler", [0, 0, 0]],
    ["wingL", "euler", [0, 0, Dt]],
    ["wingR", "euler", [0, 0, -Dt]],
    ["footL", "euler", [0, 0, 0]],
    ["footR", "euler", [0, 0, 0]],
    ...Sa
  ],
  quad: [
    ["hips", "position", [0, fs, 0]],
    ["hips", "euler", [0, 0, 0]],
    ["legFL", "euler", [0, 0, 0]],
    ["legFR", "euler", [0, 0, 0]],
    ["legBL", "euler", [0, 0, 0]],
    ["legBR", "euler", [0, 0, 0]],
    ["tail", "euler", [0, 0, 0]],
    ...Sa
  ]
};
function Lf(i, t) {
  const e = new Set(i.tracks.map((r) => r.name)), n = [0, i.duration];
  for (const [r, s, a] of If[t]) {
    const o = `${r}.${s === "euler" ? "quaternion" : s}`;
    e.has(o) || (s === "euler" ? i.tracks.push(mt(r, n, [a, a])) : s === "scale" ? i.tracks.push(me(r, n, [a, a])) : i.tracks.push(Ue(r, n, [a, a])));
  }
  return i;
}
function jn(i, t) {
  return me(i, [t - 0.09, t - 0.04, t, t + 0.05, t + 0.13], [
    [1, 1, 1],
    [1, 0.5, 1],
    [1, 0.06, 1],
    [1, 0.5, 1],
    [1, 1, 1]
  ]);
}
function Df(i) {
  return (i === "quad" ? Nf() : Uf()).map((t) => Lf(t, i));
}
function Uf() {
  const i = ds, t = [0, 1, 2, 3, 4], e = new be("Idle", 4, [
    Ue("hips", t, [[0, i, 0], [0, i + 0.022, 0], [0, i, 0], [0, i + 0.022, 0], [0, i, 0]]),
    mt("head", t, [[0, -0.1, 0.02], [0.04, 0.06, -0.02], [0, 0.12, -0.03], [0.03, -0.02, 0.02], [0, -0.1, 0.02]]),
    mt("wingL", t, [[0, 0, Dt], [0, 0, Dt + 0.16], [0, 0, Dt], [0, 0, Dt + 0.16], [0, 0, Dt]]),
    mt("wingR", t, [[0, 0, -Dt], [0, 0, -Dt - 0.16], [0, 0, -Dt], [0, 0, -Dt - 0.16], [0, 0, -Dt]]),
    jn("eyeL", 2.6),
    jn("eyeR", 2.6)
  ]), n = [0, 0.3, 0.6, 0.9, 1.2, 1.5], r = new be("Wave", 1.5, [
    Ue("hips", [0, 0.75, 1.5], [[0, i, 0], [0, i + 0.03, 0], [0, i, 0]]),
    mt("head", n, [[0, 0, 0], [0, 0.1, 0.16], [0.03, 0.12, 0.2], [0, 0.1, 0.16], [0.03, 0.12, 0.2], [0, 0, 0]]),
    mt("wingR", n, [
      [0, 0, -Dt],
      [0, 0, -2.2],
      [0, 0, -2.75],
      [0, 0, -2.1],
      [0, 0, -2.75],
      [0, 0, -Dt]
    ]),
    mt("wingL", n, [
      [0, 0, Dt],
      [0, 0, Dt + 0.22],
      [0, 0, Dt],
      [0, 0, Dt + 0.22],
      [0, 0, Dt],
      [0, 0, Dt]
    ]),
    me("mouth", [0, 0.4, 1.1, 1.5], [[1, 0.55, 1], [1, 1.25, 1], [1, 1.25, 1], [1, 0.55, 1]]),
    jn("eyeL", 1.15),
    jn("eyeR", 1.15)
  ]), s = [0, 0.18, 0.42, 0.68, 0.9, 1.2], a = new be("Cheer", 1.2, [
    Ue("hips", s, [
      [0, i, 0],
      [0, i - 0.07, 0],
      [0, i + 0.34, 0],
      [0, i - 0.05, 0],
      [0, i + 0.1, 0],
      [0, i, 0]
    ]),
    mt("head", s, [[0, 0, 0], [0.16, 0, 0], [-0.24, 0, 0], [0.12, 0, 0], [-0.1, 0, 0], [0, 0, 0]]),
    mt("wingL", s, [
      [0, 0, Dt],
      [0, 0, 0.5],
      [0, 0, 2.7],
      [0, 0, 2.55],
      [0, 0, 2.7],
      [0, 0, Dt]
    ]),
    mt("wingR", s, [
      [0, 0, -Dt],
      [0, 0, -0.5],
      [0, 0, -2.7],
      [0, 0, -2.55],
      [0, 0, -2.7],
      [0, 0, -Dt]
    ]),
    mt("footL", s, [[0, 0, 0], [0.3, 0, 0], [-0.45, 0, 0], [0.3, 0, 0], [-0.1, 0, 0], [0, 0, 0]]),
    mt("footR", s, [[0, 0, 0], [0.3, 0, 0], [-0.45, 0, 0], [0.3, 0, 0], [-0.1, 0, 0], [0, 0, 0]]),
    me("eyeL", [0, 0.2, 0.95, 1.2], [[1, 1, 1], [1, 0.22, 1], [1, 0.22, 1], [1, 1, 1]]),
    me("eyeR", [0, 0.2, 0.95, 1.2], [[1, 1, 1], [1, 0.22, 1], [1, 0.22, 1], [1, 1, 1]]),
    me("mouth", [0, 0.2, 0.95, 1.2], [[1, 0.55, 1], [1.25, 1.7, 1], [1.25, 1.7, 1], [1, 0.55, 1]]),
    mt("browL", [0, 0.25, 1.2], [[0, 0, Ht], [0, 0, Ht - 0.26], [0, 0, Ht]]),
    mt("browR", [0, 0.25, 1.2], [[0, 0, -Ht], [0, 0, -(Ht - 0.26)], [0, 0, -Ht]])
  ]), o = [0, 0.45, 1.4, 1.8], l = new be("Sad", 1.8, [
    Ue("hips", o, [[0, i, 0], [0, i - 0.08, 0], [0, i - 0.06, 0], [0, i, 0]]),
    mt("head", o, [[0, 0, 0], [0.42, -0.12, 0], [0.38, 0.12, 0], [0, 0, 0]]),
    mt("wingL", o, [[0, 0, Dt], [0, 0, -0.06], [0, 0, -0.06], [0, 0, Dt]]),
    mt("wingR", o, [[0, 0, -Dt], [0, 0, 0.06], [0, 0, 0.06], [0, 0, -Dt]]),
    mt("browL", o, [
      [0, 0, Ht],
      [0, 0, Ht + 0.46],
      [0, 0, Ht + 0.46],
      [0, 0, Ht]
    ]),
    mt("browR", o, [
      [0, 0, -Ht],
      [0, 0, -(Ht + 0.46)],
      [0, 0, -(Ht + 0.46)],
      [0, 0, -Ht]
    ]),
    me("eyeL", o, [[1, 1, 1], [1, 0.7, 1], [1, 0.7, 1], [1, 1, 1]]),
    me("eyeR", o, [[1, 1, 1], [1, 0.7, 1], [1, 0.7, 1], [1, 1, 1]]),
    me("mouth", o, [[1, 0.55, 1], [0.72, 0.4, 1], [0.72, 0.4, 1], [1, 0.55, 1]])
  ]), c = [0, 0.16, 0.32, 0.48, 0.64, 0.8], h = new be("Talk", 0.8, [
    me("mouth", c, [[1, 0.5, 1], [1.08, 1.5, 1], [1, 0.55, 1], [1.05, 1.25, 1], [1, 0.6, 1], [1, 0.5, 1]]),
    mt("head", c, [[0, 0, 0], [0.05, 0.03, 0], [0, 0, 0], [0.05, -0.03, 0], [0, 0, 0], [0, 0, 0]]),
    Ue("hips", [0, 0.4, 0.8], [[0, i, 0], [0, i + 0.012, 0], [0, i, 0]])
  ]), u = [0, 0.2, 0.4, 0.6, 0.8], d = new be("Walk", 0.8, [
    Ue("hips", u, [
      [0, i, 0],
      [0.035, i + 0.03, 0],
      [0, i, 0],
      [-0.035, i + 0.03, 0],
      [0, i, 0]
    ]),
    // 企鵝走路的招牌是身體左右晃，不是腿在跨步 / Penguins waddle side to side, they don't stride
    mt("hips", u, [[0, 0, 0], [0, 0, -0.13], [0, 0, 0], [0, 0, 0.13], [0, 0, 0]]),
    mt("head", u, [[0, 0, 0], [0, 0, 0.08], [0, 0, 0], [0, 0, -0.08], [0, 0, 0]]),
    mt("footL", u, [[0.35, 0, 0], [0, 0, 0], [-0.35, 0, 0], [0, 0, 0], [0.35, 0, 0]]),
    mt("footR", u, [[-0.35, 0, 0], [0, 0, 0], [0.35, 0, 0], [0, 0, 0], [-0.35, 0, 0]]),
    mt("wingL", u, [
      [0, 0, Dt + 0.34],
      [0, 0, Dt],
      [0, 0, Dt + 0.34],
      [0, 0, Dt],
      [0, 0, Dt + 0.34]
    ]),
    mt("wingR", u, [
      [0, 0, -Dt],
      [0, 0, -Dt - 0.34],
      [0, 0, -Dt],
      [0, 0, -Dt - 0.34],
      [0, 0, -Dt]
    ])
  ]);
  return [e, r, a, l, h, d];
}
function Nf() {
  const i = fs, t = [0, 1, 2, 3, 4], e = new be("Idle", 4, [
    Ue("hips", t, [[0, i, 0], [0, i + 0.016, 0], [0, i, 0], [0, i + 0.016, 0], [0, i, 0]]),
    mt("head", t, [[0, -0.14, 0], [0.05, 0.02, 0.03], [0, 0.16, 0], [0.04, -0.04, -0.03], [0, -0.14, 0]]),
    // 尾巴左右慢擺，這是「貓」最強的辨識訊號 / The slow tail sway is the strongest cat signal
    mt("tail", t, [[0, 0.3, 0], [0, -0.1, 0.12], [0, -0.35, 0], [0, -0.05, -0.12], [0, 0.3, 0]]),
    jn("eyeL", 2.6),
    jn("eyeR", 2.6)
  ]), n = [0, 0.35, 0.7, 1.05, 1.4, 1.8], r = -0.62, s = new be("Wave", 1.8, [
    Ue("hips", n, [
      [0, i, 0],
      [0, i + 0.07, -0.05],
      [0, i + 0.08, -0.06],
      [0, i + 0.08, -0.06],
      [0, i + 0.08, -0.06],
      [0, i, 0]
    ]),
    mt("hips", n, [[0, 0, 0], [r, 0, 0], [r, 0, 0], [r, 0, 0], [r, 0, 0], [0, 0, 0]]),
    // hips 往後仰，頭要反向補正才會保持看向前方 / Counter-rotate the head so it keeps facing forward
    mt("head", n, [
      [0, 0, 0],
      [-r * 0.8, 0.1, 0.1],
      [-r * 0.8, 0.14, 0.16],
      [-r * 0.8, 0.1, 0.1],
      [-r * 0.8, 0.14, 0.16],
      [0, 0, 0]
    ]),
    mt("legFL", n, [[0, 0, 0], [-1.1, 0, 0.5], [-1.3, 0, 1.15], [-1.1, 0, 0.4], [-1.3, 0, 1.15], [0, 0, 0]]),
    mt("legFR", n, [[0, 0, 0], [-0.75, 0, 0], [-0.8, 0, 0], [-0.8, 0, 0], [-0.8, 0, 0], [0, 0, 0]]),
    mt("legBL", n, [[0, 0, 0], [0.5, 0, 0], [0.55, 0, 0], [0.55, 0, 0], [0.55, 0, 0], [0, 0, 0]]),
    mt("legBR", n, [[0, 0, 0], [0.5, 0, 0], [0.55, 0, 0], [0.55, 0, 0], [0.55, 0, 0], [0, 0, 0]]),
    mt("tail", n, [[0, 0.3, 0], [0, -0.3, 0], [0, 0.35, 0], [0, -0.3, 0], [0, 0.35, 0], [0, 0.3, 0]]),
    me("mouth", [0, 0.5, 1.4, 1.8], [[1, 0.55, 1], [1, 1.3, 1], [1, 1.3, 1], [1, 0.55, 1]])
  ]), a = [0, 0.16, 0.4, 0.64, 0.88, 1.2], o = new be("Cheer", 1.2, [
    Ue("hips", a, [
      [0, i, 0],
      [0, i - 0.06, 0],
      [0, i + 0.32, 0],
      [0, i - 0.04, 0],
      [0, i + 0.14, 0],
      [0, i, 0]
    ]),
    mt("hips", a, [[0, 0, 0], [0.14, 0, 0], [-0.24, 0, 0], [0.1, 0, 0], [-0.12, 0, 0], [0, 0, 0]]),
    mt("head", a, [[0, 0, 0], [0.1, 0, 0], [-0.3, 0, 0], [0.08, 0, 0], [-0.16, 0, 0], [0, 0, 0]]),
    // 跳起來時四腳往身體收 / All four legs tuck at the top of the hop
    mt("legFL", a, [[0, 0, 0], [0.3, 0, 0], [-0.9, 0, 0], [0.3, 0, 0], [-0.6, 0, 0], [0, 0, 0]]),
    mt("legFR", a, [[0, 0, 0], [0.3, 0, 0], [-0.9, 0, 0], [0.3, 0, 0], [-0.6, 0, 0], [0, 0, 0]]),
    mt("legBL", a, [[0, 0, 0], [-0.3, 0, 0], [0.9, 0, 0], [-0.3, 0, 0], [0.6, 0, 0], [0, 0, 0]]),
    mt("legBR", a, [[0, 0, 0], [-0.3, 0, 0], [0.9, 0, 0], [-0.3, 0, 0], [0.6, 0, 0], [0, 0, 0]]),
    mt("tail", a, [[0, 0.3, 0], [0, 0.1, -0.3], [0, 0, -0.8], [0, 0.1, -0.3], [0, 0, -0.6], [0, 0.3, 0]]),
    me("eyeL", [0, 0.2, 0.95, 1.2], [[1, 1, 1], [1, 0.22, 1], [1, 0.22, 1], [1, 1, 1]]),
    me("eyeR", [0, 0.2, 0.95, 1.2], [[1, 1, 1], [1, 0.22, 1], [1, 0.22, 1], [1, 1, 1]]),
    me("mouth", [0, 0.2, 0.95, 1.2], [[1, 0.55, 1], [1.25, 1.7, 1], [1.25, 1.7, 1], [1, 0.55, 1]]),
    mt("browL", [0, 0.25, 1.2], [[0, 0, Ht], [0, 0, Ht - 0.26], [0, 0, Ht]]),
    mt("browR", [0, 0.25, 1.2], [[0, 0, -Ht], [0, 0, -(Ht - 0.26)], [0, 0, -Ht]])
  ]), l = [0, 0.5, 1.4, 1.8], c = new be("Sad", 1.8, [
    Ue("hips", l, [[0, i, 0], [0, i - 0.13, 0], [0, i - 0.11, 0], [0, i, 0]]),
    mt("head", l, [[0, 0, 0], [0.5, -0.1, 0], [0.46, 0.1, 0], [0, 0, 0]]),
    mt("legFL", l, [[0, 0, 0], [0.55, 0, 0], [0.55, 0, 0], [0, 0, 0]]),
    mt("legFR", l, [[0, 0, 0], [0.55, 0, 0], [0.55, 0, 0], [0, 0, 0]]),
    mt("legBL", l, [[0, 0, 0], [-0.5, 0, 0], [-0.5, 0, 0], [0, 0, 0]]),
    mt("legBR", l, [[0, 0, 0], [-0.5, 0, 0], [-0.5, 0, 0], [0, 0, 0]]),
    // 尾巴不擺了，垂下來 / The tail stops swaying and drops
    mt("tail", l, [[0, 0.3, 0], [-0.85, 0, 0], [-0.85, 0, 0], [0, 0.3, 0]]),
    mt("browL", l, [
      [0, 0, Ht],
      [0, 0, Ht + 0.46],
      [0, 0, Ht + 0.46],
      [0, 0, Ht]
    ]),
    mt("browR", l, [
      [0, 0, -Ht],
      [0, 0, -(Ht + 0.46)],
      [0, 0, -(Ht + 0.46)],
      [0, 0, -Ht]
    ]),
    me("eyeL", l, [[1, 1, 1], [1, 0.7, 1], [1, 0.7, 1], [1, 1, 1]]),
    me("eyeR", l, [[1, 1, 1], [1, 0.7, 1], [1, 0.7, 1], [1, 1, 1]]),
    me("mouth", l, [[1, 0.55, 1], [0.72, 0.4, 1], [0.72, 0.4, 1], [1, 0.55, 1]])
  ]), h = [0, 0.16, 0.32, 0.48, 0.64, 0.8], u = new be("Talk", 0.8, [
    me("mouth", h, [[1, 0.5, 1], [1.08, 1.5, 1], [1, 0.55, 1], [1.05, 1.25, 1], [1, 0.6, 1], [1, 0.5, 1]]),
    mt("head", h, [[0, 0, 0], [0.06, 0.03, 0], [0, 0, 0], [0.06, -0.03, 0], [0, 0, 0], [0, 0, 0]]),
    mt("tail", h, [[0, 0.3, 0], [0, 0.1, 0], [0, -0.1, 0], [0, 0.1, 0], [0, 0.3, 0], [0, 0.3, 0]]),
    Ue("hips", [0, 0.4, 0.8], [[0, i, 0], [0, i + 0.01, 0], [0, i, 0]])
  ]), d = [0, 0.15, 0.3, 0.45, 0.6], f = (x) => [[x, 0, 0], [0, 0, 0], [-x, 0, 0], [0, 0, 0], [x, 0, 0]], _ = new be("Walk", 0.6, [
    Ue("hips", d, [
      [0, i, 0],
      [0, i + 0.025, 0],
      [0, i, 0],
      [0, i + 0.025, 0],
      [0, i, 0]
    ]),
    mt("hips", d, [[0, 0, 0], [0, 0.05, 0], [0, 0, 0], [0, -0.05, 0], [0, 0, 0]]),
    mt("head", d, [[0, 0, 0], [-0.05, 0, 0], [0, 0, 0], [-0.05, 0, 0], [0, 0, 0]]),
    mt("legFL", d, f(0.7)),
    mt("legBR", d, f(0.7)),
    mt("legFR", d, f(-0.7)),
    mt("legBL", d, f(-0.7)),
    mt("tail", d, [[0, 0.25, 0], [0, 0, 0.1], [0, -0.25, 0], [0, 0, -0.1], [0, 0.25, 0]])
  ]);
  return [e, s, o, c, u, _];
}
const Ff = /* @__PURE__ */ new Set(["Wave", "Cheer", "Sad"]), Zi = 30, Ye = {
  surfIn: [0, 6],
  catIn: [5, 10],
  dance: [10, 30],
  friendsFrom: 3,
  friendsEvery: 0.7
}, Ma = -1.15, ya = 1.35, $i = (i) => i < 0 ? 0 : i > 1 ? 1 : i, Ea = (i, t, e) => i + (t - i) * e, Ta = (i) => 1 - Math.pow(1 - i, 3), Zr = (i) => i < 0.5 ? 4 * i * i * i : 1 - Math.pow(-2 * i + 2, 3) / 2, Aa = (i, [t, e]) => $i((i - t) / (e - t));
function Bf(i, t = 128) {
  const e = document.createElement("canvas");
  e.width = e.height = t;
  const n = e.getContext("2d");
  n.font = `${Math.round(t * 0.76)}px "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif`, n.textAlign = "center", n.textBaseline = "middle", n.fillText(i, t / 2, t * 0.54);
  const r = new Ld(e);
  return r.colorSpace = Le, r;
}
function Of(i, t) {
  const e = [];
  return t.forEach((n, r) => {
    const s = new qa({
      map: Bf(n),
      transparent: !0,
      depthWrite: !1
      // 平面小圖不該遮住彼此的邊 / flat sprites shouldn't clip each other
    }), a = new Id(s);
    a.scale.setScalar(0.44);
    const o = r % 2, l = r / Math.max(1, t.length - 1) * 2 - 1, c = new I(
      l * 3.5,
      0.65 + o * 0.72,
      -1.5 - o * 0.9
    );
    a.position.copy(c), a.visible = !1, i.add(a), e.push({
      sprite: a,
      home: c,
      appearAt: Ye.friendsFrom + r * Ye.friendsEvery,
      speed: 2.4 + r % 5 * 0.35,
      // 每隻彈跳速度略不同，才不會像節拍器
      phase: r * 1.7 % (Math.PI * 2)
      // …節奏也錯開 / staggered so they don't pulse in lockstep
    });
  }), e;
}
function zf() {
  const i = new mn(), t = new Ne(
    new se(0.5, 20, 12),
    new Cn({ color: 16765286, roughness: 0.4 })
  );
  t.scale.set(0.42, 0.09, 1.15), t.castShadow = !0, i.add(t);
  const e = new Ne(
    new se(0.5, 20, 12),
    new Cn({ color: 15681391, roughness: 0.4 })
  );
  return e.scale.set(0.08, 0.1, 1.1), e.position.y = 5e-3, i.add(e), i;
}
function Gf() {
  const i = new Ne(
    new se(0.6, 20, 12),
    new Cn({ color: 14676991, roughness: 0.85, transparent: !0, opacity: 0.9 })
  );
  return i.scale.set(0.62, 0.3, 0.5), i;
}
function Vf({ friends: i = [], look: t = {} } = {}) {
  const e = new mn();
  e.name = "finale";
  const n = ts({ ...t, animal: "penguin" }), r = ts({ ...t, animal: "cat" });
  e.add(n.root, r.root);
  const s = zf(), a = Gf();
  e.add(s, a);
  const o = Of(e, i), l = [n, r].map((S) => {
    const y = new so(S.root), C = new Map(S.animations.map((w) => [w.name, y.clipAction(w)]));
    return { mixer: y, actions: C, current: null };
  }), [c, h] = l;
  function u(S, y) {
    if (S.current === y) return;
    const C = S.actions.get(y);
    C && (S.actions.get(S.current)?.fadeOut(0.3), C.setLoop(2201, 1 / 0), C.reset().setEffectiveWeight(1).fadeIn(0.3).play(), S.current = y);
  }
  u(c, "Idle"), u(h, "Idle");
  let d = 0;
  function f(S) {
    const y = Math.max(0, Math.min(S - d, 0.1));
    d = S;
    for (const C of l) C.mixer.update(y);
    _(S), x(S), p(S);
  }
  function _(S) {
    const y = n.root;
    if (S < Ye.surfIn[1]) {
      const w = Aa(S, Ye.surfIn);
      y.position.x = Ea(-7.5, Ma, Ta(w)), y.position.y = 0.08 + Math.sin(S * 3.4) * 0.05, y.position.z = 0, y.rotation.z = Math.sin(S * 2.6) * 0.16, y.rotation.y = 0.5 - w * 0.5, s.visible = !0, a.visible = !0, s.position.set(y.position.x, 0.05, 0), s.rotation.z = y.rotation.z, a.position.set(y.position.x - 0.62, 0.06, 0.05);
      const b = 1 - $i((S - (Ye.surfIn[1] - 1)) / 1);
      s.scale.setScalar(b), a.scale.set(0.62 * b, 0.3 * b, 0.5 * b), u(c, "Idle");
      return;
    }
    s.visible = !1, a.visible = !1;
    const C = S - Ye.dance[0];
    y.position.y = 0, y.rotation.z = 0, y.position.x = Ma + Math.sin(C * 1.5) * 0.42, y.position.z = Math.sin(C * 0.75) * 0.25, y.rotation.y = m(C, 6) + Math.sin(C * 1.5) * 0.3, u(c, "Cheer");
  }
  function x(S) {
    const y = r.root;
    if (S < Ye.catIn[0]) {
      y.visible = !1;
      return;
    }
    if (y.visible = !0, S < Ye.catIn[1]) {
      const w = Aa(S, Ye.catIn);
      y.position.x = Ea(7.5, ya, Zr(w));
      const b = w * 3 % 1;
      y.position.y = Math.sin(b * Math.PI) * 0.62, y.rotation.y = -0.5 + w * 0.5, y.rotation.x = Math.sin(b * Math.PI) * -0.2, u(h, "Cheer");
      return;
    }
    const C = S - Ye.dance[0];
    y.rotation.x = 0, y.position.x = ya + Math.sin(C * 1.5 + Math.PI) * 0.42, y.position.y = 0, y.position.z = Math.sin(C * 0.75 + Math.PI) * 0.25, y.rotation.y = -m(C, 9) + Math.sin(C * 1.5) * 0.3, u(h, "Cheer");
  }
  function m(S, y) {
    const C = $i((S - y) / 1.3), w = $i((S - y - 7) / 1.3);
    return (Zr(C) + Zr(w)) * Math.PI * 2;
  }
  function p(S) {
    for (const y of o) {
      if (S < y.appearAt) {
        y.sprite.visible = !1;
        continue;
      }
      y.sprite.visible = !0;
      const C = S - y.appearAt, w = C < 0.4 ? Ta(C / 0.4) : 1;
      y.sprite.scale.setScalar(0.44 * (w * 1.15 - 0.15 * Math.min(1, C / 0.4)));
      const b = Math.abs(Math.sin(S * y.speed + y.phase));
      y.sprite.position.set(
        y.home.x + Math.sin(S * 0.6 + y.phase) * 0.2,
        y.home.y + b * 0.42,
        y.home.z
      ), y.sprite.material.rotation = Math.sin(S * y.speed * 0.5 + y.phase) * 0.22;
    }
  }
  function T() {
    e.traverse((S) => {
      (S.isMesh || S.isSprite) && (S.geometry?.dispose(), S.material?.map?.dispose(), S.material?.dispose());
    });
    for (const S of l) S.mixer.stopAllAction();
  }
  return { root: e, update: f, dispose: T, duration: Zi, penguin: n, cat: r };
}
const kf = {
  happy: "Cheer",
  excited: "Cheer",
  sad: "Sad",
  neutral: "Talk",
  wave: "Wave",
  walk: "Walk",
  idle: "Idle"
}, $r = 0.22;
function Hf(i, { look: t = {}, pixelRatioCap: e = 2 } = {}) {
  const n = document.createElement("canvas");
  n.className = "mascot3d__canvas", n.setAttribute("aria-hidden", "true"), i.append(n);
  let r;
  try {
    r = new Wa({ canvas: n, alpha: !0, antialias: !0 });
  } catch {
    return n.remove(), null;
  }
  r.setPixelRatio(Math.min(devicePixelRatio || 1, e)), r.setClearAlpha(0), r.outputColorSpace = Le;
  const s = new Xa(), a = new De(30, 1, 0.1, 20);
  a.position.set(0.22, 0.86, 2.15), a.lookAt(0, 0.66, 0);
  const o = new io(16777215, 2.2);
  o.position.set(2, 3, 3), s.add(o), s.add(new no(16777215, 7043737, 1.5));
  const l = ts(t);
  s.add(l.root);
  const c = new so(l.root), h = new Map(l.animations.map((b) => [b.name, c.clipAction(b)]));
  let u = null;
  function d(b) {
    const U = h.get(b);
    if (!U || U === u) return;
    const K = Ff.has(b);
    U.setLoop(K ? 2200 : 2201, 1 / 0), U.clampWhenFinished = K, u?.fadeOut($r), U.reset().setEffectiveTimeScale(1).setEffectiveWeight(1).fadeIn($r).play(), u = U;
  }
  c.addEventListener("finished", (b) => {
    b.action === u && (u = null, d("Idle"), b.action.fadeOut($r));
  }), d("Idle");
  const f = new ro(), _ = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let x = !1;
  function m() {
    w(), c.update(f.getDelta()), r.render(s, a);
  }
  function p() {
    x || _ || (x = !0, f.getDelta(), r.setAnimationLoop(m));
  }
  function T() {
    x = !1, r.setAnimationLoop(null);
  }
  function S() {
    document.hidden ? T() : p();
  }
  document.addEventListener("visibilitychange", S);
  let y = 0, C = 0;
  function w() {
    const { clientWidth: b, clientHeight: U } = n;
    !b || !U || b === y && U === C || (y = b, C = U, r.setSize(b, U, !1), a.aspect = b / U, a.updateProjectionMatrix());
  }
  return _ ? m() : p(), {
    canvas: n,
    /** 用心情觸發表情動作 / Trigger an emote by mood. */
    react(b) {
      d(kf[b] || "Idle");
    },
    play: d,
    dispose() {
      T(), document.removeEventListener("visibilitychange", S), c.stopAllAction(), s.remove(l.root), l.root.traverse((b) => {
        b.isMesh && b.geometry.dispose();
      });
      for (const b of Object.values(l.materials)) b.dispose();
      r.dispose(), n.remove();
    }
  };
}
function Wf(i, { friends: t = [], look: e = {}, onDone: n } = {}) {
  const r = document.createElement("canvas");
  r.className = "finale__canvas", i.append(r);
  let s;
  try {
    s = new Wa({ canvas: r, alpha: !0, antialias: !0 });
  } catch {
    return r.remove(), null;
  }
  s.setPixelRatio(Math.min(devicePixelRatio || 1, 2)), s.setClearAlpha(0), s.outputColorSpace = Le;
  const a = new Xa(), o = new De(38, 1, 0.1, 60), l = new io(16777215, 2.2);
  l.position.set(3, 6, 5), a.add(l), a.add(new no(16777215, 7043737, 1.4));
  const c = Vf({ friends: t, look: e });
  a.add(c.root);
  let h = 0, u = !1;
  const d = new ro();
  let f = 0, _ = 0;
  function x() {
    const { clientWidth: m, clientHeight: p } = r;
    if (!m || !p || m === f && p === _) return;
    f = m, _ = p, s.setSize(m, p, !1), o.aspect = m / p;
    const T = o.aspect < 1 ? 11.5 : 6.6;
    o.position.set(0, 1.35, T), o.lookAt(0, 0.95, 0), o.updateProjectionMatrix();
  }
  return s.setAnimationLoop(() => {
    h += d.getDelta(), h >= Zi && !u && (u = !0, n?.()), x(), c.update(Math.min(h, Zi)), s.render(a, o);
  }), {
    canvas: r,
    duration: Zi,
    dispose() {
      s.setAnimationLoop(null), c.dispose(), s.dispose(), r.remove();
    }
  };
}
export {
  Wf as mountFinale,
  Hf as mountMascot
};
