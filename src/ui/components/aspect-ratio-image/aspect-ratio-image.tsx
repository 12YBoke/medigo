import Image, { ImageProps } from "next/image";
import { FC } from "react";

interface AspectRatioImageProps extends Omit<ImageProps, "src" | "alt"> {
  src: string;
  alt: string;
  aspectRatio?: "auto" | "maintain";
}

/**
 * AspectRatioImage is a React functional component that renders an image with a specified aspect ratio.
 * It automatically adjusts the image's width and height based on its natural dimensions to maintain the aspect ratio,
 * unless the `aspectRatio` prop is set to "auto". The component uses the Next.js `Image` component for optimized image rendering.
 *
 * @param src - The source URL of the image.
 * @param alt - The alt text for the image.
 * @param width - The width of the image (default is 100).
 * @param height - The height of the image (default is 100).
 * @param className - Additional CSS classes for styling the image (default is "w-full h-full object-cover").
 * @param aspectRatio - The aspect ratio to maintain for the image. If set to "auto", no adjustment is made (default is "auto").
 * @param props - Additional props passed to the underlying Image component.
 *
 * @returns A responsive image component that maintains the specified aspect ratio.
 */
export const AspectRatioImage: FC<AspectRatioImageProps> = ({
  src,
  alt,
  width = 100,
  height = 100,
  className = "w-full h-full object-cover",
  aspectRatio = "auto",
  ...props
}) => {
  const handleLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    if (aspectRatio === "auto") return;

    const img = event.currentTarget;
    if (img.naturalWidth > img.naturalHeight) {
      img.style.width = "96%";
      img.style.height = "auto";
    } else {
      img.style.width = "auto";
      img.style.height = "96%";
    }
  };

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onLoad={handleLoad}
      {...props}
    />
  );
};
