/**
 * Portfólio — projetos reais exibidos na seção Portfólio.
 * Imagens: capturas dos sites no ar, em /public/images.
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
  /** Caminho da imagem em /public/images. */
  image: string;
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
    url: '',
  },
  {
    id: 'suporte-unica',
    title: 'Suporte Única',
    category: 'Sistema sob medida',
    description:
      'Sistema de abertura e acompanhamento de chamados: o usuário abre, consulta o status e a equipe gerencia tudo por um painel.',
    image: '/images/portfolio-unica.jpg',
    url: '',
  },
];
