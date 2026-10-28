// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import { youTubePlugin } from './src/lib/youtube.mjs';

export default defineConfig({
  site: 'https://electro-crea.com',
  // Un lien YouTube seul sur sa ligne devient un lecteur vidéo.
  markdown: { processor: satteri({ mdastPlugins: [youTubePlugin] }) },
  // Polices auto-hébergées : récupérées une fois au build, aucun appel à un CDN tiers.
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Archivo',
      cssVariable: '--font-sans',
      weights: [400, 600, 700, 800],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['Helvetica Neue', 'Arial', 'sans-serif'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'IBM Plex Mono',
      cssVariable: '--font-mono',
      weights: [400, 500],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['ui-monospace', 'monospace'],
    },
  ],
});
