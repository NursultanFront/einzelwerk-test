"use client";
import { useEffect, useState } from "react";
import cn from "clsx";
import Link from "next/link";
import LangChoice from "../LangChoice/LangChoice";
import { Button } from "../ui/Buttons/Button";
import { LogoIcon } from "../icons";

const Header = () => {
  const [isFixed, setFixed] = useState<boolean>(false);

  const navLinks = [
    {
      text: "About",
      link: "#",
    },
    {
      text: "Campaigns",
      link: "#",
    },
    {
      text: "Partners",
      link: "#",
    },
    {
      text: "Contacts",
      link: "#",
    },
  ];

  useEffect(() => {
    window.onscroll = () => {
      const currentScroll = window.scrollY;
      currentScroll > 1 ? setFixed(true) : setFixed(false);
    };
  }, []);

  return (
    <header
      className={cn(`container fixed z-10 inset-0 h-fit`, {
        "top-4 rounded-4xl bg-header-color backdrop-blur-sm": isFixed,
      })}
    >
      <div
        className={cn("flex justify-between items-center py-10", {
          "py-4": isFixed,
        })}
      >
        <Link href="/">
          <LogoIcon />
        </Link>
        <nav className="flex">
          <ul className="flex gap-10">
            {navLinks.map((item) => (
              <li key={item.text}>
                <Link href={item.link} className="font-arboria-book">
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-2">
          <LangChoice borderLess={isFixed} />
          <Button className="py-3.5 px-5 rounded-2xl">Contact us</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
