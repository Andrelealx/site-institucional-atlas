// Constelação Atlas — sistema de partículas WebGL que faz morph conforme o scroll.
// Fundo sutil e corporativo: chevron (hero) → grafo (serviços) → barras (portfólio)
// → orbe (diferenciais) → chevron (contato). Import dinâmico: só entra no bundle
// depois que o conteúdo carrega, e só é chamado quando as guardas de perf passam.
import * as THREE from 'three';

// Partículas — contagem dinâmica: leve no mobile pra manter 60fps.
let COUNT = 1600;
const COLOR = new THREE.Color('#C8F135'); // lime oficial da marca

// ---------------------------------------------------------------------------
// Geradores de forma — cada um preenche um Float32Array (COUNT*3) com os alvos
// de posição de cada partícula. O morph interpola a posição atual em direção
// ao alvo da seção visível.
// ---------------------------------------------------------------------------

/** Chevron ascendente duplo — o símbolo da marca. Apex no topo, braços descem. */
function shapeChevron(): Float32Array {
  const a = new Float32Array(COUNT * 3);
  const apexYs = [1.7, -0.6]; // dois chevrons empilhados
  const spread = 3.0; // meia-largura horizontal
  const drop = 2.2; // quanto os braços descem
  for (let i = 0; i < COUNT; i++) {
    const chev = i % 2; // alterna entre os dois chevrons
    const side = i % 4 < 2 ? -1 : 1; // braço esquerdo / direito
    const t = Math.random(); // 0 = apex, 1 = ponta do braço
    a[i * 3] = side * t * spread + (Math.random() - 0.5) * 0.28;
    a[i * 3 + 1] = apexYs[chev] - t * drop + (Math.random() - 0.5) * 0.28;
    a[i * 3 + 2] = (Math.random() - 0.5) * 1.4;
  }
  return a;
}

/** Grafo/rede — grade jitterada dentro de um disco: leitura de "nós conectados". */
function shapeGraph(): Float32Array {
  const a = new Float32Array(COUNT * 3);
  const cols = 9;
  const rows = 7;
  const gx = 7.2 / cols;
  const gy = 5.4 / rows;
  for (let i = 0; i < COUNT; i++) {
    const c = i % cols;
    const r = Math.floor(i / cols) % rows;
    const x = (c - (cols - 1) / 2) * gx;
    const y = (r - (rows - 1) / 2) * gy;
    // jitter forte pra parecer orgânico, não uma grade rígida
    a[i * 3] = x + (Math.random() - 0.5) * gx * 0.9;
    a[i * 3 + 1] = y + (Math.random() - 0.5) * gy * 0.9;
    a[i * 3 + 2] = (Math.random() - 0.5) * 2.2;
  }
  return a;
}

/** Barras subindo — leitura de "resultado / crescimento". */
function shapeBars(): Float32Array {
  const a = new Float32Array(COUNT * 3);
  const bars = 14;
  const heights = [0.3, 0.5, 0.42, 0.68, 0.55, 0.8, 0.62, 0.9, 0.72, 1, 0.85, 1.1, 0.95, 1.25];
  const width = 8.4;
  const bw = width / bars;
  const baseY = -2.6;
  for (let i = 0; i < COUNT; i++) {
    const b = i % bars;
    const h = heights[b] * 4.2;
    const x = (b - (bars - 1) / 2) * bw;
    a[i * 3] = x + (Math.random() - 0.5) * bw * 0.55;
    a[i * 3 + 1] = baseY + Math.random() * h;
    a[i * 3 + 2] = (Math.random() - 0.5) * 1.2;
  }
  return a;
}

/** Orbe — esfera de Fibonacci: "estrutura fechada, alcance regional". */
function shapeSphere(): Float32Array {
  const a = new Float32Array(COUNT * 3);
  const R = 3.1;
  const phi = Math.PI * (3 - Math.sqrt(5)); // ângulo áureo
  for (let i = 0; i < COUNT; i++) {
    const y = 1 - (i / (COUNT - 1)) * 2;
    const rad = Math.sqrt(1 - y * y);
    const theta = phi * i;
    a[i * 3] = Math.cos(theta) * rad * R;
    a[i * 3 + 1] = y * R;
    a[i * 3 + 2] = Math.sin(theta) * rad * R;
  }
  return a;
}

// Ciclo de formas por ordem das seções na página (index-based, sem depender de ids).
const SHAPES: Record<string, Float32Array> = {};
function buildShapes() {
  SHAPES.chevron = shapeChevron();
  SHAPES.graph = shapeGraph();
  SHAPES.bars = shapeBars();
  SHAPES.sphere = shapeSphere();
}
const SHAPE_CYCLE = [
  'chevron', // hero
  'chevron', // parceiros (faixa fina — segura o chevron)
  'graph', // serviços
  'graph', // casos de uso
  'bars', // números (contadores)
  'bars', // portfólio
  'sphere', // planos
  'sphere', // diferenciais
  'chevron', // CTA final
  'chevron', // contato
];

// ---------------------------------------------------------------------------
// Shaders — ponto lime macio com atenuação por profundidade e drift suave.
// ---------------------------------------------------------------------------
const VERT = /* glsl */ `
  attribute float aSeed;
  uniform float uTime;
  uniform float uSize;
  uniform float uPixelRatio;
  varying float vFade;
  void main() {
    vec3 p = position;
    // respiração/drift sutil por partícula
    p.x += sin(uTime * 0.5 + aSeed * 6.2831) * 0.12;
    p.y += cos(uTime * 0.4 + aSeed * 6.2831) * 0.12;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uSize * uPixelRatio * (1.0 / -mv.z);
    vFade = clamp(1.0 / -mv.z, 0.2, 1.0); // pontos mais distantes mais apagados
  }
`;
const FRAG = /* glsl */ `
  precision mediump float;
  uniform vec3 uColor;
  uniform float uOpacity;
  varying float vFade;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float alpha = smoothstep(0.5, 0.12, d) * uOpacity * vFade;
    if (alpha < 0.01) discard;
    gl_FragColor = vec4(uColor, alpha);
  }
`;

export function initConstellation(canvas: HTMLCanvasElement) {
  // Menos partículas em telas pequenas — mesma cena, custo menor.
  const isMobile = window.innerWidth <= 768;
  COUNT = isMobile ? 450 : 1100;
  buildShapes();

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
  const pixelRatio = Math.min(window.devicePixelRatio, 1.5); // capa DPR — protege perf
  renderer.setPixelRatio(pixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  renderer.setClearColor(0x000000, 0); // transparente: mostra o bg escuro do body

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.z = 9;

  const group = new THREE.Group();
  scene.add(group);

  // Posições correntes (interpoladas) partem do chevron.
  const current = SHAPES.chevron.slice();
  const seeds = new Float32Array(COUNT);
  for (let i = 0; i < COUNT; i++) seeds[i] = Math.random();

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(current, 3));
  geo.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 1));

  const mat = new THREE.ShaderMaterial({
    vertexShader: VERT,
    fragmentShader: FRAG,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: {
      uTime: { value: 0 },
      uSize: { value: isMobile ? 78 : 62 },
      uPixelRatio: { value: pixelRatio },
      uColor: { value: COLOR },
      uOpacity: { value: 0.55 }, // sutil — o conteúdo é o herói
    },
  });

  const points = new THREE.Points(geo, mat);
  group.add(points);
  const posAttr = geo.getAttribute('position') as THREE.BufferAttribute;

  // -------------------------------------------------------------------------
  // Seção ativa dirige o alvo do morph. IntersectionObserver escolhe a seção
  // mais centralizada, sem precisar editar cada componente.
  // -------------------------------------------------------------------------
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
          wake(); // nova seção → acorda pra animar a transição
        }
      }
    },
    { threshold: 0.4, rootMargin: '-20% 0px -40% 0px' }
  );
  sections.forEach((s) => sectionObserver.observe(s));

  // Parallax leve com o mouse (desktop) — acorda o loop por um instante.
  let mx = 0;
  let my = 0;
  let pointerActiveUntil = 0;
  window.addEventListener(
    'pointermove',
    (e) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 0.3;
      my = (e.clientY / window.innerHeight - 0.5) * 0.3;
      pointerActiveUntil = performance.now() + 500;
      wake();
    },
    { passive: true }
  );

  // -------------------------------------------------------------------------
  // Loop com "assentamento": renderiza só durante transições de morph ou quando
  // o mouse mexe; quando a cena está parada, dorme (custo de CPU ~zero). Cap de
  // 30fps. Isso mantém a main thread livre — crítico para performance.
  // -------------------------------------------------------------------------
  let running = false;
  let raf = 0;
  let lastFrame = 0;
  let visible = true;
  const FRAME_MS = 1000 / 30;

  function tick(now: number) {
    if (!running) return;
    raf = requestAnimationFrame(tick);
    if (now - lastFrame < FRAME_MS) return;
    lastFrame = now;

    mat.uniforms.uTime.value = now / 1000;

    // morph — mede o quanto ainda falta pro alvo
    const arr = posAttr.array as Float32Array;
    let maxD = 0;
    for (let i = 0; i < arr.length; i++) {
      const d = target[i] - arr[i];
      arr[i] += d * 0.06;
      const ad = d < 0 ? -d : d;
      if (ad > maxD) maxD = ad;
    }
    const morphing = maxD > 0.004;
    if (morphing) posAttr.needsUpdate = true; // só sobe pra GPU enquanto muda

    group.rotation.x += (my - group.rotation.x) * 0.04;
    group.rotation.z += (mx * 0.4 - group.rotation.z) * 0.04;
    if (morphing) group.rotation.y += 0.001;

    renderer.render(scene, camera);

    // parou de mudar e o mouse está quieto → dorme
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

  // Pausa total quando a aba fica oculta.
  document.addEventListener('visibilitychange', () => {
    visible = !document.hidden;
    if (visible) wake();
    else stop();
  });

  // Pausa quando o canvas sai da tela (não deveria com fixed, mas garante).
  const canvasObserver = new IntersectionObserver(
    ([entry]) => {
      visible = entry.isIntersecting;
      if (visible) wake();
      else stop();
    },
    { threshold: 0 }
  );
  canvasObserver.observe(canvas);

  // Resize.
  let resizeTimer = 0;
  window.addEventListener('resize', () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight, false);
      wake();
    }, 150);
  });

  start();
}
