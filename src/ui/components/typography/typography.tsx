import React, { forwardRef } from "react";
import { clsx } from "clsx";

type TypographyVariant =
  | "display"
  | "title"
  | "subtitle"
  | "heading"
  | "large"
  | "medium"
  | "body"
  | "small";

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  variant?: TypographyVariant;
}

export const Typography = forwardRef<
  HTMLHeadingElement | HTMLParagraphElement,
  TypographyProps
>(({ variant = "body", children, className }, ref) => {
  const variantStyles: Record<TypographyVariant, string> = {
    display: "text-main-title md:text-main-title-md lg:text-main-title-lg",
    title: "text-title md:text-title-md lg:text-title-lg",
    subtitle: "text-subtitle md:text-subtitle-md lg:text-subtitle-lg",
    heading: "text-heading lg:text-heading-lg",
    large: "text-large md:text-large-md lg:text-large-lg",
    medium: "text-medium md:text-medium-md lg:text-medium-lg",
    body: "text-body lg:text-body-lg ",
    small: "text-small lg:text-small-lg",
  };

  const commonClasses = "text-balance tracking-[.020em]";

  const Component =
    variant === "display"
      ? "h1"
      : variant === "title"
      ? "h2"
      : variant === "subtitle"
      ? "h3"
      : "p";

  return (
    <Component
      ref={ref}
      className={clsx(variantStyles[variant], commonClasses, className)}
    >
      {children}
    </Component>
  );
});

Typography.displayName = "Typography";
