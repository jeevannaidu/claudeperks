---
id: 2026-08-19-computer-use-ga-and-browser-use
date: 2026-08-19
title: Computer use out of beta, plus a browser use tool
area: API and Apps
status: ga
status_reason: "The release notes say the computer use tool is out of beta with no beta header. The browser use toolset launched the same day."
sources:
  - https://platform.claude.com/docs/en/release-notes/overview
tags: [computer-use, browser, tools]
added_by: daily-job
last_checked: 2026-11-15
confidence: high
---

## What's new
The computer use tool is out of beta on the Claude API as the `computer_toolset_20260801` toolset: no beta header, batch actions (several actions in one turn), zoom enabled by default, and per-member configuration through `configs`. A new browser use tool (`browser_toolset_20260801`) drives a browser that your application hosts. It reads the page itself (its accessibility tree, elements, forms and tabs) and adds element references, form input, tab management, download reporting and opt-in file upload. Both toolsets are available for Claude Fable 5, Mythos 5, Opus 5, Sonnet 5 and Opus 4.8.

## When is it safe to use
Generally available for computer use. Upgrading an existing integration changes the request shape and tool handling, so follow the migration guide. A tool that clicks and types in a real browser or desktop can take real actions, so run it in a sandbox or with an account that has limited rights.

## Use case and value
Example: an agent fills in a supplier's web form and downloads the invoice, working from the page structure instead of screenshots alone.

## How to implement
Declare `computer_toolset_20260801` or `browser_toolset_20260801` in your tools. For existing integrations, see Migrate from computer_20251124 in the [Claude Platform release notes](https://platform.claude.com/docs/en/release-notes/overview).
