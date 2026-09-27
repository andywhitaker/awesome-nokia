# Awesome Nokia Web Platform

This directory contains the documentation web platform for **Awesome Nokia**, powered by [Zensical](https://zensical.org).

## 🚀 Quick Start (Local Development)

You can run the documentation platform locally using [uv](https://docs.astral.sh/uv/):

### Preview Development Server
```bash
uvx zensical serve
```
By default, the server runs at `http://127.0.0.1:8000` with live reload.

### Build Static Site
```bash
uvx zensical build
```
Static production output will be generated in `site/`.

## 📁 Directory Structure

```text
website/
├── docs/                  # Markdown source files, assets, and styles
│   ├── index.md           # Landing overview & ecosystem portals
│   ├── containerlab.md    # Containerlab tools & extensions
│   ├── srlinux.md         # SR Linux tools & libraries
│   ├── eda.md             # Event-Driven Automation tools
│   ├── nsp.md             # Network Services Platform telemetry & tools
│   ├── sros.md            # SROS tools & libraries
│   ├── networking.md      # Multi-platform networking tools
│   ├── apps.md            # Productivity utilities & desktop apps
│   ├── images/            # Brand logos & icons
│   ├── javascripts/       # Client-side card search navigation scripts
│   └── stylesheets/       # Custom theme CSS styling
├── zensical.toml          # Zensical platform configuration
└── README.md
```
