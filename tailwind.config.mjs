/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // Tokens oficiais — docs/11-decisoes-tecnicas.md (Decisão 002)
        'bg-base': '#0A0B0D',
        'bg-surface': '#16181D',
        'bg-surface-2': '#1C1F26',
        'border-soft': '#262A33',
        'text-primary': '#F4F5F7',
        'text-secondary': '#9CA3AF',
        brand: '#C8F135', // verde-limão oficial — accent
      },
      fontFamily: {
        // Space Grotesk (títulos) / Inter (corpo) — carregadas no Layout
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: '0.875rem',
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(200, 241, 53, 0.35)',
        'glow-sm': '0 0 20px -6px rgba(200, 241, 53, 0.4)',
      },
      backgroundImage: {
        'grid-soft':
          'linear-gradient(to right, rgba(38,42,51,0.45) 1px, transparent 1px), linear-gradient(to bottom, rgba(38,42,51,0.45) 1px, transparent 1px)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out both',
      },
    },
  },
  plugins: [],
};
