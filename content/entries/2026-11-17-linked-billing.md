---
id: 2026-11-17-linked-billing
date: 2026-11-17
title: Linked billing lets customers pay for Claude usage in your app
area: API and Apps
status: beta
status_reason: "Released behind the beta header `user-profiles-billing-2026-10-01`. The docs call Claude Platform OAuth a Beta Service that might not suit production."
sources:
  - https://platform.claude.com/docs/en/release-notes/overview
  - https://platform.claude.com/docs/en/manage-claude/oauth-apps/organization-billing-connections
tags: [api, billing, oauth]
added_by: daily-job
last_checked: 2026-11-21
confidence: high
---

## What's new
Linked billing lets your customers pay for the Claude usage in your app through their own Claude organization. A customer links their organization to your app once. After that, you set `billing_policy` on each `/v1/messages` or `/v1/chat/completions` request to choose who pays. Customers can set a spend cap for your app or unlink it in the Claude Console.

## When is it safe to use
Beta. The docs say endpoints, parameters and behavior can change, and that it might not be suitable for production use. It works only for customers whose organization pays Anthropic directly for API usage. Organizations billed through AWS, Google Cloud or Azure marketplaces, or on a Claude subscription plan only, are refused. Requests run in your organization, so the customer's ZDR, BAA and CMEK arrangements do not apply. Message Batches do not support billing the customer.

## Use case and value
Example: you build a coding tool for developers who already have a Claude Platform account. They link their organization, and their own usage is billed to them instead of to you.

## How to implement
Create an OAuth app in the Claude Console with the "Bill and link to organizations" capability, then set up client authentication and a service account for your back end. For each customer, create a user profile and add a "Link your Claude organization" button. Then send the beta header, the profile header and `billing_policy` on each request:

```
-H "anthropic-beta: user-profiles-billing-2026-10-01"
-H "anthropic-user-profile-id: <profile id>"
"billing_policy": {"type": "billing_policy", "bill_to": "user_profile"}
```

Full steps: [Linked billing](https://platform.claude.com/docs/en/manage-claude/oauth-apps/organization-billing-connections).
