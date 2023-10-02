"use client";

import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import cn from "clsx";
import Header from "../Header/Header";
import { ISliderInfo } from "@/types";

interface IProps {
  sliderList: ISliderInfo[];
}

const MainSlider = (props: IProps) => {
  const [emblaRef] = useEmblaCarousel({ loop: false });

  return (
    <div className="embla overflow-hidden h-screen bg-gray-900" ref={emblaRef}>
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
    </div>
  );
};

export default MainSlider;
