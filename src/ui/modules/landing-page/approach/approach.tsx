"use client";

import { Container } from "@/ui/components/container/container";
import { CustomImage } from "@/ui/components/custom-image/custom-image";
import { Typography } from "@/ui/components/typography/typography";
import Pharmacy from "../../../../../public/Images/pharmacy.jpg";
import { Icons } from "@/ui/components/icons/icons";
import { CircleCheckBigIcon } from "@hugeicons/core-free-icons";

export const Approach = () => {
  return (
    <Container className="relative bg-stone-100">
      <Container className="py-20 md:py-40 lg:py-52 flex flex-col items-center px-5 md:px-20 lg:px-40 2xl:px-64">
        <Container className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <Container className="flex-1/2 flex flex-col gap-8">
            <Container className="flex flex-col gap-4">
              <Typography variant="display">
                Nous simplifions l&apos;accès aux{" "}
                <span className="text-primary-600">médicaments</span>
              </Typography>
              <Typography
                variant="body"
                className="text-neutral-600 leading-relaxed"
              >
                MediGo ne remplace pas les pharmacies. Au contraire, nous les
                aider à atteindre plus de clients et à simplifier la recherche
                de médicaments pour les habitants de Kinshasa.
              </Typography>
            </Container>

            <Container className="flex flex-col gap-4">
              <Container className="flex flex-col gap-1">
                <Container className="flex flex-row gap-2 items-center">
                  <Icons
                    icon={CircleCheckBigIcon}
                    className="text-primary-600"
                    size={24}
                  />
                  <Typography variant="heading" className="text-primary-600">
                    Pharmacies autonomes
                  </Typography>
                </Container>
                <Typography variant="body" className="text-neutral-600">
                  Les pharmacies conservent leur indépendance complète. Elles
                  gèrent leurs stocks, leurs prix et leurs horaires.
                </Typography>
              </Container>

              <Container className="flex flex-col gap-1">
                <Container className="flex flex-row gap-2 items-center">
                  <Icons
                    icon={CircleCheckBigIcon}
                    className="text-primary-600"
                    size={24}
                  />
                  <Typography variant="heading" className="text-primary-600">
                    Communication simple
                  </Typography>
                </Container>

                <Typography variant="body" className="text-neutral-600">
                  Les pharmacies reçoivent les demandes via WhatsApp, pas besoin
                  de logiciel complexe ni de formation longue.
                </Typography>
              </Container>

              <Container className="flex flex-col gap-1">
                <Container className="flex flex-row gap-2 items-center">
                  <Icons
                    icon={CircleCheckBigIcon}
                    className="text-primary-600"
                    size={24}
                  />
                  <Typography variant="heading" className="text-primary-600">
                    Avantage mutuel
                  </Typography>
                </Container>
                <Typography variant="body" className="text-neutral-600">
                  Les clients trouvent plus facilement leurs médicaments, les
                  pharmacies gagnent plus de clients qualifiés.
                </Typography>
              </Container>
            </Container>
          </Container>

          <Container className="relative lg:flex-1/2 h-[60vh] lg:h-screen w-full rounded-lg overflow-hidden">
            <CustomImage
              src={Pharmacy}
              alt="Woman smiling"
              className="w-full h-full object-cover"
            />
            <Container className="absolute bottom-0 left-0 right-0 p-2">
              <Container
                animation="MoveOnVisible"
                className="p-4 rounded-lg bg-white"
              >
                <Typography variant="title">
                  Une approche qui profite à tous
                </Typography>
                <Typography variant="body" className="text-neutral-600 mt-2">
                  En connectant les habitants de Kinshasa aux pharmacies
                  locales, nous créons un écosystème où tout le monde gagne :
                  les clients trouvent leurs médicaments plus facilement, et les
                  pharmacies développent leur activité.
                </Typography>
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};
