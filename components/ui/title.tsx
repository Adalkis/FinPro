import { cn } from "@/utils/mergeClassname";
import { HTMLAttributes, ReactNode } from "react";
import { VariantProps, cva } from "class-variance-authority";

const wrapperVariants = cva([], {
  variants: {
    size: {
      primary: ["text-center"],
      secondary: ["text-start"],
    },
    aligment: {
      center: "flex flex-col items-center",
      start: "flex flex-col items-start",
    },
  },

  defaultVariants: {
    size: "primary",
    aligment: "center",
  },
});

const sectionVariants = cva("", {
  variants: {
    textColor: {
      primary: "text-lightGreen",
    },
    fontSize: {
      xs: "text-xs",
      xl: "text-xl",
    },
  },
  defaultVariants: {
    textColor: "primary",
    fontSize: "xs",
  },
});

const titleVariants = cva(["lg:w-2/4", "leading-tight"], {
  variants: {
    titleColor: {
      primary: "text-black",
    },
    titleSize: {
      lg: "text-md lg:text-lg",
      md: "text-md",
    },
    titleWeight: {
      bold: "font-bold",
    },
    titleAligment: {
      center: "text-center",
      start: "text-start",
    },
  },
  defaultVariants: {
    titleColor: "primary",
    titleSize: "lg",
    titleWeight: "bold",
    titleAligment: "center",
  },
});

type TitleProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof wrapperVariants> &
  VariantProps<typeof sectionVariants> &
  VariantProps<typeof titleVariants> & {
    sectionName: string;
    title: string;
    children?: ReactNode;
    className?: string;
  };

const Title = ({
  sectionName,
  size,
  aligment,
  textColor,
  fontSize,
  titleColor,
  titleSize,
  titleWeight,
  titleAligment,
  title,
  children,
}: TitleProps) => {
  return (
    <div className={cn(wrapperVariants({ size, aligment }))}>
      <small className={cn(sectionVariants({ textColor, fontSize }))}>
        {sectionName}
      </small>
      <h2
        className={cn(
          titleVariants({ titleColor, titleSize, titleWeight, titleAligment })
        )}
      >
        {title}
      </h2>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default Title;
