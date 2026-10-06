import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'
import { seo } from './vite-plugin-seo'

/** Preloads the Latin Montserrat font so text doesn't reflow when it arrives (CLS). */
function preloadFont(): Plugin {
  return {
    name: 'preload-font',
    apply: 'build',
    transformIndexHtml(_html, ctx) {
      const font = Object.keys(ctx.bundle ?? {}).find((file) =>
        /montserrat-latin-wght-normal-.*\.woff2$/.test(file),
      )
      if (!font) return []
      return [
        {
          tag: 'link',
          attrs: {
            rel: 'preload',
            href: `/${font}`,
            as: 'font',
            type: 'font/woff2',
            crossorigin: '',
          },
          injectTo: 'head-prepend',
        },
      ]
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), seo(), preloadFont()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
