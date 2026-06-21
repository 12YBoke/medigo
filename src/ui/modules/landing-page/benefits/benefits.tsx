"use client";

import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/components/typography/typography";
import { Icons } from "@/ui/components/icons/icons";
import { BenefitsContent } from "@/lib/benefits-content";
import { Button } from "@/ui/components/button/button";
import { WHATSAPP_NUMBER } from "@/lib/contacts";

export const Benefits = () => {
  return (
    <Container
      id="pourquoi-medigo"
      className="relative scroll-mt-24 bg-[#091023]"
    >
      <Container className="py-20 md:py-40 lg:py-52 flex flex-col gap-12 md:gap-16 items-center px-4 lg:px-16 2xl:px-32">
        <Container className="flex flex-col items-center gap-4 text-center max-w-2xl">
          <Typography variant="display" className="text-white">
            Pourquoi choisir <span className="text-primary-600">MediGo</span>
          </Typography>
          <Typography variant="body" className="text-neutral-400">
            Une plateforme conçue pour simplifier votre accès aux médicaments
            avec sécurité et transparence.
          </Typography>
        </Container>

        <Container className="w-full grid grid-cols-2 lg:grid-cols-4 gap-1">
          {BenefitsContent.map(({ id, title, description, Icon }) => (
            <Container
              key={id}
              className="bg-[#1a202e] hover:bg-[#2d3748] hover:cursor-pointer animate p-4 rounded-lg flex flex-col gap-4"
            >
              {Icon && (
                <Container className="flex items-center justify-center w-20 h-20 rounded-full bg-[#0f172a]">
                  <Icons icon={Icon} size={40} className="text-secondary-600" />
                </Container>
              )}
              <Typography variant="heading" className="text-white">
                {title}
              </Typography>
              <Typography variant="body" className="text-neutral-400">
                {description}
              </Typography>
            </Container>
          ))}
        </Container>

        <Container className="flex flex-col items-center gap-4 text-center max-w-2xl">
          <Typography variant="heading" className="text-white">
            Rejoignez notre réseau de pharmacies partenaires
          </Typography>
          <Typography variant="body" className="text-neutral-400">
            Plus de 5000 pharmacies à proximité, prêtes à vous servir avec
            professionnalisme et rapidité.
          </Typography>
          <Container>
            <Button
              ariaLabel="Contactez-nous"
              buttonType="link"
              target="_blank"
              baseUrl={`https://wa.me/${WHATSAPP_NUMBER}`}
            >
              Contactez-nous
            </Button>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};
