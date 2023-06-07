import { forwardRef } from "react";

import { cn } from "@/utils/classnames";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(
          "inline-block text-lg font-medium text-dark-blue",
          className
        )}
        {...props}
      />
    );
  }
);
