import { cn } from "@/utils/mergeClassname";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef, HTMLAttributes } from "react";

const formVariants = cva(["p-5"], {
  variants: {
    boxShadow: {
      lg: "shadow-lg",
    },
  },
  defaultVariants: {
    boxShadow: "lg",
  },
});

type FormProps = HTMLAttributes<HTMLFormElement> &
  VariantProps<typeof formVariants> & {
    formAction?: (payload: FormData) => void;
    method: string;
  };

const Form = forwardRef<HTMLFormElement, FormProps>(
  ({ formAction, method, boxShadow, ...props }, ref) => {
    return (
      <form
        method={method}
        action={formAction}
        ref={ref}
        {...props}
        className={cn(formVariants({ boxShadow }))}
      />
    );
  }
);

export default Form;
