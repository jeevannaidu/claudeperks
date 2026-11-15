---
id: 2026-08-07-managed-agents-budget-and-advisor
date: 2026-08-07
title: Session budgets and advisors for Managed Agents
area: API and Apps
status: ga
status_reason: "Announced with no beta label in the release notes."
sources:
  - https://platform.claude.com/docs/en/release-notes/overview
tags: [managed-agents, cost-control, advisor]
added_by: daily-job
last_checked: 2026-11-15
confidence: low
---

## What's new
You can set a budget on a Claude Managed Agents session: a hard cap on spend, priced at public list rates. A session that reaches it pauses with the `budget_reached` stop reason instead of starting new model requests, and changing or removing the budget resumes it. You can also give a session an advisor: a model at least as capable as the agent's own that the primary thread can consult mid-turn for strategic guidance, configured as a `{"type": "advisor"}` entry in the agent's `multiagent` roster.

## When is it safe to use
No beta label is given, so both are treated as generally available. The budget is a hard stop, so a job can pause mid-task if the cap is too low.

## Use case and value
Example: cap an overnight research agent at a fixed spend so a runaway loop cannot cost more than planned.

## How to implement
Set a budget on the session or deployment, and add an advisor entry to the agent's `multiagent` roster. See the [Claude Platform release notes](https://platform.claude.com/docs/en/release-notes/overview).
