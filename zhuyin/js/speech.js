// Speech recognition for the falling-symbol game.
// zh-TW ASR returns Chinese characters, not bopomofo — saying「ㄅ」comes back
// as 波/撥/伯…, so each symbol carries a tone-insensitive homophone accept-list.

const SR = typeof window !== "undefined"
  ? (window.SpeechRecognition || window.webkitSpeechRecognition)
  : null;

export function isRecognitionSupported() {
  return !!SR;
}

// Homophones of each symbol's canonical isolated reading (any tone).
const ACCEPT_CHARS = {
  b:  "波撥玻剝菠播伯博勃薄泊帛柏箔搏膊玻",
  p:  "坡潑婆迫破頗魄粕叵",
  m:  "摸模膜磨魔抹末沒莫墨默摩茉陌漠寞",
  f:  "佛",
  d:  "得德的地嘚",
  t:  "特忑",
  n:  "呢訥哪吶",
  l:  "樂勒了肋垃叻",
  g:  "哥歌戈鴿格閣革各個割葛隔咯胳",
  k:  "科顆棵柯咳蝌殼可克刻課客苛",
  h:  "喝荷河何合和賀鶴盒核呵嚇賀",
  j:  "機雞基積擊肌姬即急集級極幾己擠脊計記濟繼寄季技既紀寂雞",
  q:  "七期欺漆淒戚齊其奇騎旗棋起豈企氣器汽棄泣妻砌",
  x:  "西希吸昔析息習席洗喜戲系細膝溪嘻夕犀錫",
  zh: "之知支芝隻織汁直值植執侄指紙只止至志致智製治秩擲質",
  ch: "吃痴持池遲尺齒赤翅斥匙馳恥",
  sh: "詩施師獅失十時實食石識史使始是事市式室視試世勢士",
  r:  "日",
  z:  "資姿滋茲吱子紫仔字自",
  c:  "疵慈磁瓷詞辭此次刺賜雌",
  s:  "思斯私司絲撕死四寺似飼嘶",
  a:  "啊阿",
  o:  "喔哦噢",
  e:  "額俄餓鵝惡厄婀",
  "ê": "欸誒耶爺也夜葉椰野",
  ai: "愛哀埃挨矮癌艾唉",
  ei: "欸誒",
  ao: "凹熬襖傲奧澳懊嗷",
  ou: "歐偶嘔鷗毆藕",
  an: "安按暗案鞍岸",
  en: "恩嗯摁",
  ang: "骯昂盎",
  eng: "鞥嗯",
  er: "而兒耳爾二餌",
  i:  "一衣依醫以椅乙意義易益移姨壹",
  u:  "屋烏污巫無五午舞武物霧誤悟吳",
  "ü": "淤迂魚漁於余雨語玉遇育浴娛",

  // 結合韻 (combined finals)
  ia:   "牙呀鴨壓芽雅亞崖丫",
  io:   "唷喲",
  ie:   "耶爺也夜葉椰野業頁爺",
  ian:  "煙鹽眼演燕嚥言顏延岩",
  in:   "因音陰銀引飲印隱",
  iang: "央羊陽楊養癢樣氧洋",
  ing:  "英鷹迎營影硬應嬰螢",
  iou:  "優悠油由游友有右幼柚郵",
  ua:   "挖蛙娃瓦襪哇",
  uo:   "窩我臥握渦蝸沃斡",
  uai:  "歪外",
  uei:  "威微為圍偉尾未味位胃衛偎",
  uan:  "彎灣玩完晚碗萬丸頑",
  uen:  "溫文聞穩問紋蚊吻",
  uang: "汪王往網忘望旺",
  ueng: "翁嗡甕",
  yue:  "約月越樂閱悅躍岳",
  yuan: "冤圓園元原遠院願員猿",
  yun:  "暈雲勻允運韻雲",
  yung: "用永泳勇擁庸湧傭",

  // 拼音 (blended syllables)
  ba:    "八爸巴拔把霸疤芭",
  ma:    "媽麻馬罵嗎螞",
  da:    "搭答達打大",
  tu:    "突圖徒土吐兔塗禿",
  gou:   "勾溝狗夠購鉤",
  hua:   "花華滑化話畫嘩",
  mi:    "咪迷米密蜜瞇謎",
  shu:   "書梳舒輸熟數樹叔鼠殊",
  jia:   "家加佳夾假價架嘉甲",
  qiu:   "秋丘球求邱",
  xing:  "星興行型形醒姓猩",
  zhu:   "豬珠竹煮主住助朱",
  chuan: "川穿船傳串",
  shui:  "水誰稅睡",
  niao:  "鳥尿",
  mao:   "貓毛帽冒茅",
};

// Canonical isolated reading in pinyin, in case ASR returns Latin text.
const ACCEPT_PINYIN = {
  b: "bo", p: "po", m: "mo", f: "fo",
  d: "de", t: "te", n: "ne", l: "le",
  g: "ge", k: "ke", h: "he",
  j: "ji", q: "qi", x: "xi",
  zh: "zhi", ch: "chi", sh: "shi", r: "ri",
  z: "zi", c: "ci", s: "si",
  a: "a", o: "o", e: "e", "ê": "ye",
  ai: "ai", ei: "ei", ao: "ao", ou: "ou",
  an: "an", en: "en", ang: "ang", eng: "eng", er: "er",
  i: "yi", u: "wu", "ü": "yu",
  ia: "ya", io: "yo", ie: "ye", ian: "yan", in: "yin",
  iang: "yang", ing: "ying", iou: "you",
  ua: "wa", uo: "wo", uai: "wai", uei: "wei",
  uan: "wan", uen: "wen", uang: "wang", ueng: "weng",
  yue: "yue", yuan: "yuan", yun: "yun", yung: "yong",
  ba: "ba", ma: "ma", da: "da", tu: "tu", gou: "gou", hua: "hua",
  mi: "mi", shu: "shu", jia: "jia", qiu: "qiu", xing: "xing",
  zhu: "zhu", chuan: "chuan", shui: "shui", niao: "niao", mao: "mao",
};

// True if any alternative transcript counts as a correct answer for `item`.
// Accepts: the symbol's sound (homophone chars), the raw bopomofo glyph,
// the example word, or the pinyin reading.
export function matchesSymbol(transcripts, item) {
  const accept = ACCEPT_CHARS[item.id] ?? "";
  const pinyin = ACCEPT_PINYIN[item.id] ?? "";

  for (const raw of transcripts) {
    const clean = raw.toLowerCase().replace(/[\s.,!?，。！？、'’]/g, "");
    if (!clean) continue;
    if (clean.includes(item.symbol)) return true;
    if (item.exampleWord && clean.includes(item.exampleWord)) return true;
    if (pinyin && clean.includes(pinyin)) return true;
    for (const ch of clean) {
      if (accept.includes(ch)) return true;
    }
  }
  return false;
}

// Thin wrapper: continuous zh-TW recognition with interim results and
// auto-restart (iOS Safari ends sessions frequently on its own).
export function createRecognizer({ onText, onStateChange, onDebug }) {
  if (!SR) return null;

  const rec = new SR();
  rec.lang = "zh-TW";
  rec.continuous = true;
  rec.interimResults = true;
  rec.maxAlternatives = 5;

  let active = false;
  const dbg = (msg) => onDebug?.(msg);

  rec.onstart = () => dbg("session start");
  rec.onaudiostart = () => dbg("audio start (mic delivering)");
  rec.onspeechstart = () => dbg("speech detected");
  rec.onspeechend = () => dbg("speech ended");

  rec.onresult = (e) => {
    const texts = [];
    for (let i = e.resultIndex; i < e.results.length; i++) {
      const res = e.results[i];
      for (let j = 0; j < res.length; j++) {
        const t = res[j].transcript.trim();
        if (t) texts.push(t);
      }
    }
    if (texts.length) onText(texts);
  };

  rec.onend = () => {
    if (active) {
      dbg("session end → restart");
      try { rec.start(); } catch { /* already started */ }
    } else {
      dbg("session end");
      onStateChange?.(false);
    }
  };

  rec.onerror = (e) => {
    dbg(`error: ${e.error}`);
    if (e.error === "not-allowed" || e.error === "service-not-allowed") {
      active = false;
      onStateChange?.(false, e.error);
    }
    // "no-speech" / "aborted" fall through to onend and auto-restart
  };

  return {
    start() {
      active = true;
      try { rec.start(); } catch { /* already started */ }
      onStateChange?.(true);
    },
    stop() {
      active = false;
      try { rec.stop(); } catch { /* not started */ }
    },
    get active() { return active; },
  };
}
