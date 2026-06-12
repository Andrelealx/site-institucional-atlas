import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// URL pública do site (ajustar quando o domínio for definido — PENDÊNCIA)
const SITE_URL = 'https://atlastecnologias.com.br';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [tailwind(), react(), sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
