import { PartnershipStep } from "../types/_partnership-step";
import {
  PillIcon,
  CaduceusIcon,
  UserLoveIcon,
  CalendarClockIcon,
} from "@hugeicons/core-free-icons";

export const PartnershipFlowContent: PartnershipStep[] = [
  {
    id: "1",
    step: 1,
    title: "Le client recherche un médicament",
    description:
      "L'utilisateur utilise MediGo pour trouver le médicament dont il a besoin.",
    Icon: PillIcon,
  },
  {
    id: "2",
    step: 2,
    title: "MediGo transmet la demande",
    description:
      "Notre plateforme envoie la demande aux pharmacies partenaires disponibles.",
    Icon: CaduceusIcon,
  },
  {
    id: "3",
    step: 3,
    title: "Une pharmacie confirme",
    description:
      "La pharmacie confirme la disponibilité, le prix et les délais de retrait ou livraison.",
    Icon: UserLoveIcon,
  },
  {
    id: "4",
    step: 4,
    title: "Le client récupère ou se fait livrer",
    description:
      "Retrait en pharmacie ou livraison à domicile selon votre choix.",
    Icon: CalendarClockIcon,
  },
];
