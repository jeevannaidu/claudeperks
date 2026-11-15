---
id: 2026-10-07-claude-haiku-5-5
date: 2026-10-07
title: Claude Haiku 5.5
area: Models
status: ga
status_reason: "Launched on the Claude API and cloud providers with no beta label."
sources:
  - https://platform.claude.com/docs/en/release-notes/overview
  - https://support.claude.com/en/articles/12138966-release-notes
tags: [model, haiku, latency]
added_by: daily-job
last_checked: 2026-11-15
confidence: high
---

## What's new
Claude Haiku 5.5 (`claude-haiku-5-5`) is described as the most capable model tuned for high-volume and latency-sensitive work. It has a 1M token context window, 128k max output tokens, and adaptive thinking with the `effort` parameter. It is on the Claude API, Claude in Amazon Bedrock, Claude Platform on AWS, Claude Models on Google Cloud and Claude in Microsoft Foundry.

## When is it safe to use
Generally available. Code written for Claude Haiku 4.5 can break on Haiku 5.5: the release notes list manual extended thinking (`budget_tokens`) and sampling parameter changes among the differences, so test before switching.

## Use case and value
Example: a support triage pipeline that classifies thousands of tickets an hour can use Haiku 5.5 for speed and cost.

## How to implement
Set the model to `claude-haiku-5-5`. Read What's new in Claude Haiku 5.5, linked from the [Claude Platform release notes](https://platform.claude.com/docs/en/release-notes/overview), before migrating from Haiku 4.5.
