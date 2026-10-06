# Ibdaa Albashq – Corporate Website

Bilingual (English / Arabic) multi-page website for **Ibdaa Albashq for General Contracting Ltd.**
(شركة إبداع الباشق للمقاولات العامة والتجارة العامة والنقل العام المحدودة).

**Before launch:** read [`TODO.md`](TODO.md) for every placeholder and assumption that needs confirming, and [`IMAGES.md`](IMAGES.md) for every image slot.

## Stack

- React 19 + TypeScript (strict) + Vite
- Tailwind CSS v4 (brand tokens in `src/index.css`)
- React Router (shared layout, code-split pages)
- Motion (Framer Motion) for subtle reveal animations, which respect `prefers-reduced-motion`
- TanStack Query (contact form submission)
- ESLint (typescript-eslint strict, react-hooks, jsx-a11y) + Prettier, Vitest
- Self-hosted Montserrat (Latin) and Cairo (Arabic) fonts, lucide-react icons

## Getting started

Requires Node.js 20+.

```bash
npm install
npm run dev        # http://localhost:5173
```

| Command           | What it does                                                                 |
| ----------------- | ---------------------------------------------------------------------------- |
| `npm run dev`     | Start the dev server                                                         |
| `npm run build`   | Type-check and build to `dist/` (also writes `sitemap.xml` and `robots.txt`) |
| `npm run preview` | Serve the production build locally                                           |
| `npm run check`   | Type-check, lint, format check and tests (run before committing)             |
| `npm run test`    | Vitest (checks the Arabic content stays in sync with English)                |
| `npm run lint`    | ESLint                                                                       |
| `npm run format`  | Format all files with Prettier                                               |

## Pages

| Route             | Page                                                                                                                                      |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `/`               | Home: hero, partners strip, core services, key numbers, featured projects, safety teaser, CTA                                             |
| `/projects`       | Projects with category filters (`?category=transmission\|solar\|oil-gas\|telecom\|civil`), subcontract references table and photo gallery |
| `/projects/:slug` | Project detail: scope, facts, gallery with lightbox, related projects                                                                     |
| `/about`          | Story, vision and mission, values, capabilities and equipment, HSE and quality (`#hse`), organisation chart, company documents            |
| `/contact`        | Contact details, validated contact form, company profile download, map                                                                    |
| `*`               | 404                                                                                                                                       |

Every page also exists in Arabic under `/ar` (for example `/ar/projects`, `/ar/about#hse`). The EN/AR switch in the navbar and mobile menu opens the same page in the other language.

## Editing content

All text lives in typed content files, one folder per language, so you can change copy without touching components:

- `src/content/en/`: English (its shape defines the type every language must match)
- `src/content/ar/`: Arabic (same files and structure)
- `src/data/company.ts`: language-independent details (phone, **email**, domain, map, legal names, profile PDF). **Single source for contact details.**

| File (in `en/` and `ar/`) | Contents                                                                                                              |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `company.ts`              | Name, logo text, tagline, description, address lines, working hours                                                   |
| `home.ts`                 | Home page copy (hero title and photos, section titles, safety teaser, final CTA)                                      |
| `services.ts`             | The 4 core services, category labels, secondary capabilities                                                          |
| `projects.ts`             | Projects (add, remove or edit entries; set `featured: true` to show one on Home) and the subcontract references table |
| `partners.ts`             | "Experience alongside" companies under the hero (names, sectors, optional logos)                                      |
| `stats.ts`                | Key numbers band                                                                                                      |
| `about.ts`                | Story, vision, mission, values, capabilities, HSE, org chart                                                          |
| `documents.ts`            | Company document cards (add a PDF to `public/docs/` and set `file` to make one downloadable)                          |
| `gallery.ts`              | Photos in the Projects page gallery (English only; Arabic reuses it)                                                  |
| `pages.ts`                | Page titles, meta descriptions and page-level copy                                                                    |
| `navigation.ts`           | Main menu                                                                                                             |
| `ui.ts`                   | Button labels, form labels and messages, etc.                                                                         |
| `ar/image-alts.ts`        | Arabic alt text for every image, keyed by file path                                                                   |

`todo` fields in the content files are notes for content editors and are never shown on the site.

To **add a project**, copy an entry in `src/content/en/projects.ts`, give it a unique `slug`, put its photos in `public/images/projects/<slug>/`, and fill in `width`/`height` for each image. Then add its Arabic text under the same slug in `src/content/ar/projects.ts` and the Arabic alt text for its photos in `src/content/ar/image-alts.ts`. The pages `/projects/<slug>` and `/ar/projects/<slug>` and their sitemap entries are created automatically.

**Keeping the languages in sync:** `npm run test` fails if the Arabic content is missing a field, project, list item or image alt text that exists in English, or still contains English sentences. Run it after editing content.

## Replacing images

See [`IMAGES.md`](IMAGES.md). In short: replace the file in `public/images/...` with one of the same name and update its `width`/`height` in the data file. The logo is `src/assets/logo.svg`.

## Contact form

Sending is isolated in `src/lib/contact-service.ts`.

- **Default:** with no configuration, submitting opens the visitor's email app with the message pre-filled (`mailto:` to the email in `company.ts`).
- **Formspree (recommended):** create a form at formspree.io, then set the environment variable `VITE_CONTACT_ENDPOINT=https://formspree.io/f/<id>`, locally in `.env` (see `.env.example`) and in Vercel → Project → Settings → Environment Variables. Messages are then POSTed as JSON.
- **EmailJS or your own API:** replace `sendViaEndpoint` in `contact-service.ts`.

Spam protection uses a hidden honeypot field plus a minimum fill time of 3 seconds.

## SEO

- Per-page, per-language `<title>`, description, canonical, `hreflang` alternates and Open Graph/Twitter tags (`src/hooks/useSeo.ts`, text in `src/content/*/pages.ts`).
- Default Open Graph tags and Organization JSON-LD are injected into `index.html` at build time, and `sitemap.xml` (both languages, with `hreflang` alternates) and `robots.txt` are generated from the routes and projects (`vite-plugin-seo.ts`).
- **Set `siteUrl` in `src/data/company.ts` to the real domain before launch.** Canonical URLs, the sitemap and social previews all use it.

## Deploying to Vercel

1. Push this repository to GitHub.
2. In Vercel, **Add New → Project** and import the repository. Vercel detects Vite automatically (build command `npm run build`, output directory `dist`).
3. Optional: add `VITE_CONTACT_ENDPOINT` under Environment Variables.
4. Deploy, then add your domain under Settings → Domains and update `siteUrl` in `company.ts`.

`vercel.json` rewrites every route to `index.html` so deep links such as `/projects/400kv-ohtl-basra` work, and sets long cache headers for hashed assets.

## Languages (English / Arabic)

- **URLs:** English at `/…`, Arabic at `/ar/…` (configured in `src/i18n/config.ts`). Each language has its own indexable pages, with `hreflang` alternates on every page and in the sitemap.
- **Switching:** `src/i18n/LanguageSwitch.tsx` links to the same page in the other language, keeping any filter or `#section`.
- **Links:** use `Link`/`NavLink` from `src/i18n/Link.tsx` (and `Button to="/…"`) with plain paths like `/about`; the `/ar` prefix is added automatically.
- **Content in components:** `const { ui, projects } = useContent()` (from `src/i18n/useLocale.ts`).
- **RTL:** `<html lang dir>` follows the URL. Layout uses logical properties (`ms-`/`me-`/`start-`/`end-`), and directional icons and decorations flip with `rtl:` variants. There is an `ar:` Tailwind variant for Arabic-only tweaks.
- **Typography:** Cairo for Arabic, Montserrat for Latin. Letter-spacing is disabled for Arabic text (it breaks the joins between letters) and the smallest sizes are nudged up. Mark Latin brand names inside Arabic text with `lang="en"`.
- **Adding a language:** add it to `locales`/`localeMeta` in `src/i18n/config.ts`, create `src/content/<code>/` matching the English files, and register it in `src/content/index.ts`.

## Project structure

```
public/
  docs/            company profile PDF (placeholder) and future documents
  images/          services, projects, gallery, team, og, brand (+ partners/ for logos)
src/
  assets/          logo.svg
  components/
    cards/         ServiceCard, ProjectCard
    layout/        Navbar, MobileMenu, Footer, Logo
    sections/      CtaBand, ContactForm
    ui/            Button, Container, SectionHeading, DiagonalDivider, Reveal,
                   PageHeader, Img, Badge, Highlight, GalleryGrid, Lightbox
  content/         site copy per language: en/, ar/, plus i18n tests
  data/            company.ts: language-independent contact details
  i18n/            locale config, provider, useLocale/useContent, localized Link, LanguageSwitch
  hooks/           useSeo, useScrolled
  layouts/         RootLayout (navbar, footer, motion config, scroll restoration)
  lib/             cn, contact-service, validation, query-client
  pages/           Home, Projects, ProjectDetail, About, Contact, NotFound
  types/           content types
vite-plugin-seo.ts sitemap, robots.txt, OG defaults, JSON-LD
vercel.json        SPA rewrites and cache headers
```

## Quality

On the production build, Lighthouse (mobile, simulated throttling) scores Performance 91–96 and Accessibility, Best Practices and SEO 100 on every page in both languages, with a cumulative layout shift of 0. Re-check after replacing images: large, unoptimised photos are the most likely thing to lower the performance score.
