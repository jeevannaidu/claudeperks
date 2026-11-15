---
id: 2026-07-24-claude-opus-5
date: 2026-07-24
title: Claude Opus 5
area: Models
status: ga
status_reason: "Launched on the Claude API and cloud providers with no beta label."
sources:
  - https://platform.claude.com/docs/en/release-notes/overview
  - https://support.claude.com/en/articles/12138966-release-notes
tags: [model, opus, effort]
added_by: daily-job
last_checked: 2026-11-15
confidence: high
---

## What's new
Claude Opus 5 (`claude-opus-5`) is described as a step-change improvement over Opus 4.8. It supports a 1M token context window, 128k max output tokens and thinking on by default, at $5 / $25 per MTok, the same as Opus 4.8. Effort is the primary control for steering it, across the full ladder from low to higher levels.

## When is it safe to use
Generally available. Disabling thinking is allowed only at effort high or below, so check any request that turns thinking off.

## Use case and value
Example: an agent that needs deeper reasoning on hard tasks can raise the effort level, and lower it for simple ones to save cost.

## How to implement
Set the model to `claude-opus-5` and tune the `effort` parameter. See Claude Opus 5 in the [models overview](https://platform.claude.com/docs/en/models/overview).
