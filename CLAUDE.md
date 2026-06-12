# Claude Code — Instruções do Projeto Site Institucional Atlas

Este projeto segue o **Método Atlas Blueprint**. A pasta `/docs` é a fonte oficial de verdade.

## Como executar este projeto

1. **Antes de programar:** leia `AGENTS.md` e TODOS os arquivos da pasta `/docs` (00 a 12). Eles já estão preenchidos com os dados reais da Atlas.
2. **Construa o site institucional** exatamente conforme a documentação.
3. **Depois de cada etapa:** atualize `docs/09-tarefas.md`, `docs/10-registro-de-alteracoes.md` e `docs/12-status-do-projeto.md`.
4. **Decisões técnicas:** registre em `docs/11-decisoes-tecnicas.md` (decisão, motivo, impacto, arquivos afetados).
5. **Dúvidas/faltas:** nunca invente. Registre em `docs/12-status-do-projeto.md` na seção "Pendências com o cliente".

## Regra crítica de conteúdo

**NÃO mencione, em nenhum lugar visível do site, qualquer "método", "metodologia", "blueprint" ou processo interno da Atlas.** O Método Atlas Blueprint é uma ferramenta interna de produção, invisível ao cliente final. O site comunica RESULTADO, não PROCESSO.

## Identidade da marca (obrigatório)

- Marca: **Atlas Tecnologias**. Logo oficial em `/midias/logo/` (PDF + SVGs).
- Accent oficial: **verde-limão #C8F135** (lime) sobre fundo escuro. NÃO usar azul/cyan.
- Texto sobre lime sempre escuro (#0A0B0D). Botões primários = fundo lime + texto quase-preto.
- Símbolo: chevron ascendente duplo. Usar o lockup no header e o símbolo como favicon.
- Tokens prontos em `docs/11-decisoes-tecnicas.md`.

## Stack definida (ver docs/11-decisoes-tecnicas.md)

- Astro (última versão estável) + Tailwind CSS + TypeScript.
- React apenas em ilhas (`client:visible`/`client:load`) onde houver interatividade real.
- Site estático, mobile-first, SEO local, performance Lighthouse 95+.

## Padrão de entrega

Ao finalizar cada etapa, informe: o que foi feito, quais arquivos foram alterados, o que falta e o próximo passo recomendado.
