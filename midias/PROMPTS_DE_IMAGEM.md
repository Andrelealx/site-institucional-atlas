# Prompts de Imagem — Site Atlas Tecnologias

> Use só se quiser GERAR imagens. André optou por usar imagens próprias — então estes prompts são opcionais.
> Identidade: dark, tech minimalista, accent **verde-limão #C8F135** (lime), fundo quase-preto #0A0B0D.
> Salve com os nomes indicados em `public/images/`.

---

## Diretrizes globais de estilo

`dark UI aesthetic, near-black background #0A0B0D, vibrant lime green accent (#C8F135), minimalist, high-tech, clean, subtle glow, premium corporate, no text, no logos, no people, soft volumetric lighting, sharp, 8k`

**Negative:** `text, watermark, logo, low quality, cluttered, cartoon, cheesy stock photo, people in suits, blue/cyan tones, oversaturated`

> Observação de marca: o símbolo da Atlas é um chevron ascendente duplo (setas para cima). Se quiser, peça ao gerador motivos de "upward chevron / ascending arrows" como elemento abstrato — combina com a marca.

---

## 1. `hero-abstract.png` — visual do hero

```
Abstract 3D representation of a connected digital system: glowing nodes and thin light lines forming an elegant network, floating geometric panels resembling dashboards, deep near-black background (#0A0B0D), vibrant lime green glow accents (#C8F135), subtle ascending chevron motif, soft volumetric light, premium tech aesthetic, minimalist, lots of negative space on the left, no text, no people --ar 4:5 --style raw
```

---

## 2. `portfolio-1.png` … `portfolio-6.png` — mockups

Base (troque [colchetes]):
```
Sleek mockup of [TYPE] on a modern device, dark elegant UI with lime green (#C8F135) accents, clean layout, soft studio lighting on dark background, premium product shot, minimal, no readable text --ar 16:10 --style raw
```

- `portfolio-1.png` → `[a school/course enrollment web platform on a laptop]`
- `portfolio-2.png` → `[a local store online catalog on a smartphone]`
- `portfolio-3.png` → `[an event registration and ticketing landing page on a laptop]`
- `portfolio-4.png` → `[a service business website with a WhatsApp quote flow on a smartphone]`
- `portfolio-5.png` → `[an admin dashboard with charts and tables on a desktop monitor]`
- `portfolio-6.png` → `[an automation workflow screen on a laptop]`

> Mantenha o mesmo style/seed nas 6 para o grid ficar coeso.

---

## 3. `og-image.png` — compartilhamento (1200×630)

```
Wide social share banner, dark near-black background with subtle grid and lime green glow (#C8F135) in one corner, abstract ascending-chevron / connected-network motif on the right third, large clean empty space on the left for logo and tagline, premium tech brand, minimalist, no text --ar 1200:630
```

> Depois, sobreponha o logo "Atlas Tecnologias" + tagline. Exporte 1200×630.

---

## Checklist

- [ ] (Opcional) hero-abstract
- [ ] (Opcional) portfolio-1..6 com estilo consistente
- [ ] (Opcional) og-image + logo por cima
- [ ] Logo: já existe (PDF + SVGs em /midias/logo) — não precisa gerar
- [ ] Otimizar tudo (Squoosh/TinyPNG) antes de /public/images/
