import { forwardRef } from "react";

import { cn } from "@/utils/classnames";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          "bg-white",
          "rounded-full border border-dark-blue focus:border-primary",
          "focus-visible:ring-secondary/25",
          "inline-flex h-[50px] w-full px-[26px] py-3 text-lg text-dark-blue placeholder:text-[#CCD0DD] focus-visible:outline-none focus-visible:ring-4",
          className
        )}
        {...props}
      />
    );
  }
);
