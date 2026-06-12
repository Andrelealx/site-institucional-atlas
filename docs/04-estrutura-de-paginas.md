# Estrutura de Páginas

Single page (`/`) com âncoras. Cada seção = um componente Astro.

## Home

### Seções (na ordem)

1. **Header** (fixo, blur ao rolar) — logo oficial Atlas Tecnologias (lockup: símbolo chevron lime de `/midias/logo/atlas-mark-lime.svg` + "Atlas" + "TECNOLOGIAS") + nav âncora (Serviços, Portfólio, Contato) + botão "Falar no WhatsApp" (fundo lime, texto escuro). Menu hambúrguer no mobile (ilha React).
2. **Hero** (~85vh) — fundo grid + radial glow lime sutil. Headline + subheadline + 2 CTAs (primário "Falar no WhatsApp" = lime/texto escuro; secundário "Ver portfólio" = contorno). Elemento visual à direita no desktop (placeholder `hero-abstract`).
3. **Serviços** — 3 a 4 cards (ícone + título + benefício): Sites que convertem, Sistemas sob medida, Automações, (Integrações & Pagamentos opcional).
4. **Casos de uso** ("Para o seu tipo de negócio") — 4 blocos: Escolas e cursos, Lojas locais, Eventos, Prestadores de serviço. Descritos pelo benefício.
5. **Portfólio** — grid responsivo de cards (imagem, título, categoria, link). 6 itens placeholder em `src/data/projects.ts`. Hover com leve zoom + overlay.
6. **Diferenciais** ("Por que a Atlas") — 4 pontos: competência técnica real, entrega que funciona, suporte próximo, foco em resultado.
7. **CTA final** — bloco de conversão forte, fundo com gradiente sutil, botão WhatsApp grande.
8. **Contato** — 2 colunas: formulário (ilha React) + bloco WhatsApp/e-mail.
9. **Footer** — logo Atlas Tecnologias, links âncora, redes (placeholder), e-mail, copyright "© 2026 Atlas Tecnologias".

### CTA principal

- Falar no WhatsApp (wa.me com mensagem pré-preenchida)

## Sobre

- Não haverá página Sobre separada nesta versão. A autoridade é comunicada no bloco "Por que a Atlas".

## Serviços/Produtos

- Sites que convertem
- Sistemas sob medida
- Automações
- (Integrações & Pagamentos — opcional)

## Portfólio (Galeria)

- Projetos realizados (placeholders até André enviar os reais)

## Contato

- WhatsApp
- E-mail
- Instagram (quando confirmado)
- Formulário
- Endereço/Mapa: só se André decidir exibir (ver pendência)
