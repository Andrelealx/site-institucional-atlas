/** Serviços e casos de uso — conteúdo das seções Serviços e Casos de uso. */

export interface Service {
  id: string;
  /** Nome do ícone lucide (renderizado via componente Icon). */
  icon: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: 'sites',
    icon: 'monitor',
    title: 'Sites que convertem',
    description:
      'Página feita para o cliente entrar em contato — não vitrine parada. Rápida, no celular e pronta para gerar lead.',
  },
  {
    id: 'sistemas',
    icon: 'layout-grid',
    title: 'Sistemas sob medida',
    description:
      'Matrículas, inscrições, catálogos, gestão. Tudo num lugar só, do jeito que o seu negócio funciona.',
  },
  {
    id: 'automacoes',
    icon: 'zap',
    title: 'Automações',
    description:
      'Orçamento via WhatsApp, confirmações, pagamentos. Menos trabalho manual, menos cliente perdido.',
  },
  {
    id: 'integracoes',
    icon: 'plug',
    title: 'Integrações & pagamentos',
    description:
      'Conecte WhatsApp, pagamento e suas ferramentas para o negócio rodar sem retrabalho.',
  },
];

export interface UseCase {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const useCases: UseCase[] = [
  {
    id: 'escolas',
    icon: 'graduation-cap',
    title: 'Escolas e cursos',
    description:
      'Capte e organize alunos: inscrição online e matrícula sem papelada.',
  },
  {
    id: 'lojas',
    icon: 'store',
    title: 'Lojas locais',
    description:
      'Presença online que vende e leva o cliente direto para o seu contato.',
  },
  {
    id: 'eventos',
    icon: 'calendar-check',
    title: 'Eventos',
    description:
      'Inscrição e pagamento num fluxo só, com confirmação automática.',
  },
  {
    id: 'servicos',
    icon: 'wrench',
    title: 'Prestadores de serviço',
    description:
      'Orçamento pelo WhatsApp sem perder pedido nem tempo respondendo igual.',
  },
];

export interface Differential {
  icon: string;
  title: string;
  description: string;
}

export const differentials: Differential[] = [
  {
    icon: 'code-2',
    title: 'Competência técnica real',
    description:
      'Desenvolvimento de verdade. Não é "criador de site" genérico — é quem entende de código.',
  },
  {
    icon: 'check-circle',
    title: 'Entrega que funciona',
    description:
      'O que entregamos roda e dá retorno. Sem site bonito parado que não traz cliente.',
  },
  {
    icon: 'headphones',
    title: 'Suporte próximo',
    description:
      'Atendimento direto e contínuo. Você fala com quem construiu, não com um robô.',
  },
  {
    icon: 'target',
    title: 'Foco em resultado',
    description:
      'A meta é o resultado do seu negócio: mais contato, menos trabalho manual.',
  },
];
