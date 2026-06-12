/**
 * Portfólio — projetos exibidos na seção Portfólio.
 *
 * PENDÊNCIA: substituir pelos projetos reais da Atlas (nome, tipo, link, imagem).
 * Até lá, estes 6 itens são placeholders e a imagem cai no fallback visual
 * (ImageWithFallback) quando o arquivo não existe em /public/images.
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
  /** Caminho da imagem em /public/images (placeholder até a final chegar). */
  image: string;
  /** Link externo do projeto (vazio = sem link clicável). */
  url: string;
}

export const projects: Project[] = [
  {
    id: 'escola-matriculas',
    title: 'Portal de matrículas para escola',
    category: 'Sistema sob medida',
    description:
      'Captação de alunos com inscrição online e gestão das matrículas em um só lugar.',
    image: '/images/portfolio-escola.jpg',
    url: '',
  },
  {
    id: 'loja-vitrine',
    title: 'Site que vende para loja local',
    category: 'Site que converte',
    description:
      'Presença online que transforma visitante em contato direto pelo WhatsApp.',
    image: '/images/portfolio-loja.jpg',
    url: '',
  },
  {
    id: 'evento-inscricao',
    title: 'Inscrição e pagamento de evento',
    category: 'Sistema + automação',
    description:
      'Inscrição online com confirmação automática e pagamento integrado.',
    image: '/images/portfolio-evento.jpg',
    url: '',
  },
  {
    id: 'servico-orcamento',
    title: 'Orçamento automático por WhatsApp',
    category: 'Automação',
    description:
      'Menos trabalho manual: o cliente pede e recebe retorno sem perder o timing.',
    image: '/images/portfolio-servico.jpg',
    url: '',
  },
  {
    id: 'catalogo-gestao',
    title: 'Catálogo com gestão de produtos',
    category: 'Sistema sob medida',
    description:
      'Catálogo organizado e fácil de atualizar, pronto para crescer com o negócio.',
    image: '/images/portfolio-catalogo.jpg',
    url: '',
  },
  {
    id: 'landing-conversao',
    title: 'Landing page de captação',
    category: 'Site que converte',
    description:
      'Página focada em um objetivo: gerar contato qualificado e medir resultado.',
    image: '/images/portfolio-landing.jpg',
    url: '',
  },
];
