# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server at localhost:5173
npm run build      # Type-check then bundle to dist/
npm run lint       # Run ESLint
npm run format     # Prettier format src/
npm run preview    # Preview production build locally
```

No test suite is configured.

## Architecture

Single-page React app that displays a filterable grid of Star Wars species. All data is static — no API calls.

**Data flow:**
- `src/data/species-data.ts` exports two arrays: `species` (547 entries) and `appearanceKey` (film/media lookup table mapping numeric keys to names)
- `src/App.tsx` holds all filter state and runs a chained `useMemo` filter over the species array
- Filtered results are passed as a `list` prop to `ImageList`, which renders the grid

**Filter state (all in App.tsx):**
- `search` — name prefix match (uppercased against stored names which are all-caps)
- `obscurityLevel` — slider from 1–6, shows species with `obscurity <= value`
- `appearanceFilter` — numeric key matching `species.appearance`; `0` means no filter

**Components:**
- `AppearanceFilter` — fixed-position floating button that opens a dropdown list of films/media. Manages its own open/closed state but lifts the selected value to App via `setFilter`
- `ObscurityFilter` — range slider, fully controlled from App
- `ImageList` — stateless, renders the filtered species grid
- `Header` — static, uses the Aurebesh font

**Shared types** live in `src/types.ts` (`ListItem` interface). The `appearanceKey` array uses a local interface defined in `species-data.ts`.

## Styling

Tailwind v4 via `@tailwindcss/vite`. Configuration is CSS-only — no `tailwind.config.js`.

**Theme tokens** (defined in `src/index.css` `@theme` block):
- Colors: `dark-grey`, `dark-blue`, `medium-grey`, `light-grey`
- Fonts: `font-sans` (Din), `font-header` (Aurebesh)

**Custom CSS class** `.obscurity-level` in `src/index.css` styles the range input thumb via browser pseudo-elements (`-webkit-slider-thumb`, `-moz-range-thumb`) — this cannot be done with Tailwind utilities.

**Fonts** are served from `public/fonts/` and loaded via `@font-face` in `src/index.css`.

## Deployment

Deployed to GitHub Pages at `www.galacticcompendium.com` via GitHub Actions (`.github/workflows/deploy.yml`). Triggers automatically on push to `main`. The `public/CNAME` file preserves the custom domain across deployments.
