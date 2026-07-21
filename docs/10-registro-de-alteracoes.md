# Registro de Alterações

## 2026-06-12 (portfólio híbrido)

### Alterado

- **Card de portfólio híbrido**: projeto com `image` mostra a captura; sem `image`, renderiza um painel desenhado da marca (gradiente + grade + brilho lime + ícone). Adicionados `icon` e `tags` (chips) ao modelo `Project`.
- **CT Quebrando Limites**: print refeito esperando a animação assentar (hero completo com countdown).
- **Suporte Única**: trocado o print do formulário por card desenhado (o miolo do sistema exige login). Ícone `headphones` + chips. Removida `portfolio-unica.jpg`.

### Arquivos modificados

- `src/components/Portfolio.astro`, `src/data/projects.ts`, `public/images/portfolio-ct.jpg` (atualizado), `public/images/portfolio-unica.jpg` (removido)

## 2026-06-12 (revisão mobile + conversão)

### Alterado

- **Formulário de contato** agora monta a mensagem com os campos e abre o WhatsApp (sem backend) — antes fingia sucesso sem destino, perdendo lead. Removido `FORM_ENDPOINT` do config (órfão). Tipos de negócio realinhados (empresa local, profissional liberal, loja/comércio, evento).
- **Menu mobile**: overlay com fundo sólido (`bg-bg-base`) — corrige o vazamento do conteúdo atrás.
- **SocialProof** ligado no `index.astro`; renderiza só quando o array de depoimentos tiver conteúdo real (auto-oculto enquanto vazio).

### Revisado

- Responsividade mobile (390px) testada via Playwright: navbar/hamburguer, menu fullscreen, planos e portfólio empilhando em 1 coluna — OK.

### Arquivos modificados

- `src/components/ContactForm.tsx`, `src/components/MobileMenu.tsx`, `src/config/site.ts`, `src/pages/index.astro`

## 2026-06-12 (planos & preços + portfólio real)

### Adicionado

- **Seção Planos & Preços** (`src/components/Pricing.astro` + `src/data/plans.ts`): 4 planos oficiais — Presença (R$ 497 + R$ 79/mês), Autoridade (R$ 997 + R$ 149/mês · destaque "Mais popular"), Domínio (R$ 1.997 + R$ 249/mês) e Expert (R$ 1.197/ano, sem mensalidade · profissional liberal, card largo com chips de profissões). CTAs abrem WhatsApp com mensagem por plano. Âncora `#planos` na navegação (Header, MobileMenu, Footer).
- **Portfólio real**: 2 cases com capturas dos sites no ar — CT Quebrando Limites (inscrição + pagamento + QR Code) e Suporte Única (sistema de chamados). Imagens otimizadas em `public/images/portfolio-ct.jpg` e `portfolio-unica.jpg`. Removido aviso de "projetos ilustrativos".

### Observações

- O material original dos planos usa cyan no Expert; mantido em **lime** no site para respeitar a regra de marca (sem azul/cyan).

### Arquivos criados/modificados

- Criados: `src/components/Pricing.astro`, `src/data/plans.ts`, `public/images/portfolio-ct.jpg`, `public/images/portfolio-unica.jpg`
- Modificados: `src/pages/index.astro`, `src/components/Header.astro`, `src/components/MobileMenu.tsx`, `src/components/Footer.astro`, `src/components/Portfolio.astro`, `src/data/projects.ts`

## 2026-06-12 (dados legais da empresa)

### Adicionado

- **Dados legais** no `src/config/site.ts` (`SITE.legalName`, `SITE.cnpj`): razão social "Atlas Consultoria e Tecnologia da Informação" e CNPJ 67.276.955/0001-47. Marca exibida segue "Atlas Tecnologias".
- **Rodapé**: razão social + CNPJ na barra inferior, abaixo do copyright.
- **JSON-LD**: campos `legalName` e `taxID` no schema ProfessionalService.

### Arquivos modificados

- `src/config/site.ts`, `src/components/Footer.astro`, `src/layouts/Layout.astro`

## 2026-06-08 (refinamento visual e de performance)

### Alterado

- **Scroll reveal**: seções animam (fade+slide) ao entrar na viewport via IntersectionObserver, respeitando `prefers-reduced-motion`.
- **Nav ativo**: link do menu destaca a seção visível (`aria-current` + cor de marca).
- **Hero**: elemento visual trocado de chevron grande por mock abstrato de produto (janela + gráfico de barras + lista + badge da marca).
- **OG image**: gerado `public/images/og-atlas.png` (1200×630) com a marca, para compartilhamento social.
- **Fontes self-hosted**: Inter + Space Grotesk via `@fontsource` (removido request ao Google Fonts — melhor performance e LGPD).
- **Acessibilidade**: link "pular para o conteúdo" + `id="main-content"` nas páginas.
- **Página 404** com a identidade da marca.
- **Prova social**: componente `SocialProof.astro` criado (estrutura pronta, não renderizado — aguarda depoimentos reais).

### Arquivos criados/modificados

- Criados: `src/components/SocialProof.astro`, `src/pages/404.astro`, `public/images/og-atlas.png`
- Modificados: `src/layouts/Layout.astro`, `src/styles/global.css`, `src/components/Hero.astro`, `Header.astro`, `Services.astro`, `UseCases.astro`, `Portfolio.astro`, `Differentials.astro`, `FinalCTA.astro`, `Contact.astro`, `src/pages/index.astro`, `politica-de-privacidade.astro`, `package.json` (+ `@fontsource-variable/inter`, `@fontsource/space-grotesk`)

### Motivo

- Acabamento visual premium e ganho de performance/acessibilidade sem inventar conteúdo do cliente.

### Próximo passo

- Cliente: enviar dados/imagens/depoimentos reais. Decisão pendente: upgrade Astro 5→6 (segurado para não arriscar o build estável).

---

## 2026-06-08 (desenvolvimento do site)

### Alterado

- Site institucional construído por completo seguindo `/docs`. Stack Astro 5 + Tailwind + React (ilhas) + TypeScript. Single page com âncoras (Hero, Serviços, Casos de uso, Portfólio, Diferenciais, CTA final, Contato) + Header fixo, Footer e botão flutuante de WhatsApp. Identidade aplicada com tokens da Decisão 002 (accent lime #C8F135 sobre fundo escuro). SEO completo (meta, OpenGraph, JSON-LD, sitemap, robots, favicon). Formulário com validação, aviso LGPD e endpoint configurável. Página de Política de Privacidade (baseline LGPD). Build (`npm run build`) sem erros.

### Arquivos criados/modificados

- Config: `package.json`, `astro.config.mjs`, `tailwind.config.mjs`, `tsconfig.json`, `.gitignore`, `README.md`
- Código: `src/config/site.ts`, `src/data/projects.ts`, `src/data/services.ts`, `src/styles/global.css`, `src/layouts/Layout.astro`, `src/pages/index.astro`, `src/pages/politica-de-privacidade.astro`
- Componentes: `Header`, `Hero`, `Services`, `UseCases`, `Portfolio`, `Differentials`, `FinalCTA`, `Contact`, `Footer`, `WhatsAppFloat`, `Logo`, `Icon`, `ImageWithFallback` (`.astro`) + `MobileMenu`, `ContactForm` (`.tsx`)
- Público: `public/favicon.svg`, `public/robots.txt`, `public/images/README.md`
- Docs: `docs/09-tarefas.md`, `docs/11-decisoes-tecnicas.md`, `docs/12-status-do-projeto.md`

### Motivo

- Entregar o site institucional conforme a documentação do Método Atlas Blueprint, mantendo todas as pendências de cliente registradas e usando placeholders.

### Próximo passo

- Cliente: enviar WhatsApp, e-mail, Instagram, endpoint do formulário, projetos reais e imagens finais. Depois: ajustar `src/config/site.ts` + `public/images/`, definir domínio e fazer deploy.

---

## 2026-06-05 (atualização — logo oficial)

### Alterado

- Recebido o logo oficial "Atlas Tecnologias — Chevron Ascendente". Identidade visual atualizada: accent passa de azul/cyan (provisório) para **verde-limão #C8F135** (cor real da marca). Nome da marca confirmado como "Atlas Tecnologias". Símbolo = chevron ascendente duplo.

### Arquivos modificados

- docs/03-identidade-visual.md (reescrito), docs/04-estrutura-de-paginas.md, docs/11-decisoes-tecnicas.md (decisão 002 + tokens), midias/PROMPTS_DE_IMAGEM.md, midias/logo/ (PDF + SVGs adicionados)

### Motivo

- Alinhar o site ao logo oficial em vez da paleta provisória.

### Próximo passo

- Claude Code: usar os tokens da decisão 002 e o lockup de /midias/logo no header.

---


## 2026-06-05

### Alterado

- Documentação `/docs` preenchida com os dados reais da Atlas (briefing, dossiê, requisitos, identidade visual, estrutura de páginas, funcionalidades, banco, integrações, LGPD).

### Arquivos modificados

- docs/00 a docs/12, CLAUDE.md

### Motivo

- Preparar o projeto para desenvolvimento seguindo o Método Atlas Blueprint.

### Próximo passo

- Claude Code: ler AGENTS.md + /docs e iniciar o desenvolvimento do site.

---

> Claude Code: registre abaixo cada nova alteração no mesmo formato (data, alterado, arquivos, motivo, próximo passo).

---

## 2026-07-20 — Fundo animado Constelação Atlas (Three.js)

### Alterado

- Adicionado fundo WebGL de partículas com morph por scroll (chevron → grafo → barras → orbe), intensidade sutil/corporativa. Ver Decisão 010.

### Arquivos modificados

- `src/scripts/constellation.ts` (novo), `src/components/BackgroundCanvas.astro` (novo), `src/layouts/Layout.astro`, `package.json`.

### Motivo

- Elevar o visual do site ("tecnológico/de ponta") sem perder aparência funcional, performance nem legibilidade.

### Próximo passo

- Rodar Lighthouse real (desktop+mobile) e ajustar densidade/opacidade se necessário. Avaliar linhas de conexão no estado "grafo" (v2).

---

## 2026-07-20 — Constelação no mobile + seção de Parceiros

### Alterado

- Constelação Atlas agora roda no mobile em versão leve (650 partículas vs 1600 no desktop; ponto maior). Removida a guarda que desligava tudo em ≤768px — mantidas reduced-motion / low-mem / no-WebGL.
- Nova seção **Parceiros** (faixa marquee de logos) após o Hero. Dados em `src/data/partners.ts`; placeholders neutros enquanto não há logos reais.
- `SHAPE_CYCLE` da constelação reindexado por causa da nova seção.

### Arquivos modificados

- `src/scripts/constellation.ts`, `src/components/BackgroundCanvas.astro`, `src/components/Partners.astro` (novo), `src/data/partners.ts` (novo), `src/pages/index.astro`.

### Motivo

- Cliente reportou animação ausente no mobile e site "muito simples"; pediu logos de parceiros.

### Próximo passo

- Soltar logos reais em `public/images/partners/` e preencher `partners.ts`.
- Definir com o cliente mais elementos de riqueza (contadores animados, hero scramble, etc.).

---

## 2026-07-20 — Contadores animados + micro-interações + depth

### Alterado

- Nova seção **Números** (`#numeros`) com contadores animados (count-up ao entrar na viewport, divisor gradiente lime, glow no hover). Dados em `src/data/stats.ts`.
- **Micro-interações** (`src/scripts/enhancements.ts`, chunk lazy): botões magnéticos (`.btn-primary` + `[data-magnetic]`), título do Hero com efeito scramble/decrypt, count-up. Desativa efeitos estéticos em reduced-motion; contadores sempre chegam ao valor final.
- **Depth**: cards com elevação + `shadow-glow` no hover.
- `SHAPE_CYCLE` reindexado pela seção Números.

### Arquivos modificados

- `src/scripts/enhancements.ts` (novo), `src/data/stats.ts` (novo), `src/components/Stats.astro` (novo), `src/components/Hero.astro`, `src/layouts/Layout.astro`, `src/styles/global.css`, `src/scripts/constellation.ts`, `src/pages/index.astro`.

### Motivo

- Cliente pediu contadores animados e mais riqueza visual.

### Próximo passo

- **PENDÊNCIA**: confirmar os 4 números em `src/data/stats.ts` (hoje são valores editáveis/defensáveis, não medidos).

---

## 2026-07-20 — Logos reais de parceiros + logo oficial da marca

### Alterado

- **Parceiros**: 12 logos reais integrados (marquee como chips de avatar arredondado + nome; lida com qualquer fundo). Imagens redimensionadas p/ ~220px em `public/images/partners/`. Dados em `src/data/partners.ts`.
- **Marca**: header e footer agora usam o lockup oficial (`public/images/atlas-logo.svg` — versão negativa: chevron lime arredondado + texto branco). Favicon trocado pelo símbolo oficial (`public/favicon.svg`). Kit completo em `midias/ATLAS_Marca_Grafica/`.

### Arquivos modificados

- `src/data/partners.ts`, `src/components/Partners.astro`, `src/components/Logo.astro`, `public/favicon.svg`, `public/images/atlas-logo.svg` (novo), `public/images/partners/*` (12 novos), `midias/ATLAS_Marca_Grafica/*`, `midias/logo_parceiros/*`.

### Motivo

- Cliente forneceu identidade visual oficial e a pasta de logos de parceiros.

### Próximo passo

- Confirmar nomes/ordem dos parceiros em `partners.ts`. Trocar `og-atlas.png` pela arte social oficial se houver.

---

## 2026-07-20 — Divisores animados + parallax no hero + fix logo Única

### Alterado

- **Divisores animados** (`src/components/Divider.astro`): linha gradiente lime + ponto que "desenha" ao entrar na viewport. Inseridos entre Portfólio/Planos/Diferenciais.
- **Parallax no hero** (`enhancements.ts` → `parallax()`): janela mock, badge flutuante e glow deslizam em velocidades diferentes no scroll (profundidade em camadas). Desativado em reduced-motion.
- **Logo Única Serviços**: fundo preto do JPG removido e recomposto sobre branco (`unica-servicos.png`) — antes sumia no fundo escuro.

### Arquivos modificados

- `src/components/Divider.astro` (novo), `src/styles/global.css`, `src/pages/index.astro`, `src/scripts/enhancements.ts`, `src/components/Hero.astro`, `src/data/partners.ts`, `public/images/partners/unica-servicos.png` (novo).

### Motivo

- Mais profundidade/ritmo visual (pedido do cliente) e correção de contraste do logo da Única.

---

## 2026-07-21 — Hero novo (fluxo de automação) + fixes de logo/mobile

### Alterado

- **Hero repaginado**: gráfico de barras substituído por **fluxo de automação** (`AutomationFlow.astro`): Cliente → WhatsApp → Atlas (hub lime) → Site/Venda, com pulso lime correndo pelos fios e selo "ao vivo". Comunica o que a Atlas faz. Agora aparece também no mobile.
- **Logos**: Golden Express (fundo transparente → composto sobre branco) e Única (já corrigida) agora legíveis. `golden-express.png`.
- **Mobile revisado**: confirmado via emulação real (puppeteer) que não há overflow horizontal (docW==winW==390); cortes anteriores eram artefato de screenshot headless sem emulação de viewport. Constelação confirmada rodando no mobile.
- Parallax removido do glow do hero (conflitava com a centralização).

### Arquivos modificados

- `src/components/AutomationFlow.astro` (novo), `src/components/Hero.astro`, `src/data/partners.ts`, `public/images/partners/golden-express.png` (novo), `public/images/partners/unica-servicos.png`.

### Motivo

- Cliente achou o gráfico "sem tecnologia", pediu hero melhor, revisão mobile e fundo branco nos logos Única/Golden.

---

## 2026-07-21 — Performance: JS fora do caminho crítico

### Alterado

- **Constelação (three.js, 117kb gz)** agora só carrega após o evento `load` + `requestIdleCallback` — não compete mais com a primeira pintura.
- **MobileMenu** reescrito de React (`client:load`) para **Astro vanilla** (script inline). Era o que forçava o runtime React (44kb gz) no load inicial. ContactForm segue React mas `client:visible` (carrega só ao rolar até o formulário).
- Removida a fonte **Space Grotesk 500** (não usada; títulos são bold/700).

### Resultado (medido com puppeteer, 4G + CPU 4x)

- JS carregado antes do `load`: **~160kb → 0.9kB**.
- React e three.js totalmente fora do caminho crítico.

### Arquivos modificados

- `src/components/BackgroundCanvas.astro`, `src/components/MobileMenu.astro` (novo, substitui `.tsx`), `src/components/Header.astro`, `src/layouts/Layout.astro`.

### Motivo

- Cliente relatou lentidão no carregamento.
