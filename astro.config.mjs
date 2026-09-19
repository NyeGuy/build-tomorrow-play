import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const vercelHost =
  process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
const site = vercelHost
  ? `https://${vercelHost}`
  : 'https://build-tomorrow-play.vercel.app';

// Vercel playground — root hosting. Production SCAD export is the same static dist/.
export default defineConfig({
  site,
  base: '/',
  output: 'static',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
});
