import { defineConfig } from 'astro/config';
import myExtIntegration from '/src/config/myExtIntegration';

// refs. https://astro.build/config
export default defineConfig({
  site: 'https://debiru.net',
  base: '/astro3',
  trailingSlash: 'ignore',
  compressHTML: false,
  integrations: [myExtIntegration()],
  build: {
    format: 'file',
  },
});
