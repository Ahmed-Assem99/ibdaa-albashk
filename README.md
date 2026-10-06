# Ibdaa Albashq

Website for **Ibdaa Albashq for General Contracting Ltd** (شركة ابداع الباشق للمقاولات العامة).

## Stack

- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vite.dev)
- [Tailwind CSS v4](https://tailwindcss.com) (brand tokens in `src/index.css`)
- [TanStack Query](https://tanstack.com/query) for data fetching
- [React Router](https://reactrouter.com)
- [lucide-react](https://lucide.dev) icons, `clsx` + `tailwind-merge` via `cn()`
- oxlint + Prettier

## Scripts

| Command             | Description                   |
| ------------------- | ----------------------------- |
| `npm run dev`       | Start the dev server          |
| `npm run build`     | Type-check and build for prod |
| `npm run preview`   | Serve the production build    |
| `npm run lint`      | Lint with oxlint              |
| `npm run format`    | Format with Prettier          |
| `npm run typecheck` | Type-check only               |

## Structure

```
src/
  components/
    layout/   # app shell (header, footer, layout)
    ui/       # reusable UI primitives
  data/       # static content
  hooks/      # custom hooks / queries
  lib/        # utilities (cn, query client)
  pages/      # route components
  router.tsx  # route definitions
```

Imports use the `@/` alias for `src/`.
