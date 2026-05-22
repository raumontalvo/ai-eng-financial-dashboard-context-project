
`testing-and-validation.md`

```md
# Testing and Validation Rules

## Scope

These rules apply to backend tests, frontend tests, build checks, and validation workflow.

## Rule 1 — Run Relevant Tests After Logic Changes

When backend filtering, aggregation, comparison, alert, or business-type behavior changes, run backend tests.

When frontend financial calculations or formatters change, run frontend tests.

## Rule 2 — Preserve Deterministic Test Inputs

The backend uses seeded mock data to make test behavior stable.

Do not introduce unseeded randomness into test-dependent code paths.

## Rule 3 — Validate API Behavior With Existing Endpoint Tests

Existing backend tests cover:
- health endpoint
- metrics filtering
- category filtering
- operation type filtering
- B2B/B2C filtering
- facets
- summaries
- top categories
- comparisons
- alerts

These tests should remain aligned with expected API behavior.

## Rule 4 — Validate Frontend Financial Utility Behavior

Existing frontend tests cover:
- KPI totals
- profit percent edge cases
- monthly aggregation
- currency formatting
- percent formatting

Do not change these behaviors without updating tests intentionally.

## Rule 5 — Use Separate Commits for Major Project Phases

This repository stewardship project requires separate commits for:
- repository understanding
- engineering practice analysis
- project rules
- memory-bank documentation

Do not bundle multiple project phases into one commit.

## Validation Checklist

Before committing, run the relevant checks:

Backend:

```bash
cd backend
pytest