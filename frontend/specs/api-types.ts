export type OperationType = "income" | "outcome";

export type BusinessType = "B2B" | "B2C";

export type Category =
  | "suppliers"
  | "sales"
  | "operational"
  | "administrative"
  | "others";

export interface FinancialMovement {
  create_date: string;
  amount: number;
  operation_type: OperationType;
  category: Category;
  business_type: BusinessType;
}

export interface MetricsFacets {
  operation_types: OperationType[];
  business_types: BusinessType[];
  categories: Category[];
  min_date: string;
  max_date: string;
}

export interface MetricsSummaryItem {
  period: string;
  income: number;
  outcome: number;
  net: number;
}

export interface MetricsAlert {
  period: string;
  outcome_total: number;
  baseline_average: number;
  increase_ratio: number;
}

export interface TopCategoryItem {
  category: Category;
  operation_type: OperationType;
  total_amount: number;
}

export interface MetricsComparison {
  current_period: number;
  previous_period: number;
  delta_abs: number;
  delta_pct: number | null;
}