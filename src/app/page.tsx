import Image from "next/image";
import Header from "@/components/Header/Header";
import Main from "@/components/Main/Main";
import { MainSlider } from "@/components/MainSlider/MainSlider";
import sliderInfo from "@/text/slider.json";
export default function Home() {
  return (
    <div className="">
      <main className="relative">
        {/* <>{props.children}</> */}
        <MainSlider sliderList={sliderInfo.slider} />
      </main>
      <section className="py-32">
        <div className="">
          <div className="">
            <div className="">
              <h2 className="">
                We do campaigns that works well for your idea
              </h2>
              <p className="">
                Our documentary campaigns feature leading figures, organisations
                and leaders, in open and candid discussions about transformative
                strategies and mindsets. Addressing complex trends.
              </p>
            </div>
            <Image src="" alt="" width={200} height={200} />
          </div>

          <div className="">
            <h2 className="">We make films that stick in your heart</h2>
            <p className="">
              This exclusive service provided by our team of professional
              content creators is available for global use. Our clients will
              have access and total creative control throughout the process of
              production, with resources and talent supplied by us.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
