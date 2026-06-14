import { HowItWorksStep } from "../types/_how-it-works-step";
import {
  MapsSearchIcon,
  DeliveryTracking01Icon,
  BalanceScaleIcon,
  ShoppingBasketAdd01Icon,
} from "@hugeicons/core-free-icons";

export const HowItWorksContent: HowItWorksStep[] = [
  {
    id: "1",
    step: 1,
    title: "Recherchez",
    description: "Trouvez le médicament dont vous avez besoin.",
    Icon: MapsSearchIcon,
  },
  {
    id: "2",
    step: 2,
    title: "Comparez",
    description: "Consultez les pharmacies disponibles près de vous.",
    Icon: BalanceScaleIcon,
  },
  {
    id: "3",
    step: 3,
    title: "Réservez",
    description: "Envoyez votre demande en quelques clics.",
    Icon: ShoppingBasketAdd01Icon,
  },
  {
    id: "4",
    step: 4,
    title: "Retirez ou faites-vous livrer",
    description:
      "La pharmacie confirme votre commande et prépare votre retrait ou votre livraison.",
    Icon: DeliveryTracking01Icon,
  },
];
