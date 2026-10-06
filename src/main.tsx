import '@fontsource-variable/montserrat'
import '@fontsource-variable/cairo'
import './index.css'
import { QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { localeMeta, parsePath } from '@/i18n/config'
import { queryClient } from '@/lib/query-client'
import { router } from '@/router'

// Set language and direction before the first render to avoid a flash of LTR layout.
const { locale } = parsePath(window.location.pathname)
document.documentElement.lang = locale
document.documentElement.dir = localeMeta[locale].dir

const root = document.getElementById('root')
if (!root) throw new Error('Root element #root not found')

createRoot(root).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)
