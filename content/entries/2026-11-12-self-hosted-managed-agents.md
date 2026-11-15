---
id: 2026-11-12-self-hosted-managed-agents
date: 2026-11-12
title: Self-hosted Claude Managed Agents
area: API and Apps
status: preview
status_reason: "Access is by request through your Anthropic account team, not open to all accounts."
sources:
  - https://platform.claude.com/docs/en/release-notes/overview
tags: [managed-agents, self-hosted, enterprise]
added_by: daily-job
last_checked: 2026-11-15
confidence: high
---

## What's new
You can now run the whole Claude Managed Agents service on your own infrastructure, not only self-hosted sandboxes. You store agents, sessions and session history there. The server sends model requests to the provider you choose, which is Anthropic by default.

## When is it safe to use
Available by request. The release notes say to contact your Anthropic account team for access, so it is not self-serve. Because you store sessions and history yourself, your own data-handling rules apply.

## Use case and value
Example: a company that must keep agent transcripts inside its own network runs the service itself and still uses Anthropic models for inference.

## How to implement
Contact your Anthropic account team to request access. Self-hosted sandboxes, which this builds on, are covered in the [Claude Platform release notes](https://platform.claude.com/docs/en/release-notes/overview).
