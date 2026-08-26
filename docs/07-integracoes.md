# Integrações

## WhatsApp

- Número oficial: **[PENDÊNCIA]** (placeholder "55XXXXXXXXXXX" em `src/config/site.ts`)
- Mensagem automática: "Olá! Vim pelo site da Atlas e gostaria de saber mais."
- Implementação: link `wa.me` com mensagem pré-preenchida (`encodeURIComponent`).

## Formulário

- Provedor: **[PENDÊNCIA — definir Formspree, n8n ou e-mail direto]**
- Enquanto indefinido: `FORM_ENDPOINT` vazio → registra em console com comentário explicando como plugar.

## E-mail

- E-mail oficial: **[PENDÊNCIA]**

## Mapas

- Só se André decidir exibir endereço público. **[PENDÊNCIA]**

## Analytics

- Google Analytics: **[PENDÊNCIA — opcional]**
- Meta Pixel: **implementado (Fase 1 — Tráfego Pago), gated por consentimento LGPD.**
  - ID lido de `META_DATASET_ID` (env), nunca hardcoded. Ver `src/components/MetaPixel.astro`.
  - **[PENDÊNCIA BLOQUEANTE]** André precisa fornecer o `META_DATASET_ID` (Events Manager
    → Connect Data → Web). Enquanto vazio, toda a fundação (banner + API de eventos) está
    pronta, mas o Pixel NÃO carrega e nenhum evento é enviado.
  - Eventos padrão da Meta implementados: `PageView` (automático), `ViewContent`
    (load da landing Expert), `Lead` (clique WhatsApp da landing — evento principal),
    `Contact` (WhatsApp de header/footer/botão flutuante).
  - Só dispara após aceite no banner de cookies (`src/components/CookieConsent.astro`).
  - Pós-fase (André): ativar Meta-enabled CAPI no Events Manager para reforçar o sinal de `Lead`.

## Redes sociais

- Instagram: **[PENDÊNCIA]**
- Outras: a confirmar
