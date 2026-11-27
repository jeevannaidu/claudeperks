---
id: 2026-11-17-linked-billing
date: 2026-11-17
title: Linked billing for Claude Platform apps
area: API and Apps
status: beta
status_reason: "The release notes say Linked billing launched in beta with the beta header `user-profiles-billing-2026-10-01`."
sources:
  - https://platform.claude.com/docs/en/release-notes/overview
  - https://platform.claude.com/docs/en/manage-claude/oauth-apps/linked-billing
tags: [billing, oauth, api]
added_by: daily-job
last_checked: 2026-11-27
confidence: high
---

## What's new
Linked billing lets your customers pay for the Claude usage in your app through their own Claude organization. After a customer links their organization, you set `billing_policy` on each `/v1/messages` or `/v1/chat/completions` request to choose who pays. Customers can set a spend cap for your app, or unlink it, in the Claude Console.

## When is it safe to use
Beta, and the docs warn it might not be suitable for production use. Only requests that send `billing_policy` need the beta header. It works only for customers whose organization pays Anthropic directly, through prepaid credits or invoiced billing, and your own organization must also pay Anthropic directly. If a customer cannot be billed, the API refuses the request and never bills you instead.

## Use case and value
Example: a software product sends each customer's Claude requests with `bill_to` set to `user_profile`, so customers who already have Claude credits pay for their own usage.

## How to implement
Register an OAuth app, create a user profile for the customer, and have the customer link their organization. Then send requests with the `anthropic-user-profile-id` header, the beta header `user-profiles-billing-2026-10-01`, and `billing_policy` with `bill_to` set to `user_profile`. Full steps: [Linked billing](https://platform.claude.com/docs/en/manage-claude/oauth-apps/linked-billing).
