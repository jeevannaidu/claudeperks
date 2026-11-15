---
id: 2026-10-09-managed-agents-dynamic-workflows
date: 2026-10-09
title: Dynamic workflows for Managed Agents
area: API and Apps
status: beta
status_reason: "The release note says it is in beta with the managed-agents-2026-04-01 beta header."
sources:
  - https://platform.claude.com/docs/en/release-notes/overview
tags: [managed-agents, multiagent, workflows]
added_by: daily-job
last_checked: 2026-11-15
confidence: high
---

## What's new
A Claude Managed Agents agent can write a workflow for work with many pieces, such as reviewing hundreds of documents. A workflow is a program that runs many agents in phases and combines their results. The server runs it in the background as a workflow run.

## When is it safe to use
Beta, behind the `managed-agents-2026-04-01` header. Workflows can start many agents at once, so set a session budget (see the session budgets entry) before using it on large jobs.

## Use case and value
Example: an agent asked to review 300 contracts writes a workflow that fans them out to many agents and returns one combined report.

## How to implement
Send the `managed-agents-2026-04-01` beta header and set the agent's `multiagent` field to `{"type": "multiagent_20261001", "workflows": {"type": "enabled"}}`. See the [Claude Platform release notes](https://platform.claude.com/docs/en/release-notes/overview).
