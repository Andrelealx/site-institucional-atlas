/**
 * Navegação principal — fonte única para Header, MobileMenu e Footer.
 *
 * Os links de seção usam caminho absoluto + âncora (`/#servicos`) em vez de
 * só a âncora (`#servicos`): assim funcionam também a partir de páginas
 * internas (/portfolio, /politica-de-privacidade, /expert-dentistas), onde
 * uma âncora pura não teria destino. Na home o navegador trata como salto
 * de fragmento no mesmo documento (scroll suave preservado).
 */
export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Serviços', href: '/#servicos' },
  { label: 'Portfólio', href: '/portfolio' },
  { label: 'Planos', href: '/#planos' },
  { label: 'Contato', href: '/#contato' },
];
