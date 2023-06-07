import * as React from "react";

import { cn } from "@/utils/classnames";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <select
        className={cn(
          "block w-full appearance-none rounded-full",
          "border border-dark-blue px-[26px] py-3 text-dark-blue",
          "bg-[url('/icons/chevron-down.svg')] bg-[length:26px_24px] bg-[right_20px_top_13px] bg-no-repeat",
          "focus:border-primary focus-visible:outline-none focus-visible:ring-4",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </select>
    );
  }
);
