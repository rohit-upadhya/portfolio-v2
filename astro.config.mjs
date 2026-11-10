// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://rohitupadhya.com',
  redirects: {
    // post re-dated 2026-08-22 -> 2026-11-08; keep the old slug working
    '/blog/2026-08-22-starting-a-weekly-blog':
      '/blog/2026-11-08-starting-a-weekly-blog',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
