import React from "react";
import Logo from "@/assets/header/Logo";
import Link from "next/link";
import LangChoice from "./langChoice/LangChoice";
import { Button } from "./ui/Buttons/Button";

const Header = () => {
  return (
    <header>
      <div className="flex">
        <Link href="/">
          <Logo />
        </Link>
        <nav className="flex">
          <ul className="flex">
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">About</Link>
            </li>
          </ul>
        </nav>
        <div className="flex">
          <LangChoice />
          <Button>Contact us</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
