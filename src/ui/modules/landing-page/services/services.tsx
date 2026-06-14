import { ServicesList } from "@/lib/services-list";
import { Typography } from "@/ui/components/typography/typography";
import clsx from "clsx";
import { Container } from "@/ui/components/container/container";
import { Button } from "@/ui/components/button/button";
import { CustomImage } from "@/ui/components/custom-image/custom-image";

export const Services = () => {
  return (
    <Container className="relative bg-white">
      <Container className="py-60 flex flex-col gap-20 items-center">
        <Container className="flex flex-col items-center gap-5 text-center">
          <Typography
            variant="title"
            className="w-[80vw] md:w-[60vw] 2xl:w-[40vw]"
          >
            Un espace commun pour créer, apprendre et innover
          </Typography>
        </Container>
        <Container className="grid grid-cols-1 md:grid-cols-12 px-5 lg:px-40 2xl:px-60 gap-2">
          {ServicesList.map(
            ({ id, name, description, badge, Icon, image, url }, index) => {
              let colSpan = "md:col-span-4 flex flex-col-reverse";
              if (index === 0)
                colSpan =
                  "md:col-span-8 flex flex-col-reverse md:flex-row items-end *:md:flex-1/2";
              if (index === 1)
                colSpan = "md:col-span-4 items-end flex flex-col-reverse";

              return (
                <Container
                  key={id}
                  className={clsx(
                    "group bg-primary-100 animate rounded-lg cursor-pointer justify-end overflow-hidden border-4 border-primary-100 hover:bg-primary-300 hover:border-primary-300",
                    colSpan,
                  )}
                >
                  <Container className="flex flex-col gap-4 p-4">
                    <Container className={clsx("flex flex-col gap-2")}>
                      <Container className="flex">
                        <Container className="animate group-hover:bg-secondary-100 flex flex-row gap-2 bg-secondary-200 text-secondary-800 items-center justify-center p-3 rounded-full">
                          {Icon && <Icon size={20} />}
                        </Container>
                      </Container>
                      <Typography variant="heading">{name}</Typography>
                      <Typography>{description}</Typography>
                    </Container>
                  </Container>

                  <Container
                    className={clsx(
                      "w-full flex justify-center h-56 items-center bg-primary-200 rounded overflow-hidden",
                      index === 0 && "md:h-full",
                      index !== 0 && "md:h-48",
                    )}
                  >
                    {image ? (
                      <CustomImage src={image} alt={name || "Illustration"} />
                    ) : (
                      "Illustration"
                    )}
                  </Container>
                </Container>
              );
            },
          )}
        </Container>
      </Container>
    </Container>
  );
};
