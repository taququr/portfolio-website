import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const sharedVariants = {
  font: {
    sans: "font-sans",
    mono: "font-mono",
  },
  weight: {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  },
  color: {
    foreground: "text-foreground",
    muted: "text-muted-foreground",
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent",
    destructive: "text-destructive",
    success: "text-success",
    warning: "text-warning",
    info: "text-info",
    sky: "text-sky-700 dark:text-sky-400",
  },
};

const headingVariants = cva("text-balance font-heading tracking-tight transition-colors duration-100", {
  variants: {
    level: {
      h1: "text-3xl sm:text-4xl lg:text-5xl leading-tight sm:leading-none scroll-m-20",
      h2: "text-2xl sm:text-3xl lg:text-4xl leading-snug scroll-m-16",
      h3: "text-xl sm:text-2xl lg:text-3xl leading-snug scroll-m-12",
      h4: "text-lg sm:text-xl lg:text-2xl leading-normal scroll-m-10",
    },
    ...sharedVariants,
  },
  defaultVariants: {
    level: "h1",
    font: "sans",
    weight: "bold",
    color: "foreground",
  },
});

interface HeadingProps
  extends Omit<React.ComponentPropsWithoutRef<"h1">, "color">, VariantProps<typeof headingVariants> {
  asChild?: boolean;
}

function Heading({
  className,
  level = "h1",
  font = "sans",
  weight = "bold",
  color = "foreground",
  asChild = false,
  ...props
}: HeadingProps) {
  const Comp = (asChild ? Slot.Root : level) as React.ElementType;

  return (
    <Comp
      data-slot="typography-heading"
      data-level={level}
      className={cn(headingVariants({ level, font, weight, color }), className)}
      {...props}
    />
  );
}

const paragraphVariants = cva("transition-colors duration-200", {
  variants: {
    size: {
      xs: "text-xs leading-normal",
      sm: "text-xs sm:text-sm leading-normal",
      base: "text-sm sm:text-base leading-relaxed",
      lg: "text-base sm:text-lg leading-relaxed",
      xl: "text-lg sm:text-xl leading-relaxed",
    },
    ...sharedVariants,
  },
  defaultVariants: {
    size: "base",
    font: "sans",
    weight: "normal",
    color: "muted",
  },
});

interface ParagraphProps
  extends Omit<React.ComponentPropsWithoutRef<"p">, "color">, VariantProps<typeof paragraphVariants> {
  asChild?: boolean;
}

function Paragraph({
  className,
  size = "base",
  font = "sans",
  weight = "normal",
  color = "muted",
  asChild = false,
  ...props
}: ParagraphProps) {
  const Comp = asChild ? Slot.Root : "p";

  return (
    <Comp
      data-slot="typography-paragraph"
      className={cn(paragraphVariants({ size, font, weight, color }), className)}
      {...props}
    />
  );
}

export { Heading, Paragraph, headingVariants, paragraphVariants };
