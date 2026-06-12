import { useState, type FormEvent } from 'react';
import { waLink } from '../config/site';

type Status = 'idle' | 'success';

const businessTypes = [
  'Empresa local',
  'Profissional liberal / autônomo',
  'Loja ou comércio',
  'Evento',
  'Outro',
];

/**
 * Formulário de contato — ilha React.
 * Monta uma mensagem com os campos e abre o WhatsApp (sem backend).
 */
export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
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

    // Monta a mensagem e abre o WhatsApp — o lead cai direto na conversa.
    const texto =
      `Olá! Vim pelo site da Atlas.\n\n` +
      `*Nome:* ${data.nome}\n` +
      `*Contato:* ${data.contato}\n` +
      `*Tipo de negócio:* ${data.tipo}\n` +
      `*Mensagem:* ${data.mensagem}`;

    window.open(waLink(texto), '_blank', 'noopener,noreferrer');
    setStatus('success');
    form.reset();
  }

  if (status === 'success') {
    return (
      <div className="card flex flex-col items-start gap-3" role="status">
        <span className="eyebrow">Tudo certo</span>
        <h3 className="font-display text-xl font-bold">Abrimos seu WhatsApp!</h3>
        <p className="text-text-secondary">
          É só tocar em enviar na conversa que abriu. Se não abriu, fale com a
          gente direto pelo botão do WhatsApp.
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

      <button type="submit" className="btn-primary">
        Enviar pelo WhatsApp
      </button>

      {/* Aviso LGPD — docs/08-lgpd-e-seguranca.md */}
      <p className="text-xs leading-relaxed text-text-secondary">
        Ao enviar, seus dados são usados apenas para retorno do contato e a
        mensagem segue pelo seu WhatsApp.
      </p>
    </form>
  );
}
