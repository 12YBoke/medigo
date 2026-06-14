"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Container } from "../container/container";
import { Typography } from "../typography/typography";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end 80%"], // Fin de l'animation lorsque le dernier point est au milieu de l'écran
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [1, 1]);

  return (
    <div className="w-full bg-white" ref={containerRef}>
      <div ref={ref} className="relative pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-row justify-start pt-10 md:pt-40 gap-0 lg:gap-10"
          >
            <Container className="sticky flex flex-col md:flex-row z-40 items-center top-40">
              <Container className="h-10 absolute left-3 w-10 rounded-full bg-white flex items-center justify-center">
                <Container className="h-4 w-4 rounded-full bg-neutral-200 border border-neutral-300 p-2" />
              </Container>
            </Container>
            <Container className="relative pl-16 lg:pl-4  w-full">
              <Container className="mb-4">
                <Typography variant="subtitle">{item.title}</Typography>
              </Container>
              {item.content}{" "}
            </Container>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-primary-300 via-primary-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
