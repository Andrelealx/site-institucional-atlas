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
    image: '/images/portfolio-unica.jpg',
    tags: ['Chamados', 'Painel admin', 'Status em tempo real'],
    url: 'https://suporteunica.com',
  },
  {
    id: 'top-chales-rj',
    title: 'Top Chalés RJ',
    category: 'Site institucional + vendas',
    description:
      'Site de vendas para chalés A-frame e casas compactas, com simulador de orçamento e apresentação de modelos prontos para hospedar.',
    image: '/images/portfolio-topchales.jpg',
    tags: ['Landing page', 'Simulador', 'Conversão'],
    url: 'https://topchalesrj.com.br',
  },
  {
    id: 'hj-seguranca',
    title: 'HJ Segurança',
    category: 'Site institucional',
    description:
      'Presença digital para empresa de segurança e apoio operacional, com apresentação de serviços, diferenciais e captação de orçamento via WhatsApp.',
    image: '/images/portfolio-hjseguranca.jpg',
    tags: ['Institucional', 'Geração de leads'],
    url: 'https://hjseguranca.com.br',
  },
  {
    id: 'judo-marins',
    title: 'Judô Marins',
    category: 'Site institucional',
    description:
      'Site para academia de judô com apresentação da escola, galeria de treinos e conquistas dos alunos.',
    image: '/images/portfolio-judomarins.jpg',
    tags: ['Institucional', 'Galeria'],
    url: 'https://judomarins.com',
  },
  {
    id: 'viajei-assim',
    title: 'Viajei Assim',
    category: 'Blog + buscador de viagens',
    description:
      'Blog de relatos de viagem com buscador de passagens e hospedagens integrado, transformando conteúdo em canal de conversão.',
    image: '/images/portfolio-viajeiassim.jpg',
    tags: ['Blog', 'Buscador de viagens'],
    url: 'https://viajeiassim.com.br',
  },
  {
    id: 'grupo-golden-express',
    title: 'Grupo Golden Express',
    category: 'Site institucional',
    description:
      'Site para empresa de vigilância patrimonial e facilities, apresentando serviços e canal de contato comercial.',
    image: '/images/portfolio-goldenexpress.jpg',
    tags: ['Institucional', 'B2B'],
    url: 'https://grupogoldenexpress.com.br',
  },
  {
    id: 'rafa-guttierrez',
    title: 'Rafa Guttierrez',
    category: 'Site institucional',
    description:
      'Site de artista com apresentação, agenda de shows, músicas, galeria e canal de contratação para imprensa e publicidade.',
    image: '/images/portfolio-rafaguttierrez.jpg',
    tags: ['Artista', 'Agenda', 'Contratação'],
    url: 'https://rafaguttierrez.com.br',
  },
];
