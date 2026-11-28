---
id: 2026-11-23-claude-opus-4-5-deprecated
date: 2026-11-23
title: Claude Opus 4.5 deprecated, retires January 22, 2027
area: Models
status: deprecated
status_reason: Anthropic notified developers on November 23, 2026 that `claude-opus-4-5-20251101` retires on January 22, 2027.
sources:
  - https://platform.claude.com/docs/en/about-claude/model-deprecations
tags: [models, deprecation, migration]
added_by: daily-job
last_checked: 2026-11-28
confidence: high
---

## What's new
Claude Opus 4.5 is deprecated on the Claude API. Retirement is set for January 22, 2027. The retirement covers `claude-opus-4-5-20251101` and `claude-opus-4-5`, the same model's ID without a date. The recommended replacement is `claude-opus-5-5`.

## When is it safe to use
Deprecated. It still works until January 22, 2027, then requests will fail. These dates apply to Anthropic-operated platforms. Amazon Bedrock and Claude Models on Google Cloud (Google managed) set their own schedules.

## Use case and value
Example: a team with an agent pinned to `claude-opus-4-5-20251101` moves it to `claude-opus-5-5` in January, before requests start failing.

## How to implement
Change the model ID to `claude-opus-5-5` and re-run your evals. Follow the [Opus 5.5 migration guide](https://platform.claude.com/docs/en/models/opus-5-5/migration-guide#migrating-from-claude-opus-45) and the [deprecations page](https://platform.claude.com/docs/en/about-claude/model-deprecations).
