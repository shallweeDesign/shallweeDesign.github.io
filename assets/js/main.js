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
