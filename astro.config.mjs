import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/static";
import cookie from 'cookie'

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercel()
});