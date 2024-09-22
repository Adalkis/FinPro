import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/utils/mergeClassname";

const inputVariants = cva([], {
  variants: {
    intent: {
      primary:
        "border border-lightGreen rounded-md text-black placeholder:text-lightGreen px-5",
    },
    size: {
      default: "w-full h-10",
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "default",
  },
});

type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputVariants>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, intent, size, ...props }, ref) => {
    return (
      <input
        className={cn(inputVariants({ intent, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

export default Input;
