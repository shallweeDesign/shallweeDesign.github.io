// Floating mascot badge + speech bubble, shared across every page. Call
// initMascot() once, then mascotSay(text, mood) whenever something worth
// reacting to happens (correct/wrong answer, level complete, greetings).
//
// 波波 有兩種樣子：預設的 emoji，以及載入成功後換上的 3D Q 版角色。
// 3D 那包是延遲載入的（約 150 KB gzip），失敗、不支援 WebGL、或使用者開了
// 「減少動態效果」時都會自動留在 emoji，功能一樣不受影響。
//
// 波波 renders two ways: the emoji by default, and a 3D chibi once it loads.
// The 3D bundle is lazy-loaded (~150 KB gzip); if it fails, WebGL is missing,
// or reduced motion is on, the emoji stays and nothing else changes.

import { MASCOT } from "./story.js";

// 波波的外觀 —— 企鵝連身裝配色對齊 App 的 $sky
// 波波's look — the onesie palette lines up with the app's $sky.
const BOBO_LOOK = {
  animal: "penguin", // 也支援 "cat" / "cat" is also available
  suit: 0x0f4c75,
  belly: 0xfffbf0,
  accent: 0xf97316,
  skin: 0xffd9bd,
  hair: 0x2f2320,
  eyeSize: 1.1,
};

const TAP_LINES = [
  "嗨！我是波波～",
  "一起念注音好不好？",
  "你今天好棒喔！",
  "ㄅㄆㄇㄈ，我最喜歡了！",
];

let bubbleEl = null;
let avatarEl = null;
let hideTimer = 0;
let stage = null; // 3D 舞台，沒載到就一直是 null / the 3D stage, null when it never loaded

export function initMascot({ greeting } = {}) {
  if (document.getElementById("mascot")) return; // already on the page

  const el = document.createElement("div");
  el.id = "mascot";
  el.className = "mascot";
  el.innerHTML = `
    <span class="mascot__bubble" id="mascot-bubble" hidden></span>
    <button type="button" class="mascot__avatar" aria-label="和波波打招呼">${MASCOT.emoji}</button>
  `;
  document.body.appendChild(el);
  bubbleEl = document.getElementById("mascot-bubble");
  avatarEl = el.querySelector(".mascot__avatar");

  onTap(avatarEl, () => {
    mascotSay(TAP_LINES[Math.floor(Math.random() * TAP_LINES.length)], "happy");
    stage?.react("wave"); // 點一下會揮手，比 mascotSay 的開心表情更像在回應
  });

  load3D();

  if (greeting) mascotSay(greeting, "happy");
}

// mood: "happy" | "sad" | "excited" | "neutral" — tints the bubble
export function mascotSay(text, mood = "neutral", holdMs = 3200) {
  if (!bubbleEl) return;
  clearTimeout(hideTimer);
  bubbleEl.textContent = text;
  bubbleEl.hidden = false;
  bubbleEl.className = `mascot__bubble mascot__bubble--${mood}`;
  // restart the pop-in animation if a line is already showing
  void bubbleEl.offsetWidth;
  bubbleEl.classList.add("mascot__bubble--in");

  if (stage) {
    stage.react(mood);
  } else {
    avatarEl?.classList.remove("mascot__avatar--bounce");
    void avatarEl?.offsetWidth;
    avatarEl?.classList.add("mascot__avatar--bounce");
  }

  hideTimer = setTimeout(() => { bubbleEl.hidden = true; }, holdMs);
}

async function load3D() {
  try {
    const { mountMascot } = await import("./vendor/mascot3d.js");
    stage = mountMascot(avatarEl, { look: BOBO_LOOK });
    // mountMascot 拿不到 WebGL context 時回傳 null / it returns null when there's no WebGL
    if (stage) avatarEl.classList.add("mascot__avatar--3d");
  } catch (err) {
    console.warn("[mascot] 3D 載入失敗，維持 emoji / 3D failed to load, keeping the emoji:", err);
  }
}

// iPad 上 click 會慢半拍，所以照這個專案其他頁的做法用 touchstart + click，
// 再加去彈跳避免同一次點擊觸發兩遍。
// click lags on iPad, so match the rest of the app: touchstart + click, debounced
// so one tap doesn't fire twice.
function onTap(el, handler) {
  let last = 0;
  const fire = (e) => {
    const now = Date.now();
    if (now - last < 350) return;
    last = now;
    handler(e);
  };
  el.addEventListener("touchstart", fire, { passive: true });
  el.addEventListener("click", fire);
}
