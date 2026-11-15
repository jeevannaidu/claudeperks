---
id: 2026-09-14-on-demand-compaction
date: 2026-09-14
title: On-demand conversation compaction
area: API and Apps
status: beta
status_reason: "The release note says it is in beta with the compact-2026-09-04 beta header."
sources:
  - https://platform.claude.com/docs/en/release-notes/overview
tags: [messages-api, context, agents]
added_by: daily-job
last_checked: 2026-11-15
confidence: high
---

## What's new
The Messages API can compact a conversation on demand. Send the top-level `compaction` parameter and the API returns a signed compaction block that summarizes the messages you sent. On later requests you send that block first, in place of those messages. You choose when to compact, the request can run in the background, and you can keep recent turns word for word after the summary.

## When is it safe to use
Beta, behind the `compact-2026-09-04` header. A summary can drop detail, so keep recent turns verbatim for anything the agent must remember exactly.

## Use case and value
Example: a support agent nearing its context limit compacts the older half of the conversation and continues without starting over.

## How to implement
Send the `compact-2026-09-04` beta header and the `compaction` parameter, then replace the summarized messages with the returned block. See the [Claude Platform release notes](https://platform.claude.com/docs/en/release-notes/overview).
