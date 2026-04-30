(() => {
  const section  = document.querySelector('.portfolio-scroll');
  const rail     = document.getElementById('portfolioRail');
  const progress = document.getElementById('portfolioProgress');

  if (!section || !rail) return;

  let smoothX = 0;
  let targetX = 0;

  function update() {
    const rect      = section.getBoundingClientRect();
    const sectionH  = section.offsetHeight;
    const viewportH = window.innerHeight;

    // How far the sticky panel has "scrolled" (0 → 1)
    const scrolled = Math.max(0, Math.min(1,
      (-rect.top) / (sectionH - viewportH)
    ));

    // Total horizontal distance to travel
    const maxTranslate = rail.scrollWidth - rail.parentElement.offsetWidth;
    targetX = scrolled * maxTranslate;

    // Lerp for smooth glide
    smoothX += (targetX - smoothX) * 0.08;

    rail.style.transform = `translateX(-${smoothX}px)`;

    if (progress) progress.style.width = `${scrolled * 100}%`;

    requestAnimationFrame(update);
  }

  update();
})();
