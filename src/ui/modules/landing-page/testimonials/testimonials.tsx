import { testimonialsContent } from "@/lib/testimonials-content";
import { Container } from "@/ui/components/container/container";
import { Marquee } from "@/ui/components/marquee/marquee";
import { Typography } from "@/ui/components/typography/typography";
import clsx from "clsx";

export const Testimonials = () => {
  return (
    <Container>
      <Container className="py-40 flex flex-col items-center gap-20">
        <Container className="flex flex-col gap-5">
          <Typography
            className="text-center md:w-[52vw] lg:w-[40vw]"
            variant="title"
          >
            Ce que nos utilisateurs disent de nous
          </Typography>
        </Container>
        <Container className="w-full overflow-hidden">
          <Container className={clsx("relative flex h-full w-full flex-col")}>
            <Marquee className="[--duration:50s]">
              {testimonialsContent.map(({ id, name, role, content }) => (
                <Container
                  key={id}
                  className={clsx(
                    "flex flex-col justify-between rounded-lg w-80 p-5 bg-primary-200 hover:bg-primary-300 animate cursor-pointer gap-5",
                  )}
                >
                  <Container>
                    <Typography className="">{content}</Typography>
                  </Container>
                  <Container className="flex flex-row gap-2">
                    <Container className="w-10 aspect-square rounded-full bg-primary-500"></Container>
                    <Container>
                      <Typography className="text-primary-950">
                        {name}
                      </Typography>
                      <Typography variant="small">{role}</Typography>
                    </Container>
                  </Container>
                </Container>
              ))}
            </Marquee>
          </Container>
          <Container className={clsx("relative flex h-full w-full flex-col")}>
            <Marquee className="[--duration:50s]" reverse>
              {testimonialsContent.map(({ id, name, role, content }) => (
                <Container
                  key={id}
                  className={clsx(
                    "flex flex-col justify-between rounded-lg w-80 p-5 bg-primary-200 hover:bg-primary-300 animate cursor-pointer gap-5",
                  )}
                >
                  <Container>
                    <Typography className="">{content}</Typography>
                  </Container>
                  <Container className="flex flex-row gap-2">
                    <Container className="w-10 aspect-square rounded-full bg-primary-500"></Container>
                    <Container>
                      <Typography className="text-primary-950">
                        {name}
                      </Typography>
                      <Typography variant="small">{role}</Typography>
                    </Container>
                  </Container>
                </Container>
              ))}
            </Marquee>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};
