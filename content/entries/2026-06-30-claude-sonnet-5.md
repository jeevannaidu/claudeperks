---
id: 2026-06-30-claude-sonnet-5
date: 2026-06-30
title: Claude Sonnet 5
area: Models
status: ga
status_reason: "Launched on the Claude API with no beta label."
sources:
  - https://platform.claude.com/docs/en/release-notes/overview
  - https://support.claude.com/en/articles/12138966-release-notes
tags: [model, sonnet]
added_by: daily-job
last_checked: 2026-11-15
confidence: high
---

## What's new
Claude Sonnet 5 (`claude-sonnet-5`) is the next generation of the Sonnet family. It supports a 1M token context window and 128k max output tokens, with the same tools and platform features as Sonnet 4.6 except Priority Tier. Introductory pricing of $2 / $10 per MTok became the standard price on 2026-08-10.

## When is it safe to use
Generally available. Three behavior changes apply when migrating from Sonnet 4.6, including adaptive thinking being on by default and manual extended thinking changing. Priority Tier is not available on this model.

## Use case and value
Example: a team moving agent workloads from Sonnet 4.6 gets a stronger model at the $2 / $10 price.

## How to implement
Set the model to `claude-sonnet-5`. See the migration notes in the [Claude Platform release notes](https://platform.claude.com/docs/en/release-notes/overview).
