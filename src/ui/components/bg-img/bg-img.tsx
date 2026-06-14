import Image, { ImageProps, StaticImageData } from "next/image";
import { Container } from "../container/container";
import clsx from "clsx";
import { ReactNode } from "react";

interface BgImgProps extends Omit<ImageProps, "src" | "alt"> {
  children?: ReactNode;
  className?: string;
  containerClassName?: string;
  src: StaticImageData | string;
  alt: string;
  loading?: "eager" | "lazy";
  priority?: boolean;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  objectPosition?: string;
}

export const BgImg = ({
  children,
  src,
  alt,
  className,
  containerClassName,
  loading = "lazy",
  priority = false,
  objectFit = "cover",
  objectPosition = "center",
  sizes = "100vw",
  ...imageProps
}: BgImgProps) => {
  return (
    <Container className={clsx("relative", className)}>
      <Container
        className={clsx("w-full h-full overflow-auto", containerClassName)}
      >
        <Image
          src={src}
          alt={alt}
          fill={true}
          className={clsx(
            `object-${objectFit} object-${objectPosition} z-[-1]`
          )}
          sizes={sizes}
          priority={priority}
          loading={loading}
          {...imageProps}
        />
        {children}
      </Container>
    </Container>
  );
};
