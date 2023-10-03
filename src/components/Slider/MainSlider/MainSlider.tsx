"use client";

import React, { useCallback, useEffect } from "react";
import useEmblaCarousel, { EmblaCarouselType } from "embla-carousel-react";
import Image from "next/image";
import cn from "clsx";
import { ISliderInfo } from "@/types";
import { SliderDots } from "../Dots/SliderDots";
import { useState } from "react";

interface IProps {
  sliderList: ISliderInfo[];
}

const MainSlider = (props: IProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <div
      className="embla relative overflow-hidden h-screen bg-gray-900"
      ref={emblaRef}
    >
      <div className="embla__container flex h-full">
        {props.sliderList.map((item, i) => {
          return (
            <div
              key={i}
              className="embla__slide flex flex-col justify-center items-center gap-6 relative flex-none w-full min-w-0"
            >
              <Image
                src={item.image}
                alt=""
                width={1920}
                height={1080}
                className=" absolute inset-0 h-full w-full -z-10 opacity-60"
              />
              <div className="w-[45%]">
                <h2 className="text-7xl text-center">{item.title}</h2>
                <p className="text-xl text-center">{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex gap-4 embla__dots absolute bottom-12 left-2/4 -translate-x-2/4">
        {scrollSnaps.map((_, i) => {
          return (
            <SliderDots
              key={i}
              className={cn(
                `dots-main ${i === selectedIndex ? "dots-main--active" : ""}`
              )}
              onClick={() => scrollTo(i)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MainSlider;
