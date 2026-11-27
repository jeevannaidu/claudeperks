---
id: 2026-11-23-claude-opus-4-5-retirement
date: 2026-11-23
title: Claude Opus 4.5 deprecated, retiring January 22, 2027
area: Models
status: deprecated
status_reason: "The release notes and the deprecations page both say Claude Opus 4.5 is deprecated, with retirement on the Claude API on January 22, 2027."
sources:
  - https://platform.claude.com/docs/en/release-notes/overview
  - https://platform.claude.com/docs/en/about-claude/model-deprecations
tags: [deprecation, models, migration]
added_by: daily-job
last_checked: 2026-11-27
confidence: high
---

## What's new
Anthropic announced the deprecation of Claude Opus 4.5 (`claude-opus-4-5-20251101` and `claude-opus-4-5`). Retirement on the Claude API is scheduled for January 22, 2027. The recommended replacement is Claude Opus 5.5 (`claude-opus-5-5`). Dates on other platforms can differ.

## When is it safe to use
Deprecated. The model still works until the retirement date, then requests to it will fail. The deprecations page says to check the dates that apply on other platforms.

## Use case and value
Example: a team with a nightly job pinned to `claude-opus-4-5-20251101` switches it to `claude-opus-5-5` and tests it before January 22, 2027.

## How to implement
Change the model ID to `claude-opus-5-5` and run your tests. Follow the section on migrating from Claude Opus 4.5 or earlier in the [Claude Opus 5.5 migration guide](https://platform.claude.com/docs/en/models/opus-5-5/migration-guide#migrating-from-claude-opus-45).
