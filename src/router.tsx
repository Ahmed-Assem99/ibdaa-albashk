import { createBrowserRouter } from 'react-router'
import { RootLayout } from '@/layouts/RootLayout'
import { HomePage } from '@/pages/HomePage'
import { NotFoundPage } from '@/pages/NotFoundPage'

/** Home loads eagerly; other pages are code-split. */
export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
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
    ],
  },
])
