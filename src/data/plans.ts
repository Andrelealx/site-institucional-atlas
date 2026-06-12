/**
 * Planos & Preços — exibidos na seção de Planos.
 * Fonte: tabela oficial Atlas Tecnologias (Planos & Preços 2026).
 *
 * Regra de marca: o accent é sempre lime (#C8F135). O material original usa
 * cyan no plano Expert; aqui ele é mantido em lime e diferenciado pelo selo
 * "Sem mensalidade".
 */

export interface PlanFeature {
  label: string;
  /** true = incluso (✓); false = não incluso (✗, esmaecido). */
  included: boolean;
}

export interface Plan {
  id: string;
  name: string;
  /** Linha curta de público-alvo, exibida sob o nome. */
  audience: string;
  description: string;
  /** Valor principal em destaque, ex.: 'R$ 497'. */
  price: string;
  /** Rótulo acima do preço, ex.: 'Setup / implantação'. */
  priceLabel: string;
  /** Recorrência/parcelas, ex.: '+ R$ 79/mês'. Vazio = sem recorrência. */
  recurrence?: string;
  /** Observação fina abaixo do preço, ex.: oferta anual. */
  note?: string;
  features: PlanFeature[];
  cta: string;
  /** Mensagem pré-preenchida do WhatsApp ao clicar no CTA. */
  waMessage: string;
  /** Destaca o card (plano mais popular). */
  popular?: boolean;
  /** Selo exibido no topo do card. */
  badge?: string;
}

/** Três planos para empresas — exibidos em grade. */
export const businessPlans: Plan[] = [
  {
    id: 'presenca',
    name: 'Presença',
    audience: 'Para começar com o pé direito',
    description:
      'Sua empresa no digital com credibilidade e profissionalismo imediatos.',
    price: 'R$ 497',
    priceLabel: 'Setup / implantação',
    recurrence: '+ R$ 79/mês',
    note: 'ou R$ 799/ano — 2 meses grátis',
    features: [
      { label: 'Site institucional (até 3 páginas)', included: true },
      { label: 'Design responsivo mobile', included: true },
      { label: 'Formulário de contato', included: true },
      { label: 'Botão WhatsApp + Google Maps', included: true },
      { label: 'Hospedagem inclusa', included: true },
      { label: 'Blog / conteúdo', included: false },
      { label: 'SEO avançado', included: false },
      { label: 'Painel de edição', included: false },
    ],
    cta: 'Começar com Presença',
    waMessage: 'Olá! Tenho interesse no plano Presença.',
  },
  {
    id: 'autoridade',
    name: 'Autoridade',
    audience: 'Para empresas em crescimento',
    description:
      'Construa reputação online sólida e gere leads de forma consistente.',
    price: 'R$ 997',
    priceLabel: 'Setup / implantação',
    recurrence: '+ R$ 149/mês',
    note: 'ou R$ 1.490/ano — 2 meses grátis',
    features: [
      { label: 'Site completo (até 6 páginas)', included: true },
      { label: 'Design personalizado', included: true },
      { label: 'Blog integrado', included: true },
      { label: 'SEO on-page + Google Analytics', included: true },
      { label: 'Painel de edição simples', included: true },
      { label: 'Hospedagem inclusa', included: true },
      { label: '1 revisão/mês inclusa', included: true },
      { label: 'Automações / integrações', included: false },
    ],
    cta: 'Começar com Autoridade',
    waMessage: 'Olá! Tenho interesse no plano Autoridade.',
    popular: true,
    badge: 'Mais popular',
  },
  {
    id: 'dominio',
    name: 'Domínio',
    audience: 'Para empresas consolidadas',
    description:
      'Domine seu mercado com presença digital de alto impacto e escala.',
    price: 'R$ 1.997',
    priceLabel: 'Setup / implantação',
    recurrence: '+ R$ 249/mês',
    note: 'ou R$ 2.490/ano — 2 meses grátis',
    features: [
      { label: 'Páginas ilimitadas', included: true },
      { label: 'Design premium sob medida', included: true },
      { label: 'Blog + portfólio completo', included: true },
      { label: 'SEO avançado + sitemap', included: true },
      { label: 'Integrações (CRM, e-mail, etc.)', included: true },
      { label: 'Painel de edição completo', included: true },
      { label: 'Relatórios mensais + suporte VIP', included: true },
      { label: 'Revisões ilimitadas', included: true },
    ],
    cta: 'Começar com Domínio',
    waMessage: 'Olá! Tenho interesse no plano Domínio.',
  },
];

/** Plano para profissionais liberais — card largo, sem mensalidade. */
export const expertPlan: Plan = {
  id: 'expert',
  name: 'Expert',
  audience: 'Para quem vende expertise',
  description:
    'Site profissional para autônomos e profissionais liberais. Pague apenas o valor anual — sem mensalidades, sem surpresas. Parcele no cartão em até 12x.',
  price: 'R$ 1.197',
  priceLabel: 'Valor anual · tudo incluso',
  recurrence: '12x de R$ 99,75',
  note: 'Renovação R$ 797/ano · setup incluso, sem custo extra',
  features: [
    { label: 'Site profissional (até 4 páginas)', included: true },
    { label: 'Agendamento online integrado', included: true },
    { label: 'Depoimentos + foto profissional em destaque', included: true },
    { label: 'WhatsApp + redes sociais integrados', included: true },
    { label: 'Hospedagem 12 meses inclusa', included: true },
    { label: 'Domínio .com.br incluso no 1º ano', included: true },
    { label: 'SEO local + Google Meu Negócio', included: true },
  ],
  cta: 'Começar com Expert',
  waMessage: 'Olá! Sou profissional liberal e tenho interesse no plano Expert.',
  badge: 'Sem mensalidade',
};

/** Profissões atendidas pelo plano Expert (chips). */
export const expertProfessions = [
  'Dentista',
  'Advogado',
  'Psicólogo',
  'Médico',
  'Contador',
  'Arquiteto',
  'Nutricionista',
  'Fisioterapeuta',
];
