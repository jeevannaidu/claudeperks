---
id: 2026-09-22-inline-tools-mid-conversation
date: 2026-09-22
title: Define tools inside a mid-conversation system message
area: API and Apps
status: beta
status_reason: "The release note says it is in beta with the inline-tools-2026-09-15 beta header."
sources:
  - https://platform.claude.com/docs/en/release-notes/overview
tags: [tools, prompt-caching, messages-api]
added_by: daily-job
last_checked: 2026-11-15
confidence: high
---

## What's new
A `tool_addition` block in a mid-conversation system message can carry a tool's full definition. You can add a tool, change its schema, or move a server tool to a newer version without editing `tools` or invalidating the prompt cache. The same header covers adding and removing tools by reference.

## When is it safe to use
Beta, behind the `inline-tools-2026-09-15` header. Test that your cache hit rate holds with your own prompts.

## Use case and value
Example: an agent that gains a new tool partway through a long session keeps its cached prompt instead of paying to rebuild it.

## How to implement
Send the `inline-tools-2026-09-15` beta header and add a `tool_addition` block with `tool: {"type": "tool_definition", "definition": {...}}`. See the [Claude Platform release notes](https://platform.claude.com/docs/en/release-notes/overview).
