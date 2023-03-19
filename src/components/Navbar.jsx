import React from "react";
import { useState } from "react";
import awacaLogo from "../assets/images/awaca_logo_svg.svg";
import { Squeeze as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className=" z-50 bg-palette-color-aliceblue font-lato shadow-lg">
      <nav className="mx-auto flex w-11/12 items-center justify-between">
        <div>
          <img src={awacaLogo} alt="awaca_logo" className="w-20 2xl:w-32"></img>
        </div>
        <div
          className={
            isOpen === true
              ? "item-center absolute left-0 flex h-fit w-full pt-80 md:static"
              : "item-center absolute left-0 top-[-100%] flex min-h-fit w-full md:static "
          }
        >
          <ul className="flex h-fit w-full flex-col bg-palette-color-aliceblue p-6 text-center text-xl text-palette-color-dark-blue md:flex-row md:items-center md:gap-4 2xl:text-3xl">
            <Link to={"/"}>
              <li className="py-2 md:px-2">HOME</li>
            </Link>
            <Link to={"why-you-should-meditate"}>
              <li className="py-2 md:px-2">WHY</li>
            </Link>
            <Link to={"how-to-meditate"}>
              <li className="py-2 md:px-2">HOW</li>
            </Link>
            <Link to={"awaka-links"}>
              <li className="py-2 md:px-2">LINKS</li>
            </Link>
            <Link to={"about-awaka"}>
              <li className="py-2 md:px-2">ABOUT</li>
            </Link>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <div className="md:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} color="#0c4a6e" />
          </div>
        </div>
      </nav>
    </header>
  );
}
