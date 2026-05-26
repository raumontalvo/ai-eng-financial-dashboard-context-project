import {
  OperationType,
  BusinessType,
  Category,
} from "./api-types";

export interface DateRangeParams {
  start_date?: string;
  end_date?: string;
}

export interface MetricsQueryParams extends DateRangeParams {
  category?: Category;
  operation_type?: OperationType;
}

export interface MetricsSummaryParams extends MetricsQueryParams {
  group_by?: "day" | "week" | "month";
  business_type?: BusinessType;
}

export interface AlertsQueryParams extends DateRangeParams {
  threshold?: number;
  group_by?: "day" | "week" | "month";
  business_type?: BusinessType;
}

export interface TopCategoriesParams extends DateRangeParams {
  operation_type?: OperationType;
  limit?: number;
  business_type?: BusinessType;
}

export interface ComparisonQueryParams {
  start_date: string;
  end_date: string;
  business_type?: BusinessType;
}