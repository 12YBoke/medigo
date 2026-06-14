"use client";

import { HTMLAttributes, useEffect, useRef } from "react";

type Dot = {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
};

interface ConnectingDotsProps extends HTMLAttributes<HTMLDivElement> {
  dotCount?: number;
  lineDistance?: number;
  dotColor?: string;
  lineColor?: string;
  width?: number | string;
  height?: number | string;
}

export default function ConnectingDots({
  dotCount = 100,
  lineDistance = 150,
  dotColor = "#fff",
  lineColor = "rgba(255,255,255,0.6)",
  width = "100%",
  height = "100%",
  style,
  className,
  ...props
}: ConnectingDotsProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const dotsRef = useRef<Dot[]>([]);
  const rafRef = useRef<number | null>(null);

  const sizeRef = useRef({ w: 0, h: 0 });
  const configRef = useRef({ dotCount, lineDistance, dotColor, lineColor });

  // Update config refs when props change
  useEffect(() => {
    configRef.current = { dotCount, lineDistance, dotColor, lineColor };
  }, [dotCount, lineDistance, dotColor, lineColor]);

  const distance = (
    p1: { x: number; y: number },
    p2: { x: number; y: number },
  ): number => {
    const xs = p2.x - p1.x;
    const ys = p2.y - p1.y;
    return Math.sqrt(xs * xs + ys * ys);
  };

  const initDots = (count: number, w: number, h: number): void => {
    const arr: Dot[] = [];
    for (let i = 0; i < count; i++) {
      arr.push({
        x: Math.random() * w,
        y: Math.random() * h,
        radius: Math.random() * 1 + 1,
        vx: Math.floor(Math.random() * 50) - 25,
        vy: Math.floor(Math.random() * 50) - 25,
      });
    }
    dotsRef.current = arr;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const DPR =
      typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;

    const resize = (): void => {
      const rect = canvas.getBoundingClientRect();
      const w = Math.max(1, rect.width || window.innerWidth);
      const h = Math.max(1, rect.height || window.innerHeight);

      canvas.width = Math.floor(w * DPR);
      canvas.height = Math.floor(h * DPR);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);

      // Initialize or reinitialize dots if count changed
      if (
        !dotsRef.current.length ||
        dotsRef.current.length !== configRef.current.dotCount
      ) {
        initDots(configRef.current.dotCount, w, h);
      } else if (sizeRef.current.w && sizeRef.current.h) {
        // Scale dots when container size changes
        const sx = w / sizeRef.current.w;
        const sy = h / sizeRef.current.h;
        for (let i = 0; i < dotsRef.current.length; i++) {
          dotsRef.current[i].x *= sx;
          dotsRef.current[i].y *= sy;
        }
      }

      sizeRef.current = { w, h };
    };

    const draw = (): void => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";

      // Draw dots
      for (let i = 0; i < dotsRef.current.length; i++) {
        const dot = dotsRef.current[i];
        ctx.fillStyle = configRef.current.dotColor;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "black";
        ctx.stroke();
      }

      // Draw connecting lines
      ctx.beginPath();
      for (let i = 0; i < dotsRef.current.length; i++) {
        const dotI = dotsRef.current[i];
        ctx.moveTo(dotI.x, dotI.y);
        for (let j = 0; j < dotsRef.current.length; j++) {
          const dotJ = dotsRef.current[j];
          if (distance(dotI, dotJ) < configRef.current.lineDistance) {
            ctx.lineTo(dotJ.x, dotJ.y);
          }
        }
      }
      ctx.lineWidth = 0.05;
      ctx.strokeStyle = configRef.current.lineColor;
      ctx.stroke();
    };

    const update = (): void => {
      const FPS = 60;
      for (let i = 0; i < dotsRef.current.length; i++) {
        const dot = dotsRef.current[i];
        dot.x += dot.vx / FPS;
        dot.y += dot.vy / FPS;

        if (dot.x < 0 || dot.x > canvas.width / DPR) dot.vx = -dot.vx;
        if (dot.y < 0 || dot.y > canvas.height / DPR) dot.vy = -dot.vy;
      }
    };

    const tick = (): void => {
      draw();
      update();
      rafRef.current = requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener("resize", resize);
    tick();

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      className={className}
      style={{
        position: "relative",
        width,
        height,
        overflow: "hidden",
        ...style,
      }}
      {...props}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />
    </div>
  );
}
