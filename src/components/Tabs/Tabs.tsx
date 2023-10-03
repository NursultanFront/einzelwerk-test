"use client";
import { getData } from "@/api/api";
import { useEffect, useState } from "react";
import cn from "clsx";
import { Button } from "../ui/Buttons/Button";
import tabsInfo from "@/text/tabs.json";
import FormModal from "../FormModal/FormModal";
import { Pop } from "@/api/types";

const Tabs = () => {
  const { tabs } = tabsInfo;

  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [isModalActive, setModalActive] = useState<boolean>(false);
  const [tab, setTab] = useState<Pop[]>([]);

  const handleOpenModal = () => {
    setModalActive(true);
  };

  useEffect(() => {
    getData().then((res) => setTab(res.blocks));
  }, []);

  return (
    <>
      <div className="flex flex-col gap-16">
        <div className="flex justify-center gap-4">
          {/* {tabs.map((item, i) => {
            return (
              <Button
                variant="transparent"
                key={i}
                className={cn(
                  `py-4 px-8 bg-white text-gray-950 border  rounded-2xl`,
                  {
                    "border-blue-500": selectedTab === i,
                    "border-gray-400": selectedTab !== i,
                  }
                )}
                onClick={() => setSelectedTab(i)}
              >
                {item.name}
              </Button>
            );
          })} */}
          {tab.map((item, i) => {
            return (
              <Button
                variant="transparent"
                key={i}
                className={cn(
                  `py-4 px-8 bg-white text-gray-950 border  rounded-2xl`,
                  {
                    "border-blue-500": selectedTab === i,
                    "border-gray-400": selectedTab !== i,
                  }
                )}
                onClick={() => setSelectedTab(i)}
              >
                {item.chunk}
              </Button>
            );
          })}
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* {tabs[selectedTab].content.map((item, i) => {
            return (
              <div
                key={i}
                className="p-8 flex flex-col gap-12 text-gray-950 border border-gray-400 rounded-3xl"
              >
                <div className="text-3xl">{item.title}</div>
                <div className="flex flex-col gap-4">
                  {item.text}
                  <div className="flex flex-col">
                    {item.items &&
                      item.items.map((elem, key) => {
                        return (
                          <div
                            key={key}
                            className="pl-5 relative before:absolute before:content-[''] before:w-2 before:h-2 before:bg-blue-500 before:rounded-full before:left-0 before:top-1/2 before:-translate-y-2/4"
                          >
                            {elem}
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            );
          })} */}
          {tab.map((item, i) => {
            return (
              <div
                key={i}
                className="p-8 flex flex-col gap-12 text-gray-950 border border-gray-400 rounded-3xl"
              >
                <div className="text-3xl">{item.values.title}</div>
                <div className="flex flex-col gap-4">
                  {item.values.title}

                  {/* <div className="flex flex-col">
                    {item.items &&
                      item.items.map((elem, key) => {
                        return (
                          <div
                            key={key}
                            className="pl-5 relative before:absolute before:content-[''] before:w-2 before:h-2 before:bg-blue-500 before:rounded-full before:left-0 before:top-1/2 before:-translate-y-2/4"
                          >
                            {elem}
                          </div>
                        );
                      })}
                  </div> */}
                </div>
              </div>
            );
          })}
          <div className="p-8 flex flex-col justify-between  bg-blue-500 rounded-3xl">
            <div className="text-3xl">Schedule a call</div>
            <div className="flex flex-col items-start gap-5">
              <p className="text-gray-200">
                Familiarity with visual effects techniques like particle
                systems, compositing.
              </p>
              <Button
                variant="secondary"
                className="py-4 px-5 rounded-2xl"
                onClick={handleOpenModal}
              >
                Book a call
              </Button>
            </div>
          </div>
        </div>
      </div>
      <FormModal isActive={isModalActive} />
    </>
  );
};

export default Tabs;
