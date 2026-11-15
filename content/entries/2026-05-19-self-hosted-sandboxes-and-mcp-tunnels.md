---
id: 2026-05-19-self-hosted-sandboxes-and-mcp-tunnels
date: 2026-05-19
title: Self-hosted sandboxes and MCP tunnels
area: API and Apps
status: preview
status_reason: "MCP tunnels is a research preview. Self-hosted sandboxes had no label in the release note."
sources:
  - https://platform.claude.com/docs/en/release-notes/overview
tags: [managed-agents, sandbox, mcp, private-network]
added_by: daily-job
last_checked: 2026-11-15
confidence: high
---

## What's new
Self-hosted sandboxes for Claude Managed Agents let you run tool execution on your own infrastructure instead of in Anthropic's. MCP tunnels, as a research preview, let Claude connect to MCP servers in your private network.

## When is it safe to use
MCP tunnels is a research preview, so expect changes. Both put Claude's tool calls next to your internal systems, so limit what the connected servers can reach.

## Use case and value
Example: an agent queries an internal database through an MCP server that never leaves the company network.

## How to implement
See Self-hosted sandboxes and the MCP tunnels documentation linked from the [Claude Platform release notes](https://platform.claude.com/docs/en/release-notes/overview).
