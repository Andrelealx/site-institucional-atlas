# Registro de Alterações

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
