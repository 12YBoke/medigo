"use client";
import { Button as ButtonShadcn } from "@/shadcnui/ui/button";
import clsx from "clsx";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { Typography } from "@/ui/components/typography/typography";
import { useMemo } from "react";

type ButtonVariant = "primary" | "secondary" | "accent" | "ghost";
type ButtonOutline = "outline" | "default";
type ButtonType = "link" | "action" | "default";
type ButtonSize = "default" | "sm" | "lg" | "icon";

interface Props {
  action?: () => Promise<void>;
  target?: "_blank" | "_self";
  baseUrl?: string;
  variant?: ButtonVariant;
  outline?: ButtonOutline;
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  buttonType?: ButtonType;
  width?: ButtonSize;
  Icon?: React.ElementType;
  CustomIcon?: StaticImageData;
  type?: "submit" | "reset" | "button";
  fill?: boolean;
  ariaLabel: string;
  iconSize?: string;
}

export const Button = ({
  target = "_self",
  action = async () => {},
  baseUrl,
  buttonType = "default",
  children,
  className,
  disabled = false,
  isLoading = false,
  Icon,
  CustomIcon,
  variant = "primary",
  outline = "default",
  width = "default",
  type = "button",
  fill = false,
  iconSize,
  ariaLabel,
}: Props) => {
  const { colorStyles, txt_colorStyles } = useMemo(() => {
    let colorStyles = "";
    let txt_colorStyles = "";

    // Default styles (filled buttons)
    if (outline === "default") {
      switch (variant) {
        case "primary":
          colorStyles = "bg-primary-500 hover:bg-primary-400";
          txt_colorStyles = "text-white";
          break;
        case "secondary":
          colorStyles = "bg-secondary-500 hover:bg-secondary-400";
          txt_colorStyles = "text-white";
          break;
        case "accent":
          colorStyles = "bg-accent hover:bg-accent/90";
          txt_colorStyles = "text-white";
          break;
        case "ghost":
          colorStyles = "bg-background hover:bg-background/50";
          txt_colorStyles = "text-primary-500 hover:text-primary-600";
          break;
      }
    }
    // Outline styles
    else {
      switch (variant) {
        case "primary":
          colorStyles =
            "bg-transparent hover:bg-primary-50 border-primary-500 border-2";
          txt_colorStyles = "text-primary-500";
          break;
        case "secondary":
          colorStyles =
            "bg-transparent hover:bg-secondary-50 border-secondary-500 border-2";
          txt_colorStyles = "text-secondary-500";
          break;
        case "accent":
          colorStyles =
            "bg-transparent hover:bg-accent/10 border-accent border-2";
          txt_colorStyles = "text-accent";
          break;
        case "ghost":
          colorStyles =
            "bg-transparent hover:bg-neutral-100 border-transparent";
          txt_colorStyles = "text-primary-500";
          break;
      }
    }

    return { colorStyles, txt_colorStyles };
  }, [variant, outline]);

  const handleClick = async () => {
    if (action) {
      await action();
    }
  };

  const renderIconContent = () => (
    <>
      {isLoading ? (
        <Loader2
          className={clsx(
            "animate-spin",
            children ? "" : "",
            iconSize || "h-8 w-8",
          )}
        />
      ) : Icon ? (
        <Icon
          fill={fill ? "currentColor" : "transparent"}
          className={clsx(children ? "" : "", iconSize || "h-8 w-8")}
        />
      ) : CustomIcon ? (
        <Image
          width={60}
          height={60}
          src={CustomIcon}
          alt={`${typeof CustomIcon === "string" ? CustomIcon : "button"} icon`}
          className={clsx(children ? "" : "", iconSize || "h-8 w-8")}
        />
      ) : null}
      {children && <Typography className="text-current">{children}</Typography>}
    </>
  );

  const commonProps = {
    variant: outline,
    className: clsx(
      "animate cursor-pointer flex flex-row items-center justify-center font-bold",
      children ? "rounded-lg" : "rounded-full",
      txt_colorStyles,
      colorStyles,
      className,
    ),
    size: children
      ? width === "default"
        ? "default"
        : width
      : ("icon" as "default" | "icon" | "sm" | "lg"),
    disabled: isLoading || disabled,
    type,
    "aria-label": ariaLabel,
  };

  if (buttonType === "link" && baseUrl) {
    return (
      <ButtonShadcn {...commonProps}>
        <Link href={baseUrl} target={target}>
          {renderIconContent()}
        </Link>
      </ButtonShadcn>
    );
  }

  if (buttonType === "action") {
    return (
      <ButtonShadcn {...commonProps} onClick={handleClick}>
        {renderIconContent()}
      </ButtonShadcn>
    );
  }

  return <ButtonShadcn {...commonProps}>{renderIconContent()}</ButtonShadcn>;
};
