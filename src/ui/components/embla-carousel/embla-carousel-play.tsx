"use client";

import { Container } from "@/ui/components/container/container";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "@/ui/components/embla-carousel/embla-carousel-arrow-buttons";
import clsx from "clsx";
import Autoplay from "embla-carousel-autoplay";
import { useState, useRef, useEffect } from "react";

interface Props {
  slides: number[];
  delay?: number;
}

export const EmblaCarouselPlay = ({ slides, delay = 6000 }: Props) => {
  const options: EmblaOptionsType = { align: "start", loop: true };
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ stopOnInteraction: false, delay: delay }), // Durée de l'autoplay
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setAnimating(false); // Reset animation
      setTimeout(() => setAnimating(true), 50); // Redémarrer l’animation
    };

    emblaApi.on("select", onSelect);
    onSelect(); // Initialisation

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const handleProgressClick = (index: number) => {
    if (!emblaApi) return;
    emblaApi.scrollTo(index);

    const autoplay = emblaApi.plugins()?.autoplay;
    if (autoplay) {
      autoplay.reset();
      autoplay.play();
    }
  };

  return (
    <Container className="h-[90vh] bg-primary-500 relative group w-full overflow-hidden">
      <Container className="w-full h-full min-w-[100vw]">
        <div className="overflow-hidden w-full h-full" ref={emblaRef}>
          <div className="flex h-full">
            {[
              { id: 1, title: "Property 1", bg: "bg-primary-850" },
              { id: 2, title: "Property 2", bg: "bg-primary-100" },
              { id: 3, title: "Property 3", bg: "bg-secondary-500" },
              { id: 4, title: "Property 4", bg: "bg-primary-500" },
              { id: 5, title: "Property 5", bg: "bg-primary-600" },
            ].map((property, index) => (
              <Container
                key={property.id}
                className={clsx("flex min-w-[100vw] h-full", property.bg)}
              >
                <div className="">{property.title}</div>
              </Container>
            ))}
          </div>
        </div>
      </Container>

      <Container className="absolute top-[42vh] left-8">
        <PrevButton
          className={clsx(
            "p-4 rounded-full bg-black/25",
            prevBtnDisabled ? "text-neutral-400" : "text-white"
          )}
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
        />
      </Container>

      <Container className="absolute top-[42vh] right-8">
        <NextButton
          className={clsx(
            "p-4 rounded-full bg-black/25",
            nextBtnDisabled ? "text-neutral-400" : "text-white"
          )}
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
        />
      </Container>

      {/* Barre de progression animée */}
      <Container className="absolute bottom-4 left-0 right-0 flex justify-center items-center">
        <Container className="flex space-x-2 rounded-lg w-[60vw] justify-center">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="relative h-1 flex-1 overflow-hidden rounded-full bg-primary-200 cursor-pointer"
              onClick={() => handleProgressClick(index)}
            >
              <div
                className={clsx(
                  "absolute bottom-0 top-0 left-0 bg-primary-950 transition-all",
                  selectedIndex === index ? "w-[110%]" : "w-0"
                )}
                style={{
                  transitionDuration:
                    selectedIndex === index ? `${delay}ms` : "0ms",
                  transitionTimingFunction: "linear",
                }}
              />
            </div>
          ))}
        </Container>
      </Container>
    </Container>
  );
};
