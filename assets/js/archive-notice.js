(function () {
  // ── Banner ─────────────────────────────────────────────────────────
  var banner = document.createElement('div');
  banner.id = 'archive-notice';
  banner.textContent = '⚠  Archived — This page is a portfolio showcase. Forms are disabled.';
  document.body.insertBefore(banner, document.body.firstChild);

  // ── Styles ─────────────────────────────────────────────────────────
  var style = document.createElement('style');
  style.textContent = [
    '#archive-notice {',
    '  position: fixed; top: 0; left: 0; right: 0; z-index: 999999;',
    '  background: rgba(15, 10, 0, 0.92);',
    '  border-bottom: 1px solid rgba(234, 179, 8, 0.35);',
    '  color: rgba(234, 179, 8, 0.85);',
    '  font-family: "SF Mono","Fira Code",Consolas,monospace;',
    '  font-size: 12px; letter-spacing: 0.03em;',
    '  text-align: center; padding: 9px 16px;',
    '  backdrop-filter: blur(8px);',
    '}',
    'form { position: relative; }',
    'form::after {',
    '  content: ""; position: absolute; inset: 0;',
    '  cursor: not-allowed; z-index: 9999;',
    '}',
    'form, form * { pointer-events: none !important; cursor: not-allowed !important; }',
  ].join('\n');
  document.head.appendChild(style);

  // ── Block submit (belt-and-suspenders) ─────────────────────────────
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('form').forEach(function (form) {
      form.addEventListener('submit', function (e) { e.preventDefault(); return false; });
    });
  });
})();
