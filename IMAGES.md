# Images

Every image on the site is a file in `public/images/`, referenced by path from the content files in `src/content/en/` (Arabic reuses the same images). To swap a photo, **replace the file with one of the same name** (keep the `.webp` extension), or put a new file anywhere under `public/images/` and update its `src`, `width` and `height` in the content file.

## Where the current images come from

- **From PDF (low-res):** real site photos extracted from the company profile PDF. They are genuine but small (mostly 200–540 px wide), so they look soft on large screens. Please send the original, full-resolution photos.
- **Placeholder:** generated artwork (charcoal + gold, labelled "PHOTO PLACEHOLDER" with its file path). Replace these with real photos.
- **Generated:** brand assets made from the logo (social share image, PNG logo).
- Stock photos in the PDF (skyscrapers, the welder, the engineer with blueprints, the excavator, the seedling, etc.) were **not** used, because their licence is unknown.
- The scanned contracts and certificates in the PDF were **not** published, because they contain personal ID details. See `TODO.md`.

## Guidelines

- **Format:** WebP (or JPG/AVIF) at quality 75–85. Aim for under 250 KB per photo.
- **Width and height:** after replacing a file, update `width` and `height` in the content file to the new image's pixel size. This keeps the browser from shifting the layout while the image loads.
- **Alt text:** every image has English `alt` text in the content files and Arabic alt text in `src/content/ar/image-alts.ts` (keyed by file path). Update both if the photo changes; `npm run test` fails if an image has no Arabic alt.
- **Placeholders:** set `placeholder: true` on an image to hide it from project galleries until a real photo is available.
- Convert and resize with any tool, for example [Squoosh](https://squoosh.app) or `npx sharp-cli -i in.jpg -o out.webp resize 1600`.

## Logo and icons

| File                               | Notes                                                                                                                                                     |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/assets/logo.svg`              | Eagle mark, traced from the vector artwork in the PDF. Used in the navbar, footer, About page and placeholders. Replace it to update the logo everywhere. |
| `public/favicon.svg`               | Logo on a charcoal rounded square.                                                                                                                        |
| `public/apple-touch-icon.png`      | 180×180 home-screen icon.                                                                                                                                 |
| `public/images/brand/logo-512.png` | 512×512 PNG for search engines (Organization JSON-LD).                                                                                                    |
| `public/images/og/og-image.jpg`    | 1200×630 social share image (WhatsApp, LinkedIn, X, Facebook).                                                                                            |

## All image slots

### Home hero photos

The hero has no background photo. Three site photos sit in angled gold frames beside the title. They are set in `hero.panels` in `src/content/en/home.ts` (currently `gallery/transmission-corridor.webp`, `services/telecom.webp` and `services/oil-gas.webp`). Replace them with sharp portrait photos (about 800×1100) of transmission, telecom and oil & gas work, or point `src` at new files.

### `landmark/`: Asia's tallest tower feature

| File                                       | Size     | Used in                                                        |
| ------------------------------------------ | -------- | -------------------------------------------------------------- |
| `/images/landmark/tallest-tower-186m.webp` | 1280×960 | content/en/home.ts (`landmark.image`), Home → landmark section |

Your aerial photo of the 186 m tower. It's shown in a portrait crop (4:5), centred on the tower, so keep the tower in the middle of any replacement photo.

### `partners/`: partner logos

Each company's symbol (cropped from the logo files you supplied, background removed), shown in a 48 px box beside its name in the strip under the hero, in full colour. Set in `src/content/en/partners.ts`; the Arabic page reuses them (Arabic alt text in `src/content/ar/image-alts.ts`).

| File                                  | Size    | Symbol         |
| ------------------------------------- | ------- | -------------- |
| `/images/partners/kalpataru.webp`     | 145×145 | Tree mark      |
| `/images/partners/bp.webp`            | 190×192 | Helios         |
| `/images/partners/eni.webp`           | 160×132 | Six-legged dog |
| `/images/partners/zain.webp`          | 162×152 | Swirl          |
| `/images/partners/kuwait-energy.webp` | 117×129 | Knot mark      |

To replace one, drop in a transparent, tightly cropped square-ish file with the same name and update its `width`/`height`. Use logos only with each company's permission.

### `services/`: recommended 800×800 (square, subject centred)

| File                                 | Current size | Status             | Used in                                    |
| ------------------------------------ | ------------ | ------------------ | ------------------------------------------ |
| `/images/services/oil-gas.webp`      | 516×302      | From PDF (low-res) | content/en/home.ts, content/en/services.ts |
| `/images/services/solar-pv.webp`     | 800×800      | **Placeholder**    | content/en/services.ts                     |
| `/images/services/telecom.webp`      | 516×630      | From PDF (low-res) | content/en/home.ts, content/en/services.ts |
| `/images/services/transmission.webp` | 201×268      | From PDF (low-res) | content/en/services.ts                     |

### `projects/`: recommended 1600×1200 (4:3) for covers; any ratio for gallery

| File                                                                     | Current size | Status             | Used in                |
| ------------------------------------------------------------------------ | ------------ | ------------------ | ---------------------- |
| `/images/projects/400kv-ohtl-basra/conductor-compression.webp`           | 201×268      | From PDF (low-res) | content/en/projects.ts |
| `/images/projects/400kv-ohtl-basra/conductor-joint.webp`                 | 201×268      | From PDF (low-res) | content/en/projects.ts |
| `/images/projects/400kv-ohtl-basra/conductor-stringing.webp`             | 201×268      | From PDF (low-res) | content/en/projects.ts |
| `/images/projects/400kv-ohtl-basra/crane-line-crossing.webp`             | 201×268      | From PDF (low-res) | content/en/projects.ts |
| `/images/projects/400kv-ohtl-basra/crew-working-at-height.webp`          | 204×349      | From PDF (low-res) | content/en/projects.ts |
| `/images/projects/400kv-ohtl-basra/line-layout-crew.webp`                | 322×198      | From PDF (low-res) | content/en/projects.ts |
| `/images/projects/400kv-ohtl-basra/puller-tensioner-loc-114.webp`        | 325×255      | From PDF (low-res) | content/en/projects.ts |
| `/images/projects/400kv-ohtl-basra/tensioner-at-tower.webp`              | 311×198      | From PDF (low-res) | content/en/projects.ts |
| `/images/projects/400kv-ohtl-basra/tensioner-controls.webp`              | 322×255      | From PDF (low-res) | content/en/projects.ts |
| `/images/projects/400kv-ohtl-basra/tower-loc-110.webp`                   | 279×255      | From PDF (low-res) | content/en/projects.ts |
| `/images/projects/400kv-ohtl-basra/tower-stringing.webp`                 | 201×268      | From PDF (low-res) | content/en/projects.ts |
| `/images/projects/al-diwaniyah-entrance-road/cover.webp`                 | 1200×800     | **Placeholder**    | content/en/projects.ts |
| `/images/projects/basra-intermediate-stations/cover.webp`                | 1200×800     | **Placeholder**    | content/en/projects.ts |
| `/images/projects/basra-oil-gas-civil-works/coated-foundations.webp`     | 427×209      | From PDF (low-res) | content/en/projects.ts |
| `/images/projects/basra-oil-gas-civil-works/concrete-slab.webp`          | 422×259      | From PDF (low-res) | content/en/projects.ts |
| `/images/projects/basra-oil-gas-civil-works/pipeline-valves.webp`        | 209×157      | From PDF (low-res) | content/en/projects.ts |
| `/images/projects/basra-oil-gas-civil-works/site-building.webp`          | 268×294      | From PDF (low-res) | content/en/projects.ts |
| `/images/projects/basra-oil-gas-civil-works/site-preparation.webp`       | 261×291      | From PDF (low-res) | content/en/projects.ts |
| `/images/projects/basra-oil-gas-civil-works/slab-near-flare.webp`        | 421×146      | From PDF (low-res) | content/en/projects.ts |
| `/images/projects/basra-oil-gas-civil-works/wall-formwork.webp`          | 266×333      | From PDF (low-res) | content/en/projects.ts |
| `/images/projects/basra-oil-gas-civil-works/wall-starter-bars.webp`      | 274×336      | From PDF (low-res) | content/en/projects.ts |
| `/images/projects/cpf-60m-it-tower/aircraft-warning-light-box.webp`      | 468×583      | From PDF (low-res) | content/en/projects.ts |
| `/images/projects/cpf-60m-it-tower/footing-rebar.webp`                   | 516×302      | From PDF (low-res) | content/en/projects.ts |
| `/images/projects/cpf-60m-it-tower/foundation-blocks.webp`               | 516×302      | From PDF (low-res) | content/en/projects.ts |
| `/images/projects/cpf-60m-it-tower/foundation-excavation.webp`           | 516×302      | From PDF (low-res) | content/en/projects.ts |
| `/images/projects/cpf-60m-it-tower/tower-base-trench.webp`               | 516×302      | From PDF (low-res) | content/en/projects.ts |
| `/images/projects/halfaya-geotechnical-investigations/drilling-rig.webp` | 516×301      | From PDF (low-res) | content/en/projects.ts |
| `/images/projects/halfaya-geotechnical-investigations/survey.webp`       | 516×302      | From PDF (low-res) | content/en/projects.ts |
| `/images/projects/kuwait-energy-caravans/cover.webp`                     | 1200×800     | **Placeholder**    | content/en/projects.ts |
| `/images/projects/oil-gas-bp/cover.webp`                                 | 1200×800     | **Placeholder**    | content/en/projects.ts |
| `/images/projects/oil-gas-eni/cover.webp`                                | 1200×800     | **Placeholder**    | content/en/projects.ts |
| `/images/projects/solar-pv-kalpataru/cover.webp`                         | 1200×800     | **Placeholder**    | content/en/projects.ts |
| `/images/projects/zain-telecom-towers/control-panel.webp`                | 358×438      | From PDF (low-res) | content/en/projects.ts |
| `/images/projects/zain-telecom-towers/equipment-shelter.webp`            | 468×583      | From PDF (low-res) | content/en/projects.ts |
| `/images/projects/zain-telecom-towers/generator-and-fuel-tank.webp`      | 516×302      | From PDF (low-res) | content/en/projects.ts |
| `/images/projects/zain-telecom-towers/generator-cummins.webp`            | 516×301      | From PDF (low-res) | content/en/projects.ts |
| `/images/projects/zain-telecom-towers/generator-installation.webp`       | 516×302      | From PDF (low-res) | content/en/projects.ts |
| `/images/projects/zain-telecom-towers/generator-shelter.webp`            | 516×301      | From PDF (low-res) | content/en/projects.ts |
| `/images/projects/zain-telecom-towers/generator-silent-power.webp`       | 516×302      | From PDF (low-res) | content/en/projects.ts |
| `/images/projects/zain-telecom-towers/tower-base-compound.webp`          | 516×301      | From PDF (low-res) | content/en/projects.ts |

### `team/`: recommended 1600×1200

| File                                       | Current size | Status             | Used in                                    |
| ------------------------------------------ | ------------ | ------------------ | ------------------------------------------ |
| `/images/team/crew-at-cable-drums.webp`    | 307×243      | From PDF (low-res) | content/en/gallery.ts                      |
| `/images/team/crew-briefing.webp`          | 307×243      | From PDF (low-res) | content/en/gallery.ts                      |
| `/images/team/engineers-site-visit.webp`   | 323×244      | From PDF (low-res) | content/en/gallery.ts                      |
| `/images/team/hse-training-sessions.webp`  | 646×646      | From PDF (low-res) | content/en/about.ts, content/en/home.ts    |
| `/images/team/site-inspection.webp`        | 201×268      | From PDF (low-res) | content/en/gallery.ts                      |
| `/images/team/toolbox-talk-circle.webp`    | 325×244      | From PDF (low-res) | content/en/gallery.ts                      |
| `/images/team/toolbox-talk-crew.webp`      | 307×243      | From PDF (low-res) | content/en/gallery.ts                      |
| `/images/team/toolbox-talk-stringing.webp` | 307×243      | From PDF (low-res) | content/en/about.ts, content/en/gallery.ts |
| `/images/team/toolbox-talk-zubair.webp`    | 307×243      | From PDF (low-res) | content/en/gallery.ts                      |

### `gallery/`: recommended 1600px on the long edge

| File                                               | Current size | Status             | Used in                                   |
| -------------------------------------------------- | ------------ | ------------------ | ----------------------------------------- |
| `/images/gallery/concrete-pour.webp`               | 516×302      | From PDF (low-res) | content/en/gallery.ts                     |
| `/images/gallery/crane-truck.webp`                 | 516×302      | From PDF (low-res) | content/en/gallery.ts                     |
| `/images/gallery/excavator-loading-truck.webp`     | 536×430      | From PDF (low-res) | content/en/gallery.ts                     |
| `/images/gallery/excavator-stockpile.webp`         | 536×430      | From PDF (low-res) | content/en/gallery.ts                     |
| `/images/gallery/foundation-excavation-crew.webp`  | 516×302      | From PDF (low-res) | content/en/gallery.ts                     |
| `/images/gallery/generator-engine.webp`            | 515×302      | From PDF (low-res) | content/en/gallery.ts                     |
| `/images/gallery/grader-on-access-track.webp`      | 536×430      | From PDF (low-res) | content/en/gallery.ts                     |
| `/images/gallery/grader-roadworks.webp`            | 536×430      | From PDF (low-res) | content/en/gallery.ts                     |
| `/images/gallery/lattice-tower.webp`               | 516×630      | From PDF (low-res) | content/en/gallery.ts                     |
| `/images/gallery/loader-and-dump-truck.webp`       | 536×430      | From PDF (low-res) | content/en/gallery.ts                     |
| `/images/gallery/motor-grader.webp`                | 536×430      | From PDF (low-res) | content/en/gallery.ts                     |
| `/images/gallery/pipe-laying.webp`                 | 536×430      | From PDF (low-res) | content/en/gallery.ts                     |
| `/images/gallery/pipe-offloading.webp`             | 516×302      | From PDF (low-res) | content/en/gallery.ts                     |
| `/images/gallery/process-tanks-and-piping.webp`    | 516×302      | From PDF (low-res) | content/en/gallery.ts                     |
| `/images/gallery/rebar-cages.webp`                 | 428×152      | From PDF (low-res) | content/en/gallery.ts                     |
| `/images/gallery/rebar-column-starter.webp`        | 517×644      | From PDF (low-res) | content/en/gallery.ts                     |
| `/images/gallery/rebar-mat.webp`                   | 518×644      | From PDF (low-res) | content/en/gallery.ts                     |
| `/images/gallery/roller-compaction.webp`           | 536×430      | From PDF (low-res) | content/en/gallery.ts                     |
| `/images/gallery/site-grading.webp`                | 511×382      | From PDF (low-res) | content/en/gallery.ts                     |
| `/images/gallery/site-levelling.webp`              | 536×430      | From PDF (low-res) | content/en/gallery.ts                     |
| `/images/gallery/skid-units.webp`                  | 516×302      | From PDF (low-res) | content/en/gallery.ts                     |
| `/images/gallery/steel-structure-fabrication.webp` | 516×302      | From PDF (low-res) | content/en/gallery.ts                     |
| `/images/gallery/transmission-corridor.webp`       | 263×361      | From PDF (low-res) | content/en/gallery.ts, content/en/home.ts |
| `/images/gallery/trench-excavation.webp`           | 536×430      | From PDF (low-res) | content/en/gallery.ts                     |
| `/images/gallery/water-bowser.webp`                | 373×299      | From PDF (low-res) | content/en/gallery.ts                     |

### `og/`: recommended 1200×630 JPG

| File                      | Current size | Status    | Used in         |
| ------------------------- | ------------ | --------- | --------------- |
| `/images/og/og-image.jpg` | 1200×630     | Generated | data/company.ts |

### `brand/`: recommended 512×512 PNG

| File                         | Current size | Status    | Used in            |
| ---------------------------- | ------------ | --------- | ------------------ |
| `/images/brand/logo-512.png` | 512×512      | Generated | vite-plugin-seo.ts |
