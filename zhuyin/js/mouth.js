// SVG mouth shape illustration — ported from MouthShape.tsx

const FACE_FILL    = "#FFD8B0";
const FACE_STROKE  = "#E8A765";
const CAVITY_FILL  = "#FFF6EC";
const CAVITY_STROKE = "#F0CDA0";
const PALATE       = "#F4A6A6";
const TONGUE_FILL  = "#FF94AA";
const TONGUE_STROKE = "#E0688A";
const TEETH_FILL   = "#FFFFFF";
const TEETH_STROKE = "#D9D9D9";
const LIP_FILL     = "#E8837A";
const LIP_STROKE   = "#C45F58";

const TONGUE_HUMPS = {
  "low-flat":        { hx: 165, hy: 178, baseY: 182 },
  "mid-central":     { hx: 165, hy: 160, baseY: 182 },
  "front-palatal":   { hx: 195, hy: 145, baseY: 182 },
  "back-velar":      { hx: 135, hy: 145, baseY: 182 },
  "tip-alveolar":    { hx: 205, hy: 150, baseY: 182 },
  "high-front":      { hx: 195, hy: 138, baseY: 180 },
  "high-front-round":{ hx: 190, hy: 140, baseY: 180 },
  "high-back-round": { hx: 135, hy: 138, baseY: 180 },
  "tip-curled":      { hx: 178, hy: 172, baseY: 182, curl: true },
};

function tonguePath(tonguePosition) {
  const { hx, hy, baseY, curl } = TONGUE_HUMPS[tonguePosition];
  if (curl) {
    return `M118,196 L118,${baseY}
      C145,${baseY - 6} 162,${hy} 178,${hy}
      C196,${hy} 200,150 192,144
      C188,150 192,166 210,${baseY}
      L218,${baseY} L218,196 Z`;
  }
  return `M118,196 L118,${baseY} Q${hx},${hy} 218,${baseY} L218,196 Z`;
}

function lipsPath(lipShape) {
  switch (lipShape) {
    case "closed":
      return `<path d="M206,172 Q230,164 250,172 Q230,180 206,172 Z"
        fill="${LIP_FILL}" stroke="${LIP_STROKE}" stroke-width="2"/>`;
    case "spread":
      return `
        <path d="M196,160 Q228,150 252,162 Q228,156 200,166 Z"
          fill="${LIP_FILL}" stroke="${LIP_STROKE}" stroke-width="2"/>
        <path d="M196,184 Q228,194 252,182 Q228,188 200,178 Z"
          fill="${LIP_FILL}" stroke="${LIP_STROKE}" stroke-width="2"/>`;
    case "small-round":
      return `
        <ellipse cx="252" cy="172" rx="18" ry="20"
          fill="${LIP_FILL}" stroke="${LIP_STROKE}" stroke-width="2"/>
        <ellipse cx="252" cy="172" rx="7" ry="9"
          fill="${CAVITY_FILL}" stroke="${CAVITY_STROKE}" stroke-width="1"/>`;
    case "wide-round":
      return `
        <ellipse cx="256" cy="172" rx="24" ry="26"
          fill="${LIP_FILL}" stroke="${LIP_STROKE}" stroke-width="2"/>
        <ellipse cx="256" cy="172" rx="11" ry="13"
          fill="${CAVITY_FILL}" stroke="${CAVITY_STROKE}" stroke-width="1"/>`;
    case "relaxed-open":
    default:
      return `
        <path d="M204,158 Q230,148 250,160 Q232,153 208,164 Z"
          fill="${LIP_FILL}" stroke="${LIP_STROKE}" stroke-width="2"/>
        <path d="M204,196 Q230,206 250,194 Q232,201 208,190 Z"
          fill="${LIP_FILL}" stroke="${LIP_STROKE}" stroke-width="2"/>`;
  }
}

export function mouthShapeSVG(lipShape, tonguePosition) {
  return `<svg viewBox="0 0 300 260" role="img" aria-label="嘴形與舌頭位置示意圖"
      xmlns="http://www.w3.org/2000/svg">
    <path d="M60,40 C110,15 190,15 225,55 C245,80 250,105 248,130
      C260,145 258,175 235,200 C215,222 175,240 130,235
      C85,230 50,205 45,165 C42,140 42,110 48,85 C52,65 50,50 60,40 Z"
      fill="${FACE_FILL}" stroke="${FACE_STROKE}" stroke-width="3"/>
    <rect x="110" y="130" width="120" height="70" rx="25"
      fill="${CAVITY_FILL}" stroke="${CAVITY_STROKE}" stroke-width="2"/>
    <path d="M120,140 Q165,126 215,138"
      fill="none" stroke="${PALATE}" stroke-width="8" stroke-linecap="round"/>
    <path d="M114,140 Q106,166 116,196"
      fill="none" stroke="${PALATE}" stroke-width="8" stroke-linecap="round"/>
    <rect x="196" y="155" width="28" height="10" rx="2"
      fill="${TEETH_FILL}" stroke="${TEETH_STROKE}"/>
    <rect x="196" y="177" width="28" height="10" rx="2"
      fill="${TEETH_FILL}" stroke="${TEETH_STROKE}"/>
    <path d="${tonguePath(tonguePosition)}"
      fill="${TONGUE_FILL}" stroke="${TONGUE_STROKE}" stroke-width="2" stroke-linejoin="round"/>
    ${lipsPath(lipShape)}
  </svg>`;
}
