// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });
}

// LINE deep link — open app directly on mobile
document.querySelectorAll('a[href*="line.me"]').forEach(el => {
  el.addEventListener('click', function (e) {
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      e.preventDefault();
      const appUrl = 'line://ti/p/~hejialaw';
      const webUrl = 'https://line.me/ti/p/~hejialaw';
      window.location.href = appUrl;
      // Fallback to web if app not installed after 1.5s
      setTimeout(() => { window.location.href = webUrl; }, 1500);
    }
  });
});

// Active nav link
const currentPath = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav a, .mobile-nav a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPath || (currentPath === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});
