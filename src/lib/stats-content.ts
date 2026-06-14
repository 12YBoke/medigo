import { _StatItem } from "../types/_stat-item";
import {
  CaduceusIcon,
  PillIcon,
  UserLoveIcon,
  CalendarClockIcon,
} from "@hugeicons/core-free-icons";

export const StatsContent: _StatItem[] = [
  {
    id: "1",
    count: 5000,
    prefix: "+",
    title: "Pharmacies partenaires",
    Icon: CaduceusIcon,
  },
  {
    id: "2",
    count: 20000,
    prefix: "+",
    title: "Médicaments disponibles",
    Icon: PillIcon,
  },
  {
    id: "3",
    count: 100000,
    prefix: "+",
    title: "Utilisateurs satisfaits",
    Icon: UserLoveIcon,
  },
  {
    id: "4",
    count: 24,
    suffix: "/7",
    title: "Support client",
    Icon: CalendarClockIcon,
  },
];
