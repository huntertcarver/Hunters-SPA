# AGENTS.md

## Cursor Cloud specific instructions

This is a React 18 + TypeScript portfolio SPA (Create React App). It is a single-service, fully client-side application with no backend, database, or external API dependencies.

### Quick reference

| Action | Command |
|---|---|
| Install deps | `npm install` |
| Dev server | `npm start` (port 3000) |
| Lint | `npm run lint` |
| Typecheck | `npm run typecheck` |
| Tests (CI) | `npm run test:ci` |
| Full check | `npm run check` (lint + typecheck + tests) |
| Build | `npm run build` |
| Format | `npm run format` |

See `README.md` for full script list.

### Gotchas

- **WebGL / Three.js**: The `Ripple` and `ParticlesComponent` components use WebGL (Three.js / tsparticles). These may fail silently or crash the browser tab in headless / GPU-less environments. The app still functions without them — navigation, content, and theme toggling all work.
- **About page memory**: The About page loads a PDF viewer (`react-pdf`) and multiple image carousels. In memory-constrained environments this can cause Chrome to crash (`ERR_INSUFFICIENT_RESOURCES`). Refreshing the tab usually recovers.
- **HashRouter**: The app uses `HashRouter` (routes are `/#/about`, `/#/projects`, etc.) for GitHub Pages compatibility. Direct URL paths like `/about` will not work.
