---
id: 2025-10-16-agent-skills
date: 2025-10-16
title: Agent Skills
area: API and Apps
status: beta
status_reason: Public beta. Skills can run code, so install only ones you wrote or trust.
sources:
  - https://www.anthropic.com/news/skills
tags: [skills, agents, code-execution]
added_by: manual
last_checked: 2026-11-14
---

## What's new
Skills are folders of instructions, scripts and files. Claude loads one only when a task needs it, across the apps, Claude Code and the API.

## When is it safe to use
Public beta. Skills can run code, so install only ones you wrote or trust, and keep code execution limited to what the skill needs.

## Use case and value
Package your team's report template and brand rules as a skill. Value: consistent output every time without pasting long prompts.

## How to implement
Write a `SKILL.md` with a name and description, add any scripts, then upload it in Settings or with the Skills API.
