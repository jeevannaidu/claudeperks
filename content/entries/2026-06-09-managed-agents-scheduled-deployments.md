---
id: 2026-06-09-managed-agents-scheduled-deployments
date: 2026-06-09
title: Scheduled deployments for Managed Agents
area: API and Apps
status: ga
status_reason: "Announced with no beta label. It reached Claude Platform on AWS on 2026-10-14."
sources:
  - https://platform.claude.com/docs/en/release-notes/overview
tags: [managed-agents, scheduling, cron]
added_by: daily-job
last_checked: 2026-11-15
confidence: high
---

## What's new
Claude Managed Agents supports scheduled deployments, so you can run sessions on a cron schedule without managing your own scheduler. On 2026-10-14 the feature also became available on Claude Platform on AWS.

## When is it safe to use
Announced without a beta label. A scheduled session runs unattended, so pair it with a session budget.

## Use case and value
Example: an agent that produces a weekly competitor summary runs every Monday morning with no server of your own.

## How to implement
Create a scheduled deployment with a cron schedule for the agent. See the [Claude Platform release notes](https://platform.claude.com/docs/en/release-notes/overview).
