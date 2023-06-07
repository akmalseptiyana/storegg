import { cn } from "@/utils/classnames";
import { formatValueToCurrency } from "@/utils/currency";

interface RowProps {
  label: string;
  value: string | number;
  className?: string;
}

export function Row({ label, value, className }: RowProps) {
  return (
    <p className="mb-5 flex items-center justify-between text-lg text-dark-blue">
      {label}
      <span className={cn("text-lg font-medium text-dark-blue", className)}>
        {typeof value === "number" ? formatValueToCurrency(value) : value}
      </span>
    </p>
  );
}
