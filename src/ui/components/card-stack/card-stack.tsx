"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "../container/container";
import Image, { StaticImageData } from "next/image";

let interval: any;

type Card = {
  img: StaticImageData;
  id: number;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.04;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    <Container className="relative">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute dark:bg-black bg-white rounded-lg p-2 shadow-xl border border-neutral-200  shadow-black/[0.1] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <Container className="overflow-hidden">
              <Image
                width={100}
                height={100}
                src={card.img}
                alt="image"
                className="rounded-lg h-full w-full object-cover"
              />
            </Container>
          </motion.div>
        );
      })}
    </Container>
  );
};
