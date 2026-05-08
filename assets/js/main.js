// ── Projects carousel ─────────────────────────────
const track   = document.querySelector('.proj-carousel__track');
const prevBtn = document.querySelector('.proj-nav--prev');
const nextBtn = document.querySelector('.proj-nav--next');

if (track && prevBtn && nextBtn) {
  let current = 0;
  const cards = track.querySelectorAll('.proj-carousel__card');

  const getVisible = () => {
    if (window.innerWidth < 600) return 1;
    if (window.innerWidth < 960) return 2;
    return 3;
  };

  const update = () => {
    const visible  = getVisible();
    const max      = cards.length - visible;
    current        = Math.max(0, Math.min(current, max));
    const cardW    = cards[0].offsetWidth + 16;
    track.style.transform = `translateX(-${current * cardW}px)`;
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current >= max;
  };

  prevBtn.addEventListener('click', () => { current--; update(); });
  nextBtn.addEventListener('click', () => { current++; update(); });
  window.addEventListener('resize', update);
  update();
}

// ── Hamburger menu ────────────────────────────────
const hamburger = document.querySelector('.nav__hamburger');
const navLinks  = document.querySelector('.nav__links');

hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('is-open');
  navLinks.classList.toggle('is-open');
});

// Close on link click (mobile)
navLinks?.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('is-open');
    navLinks.classList.remove('is-open');
  });
});
