"use client";
import { useState } from "react";
import { list } from "@/text/accordion.json";
import { AccordionWrapper } from "@/components/AccrodionWrapper/AccordionWrapper";

const ProjectWrapper = () => {
  const [showIndex, setShowIndex] = useState<number>(0);

  const image = [];

  const getIndex = (value: number) => {
    setShowIndex(value);
  };

  return (
    <div className="flex">
      <AccordionWrapper list={list} getIndex={getIndex}></AccordionWrapper>
      <div className=""></div>
    </div>
  );
};

export default ProjectWrapper;
