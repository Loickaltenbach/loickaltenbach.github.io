
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import ssr from 'vite-plugin-ssr/plugin';

export default defineConfig({
  plugins: [
    react(),
    ssr({ prerender: true }),
    visualizer({
      open: true,
      filename: 'stats.html',
      gzipSize: true,
      brotliSize: true
    })
  ],
  base: '/',
})
