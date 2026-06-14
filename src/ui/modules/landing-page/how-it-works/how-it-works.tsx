"use client";

import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/components/typography/typography";
import { Icons } from "@/ui/components/icons/icons";
import { HowItWorksContent } from "@/lib/how-it-works-content";
import { useEffect, useState } from "react";
import clsx from "clsx";

export const HowItWorks = () => {
  const [itemFocus, setItemFocus] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setItemFocus((prevFocus) => (prevFocus + 1) % HowItWorksContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container className="relative bg-primary-50">
      <Container className="py-20 md:py-40 lg:py-52 flex flex-col gap-12 md:gap-16 items-center ">
        <Container className="flex flex-col items-center gap-4 text-center max-w-2xl">
          <Typography variant="display">Comment ça marche</Typography>
          <Typography variant="body" className="text-neutral-600">
            Quatre étapes simples pour trouver et réserver votre médicament en
            quelques minutes.
          </Typography>
        </Container>

        <Container className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 lg:px-16 2xl:px-24 gap-1">
          {HowItWorksContent.map(
            ({ id, step, title, description, Icon }, index) => (
              <Container
                key={id}
                className={clsx(
                  "flex flex-col items-center gap-8 py-8 px-4 rounded-lg animate",
                  index === itemFocus && "bg-primary-200",
                  "bg-primary-100",
                )}
              >
                {/* Step Number */}
                {/* <Container className="relative">
                  <Container
                    className={clsx(
                      "w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center",
                      index === itemFocus ? "bg-primary-600" : "bg-primary-950",
                    )}
                  >
                    <Typography
                      variant="title"
                      className="text-white font-bold"
                    >
                      {step}
                    </Typography>
                  </Container>
                </Container> */}

                {Icon && (
                  <Container
                    className={clsx(
                      "flex items-center justify-center w-20 h-20 rounded-full",
                      index === itemFocus ? "bg-primary-100" : "bg-primary-200",
                    )}
                  >
                    <Icons icon={Icon} size={40} className="text-primary-600" />
                  </Container>
                )}

                <Container className="flex flex-col items-center gap-2 text-center">
                  <Typography variant="heading">{title}</Typography>
                  <Typography className="text-neutral-600">
                    {description}
                  </Typography>
                </Container>
              </Container>
            ),
          )}
        </Container>
        <Container className="flex flex-col items-center gap-4 text-center max-w-2xl">
          <Typography variant="body" className="text-neutral-600 text-center">
            Chaque étape est conçue pour vous offrir une expérience fluide et
            sécurisée, garantissant que vous obteniez vos médicaments rapidement
            et en toute confiance.
          </Typography>
        </Container>
      </Container>
    </Container>
  );
};
