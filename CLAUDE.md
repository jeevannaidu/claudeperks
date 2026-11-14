# Claude Perks: daily update job

This repository holds a timeline website of new Claude capabilities. A scheduled
Claude session runs the job below once a day. When you are that session, follow
these rules exactly. The site layout lives outside `content/` and the job never
edits it.

## The job, step by step

1. Create a branch `update/YYYY-MM-DD` (today's date, UTC) from `master`.
2. Read every source in the table below. If one fails to load, note it and go on.
3. Split each source into items and give each one an ID (see "Item IDs").
4. Drop every item whose ID is already in `data/seen.json`.
5. Merge items that describe the same feature and are dated within 3 days of each
   other into one entry with several `sources`.
6. Skip noise (see "What is not an entry"). Record skipped IDs in `seen.json`
   with `"outcome": "skipped"` and a short `reason`.
7. For each remaining item, write one file in `content/entries/` (see "Entry format").
   If an item changes the status of an existing entry (beta to GA, a deprecation),
   edit that entry's `status`, `status_reason` and `last_checked` instead of adding one.
8. Add every handled ID to `data/seen.json` with `"outcome": "added"` or `"updated"`
   and the entry's file name.
9. Run `node scripts/validate.mjs`. Fix every error it reports.
10. If nothing was added or updated, stop: no commit, no pull request. Report "nothing new".
11. Otherwise commit, push, and open a pull request to `master` titled
    `Timeline update YYYY-MM-DD: N new, M updated`. The description lists:
    - entries with `confidence: low` first, each with why;
    - every new or changed entry: title, status, first source link;
    - any source that failed to load.
12. Never merge the pull request yourself. Jeevan reviews and merges.

## Sources

| key | URL | How to split into items |
| --- | --- | --- |
| news | https://www.anthropic.com/news | One item per article. Product and model announcements only; skip policy, research papers, company news unless they launch a capability. No RSS feed exists. |
| platform | https://platform.claude.com/docs/en/release-notes/overview | One item per bullet under each dated heading. |
| apps | https://support.claude.com/en/articles/12138966-release-notes | One item per feature under each dated heading. |
| claude-code | https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md | One item per `## <version>` block. Group all versions released on one day into one entry. |
| models | https://platform.claude.com/docs/en/models/overview | No dates. Compare with `data/snapshots/models.md`; each new or changed model row is an item. Update the snapshot. |
| deprecations | https://platform.claude.com/docs/en/about-claude/model-deprecations | No dates. Compare with `data/snapshots/deprecations.md`; each changed row is an item, usually an update to an existing entry. Update the snapshot. |

If the same source fails three runs in a row (check `data/source-health.json`),
say so at the top of the pull request: its URL has probably moved. Update
`data/source-health.json` every run: `{ "<key>": { "last_ok": "YYYY-MM-DD", "consecutive_failures": N } }`.

## Item IDs

- news: `news:<article-slug>` (last path part of the article URL)
- platform: `platform:<YYYY-MM-DD>:<slug-of-bullet-first-6-words>`
- apps: `apps:<YYYY-MM-DD>:<slug-of-feature-name>`
- claude-code: `claude-code:<version>`
- models: `models:<model-id>`
- deprecations: `deprecations:<model-id>:<retirement-date>`

## What is not an entry

- Claude Code versions whose changes are only bug fixes, performance or wording fixes.
- Typo or docs-only changes, pricing tweaks with no new capability, regional rollouts
  of something already on the site (update `last_checked` instead).
- Anything not from the six sources above.

## Entry format

File: `content/entries/YYYY-MM-DD-<slug>.md`. The date is the source's release
date, never the run date. `<slug>` is lowercase words joined by `-`.

```markdown
---
id: 2026-11-10-example-feature
date: 2026-11-10
title: Short name of the capability
area: API and Apps            # Models | API and Apps | Claude Code | Apps
status: beta                  # ga | beta | preview | deprecated
status_reason: Released behind the beta header `example-2026-11-10`.
sources:
  - https://platform.claude.com/docs/en/release-notes/overview
tags: [tools, agents]
added_by: daily-job
last_checked: 2026-11-12
confidence: high              # high | low
---

## What's new
Two or three plain sentences. Where it is available (API, claude.ai, Claude Code,
Bedrock, Vertex). Names and model IDs exactly as the source writes them.

## When is it safe to use
Start with the verdict word (Generally available, Beta, Research preview, Deprecated)
taken from the source's own wording, then why: limits, data handling, plan
requirements, retirement dates the docs state.

## Use case and value
One concrete scenario, labelled "Example:", and what it saves or enables. No
invented numbers.

## How to implement
The minimal steps: the setting to turn on, the API parameter, or a short code
snippet copied or adapted from the official docs. End with a link to that docs page.
```

Rules for every entry:
- Write only what the source pages and the docs they link to say. If a fact could
  not be confirmed, leave it out, or set `confidence: low` and say why in the PR.
- `status` comes from the source's wording: "generally available" -> ga,
  "beta" or a beta header -> beta, "research preview" or "preview" -> preview,
  deprecated or retired -> deprecated.
- Plain language, sentences under 25 words, no hype words ("revolutionary", "game-changing").

## data/seen.json

An array, newest first:

```json
[{ "id": "claude-code:2.1.322", "first_seen": "2026-11-12", "outcome": "added", "entry": "2026-11-12-claude-code-fast-mode-vertex.md" }]
```

`outcome` is `added`, `updated`, `skipped` (with `reason`) or `rejected`. When
Jeevan closes a pull request without merging, the next run marks its IDs
`rejected` so they are never proposed again: check closed, unmerged
`update/*` pull requests from the last 7 days with `gh pr list --state closed`.

## Backfill run

When asked for a backfill with a start date, do the same steps for every item
dated on or after that date, on branch `backfill/<start-date>`, in one pull request.
