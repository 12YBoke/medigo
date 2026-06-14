"use client";

import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/components/typography/typography";
import { Button } from "@/ui/components/button/button";
import { PartnerBenefitsContent } from "@/lib/partner-benefits-content";
import { Icons } from "@/ui/components/icons/icons";

export const ForPharmacies = () => {
  return (
    <Container
      id="pharmacies-partenaires"
      className="relative scroll-mt-24 bg-stone-100"
    >
      <Container className="py-20 md:py-32 lg:py-40 flex flex-col gap-12 md:gap-16 items-center px-5 md:px-20 lg:px-40 2xl:px-64">
        <Container className="flex flex-col items-center gap-4 text-center max-w-3xl">
          <Typography variant="display">
            Développez votre pharmacie avec{" "}
            <span className="text-secondary-600">MediGo</span>
          </Typography>
          <Typography variant="body" className="text-neutral-600">
            Rejoignez notre réseau de plus de 5000 pharmacies partenaires et
            augmentez votre clientèle sans changer votre fonctionnement.
          </Typography>
        </Container>

        <Container className="w-full grid grid-cols-1 md:grid-cols-3 gap-1">
          {PartnerBenefitsContent.map(({ id, title, description, Icon }) => (
            <Container
              key={id}
              className="flex flex-col gap-4 p-4 rounded-lg bg-white"
            >
              {Icon && (
                <Container className="flex items-center justify-center w-20 h-20 rounded-full bg-secondary-200">
                  <Icons icon={Icon} size={40} className="text-secondary-800" />
                </Container>
              )}
              <Container className="flex flex-col gap-2">
                <Typography variant="heading">{title}</Typography>
                <Typography variant="body" className="text-neutral-600">
                  {description}
                </Typography>
              </Container>
            </Container>
          ))}
        </Container>

        <Container>
          <Button ariaLabel="Contactez-mous" variant="secondary">
            Contatez-nous
          </Button>
        </Container>
      </Container>
    </Container>
  );
};
