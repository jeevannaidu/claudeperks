---
id: 2026-11-02-message-threads
date: 2026-11-02
title: Message threads for long conversations
area: API and Apps
status: beta
status_reason: "The release notes say it is in beta with the message-threads-2026-08-12 beta header."
sources:
  - https://platform.claude.com/docs/en/release-notes/overview
tags: [messages-api, latency, agents]
added_by: daily-job
last_checked: 2026-11-15
confidence: high
---

## What's new
With message threads, the API keeps the conversation on the server, so each later request sends only the new messages. Long conversations and agent loops send smaller requests and get a lower time to first token. A thread expires 5 minutes after its last request and is deleted no more than 1 hour after its last use. It is available on the Claude API, Claude Platform on AWS, Claude Models on Google Cloud (Anthropic managed) and Claude in Microsoft Foundry.

## When is it safe to use
Beta, behind a header. The conversation is stored on the server for up to an hour after last use, so check that fits your data rules before sending sensitive content.

## Use case and value
Example: an agent loop that re-sends a 200-message history on every tool call sends only the newest messages instead.

## How to implement
Send the `message-threads-2026-08-12` beta header on your Messages API requests, then follow the message threads guide linked from the [Claude Platform release notes](https://platform.claude.com/docs/en/release-notes/overview).
