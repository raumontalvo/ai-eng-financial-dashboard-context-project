
`frontend-architecture.md`

```md
# Frontend Architecture Rules

## Scope

These rules apply to the React + TypeScript frontend inside `frontend/`.

## Rule 1 — Keep UI Components Focused on Rendering

Components should primarily handle UI rendering, props, loading states, empty states, and user-facing layout.

Financial calculations should stay in utility modules, not inside chart or card components.

## Rule 2 — Keep Financial Logic in `src/lib`

The repository already uses `frontend/src/lib/financial-utils.ts` for KPI calculations, monthly aggregation, currency formatting, and percent formatting.

Continue placing reusable financial logic there or in nearby focused utility files.

## Rule 3 — Use TypeScript Interfaces for Domain Data

Financial data should continue using explicit frontend types.

Existing types:
- `FinancialMovement`
- `KPIMetrics`
- `MonthlyDataPoint`
- `OperationType`
- `Category`
- `BusinessType`

## Rule 4 — Move API Calls Out of `App.tsx` When Fetching Expands

The current app fetches `/api/metrics` inside `App.tsx`. This is acceptable at small scale, but future API expansion should move fetch logic into a dedicated service file such as:

```text
frontend/src/lib/api.ts