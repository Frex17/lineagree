import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://lineagree.vercel.app',
  output: 'static',
  build: { format: 'file' },
});
