---
id: 2026-11-17-linked-billing
date: 2026-11-17
title: Linked billing lets customers pay for Claude usage in your app
area: API and Apps
status: beta
status_reason: "Released in beta with the `user-profiles-billing-2026-10-01` beta header; the docs call Claude Platform OAuth a Beta Service."
sources:
  - https://platform.claude.com/docs/en/release-notes/overview
  - https://platform.claude.com/docs/en/manage-claude/oauth-apps/organization-billing-connections
tags: [billing, oauth, api]
added_by: daily-job
last_checked: 2026-11-22
confidence: high
---

## What's new
Linked billing lets your customers pay for the Claude usage in your app through their own Claude organization. A customer links their organization to your app once. After that, you set `billing_policy` on each `/v1/messages` or `/v1/chat/completions` request to choose who pays. Customers can set a spend cap for your app or unlink it in the Claude Console.

## When is it safe to use
Beta. The docs say endpoints, parameters and behavior can change, and it might not be suitable for production use. It works only for customers whose organization pays Anthropic directly. Requests run in your organization, so the customer's ZDR, BAA and customer-managed key arrangements do not apply. Message Batches cannot bill the customer.

## Use case and value
Example: a SaaS app that calls Claude for its users can let each customer pay through their own Claude organization. The app owner no longer fronts that usage and then re-bills it.

## How to implement
Register an OAuth app in the Claude Console with the "Bill and link to organizations" ability, and have each customer link their organization. Then send the `user-profiles-billing-2026-10-01` beta header and the `anthropic-user-profile-id` header, and add this to the request body:

```json
"billing_policy": {"type": "billing_policy", "bill_to": "user_profile"}
```

Full steps: https://platform.claude.com/docs/en/manage-claude/oauth-apps/organization-billing-connections
