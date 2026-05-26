
/**
 * Type of financial operation.
 * "income" for incoming funds, "outcome" for outgoing funds.
 */
export type OperationType = "income" | "outcome";

/**
 * Type of business line.
 * "B2B" for business-to-business, "B2C" for business-to-consumer.
 */
export type BusinessType = "B2B" | "B2C";

/**
 * Category of the financial movement.
 * Valid values: "suppliers", "sales", "operational", "administrative", "others"
 */
export type Category =
  | "suppliers"
  | "sales"
  | "operational"
  | "administrative"
  | "others";

/**
 * Response for /api/metrics/facets
 */
export interface FacetsResponse {
  /** List of available operation types. */
  operation_types: OperationType[];
  /** List of available business types. */
  business_types: BusinessType[];
  /** List of available categories. */
  categories: Category[];
  /** Earliest available date (YYYY-MM-DD). */
  min_date: string;
  /** Latest available date (YYYY-MM-DD). */
  max_date: string;
}

/**
 * Entry for a single alert/anomaly period.
 */
export interface AlertEntry {
  /** Period label (e.g., 2024-03 or 2024-03-15). */
  period: string;
  /** Total outcome for the period. */
  outcome_total: number;
  /** Rolling average of previous 3 periods. */
  baseline_average: number;
  /** Percentage increase over baseline (0.0–1.0). */
  increase_ratio: number;
}

/**
 * Response for /api/metrics/alerts
 */
export interface AlertsResponse {
  /** List of detected anomalies. */
  alerts: AlertEntry[];
}

/**
 * Entry for a single top category.
 */
export interface CategoryEntry {
  /** Category name. */
  category: Category;
  /** Operation type (income/outcome). */
  operation_type: OperationType;
  /** Total amount for this category. */
  total_amount: number;
}

/**
 * Response for /api/metrics/categories/top
 */
export interface TopCategoriesResponse {
  /** List of top categories. */
  categories: CategoryEntry[];
}