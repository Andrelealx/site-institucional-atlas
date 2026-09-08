# Imagens públicas

Arquivos servidos **como estão**, sem otimização — o Astro só copia o que está
em `public/`. Por isso aqui ficam apenas imagens que precisam de caminho fixo.

## O que vive aqui

- `og-atlas.png` — imagem de compartilhamento (OpenGraph/Twitter), 1200×630px.
  **PENDÊNCIA:** o arquivo atual é placeholder; falta a versão final.
- `atlas-logo.svg` — lockup da marca usado no header e no rodapé.
- `partners/` — logos do carrossel de parceiros. Quadrados ficam melhores
  (são exibidos como avatar redondo). Ver `src/data/partners.ts`.

## O que NÃO vive mais aqui: prints do portfólio

Desde 2026-09-07 os prints ficam em **`src/assets/portfolio/`**, para passarem
pelo pipeline do Astro (WebP + `srcset`, ~90% menor). Ver Decisão 013 em
`docs/11-decisoes-tecnicas.md`.

Para adicionar um case novo:

1. Salve o print em `src/assets/portfolio/` — use `portfolio-<cliente>.jpg`,
   1530×784 é o padrão dos existentes.
2. Adicione a entrada em `src/data/projects.ts` com
   `image: '/images/portfolio-<cliente>.jpg'`. O caminho continua sendo o
   público: `Portfolio.astro` casa dados e assets pelo **nome do arquivo**.

Se o arquivo não existir em `src/assets/portfolio/`, o site cai no `<img>`
simples buscando em `/public` — e, não achando lá também, mostra o placeholder
visual de `src/components/ImageWithFallback.astro`, sem quebrar o layout.
