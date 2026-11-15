---
id: 2026-06-09-claude-fable-5
date: 2026-06-09
title: Claude Fable 5 and Claude Mythos 5
area: Models
status: ga
status_reason: "Launched with no beta label. Mythos 5 is for Project Glasswing participants. Access was suspended on 2026-06-12 and restored on 2026-07-01."
sources:
  - https://platform.claude.com/docs/en/release-notes/overview
  - https://support.claude.com/en/articles/12138966-release-notes
tags: [model, fable, mythos, access]
added_by: daily-job
last_checked: 2026-11-15
confidence: high
---

## What's new
Claude Fable 5 (`claude-fable-5`) is the most capable model open to all customers, alongside Claude Mythos 5 (`claude-mythos-5`) for Project Glasswing participants. Both support a 1M token context window by default, 128k max output tokens and always-on adaptive thinking. Fable 5 runs safety classifiers on requests and during response generation. Access to both was suspended on 2026-06-12 and restored on 2026-07-01.

## When is it safe to use
Generally available now. It requires 30-day data retention and is not available under zero data retention. Adaptive thinking is the only mode, so `thinking: {"type": "disabled"}` is not accepted. The suspension in June shows access can change quickly, so have a fallback model.

## Use case and value
Example: use Fable 5 for hard reasoning tasks and keep a smaller model as a fallback if access is paused again.

## How to implement
Set the model to `claude-fable-5`. See Claude Fable 5 in the [Claude Platform release notes](https://platform.claude.com/docs/en/release-notes/overview).
