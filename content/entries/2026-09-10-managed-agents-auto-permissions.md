---
id: 2026-09-10-managed-agents-auto-permissions
date: 2026-09-10
title: Auto permission policy for Managed Agents
area: API and Apps
status: ga
status_reason: "Announced with no beta label in the release note."
sources:
  - https://platform.claude.com/docs/en/release-notes/overview
tags: [managed-agents, permissions, safety]
added_by: daily-job
last_checked: 2026-11-15
confidence: low
---

## What's new
Claude Managed Agents permission policies now include `auto`. The server evaluates each agent or MCP tool call and runs it, denies it, or pauses for your approval. `agent.tool_use` and `agent.mcp_tool_use` events report how each call was evaluated in an `evaluation` field.

## When is it safe to use
The release note gives no beta or preview label, so it is treated as generally available. It lets the server decide on tool calls, so review the evaluation events for a while before relying on it for sensitive tools.

## Use case and value
Example: an agent with many MCP tools runs routine calls automatically and pauses only on the ones the server judges risky.

## How to implement
Set the permission policy to `auto` on the agent. See Let the server evaluate each call with auto, linked from the [Claude Platform release notes](https://platform.claude.com/docs/en/release-notes/overview).
