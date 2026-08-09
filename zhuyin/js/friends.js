import { FRIENDS, STORY_INTRO, getRescued } from "./story.js";

const rescued = getRescued();
const count = rescued.filter(Boolean).length;

document.getElementById("friends-count").textContent = `${count}/${FRIENDS.length}`;
document.getElementById("friends-hint").textContent = count >= FRIENDS.length
  ? "太棒了！所有朋友都救回來了，派對開始囉！🎉"
  : `${STORY_INTRO.title} — 集滿 ${FRIENDS.length} 位朋友就能開派對！`;

document.getElementById("friends-grid").innerHTML = FRIENDS.map((f, i) => {
  const got = rescued[i];
  return `<div class="friend-card${got ? " friend-card--got" : ""}">
    <span class="friend-card__emoji">${got ? f.emoji : "❄️"}</span>
    <span class="friend-card__name">${got ? f.name : "？？？"}</span>
  </div>`;
}).join("");

// --- 收集完成的 30 秒慶祝動畫 / The 30-second finale, once all 20 are home ---
// 只有真的集滿才載入那包 3D（約 157 KB gzip）—— 沒集滿的人不該付這個流量。
// The 3D bundle (~157 KB gzip) only loads when the party is actually unlocked;
// nobody who hasn't finished should pay for it.

if (count >= FRIENDS.length) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "finale-open";
  button.textContent = "🎉 看大合奏 Watch the party";
  document.getElementById("friends-hint").after(button);
  button.addEventListener("click", () => openFinale(button));
}

async function openFinale(button) {
  button.disabled = true;
  button.textContent = "載入中… Loading…";

  let mountFinale;
  try {
    ({ mountFinale } = await import("./vendor/mascot3d.js"));
  } catch (err) {
    console.warn("[finale] 3D 載入失敗 / failed to load:", err);
    button.disabled = false;
    button.textContent = "🎉 看大合奏 Watch the party";
    return;
  }

  const overlay = document.createElement("div");
  overlay.className = "finale";
  overlay.innerHTML = `
    <div class="finale__stage"></div>
    <p class="finale__title">🎉 全部的朋友都回來了！</p>
    <button type="button" class="finale__close">關閉 Close</button>
  `;
  document.body.append(overlay);

  const stage = overlay.querySelector(".finale__stage");
  const scene = mountFinale(stage, {
    friends: FRIENDS.map((f) => f.emoji),
    look: { animal: "penguin" },
  });

  function close() {
    scene?.dispose();
    overlay.remove();
    button.disabled = false;
    button.textContent = "🎉 再看一次 Watch again";
  }

  overlay.querySelector(".finale__close").addEventListener("click", close);
  // 沒有 WebGL 就不要留一個空殼在畫面上 / don't leave an empty shell if WebGL is missing
  if (!scene) close();
}
