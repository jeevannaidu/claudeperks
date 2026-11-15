---
id: 2026-08-19-files-api-and-skills-api-ga
date: 2026-08-19
title: Files API and Agent Skills out of beta
area: API and Apps
status: ga
status_reason: "The release notes say both are out of beta and no longer need a beta header."
sources:
  - https://platform.claude.com/docs/en/release-notes/overview
tags: [files-api, skills, api]
added_by: daily-job
last_checked: 2026-11-15
confidence: high
---

## What's new
The Files API (`/v1/files`) and Agent Skills with the Skills API (`/v1/skills`) are out of beta on the Claude API. Requests no longer need the `files-api-2025-04-14` or `skills-2025-10-02` beta headers. Without the header, the Files API uses the current response format, with file expiration (`expires_in_seconds` on upload) and page-based listing.

## When is it safe to use
Generally available. Requests that still send the old headers keep working, but responses keep the older format for the Files API until you migrate.

## Use case and value
Example: upload a reference PDF once and reuse it across many requests without re-sending it.

## How to implement
Remove the beta headers from your requests. See Migrate from files-api-2025-04-14 and Migrate from skills-2025-10-02 in the [Claude Platform release notes](https://platform.claude.com/docs/en/release-notes/overview).
