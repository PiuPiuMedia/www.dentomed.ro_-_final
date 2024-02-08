import { defineConfig } from '/astro.config.mjs';
import vercel from '@astrojs/vercel/static';
 
export default defineConfig({
  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
