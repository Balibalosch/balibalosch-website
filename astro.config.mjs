// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [{
    provider: fontProviders.fontsource(),
    name: "Oooh Baby",
    cssVariable: "--font-oooh-baby",
  }]
});
