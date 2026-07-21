// Levels for the matching game (match.html). Each level names N symbols;
// the board deals 2 cards per symbol (a pair) — pairs = symbols.length.
// Mirrors the voice game's progression (consonants → vowels → 結合韻 →
// 拼音 → review), split into smaller chunks since a memory board gets
// hard fast as card count grows.

export const MATCH_LEVELS = [
  { name: "ㄅㄆㄇㄈ",     symbols: ["b", "p", "m", "f"] },
  { name: "ㄉㄊㄋㄌ",     symbols: ["d", "t", "n", "l"] },
  { name: "ㄍㄎㄏ",       symbols: ["g", "k", "h"] },
  { name: "ㄐㄑㄒ",       symbols: ["j", "q", "x"] },
  { name: "ㄓㄔㄕㄖ",     symbols: ["zh", "ch", "sh", "r"] },
  { name: "ㄗㄘㄙ",       symbols: ["z", "c", "s"] },
  { name: "ㄚㄛㄜㄝ",     symbols: ["a", "o", "e", "ê"] },
  { name: "ㄞㄟㄠㄡ",     symbols: ["ai", "ei", "ao", "ou"] },
  { name: "ㄢㄣㄤㄥㄦ",   symbols: ["an", "en", "ang", "eng", "er"] },
  { name: "ㄧㄨㄩ",       symbols: ["i", "u", "ü"] },
  { name: "結合韻 ㄧ系一", symbols: ["ia", "io", "ie", "ian"] },
  { name: "結合韻 ㄧ系二", symbols: ["in", "iang", "ing", "iou"] },
  { name: "結合韻 ㄨ系一", symbols: ["ua", "uo", "uai", "uei"] },
  { name: "結合韻 ㄨ系二", symbols: ["uan", "uen", "uang", "ueng"] },
  { name: "結合韻 ㄩ系",   symbols: ["yue", "yuan", "yun", "yung"] },
  { name: "拼音初級",     symbols: ["ba", "ma", "da", "tu", "gou", "hua"] },
  { name: "拼音進階",     symbols: ["mi", "shu", "jia", "qiu", "xing", "zhu"] },
  { name: "拼音挑戰",     symbols: ["chuan", "shui", "niao", "mao"] },
  { name: "聲符總複習",   symbols: ["b", "d", "g", "j", "zh", "z", "l", "s"] },
  { name: "綜合大挑戰",   symbols: ["a", "i", "u", "ba", "mi", "jia", "yue", "an"] },
];
