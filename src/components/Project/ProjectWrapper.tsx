"use client";
import { useState } from "react";
import accrodionData from "@/text/accordion.json";
import { AccordionWrapper } from "@/components/AccrodionWrapper/AccordionWrapper";
import Image from "next/image";

const ProjectWrapper = () => {
  const [showIndex, setShowIndex] = useState<number>(0);

  const { list } = accrodionData;

  const image = [
    "/img/camera.png",
    "/img/main.png",
    "/img/right-img.png",
    "/img/left-img.png",
    "/img/camera.png",
  ];

  const getIndex = (value: number) => {
    setShowIndex(value);
  };

  return (
    <div className="grid grid-cols-2 gap-24">
      <AccordionWrapper list={list} getIndex={getIndex} />
      <Image
        src={image[showIndex]}
        alt="Accordion images"
        width={400}
        height={400}
        className="h-auto w-full rounded-3xl"
      />
    </div>
  );
};

export default ProjectWrapper;
