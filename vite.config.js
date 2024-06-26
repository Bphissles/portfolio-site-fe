import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vitePrerender from 'vite-plugin-prerender';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vitePrerender({
      // Required - The path to the vite-outputted app to prerender.
      staticDir: path.join(__dirname, 'dist'),
      // Required - Routes to render.
      routes: [
        '/',
        '/about',
        '/project',
        '/contact',
        '/style-guide'
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `@import "@/assets/scss/theme.scss";`,
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
