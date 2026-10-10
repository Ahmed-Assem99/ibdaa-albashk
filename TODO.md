# TODO report – data to confirm before launch

Everything below is either a **placeholder** or an **assumption** I made from the company profile PDF and your brief. Nothing has been invented. Where real data was missing, the site shows a clearly marked placeholder (`XX`, "PHOTO PLACEHOLDER" or "TODO: confirm …").

Search the code for `TODO` to find each item in place (`grep -rn TODO src`). Project-level notes are in the `todo` field of each entry in `src/content/en/projects.ts`. Copy is in `src/content/en/` (English) and `src/content/ar/` (Arabic); contact details are in `src/data/company.ts`.

---

## 1. Must fix before going live

| #   | Item                                                                                                                                                      | Where                                                  | Current value                         |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | ------------------------------------- |
| 1.1 | **Production domain** (used for canonical URLs, sitemap, robots.txt and social previews)                                                                  | `src/data/company.ts` → `siteUrl`                      | `https://www.example.com`             |
| 1.2 | **Office address.** The brochure lists Baghdad – Almansoor; main operations are in Basra. Which address should the site show?                             | `src/content/{en,ar}/company.ts` → `addressLines`      | Almansoor, Baghdad, Iraq              |
| 1.3 | **Working days.** Hours are confirmed as 9 AM – 5 PM; I assumed Sunday – Thursday.                                                                        | `src/content/{en,ar}/company.ts` → `workingHours`      | Sunday – Thursday · 9:00 AM – 5:00 PM |
| 1.4 | **Map location.** Replace with the exact office pin (Google Maps → Share → Embed a map → copy the `src`).                                                 | `company.ts` → `mapEmbedUrl`                           | Al Mansour, Baghdad (area search)     |
| 1.5 | **Company profile PDF.** The download is a one-page placeholder. Add the final PDF, ideally a web-optimised version without personal ID details.          | `public/docs/ibdaa-albashq-company-profile.pdf`        | Placeholder                           |
| 1.6 | **Contact form delivery.** It currently falls back to opening the visitor's email app. Set `VITE_CONTACT_ENDPOINT` (e.g. Formspree) for real submissions. | `.env` / Vercel env vars, `src/lib/contact-service.ts` | mailto fallback                       |
| 1.7 | **Founding year.** The CEO message says 2015; the registration documents are dated 2018. The site currently avoids stating a year.                        | `src/content/{en,ar}/about.ts`                         | Not stated                            |

## 2. Branding and wording to confirm

- **Tagline:** confirmed as "Together, We Build Iraq" (corrected from the brochure's "Together We Building Iraq"); Arabic "معاً نبني العراق". Update the brochure to match. (`src/content/{en,ar}/company.ts` → `tagline`)
- **English name spelling:** the site uses "Ibdaa Albashq". The brochure and documents also use "Albashk", "Albashik" and "Albasshik". Pick one.
- **Arabic legal name:** the site uses "شركة إبداع الباشق للمقاولات العامة والتجارة العامة والنقل العام المحدودة". The documents use both "ابداع" and "أبداع" and differ slightly in word order. Confirm the official form. (`company.ts` → `legalNameAr`)
- **Logo:** `src/assets/logo.svg` is the eagle mark traced from the PDF's vector artwork. Swap it for the official master file if you have one.

## 3. Key numbers

Updated with your figures: **+10** years of experience, **+25** projects delivered, **+15** heavy machines and vehicles, **+500** skilled workforce (`src/content/{en,ar}/stats.ts`). The About page's equipment figure now also shows **+15** (the brochure said 100).

- **Asphalt & concrete plants** on the About page still shows `2`, from the brochure. Confirm it is current. (`src/content/en/about.ts`)

## 3b. Landmark: Asia's tallest transmission tower (186 m)

Featured on the home page (section under the partner strip) and linked from a badge in the hero; also mentioned in the home page's search description. Content is in `src/content/{en,ar}/home.ts` → `landmark`.

- **Keep evidence for "tallest in Asia":** a superlative claim like this can be challenged. Keep a source to hand (a client letter, contract or press coverage) and, if possible, cite it or link it from the site.
- **Project details:** the project name, location (the photo shows a waterway), client and year aren't stated. Tell me and I'll add the tower as its own project page, or link it to the 400kV OHTL project if it's part of that work.
- **Scope wording:** "construction, erection and conductor stringing", from your description.

## 4. Projects (`src/content/en/projects.ts`, Arabic text in `src/content/ar/projects.ts`)

### Placeholder projects (visible on the site with "TODO: confirm details")

| Slug                 | Needs                                                           |
| -------------------- | --------------------------------------------------------------- |
| `solar-pv-kalpataru` | Project name, location, capacity, scope, period, status, photos |
| `oil-gas-bp`         | Project name, field, scope, period, status, photos              |
| `oil-gas-eni`        | Project name, field, scope, period, status, photos              |

### Real projects with details to confirm

| Slug                                  | Source                                                               | To confirm                                                                                                                                                                                                                                                 |
| ------------------------------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `400kv-ohtl-basra`                    | Site photos (Dec 2025 – May 2026)                                    | Photo overlays read "GCCIA 400KV D/C OHTL Interconnecting Lot-5 Iraq". Can the project name, main contractor/client and our role be published? Locations (Al-Zubair, Abu Al-Khaseeb, Safwan) are taken from the photo overlays. Status set to **Ongoing**. |
| `cpf-60m-it-tower`                    | Kuwait Energy acceptance certificate (BLK9-IRQ-IT-CON-0694)          | That the photos used belong to this project. Location described as "CPF, Block 9, Basra".                                                                                                                                                                  |
| `zain-telecom-towers`                 | ZAIN agreement ZAINIQ-I.B/FUEL-MAIN-CONT/19/13 (1 Jan – 31 Dec 2019) | That the generator and fuel tank photos belong to this contract; whether the service continued after 2019.                                                                                                                                                 |
| `basra-oil-gas-civil-works`           | Brochure photos only                                                 | Generic entry. Client, field name, period, status (**assumed Completed**), or split into separate projects.                                                                                                                                                |
| `al-diwaniyah-entrance-road`          | Ministry award letter (tender 14/2021, 2022)                         | Status (**assumed Completed**); photos (the brochure's road photos were too small to use).                                                                                                                                                                 |
| `kuwait-energy-caravans`              | Kuwait Energy PO BLK/IRQ-OP-PO-0508 (Oct 2021)                       | Status (**assumed Completed**); category (filed under **Civil**); photos. The PO value was deliberately not published.                                                                                                                                     |
| `halfaya-geotechnical-investigations` | Subcontract references table (items 7–16)                            | Period, status (**assumed Completed**), and that the drilling-rig and survey photos belong to this work.                                                                                                                                                   |
| `basra-intermediate-stations`         | Basra Governorate letters (tender 34/Municipality/2019)              | Scope, status (**assumed Completed**), photos.                                                                                                                                                                                                             |

### Featured on Home

Currently: 400kV OHTL, CPF IT tower, ZAIN towers, O&G civil works. Change with `featured: true/false`.

### Subcontract references table (Projects page)

The 22-row "Projects of Subcontract with Eshraqat Al Iraq Company" table is copied from the brochure. Please confirm:

- That it may be published and how our role should be described.
- Brochure oddities kept as-is: item 8 (Habbaniyah airport) lists "Halfaya" as the place; items 20 and 21 are identical; "Coasls" (item 15) may be a typo.

## 5. Partners strip ("Experience alongside", under the hero)

`src/content/en/partners.ts`: Kalpataru, BP, Eni, ZAIN, and **Kuwait Energy** (added from the brochure documents; remove it if you prefer). The sector labels under each name (e.g. "Power transmission & solar" for Kalpataru) are my wording. Confirm or edit.

**Logos:** added from the files you supplied. Each company's symbol is shown beside its name in full colour. Please confirm you have permission to use each logo.

## 6. Copy assumptions

- **Solar service scope** (`src/content/{en,ar}/services.ts`): "EPC construction support, site preparation and civil works, electrical works". Confirm the actual scope.
- **Safety teaser:** "Every shift starts with a toolbox talk" and the HSE bullet "Daily toolbox talks and safety training for all site crews" are based on the many toolbox-talk photos in the brochure. Confirm they are accurate.
- **Brochure claims I removed** because they couldn't be verified. Re-add any you can support:
  - "turnkey projects worth several billion dollars"
  - "the highest classification in all civil and electrical works"
  - "contributed to the development of major airports"
  - "conforms to ISO / Environment Management System (ISO) / OHSAS". No certifications are claimed; add certificate names and numbers if you hold them.
  - "suppliers from over 6 countries"
- **Leftover text from another company's profile:** the brochure mentions "NAC" and "Almabani" in several places. These were not carried over.

## 7. Documents (About → Company documents)

All six cards show "Available on request" (`src/content/en/documents.ts`). Decide which to publish. The originals contain personal ID details and signatures, so **redact before uploading**. Put PDFs in `public/docs/` and set each card's `file`.

## 8. Images

See [`IMAGES.md`](IMAGES.md) for the full list. In summary:

- **Hero:** redesigned with no background image. Three real site photos sit in angled gold frames. They come from the PDF, so they are low-res; replace them with sharp portrait photos when available (see IMAGES.md → Home hero photos).
- **Placeholders (7):** solar service image, and covers for the solar, BP, Eni, caravans, Al-Diwaniyah road and Basra stations projects.
- **Low-resolution photos:** all real photos come from the PDF and are small (mostly 200–540 px). Please send the originals.
- **Photo-to-project mapping** was inferred from the brochure page layout (see the per-project notes above).
- Stock photos in the brochure were not used (unknown licence).

## 9. Arabic version

- **Translation review:** all Arabic copy (`src/content/ar/`) was written by me in Modern Standard Arabic, with Iraqi month names for dates. Please have a native speaker review it before launch, especially technical terms, client names and project titles.
- **Arabic name forms used:** "إبداع الباشق" (short name), "معاً نبني العراق" (tagline), "كويت إنرجي البصرة المحدودة", "شركة أثير للاتصالات – العراق (زين العراق)", "الشركة الصينية للهندسة النفطية المحدودة", "شركة إشراقات العراق". Confirm the official Arabic names.
- **Brand names** (Kalpataru, BP, Eni, ZAIN, Kuwait Energy) stay in Latin script in the partners strip.
- **Company profile PDF:** both languages link to the same file. Add an Arabic profile if you have one.

## 10. Not done / optional next steps

- **Team page / leadership profiles:** no names or photos were provided, so none are shown (the org chart lists roles only).
- **Analytics** (e.g. Vercel Analytics or Plausible): not added.
- **Social media links:** none provided; add them to the footer if wanted.
- **Privacy policy:** consider adding one before turning on a form endpoint.
- **Remembering the language choice:** the language comes from the URL (`/ar/…`); the site doesn't redirect returning visitors to their last language.
