import Image from "next/image";
import Header from "@/components/Header/Header";
import Main from "@/components/Main/Main";
import MainSlider from "@/components/Slider/MainSlider/MainSlider";
import sliderInfo from "@/text/slider.json";
import NextIcon from "@/components/icons/NextIcon";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import SkillsTablet from "@/components/SkillsTablet/SkillsTablet";
import ProjectWrapper from "@/components/Project/ProjectWrapper";
import Footer from "@/components/Footer/Footer";
import { Button } from "@/components/ui/Buttons/Button";
import FormModal from "@/components/FormModal/FormModal";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Header />
        <MainSlider sliderList={sliderInfo.slider} />
      </main>
      <section className="py-32 bg-gradient-to-t from-gray-900 to-gray-700">
        <div className="container flex flex-col  gap-32">
          <div className=" grid grid-cols-[45%_55%] items-center gap-16 ">
            <div
              className="py-7 px-12 flex flex-col items-start gap-6 relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-16 before:h-16 before:rounded-tl-2xl before:border-l-2 before:border-t-2 before:border-gray-500
            after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-16 after:h-16 after:rounded-br-2xl after:border-r-2 after:border-b-2 after:border-gray-500"
            >
              <h2 className="text-5xl text-gray-50">
                We do campaigns that works well for your idea
              </h2>
              <p className="text-xl text-gray-200">
                Our documentary campaigns feature leading figures, organisations
                and leaders, in open and candid discussions about transformative
                strategies and mindsets. Addressing complex trends.
              </p>
              <Button
                variant="transparent"
                className="flex items-center gap-4 pt-6 text-lg bg-gradient-to-r from-indigo-600 to-purple-500 text-transparent bg-clip-text"
              >
                <span> All campaigns</span>
                <NextIcon />
              </Button>
            </div>
            <Image
              src="/img/right-img.png"
              alt="Картинка"
              width={200}
              height={200}
              className="w-full h-full"
            />
          </div>

          <div className="grid grid-cols-[55%_45%] items-center gap-16">
            <Image
              src="/img/left-img.png"
              alt="Картинка"
              width={200}
              height={200}
              className="w-full h-full"
            />
            <div
              className="flex flex-col py-7 px-12  items-start gap-6 relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-16 before:h-16 before:rounded-tl-2xl before:border-l-2 before:border-t-2 before:border-gray-500
            after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-16 after:h-16 after:rounded-br-2xl after:border-r-2 after:border-b-2 after:border-gray-500"
            >
              <h2 className="text-5xl text-gray-50">
                We make films that stick in your heart
              </h2>
              <p className="text-xl text-gray-200">
                This exclusive service provided by our team of professional
                content creators is available for global use. Our clients will
                have access and total creative control throughout the process of
                production, with resources and talent supplied by us.
              </p>
              <Button
                variant="transparent"
                className="flex items-center gap-4 pt-6 text-lg bg-gradient-to-r from-indigo-600 to-purple-500 text-transparent bg-clip-text"
              >
                <span>I have an idea for film</span>
                <NextIcon />
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-32 bg-gray-100">
        <div className="container flex flex-col gap-8">
          <div className="flex flex-col items-center text-gray-950 text-6xl">
            <div className="flex gap-6">
              Our skillset
              <div className="p-1 border-2 rounded-full border-dashed border-blue-500">
                <VideoPlayer />
              </div>
              better than
            </div>
            <div>other companies have</div>
          </div>
          <SkillsTablet />
        </div>
      </section>

      <section className="py-32 bg-gray-900">
        <div className="container">
          <h2 className="mb-24 text-6xl text-center text-transparent bg-gradient-to-r from-white via-gray-400 to-gray-400 bg-clip-text">
            We put our key values <br /> in each project
          </h2>
          <ProjectWrapper />
        </div>
      </section>

      <Footer />
      <FormModal />
    </div>
  );
}
