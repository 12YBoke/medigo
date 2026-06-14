"use client";

import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/components/typography/typography";
import { Button } from "@/ui/components/button/button";

export const FinalCTA = () => {
  return (
    <Container className="relative bg-linear-to-r from-primary-500 to-primary-600">
      <Container className="py-20 md:py-32 lg:py-40 flex flex-col gap-8 md:gap-12 items-center text-center px-5 md:px-20 lg:px-40 2xl:px-60">
        <Container className="flex flex-col items-center gap-6">
          <Typography variant="title" className="text-white max-w-3xl">
            Besoin d'un médicament ?
          </Typography>
          <Typography
            variant="body"
            className="text-white/90 max-w-2xl text-lg"
          >
            Trouvez rapidement une pharmacie partenaire et réservez en quelques
            minutes. Simple, rapide, et sans surprise.
          </Typography>
        </Container>

        <Container className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
          <Button
            ariaLabel="Rechercher un médicament"
            variant="secondary"
            className="px-8 py-4 md:px-12 md:py-6 text-base font-semibold"
          >
            Rechercher un médicament
          </Button>
          <Button
            ariaLabel="Contacter sur WhatsApp"
            variant="accent"
            outline="outline"
            className="px-8 py-4 md:px-12 md:py-6 text-base font-semibold border-2 border-white text-white bg-transparent hover:bg-white/10"
          >
            Contacter sur WhatsApp
          </Button>
        </Container>
      </Container>
    </Container>
  );
};
