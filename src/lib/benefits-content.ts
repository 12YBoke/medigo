import { BenefitItem } from "../types/_benefit-item";
import {
  BadgeCheckIcon,
  PaymentSuccess01Icon,
  ShoppingBasketAdd01Icon,
  WhatsappIcon,
  TruckDeliveryIcon,
  AnonymousIcon,
  CustomerSupportIcon,
  NeuralNetworkIcon,
} from "@hugeicons/core-free-icons";

export const BenefitsContent: BenefitItem[] = [
  {
    id: "1",
    title: "Pharmacies vérifiées",
    description: "Tous nos partenaires sont contrôlés et reconnus.",
    Icon: BadgeCheckIcon,
  },
  {
    id: "2",
    title: "Prix transparents",
    description: "Aucune surprise, prix affichés à l'avance.",
    Icon: PaymentSuccess01Icon,
  },
  {
    id: "3",
    title: "Réservation rapide",
    description: "En quelques clics, votre médicament est réservé.",
    Icon: ShoppingBasketAdd01Icon,
  },
  {
    id: "4",
    title: "Service WhatsApp",
    description: "Communiquez directement avec les pharmacies.",
    Icon: WhatsappIcon,
  },
  {
    id: "5",
    title: "Livraison disponible",
    description: "Livraison à domicile ou retrait en pharmacie.",
    Icon: TruckDeliveryIcon,
  },
  {
    id: "6",
    title: "Données confidentielles",
    description: "Vos informations sont sécurisées et protégées.",
    Icon: AnonymousIcon,
  },
  {
    id: "7",
    title: "Assistance réactive",
    description: "Une équipe prête à vous aider 24/7.",
    Icon: CustomerSupportIcon,
  },
  {
    id: "8",
    title: "Réseau de pharmacies partenaires",
    description: "Plus de 5000 pharmacies à proximité.",
    Icon: NeuralNetworkIcon,
  },
];
