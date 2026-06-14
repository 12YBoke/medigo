import { HeroBanner } from "@/ui/modules/landing-page/hero-banner/hero-banner";
import { HowItWorks } from "@/ui/modules/landing-page/how-it-works/how-it-works";
import { Benefits } from "@/ui/modules/landing-page/benefits/benefits";
import { Approach } from "@/ui/modules/landing-page/approach/approach";
import { PartnershipFlow } from "@/ui/modules/landing-page/partnership-flow/partnership-flow";
import { ForPharmacies } from "@/ui/modules/landing-page/for-pharmacies/for-pharmacies";
import { FAQ } from "@/ui/modules/landing-page/faq/faq";
import { FinalCTA } from "@/ui/modules/landing-page/final-cta/final-cta";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroBanner />
      <HowItWorks />
      <Benefits />
      <Approach />
      <PartnershipFlow />
      <ForPharmacies />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
