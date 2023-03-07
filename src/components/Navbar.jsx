import React from "react";
import { useState } from "react";

import awacaLogo from "../assets/images/awaca_logo_svg.svg";
import { Squeeze as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";

//The menu will be dynamically generated through props

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="z-10 bg-palette-color-lighter font-lato">
      <nav className="mx-auto flex w-11/12 items-center justify-between">
        <div>
          <img src={awacaLogo} alt="awaca_logo" className="w-20 2xl:w-32"></img>
        </div>
        <div
          className={
            isOpen === true
              ? "item-center absolute left-0 top-[8%] flex min-h-fit min-h-[60vh] w-full md:static"
              : "item-center absolute left-0 top-[-100%] flex min-h-fit min-h-[60vh] w-full md:static"
          }
        >
          <ul className="flex w-full flex-col bg-palette-color-lighter p-6 text-[#0c4a6e] md:flex-row md:items-center md:gap-4 text-xl">
            <Link to={"/"}>
              <li className="py-2 md:px-2">HOME</li>
            </Link>
            <Link to={"how-to-meditate"}>
              <li className="py-2 md:px-2">HOW TO</li>
            </Link>
            <Link to={"why-you-should-meditate"}>
              <li className="py-2 md:px-2">WHY YOU SHOULD MEDITATE</li>
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
          {/* <button className="w-24 rounded-xl bg-palette-color-darker px-5 py-2 text-[#ffff] hover:bg-palette-color-medium">
            Sign up
          </button> ---> FUTURE IMPLEMENTATION */}
          <div className="md:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} color="#0c4a6e" />
          </div>
        </div>
      </nav>
    </header>
  );
}
