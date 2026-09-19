# Build Tomorrow — Vercel playground

Fundraising microsite for the **SCAD School of Creative Technology**. An advertisement, not a website. Every page points at one white button that opens SCAD Giving.

This repo is the **Vercel play deploy** (`base: '/'`). It is not Satellite Lab and not Agent Arena.

**Phase 1 shell.** Fund URLs, photos, logos, and the raised total are placeholders. Real SCAD Giving links are coming — do not block on them.

## Run locally

Requires Node.js 22 or newer.

```bash
npm install
npm run dev
```

Dev server: [http://localhost:4321/](http://localhost:4321/)

```bash
npm run build
npm run preview
```

`npm run build` / `astro build` writes plain static HTML to `dist/` for SCAD hosting export.

## Change config

All visitor-facing numbers, URLs, courses, tiers, wishlist rows, logos, and photo paths live in **one file**:

[`src/config.ts`](src/config.ts)

| Key | What to put there |
| --- | --- |
| `TECH_FUND_URL` | SCAD Giving Technology Fund link (placeholder today) |
| `DT_FUND_URL` | SCAD Giving Design Tomorrow / sponsorship link (placeholder today) |
| `FORM_ENDPOINT` | Formspree form URL (`https://formspree.io/f/PLACEHOLDER` until live) |
| `FORM_NOTIFY_EMAIL` | Inbox the form handler should notify |
| `GIVING_CONTACT_EMAIL` | Footer contact |
| `NYE_EMAIL` | Internal owner mail |
| `RAISED_AMOUNT` | Display string until Advancement sends a number (`[RAISED_AMOUNT]`) |
| `GOAL_AMOUNT` | Numeric goal (renders as currency) |
| `DEADLINE_TEXT` | Goal / event deadline |
| `courses[]` | Sponsor-a-class cards (`$5,000` each) |
| `tiers[]` | Design Tomorrow sponsorship benefits |
| `wishlist[]` | Hardware & compute table |
| `sponsorLogos[]` | Logo wall. Empty `src` keeps `[Your logo here]` |
| `photos{}` | Photo slots. Empty `src` keeps a dashed `[caption]` |

SCAD Giving links are placeholders on purpose. When Advancement sends live URLs, paste them into `TECH_FUND_URL` and `DT_FUND_URL` and rebuild. Amount buttons append `?amount=` when the URL is not `#`.

## Swap a photo

1. Put the file in `public/photos/` (or any path under `public/`).
2. Set `src` on that slot in `photos{}`:

```ts
homeHero: {
  src: '/photos/applied-ai-classroom.jpg',
  caption: '[Students in the Applied AI classroom]',
},
```

Leave `src: ''` to keep the dashed placeholder. Photos are full-bleed inside the 80px page gutter, no radius. Do not invent photography.

## Add a sponsor logo

1. Put the file in `public/logos/`.
2. Replace a `sponsorLogos[]` entry:

```ts
{ name: 'Example Co.', src: '/logos/example.svg' }
```

Empty `src` keeps the six-up `[Your logo here]` wall.

## Deploy

This playground is hosted at the **site root** (`base: '/'`).

1. `npm run build` — confirm `dist/` is static HTML/CSS/JS only.
2. Import **NyeGuy/build-tomorrow-play** in Vercel (Astro, output `dist`). Do not import until `main` has this site.
3. For SCAD hosting, upload or rsync `dist/` as a static export. No server runtime.

Form submissions use Formspree (or Netlify Forms). Until `FORM_ENDPOINT` is a real ID, the `/give` forms show an inline success message and do not send.

## Stack

- Astro, `output: 'static'`, `base: '/'`
- Tailwind CSS v4 with locked hex tokens
- Archivo 400/600/800/900 (Google Fonts)
- No third-party scripts except Google Fonts and the form handler
