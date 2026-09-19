# Pipeline

Ownership: **Owner Anvil · Lead Forge · CoS Nyborg · Merge Nye**.

This repo is the **STEC fundraising microsite** (Build Tomorrow). It is not Satellite Lab and not Agent Arena.

## Phase 1 — four-page static shell (this PR)

Ship a Vercel-playable Astro advertisement: Home, Technology Fund, Design Tomorrow, Hardware & Compute. Config-driven placeholders for SCAD Giving URLs, photos, logos, raised total, and the form endpoint. Look tokens locked. Copy locked where provided; bracketed placeholders where values are missing.

Success for Phase 1:

1. `npm run build` emits static HTML (`dist/`) suitable for SCAD hosting export.
2. All four routes render. Nav, white Donate CTA, and page CTAs match the brief.
3. `src/config.ts` is the only place to change funds, amounts, courses, tiers, wishlist, logos, photos.
4. No third-party scripts except Google Fonts and the form handler.

## Parked (do not pull forward)

| Later | Intent | Explicitly not now |
| --- | --- | --- |
| Live SCAD Giving URLs | Replace placeholders in config | Do not invent URLs |
| Photography / logos | Swap `photos{}` and `sponsorLogos[]` | Dashed `[caption]` slots |
| Form endpoint | Real Formspree / Netlify Forms ID | Placeholder noted in config |
| Raised total | Advancement number | `$[RAISED_AMOUNT]` |
| SCAD production host | Static export of `dist/` | This playground is Vercel, `base: '/'` |

## Merge gate

Nye merges. Agents open PRs and stop.
