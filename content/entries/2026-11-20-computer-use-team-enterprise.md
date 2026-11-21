---
id: 2026-11-20-computer-use-team-enterprise
date: 2026-11-20
title: Computer use in Claude Desktop for Team and Enterprise plans
area: Apps
status: beta
status_reason: "The apps release notes say computer use is available in beta on Team and Enterprise plans and is rolling out gradually."
sources:
  - https://support.claude.com/en/articles/12138966-release-notes
  - https://support.claude.com/en/articles/18483812-set-up-computer-use-for-team-and-enterprise-plans
tags: [apps, computer-use, enterprise, admin]
added_by: daily-job
last_checked: 2026-11-21
confidence: high
---

## What's new
Computer use lets Claude see a user's screen and work in the desktop apps they allow. It works in the new Claude experience in Claude Desktop. It also works from Claude on the web and Claude Mobile when the Computer access setting is on. It is now in beta on Team and Enterprise plans.

## When is it safe to use
Beta, off by default, and rolling out gradually. The help center warns there is no sandbox between Claude and the user's apps, so on-screen content could trigger unintended actions. Screenshots are saved with the chat. Organizations with the HIPAA-ready configuration, ZDR for Claude Code, CMEK, or FERPA or K-12 settings cannot turn it on.

## Use case and value
Example: an operations analyst asks Claude to copy figures from a legacy desktop app into a spreadsheet when that app has no connector.

## How to implement
An Owner or Primary Owner turns on Chat and Cowork unified, then opens Organization settings > Capabilities and turns on Computer use under Claude Desktop. Enterprise plans can limit it to chosen roles. Needs macOS 14 or later, or Windows. See [Set up computer use for Team and Enterprise plans](https://support.claude.com/en/articles/18483812-set-up-computer-use-for-team-and-enterprise-plans).
