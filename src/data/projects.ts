/**
 * Portfólio — projetos reais exibidos na seção Portfólio.
 *
 * Cada card tem um visual: se `image` existir, mostra a captura do site;
 * senão, renderiza um painel desenhado da marca com `icon` (útil para
 * sistemas acessíveis só com login). `tags` aparecem como chips no rodapé.
 */

export interface Project {
  /** Identificador único (usado em key e âncora). */
  id: string;
  /** Título do projeto. */
  title: string;
  /** Categoria/tipo de trabalho. */
  category: string;
  /** Descrição curta do resultado entregue. */
  description: string;
  /** Captura em /public/images. Ausente = usa o visual desenhado (icon). */
  image?: string;
  /** Nome do ícone (ver Icon.astro) para o visual desenhado quando não há print. */
  icon?: string;
  /** Recursos/stack exibidos como chips no card. */
  tags?: string[];
  /** Link externo do projeto (vazio = sem link clicável). */
  url: string;
}

export const projects: Project[] = [
  {
    id: 'ct-quebrando-limites',
    title: 'CT Quebrando Limites',
    category: 'Sistema + automação',
    description:
      'Plataforma de evento esportivo com inscrição online, pagamento integrado, confirmação automática e check-in por QR Code.',
    image: '/images/portfolio-ct.jpg',
    tags: ['Inscrição online', 'Pagamento', 'QR Code'],
    url: '',
  },
  {
    id: 'suporte-unica',
    title: 'Suporte Única',
    category: 'Sistema sob medida',
    description:
      'Sistema de abertura e acompanhamento de chamados: o usuário abre, consulta o status e a equipe gerencia tudo por um painel administrativo.',
    icon: 'headphones',
    tags: ['Chamados', 'Painel admin', 'Status em tempo real'],
    url: '',
  },
];
