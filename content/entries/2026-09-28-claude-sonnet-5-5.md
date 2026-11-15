---
id: 2026-09-28-claude-sonnet-5-5
date: 2026-09-28
title: Claude Sonnet 5.5
area: Models
status: ga
status_reason: "Launched on the Claude API and cloud providers with no beta label."
sources:
  - https://platform.claude.com/docs/en/release-notes/overview
  - https://support.claude.com/en/articles/12138966-release-notes
tags: [model, sonnet]
added_by: daily-job
last_checked: 2026-11-15
confidence: high
---

## What's new
Claude Sonnet 5.5 (`claude-sonnet-5-5`) is the second model in the Claude 5.5 family and a faster, lower-cost complement to Claude Opus 5.5. It is available on the Claude API, Claude in Amazon Bedrock, Claude Platform on AWS, Claude Models on Google Cloud and Claude in Microsoft Foundry. On 2026-10-07 the price of prompt cache reads dropped from $0.20 to $0.10 per million tokens.

## When is it safe to use
Generally available. Code written for Claude Sonnet 5 can break on Sonnet 5.5 in five ways listed in the release notes, including how to turn off up-front thinking, so test before switching.

## Use case and value
Example: a coding assistant that needs strong output at lower cost than Opus can run on Sonnet 5.5, with cached prompts at the lower read price.

## How to implement
Set the model to `claude-sonnet-5-5`. See the Sonnet 5.5 model page and migration notes linked from the [Claude Platform release notes](https://platform.claude.com/docs/en/release-notes/overview).
