---
id: 2026-11-23-enterprise-frontier-safeguards
date: 2026-11-23
title: Enterprise Frontier Safeguards (zero data retention for the most capable models)
area: API and Apps
status: beta
status_reason: The docs say Enterprise Frontier Safeguards is in beta and that settings and behavior can change during the beta.
sources:
  - https://platform.claude.com/docs/en/release-notes/overview
  - https://platform.claude.com/docs/en/manage-claude/enterprise-frontier-safeguards/overview
tags: [enterprise, data-retention, security, webhooks]
added_by: daily-job
last_checked: 2026-11-24
confidence: high
---

## What's new
Enterprise Frontier Safeguards (EFS) is Zero Data Retention for eligible organizations that use Claude's most capable models. Anthropic does not retain your prompts and responses. Encrypted copies, called Sealed Safety Data, go to a bucket in your own cloud account.

It is in beta on Claude Platform, Claude Platform on AWS, and Claude Models on Google Cloud (Anthropic managed). Two new organization webhook events, `external_storage.failed` and `external_storage.recovered`, report when your bucket fails or passes Anthropic's daily check.

## When is it safe to use
Beta. The docs say it is available under your agreement with Anthropic and that settings and behavior can change during the beta. Only eligible organizations can get it, and it is for your organization's internal use only. Organizations with HIPAA readiness turned on cannot get it.

Some choices cannot be undone. For example, once Access Transparency is on, you cannot turn it off yourself. Read the setup guide's planning section first. EFS applies to a whole workspace, and the Default Workspace cannot use it.

## Use case and value
Example: a company wants Claude's most capable models but must keep all stored prompt data in its own cloud account. With EFS, its own team reviews flagged Safety Cases instead of Anthropic reviewers. Anthropic does not charge for EFS. Your cloud provider bills you for the storage.

## How to implement
1. Ask your Anthropic account team for access, or use the EFS request form linked in the setup guide.
2. Have an Organization Admin accept the terms in the Claude Console.
3. Add your storage bucket and encryption keys.
4. Turn on EFS for a workspace by selecting the Enterprise Frontier Safeguards card when you create it.
5. Optionally subscribe a webhook endpoint to `external_storage.failed` and `external_storage.recovered`. These webhook calls use the `efs-2026-10-01` beta header.

See the [EFS setup guide](https://platform.claude.com/docs/en/manage-claude/enterprise-frontier-safeguards/setup-console).
