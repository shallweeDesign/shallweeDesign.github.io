import { STORY_INTRO } from "./story.js";

document.getElementById("story-title").textContent = STORY_INTRO.title;
document.getElementById("story-body").innerHTML = STORY_INTRO.body
  .map(line => `<p>${line}</p>`)
  .join("");
