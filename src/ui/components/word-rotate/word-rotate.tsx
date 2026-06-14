"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";

type TypographyVariant =
  | "title"
  | "subtitle"
  | "heading"
  | "display"
  | "large"
  | "medium"
  | "body"
  | "small";
interface WordRotateProps {
  words: string[];
  duration?: number;
  className?: string;
  variant?: TypographyVariant;
}

export function WordRotate({
  words,
  variant = "body",
  duration = 3000,
  className,
}: WordRotateProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [words, duration]);

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

  const commonClasses = "text-balance inline-block";

  return (
    <span className="overflow-hidden py-1">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          className={clsx(variantStyles[variant], commonClasses, className)}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
