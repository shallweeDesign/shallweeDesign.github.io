// Floating mascot badge + speech bubble, shared across every page. Call
// initMascot() once, then mascotSay(text, mood) whenever something worth
// reacting to happens (correct/wrong answer, level complete, greetings).

import { MASCOT } from "./story.js";

let bubbleEl = null;
let hideTimer = 0;

export function initMascot({ greeting } = {}) {
  if (document.getElementById("mascot")) return; // already on the page

  const el = document.createElement("div");
  el.id = "mascot";
  el.className = "mascot";
  el.innerHTML = `
    <span class="mascot__bubble" id="mascot-bubble" hidden></span>
    <span class="mascot__avatar" aria-hidden="true">${MASCOT.emoji}</span>
  `;
  document.body.appendChild(el);
  bubbleEl = document.getElementById("mascot-bubble");

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

  const avatar = document.querySelector("#mascot .mascot__avatar");
  avatar?.classList.remove("mascot__avatar--bounce");
  void avatar?.offsetWidth;
  avatar?.classList.add("mascot__avatar--bounce");

  hideTimer = setTimeout(() => { bubbleEl.hidden = true; }, holdMs);
}
