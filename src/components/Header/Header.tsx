import React from "react";
import { LogoIcon } from "../icons";
import Link from "next/link";
import LangChoice from "../langChoice/LangChoice";
import { Button } from "../ui/Buttons/Button";

const Header = () => {
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
  return (
    <header className="container absolute z-10 inset-0">
      <div className="flex justify-between items-center py-10">
        <Link href="/">
          <LogoIcon />
        </Link>
        <nav className="flex">
          <ul className="flex gap-10">
            {navLinks.map((item) => (
              <li key={item.text}>
                <Link href={item.link}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-2">
          <LangChoice />
          <Button className="py-3.5 px-5 rounded-2xl">Contact us</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
