(() => {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  // ── Renderer ─────────────────────────────────────────────
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);

  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
  camera.position.set(0, 5, 7);
  camera.lookAt(0, 0, -2);

  // ── Wave planes ───────────────────────────────────────────
  const SEGS_X = 16;
  const SEGS_Z = 25;

  function makeWavePlane(color, opacity) {
    const geo = new THREE.PlaneGeometry(22, 28, SEGS_X, SEGS_Z);
    geo.rotateX(-Math.PI / 2);
    const base = Float32Array.from(geo.attributes.position.array);
    const mat = new THREE.MeshBasicMaterial({
      color,
      wireframe: true,
      transparent: true,
      opacity,
    });
    return { mesh: new THREE.Mesh(geo, mat), base, geo };
  }

  const w1 = makeWavePlane(0x0055bb, 0.28);

  w1.mesh.position.set(0, -1.8, -6);
  scene.add(w1.mesh);

  // ── 3D Object ────────────────────────────────────────────
  const group = new THREE.Group();

  const ico = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.5, 1),
    new THREE.MeshBasicMaterial({ color: 0x0066cc, wireframe: true, transparent: true, opacity: 0.25 })
  );
  const core = new THREE.Mesh(
    new THREE.IcosahedronGeometry(0.85, 0),
    new THREE.MeshBasicMaterial({ color: 0x0066cc, transparent: true, opacity: 0.05 })
  );
  const torus = new THREE.Mesh(
    new THREE.TorusGeometry(2.1, 0.014, 6, 80),
    new THREE.MeshBasicMaterial({ color: 0x0066cc, transparent: true, opacity: 0.14 })
  );
  torus.rotation.x = Math.PI / 2.5;

  group.add(ico, core, torus);
  scene.add(group);

  // ── State ────────────────────────────────────────────────
  let mouseX = 0, mouseY = 0;
  let targetRotX = 0, targetRotY = 0;
  let scrollY = 0, smoothScroll = 0, heroH = 0;

  document.addEventListener('mousemove', e => {
    mouseX = (e.clientX / window.innerWidth  - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  window.addEventListener('scroll', () => { scrollY = window.scrollY; });

  // ── Resize ───────────────────────────────────────────────
  function resize() {
    const hero = canvas.parentElement;
    const w = hero.clientWidth;
    const h = hero.clientHeight;
    heroH = h;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    group.position.x = w > 900 ? 2.2 : 0;
    group.position.y = 0.5;

    const farCorner = new THREE.Vector3(11, -1.8, -20);
    farCorner.project(camera);
    const scaleX = Math.max(1, 1.0 / Math.abs(farCorner.x));
    w1.mesh.scale.x = scaleX;
  }
  resize();
  window.addEventListener('resize', resize);

  // ── Wave math ─────────────────────────────────────────────
  function updateWave(geo, base, t, speed, amp) {
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = base[i * 3];
      const z = base[i * 3 + 2];
      const y =
        Math.sin(x * 0.55 + z * 0.45 - t * speed)       * amp      +
        Math.sin(x * 0.9  - z * 0.35 - t * speed * 0.7) * amp * 0.5 +
        Math.sin(x * 0.25 + z * 0.7  - t * speed * 1.3) * amp * 0.35;
      pos.setY(i, y);
    }
    pos.needsUpdate = true;
    geo.computeVertexNormals();
  }

  // ── Animate ──────────────────────────────────────────────
  let t = 0;

  function animate() {
    requestAnimationFrame(animate);
    t += 0.007;

    // Smooth scroll lerp — decouples scroll position from frame rate
    smoothScroll += (scrollY - smoothScroll) * 0.07;
    const sf = Math.min(smoothScroll / (heroH || 600), 1);

    updateWave(w1.geo, w1.base, t, 1.8, 0.42);

    targetRotY += (mouseX * 0.55 - targetRotY) * 0.04;
    targetRotX += (-mouseY * 0.35 - targetRotX) * 0.04;

    group.rotation.y = t * 0.22 + targetRotY;
    group.rotation.x = Math.sin(t * 0.14) * 0.15 + targetRotX;
    torus.rotation.z += 0.003;

    // Parallax layers — each at a different rate
    // Camera: very slow drift (layer 1 — furthest)
    camera.position.y = 5 - sf * 1.2;

    // Wave: slow rise + pull back (layer 2)
    w1.mesh.position.y = -1.8 + sf * 1.5;
    w1.mesh.position.z = -6   + sf * 2.0;
    w1.mesh.material.opacity = 0.28 * (1 - sf * 0.6);

    // 3D object: fast exit + spin (layer 3 — closest)
    group.position.y = 0.5  - sf * 5.0;
    group.rotation.z = sf * 1.6;
    group.scale.setScalar(1 - sf * 0.4);

    renderer.render(scene, camera);
  }

  animate();
})();
