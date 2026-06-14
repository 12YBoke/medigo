"use client";

import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/components/typography/typography";
import { UseRipple } from "@/ui/components/ripple/use-ripple";

export const FinalCTA = () => {
  return (
    <Container className="relative bg-primary-950">
      <UseRipple>
        <Container className="py-20 md:py-32 lg:py-40 flex flex-col gap-8 md:gap-12 items-center text-center px-5 md:px-20 lg:px-40 2xl:px-60">
          <Container className="flex flex-col items-center gap-6">
            <Typography variant="display" className="text-white max-w-3xl">
              Besoin d&apos;un médicament ?
            </Typography>
            <Typography
              variant="body"
              className="text-white/90 max-w-2xl text-lg"
            >
              Trouvez rapidement une pharmacie partenaire et réservez en
              quelques minutes. Simple, rapide, et sans surprise.
            </Typography>
          </Container>
        </Container>
      </UseRipple>
    </Container>
  );
};
