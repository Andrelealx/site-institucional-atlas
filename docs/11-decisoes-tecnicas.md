# Decisões Técnicas

## Decisão 001 — Stack do projeto

### Decisão

Astro (última versão estável) + Tailwind CSS + TypeScript, com React apenas em ilhas onde houver interatividade real (menu mobile, formulário).

### Motivo

Site institucional sem área logada nem conteúdo dinâmico. Astro gera HTML estático ultrarrápido (melhor SEO local e conversão) e permite interatividade pontual via ilhas. Next.js seria overkill sem dashboard/auth.

### Impacto

- Manutenção: simples, baseada em componentes.
- Deploy: estático (qualquer host — Vercel, Netlify, Cloudflare Pages).
- Performance: excelente (meta Lighthouse 95+).
- Custo: baixo/zero de hospedagem.

### Arquivos afetados

- Estrutura geral do projeto, `astro.config`, `tailwind.config`.

---

> Claude Code: registre novas decisões abaixo no mesmo formato.

## Decisão 002 — Paleta e identidade a partir do logo oficial

### Decisão

Adotar o accent verde-limão **#C8F135** como cor de marca (extraída do logo oficial "Atlas Tecnologias — Chevron Ascendente"), sobre base escura. Substitui qualquer referência anterior a azul/cyan.

### Motivo

O logo oficial já define a identidade. A cor de marca real é o lime, não azul. Alinhar o site ao logo garante coerência visual.

### Impacto

- Tokens de cor do Tailwind devem usar `#C8F135` como `brand`/accent.
- Regra de contraste: texto sobre lime sempre escuro (#0A0B0D), nunca branco.
- Botões primários = fundo lime + texto quase-preto.

### Arquivos afetados

- `tailwind.config` (tokens), todos os componentes com accent, favicon.

## Tokens de cor para o Tailwind (theme.extend.colors)

```
'bg-base':      '#0A0B0D'
'bg-surface':   '#16181D'
'bg-surface-2': '#1C1F26'
'border-soft':  '#262A33'
'text-primary':   '#F4F5F7'
'text-secondary': '#9CA3AF'
'brand':        '#C8F135'   // verde-limão oficial — accent
```

Fontes: Space Grotesk (títulos), Inter (corpo).

---

## Decisão 003 — Ícones inline em vez de dependência

### Decisão

Criar `src/components/Icon.astro` mapeando apenas os ícones usados (estilo lucide, inline) em vez de instalar um pacote de ícones.

### Motivo

Menos dependências, menor bundle, ícones renderizados no HTML estático (sem JS). Mantém o estilo lucide previsto na identidade.

### Impacto / Arquivos

- `src/components/Icon.astro`. Para novos ícones, adicionar o path no mapa do componente.

---

## Decisão 004 — Sitemap e SEO

### Decisão

Usar `@astrojs/sitemap` para gerar sitemap automático; JSON-LD do tipo `ProfessionalService` (LocalBusiness) no `Layout.astro`; `robots.txt` apontando o sitemap.

### Motivo

SEO local é requisito (docs/02). Sitemap automático evita manutenção manual.

### Impacto / Arquivos

- `astro.config.mjs`, `src/layouts/Layout.astro`, `public/robots.txt`.

---

## Decisão 005 — Página de Política de Privacidade (baseline)

### Decisão

Criar `/politica-de-privacidade` com texto baseline LGPD (linkado no footer) marcado como PENDÊNCIA de revisão, em vez de deixar o link quebrado.

### Motivo

O footer referencia a política; um link 404 prejudica confiança e SEO. Baseline atende ao mínimo LGPD até André aprovar o texto final.

### Impacto / Arquivos

- `src/pages/politica-de-privacidade.astro`. Revisar texto antes de publicar.

---

## Decisão 006 — Formulário sem backend (endpoint configurável)

### Decisão

Formulário envia para `FORM_ENDPOINT` (Formspree/n8n). Vazio = registra no console (modo teste), permitindo subir o site antes de o endpoint existir.

### Motivo

Site é estático, sem banco (docs/06). Endpoint externo configurável evita backend próprio e mantém o desenvolvimento desbloqueado.

### Impacto / Arquivos

- `src/config/site.ts` (`FORM_ENDPOINT`), `src/components/ContactForm.tsx`.

---

## Decisão 007 — Fontes self-hosted (@fontsource)

### Decisão

Servir Inter (variable) e Space Grotesk localmente via `@fontsource`, removendo o link para o Google Fonts.

### Motivo

Elimina request a terceiro (melhor LCP/Lighthouse), evita transferência de IP do visitante ao Google (baseline LGPD) e remove ponto único de falha externo.

### Impacto / Arquivos

- `src/layouts/Layout.astro` (imports + remoção do `<link>` Google), `package.json`.

---

## Decisão 008 — Animações via IntersectionObserver

### Decisão

Scroll reveal e nav-ativo implementados com `IntersectionObserver` + classes CSS, sem biblioteca de animação. Respeita `prefers-reduced-motion`.

### Motivo

Zero dependência extra, JS mínimo, acessível. Mantém o site estático/rápido.

### Impacto / Arquivos

- `src/layouts/Layout.astro` (scripts), `src/styles/global.css` (`[data-reveal]`), `data-reveal`/`data-nav` nas seções e no Header.

---

## Decisão 009 — Astro mantido em 5.x (não subir para 6 agora)

### Decisão

Segurar o major Astro 5→6 apesar do aviso de versão nova.

### Motivo

Build 5.x está estável e validado. Upgrade major no meio do acabamento arrisca quebrar integrações (Tailwind/React/sitemap). Fazer como tarefa isolada, com teste dedicado.

### Impacto / Arquivos

- `package.json`. Reavaliar após entrega das pendências do cliente.

---

## Decisão 010 — Fundo animado "Constelação Atlas" (Three.js)

### Decisão

Fundo WebGL de partículas (three.js vanilla) fixo atrás de todo o conteúdo, que faz *morph* de forma conforme a seção visível: chevron (hero) → grafo/rede (serviços) → barras (portfólio/planos) → orbe (diferenciais) → chevron (contato). Intensidade sutil/corporativa (opacidade ~0.55, additive blending, lime #C8F135).

### Motivo

Diferenciação visual "de ponta" sem comprometer conversão nem legibilidade. Conteúdo continua herói; animação é fundo. Narrativa on-brand (chevron ascendente = estrutura que sobe).

### Impacto / Arquivos

- `src/scripts/constellation.ts` (motor de partículas + shaders + morph por scroll, import dinâmico).
- `src/components/BackgroundCanvas.astro` (canvas `fixed -z-10` + guardas de perf).
- `src/layouts/Layout.astro` (monta `<BackgroundCanvas/>` antes do slot).
- `package.json` (dep `three` + `@types/three`).

### Guardas de performance (protegem Lighthouse)

- Chunk lazy (import dinâmico) — fora do critical path; ~117kb gz só sob demanda.
- Não inicia em: `prefers-reduced-motion`, tela ≤768px, `deviceMemory ≤2`, sem WebGL. Fallback = grid+glow CSS já existente.
- DPR capado em 1.5; rAF pausa em aba oculta e quando o canvas sai da viewport.
- Lighthouse mobile (tela pequena) cai no fallback → score preservado.
