# Frontend Component Specifications

## Feature 1 — Dashboard Date Range Filter

### Component Name
DashboardDateRangeFilter

### Purpose
Allows the user to filter all dashboard metrics and charts by a selected date range.

### Placement
Top section of the home dashboard above all charts and summary sections.

### Inputs

| Field | Type | Required | Rules |
|---|---|---|---|
| start_date | string | No | Must use YYYY-MM-DD format |
| end_date | string | No | Must use YYYY-MM-DD format |

### API Dependencies

#### GET /api/metrics/facets
Used to display:
- min_date
- max_date

#### Existing metrics endpoints
All dashboard endpoints must receive:
- start_date
- end_date

when values exist.

### Behavior Rules

- Both date inputs are optional.
- If both inputs are empty, all historical data is shown.
- If only one date is selected, filtering applies from/to that date.
- Dates must be sent in YYYY-MM-DD format.
- Available dataset range must be displayed:
  - Earliest available date
  - Latest available date
- Invalid ranges where start_date > end_date must prevent submission.
- All charts and dashboard tables must refresh when filters change.

### Empty State
No special empty state required.

---

# Feature 2 — Anomaly Alerts Table

## Component Name
AnomalyAlertsTable

## Purpose
Displays periods where outcome spending increased significantly compared to the rolling average.

## Placement
Below existing dashboard charts.

## Inputs

| Field | Type | Required | Rules |
|---|---|---|---|
| threshold | number | No | Range: 0.01–1.0 |
| start_date | string | No | YYYY-MM-DD |
| end_date | string | No | YYYY-MM-DD |

## Default Values

| Field | Default |
|---|---|
| threshold | 0.3 |
| group_by | month |

## API Dependency

### GET /api/metrics/alerts

### Query Parameters

| Parameter | Type |
|---|---|
| threshold | number |
| start_date | string |
| end_date | string |
| group_by | "day" \| "week" \| "month" |

## Table Columns

| Column | Source Field |
|---|---|
| Period | period |
| Recorded Outcome | outcome_total |
| Rolling Average Previous 3 Periods | baseline_average |
| Percentage Increase | increase_ratio |

## Behavior Rules

- Table must update when threshold changes.
- Table must respect Feature 1 date filters.
- Threshold input accepts decimal values.
- Threshold must not allow values below 0.01.
- Threshold must not allow values above 1.0.
- Percentage increase should be displayed as a percentage value.
- Results should remain visible until new request completes.

## Empty State

If no anomalies exist:
- Display explicit message:
  "No anomalies detected for the selected threshold and date range."

The component must not disappear.

---

# Feature 3 — B2B vs B2C Comparison View

## Page Name
BusinessComparisonView

## Route
/comparison

## Purpose
Allows users to compare revenue performance between B2B and B2C business lines.

## Layout

### Top Section
Shared date range filter.

### Middle Section
Two side-by-side tables:
- B2B top income categories
- B2C top income categories

### Bottom Section
Single comparison chart for total income.

---

## Shared Date Filter

### Inputs

| Field | Type | Required |
|---|---|---|
| start_date | string | No |
| end_date | string | No |

### Rules
- Uses YYYY-MM-DD format.
- Shared across all sections.
- Applies to:
  - both category tables
  - comparison chart

---

## B2B Categories Table

### Endpoint
GET /api/metrics/categories/top

### Required Query Params

```txt
operation_type=income
business_type=B2B
limit=5