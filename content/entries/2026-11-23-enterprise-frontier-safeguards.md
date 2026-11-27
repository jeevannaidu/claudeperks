---
id: 2026-11-23-enterprise-frontier-safeguards
date: 2026-11-23
title: Enterprise Frontier Safeguards (EFS)
area: API and Apps
status: beta
status_reason: "The release notes say EFS launched in beta, and the docs page carries a beta warning."
sources:
  - https://platform.claude.com/docs/en/release-notes/overview
  - https://platform.claude.com/docs/en/manage-claude/enterprise-frontier-safeguards/overview
tags: [security, data-retention, enterprise]
added_by: daily-job
last_checked: 2026-11-27
confidence: high
---

## What's new
Enterprise Frontier Safeguards (EFS) is Zero Data Retention for eligible organizations that use Claude's most capable models. Anthropic does not keep your prompts and responses. Encrypted copies, called Sealed Safety Data, go to a bucket in your own cloud account. It is available on Claude Platform, Claude Platform on AWS and Claude Models on Google Cloud (Anthropic managed).

## When is it safe to use
Beta. Settings and behavior can change during the beta. Access is by request: you ask your Anthropic account team, or fill in the request form, and an Organization Admin accepts the terms in the Console. Anthropic does not charge for EFS, but your cloud provider bills the storage. It applies to a whole workspace, and it does not cover data that features such as code execution containers, Files API uploads, Batch API results or Managed Agents sessions store for their own use.

## Use case and value
Example: a bank wants to use the most capable Claude models but must keep all safety-review data in its own cloud account. With EFS, its own team reviews flagged cases instead of Anthropic reviewers.

## How to implement
Check the Programs page in the Claude Console, or ask your account team for access. An Organization Admin accepts the terms, then you set up customer-owned storage with the setup guide. Use a separate workspace for traffic that should not be on EFS. Details: [Enterprise Frontier Safeguards overview](https://platform.claude.com/docs/en/manage-claude/enterprise-frontier-safeguards/overview).
