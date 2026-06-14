"use client";

import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/components/typography/typography";
import { Icons } from "@/ui/components/icons/icons";
import { PartnershipFlowContent } from "@/lib/partnership-flow-content";

export const PartnershipFlow = () => {
  return (
    <Container className="relative bg-white">
      <Container className="py-20 md:py-32 lg:py-40 flex flex-col gap-12 md:gap-16 items-center px-5 md:px-20 lg:px-40 2xl:px-60">
        <Container className="flex flex-col items-center gap-4 text-center max-w-2xl">
          <Typography variant="title">
            Comment fonctionne le partenariat
          </Typography>
          <Typography variant="body" className="text-neutral-600">
            Un processus simple et transparent pour faciliter la rencontre entre
            clients et pharmacies.
          </Typography>
        </Container>

        <Container className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
          {PartnershipFlowContent.map(
            ({ id, step, title, description, Icon }, index) => (
              <Container key={id} className="flex flex-col">
                {/* Card */}
                <Container className="relative flex flex-col items-center gap-4 p-6 md:p-8 rounded-2xl bg-secondary-50 flex-1">
                  {/* Step Circle */}
                  <Container className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary-500 flex items-center justify-center flex-shrink-0">
                    <Typography
                      variant="heading"
                      className="text-white font-bold"
                    >
                      {step}
                    </Typography>
                  </Container>

                  {/* Icon */}
                  {Icon && (
                    <Icons
                      icon={Icon}
                      size={40}
                      className="text-primary-600 md:size-12"
                    />
                  )}

                  {/* Content */}
                  <Container className="flex flex-col items-center gap-2 text-center">
                    <Typography variant="heading" className="font-semibold">
                      {title}
                    </Typography>
                    <Typography variant="body" className="text-neutral-600">
                      {description}
                    </Typography>
                  </Container>
                </Container>

                {/* Arrow for desktop (not last item) */}
                {index < PartnershipFlowContent.length - 1 && (
                  <Container className="hidden lg:flex justify-center mt-4">
                    <Typography className="text-2xl text-primary-500">
                      ↓
                    </Typography>
                  </Container>
                )}
              </Container>
            ),
          )}
        </Container>
      </Container>
    </Container>
  );
};
