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

export const FAQ = () => {
  return (
    <Container className="relative bg-neutral-50">
      <Container className="py-20 md:py-32 lg:py-40 flex flex-col gap-12 md:gap-16 items-center px-5 md:px-20 lg:px-40 2xl:px-60">
        <Container className="flex flex-col items-center gap-4 text-center max-w-2xl">
          <Typography variant="title">Questions fréquemment posées</Typography>
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
            {FAQContent.map(({ id, question, answer }, index) => (
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
  );
};
