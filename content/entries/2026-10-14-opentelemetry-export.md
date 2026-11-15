---
id: 2026-10-14-opentelemetry-export
date: 2026-10-14
title: OpenTelemetry export for API requests and agent sessions
area: API and Apps
status: beta
status_reason: "The release note says OpenTelemetry export is in beta."
sources:
  - https://platform.claude.com/docs/en/release-notes/overview
tags: [observability, sdk, managed-agents]
added_by: daily-job
last_checked: 2026-11-15
confidence: high
---

## What's new
You can trace Messages API requests and Claude Managed Agents sessions in your observability platform. The Claude SDK emits spans in Python, TypeScript, C#, Go, Java, PHP and Ruby. To get spans from the API, add an OpenTelemetry destination in the Claude Console.

## When is it safe to use
Beta. Spans may carry request metadata to your observability tool, so check what you send there.

## Use case and value
Example: an on-call engineer follows one slow agent session from the API call through each tool call in their existing tracing dashboard.

## How to implement
Add an OpenTelemetry destination in the Claude Console for API spans, and enable span export in your Claude SDK. See the [Claude Platform release notes](https://platform.claude.com/docs/en/release-notes/overview).
