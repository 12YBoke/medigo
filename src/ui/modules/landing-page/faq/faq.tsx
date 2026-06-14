"use client";

import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/components/typography/typography";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/shadcnui/ui/accordion";
import { FAQContent } from "@/lib/faq-content";
import { CustomImage } from "@/ui/components/custom-image/custom-image";
import Contemplative from "../../../../../public/Images/contemplative.jpg";

export const FAQ = () => {
  return (
    <Container id="faq" className="relative scroll-mt-24 bg-stone-100">
      <Container className="py-20 md:py-40 lg:py-52 flex flex-col items-center px-5 md:px-20 lg:px-40 2xl:px-64">
        <Container className="flex flex-col lg:flex-row gap-12 lg:gap-16 w-full">
          <Container className="relative lg:flex-1/2 h-[60vh] lg:h-screen w-full rounded-lg overflow-hidden">
            <CustomImage
              src={Contemplative}
              alt="Woman smiling"
              className="w-full h-full object-cover"
            />
            <Container className="absolute top-0 left-0 right-0 p-2">
              <Container
                animation="MoveOnVisible"
                className="p-4 rounded-lg bg-white"
              >
                <Typography variant="title">Besoin d&apos;aide ?</Typography>
                <Typography variant="body" className="text-neutral-600 mt-2">
                  Retrouvez ici les réponses essentielles avant de réserver un
                  médicament ou de contacter une pharmacie partenaire.
                </Typography>
              </Container>
            </Container>
          </Container>
          <Container className="flex-1/2 flex flex-col gap-8">
            <Container className="flex flex-col gap-4">
              <Typography variant="display">
                <span className="text-primary-600">Questions</span> fréquemment
                posées
              </Typography>
              <Typography variant="body" className="text-neutral-600">
                Trouvez les réponses à vos questions sur MediGo et son
                fonctionnement.
              </Typography>
            </Container>

            <Container className="w-full max-w-3xl">
              <Accordion
                type="single"
                collapsible
                className="border-neutral-200 bg-white"
              >
                {FAQContent.map(({ id, question, answer }) => (
                  <AccordionItem key={id} value={id}>
                    <AccordionTrigger className="text-left font-semibold md:text-lg hover:text-primary-600">
                      {question}
                    </AccordionTrigger>
                    <AccordionContent className="text-neutral-600">
                      {answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};
