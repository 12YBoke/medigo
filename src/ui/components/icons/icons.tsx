import { HugeiconsIcon, IconSvgElement } from "@hugeicons/react";

interface Props {
  icon: IconSvgElement;
  size?: number;
  className?: string;
}

export const Icons = ({ icon, size, className }: Props) => {
  return <HugeiconsIcon icon={icon} size={size} className={className} />;
};
