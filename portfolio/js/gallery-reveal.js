(() => {
  const section = document.querySelector('.gallery-reveal');
  if (!section) return;

  const header  = document.getElementById('galleryHeader');
  const imgC    = document.getElementById('galImgC');
  const imgTL   = document.getElementById('galImgTL');
  const imgTR   = document.getElementById('galImgTR');
  const imgBL   = document.getElementById('galImgBL');
  const imgBR   = document.getElementById('galImgBR');
  const info    = imgC.querySelector('.gallery-reveal__img-info');

  // lerp + easing
  const lerp = (a, b, t) => a + (b - a) * t;
  const ease = t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

  // Scattered images: [el, outward tx%, outward ty%, initial rotation offset]
  const corners = [
    { el: imgTL, tx: -180, ty: -160, rot:  0 },
    { el: imgTR, tx:  180, ty: -160, rot:  0 },
    { el: imgBL, tx: -180, ty:  160, rot:  0 },
    { el: imgBR, tx:  180, ty:  160, rot:  0 },
  ];

  let smoothP = 0;
  let rawP    = 0;

  window.addEventListener('scroll', () => {
    const rect     = section.getBoundingClientRect();
    const scrollable = section.offsetHeight - window.innerHeight;
    rawP = Math.max(0, Math.min(1, -rect.top / scrollable));
  });

  function update() {
    requestAnimationFrame(update);

    // Smooth lerp toward raw scroll progress
    smoothP += (rawP - smoothP) * 0.08;
    const p  = ease(smoothP);

    // ── Centre image: scale up to fill viewport ───────────────
    const cw = imgC.offsetWidth  || 420;
    const ch = imgC.offsetHeight || 280;
    const scaleToFill = Math.max(window.innerWidth / cw, window.innerHeight / ch) * 1.02;

    const cScale = lerp(0.88, scaleToFill, p);
    imgC.style.transform = `translate(-50%, -50%) scale(${cScale})`;

    // Show info panel in final phase
    if (p > 0.85) {
      info.classList.add('is-visible');
    } else {
      info.classList.remove('is-visible');
    }

    // ── Corner images: fly outward from scroll start ──────────
    corners.forEach(({ el, tx, ty }) => {
      const translateX = lerp(0, tx, ease(smoothP));
      const translateY = lerp(0, ty, ease(smoothP));
      const opacity    = lerp(1, 0, ease(smoothP));

      el.style.transform = `translate(${translateX}px, ${translateY}px)`;
      el.style.opacity   = opacity;
    });

    // ── Header: fade out early ────────────────────────────────
    if (header) {
      header.style.opacity = Math.max(0, 1 - smoothP * 5);
    }
  }

  update();
})();
