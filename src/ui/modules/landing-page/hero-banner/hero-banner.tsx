import { Button } from "@/ui/components/button/button";
import { Container } from "@/ui/components/container/container";
import { CustomImage } from "@/ui/components/custom-image/custom-image";
import { Typography } from "@/ui/components/typography/typography";
import WomanSmiling from "../../../../../public/Images/woman-smiling.png";
import { StatsContent } from "@/lib/stats-content";
import { CountUpAnimation } from "@/ui/components/count-up-animation/count-up-animation";
import { Icons } from "@/ui/components/icons/icons";
import { WHATSAPP_NUMBER } from "@/lib/contacts";

export const HeroBanner = () => {
  return (
    <Container>
      <Container className="relative bg-secondary-50 xl:px-40 2xl:px-60 flex flex-col md:flex-row items-center justify-center lg:h-screen pt-32 lg:pt-16 gap-8 lg:gap-0">
        <Container
          id="Statistics-Overview"
          className="absolute bottom-16 left-0 right-0 h-4"
        />
        <Container className="lg:flex-2/3 lg:h-full">
          <Container className="flex flex-col gap-4 items-center justify-center h-full">
            <Typography variant="display" className="text-center lg:text-left">
              Trouvez vos médicaments plus rapidement avec{" "}
              <span className="text-primary-600">Medigo</span>.
            </Typography>
            <Typography className="text-center lg:text-left">
              Recherchez parmi des milliers de produits de santé, vérifiez leur
              disponibilité et réservez-les en quelques clics auprès de votre
              pharmacie.
            </Typography>
            <Container className="w-full justify-center lg:justify-start flex flex-row gap-4">
              <Button
                ariaLabel="Contactez-nous"
                buttonType="link"
                target="_blank"
                baseUrl={`https://wa.me/${WHATSAPP_NUMBER}`}
              >
                Contactez-nous
              </Button>
              <Button
                ariaLabel="En savoir plus"
                variant="secondary"
                buttonType="link"
                baseUrl="#Statistics-Overview"
              >
                En savoir plus
              </Button>
            </Container>
          </Container>
        </Container>
        <Container className="lg:flex-1/3 h-[50vh] lg:h-full w-full">
          <CustomImage
            src={WomanSmiling}
            alt="Woman smiling"
            loading="eager"
            className="w-full h-full object-cover"
          />
        </Container>
      </Container>
      <Container className="p-16 bg-neutral-950 flex justify-center">
        <Container className="w-full grid grid-cols-2 lg:grid-cols-4 gap-8">
          {StatsContent.map(({ id, count, prefix, suffix, title, Icon }) => (
            <Container
              key={id}
              className="flex flex-col items-center gap-4 flex-1/4"
            >
              {Icon && (
                <Container className="flex items-center justify-center w-28 h-28 rounded-full bg-[#222]">
                  <Icons icon={Icon} className="text-primary-200" size={60} />
                </Container>
              )}
              <CountUpAnimation
                to={count}
                prefix={prefix}
                suffix={suffix}
                className="text-neutral-50"
                variant="title"
              />
              <Typography
                variant="small"
                className="text-primary-200 text-center"
              >
                {title}
              </Typography>
            </Container>
          ))}
        </Container>
      </Container>
    </Container>
  );
};
