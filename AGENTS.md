# Agents

## Ownership

| Role | Name | Notes |
| --- | --- | --- |
| Owner | Anvil | Product / STEC fundraising microsite |
| Lead | Forge | Implementation lead |
| Chief of Staff | Nyborg | Scope, park list, process |
| Merge | Nye | Only merge authority |

Nye merges. Do not merge from the agent side.

## What this is

**Build Tomorrow** is the STEC fundraising microsite for the SCAD School of Creative Technology. It is an advertisement, not a website. Every page moves a visitor to one white button that opens SCAD Giving.

This is **not** Satellite Lab. This is **not** Agent Arena. Do not pull copy, palette, or scope from those repos.

## Phase 1 (this repo)

Four-page Astro static shell:

- `/` Home
- `/technology` Technology Fund
- `/designtomorrow` Design Tomorrow sponsorship
- `/give` Hardware & Compute

Placeholders are allowed and expected: `TECH_FUND_URL`, `DT_FUND_URL`, photos, sponsor logos, raised total, form endpoint. Do not block on live SCAD Giving links.

## Park / out of scope

Do not start these.

- Blog, news, FAQ, login, accounts
- Payment processing on this site (SCAD Giving holds the gift)
- Carousels, popups, icon sets, illustrations, gradients
- Satellite Lab site work
- Agent Arena
- Inventing live fund URLs, raised totals, or photos

## Craft bar

Exact LOOK tokens. Archivo 400/600/800/900. White CTAs, never yellow buttons. One `h1` per page. Config in `src/config.ts` only. `astro build` must emit plain static HTML.
