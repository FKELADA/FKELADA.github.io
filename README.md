# fkelada.github.io

Fadi Kelada's personal site: projects, CV and blog, in English (at the root) and French (under `/fr/`). Built with [Astro](https://astro.build) and published on GitHub Pages at **https://fkelada.github.io/**.

## Run it

```bash
npm ci
npm run dev       # http://localhost:4321 (the hub uses port 5210)
npm run build     # type check + static build into dist/
npm run preview   # serve dist/
```

Every push to `main` builds and deploys the site (`.github/workflows/deploy.yml`).

## Content

| What | Where | Edited from |
|---|---|---|
| Blog posts | `src/content/blog/en/*.md`, `src/content/blog/fr/*.md` | Drafts in Fadi-Global `blog-drafts/`, published with `/post publish` |
| CV (EN, FR) | `src/data/cv.en.json`, `src/data/cv.fr.json` | Generated from Fadi-Global `cv/cv.yaml` by `node hub/cli.mjs sync-site` |
| CV PDFs | `public/cv/Fadi-Kelada-CV-en.pdf`, `-fr.pdf` | Compiled from the AltaCV LaTeX template by the same `sync-site` |
| Projects | `src/data/projects.json` | Generated from Fadi-Global `projects.yaml` (entries with `showcase: true`) |
| Portrait | `src/assets/portrait.jpg` | Copied by `sync-site` |
| Interface text | `src/i18n.ts` | By hand |

Don't edit the generated files by hand: the next `sync-site` overwrites them.

A post's front matter:

```yaml
---
title: My post
description: One sentence for lists and link previews.
date: 2026-10-15
lang: en              # en | fr
translationOf: mon-article   # slug of the other-language version, if any
tags: [power-systems]
---
```
