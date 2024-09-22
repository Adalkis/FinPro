import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/utils/mergeClassname";

const textAreaVariants = cva([], {
  variants: {
    intent: {
      primary:
        "border border-lightGreen rounded-md text-black placeholder:text-lightGreen px-5 py-2",
    },
    size: {
      default: "w-full h-32",
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "default",
  },
});

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> &
  VariantProps<typeof textAreaVariants>;

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, intent, size, ...props }, ref) => {
    return (
      <textarea
        className={cn(textAreaVariants({ intent, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

export default TextArea;
