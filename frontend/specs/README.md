# Frontend Specifications

This folder contains frontend technical specifications for the financial dashboard enhancements.

## Files

### api-types.ts
Contains TypeScript interfaces for API response models.

### param-types.ts
Contains TypeScript interfaces for API query parameter objects.

### components.md
Contains frontend component specifications including feature behavior, UI requirements, validation rules, API dependencies, empty states, and loading states.


## Feature Specifications

### 1. Dashboard Date Range Filtering

**Endpoint:**
- `GET /api/metrics/facets` (for min/max date reference)
- All dashboard endpoints accept `start_date` and `end_date` as optional query parameters

**Request Params Type:**
- `DateRangeFilter` (see param-types.ts)

**Response Type:**
- `FacetsResponse` (see api-types.ts)

**Parameter Constraints:**
- `start_date`, `end_date`: string, optional, format `YYYY-MM-DD`
- If both are empty, all data is shown
- If only one is filled, filter applies from/to that date
- If `start_date > end_date`, submission is blocked

**Edge Cases:**
1. Only `start_date` is filled: UI shows data from that date to latest
2. Only `end_date` is filled: UI shows data from earliest to that date
3. Invalid range: UI prevents submission and shows error
4. Both empty: UI shows all historical data

---

### 2. Anomaly Alerts Table

**Endpoint:**
- `GET /api/metrics/alerts`

**Request Params Type:**
- `AlertsParams` (see param-types.ts)

**Response Type:**
- `AlertsResponse` (see api-types.ts)

**Parameter Constraints:**
- `threshold`: number, optional, default 0.3, min 0.01, max 1.0
- `start_date`, `end_date`: string, optional, format `YYYY-MM-DD`
- `group_by`: "day" | "week" | "month", optional, default "month"

**Edge Cases:**
1. No anomalies found: UI displays "No anomalies detected for the selected threshold and date range."
2. Threshold below 0.01 or above 1.0: UI prevents input and shows validation error
3. Only one date entered: Table filters accordingly
4. API/network error: UI shows error state

---

### 3. B2B vs B2C Comparison Page

**Endpoints:**
- `GET /api/metrics/categories/top` (for top categories)
- `GET /api/metrics/facets` (for date range)

**Request Params Type:**
- `TopCategoriesParams` (see param-types.ts)

**Response Type:**
- `TopCategoriesResponse` (see api-types.ts)

**Parameter Constraints:**
- `operation_type`: "income" (required)
- `business_type`: "B2B" or "B2C" (required)
- `limit`: number, required, value 5
- `start_date`, `end_date`: string, optional, format `YYYY-MM-DD`

**Edge Cases:**
1. No categories found: UI displays empty state in table
2. No comparison data: UI displays empty chart state
3. Only one date entered: Table/chart filters accordingly
4. API/network error: UI shows error state

---

## API Reference

Specifications are based on the backend OpenAPI schema available at `/docs`.

## Important Rules

- Dates use YYYY-MM-DD format.
- All filters are optional unless explicitly required.
- Components must support loading, empty, and error states.
- Specifications define frontend behavior only.
- No React implementation is included.