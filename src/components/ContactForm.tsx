import { useState, type FormEvent } from 'react';
import { FORM_ENDPOINT } from '../config/site';

type Status = 'idle' | 'sending' | 'success' | 'error';

const businessTypes = [
  'Escola ou curso',
  'Loja local',
  'Evento',
  'Prestador de serviço',
  'Outro',
];

/** Formulário de contato — ilha React. Envia para FORM_ENDPOINT ou loga no console. */
export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');

    const form = e.currentTarget;
    const data = {
      nome: (form.elements.namedItem('nome') as HTMLInputElement).value.trim(),
      contato: (form.elements.namedItem('contato') as HTMLInputElement).value.trim(),
      tipo: (form.elements.namedItem('tipo') as HTMLSelectElement).value,
      mensagem: (form.elements.namedItem('mensagem') as HTMLTextAreaElement).value.trim(),
    };

    // Validação básica client-side.
    if (!data.nome || !data.contato || !data.mensagem) {
      setError('Preencha nome, contato e mensagem.');
      return;
    }

    setStatus('sending');

    // Sem endpoint definido (PENDÊNCIA): registra no console e simula sucesso.
    // Para plugar Formspree/n8n, defina FORM_ENDPOINT em src/config/site.ts.
    if (!FORM_ENDPOINT) {
      console.info('[Atlas] FORM_ENDPOINT não configurado. Dados do formulário:', data);
      setStatus('success');
      form.reset();
      return;
    }

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Falha no envio');
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
      setError('Não foi possível enviar agora. Tente pelo WhatsApp.');
    }
  }

  if (status === 'success') {
    return (
      <div className="card flex flex-col items-start gap-3" role="status">
        <span className="eyebrow">Recebido</span>
        <h3 className="font-display text-xl font-bold">Mensagem enviada!</h3>
        <p className="text-text-secondary">
          Obrigado pelo contato. Retornamos o mais rápido possível.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="btn-secondary mt-2"
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card flex flex-col gap-4" noValidate>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="nome" className="text-sm font-medium text-text-primary">
          Nome
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          autoComplete="name"
          required
          className="rounded-xl border border-border-soft bg-bg-surface-2 px-4 py-2.5 text-text-primary placeholder:text-text-secondary/60 focus:border-brand focus:outline-none"
          placeholder="Seu nome"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="contato" className="text-sm font-medium text-text-primary">
          E-mail ou telefone
        </label>
        <input
          id="contato"
          name="contato"
          type="text"
          required
          className="rounded-xl border border-border-soft bg-bg-surface-2 px-4 py-2.5 text-text-primary placeholder:text-text-secondary/60 focus:border-brand focus:outline-none"
          placeholder="Como podemos te responder"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="tipo" className="text-sm font-medium text-text-primary">
          Tipo de negócio
        </label>
        <select
          id="tipo"
          name="tipo"
          className="rounded-xl border border-border-soft bg-bg-surface-2 px-4 py-2.5 text-text-primary focus:border-brand focus:outline-none"
          defaultValue={businessTypes[0]}
        >
          {businessTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="mensagem" className="text-sm font-medium text-text-primary">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={4}
          required
          className="resize-y rounded-xl border border-border-soft bg-bg-surface-2 px-4 py-2.5 text-text-primary placeholder:text-text-secondary/60 focus:border-brand focus:outline-none"
          placeholder="Conte rapidamente o que você precisa"
        />
      </div>

      {error && (
        <p className="text-sm text-red-400" role="alert">
          {error}
        </p>
      )}

      <button type="submit" className="btn-primary" disabled={status === 'sending'}>
        {status === 'sending' ? 'Enviando…' : 'Enviar mensagem'}
      </button>

      {/* Aviso LGPD — docs/08-lgpd-e-seguranca.md */}
      <p className="text-xs leading-relaxed text-text-secondary">
        Ao enviar, você concorda com o uso dos seus dados exclusivamente para
        retorno do contato.
      </p>
    </form>
  );
}
