/**
 * Parceiros / clientes que confiam na Atlas — faixa de logos (marquee).
 *
 * COMO ADICIONAR UM LOGO:
 * 1. Solte o arquivo em `public/images/partners/` (quadrado fica melhor — é
 *    exibido como avatar arredondado). Qualquer formato moderno serve.
 * 2. Adicione uma entrada no array abaixo com `name` e `src`.
 * 3. `url` é opcional (deixa o item clicável para o site/perfil do parceiro).
 */
export interface Partner {
  name: string;
  /** Caminho a partir de /public, ex: '/images/partners/cliente.jpg' */
  src: string;
  url?: string;
}

export const partners: Partner[] = [
  { name: 'CT Quebrando Limites', src: '/images/partners/ct-quebrando-limites.png' },
  { name: 'Única Serviços', src: '/images/partners/unica-servicos.png' },
  { name: 'Dona Deli', src: '/images/partners/dona-deli.jpg' },
  { name: 'Vibra Gastronomia', src: '/images/partners/vibra-gastronomia.webp' },
  { name: 'Vila Belém', src: '/images/partners/vila-belem.jpg' },
  { name: 'Golden Express', src: '/images/partners/golden-express.png' },
  { name: 'HJ Segurança', src: '/images/partners/hj-seguranca.webp' },
  { name: 'Judô Marins', src: '/images/partners/judo-marins.jpg' },
  { name: 'Special Art', src: '/images/partners/special-art.png' },
  { name: 'Rio Faz', src: '/images/partners/rio-faz.webp' },
  { name: 'Gordon', src: '/images/partners/gordon.jpg' },
  { name: 'BVolt', src: '/images/partners/bvolt.jpg' },
  { name: 'Rafa Guttierrez', src: '/images/partners/rafa-guttierrez.png' },
];
