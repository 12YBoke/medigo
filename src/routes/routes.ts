export type RouteItem = {
  baseUrl: string;
  title: string;
  children?: Array<{ id: string; baseUrl: string; title: string }>;
};

export const MainRoutes: RouteItem[] = [];
