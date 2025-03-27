import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import glslPlugin from 'vite-plugin-glsl';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    solid(),
    tailwindcss(),
    glslPlugin(),
  ],
  base: "/nix-con-2025", // Cache test
})
