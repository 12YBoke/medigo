import { PartnershipStep } from "../types/_partnership-step";
import {
  JobShareIcon,
  AddInvoiceIcon,
  CheckmarkSquare04Icon,
  Cashier02Icon,
} from "@hugeicons/core-free-icons";

export const PartnershipFlowContent: PartnershipStep[] = [
  {
    id: "1",
    step: 1,
    title: "Rejoignez MediGo",
    description:
      "Inscrivez votre pharmacie et fournissez les informations nécessaires à la vérification de votre établissement.",
    Icon: JobShareIcon,
  },
  {
    id: "2",
    step: 2,
    title: "Recevez des demandes",
    description:
      "Lorsqu'un client recherche un médicament disponible dans votre zone, MediGo vous transmet la demande directement via WhatsApp.",
    Icon: AddInvoiceIcon,
  },
  {
    id: "3",
    step: 3,
    title: "Confirmez la disponibilité",
    description:
      "Vous indiquez simplement si le médicament est disponible ainsi que son prix. Aucun logiciel complexe n'est nécessaire.",
    Icon: CheckmarkSquare04Icon,
  },
  {
    id: "4",
    step: 4,
    title: "Réalisez la vente",
    description:
      "Le client récupère sa commande en pharmacie ou choisit la livraison lorsque celle-ci est disponible.",
    Icon: Cashier02Icon,
  },
];
