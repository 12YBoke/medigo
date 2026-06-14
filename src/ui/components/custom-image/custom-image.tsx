"use client";

import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import { CSSProperties } from "react";

interface Props {
  src: string | StaticImageData;
  alt: string;
  priority?: boolean;
  unoptimized?: boolean;
  className?: string;
  objectFit?: "cover" | "contain" | "fill" | "scale-down";
  quality?: number;
  loading?: "lazy" | "eager";
}

export const CustomImage = ({
  src,
  alt,
  priority = false,
  unoptimized = true,
  className,
  objectFit = "cover",
  quality = 95,
  loading = "lazy",
}: Props) => {
  const imageStyle: CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: objectFit,
    objectPosition: "center",
  };

  return (
    <div className={clsx("relative w-full h-full overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        quality={quality}
        priority={priority}
        unoptimized={unoptimized}
        loading={loading}
        style={imageStyle}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 95vw"
      />
    </div>
  );
};
