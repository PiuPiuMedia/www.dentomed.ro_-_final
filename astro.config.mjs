import { defineConfig } from '/astro.config.mjs';
import vercel from '@astrojs/vercel/serverless';
 
export default defineConfig({
  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
