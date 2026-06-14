"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/shadcnui/ui/breadcrumb";
import { HomeIcon } from "lucide-react";
import { Typography } from "@/ui/components/typography/typography";
import { Container } from "@/ui/components/container/container";
import { useMemo, Fragment } from "react";
import { MainRoutes } from "@/routes/routes";

// Segments à ignorer dans le fil d'Ariane
const IGNORED_SEGMENTS: string | string[] = [];

// Traductions personnalisées pour certains chemins
const CUSTOM_ROUTE_TRANSLATIONS: Record<string, string> = {
  "/dashboard/products/units": "Unités de produits",
  "/dashboard/products/categories": "Catégories",
};

export const BreadcrumbPath = ({ className }: { className?: string }) => {
  const pathname = usePathname();

  const breadcrumbItems = useMemo(() => {
    // Fonction pour trouver un titre dans les routes définies
    const findRouteTitle = (path: string): string | null => {
      if (path === "/dashboard") return "Tableau de bord";
      for (const section of MainRoutes) {
        if (section.children) {
          for (const child of section.children) {
            if (child.baseUrl === path) return child.title || null;
          }
        } else if (section.baseUrl === path) {
          return section.title;
        }
      }
      if (CUSTOM_ROUTE_TRANSLATIONS[path])
        return CUSTOM_ROUTE_TRANSLATIONS[path];
      return null;
    };

    if (!pathname) return [];

    // Découpe le chemin et filtre les segments à ignorer
    const pathSegments = pathname.split("/").filter(Boolean);
    const filteredSegments = pathSegments.filter(
      (segment) => !IGNORED_SEGMENTS.includes(segment),
    );

    // Si tous les segments sont ignorés, ne rien afficher
    if (filteredSegments.length === 0) return [];

    // Construit les items du breadcrumb
    return filteredSegments.map((segment, index) => {
      const path = `/${filteredSegments.slice(0, index + 1).join("/")}`;
      const routeTitle = findRouteTitle(path);

      let label: string;
      if (routeTitle) {
        label = routeTitle;
      } else {
        label =
          segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");
      }

      const isLastItem = index === filteredSegments.length - 1;

      return {
        path,
        label,
        isLastItem,
        isUndefined: !routeTitle,
      };
    });
  }, [pathname]);

  if (breadcrumbItems.length === 0) return null;

  return (
    <Container className={className}>
      <Breadcrumb>
        <BreadcrumbList>
          {breadcrumbItems.map((item) =>
            item.path === "/dashboard" ? (
              <Fragment key={item.path}>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/dashboard" aria-label="Accueil">
                      <HomeIcon
                        className={`h-4 w-4 ${
                          item.isLastItem ? "text-primary" : ""
                        }`}
                      />
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {!item.isLastItem && <BreadcrumbSeparator />}
              </Fragment>
            ) : (
              <Fragment key={item.path}>
                <BreadcrumbItem>
                  {item.isLastItem ? (
                    <BreadcrumbPage>
                      <Typography
                        className={item.isLastItem ? "text-primary" : ""}
                      >
                        {item.label}
                      </Typography>
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link href={item.path}>
                        <Typography>
                          {item.isUndefined ? "..." : item.label}
                        </Typography>
                      </Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {!item.isLastItem && <BreadcrumbSeparator />}
              </Fragment>
            ),
          )}
        </BreadcrumbList>
      </Breadcrumb>
    </Container>
  );
};
