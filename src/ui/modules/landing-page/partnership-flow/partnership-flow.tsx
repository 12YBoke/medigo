"use client";

import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/components/typography/typography";
import { Icons } from "@/ui/components/icons/icons";
import { PartnershipFlowContent } from "@/lib/partnership-flow-content";
import clsx from "clsx";

export const PartnershipFlow = () => {
  return (
    <Container className="relative bg-stone-300">
      <Container className="py-20 md:py-32 lg:py-40 flex flex-col gap-12 items-center px-4 lg:px-16 2xl:px-24">
        <Container className="flex flex-col items-center gap-4 text-center max-w-2xl">
          <Typography variant="display">
            Comment fonctionne le partenariat
          </Typography>
          <Typography variant="body" className="text-neutral-600">
            Un processus simple et transparent pour faciliter la rencontre entre
            clients et pharmacies.
          </Typography>
        </Container>

        <Container className=" w-full grid grid-cols-2 lg:grid-cols-4 gap-1">
          {PartnershipFlowContent.map(
            ({ id, title, description, Icon }, index) => (
              <Container key={id} className="flex flex-col">
                {/* Card */}
                <Container className="relative flex flex-col items-center gap-4 p-4 bg-white flex-1 rounded-lg">
                  {Icon && (
                    <Container
                      className={clsx(
                        "flex items-center justify-center w-20 h-20 rounded-full bg-neutral-100",
                      )}
                    >
                      <Icons
                        icon={Icon}
                        size={40}
                        className="text-primary-600"
                      />
                    </Container>
                  )}

                  <Container className="flex flex-col items-center gap-2 text-center">
                    <Typography variant="heading">{title}</Typography>
                    <Typography variant="body" className="text-neutral-600">
                      {description}
                    </Typography>
                  </Container>
                </Container>
              </Container>
            ),
          )}
        </Container>
      </Container>
    </Container>
  );
};
