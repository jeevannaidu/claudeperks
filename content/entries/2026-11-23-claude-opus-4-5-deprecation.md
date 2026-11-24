---
id: 2026-11-23-claude-opus-4-5-deprecation
date: 2026-11-23
title: Claude Opus 4.5 deprecated, retiring January 22, 2027
area: Models
status: deprecated
status_reason: Anthropic announced the deprecation on November 23, 2026, with retirement on the Claude API scheduled for January 22, 2027.
sources:
  - https://platform.claude.com/docs/en/release-notes/overview
  - https://platform.claude.com/docs/en/about-claude/model-deprecations
tags: [models, deprecation, migration]
added_by: daily-job
last_checked: 2026-11-24
confidence: high
---

## What's new
Anthropic announced the deprecation of Claude Opus 4.5 (`claude-opus-4-5-20251101` and `claude-opus-4-5`). Retirement on the Claude API is scheduled for January 22, 2027. The recommended replacement is Claude Opus 5.5 (`claude-opus-5-5`).

## When is it safe to use
Deprecated. The model still works today, but requests will fail after the retirement date. The deprecations page says other platforms and Claude Code may have different dates. Check its Overview section for the dates that apply to you.

## Use case and value
Example: a team with a production service pinned to `claude-opus-4-5-20251101` has until January 22, 2027 to move. Moving early leaves time to test prompts and settings against Opus 5.5.

## How to implement
1. Search your code and configs for `claude-opus-4-5-20251101` and `claude-opus-4-5`.
2. Change the model ID to `claude-opus-5-5`.
3. Follow the migration steps and re-test your prompts.

See [Migrating from Claude Opus 4.5 or earlier](https://platform.claude.com/docs/en/models/opus-5-5/migration-guide#migrating-from-claude-opus-45) and [Model deprecations](https://platform.claude.com/docs/en/about-claude/model-deprecations).
