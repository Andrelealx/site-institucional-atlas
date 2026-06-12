# Funcionalidades

## Obrigatórias

- [ ] Botão fixo / CTA de WhatsApp (wa.me com mensagem pré-preenchida)
- [ ] Formulário de contato (campos: nome, contato, tipo de negócio [select com os 4 nichos + outro], mensagem; validação básica; estados de sucesso/erro; envio para `FORM_ENDPOINT` configurável)
- [ ] Seção de serviços
- [ ] Portfólio (grid a partir de `src/data/projects.ts`)
- [ ] SEO local + OpenGraph + JSON-LD LocalBusiness
- [ ] Componente de fallback de imagem (placeholder com cor de superfície + nome do arquivo, para layout não quebrar enquanto faltam imagens)

## Configuração de contato

Criar `src/config/site.ts` com constantes editáveis e bem comentadas:
- `WHATSAPP_NUMBER` (placeholder "55XXXXXXXXXXX" — PENDÊNCIA)
- `WHATSAPP_MESSAGE`
- `EMAIL` (placeholder — PENDÊNCIA)
- `FORM_ENDPOINT` (vazio = console.log; comentar como plugar Formspree/n8n)
- helper `waLink()`

## Não se aplica nesta versão

- Catálogo administrável, login admin, pagamento online, inscrição de evento — são serviços que a Atlas PRESTA, mas não fazem parte do próprio site institucional.

## Futuras

- [ ] Blog
- [ ] Cases detalhados por projeto
- [ ] Mapa (se exibir endereço)
