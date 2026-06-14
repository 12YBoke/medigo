"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/shadcnui/ui/dialog";
import { Container } from "@/ui/components/container/container";
import Image from "next/image";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shadcnui/ui/carousel";

interface Props {
  images: {
    url: string;
  }[];
  videos?: {
    url: string;
  }[];
}

export const Gallery = ({ images, videos }: Props) => {
  const [selectedMedia, setSelectedMedia] = useState<number | null>(null);
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Container className="grid grid-cols-2 lg:grid-cols-3 gap-1">
        {videos &&
          videos.map(({ url }, index) => (
            <div
              onClick={() => {
                setSelectedMedia(index);
                setOpen(true);
              }}
              key={index}
              className="relative w-full h-40 md:h-80 lg:h-60 overflow-hidden rounded-lg"
            >
              <video
                controls
                preload="metadata"
                width={100}
                height={100}
                className="w-full h-full object-cover"
              >
                <source src={url} type="video/mp4" />
              </video>
              <div
                onClick={() => {
                  setSelectedMedia(index);
                  setOpen(true);
                }}
                className="absolute top-0 bottom-0 right-0 left-0"
              ></div>
            </div>
          ))}
        {images.map(({ url }, index) => (
          <div
            onClick={() => {
              setSelectedMedia(videos ? videos.length + index : index);
              setOpen(true);
            }}
            key={index}
            className="w-full h-40 md:h-80 lg:h-60 overflow-hidden rounded-lg"
          >
            <Image
              src={url}
              alt={`Gallery Image ${index + 1}`}
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Container>
      {selectedMedia !== null && (
        <DialogContent className="bg-transparent max-w-screen lg:max-w-[60vw] shadow-none items-center justify-center border-none p-0">
          <Carousel
            opts={{
              startIndex: selectedMedia,
              loop: true,
            }}
            className="flex flex-col gap-4"
          >
            <CarouselContent className="max-h-[60vh] max-w-[100vw] lg:max-h-[80vh] lg:max-w-[60vw]">
              {videos &&
                videos.map(({ url }, index) => (
                  <CarouselItem key={index}>
                    <Container className="w-full h-full">
                      <video
                        controls
                        preload="metadata"
                        width={100}
                        height={100}
                        className="w-full h-full object-contain"
                      >
                        <source src={url} type="video/mp4" />
                      </video>
                    </Container>
                  </CarouselItem>
                ))}
              {images.map(({ url }, index) => (
                <CarouselItem key={index}>
                  <Container className="w-full h-full">
                    <Image
                      src={url}
                      alt={`Gallery Image ${index + 1}`}
                      width={100}
                      height={100}
                      className="w-full h-full object-contain"
                    />
                  </Container>
                </CarouselItem>
              ))}
            </CarouselContent>
            <Container className="flex flex-row justify-between items-center w-full">
              <Container></Container>
              <Container className="flex flex-row gap-4">
                <CarouselPrevious />
                <CarouselNext />
              </Container>
            </Container>
          </Carousel>
        </DialogContent>
      )}
    </Dialog>
  );
};
