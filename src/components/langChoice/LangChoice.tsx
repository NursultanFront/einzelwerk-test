"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import { Button } from "../ui/Buttons/Button";
import cn from "clsx";

import { LangOptions, Lang } from "./types";
import ArrowIcon from "@/assets/Arrow";

const langs: LangOptions[] = [
  { name: "Deutch", short: Lang.DE, image: "/img/germany.png" },
  { name: "English", short: Lang.ENG, image: "/img/england.png" },
];

const initialLang = () => {
  const storedLang = localStorage.getItem("lang");
  if (storedLang) {
    const langIndex = Number(JSON.parse(storedLang));

    if (langIndex >= 0 && langIndex < langs.length) {
      return {
        ...langs[langIndex],
      };
    }
  }
  return langs[0];
};

const LangChoice = () => {
  const [langChoose, setLangChoose] = useState<boolean>(true);
  const [lang, setLang] = useState<LangOptions>(initialLang);

  const changeLang = (num: number) => {
    setLang(langs[num]);
    setLangChoose(true);
    localStorage.setItem("lang", JSON.stringify(num));
  };

  useEffect(() => {
    const num = localStorage.getItem("lang");
    if (num) {
      const key = Number(num);
      setLang(langs[key]);
    }
  }, []);

  return (
    <div className="relative ">
      <Button
        variant="transparent"
        className="flex gap-3 items-center py-3 px-5 border border-gray-500 rounded-2xl"
        onClick={() => {
          setLangChoose(!langChoose);
        }}
      >
        <Image src={lang.image} alt="Country flag" width={24} height={24} />
        <div>{lang.short}</div>
        <ArrowIcon className={cn({ "rotate-180": !langChoose })} />
      </Button>

      <div
        className={cn(
          "absolute",
          "top-14",
          "z-1",
          "rounded-lg",
          "border-[1px]",
          "bg-white",
          "overflow-hidden",
          {
            hidden: langChoose,
          }
        )}
      >
        <ul className="flex flex-col">
          {langs.map((item, i) => (
            <li
              className="py-3 px-5 flex gap-3 w-max border border-gray-100  bg-white cursor-pointer hover:bg-gray-100"
              key={item.short}
              onClick={() => {
                changeLang(i);
              }}
            >
              <Image
                src={item.image}
                alt="Country flag"
                width={24}
                height={24}
              />
              <div className="text-gray-950"> {item.name}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LangChoice;
