import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import react from "@astrojs/react";

import jopSoftwarecookieconsent from "@jop-software/astro-cookieconsent";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [react(), jopSoftwarecookieconsent()]
});