import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/utils/mergeClassname";

const buttonVariants = cva(
  [
    "rounded-md",
    "w-fit",
    "cursor-pointer",
    "disabled:pointer-events-none",
    "disabled:bg-lightGreen",
    "disabled:text-black",
  ],
  {
    variants: {
      intent: {
        primary: [
          "bg-darkGray",
          "text-white",
          "border-transparent",
          "hover:bg-lightGreen",
          "rounded-full",
        ],
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "default",
    },
  }
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, intent, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ intent, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

export { Button };
