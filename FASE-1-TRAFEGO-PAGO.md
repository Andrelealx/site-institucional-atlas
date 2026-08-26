# FASE 1 — Fundação de Tráfego Pago (Pixel + Eventos + Landing Expert/Dentistas)

> **Handoff para Claude Code** · Projeto: Site Atlas Tecnologias
> Metodologia: Atlas Blueprint. LEIA todos os `/docs` antes de codar.
> Atualize task list, changelog e status ao final de cada task.
> **NUNCA** exponha a pasta `/docs` nem qualquer artefato Blueprint no site publicado.

## OBJETIVO DA FASE
Preparar a fundação de rastreamento e conversão ANTES de qualquer verba de anúncio.
Ao final desta fase o site deve: (1) rastrear visitantes via Meta Pixel, (2) registrar
eventos de conversão, (3) ter uma landing page do plano Expert focada em DENTISTAS,
com botão de WhatsApp rastreado. Nenhuma campanha é ativada nesta fase.

## PRÉ-REQUISITOS (fornecidos pelo André — NÃO invente valores)
- `META_DATASET_ID` (= Pixel ID): André cria/pega em Events Manager → Connect Data → Web.
  Em 2026 o Meta chama o Pixel de "dataset"; o ID é o mesmo. Se ainda não existir,
  PARE a Task 1 e sinalize no status que este valor é bloqueante.
- Número de WhatsApp de destino: +55 21 99256-5057 (formato E.164 p/ link: 5521992565057).
- Domínio de produção do site (para o link wa.me e para o teste do Pixel).

## VARIÁVEIS DE AMBIENTE
Adicione ao `.env` (e ao `.env.example` SEM o valor real):
```
META_DATASET_ID=   # preenchido pelo André, nunca commitar valor real
WHATSAPP_E164=5521992565057
```

---

## TASK 1 — Instalar Meta Pixel (base code)
1. Injete o base code do Pixel no `<head>` de TODAS as páginas, lendo o ID de
   `META_DATASET_ID` via env (nunca hardcode o número no código-fonte).
2. O `PageView` dispara automático pelo base code — não escreva um `track` separado p/ ele.
3. **CRÍTICO (LGPD):** o Pixel só pode disparar APÓS consentimento (ver Task 4).
   Encapsule a inicialização do Pixel numa função `initMetaPixel()` que só roda
   quando o usuário aceitar os cookies. Antes do aceite, o Pixel NÃO carrega.
4. Deixe o `META_DATASET_ID` fácil de trocar (uma variável, um lugar só).

Base code (estrutura — o snippet exato o André confirma no Events Manager dele):
```html
<!-- Meta Pixel — só inicializa após consentimento LGPD -->
<script>
function initMetaPixel(){
  if(window.__metaPixelLoaded) return;
  !function(f,b,e,v,n,t,s){/* snippet padrão fbq da Meta */}(window,document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '%META_DATASET_ID%'); // injetar via env no build
  fbq('track', 'PageView');
  window.__metaPixelLoaded = true;
}
</script>
```

## TASK 2 — Eventos de conversão
Implemente estes eventos padrão (nomes fixos da Meta — não inventar):
- `ViewContent` — dispara no load da landing do Expert (sinaliza interesse no produto).
- `Lead` — dispara no clique do botão "Falar no WhatsApp" da landing. Este é o evento
  PRINCIPAL a otimizar na campanha.
- `Contact` — dispara em qualquer clique de contato secundário (rodapé, header).

Todos os eventos devem respeitar o mesmo gate de consentimento da Task 1 (não disparam
antes do aceite). Use `fbq('track','NomeDoEvento')` abaixo do base code.

## TASK 3 — Landing page do plano Expert (foco: DENTISTAS)
Rota: `/expert-dentistas` (ou conforme convenção do projeto). Identidade Atlas obrigatória:
lime #C8F135, dark #111111, branco #FFFFFF, tipografia Syne (Atlas = ExtraBold 800;
TECNOLOGIAS = SemiBold 600), símbolo chevron. Marca faceless: SEM foto de pessoa/fundador.
Mobile-first. Carregamento rápido.

Estrutura e copy (PT-BR, tom direto, sem jargão):

**HERO**
- H1: "Seu consultório merece um site que traz paciente — não só um cartão de visita digital."
- Sub: "Site profissional para dentistas, com agendamento e presença no Google. Pago uma vez por ano, sem mensalidade."
- CTA primário: [Quero meu site — falar no WhatsApp] → dispara evento `Lead`.

**A DOR (3 bullets curtos)**
- "Paciente pesquisa seu nome no Google e não te encontra — ou acha um perfil vazio."
- "Você depende de indicação, mas quem chega novo não tem onde confiar antes de marcar."
- "Ter site virou obrigação, mas ninguém quer pagar mensalidade eterna por isso."

**A SOLUÇÃO (o que o Expert entrega — puxar do Anexo I do contrato)**
- Site profissional até 4 páginas · Agendamento online integrado
- WhatsApp + redes sociais integrados · Depoimentos de pacientes em destaque
- Hospedagem 12 meses inclusa · Domínio .com.br no 1º ano
- SEO local + Google Meu Negócio (aparecer nas buscas "dentista + cidade")

**A OFERTA (quebrar a objeção de preço)**
- "R$ 1.197 no ano. Sem mensalidade. Sem surpresa."
- "Ou 12x de R$ 99,75 no cartão." · "Setup incluso — sem custo extra de criação."
- Renovação anual R$ 797 (também parcelável). Deixe isso claro, sem letra miúda.

**PROVA / CONFIANÇA**
- Selo/linha institucional Atlas (CNPJ, Guapimirim/RJ). Sem inventar depoimento falso —
  se não houver caso real ainda, use bloco neutro de garantia (entrega em até 15 dias úteis,
  suporte via WhatsApp) e deixe um placeholder claro para depoimento futuro.

**CTA FINAL (repetido)**
- [Falar no WhatsApp e receber proposta em 24h] → evento `Lead`.
- Link: `https://wa.me/{WHATSAPP_E164}?text=Oi!%20Sou%20dentista%20e%20quero%20o%20plano%20Expert`

## TASK 4 — Banner de consentimento LGPD (bloqueia o Pixel)
Motivo: o Meta Pixel grava cookies e envia dados a servidor da Meta (fora do Brasil).
Sob a LGPD, isso exige base legal + consentimento explícito ANTES do disparo.
1. Banner discreto no primeiro acesso: aceitar / recusar cookies de marketing.
2. Ao aceitar → chama `initMetaPixel()` e habilita os eventos.
3. Ao recusar → Pixel e eventos NÃO carregam; site funciona normal.
4. Persistir a escolha (localStorage) e não repetir o banner a cada visita.
5. Link para uma Política de Privacidade simples (pode ser placeholder nesta fase,
   marcado como pendência no status).

## GATE DE VALIDAÇÃO (checklist antes de fechar a fase)
- [ ] `META_DATASET_ID` lido de env, ausente do código-fonte e do repositório.
- [ ] Pixel NÃO dispara antes do aceite de cookies (testar recusando).
- [ ] Após aceite: `PageView` aparece no Test Events / Meta Pixel Helper.
- [ ] Evento `Lead` dispara ao clicar no botão de WhatsApp (verificado no Test Events).
- [ ] Evento `ViewContent` dispara no load da landing.
- [ ] Landing `/expert-dentistas` responsiva, identidade Atlas correta, sem foto de pessoa.
- [ ] Link `wa.me` abre a conversa com a mensagem pré-preenchida.
- [ ] Pasta `/docs` e artefatos Blueprint NÃO acessíveis no site publicado.
- [ ] Changelog, task list e status atualizados.

## AÇÃO DO ANDRÉ APÓS ESTA FASE (não é tarefa do Claude Code)
1. No Events Manager, ativar o Meta-enabled CAPI (setup de 1 clique, sem servidor,
   Meta hospeda) para melhorar o sinal do evento `Lead`. Fazer só depois do Pixel validado.
2. Publicar a Política de Privacidade real (substituir placeholder).
3. Guardar o `META_DATASET_ID` no cofre de credenciais, não em texto puro.
