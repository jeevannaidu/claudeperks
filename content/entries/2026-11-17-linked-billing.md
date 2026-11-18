---
id: 2026-11-17-linked-billing
date: 2026-11-17
title: Linked billing for apps built on the Claude API
area: API and Apps
status: beta
status_reason: "Released in beta with the `user-profiles-billing-2026-10-01` beta header; the docs say it might not be suitable for production use."
sources:
  - https://platform.claude.com/docs/en/release-notes/overview
  - https://platform.claude.com/docs/en/manage-claude/oauth-apps/organization-billing-connections
tags: [billing, api, oauth]
added_by: daily-job
last_checked: 2026-11-18
confidence: high
---

## What's new
Linked billing lets your customers pay for the Claude usage in your app through their own Claude organization. A customer links their organization once. After that, you set `billing_policy` on each `/v1/messages` or `/v1/chat/completions` request to choose who pays. Customers can set a spend cap or unlink your app in the Claude Console.

## When is it safe to use
Beta. The docs call Claude Platform OAuth a Beta Service whose endpoints, parameters and behavior can change. It works only for customers whose organization pays Anthropic directly, with prepaid credits or invoicing. Requests run in your organization, so your data retention terms apply, not the customer's. Do not link customers who need HIPAA, FERPA or CMEK coverage.

## Use case and value
Example: you sell a writing tool built on Claude. Each customer links their own Claude organization, so their usage is billed to them and not to you.

## How to implement
Create an OAuth app in the Claude Console and set up client authentication and a service account. Then link each customer and add this to the request body, with the `anthropic-beta: user-profiles-billing-2026-10-01` header and the `anthropic-user-profile-id` header:

```json
"billing_policy": {"type": "billing_policy", "bill_to": "user_profile"}
```

Message Batches do not support billing the customer. Full steps: [Linked billing](https://platform.claude.com/docs/en/manage-claude/oauth-apps/organization-billing-connections).
