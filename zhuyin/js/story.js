// Shared story/character data for both games. Premise: 企鵝波波的注音派對 —
// winter magic froze the forest animals; clearing each level melts one
// friend free. Both games share the same 20-slot rescue progress (both
// happen to have exactly 20 levels), keyed by level index, so completing
// level i in *either* game can rescue friend i.

export const MASCOT = {
  emoji: "🐧",
  name: "波波",
};

export const STORY_INTRO = {
  title: "企鵝波波的注音派對",
  body: [
    "企鵝波波要辦一場超好玩的注音派對，可是森林裡的動物朋友們都被冬天的魔法凍住了！",
    "跟著波波一起學注音、玩遊戲，每闖過一關就能融化一位朋友的冰雪，邀請他們來參加派對。",
    "集滿 20 位朋友，派對就可以開始囉！你準備好了嗎？",
  ],
};

// 20 friends, one per level index (0-19) — shared by game.js's LEVELS and
// match-levels.js's MATCH_LEVELS, which both happen to have 20 entries.
export const FRIENDS = [
  { emoji: "🐰", name: "小兔" },
  { emoji: "🦊", name: "小狐" },
  { emoji: "🐻", name: "小熊" },
  { emoji: "🐼", name: "貓熊" },
  { emoji: "🐯", name: "小虎" },
  { emoji: "🦁", name: "小獅" },
  { emoji: "🐨", name: "樹熊" },
  { emoji: "🐹", name: "小鼠" },
  { emoji: "🐷", name: "小豬" },
  { emoji: "🐸", name: "青蛙" },
  { emoji: "🐵", name: "猴子" },
  { emoji: "🐶", name: "小狗" },
  { emoji: "🐱", name: "小貓" },
  { emoji: "🦉", name: "貓頭鷹" },
  { emoji: "🐦", name: "小鳥" },
  { emoji: "🐢", name: "烏龜" },
  { emoji: "🐬", name: "海豚" },
  { emoji: "🐳", name: "鯨魚" },
  { emoji: "🦋", name: "蝴蝶" },
  { emoji: "🐝", name: "蜜蜂" },
];

const PROGRESS_KEY = "zhuyin-story-progress";

function loadRescued() {
  try {
    const arr = JSON.parse(localStorage.getItem(PROGRESS_KEY));
    return Array.isArray(arr) ? arr : new Array(FRIENDS.length).fill(false);
  } catch {
    return new Array(FRIENDS.length).fill(false);
  }
}

export function getRescued() {
  return loadRescued();
}

export function getRescuedCount() {
  return loadRescued().filter(Boolean).length;
}

// Marks friend `levelIndex` as rescued. Returns true only the first time
// (so callers can show a "newly rescued!" announcement just once).
export function rescueFriend(levelIndex) {
  if (levelIndex < 0 || levelIndex >= FRIENDS.length) return false;
  const rescued = loadRescued();
  if (rescued[levelIndex]) return false;
  rescued[levelIndex] = true;
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(rescued));
  return true;
}
