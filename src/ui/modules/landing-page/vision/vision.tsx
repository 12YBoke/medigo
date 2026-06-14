"use client";

import { useScreenSize } from "@/hooks/use-screen-size";
import BlurFade from "@/ui/components/blur-fade/blur-fade";
import ConnectingDots from "@/ui/components/connecting-dots/connecting-dots";
import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/components/typography/typography";

export const Vision = () => {
  const screenSize = useScreenSize();

  return (
    <Container className="relative lg:pt-20 bg-primary-950 text-white">
      <Container className="absolute top-0 bottom-0 left-0 right-0">
        <ConnectingDots
          dotColor="#f5d0fe"
          dotCount={screenSize === "sm" ? 40 : 100}
          lineDistance={screenSize === "sm" ? 100 : 150}
        />
      </Container>
      <Container className="relative py-36 lg:py-50 ">
        <Container className="relative px-5 lg:px-32 2xl:px-60">
          <Container className="flex flex-col md:flex-row gap-10">
            <Container className="lg:w-[40vw] flex flex-col gap-5 ">
              <BlurFade delay={0.3}>
                <Typography
                  variant="display"
                  className="text-center md:text-left"
                >
                  Ensemble, on forme l’avenir tech de la RDC
                </Typography>
              </BlurFade>
              <BlurFade delay={0.6}>
                <Typography className="text-center md:text-left">
                  Ils codent, conçoivent, testent, apprennent, inventent. Mais
                  bien souvent, ils le font seuls, dans l’ombre. Tech-korner
                  connecte celles et ceux qui font bouger le numérique :
                  ingénieurs, designers, curieux, étudiants, entrepreneurs,
                  passionnés… Pour créer ensemble un écosystème plus fort, plus
                  visible, plus humain.
                </Typography>
              </BlurFade>
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};
