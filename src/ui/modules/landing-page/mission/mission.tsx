import BlurFade from "@/ui/components/blur-fade/blur-fade";
import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/components/typography/typography";

export const Mission = () => {
  return (
    <Container className="relative">
      <Container className="relative py-60 bg-[url(/images/kin-mobile.jpg)] sm:bg-[url(/images/kin.jpg)] bg-fixed bg-no-repeat bg-cover bg-black">
        <Container className="absolute inset-0 bg-[#070005] opacity-50 text-white" />
        <Container className="relative px-5 lg:px-10 2xl:px-60">
          <Container className="flex flex-col md:flex-row gap-10">
            <Container className="flex-3/5 flex items-center justify-center"></Container>
            <Container className="flex-2/5 flex flex-col gap-5 ">
              <BlurFade delay={0.3}>
                <Typography
                  variant="display"
                  className="text-center md:text-left text-white"
                >
                  Une plateforme, une mission
                </Typography>
              </BlurFade>
              <BlurFade delay={0.6}>
                <Typography className="text-center md:text-left text-white">
                  Notre ambition est claire : faire de la RDC une scène visible,
                  connectée et dynamique de l’innovation numérique en Afrique
                  francophone. Nous croyons que les talents locaux méritent un
                  espace pour s’exprimer, se connecter et bâtir ensemble
                  l’avenir digital du pays.
                </Typography>
              </BlurFade>
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};
