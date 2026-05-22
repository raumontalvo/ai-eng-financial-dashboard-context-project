# Backend Architecture Rules

## Scope

These rules apply to the FastAPI backend inside `backend/`.

## Rule 1 — Keep Route Handlers Thin

Route handlers should focus on request handling, query parameters, response models, and calling reusable logic.

They should not become the main location for:
- mock data generation
- aggregation logic
- comparison logic
- alert detection
- business rules

## Why This Rule Exists

The current `backend/app/routes.py` file contains route definitions, mock data generation, filters, summaries, comparisons, and alert detection in one file. This is manageable now, but it becomes risky as the backend grows.

## Rule 2 — Move Reusable Logic Into Service or Utility Modules

When backend logic becomes reusable or complex, place it in a dedicated module such as:

- `backend/app/services/`
- `backend/app/utils/`
- `backend/app/schemas/`

## Rule 3 — Preserve Typed Response Models

All API endpoints should continue using explicit Pydantic response models.

Existing examples:
- `FinancialMovement`
- `MetricsFacets`
- `MetricsSummaryItem`
- `MetricsComparison`
- `MetricsAlert`

## Rule 4 — Preserve Deterministic Mock Data During Development

The backend currently uses seeded mock data generation. Do not replace this with random unseeded behavior in development or tests.

## Rule 5 — Avoid Production Wildcard CORS

Wildcard CORS is acceptable for local educational development, but production deployment should restrict allowed origins.

Current risk:

```python
allow_origins=["*"]