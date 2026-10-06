# Ibdaa Albashq – Corporate Website

Multi-page website for **Ibdaa Albashq for General Contracting Ltd.**
(شركة إبداع الباشق للمقاولات العامة والتجارة العامة والنقل العام المحدودة).

**Before launch:** read [`TODO.md`](TODO.md) for every placeholder and assumption that needs confirming, and [`IMAGES.md`](IMAGES.md) for every image slot.

## Stack

- React 19 + TypeScript (strict) + Vite
- Tailwind CSS v4 (brand tokens in `src/index.css`)
- React Router (shared layout, code-split pages)
- Motion (Framer Motion) for subtle reveal animations, which respect `prefers-reduced-motion`
- TanStack Query (contact form submission)
- ESLint (typescript-eslint strict, react-hooks, jsx-a11y) + Prettier
- Self-hosted Montserrat font, lucide-react icons

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
| `npm run check`   | Type-check, lint and format check (run before committing)                    |
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

## Editing content

All text lives in typed data files in `src/data/`, so you can change copy without touching components.

| File            | Contents                                                                                                              |
| --------------- | --------------------------------------------------------------------------------------------------------------------- |
| `company.ts`    | Name, tagline, address, phone, email, hours, map, domain, profile PDF. **Single source for contact details.**         |
| `home.ts`       | Home page copy (hero, section titles, safety teaser, final CTA)                                                       |
| `services.ts`   | The 4 core services, category labels, secondary capabilities                                                          |
| `projects.ts`   | Projects (add, remove or edit entries; set `featured: true` to show one on Home) and the subcontract references table |
| `partners.ts`   | "Experience alongside" names in the home page strip                                                                   |
| `stats.ts`      | Key numbers band (`XX+` values are placeholders)                                                                      |
| `about.ts`      | Story, vision, mission, values, capabilities, HSE, org chart                                                          |
| `documents.ts`  | Company document cards (add a PDF to `public/docs/` and set `file` to make one downloadable)                          |
| `gallery.ts`    | Photos in the Projects page gallery                                                                                   |
| `pages.ts`      | Page titles, meta descriptions and page-level copy                                                                    |
| `navigation.ts` | Main menu                                                                                                             |
| `ui.ts`         | Button labels, form labels and messages, etc.                                                                         |

`todo` fields in the data files are notes for content editors and are never shown on the site.

To **add a project**, copy an entry in `src/data/projects.ts`, give it a unique `slug`, put its photos in `public/images/projects/<slug>/`, and fill in `width`/`height` for each image. The page `/projects/<slug>` and its sitemap entry are created automatically.

## Replacing images

See [`IMAGES.md`](IMAGES.md). In short: replace the file in `public/images/...` with one of the same name and update its `width`/`height` in the data file. The logo is `src/assets/logo.svg`.

## Contact form

Sending is isolated in `src/lib/contact-service.ts`.

- **Default:** with no configuration, submitting opens the visitor's email app with the message pre-filled (`mailto:` to the email in `company.ts`).
- **Formspree (recommended):** create a form at formspree.io, then set the environment variable `VITE_CONTACT_ENDPOINT=https://formspree.io/f/<id>`, locally in `.env` (see `.env.example`) and in Vercel → Project → Settings → Environment Variables. Messages are then POSTed as JSON.
- **EmailJS or your own API:** replace `sendViaEndpoint` in `contact-service.ts`.

Spam protection uses a hidden honeypot field plus a minimum fill time of 3 seconds.

## SEO

- Per-page `<title>`, description, canonical and Open Graph/Twitter tags (`src/hooks/useSeo.ts`, text in `src/data/pages.ts`).
- Default Open Graph tags and Organization JSON-LD are injected into `index.html` at build time, and `sitemap.xml` and `robots.txt` are generated from the routes and projects (`vite-plugin-seo.ts`).
- **Set `siteUrl` in `src/data/company.ts` to the real domain before launch.** Canonical URLs, the sitemap and social previews all use it.

## Deploying to Vercel

1. Push this repository to GitHub.
2. In Vercel, **Add New → Project** and import the repository. Vercel detects Vite automatically (build command `npm run build`, output directory `dist`).
3. Optional: add `VITE_CONTACT_ENDPOINT` under Environment Variables.
4. Deploy, then add your domain under Settings → Domains and update `siteUrl` in `company.ts`.

`vercel.json` rewrites every route to `index.html` so deep links such as `/projects/400kv-ohtl-basra` work, and sets long cache headers for hashed assets.

## Arabic / RTL

The site is English-only for now but is ready for Arabic:

- All copy is in `src/data/*`, so an Arabic version means providing translated copies of those files (for example `src/data/ar/*`) and choosing a set based on the selected language.
- Layout uses logical properties (`ms-`/`me-`/`ps-`/`pe-`/`start-`/`end-`), and directional icons and decorations flip with `rtl:` variants.
- To switch, set `<html lang="ar" dir="rtl">` (for example from a language toggle) and add an Arabic font such as Cairo (`npm i @fontsource-variable/cairo`) to `--font-sans` in `src/index.css`.

## Project structure

```
public/
  docs/            company profile PDF (placeholder) and future documents
  images/          hero, services, projects, gallery, team, og, brand
src/
  assets/          logo.svg
  components/
    cards/         ServiceCard, ProjectCard
    layout/        Navbar, MobileMenu, Footer, Logo
    sections/      CtaBand, ContactForm
    ui/            Button, Container, SectionHeading, DiagonalDivider, Reveal,
                   PageHeader, Img, Badge, Highlight, GalleryGrid, Lightbox
  data/            all site content (typed)
  hooks/           useSeo, useScrolled
  layouts/         RootLayout (navbar, footer, motion config, scroll restoration)
  lib/             cn, contact-service, validation, query-client
  pages/           Home, Projects, ProjectDetail, About, Contact, NotFound
  types/           content types
vite-plugin-seo.ts sitemap, robots.txt, OG defaults, JSON-LD
vercel.json        SPA rewrites and cache headers
```

## Quality

On the production build, Lighthouse (mobile, simulated throttling) scores Performance 95–96 and Accessibility, Best Practices and SEO 100 on every page, with a cumulative layout shift of 0. Desktop scores are 100 in all four categories. Re-check after replacing images: large, unoptimised photos are the most likely thing to lower the performance score.
