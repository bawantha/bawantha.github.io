# Bawantha Portfolio

This repository now uses [Hugo](https://gohugo.io/) with the [PaperMod](https://github.com/adityatelange/hugo-PaperMod) theme for the personal portfolio site.

## Structure

- `hugo.toml` contains the site configuration.
- `content/` contains the portfolio pages.
- `assets/css/extended/brand.css` adds a light custom visual layer on top of PaperMod.
- `themes/PaperMod` is tracked as a git submodule.

## Deploy

GitHub Pages is configured through `.github/workflows/pages.yml` and builds the site from Hugo on every push to `main`.
