/**
 * Configuração central do site institucional da Atlas Tecnologias.
 *
 * Edite SÓ aqui os contatos e textos voláteis. Itens marcados com PENDÊNCIA
 * usam placeholder e estão registrados em docs/12-status-do-projeto.md.
 */

// ── Contatos ────────────────────────────────────────────────────────────────

/**
 * Número de WhatsApp no formato internacional, só dígitos: 55 + DDD + número.
 */
export const WHATSAPP_NUMBER = '5521992565057';

/** Número em E.164, só dígitos (alias explícito p/ links wa.me e tráfego pago). */
export const WHATSAPP_E164 = WHATSAPP_NUMBER;

/** Mensagem pré-preenchida ao abrir o WhatsApp. */
export const WHATSAPP_MESSAGE =
  'Olá! Vim pelo site da Atlas e gostaria de saber mais.';

/**
 * ID do Meta Pixel (chamado "dataset" no Events Manager 2026).
 * Lido de env — NUNCA hardcode o número aqui. Vazio = Pixel não carrega
 * (pendência bloqueante: André precisa fornecer). Ver docs/07-integracoes.md.
 */
export const META_DATASET_ID = import.meta.env.META_DATASET_ID ?? '';

/** E-mail oficial de contato. */
export const EMAIL = 'contato@atlastecnologias.com.br';

/** Telefone comercial exibido no site (mesmo número do WhatsApp). */
export const PHONE_DISPLAY = '+55 (21) 99256-5057';

/** Telefone em formato tel: (E.164 com +). */
export const PHONE_TEL = '+5521992565057';

/** @ do Instagram oficial, sem o arroba. Vazio = não exibe link. */
export const INSTAGRAM = 'atlas.tecnologias';

// O formulário de contato monta uma mensagem e abre o WhatsApp (sem backend).
// Ver src/components/ContactForm.tsx.

// ── Dados da empresa (SEO / JSON-LD) ─────────────────────────────────────────

export const SITE = {
  name: 'Atlas Tecnologias',
  shortName: 'Atlas',
  /** Razão social — usada em dados legais (rodapé) e JSON-LD. */
  legalName: 'Atlas Consultoria e Tecnologia da Informação Ltda',
  /** CNPJ oficial, formatado para exibição. */
  cnpj: '67.276.955/0001-47',
  tagline: 'Sites, sistemas e automações sob medida',
  description:
    'A Atlas constrói a estrutura digital do seu negócio — sites que convertem, sistemas sob medida e automações. Atendimento para todo o Brasil.',
  url: 'https://atlastecnologias.com.br',
  region: 'Todo o Brasil',
  /**
   * Endereço oficial da sede, idêntico ao Comprovante de Inscrição do CNPJ.
   * Precisa bater com Receita / D-U-N-S / Google Play / Apple Developer.
   */
  street: 'Rua José Carlos de Prado, 112',
  streetComplement: 'Quadra 11, Lote 17, Parte',
  district: 'Parada Modelo',
  city: 'Guapimirim',
  state: 'RJ',
  postalCode: '25943-560',
  country: 'BR',
  ogImage: '/images/og-atlas.png', // PENDÊNCIA: imagem social final
} as const;

// ── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Monta um link wa.me com mensagem pré-preenchida.
 * @param message texto opcional; usa WHATSAPP_MESSAGE por padrão.
 */
export function waLink(message: string = WHATSAPP_MESSAGE): string {
  const digits = WHATSAPP_NUMBER.replace(/\D/g, '');
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

/** mailto pronto para o e-mail oficial. */
export function mailLink(subject = 'Contato pelo site'): string {
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`;
}

/** Link do Instagram (vazio se não configurado). */
export function instagramLink(): string {
  return INSTAGRAM ? `https://instagram.com/${INSTAGRAM}` : '';
}
