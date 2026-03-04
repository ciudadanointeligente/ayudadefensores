import tailwindcss from "@tailwindcss/vite";
// @ts-check
import { defineConfig } from 'astro/config';

import alpinejs from "@astrojs/alpinejs";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "es",
    locales: ["es", "pt"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [alpinejs({ entrypoint: '/src/entrypoint' })],
  adapter: cloudflare(),
  redirects: {
    "/": "/es/",
  },
});
