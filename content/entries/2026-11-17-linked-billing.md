---
id: 2026-11-17-linked-billing
date: 2026-11-17
title: Linked billing for apps built on Claude
area: API and Apps
status: beta
status_reason: Released in beta behind the beta header `user-profiles-billing-2026-10-01`.
sources:
  - https://platform.claude.com/docs/en/release-notes/overview
  - https://platform.claude.com/docs/en/manage-claude/oauth-apps/linked-billing
tags: [billing, api, oauth]
added_by: daily-job
last_checked: 2026-11-28
confidence: high
---

## What's new
Linked billing lets your customers pay for the Claude usage in your app through their own Claude organization. Once a customer links their organization, you set `billing_policy` on each `/v1/messages` or `/v1/chat/completions` request to choose who pays. In the Claude Console, customers can set a spend cap for your app or unlink it.

## When is it safe to use
Beta. It needs the `user-profiles-billing-2026-10-01` beta header. It works only for customers whose organization pays Anthropic directly for API usage.

## Use case and value
Example: a developer ships a writing app and lets each business customer cover its own Claude usage. The developer no longer carries that cost or resells tokens.

## How to implement
Send the `user-profiles-billing-2026-10-01` beta header. Have the customer link their organization, then set `billing_policy` on each request. Details are in the [Linked billing docs](https://platform.claude.com/docs/en/manage-claude/oauth-apps/linked-billing).
