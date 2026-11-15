# Claude Perks

A timeline of new Claude capabilities: what shipped, whether it is safe to use and why, a real use case, and how to implement it. Layout: release log, one scrolling column grouped by day with area, status and text filters.

- `content/entries/*.md`: one file per capability, written by the daily job (see `CLAUDE.md`).
- `node scripts/validate.mjs`: checks the entries.
- `node build.mjs`: validates the entries it reads and writes `site/entries.json`.
- `site/`: the static site (`index.html` reads `entries.json`).

## Preview locally

    node build.mjs examples/entries
    python3 -m http.server -d site 8000

## Deploy (Cloudflare Pages)

Build command `node build.mjs`, output directory `site`.
