import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/utils/classnames";

const buttonVariants = cva(
  "inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full text-lg font-normal",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white",
        secondary: "bg-light-gray text-dark-blue",
        ghost: "",
        link: "text-dark-blue underline",
      },
      size: {
        default: "h-[50px] px-4 py-3",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

export { Button };
