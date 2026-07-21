/**
 * Parceiros / clientes que confiam na Atlas — faixa de logos (marquee).
 *
 * COMO ADICIONAR UM LOGO:
 * 1. Solte o arquivo em `public/images/partners/` (SVG de preferência; PNG com
 *    fundo transparente também serve). Ideal: logo em versão monocromática/clara.
 * 2. Adicione uma entrada no array abaixo com `name` e `src`.
 * 3. `url` é opcional (deixa o logo clicável para o site do parceiro).
 *
 * Enquanto o array estiver vazio, a seção mostra placeholders neutros para você
 * visualizar o layout — troque por logos reais antes de publicar.
 */
export interface Partner {
  name: string;
  /** Caminho a partir de /public, ex: '/images/partners/cliente.svg' */
  src: string;
  url?: string;
}

export const partners: Partner[] = [
  // Exemplo:
  // { name: 'Restaurante Serra', src: '/images/partners/serra.svg', url: 'https://...' },
];
