import { defineConfig } from "@solidjs/start/config"
import tailwindcss from "@tailwindcss/vite"
import glslPlugin from "vite-plugin-glsl"

export default defineConfig({
  vite: {
    plugins: [tailwindcss(), glslPlugin()],
  },
  server: {
    prerender: {
      crawlLinks: true,
    },
  },
})
