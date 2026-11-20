---
id: 2026-11-17-linked-billing
date: 2026-11-17
title: Linked billing lets customers pay for your app's Claude usage
area: API and Apps
status: beta
status_reason: Released in beta behind the beta header `user-profiles-billing-2026-10-01`; the docs call Claude Platform OAuth a Beta Service that might not suit production.
sources:
  - https://platform.claude.com/docs/en/release-notes/overview
  - https://platform.claude.com/docs/en/manage-claude/oauth-apps/organization-billing-connections
tags: [billing, oauth, api]
added_by: daily-job
last_checked: 2026-11-20
confidence: high
---

## What's new
Your customers can now pay for the Claude usage inside your app through their own Claude organization. A customer links their organization to your app once. You then set `billing_policy` on each `/v1/messages` or `/v1/chat/completions` request to choose who pays. Customers can set a spend cap for your app or unlink it in the Claude Console.

## When is it safe to use
Beta. The docs say endpoints, parameters and behavior can change, and it might not be suitable for production use. It works only for customers whose organization pays Anthropic directly, with prepaid credits or invoiced billing. Marketplace billing (AWS, Google Cloud, Azure) and subscription-only organizations are refused. Requests run in your organization, so the customer's zero data retention, BAA and customer-managed key arrangements do not apply. Message Batches do not support billing the customer.

## Use case and value
Example: a developer ships a writing app built on Claude. Business customers link their own Claude organization, so their usage lands on their bill instead of the developer's.

## How to implement
1. In the Claude Console, create an OAuth app with the "Bill and link to organizations" capability, then set up client authentication and a service account for your back end.
2. Add a "Link your Claude organization" button so the customer can approve your app.
3. Send the beta header `user-profiles-billing-2026-10-01` and set `billing_policy` on each request to bill the customer or yourself.

Full steps: https://platform.claude.com/docs/en/manage-claude/oauth-apps/organization-billing-connections
