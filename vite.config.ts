import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, type HtmlTagDescriptor, type Plugin } from 'vite'
import { seo } from './vite-plugin-seo'

/**
 * Preloads the fonts needed for the first paint so text doesn't reflow when they arrive (CLS):
 * Latin Montserrat on every page, plus Arabic Cairo on /ar pages.
 */
function preloadFonts(): Plugin {
  return {
    name: 'preload-fonts',
    apply: 'build',
    transformIndexHtml(_html, ctx) {
      const files = Object.keys(ctx.bundle ?? {})
      const latin = files.find((f) => /montserrat-latin-wght-normal-.*\.woff2$/.test(f))
      const arabic = files.find((f) => /cairo-arabic-wght-normal-.*\.woff2$/.test(f))
      const tags: HtmlTagDescriptor[] = []
      if (latin) {
        tags.push({
          tag: 'link',
          attrs: {
            rel: 'preload',
            href: `/${latin}`,
            as: 'font',
            type: 'font/woff2',
            crossorigin: '',
          },
          injectTo: 'head-prepend',
        })
      }
      if (arabic) {
        tags.push({
          tag: 'script',
          children: `if(/^\\/ar(\\/|$)/.test(location.pathname)){var l=document.createElement('link');l.rel='preload';l.as='font';l.type='font/woff2';l.crossOrigin='';l.href='/${arabic}';document.head.appendChild(l)}`,
          injectTo: 'head-prepend',
        })
      }
      return tags
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), seo(), preloadFonts()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
