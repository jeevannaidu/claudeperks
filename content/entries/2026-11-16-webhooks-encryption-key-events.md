---
id: 2026-11-16-webhooks-encryption-key-events
date: 2026-11-16
title: Organization webhooks add encryption key events
area: API and Apps
status: beta
status_reason: "Organization webhooks are in beta under the `webhooks-2026-10-07` beta header."
sources:
  - https://platform.claude.com/docs/en/release-notes/overview
  - https://platform.claude.com/docs/en/manage-claude/organization-webhooks
tags: [webhooks, cmek, admin]
added_by: daily-job
last_checked: 2026-11-22
confidence: high
---

## What's new
Organization webhooks now send two encryption key events. `external_key.failed` fires when your key management service keeps refusing a customer-managed encryption key. `external_key.recovered` fires when the key works again. The event names the key in `data.id`.

## When is it safe to use
Beta. Your organization needs organization webhooks turned on, or requests return a 404. Organizations with HIPAA readiness enabled cannot use them. The docs say `external_key.recovered` might not arrive, so check keys yourself after a fix.

## Use case and value
Example: a security team that manages its own encryption keys gets an alert when a key is disabled, instead of finding out from failed requests.

## How to implement
Register a webhook endpoint with the Admin API under `/v1/organizations/webhooks`, or in the Claude Console, and include the two event types. After you return a 2xx, validate the key with `POST /v1/organizations/external_keys/{external_key_id}/validate`. Docs: https://platform.claude.com/docs/en/manage-claude/organization-webhooks
