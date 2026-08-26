# Tarefas do Projeto

## Pendente

- [ ] Substituir placeholders de contato em `src/config/site.ts` (WhatsApp, e-mail, Instagram, FORM_ENDPOINT) — depende do cliente
- [ ] Adicionar mais cases ao portfólio (`src/data/projects.ts`) quando o cliente enviar novos sites
- [ ] Adicionar imagem final `og-atlas.png` — depende do cliente
- [ ] Revisar/aprovar texto definitivo da Política de Privacidade — depende do cliente
- [ ] Definir domínio e fazer deploy (host estático + HTTPS)
- [ ] (Opcional) Plugar Analytics/Pixel

## Em andamento

- [ ]

## Concluído

- [x] Pasta docs criada e preenchida com dados da Atlas
- [x] Pasta midias criada
- [x] Inicializar projeto Astro + Tailwind + React (ilhas) + TypeScript
- [x] Configurar tokens de cor e fontes (Space Grotesk / Inter) no Tailwind
- [x] Criar `src/config/site.ts` (contatos + waLink + dados SEO)
- [x] Criar `src/data/projects.ts` (6 projetos placeholder)
- [x] Criar `src/data/services.ts` (serviços, casos de uso, diferenciais)
- [x] Componente de fallback de imagem (`ImageWithFallback.astro`)
- [x] Componente de ícones inline (`Icon.astro`) e lockup do logo (`Logo.astro`)
- [x] Header (fixo, blur ao rolar, menu mobile ilha React)
- [x] Hero (grid + glow lime + 2 CTAs)
- [x] Serviços (4 cards)
- [x] Casos de uso (4 blocos)
- [x] Portfólio (grid a partir de `projects.ts` + hover zoom)
- [x] Diferenciais ("Por que a Atlas")
- [x] CTA final
- [x] Contato (formulário ilha React + bloco WhatsApp/e-mail/Instagram)
- [x] Footer (logo, navegação, contato, copyright, link política)
- [x] Botão flutuante de WhatsApp
- [x] Aviso LGPD no formulário
- [x] Página de Política de Privacidade (baseline LGPD)
- [x] SEO (meta, OpenGraph, Twitter, JSON-LD ProfessionalService, sitemap, robots.txt)
- [x] Favicon (símbolo chevron lime)
- [x] Responsivo mobile-first
- [x] `npm run build` rodando sem erros
- [x] README de uso do projeto
- [x] Scroll reveal das seções (IntersectionObserver + reduced-motion)
- [x] Nav ativo (destaque da seção visível + aria-current)
- [x] Hero com mock visual de produto
- [x] OG image gerada (`public/images/og-atlas.png`)
- [x] Fontes self-hosted (@fontsource — sem Google Fonts)
- [x] Skip-to-content (acessibilidade)
- [x] Página 404 com a marca
- [x] Componente de prova social (estrutura, aguardando depoimentos reais)
- [x] Portfólio expandido com 6 cases reais (prints dos sites no ar) — 2026-08-25

## Fase 1 — Fundação de Tráfego Pago (2026-07-21)

- [x] Variáveis de ambiente (`.env` + `.env.example`): `META_DATASET_ID`, `WHATSAPP_E164`
- [x] Meta Pixel base code gated por consentimento (`src/components/MetaPixel.astro`)
- [x] API global de eventos (`atlasTrack`, `AtlasConsent`, delegação `[data-fb-event]`)
- [x] Evento `PageView` (automático no init do Pixel, pós-consentimento)
- [x] Evento `ViewContent` (load da landing Expert)
- [x] Evento `Lead` (clique WhatsApp da landing — 3 CTAs)
- [x] Evento `Contact` (WhatsApp de header, footer e botão flutuante)
- [x] Banner de consentimento LGPD (`src/components/CookieConsent.astro`) com persistência
- [x] Landing `/expert-dentistas` (hero, dor, solução, oferta, prova, CTA final) — faceless, identidade Atlas
- [x] Build sem erros + verificação do HTML gerado (sem ID hardcoded, sem vazamento Blueprint)
- [ ] **BLOQUEANTE:** André fornecer `META_DATASET_ID` (sem ele o Pixel não sobe)
- [ ] Validar no Test Events / Meta Pixel Helper (depende do ID)
- [ ] Ativar Meta-enabled CAPI no Events Manager (ação do André, pós-validação)
