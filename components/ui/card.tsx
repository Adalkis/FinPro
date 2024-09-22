import { cn } from "@/utils/mergeClassname";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef, HTMLAttributes } from "react";

const cardVariants = cva(["lg:min-h-64 px-10 py-5"], {
  variants: {
    borderColor: {
      primary: "border border-rgbaLightGreen bg-white",
      secondary: "border border-lightGreen bg-lightGreen text-white",
    },
    borderRadius: {
      roundedTrXl: "rounded-tr-[100px]",
      roundedBLXL: "rounded-bl-[100px]",
    },
    alignment: {
      center: "flex flex-col justify-center",
    },
  },
  defaultVariants: {
    borderColor: "primary",
    alignment: "center",
  },
});

export type CardProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardVariants> & { className?: string };

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ borderColor, borderRadius, className, ...props }, ref) => {
    return (
      <article
        ref={ref}
        className={cn(cardVariants({ borderColor, borderRadius }), className)}
        {...props}
      />
    );
  }
);

export default Card;
