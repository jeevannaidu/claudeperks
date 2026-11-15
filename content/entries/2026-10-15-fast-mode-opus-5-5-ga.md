---
id: 2026-10-15-fast-mode-opus-5-5-ga
date: 2026-10-15
title: Fast mode leaves research preview for Opus 5.5
area: API and Apps
status: ga
status_reason: "The release note says it is out of research preview and no longer needs access requested."
sources:
  - https://platform.claude.com/docs/en/release-notes/overview
tags: [fast-mode, opus]
added_by: daily-job
last_checked: 2026-11-15
confidence: high
---

## What's new
Fast mode for Claude Opus 5.5 no longer needs an access request and no longer needs the `fast-mode-2026-02-01` beta header; requests that still send it keep working. Opus 5.5 now has a default fast mode rate limit in the Start, Build and Scale usage tiers. Fast mode for Claude Opus 5 and Claude Opus 4.8 remains in research preview.

## When is it safe to use
Generally available for Opus 5.5. For Opus 5 and 4.8 it is still a research preview, so keep sending the beta header there.

## Use case and value
Example: a latency-sensitive assistant on Opus 5.5 can turn on fast mode without waiting for approval.

## How to implement
Send `speed: "fast"` on `claude-opus-5-5` requests. See the [Claude Platform release notes](https://platform.claude.com/docs/en/release-notes/overview).
