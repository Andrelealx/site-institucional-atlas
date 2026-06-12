# Atlas Tecnologias — Site Institucional

Site institucional da Atlas Tecnologias: sites, sistemas e automações para
negócios locais. Single page (dark/tech) com foco em geração de leads
(WhatsApp + formulário) e autoridade (portfólio).

> A pasta `/docs` é a fonte oficial de verdade (Método Atlas Blueprint).
> O **processo interno não aparece no site** — comunica-se resultado, não método.

## Stack

- **Astro 5** (site estático, SEO local, performance) + **TypeScript**
- **Tailwind CSS** (tokens da marca em `tailwind.config.mjs`)
- **React** apenas em ilhas (`MobileMenu`, `ContactForm`)
- **@astrojs/sitemap** (sitemap automático)

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera /dist (estático)
npm run preview  # serve o /dist
```

## Estrutura

```
src/
  config/site.ts        # contatos, waLink(), dados SEO  ← EDITAR AQUI
  data/projects.ts      # portfólio (placeholders)
  data/services.ts      # serviços, casos de uso, diferenciais
  layouts/Layout.astro  # SEO, OpenGraph, JSON-LD, fontes
  components/            # seções (.astro) + ilhas React (.tsx)
  pages/
    index.astro                    # home single-page
    politica-de-privacidade.astro  # baseline LGPD
public/
  favicon.svg           # símbolo chevron lime
  images/               # imagens finais (fallback até chegarem)
```

## O que editar antes de publicar (PENDÊNCIAS)

Tudo centralizado em `src/config/site.ts`:

| Constante        | O que é                              | Status     |
|------------------|--------------------------------------|------------|
| `WHATSAPP_NUMBER`| Número oficial (55+DDD+nº)           | PENDÊNCIA  |
| `EMAIL`          | E-mail oficial                       | PENDÊNCIA  |
| `INSTAGRAM`      | @ do Instagram (vazio = oculta)      | PENDÊNCIA  |
| `FORM_ENDPOINT`  | Formspree/n8n (vazio = log console)  | PENDÊNCIA  |

Imagens (em `public/images/`, ver README de lá) e projetos reais
(`src/data/projects.ts`) também são PENDÊNCIAS. O site sobe com placeholders.

## Deploy

Saída estática em `/dist` — sobe em qualquer host (Vercel, Netlify,
Cloudflare Pages). Usar HTTPS. Ajustar o domínio em `astro.config.mjs` (`site`).

## Marca

Accent oficial **#C8F135** (verde-limão) sobre fundo escuro `#0A0B0D`.
Texto sobre lime sempre escuro. Logo em `/midias/logo/`.
