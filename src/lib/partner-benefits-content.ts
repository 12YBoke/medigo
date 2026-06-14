import {
  World,
  InvoiceIcon,
  WhatsappIcon,
  RoboticIcon,
  Knowledge01Icon,
  QuestionIcon,
} from "@hugeicons/core-free-icons";
import { PartnerBenefit } from "../types/_partner-benefit";

export const PartnerBenefitsContent: PartnerBenefit[] = [
  {
    id: "1",
    title: "Plus de visibilité",
    description: "Atteignez plus de clients dans votre région grâce à MediGo.",
    Icon: World,
  },
  {
    id: "2",
    title: "Plus de demandes qualifiées",
    description:
      "Recevez des demandes de clients vraiment intéressés par vos services.",
    Icon: InvoiceIcon,
  },
  {
    id: "3",
    title: "Réception des commandes via WhatsApp",
    description: "Continuez à utiliser WhatsApp, pas de logiciel complexe.",
    Icon: WhatsappIcon,
  },
  {
    id: "4",
    title: "Aucun logiciel complexe",
    description:
      "Intégration simple, aucune formation longue requise pour votre équipe.",
    Icon: RoboticIcon,
  },
  {
    id: "5",
    title: "Aucun changement majeur dans votre fonctionnement",
    description: "Gardez vos processus actuels, MediGo s'adapte à vous.",
    Icon: Knowledge01Icon,
  },
  {
    id: "6",
    title: "Support MediGo",
    description: "Une équipe dédiée pour vous accompagner à chaque étape.",
    Icon: QuestionIcon,
  },
];
