import { createBrowserRouter, type RouteObject } from 'react-router'
import { localeMeta, locales, type Locale } from '@/i18n/config'
import { LocaleProvider } from '@/i18n/LocaleProvider'
import { RootLayout } from '@/layouts/RootLayout'
import { HomePage } from '@/pages/HomePage'
import { NotFoundPage } from '@/pages/NotFoundPage'

/** Page routes, shared by every language. Home loads eagerly; other pages are code-split. */
const pages: RouteObject[] = [
  { index: true, element: <HomePage /> },
  {
    path: 'projects',
    lazy: async () => ({ Component: (await import('@/pages/ProjectsPage')).ProjectsPage }),
  },
  {
    path: 'projects/:slug',
    lazy: async () => ({
      Component: (await import('@/pages/ProjectDetailPage')).ProjectDetailPage,
    }),
  },
  {
    path: 'about',
    lazy: async () => ({ Component: (await import('@/pages/AboutPage')).AboutPage }),
  },
  {
    path: 'contact',
    lazy: async () => ({ Component: (await import('@/pages/ContactPage')).ContactPage }),
  },
  { path: '*', element: <NotFoundPage /> },
]

function localeRoute(locale: Locale): RouteObject {
  return {
    path: localeMeta[locale].prefix || '/',
    element: (
      <LocaleProvider locale={locale}>
        <RootLayout />
      </LocaleProvider>
    ),
    children: pages,
  }
}

/** English at /…, Arabic at /ar/…. */
export const router = createBrowserRouter(locales.map(localeRoute))
