import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// User GitHub Pages page (arnaumarin.github.io) → served from domain root.
export default defineConfig({
  base: '/',
  plugins: [vue(), tailwindcss()],
  build: { outDir: 'dist' },
})
