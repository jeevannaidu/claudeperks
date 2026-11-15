---
id: 2026-11-09-claude-fable-5-2
date: 2026-11-09
title: Claude Fable 5.2 and Claude Mythos 5.2
area: Models
status: ga
status_reason: "Launched on the Claude API and cloud providers with no beta label. Mythos 5.2 is limited to verified organizations."
sources:
  - https://platform.claude.com/docs/en/release-notes/overview
tags: [model, fable, mythos]
added_by: daily-job
last_checked: 2026-11-15
confidence: high
---

## What's new
Claude Fable 5.2 (`claude-fable-5-2`) is built for demanding reasoning and long-horizon agentic work. Claude Mythos 5.2 (`claude-mythos-5-2`) has the same capabilities but only for organizations verified through programs such as the Cyber Verification Program. Both have a 1M token context window, 128k max output tokens and always-on adaptive thinking. They cost $8 per MTok of input and $40 per MTok of output, down from $10 and $50 for the 5.1 models. Fable 5.2 is on the Claude API, Amazon Bedrock, Claude Platform on AWS, Claude Models on Google Cloud and Claude in Microsoft Foundry.

## When is it safe to use
Generally available for Fable 5.2. Check three things before switching. Both models require 30-day data retention and are not available under zero data retention unless Anthropic expressly authorizes it. Both enforce a prefix check, so editing the system prompt, tools or an earlier message and then sending back a thinking block from a later turn returns a 400 error. Thinking blocks work only in the account that produced them, or a linked account.

## Use case and value
Example: a team running long coding or research agents on Fable 5.1 can move to 5.2 and pay about 20% less per token ($8 against $10 for input).

## How to implement
Set the model to `claude-fable-5-2` in your Messages API request. Review the migration notes in the [Claude Platform release notes](https://platform.claude.com/docs/en/release-notes/overview) for the prefix check, computer use toolset and advisor tool changes.
