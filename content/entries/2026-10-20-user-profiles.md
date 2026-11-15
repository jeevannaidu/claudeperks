---
id: 2026-10-20-user-profiles
date: 2026-10-20
title: User profiles for API end customers
area: API and Apps
status: ga
status_reason: "Launched with SDK and CLI support and no beta label in the release note."
sources:
  - https://platform.claude.com/docs/en/release-notes/overview
tags: [safety, api, platforms]
added_by: daily-job
last_checked: 2026-11-15
confidence: high
---

## What's new
User profiles let you tell Anthropic which of your end customers each API request is for. If you run a platform or gateway, or resell API access, a safety enforcement action can then apply to one end customer instead of your whole organization. The SDK and the `ant` CLI support the new `/v1/user_profiles` endpoints.

## When is it safe to use
Generally available. Using it reduces the risk that one customer's misuse affects all of your traffic. It means sharing a customer identifier with Anthropic, so check your customer terms.

## Use case and value
Example: a reseller with hundreds of customers tags each request, so a safety action against one customer does not take the whole account offline.

## How to implement
Create profiles with the `/v1/user_profiles` endpoints, using the SDK or the `ant` CLI, and attach the profile to each request. Details are linked from the [Claude Platform release notes](https://platform.claude.com/docs/en/release-notes/overview).
