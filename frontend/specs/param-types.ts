
import {
  OperationType,
  BusinessType,
  Category,
} from "./api-types";


/**
 * Optional date range filter shared across features.
 * @property start_date - Start date in YYYY-MM-DD format (optional)
 * @property end_date - End date in YYYY-MM-DD format (optional)
 */
export interface DateRangeFilter {
  /** Start date in YYYY-MM-DD format (optional) */
  start_date?: string;
  /** End date in YYYY-MM-DD format (optional) */
  end_date?: string;
}


/**
 * Query parameters for metrics endpoints.
 */
export interface MetricsQueryParams extends DateRangeFilter {
  /** Category filter (optional) */
  category?: Category;
  /** Operation type filter (optional) */
  operation_type?: OperationType;
}


/**
 * Query parameters for metrics summary endpoints.
 */
export interface MetricsSummaryParams extends MetricsQueryParams {
  /** Grouping granularity (optional) */
  group_by?: "day" | "week" | "month";
  /** Business type filter (optional) */
  business_type?: BusinessType;
}


/**
 * Query parameters for anomaly alerts table.
 * Extends DateRangeFilter and adds threshold.
 */
export interface AlertsParams extends DateRangeFilter {
  /** Threshold for anomaly detection (0.01–1.0, optional) */
  threshold?: number;
  /** Grouping granularity (optional) */
  group_by?: "day" | "week" | "month";
  /** Business type filter (optional) */
  business_type?: BusinessType;
}


/**
 * Query parameters for top categories table.
 * Extends DateRangeFilter and adds operation type and limit.
 */
export interface TopCategoriesParams extends DateRangeFilter {
  /** Operation type (income/outcome, optional) */
  operation_type?: OperationType;
  /** Limit for number of categories (optional) */
  limit?: number;
  /** Business type filter (optional) */
  business_type?: BusinessType;
}


/**
 * Query parameters for B2B vs B2C comparison chart.
 */
export interface ComparisonQueryParams {
  /** Start date in YYYY-MM-DD format (required) */
  start_date: string;
  /** End date in YYYY-MM-DD format (required) */
  end_date: string;
  /** Business type filter (optional) */
  business_type?: BusinessType;
}