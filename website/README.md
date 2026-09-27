# Awesome Nokia Web Platform

This directory contains the modern Astro web application for **[Awesome Nokia](https://andywhitaker.github.io/awesome-nokia/)**.

## 🚀 Quickstart

```bash
# 1. Install dependencies
npm ci

# 2. Run local development server
npm run dev

# 3. Typecheck and lint
npm run check

# 4. Build production static bundle
npm run build

# 5. Preview production build locally
npm run preview
```

## 🌐 Remote Development

The Astro server is configured in `astro.config.mjs` to bind to `0.0.0.0` with `allowedHosts: true`, enabling seamless remote access across private VPNs, tunnels, and local networks without host header restrictions.

## 🚢 Continuous Deployment (GitHub Pages)

Whenever changes are pushed to `main` within `website/**`, the GitHub Actions workflow at [`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml) automatically builds and deploys the static files to GitHub Pages at:

**`https://andywhitaker.github.io/awesome-nokia/`**
