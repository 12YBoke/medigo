"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useMemo } from "react";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  variant?: {
    hidden: { y: number; opacity?: number; filter?: string };
    visible: { y: number; opacity?: number; filter?: string };
  };
  duration?: number;
  delay?: number;
  yOffset?: number;
  blur?: string;
  threshold?: number;
  once?: boolean;
}

export default function BlurFade({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  yOffset = 6,
  blur = "6px",
  threshold = 0.25,
  once = true,
}: BlurFadeProps) {
  const { ref, inView } = useInView({
    triggerOnce: once,
    threshold,
  });

  const defaultVariants: Variants = useMemo(
    () => ({
      hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
      visible: { y: 0, opacity: 1, filter: "blur(0px)" },
    }),
    [yOffset, blur]
  );

  const combinedVariants = variant || defaultVariants;

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        exit="hidden"
        variants={combinedVariants}
        transition={{
          delay: delay,
          duration,
          ease: "easeOut",
        }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
