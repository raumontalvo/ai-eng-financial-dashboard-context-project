# Frontend Specifications

This folder contains frontend technical specifications for the financial dashboard enhancements.

## Files

### api-types.ts
Contains TypeScript interfaces for API response models.

### param-types.ts
Contains TypeScript interfaces for API query parameter objects.

### components.md
Contains frontend component specifications including feature behavior, UI requirements, validation rules, API dependencies, empty states, and loading states.

## Covered Features

1. Dashboard date range filtering
2. Anomaly alerts table
3. B2B vs B2C comparison page

## API Reference

Specifications are based on the backend OpenAPI schema available at `/docs`.

## Important Rules

- Dates use YYYY-MM-DD format.
- All filters are optional unless explicitly required.
- Components must support loading, empty, and error states.
- Specifications define frontend behavior only.
- No React implementation is included.