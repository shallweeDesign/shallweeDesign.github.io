// Game items + 20 levels.
// Progression: consonants → vowels → combined finals (結合韻) → pinyin blending
// (拼音) → mixed speed challenges.
// Every game item: { id, symbol (displayed glyphs), exampleWord, emoji }.
// id doubles as the accept-list key in speech.js and the WAV filename — only
// the 37 base symbols have WAVs; the rest fall back to TTS of exampleWord.

import { zhuyinSymbols, combinedFinals, SYMBOL_EMOJI } from "./data.js";

const COMBINED_EMOJI = {
  ia: "🦷", io: "😮", ie: "🍃", ian: "👀", in: "🎵", iang: "🐑", ing: "🦅", iou: "🫒",
  ua: "🐸", uo: "🙋", uai: "🚪", uei: "🐒", uan: "🎮", uen: "✍️", uang: "👑", ueng: "👴",
  yue: "🌙", yuan: "⭕", yun: "☁️", yung: "🏊",
};

// 拼音 blending practice: consonant + final syllables.
const PINYIN_ITEMS = [
  // 初級：聲符 + 單韻
  { id: "ba",    symbol: "ㄅㄚ",   exampleWord: "八",   emoji: "8️⃣" },
  { id: "ma",    symbol: "ㄇㄚ",   exampleWord: "媽媽", emoji: "👩" },
  { id: "da",    symbol: "ㄉㄚ",   exampleWord: "打鼓", emoji: "🥁" },
  { id: "tu",    symbol: "ㄊㄨ",   exampleWord: "兔子", emoji: "🐰" },
  { id: "gou",   symbol: "ㄍㄡ",   exampleWord: "狗",   emoji: "🐶" },
  { id: "hua",   symbol: "ㄏㄨㄚ", exampleWord: "花",   emoji: "🌸" },
  { id: "mi",    symbol: "ㄇㄧ",   exampleWord: "米",   emoji: "🍚" },
  { id: "shu",   symbol: "ㄕㄨ",   exampleWord: "書",   emoji: "📖" },
  // 進階：含介音／三符號
  { id: "jia",   symbol: "ㄐㄧㄚ", exampleWord: "家",   emoji: "🏠" },
  { id: "qiu",   symbol: "ㄑㄧㄡ", exampleWord: "球",   emoji: "⚽" },
  { id: "xing",  symbol: "ㄒㄧㄥ", exampleWord: "星星", emoji: "⭐" },
  { id: "zhu",   symbol: "ㄓㄨ",   exampleWord: "豬",   emoji: "🐷" },
  { id: "chuan", symbol: "ㄔㄨㄢ", exampleWord: "船",   emoji: "⛵" },
  { id: "shui",  symbol: "ㄕㄨㄟ", exampleWord: "水",   emoji: "💧" },
  { id: "niao",  symbol: "ㄋㄧㄠ", exampleWord: "鳥",   emoji: "🐦" },
  { id: "mao",   symbol: "ㄇㄠ",   exampleWord: "貓",   emoji: "🐱" },
];

export const GAME_ITEMS = {};
for (const s of zhuyinSymbols) {
  GAME_ITEMS[s.id] = { id: s.id, symbol: s.symbol, exampleWord: s.exampleWord, emoji: SYMBOL_EMOJI[s.id] ?? "✨" };
}
for (const cf of combinedFinals) {
  GAME_ITEMS[cf.id] = { id: cf.id, symbol: cf.symbols, exampleWord: cf.exampleWord, emoji: COMBINED_EMOJI[cf.id] ?? "✨" };
}
for (const p of PINYIN_ITEMS) {
  GAME_ITEMS[p.id] = p;
}

const CONSONANTS = ["b","p","m","f","d","t","n","l","g","k","h","j","q","x","zh","ch","sh","r","z","c","s"];
const VOWELS = ["a","o","e","ê","ai","ei","ao","ou","an","en","ang","eng","er","i","u","ü"];
const COMBINED_I = ["ia","io","ie","ian","in","iang","ing","iou"];
const COMBINED_U = ["ua","uo","uai","uei","uan","uen","uang","ueng"];
const COMBINED_YU = ["yue","yuan","yun","yung"];
const COMBINED_ALL = [...COMBINED_I, ...COMBINED_U, ...COMBINED_YU];
const PINYIN_BASIC = ["ba","ma","da","tu","gou","hua","mi","shu"];
const PINYIN_ADV = ["jia","qiu","xing","zhu","chuan","shui","niao","mao"];
const BASIC_ALL = [...CONSONANTS, ...VOWELS];
const EVERYTHING = [...BASIC_ALL, ...COMBINED_ALL, ...PINYIN_BASIC, ...PINYIN_ADV];

export const LEVELS = [
  { name: "ㄅㄆㄇㄈ",       symbols: ["b","p","m","f"],                  rounds: 5,  fallMs: 5000 },
  { name: "ㄉㄊㄋㄌ",       symbols: ["d","t","n","l"],                  rounds: 5,  fallMs: 5000 },
  { name: "ㄍㄎㄏ",         symbols: ["g","k","h"],                      rounds: 5,  fallMs: 5000 },
  { name: "ㄐㄑㄒ",         symbols: ["j","q","x"],                      rounds: 5,  fallMs: 5000 },
  { name: "ㄓㄔㄕㄖㄗㄘㄙ", symbols: ["zh","ch","sh","r","z","c","s"],   rounds: 6,  fallMs: 5000 },
  { name: "聲符總複習",     symbols: CONSONANTS,                         rounds: 6,  fallMs: 5000 },
  { name: "ㄚㄛㄜㄝ",       symbols: ["a","o","e","ê"],                  rounds: 5,  fallMs: 5000 },
  { name: "ㄞㄟㄠㄡ",       symbols: ["ai","ei","ao","ou"],              rounds: 5,  fallMs: 5000 },
  { name: "ㄢㄣㄤㄥㄦ",     symbols: ["an","en","ang","eng","er"],       rounds: 5,  fallMs: 5000 },
  { name: "ㄧㄨㄩ",         symbols: ["i","u","ü"],                      rounds: 5,  fallMs: 5000 },
  { name: "韻符總複習",     symbols: VOWELS,                             rounds: 6,  fallMs: 5000 },
  { name: "結合韻 ㄧ系",    symbols: COMBINED_I,                         rounds: 6,  fallMs: 5000 },
  { name: "結合韻 ㄨ系",    symbols: COMBINED_U,                         rounds: 6,  fallMs: 5000 },
  { name: "結合韻 ㄩ系",    symbols: COMBINED_YU,                        rounds: 5,  fallMs: 5000 },
  { name: "結合韻總複習",   symbols: COMBINED_ALL,                       rounds: 6,  fallMs: 5000 },
  { name: "拼音初級",       symbols: PINYIN_BASIC,                       rounds: 6,  fallMs: 5000 },
  { name: "拼音進階",       symbols: PINYIN_ADV,                         rounds: 6,  fallMs: 5000 },
  { name: "綜合挑戰",       symbols: [...BASIC_ALL, ...COMBINED_ALL],    rounds: 8,  fallMs: 5000 },
  { name: "綜合挑戰・快",   symbols: EVERYTHING,                         rounds: 8,  fallMs: 4000 },
  { name: "最終挑戰",       symbols: EVERYTHING,                         rounds: 10, fallMs: 3000 },
];
