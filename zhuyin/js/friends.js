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
