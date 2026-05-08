(function () {
  var T = {
    en: {
      // Nav
      'nav.about':   'about',
      'nav.project': 'project',
      'nav.lab':     'lab',
      'nav.home':    'home',

      // Hero
      'hero.subtitle':    'frontend developer crafting <span class="hl">interactive</span> web experiences.<br />freelancing since <span class="hl">2015</span> — based in taiwan.',
      'hero.btn.about':   'About me',
      'hero.btn.contact': 'Get in touch',

      // About
      'about.title': 'Building the<br />web, one pixel<br />at a time.',
      'about.text1': "I've been building for the web since 2015 — brand product launches, e-commerce campaign pages, mini games. Work where design and code have to move in sync.",
      'about.text2': "I'm drawn to motion and visual design. My philosophy: rhythm is what makes animation feel alive, not just moving. I work remotely alongside designers, turning their vision into something that actually runs in a browser.",
      'terminal.role':   '"Frontend Developer"',
      'terminal.free':   '"since 2015"',
      'terminal.focus1': '"Motion &amp; Visual Design"',
      'terminal.focus2': '"Campaign &amp; Product Pages"',
      'terminal.focus3': '"Mini Games"',
      'terminal.style':  '"rhythm makes motion alive"',

      // Home — projects carousel
      'projects.title':   'Selected<br /><em>Work.</em>',
      'projects.viewall': 'View all projects →',

      // Home — lab section
      'home.lab.title':      'Experiments',
      'home.lab.card.title': 'The Lab',
      'home.lab.card.desc':  'A space for creative coding experiments — JS effects, interactive visuals, and motion explorations.',
      'home.lab.cta':        'Enter the Lab →',

      // Footer
      'footer.contact':    'Contact',
      'footer.lab':        'Lab',
      'footer.back':       '← back home',
      'footer.back.short': '← home',

      // Project page
      'proj.page.title':    'Work &amp;<br /><em>Projects.</em>',
      'proj.page.subtitle': 'Campaign pages, product launches, and interactive experiences<br />built since 2022.',
      'proj.view':          'View project →',

      // Lab page
      'lab.header.label':  'creative coding',
      'lab.header.title':  'The <em>Lab.</em>',
      'lab.header.desc':   'js experiments, visual effects, and interactive explorations.<br />click to view each experiment fullscreen.',
      'lab.wave.desc':     'Three.js wireframe wave animation driven by sine functions. Scroll parallax and mouse interaction.',
      'lab.blinds.desc':   'Venetian blind image reveal — slats animate open with staggered timing. Horizontal or vertical.',
      'lab.view':          'View experiment →',
      'lab.coming':        'Coming soon',

      // Document titles
      'doc.home':    'Jams Huang — Frontend Developer',
      'doc.project': 'Projects — Jams Huang',
      'doc.lab':     'Lab — Jams Huang',
    },
    zh: {
      // Nav
      'nav.about':   '關於',
      'nav.project': '作品',
      'nav.lab':     '實驗室',
      'nav.home':    '首頁',

      // Hero
      'hero.subtitle':    '前端開發者，打造<span class="hl">互動</span>網頁體驗。<br />自 <span class="hl">2015</span> 年起自由接案，深根台灣。',
      'hero.btn.about':   '關於我',
      'hero.btn.contact': '聯絡我',

      // About
      'about.title': '用每一個像素，<br />建構網頁世界。',
      'about.text1': '自 2015 年起投入網頁開發——品牌產品上線、電商活動頁、小遊戲，這些都是設計與程式必須同步運作的工作。',
      'about.text2': '我對動態與視覺設計充滿熱情。我的理念：讓動畫有生命感的是節奏，而非只是移動。我與設計師遠端協作，將他們的創意轉化為真正在瀏覽器中運行的作品。',
      'terminal.role':   '"前端開發者"',
      'terminal.free':   '"自 2015 年起"',
      'terminal.focus1': '"動態與視覺設計"',
      'terminal.focus2': '"活動與產品頁面"',
      'terminal.focus3': '"小遊戲"',
      'terminal.style':  '"節奏賦予動態生命"',

      // Home — projects carousel
      'projects.title':   '精選<br /><em>作品。</em>',
      'projects.viewall': '查看所有作品 →',

      // Home — lab section
      'home.lab.title':      '實驗場',
      'home.lab.card.title': '實驗室',
      'home.lab.card.desc':  '創意程式實驗空間——JS 特效、互動視覺，以及動態探索。',
      'home.lab.cta':        '進入實驗室 →',

      // Footer
      'footer.contact':    '聯絡',
      'footer.lab':        '實驗室',
      'footer.back':       '← 返回首頁',
      'footer.back.short': '← 首頁',

      // Project page
      'proj.page.title':    '作品<br /><em>集。</em>',
      'proj.page.subtitle': '活動頁、產品上線與互動體驗，<br />自 2022 年起的作品。',
      'proj.view':          '查看作品 →',

      // Lab page
      'lab.header.label':  '創意程式',
      'lab.header.title':  '實驗<em>室。</em>',
      'lab.header.desc':   'JS 實驗、視覺特效與互動探索。<br />點擊以全螢幕檢視每個實驗。',
      'lab.wave.desc':     '以正弦函數驅動的 Three.js 線框波浪動畫，支援滾動視差與滑鼠互動。',
      'lab.blinds.desc':   '百葉窗圖片展示效果——葉片以交錯時序開啟，支援水平或垂直方向。',
      'lab.view':          '查看實驗 →',
      'lab.coming':        '即將推出',

      // Document titles
      'doc.home':    'Jams Huang — 前端開發者',
      'doc.project': '作品集 — Jams Huang',
      'doc.lab':     '實驗室 — Jams Huang',
    }
  };

  function applyLang(lang) {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.dataset.i18n;
      var val = T[lang] && T[lang][key];
      if (val !== undefined) el.innerHTML = val;
    });

    var page = document.body.dataset.page;
    if (page && T[lang]['doc.' + page]) document.title = T[lang]['doc.' + page];

    document.documentElement.lang = lang === 'zh' ? 'zh-TW' : 'en';

    var btn = document.getElementById('lang-toggle');
    if (btn) btn.textContent = lang === 'zh' ? 'EN' : '中文';

    localStorage.setItem('lang', lang);
  }

  document.addEventListener('DOMContentLoaded', function () {
    var saved = localStorage.getItem('lang') || 'en';
    applyLang(saved);

    var btn = document.getElementById('lang-toggle');
    if (btn) btn.addEventListener('click', function () {
      applyLang((localStorage.getItem('lang') || 'en') === 'en' ? 'zh' : 'en');
    });
  });
})();
