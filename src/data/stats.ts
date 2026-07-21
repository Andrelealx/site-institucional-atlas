/**
 * Números de destaque (contadores animados).
 *
 * PENDÊNCIA (docs/12): confirmar os valores com o cliente antes de publicar.
 * Não invente métricas — ajuste `value`/`label` aqui conforme a realidade.
 *
 * `value`  número final (aceita decimais, ex.: 4.9).
 * `suffix` sufixo colado no número (ex.: '+', '%', 'h', '/7').
 * `label`  descrição curta embaixo do número.
 */
export interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 100, suffix: '%', label: 'Projetos sob medida — nada de template pronto' },
  { value: 24, suffix: '/7', label: 'Automações trabalhando pelo seu negócio' },
  { value: 48, suffix: 'h', label: 'Resposta rápida no seu orçamento' },
  { value: 2, suffix: '+', label: 'Sistemas sob medida no ar' },
];
