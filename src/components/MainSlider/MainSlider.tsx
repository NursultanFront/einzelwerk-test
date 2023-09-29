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

export const MainSlider = (props: IProps) => {
  const [emblaRef] = useEmblaCarousel({ loop: false });

  return (
    <div className="embla overflow-hidden h-screen bg-gray-900" ref={emblaRef}>
      <div className="embla__container flex h-full">
        <div className="embla__slide flex flex-col justify-center items-center gap-6 absolute inset-0 bg-black opacity-60">
          <h1 className="text-7xl text-center">{"lolka"}</h1>
          <p className="text-xl text-center">{"lolka"}</p>
        </div>
        <div className="embla__slide flex flex-col justify-center items-center gap-6 absolute inset-0 bg-black opacity-60">
          <h1 className="text-7xl text-center">{"lolka"}</h1>
          <p className="text-xl text-center">{"lolka"}</p>
        </div>

        <div className="embla__slide flex flex-col justify-center items-center gap-6 absolute inset-0 bg-black opacity-60">
          <h1 className="text-7xl text-center">{"lolka"}</h1>
          <p className="text-xl text-center">{"lolka"}</p>
        </div>
        {/* {props.sliderList.map((item, i) => {
          console.log(item.image);
          return (
            <div
              key={i}
              className={cn(`embla__slide relative flex-none w-full min-w-0`)}
            >
              <Image
                src={item.image}
                alt=""
                width={1920}
                height={1080}
                className=" absolute inset-0 h-full w-full"
              />
            </div>
          );
        })} */}
      </div>
    </div>
  );
};