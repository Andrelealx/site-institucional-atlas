// Micro-interações do site: contadores animados, botões magnéticos e scramble
// do título. Import dinâmico (fora do critical path). Contadores SEMPRE chegam
// ao valor final, mesmo com reduced-motion; os efeitos puramente estéticos são
// desativados sob reduced-motion / dispositivos sem ponteiro fino.

const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

/** Contadores que sobem de 0 ao alvo ao entrar na viewport. */
function countUp(reduce: boolean) {
  const els = Array.from(document.querySelectorAll<HTMLElement>('[data-count]'));
  if (!els.length) return;

  const run = (el: HTMLElement) => {
    const target = parseFloat(el.dataset.count || '0');
    const suffix = el.dataset.suffix || '';
    const decimals = (el.dataset.count || '').includes('.')
      ? (el.dataset.count!.split('.')[1] || '').length
      : 0;
    const fmt = (n: number) =>
      n.toLocaleString('pt-BR', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      }) + suffix;

    if (reduce) {
      el.textContent = fmt(target);
      return;
    }
    const dur = 1600;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      el.textContent = fmt(target * easeOutExpo(p));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        run(e.target as HTMLElement);
        io.unobserve(e.target);
      }
    },
    { threshold: 0.4 }
  );
  els.forEach((el) => io.observe(el));
}

/** Botões que "puxam" levemente em direção ao cursor. */
function magnetic() {
  const els = document.querySelectorAll<HTMLElement>('.btn-primary, [data-magnetic]');
  els.forEach((el) => {
    const strength = 0.35;
    el.style.transition = 'transform 0.2s cubic-bezier(0.22,1,0.36,1)';
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
    });
    el.addEventListener('pointerleave', () => {
      el.style.transform = '';
    });
  });
}

/** Efeito "decrypt": embaralha e resolve o texto marcado com [data-scramble]. */
function scramble() {
  const els = document.querySelectorAll<HTMLElement>('[data-scramble]');
  const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#%&<>/*+';
  els.forEach((el, idx) => {
    const final = el.textContent || '';
    const len = final.length;
    let frame = 0;
    const revealEvery = 2; // frames por caractere resolvido
    const delay = idx * 220; // encadeia se houver vários

    const step = () => {
      const revealed = Math.floor(frame / revealEvery);
      let out = '';
      for (let i = 0; i < len; i++) {
        if (final[i] === ' ') {
          out += ' ';
        } else if (i < revealed) {
          out += final[i];
        } else {
          out += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }
      el.textContent = out;
      frame++;
      if (revealed <= len) requestAnimationFrame(step);
      else el.textContent = final;
    };
    setTimeout(() => requestAnimationFrame(step), delay);
  });
}

export function initEnhancements() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(pointer: fine)').matches;
  countUp(reduce);
  if (!reduce && finePointer) magnetic();
  if (!reduce) scramble();
}
