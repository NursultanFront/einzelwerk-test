import React from "react";
import Logo from "@/assets/header/Logo";
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
    <header>
      <div className="flex justify-between py-10">
        <Link href="/">
          <Logo />
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
          <Button>Contact us</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
