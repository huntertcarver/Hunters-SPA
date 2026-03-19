# Hunters SPA

Personal portfolio SPA built with React, TypeScript, Mantine, and GitHub Pages deployment.

## Tech Stack

- React 18 + TypeScript
- Create React App (`react-scripts`)
- Mantine UI
- React Router (HashRouter for GitHub Pages compatibility)
- Jest + React Testing Library

## Prerequisites

- Node.js 18+ (Node 20 recommended)
- npm (this repo is standardized on npm)

## Setup

Install dependencies:

```bash
npm install
```

## Run Locally

```bash
npm start
```

App runs at `http://localhost:3000`.

## Scripts

- `npm start`: Run development server.
- `npm run build`: Build production bundle to `build/`.
- `npm run deploy`: Deploy `build/` to GitHub Pages.
- `npm test`: Run tests in watch mode.
- `npm run test:ci`: Run tests once for CI usage.
- `npm run lint`: Lint TypeScript/TSX sources.
- `npm run typecheck`: Run TypeScript compiler checks.
- `npm run format`: Apply Prettier formatting.
- `npm run format:check`: Verify formatting.
- `npm run check`: Run lint + typecheck + CI tests.

## Project Structure

- `src/Components`: reusable UI components
- `src/Pages`: top-level routed pages
- `src/DynamicPages`: dynamic route views
- `src/Data`: static content/data modules
- `src/styles`: shared styling tokens/helpers

## Deployment

This project uses `gh-pages`, a `public/CNAME` file, and the `homepage` value in `package.json`.

The published production site is `https://huntertcarver.com`.

Deploy with:

```bash
npm run deploy
```
