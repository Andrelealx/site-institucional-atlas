# Status do Projeto

## Situação atual

Site institucional **construído e com build passando** (`npm run build` sem erros).
Pronto para deploy assim que as pendências de cliente forem resolvidas. Roda com
placeholders — nenhuma pendência trava a publicação técnica.

## O que já foi feito

- Documentação `/docs` preenchida com os dados reais da Atlas
- Identidade visual aplicada conforme o LOGO OFICIAL (accent lime #C8F135, marca "Atlas Tecnologias")
- Stack implementada: Astro 5 + Tailwind + React (ilhas) + TypeScript
- Single page completa: Header, Hero, Serviços, Casos de uso, Portfólio, Diferenciais, CTA final, Contato, Footer + botão flutuante WhatsApp
- Formulário com validação, aviso LGPD e endpoint configurável
- SEO: meta tags, OpenGraph/Twitter, JSON-LD (ProfessionalService), sitemap, robots.txt, favicon
- Página de Política de Privacidade (baseline LGPD)
- Responsivo mobile-first; sem menção ao método interno no site
- README de uso do projeto
- Refinamento: scroll reveal, nav ativo, hero com mock visual, OG image, fontes self-hosted, skip-to-content, página 404

## O que falta (técnico)

- Definir domínio e fazer deploy (host estático + HTTPS)
- Trocar placeholders pelos dados/imagens reais (depende do cliente — abaixo)

## Pendências com o cliente

- [x] ~~WhatsApp oficial~~ → 5521988798777 em `src/config/site.ts`
- [x] ~~E-mail oficial~~ → contato@atlastecnologias.com.br em `src/config/site.ts`
- [ ] @ do Instagram (e outras redes) → `src/config/site.ts` (`INSTAGRAM`)
- [x] ~~Endpoint do formulário~~ → resolvido: form abre o WhatsApp com os dados (sem backend)
- [x] ~~Projetos reais do portfólio~~ → 8 cases com prints reais: CT Quebrando Limites,
      Suporte Única, Top Chalés RJ, HJ Segurança, Judô Marins, Viajei Assim,
      Grupo Golden Express, Rafa Guttierrez. Cliente vai enviar mais depois.
- [x] ~~Planos & preços~~ → seção `#planos` implementada (4 planos oficiais)
- [ ] Imagem social `og-atlas.png` final → `public/images/` (há placeholder)
- [x] ~~Logo~~ — RECEBIDO (Atlas Tecnologias, em /midias/logo)
- [x] ~~CNPJ~~ — DEFINIDO. Exibido no rodapé + JSON-LD. CNPJ 67.276.955/0001-47, razão social "Atlas Consultoria e Tecnologia da Informação", marca "Atlas Tecnologias"
- [ ] Decidir se exibe endereço/mapa
- [ ] Texto definitivo da política de privacidade (há baseline LGPD no ar)
- [ ] Prazo de entrega
- [ ] Analytics/Pixel (opcional) — Meta Pixel já IMPLEMENTADO; falta o `META_DATASET_ID`
- [ ] **[BLOQUEANTE Fase 1] `META_DATASET_ID`**: André pega no Events Manager → Connect Data
      → Web e coloca no `.env` (deploy). Sem ele o Pixel não carrega e o Test Events não valida.
- [ ] Depoimento real de dentista para a landing `/expert-dentistas` (há placeholder no ar)
- [ ] Ação do André pós-fase: ativar Meta-enabled CAPI; publicar política definitiva; guardar
      o `META_DATASET_ID` em cofre de credenciais
- [ ] Depoimentos reais (nome, negócio, texto) → preencher array em `src/components/SocialProof.astro` (seção já ligada, oculta enquanto vazia)

## Observações

- Com `WHATSAPP_NUMBER` no placeholder "55XXXXXXXXXXX", os links wa.me apontam para `wa.me/55` (sem destino real) até o número ser preenchido — comportamento esperado.
- Imagens ausentes não quebram o layout: `ImageWithFallback` mostra um placeholder com o nome do arquivo.

## Próximo passo recomendado

Cliente envia os dados das pendências → ajustar `src/config/site.ts`,
`src/data/projects.ts` e `public/images/` → `npm run build` → deploy em host
estático com HTTPS e domínio definido.
