---
id: 2026-11-09-fast-mode-fable-5-2
date: 2026-11-09
title: Fast mode for Claude Fable 5.2
area: API and Apps
status: ga
status_reason: "Launched with no beta header on the Claude API."
sources:
  - https://platform.claude.com/docs/en/release-notes/overview
tags: [fast-mode, latency, pricing]
added_by: daily-job
last_checked: 2026-11-15
confidence: high
---

## What's new
Fast mode for Claude Fable 5.2 in Messages API requests on the Claude API delivers up to 2.5x higher output tokens per second. It costs $16 per MTok of input and $80 per MTok of output, twice the standard price.

## When is it safe to use
Generally available on the Claude API with no beta header. It doubles the per-token price, so use it where speed is worth the cost.

## Use case and value
Example: an interactive coding assistant that feels slow on long answers can switch to fast mode for the chat view and keep standard speed for background jobs.

## How to implement
Add `speed: "fast"` to your Messages API request on `claude-fable-5-2`. No beta header is needed. See the [Claude Platform release notes](https://platform.claude.com/docs/en/release-notes/overview).
