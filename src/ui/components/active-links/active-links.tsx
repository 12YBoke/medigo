"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

interface Props {
  href: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * ActiveLink is a navigation component that highlights itself as active when its href matches the current route.
 *
 * The component compares the current pathname with the provided `href` to determine if the link is active.
 * Special handling can be added for specific route patterns, such as admin or article pages.
 *
 * @param props - Component props.
 * @param props.href - The link destination.
 * @param props.children - The link content.
 * @param props.className - Optional additional CSS classes.
 *
 * @returns A Next.js Link component styled as active if the route matches.
 */
export const ActiveLink = ({ href, children, className }: Props) => {
  const pathname = usePathname();
  // Extract base paths for comparison
  const basePath = (path: string) => {
    // For admin section direct links
    if (path.startsWith("/admin/")) {
      return path;
    }

    return path;
  };

  const isActive: boolean = useMemo(() => {
    const activePathBase = basePath(pathname);
    const linkPathBase = basePath(href);
    return activePathBase === linkPathBase;
  }, [pathname, href]);

  return (
    <Link
      className={clsx(
        isActive ? "text-primary-500" : "",
        "hover:text-primary-500 animate w-full block",
        className,
      )}
      href={href}
    >
      {children}
    </Link>
  );
};
