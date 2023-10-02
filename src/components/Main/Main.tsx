import React from "react";
import type { PropsWithChildren } from "react";
import MainSlider from "../MainSlider/MainSlider";

import sliderInfo from "@/text/slider.json";

const Main = (props: PropsWithChildren<{}>) => {
  return (
    <main className="relative">
      {/* <>{props.children}</> */}
      <MainSlider sliderList={sliderInfo.slider} />
    </main>
  );
};

export default Main;
