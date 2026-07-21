// Constelação Atlas — sistema de partículas em Canvas2D (sem dependências).
// Faz morph conforme o scroll: chevron (hero) → grafo → barras → orbe → chevron.
// Trocado de three.js (466kb, travava a main thread ao carregar) por Canvas2D
// (~poucos kb): parse desprezível, sem freeze. Render capado a 30fps e a cena
// "dorme" quando está parada — custo de CPU ~zero em repouso.

let COUNT = 900;
const UNIT = 46; // escala de projeção (px por unidade do espaço das formas)

// ---------------------------------------------------------------------------
// Geradores de forma — devolvem alvos [x0,y0, x1,y1, ...] no espaço virtual.
// ---------------------------------------------------------------------------
function shapeChevron(): Float32Array {
  const a = new Float32Array(COUNT * 2);
  const apexYs = [-1.6, 0.7];
  const spread = 3.0;
  const drop = 2.2;
  for (let i = 0; i < COUNT; i++) {
    const chev = i % 2;
    const side = i % 4 < 2 ? -1 : 1;
    const t = Math.random();
    a[i * 2] = side * t * spread + (Math.random() - 0.5) * 0.28;
    a[i * 2 + 1] = apexYs[chev] + t * drop + (Math.random() - 0.5) * 0.28;
  }
  return a;
}
function shapeGraph(): Float32Array {
  const a = new Float32Array(COUNT * 2);
  const cols = 9;
  const rows = 7;
  const gx = 7.4 / cols;
  const gy = 5.4 / rows;
  for (let i = 0; i < COUNT; i++) {
    const c = i % cols;
    const r = Math.floor(i / cols) % rows;
    a[i * 2] = (c - (cols - 1) / 2) * gx + (Math.random() - 0.5) * gx * 0.9;
    a[i * 2 + 1] = (r - (rows - 1) / 2) * gy + (Math.random() - 0.5) * gy * 0.9;
  }
  return a;
}
function shapeBars(): Float32Array {
  const a = new Float32Array(COUNT * 2);
  const bars = 14;
  const heights = [0.3, 0.5, 0.42, 0.68, 0.55, 0.8, 0.62, 0.9, 0.72, 1, 0.85, 1.1, 0.95, 1.25];
  const width = 8.4;
  const bw = width / bars;
  const baseY = 2.6;
  for (let i = 0; i < COUNT; i++) {
    const b = i % bars;
    const h = heights[b] * 4.2;
    a[i * 2] = (b - (bars - 1) / 2) * bw + (Math.random() - 0.5) * bw * 0.55;
    a[i * 2 + 1] = baseY - Math.random() * h;
  }
  return a;
}
function shapeSphere(): Float32Array {
  // Projeção 2D de uma esfera de Fibonacci → disco pontilhado.
  const a = new Float32Array(COUNT * 2);
  const R = 3.1;
  const phi = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < COUNT; i++) {
    const y = 1 - (i / (COUNT - 1)) * 2;
    const rad = Math.sqrt(1 - y * y);
    const theta = phi * i;
    a[i * 2] = Math.cos(theta) * rad * R;
    a[i * 2 + 1] = y * R;
  }
  return a;
}

const SHAPES: Record<string, Float32Array> = {};
const SHAPE_CYCLE = [
  'chevron', // hero
  'chevron', // parceiros
  'graph', // serviços
  'graph', // casos de uso
  'bars', // números
  'bars', // portfólio
  'sphere', // planos
  'sphere', // diferenciais
  'chevron', // CTA final
  'chevron', // contato
];

/** Sprite de brilho pré-renderizado (uma vez) — drawImage é muito mais barato
 *  do que criar radial-gradient por partícula a cada frame. */
function makeGlowSprite(size: number): HTMLCanvasElement {
  const s = document.createElement('canvas');
  s.width = s.height = size;
  const g = s.getContext('2d')!;
  const grd = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  grd.addColorStop(0, 'rgba(200,241,53,0.9)');
  grd.addColorStop(0.4, 'rgba(200,241,53,0.35)');
  grd.addColorStop(1, 'rgba(200,241,53,0)');
  g.fillStyle = grd;
  g.fillRect(0, 0, size, size);
  return s;
}

export function initConstellation(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) return;

  const isMobile = window.innerWidth <= 768;
  COUNT = isMobile ? 380 : 900;

  SHAPES.chevron = shapeChevron();
  SHAPES.graph = shapeGraph();
  SHAPES.bars = shapeBars();
  SHAPES.sphere = shapeSphere();

  const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
  let w = 0;
  let h = 0;
  function resize() {
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();

  const spriteSize = isMobile ? 14 : 18;
  const sprite = makeGlowSprite(spriteSize);
  const half = spriteSize / 2;

  // posição corrente (px) + semente de drift
  const cur = new Float32Array(COUNT * 2);
  const seed = new Float32Array(COUNT);
  const scale = () => Math.min(w, h) / 11 + UNIT * 0; // escala responsiva
  let sc = scale();
  const project = (vx: number, vy: number, out: [number, number]) => {
    out[0] = w / 2 + vx * sc;
    out[1] = h / 2 + vy * sc;
  };
  // inicia no chevron
  {
    const p: [number, number] = [0, 0];
    for (let i = 0; i < COUNT; i++) {
      project(SHAPES.chevron[i * 2], SHAPES.chevron[i * 2 + 1], p);
      cur[i * 2] = p[0];
      cur[i * 2 + 1] = p[1];
      seed[i] = Math.random() * Math.PI * 2;
    }
  }

  let target = SHAPES.chevron;
  const sections = Array.from(document.querySelectorAll('main section'));
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        const idx = sections.indexOf(e.target);
        const key = SHAPE_CYCLE[Math.min(idx, SHAPE_CYCLE.length - 1)] || 'chevron';
        if (SHAPES[key] !== target) {
          target = SHAPES[key];
          wake();
        }
      }
    },
    { threshold: 0.4, rootMargin: '-20% 0px -40% 0px' }
  );
  sections.forEach((s) => sectionObserver.observe(s));

  let mx = 0;
  let my = 0;
  let pointerActiveUntil = 0;
  window.addEventListener(
    'pointermove',
    (e) => {
      mx = (e.clientX / w - 0.5) * 24;
      my = (e.clientY / h - 0.5) * 24;
      pointerActiveUntil = performance.now() + 500;
      wake();
    },
    { passive: true }
  );

  // ---- loop com cap de 30fps + assentamento ----
  let running = false;
  let raf = 0;
  let lastFrame = 0;
  let visible = true;
  const FRAME_MS = 1000 / 30;
  const tp: [number, number] = [0, 0];

  function tick(now: number) {
    if (!running) return;
    raf = requestAnimationFrame(tick);
    if (now - lastFrame < FRAME_MS) return;
    lastFrame = now;

    const t = now / 1000;
    let maxD = 0;
    ctx.clearRect(0, 0, w, h);
    ctx.globalCompositeOperation = 'lighter';

    for (let i = 0; i < COUNT; i++) {
      // alvo em px + drift sutil
      project(target[i * 2], target[i * 2 + 1], tp);
      const driftX = Math.sin(t * 0.6 + seed[i]) * 3;
      const driftY = Math.cos(t * 0.5 + seed[i]) * 3;
      const txp = tp[0] + driftX + mx;
      const typ = tp[1] + driftY + my;

      const dx = txp - cur[i * 2];
      const dy = typ - cur[i * 2 + 1];
      cur[i * 2] += dx * 0.06;
      cur[i * 2 + 1] += dy * 0.06;
      const ad = Math.abs(dx) + Math.abs(dy);
      if (ad > maxD) maxD = ad;

      ctx.globalAlpha = 0.38;
      ctx.drawImage(sprite, cur[i * 2] - half, cur[i * 2 + 1] - half);
    }
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'source-over';

    // parou de mudar e mouse quieto → dorme (drift é pequeno o bastante p/ parar)
    const morphing = maxD > 0.5;
    if (!morphing && now >= pointerActiveUntil) stop();
  }

  function wake() {
    if (!visible) return;
    pointerActiveUntil = Math.max(pointerActiveUntil, performance.now() + 120);
    start();
  }
  function start() {
    if (running) return;
    running = true;
    lastFrame = 0;
    raf = requestAnimationFrame(tick);
  }
  function stop() {
    running = false;
    cancelAnimationFrame(raf);
  }

  document.addEventListener('visibilitychange', () => {
    visible = !document.hidden;
    if (visible) wake();
    else stop();
  });
  const canvasObserver = new IntersectionObserver(
    ([entry]) => {
      visible = entry.isIntersecting;
      if (visible) wake();
      else stop();
    },
    { threshold: 0 }
  );
  canvasObserver.observe(canvas);

  let resizeTimer = 0;
  window.addEventListener('resize', () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => {
      resize();
      sc = scale();
      wake();
    }, 150);
  });

  start();
}
