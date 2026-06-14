"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { Typography } from "../typography/typography";
import clsx from "clsx";

interface Props {
  from?: number;
  to: number;
  className?: string;
  variant?:
    | "title"
    | "subtitle"
    | "heading"
    | "display"
    | "large"
    | "medium"
    | "body"
    | "small";
  duration?: number;
  delay?: number;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  format?: (value: number) => string;
}

const defaultFormatter = (value: number): string => {
  return new Intl.NumberFormat("fr-FR").format(Math.round(value));
};

export const CountUpAnimation = ({
  from = 0,
  to,
  duration = 2,
  delay = 0,
  className,
  variant = "body",
  prefix,
  suffix,
  format = defaultFormatter,
}: Props) => {
  const count = useMotionValue(from);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const displayValue = useTransform(count, (latest) => {
    return format(latest);
  });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, {
        duration,
        delay,
        ease: "easeOut",
      });

      return () => controls.stop();
    }
  }, [inView, to, duration, delay, count]);

  return (
    <Typography
      variant={variant}
      className={clsx("inline-flex items-center gap-1", className)}
    >
      {prefix}
      <motion.span ref={ref}>{displayValue}</motion.span>
      {suffix}
    </Typography>
  );
};
