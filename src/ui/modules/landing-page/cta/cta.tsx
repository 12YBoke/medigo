import { BgBeams } from "@/ui/components/bg-beams/bg-beams";
import BlurFade from "@/ui/components/blur-fade/blur-fade";
import { Button } from "@/ui/components/button/button";
import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/components/typography/typography";

export const CTA = () => {
  return (
    <Container>
      <Container className="relative bg-gradient-to-bl from-primary-800 to-primary-950 py-20 lg:py-36 mx-4 lg:mx-40 2xl:mx-80 rounded-2xl px-6 lg:px-10 flex flex-col items-center gap-10">
        <BgBeams />
        <Container className="flex flex-col gap-4">
          <BlurFade delay={0.3}>
            <Typography
              className="text-center md:w-[52vw] lg:w-[48vw] text-white"
              variant="display"
            >
              Rejoins le mouvement dès maintenant
            </Typography>
          </BlurFade>
          <BlurFade delay={0.6}>
            <Typography className="text-center md:w-[52vw] lg:w-[48vw] text-white">
              Crée ton profil tech, découvre des projets et fais partie d’une
              communauté qui fait avancer l’innovation en RDC.
            </Typography>
          </BlurFade>
        </Container>
        <Container>
          <BlurFade delay={0.9}>
            <Button ariaLabel="Rejoindre la communauté" className="w-full">
              Rejoindre la communauté
            </Button>
          </BlurFade>
        </Container>
      </Container>
    </Container>
  );
};
