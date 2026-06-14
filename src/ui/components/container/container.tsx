"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

type VariantType = "Default" | "Glass-Effect" | "Gradient";
type AnimationType = "MoveOnVisible" | "Parallax" | "None";
type AxisType = "x" | "y";

interface ContainerProps {
  children?: ReactNode;
  className?: string;
  variant?: VariantType;
  animation?: AnimationType;
  threshold?: number;
  triggerOnce?: boolean;
  axis?: AxisType;
  xValue?: number;
  yValue?: number;
  duration?: number;
  delay?: number;
  id?: string;
  blur?: string;
}

export const Container = ({
  children,
  className,
  variant = "Default",
  animation = "None",
  threshold = 0.25,
  triggerOnce = true,
  axis = "y",
  yValue = 30,
  xValue = 30,
  duration = 0.5,
  delay = 0.25,
  id,
  blur = "6px",
}: ContainerProps) => {
  const bgStyles = {
    Default: "",
    "Glass-Effect": "bg-white/30 backdrop-blur-lg",
    Gradient: "gradient-effect",
  }[variant];

  const { ref, inView } = useInView({
    triggerOnce,
    threshold,
  });

  if (animation === "MoveOnVisible") {
    const isYAxis = axis === "y";
    return (
      <motion.div
        ref={ref}
        initial={{
          [axis]: isYAxis ? yValue : xValue,
          opacity: 0,
          filter: `blur(${blur})`,
        }}
        animate={{
          [axis]: inView ? 0 : isYAxis ? yValue : xValue,
          opacity: inView ? 1 : 0,
          filter: inView ? `blur(0px)` : `blur(${blur})`,
        }}
        transition={{ duration, delay: 0.04 + delay, ease: "easeOut" }}
        className={clsx(bgStyles, className, "animate")}
        id={id}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={clsx(bgStyles, className)} id={id}>
      {children}
    </div>
  );
};
