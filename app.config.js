import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";
import glslPlugin from 'vite-plugin-glsl';

export default defineConfig({
  vite: {
    plugins: [
      tailwindcss(),
      glslPlugin()
    ],
    optimizeDeps: {
      exclude: ['solid-icons'], // See https://stackoverflow.com/a/79316833
    }
  },
  server: {
    prerender: {
      crawlLinks: true,

    }
  }
});
