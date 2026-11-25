---
id: 2026-11-24-connector-file-transfers
date: 2026-11-24
title: Send files to connected apps and save files from them
area: Apps
status: beta
status_reason: "The apps release notes and help article say file transfers with connectors are in beta."
sources:
  - https://support.claude.com/en/articles/12138966-release-notes
  - https://support.claude.com/en/articles/18534325
tags: [apps, connectors, files]
added_by: daily-job
last_checked: 2026-11-25
confidence: high
---

## What's new
Claude can send a file to an app you have connected, and save a file that the app offers. It works in Claude on the web, Claude Desktop, Claude for iOS and Android, and Claude Code. It does not work in incognito chats or scheduled tasks.

## When is it safe to use
Beta, rolling out gradually. It is on for Pro, Max, and Ultra plans. On Team and Enterprise plans it stays off until an owner turns it on. The app must be in the connectors directory and its developer must have added file support. Custom connectors and MCP servers do not work. Claude asks before sending the first file to each app.

## Use case and value
Example: Claude uploads a presentation it just made to your cloud storage. It can also pull in a contract so you can review it together.

## How to implement
Connect the app from the connectors directory. Attach a file or tell Claude which file to send, and say where it goes, for example "Put this in my Receipts folder." To save a file, ask Claude for it. See [Send files to connected apps and save files from them](https://support.claude.com/en/articles/18534325).
