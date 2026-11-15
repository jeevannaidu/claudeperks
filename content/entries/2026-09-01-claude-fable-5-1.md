---
id: 2026-09-01-claude-fable-5-1
date: 2026-09-01
title: Claude Fable 5.1 and Claude Mythos 5.1
area: Models
status: ga
status_reason: "Launched on the Claude API and cloud providers with no beta label. Mythos 5.1 is for Project Glasswing participants."
sources:
  - https://platform.claude.com/docs/en/release-notes/overview
  - https://support.claude.com/en/articles/12138966-release-notes
tags: [model, fable, mythos]
added_by: daily-job
last_checked: 2026-11-15
confidence: high
---

## What's new
Claude Fable 5.1 (`claude-fable-5-1`) succeeds Fable 5 for long-running agentic coding, knowledge work and research. Claude Mythos 5.1 (`claude-mythos-5-1`) is for Project Glasswing participants. Both support a 1M token context window by default, 128k max output tokens and always-on adaptive thinking. They cost $10 / $50 per MTok, the same as Fable 5, with cache reads cut to $0.25 per MTok.

## When is it safe to use
Generally available for Fable 5.1. Both models require 30-day data retention and are not available under zero data retention unless Anthropic expressly authorizes it. The `tool_choice` types `any` and `tool` return a 400 error on these models.

## Use case and value
Example: a research agent that reads many documents benefits from the cheaper cache reads when it re-uses the same context.

## How to implement
Set the model to `claude-fable-5-1`. See the migration notes in the [Claude Platform release notes](https://platform.claude.com/docs/en/release-notes/overview) for the `tool_choice` and thinking changes.
