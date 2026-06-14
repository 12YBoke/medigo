import {
  Carousel as ShadcnCarousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/shadcnui/ui/carousel";
import clsx from "clsx";
import { Container } from "../container/container";
interface Props {
  data: {
    id: string;
    element: React.ReactNode;
  }[];
  className: string;
}
export const Carousel = ({ data, className }: Props) => {
  return (
    <ShadcnCarousel
      opts={{
        align: "start",
      }}
      className="w-full relative px-0 md:px-12"
    >
      <CarouselContent className="">
        {data.map(({ id, element }) => (
          <CarouselItem key={id} className="basis-1/1">
            <Container className={clsx(className)}>{element}</Container>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute top-[48%] left-0 md:flex hidden" />
      <CarouselNext className="absolute top-[48%] right-0 md:flex hidden" />
    </ShadcnCarousel>
  );
};
