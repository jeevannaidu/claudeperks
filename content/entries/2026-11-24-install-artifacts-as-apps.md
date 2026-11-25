---
id: 2026-11-24-install-artifacts-as-apps
date: 2026-11-24
title: Install artifacts as desktop apps
area: Apps
status: beta
status_reason: "The apps release notes say this feature is currently in beta."
sources:
  - https://support.claude.com/en/articles/12138966-release-notes
  - https://support.claude.com/en/articles/18516354-install-an-artifact-as-an-app
tags: [apps, artifacts, desktop]
added_by: daily-job
last_checked: 2026-11-25
confidence: high
---

## What's new
You can install an artifact that Claude makes as an app on your Mac or Windows computer. It gets its own window and icon. With your permission, it can interact with the operating system, such as running programs, reading files or sending notifications.

## When is it safe to use
Beta. It is rolling out on Free, Pro, Max, Ultra, Team, and Enterprise plans and needs Claude for Mac or Windows version 6.28899.0 or later. On Team plans it is on by default, but full computer access is off until an admin enables it. On Enterprise plans an owner must turn the feature on in Organization settings > Artifacts. An app must ask before it uses each operating system feature.

## Use case and value
Example: ask Claude for a small app that reminds you to stretch every hour. You keep it in the menu bar instead of re-opening a chat.

## How to implement
Describe the app in a chat. Open the artifact in the main Claude Desktop window, open its title menu, select "Install as app", then confirm. See [Install an artifact as an app](https://support.claude.com/en/articles/18516354-install-an-artifact-as-an-app).
