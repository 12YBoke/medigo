import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/components/typography/typography";

export const Target = () => {
  return (
    <Container className="bg-white">
      <Container className="py-40 flex flex-col items-center gap-20">
        <Container className="flex flex-col gap-5">
          <Typography
            className="text-center md:w-[52vw] lg:w-[40vw]"
            variant="title"
          >
            A qui est destiné Tech-korner ?
          </Typography>
        </Container>
      </Container>
    </Container>
  );
};
