# Galactic Compendium

Welcome to the Galactic Compendium

![The Archives](public/archives.png)

A searchable, filterable reference guide to Star Wars species, built as a client-side React application.

Live at [www.galacticcompendium.com](https://www.galacticcompendium.com)

## Technologies

### React 19
The UI is built with React and broken down into functional components. Modern hooks such `useMemo` are used to enhance the performance.

### TypeScript 6
The entire codebase is written in TypeScript and configured using the `bundler` module resolution mode, which is optimised for Vite-based projects.

### Vite 8
Vite handles the development server and production bundling. TypeScript compilation is handled by Vite at build time via the `@vitejs/plugin-react` plugin, which uses [Oxc](https://oxc.rs) for fast JSX transforms.

### Tailwind CSS v4
Styling uses Tailwind CSS v4, configured entirely in CSS with no `tailwind.config.js`. Theme tokens (colors and fonts) are defined using `@theme` in `src/index.css`.

### ESLint + Prettier
ESLint is configured with `typescript-eslint`, `eslint-plugin-react-hooks`, and `eslint-plugin-react-refresh`. Prettier handles code formatting with `eslint-config-prettier` used to disable any conflicting ESLint rules.

### GitHub Actions + GitHub Pages
The app is deployed to GitHub Pages via a GitHub Actions workflow that triggers on every push to `main`.

### Claude Code
This app was completely built by me while using claude code as a tool to enhance and expedite the development process. The app has a `CLAUDE.md` config that gives Claude context about the app.