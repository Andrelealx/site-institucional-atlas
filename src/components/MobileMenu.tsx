import { useEffect, useState } from 'react';
import { waLink } from '../config/site';

interface NavLink {
  label: string;
  href: string;
}

const links: NavLink[] = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Planos', href: '#planos' },
  { label: 'Contato', href: '#contato' },
];

/** Menu hambúrguer mobile — ilha React (interatividade real). */
export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  // Trava o scroll do body quando o menu está aberto.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Fecha com a tecla Escape.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border-soft text-text-primary transition hover:border-brand/60"
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-bg-base/95 backdrop-blur-sm">
          <div className="container-site flex h-16 items-center justify-end">
            <button
              type="button"
              aria-label="Fechar menu"
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border-soft text-text-primary transition hover:border-brand/60"
            >
              <CloseIcon />
            </button>
          </div>
          <nav className="container-site flex flex-col gap-2 pt-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-2 py-4 font-display text-2xl font-semibold text-text-primary transition hover:text-brand"
              >
                {link.label}
              </a>
            ))}
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn-primary mt-4"
            >
              Falar no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
