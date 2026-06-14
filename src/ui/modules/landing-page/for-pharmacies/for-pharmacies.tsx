"use client";

import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/components/typography/typography";
import { Button } from "@/ui/components/button/button";
import { PartnerBenefitsContent } from "@/lib/partner-benefits-content";

export const ForPharmacies = () => {
  return (
    <Container className="relative bg-neutral-50">
      <Container className="py-20 md:py-32 lg:py-40 flex flex-col gap-12 md:gap-16 items-center px-5 md:px-20 lg:px-40 2xl:px-60">
        <Container className="flex flex-col items-center gap-4 text-center max-w-3xl">
          <Typography variant="title">
            Développez votre pharmacie avec MediGo
          </Typography>
          <Typography variant="body" className="text-neutral-600">
            Rejoignez notre réseau de plus de 5000 pharmacies partenaires et
            augmentez votre clientèle sans changer votre fonctionnement.
          </Typography>
        </Container>

        <Container className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {PartnerBenefitsContent.map(({ id, title, description }) => (
            <Container
              key={id}
              className="flex gap-4 p-6 rounded-xl bg-white hover:shadow-md transition-shadow duration-300"
            >
              <Container className="flex-shrink-0">
                <Container className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary-100 flex items-center justify-center">
                  <Typography
                    variant="heading"
                    className="text-primary-600 font-bold"
                  >
                    ✓
                  </Typography>
                </Container>
              </Container>

              <Container className="flex flex-col gap-2">
                <Typography variant="heading" className="font-semibold">
                  {title}
                </Typography>
                <Typography variant="body" className="text-neutral-600">
                  {description}
                </Typography>
              </Container>
            </Container>
          ))}
        </Container>

        <Container className="mt-8 md:mt-12">
          <Button
            ariaLabel="Devenir pharmacie partenaire"
            variant="primary"
            className="px-8 py-4 md:px-12 md:py-6 text-lg"
          >
            Devenir pharmacie partenaire
          </Button>
        </Container>
      </Container>
    </Container>
  );
};
