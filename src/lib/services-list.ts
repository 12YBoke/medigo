import type { ComponentType } from "react";

export type ServiceItem = {
  id: string;
  name: string;
  description: string;
  badge?: string;
  Icon?: ComponentType<{ size?: number }>;
  image?: string;
  url?: string;
};

export const ServicesList: ServiceItem[] = [];
