import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";
import glslPlugin from 'vite-plugin-glsl';

export default defineConfig({
  vite: {
    base: "/2025.nixcon.org/", // Add base path for GitHub Pages deployment
    plugins: [
      tailwindcss(),
      glslPlugin()
    ],
    optimizeDeps: {
      exclude: ['solid-icons'], // See https://stackoverflow.com/a/79316833
    }
  },
  server: {
    baseurl: "2025.nixcon.org",
    prerender: {
      crawlLinks: true,

    }
  }
});
