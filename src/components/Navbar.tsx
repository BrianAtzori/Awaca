import React from "react";
import { useState } from "react";

import awacaLogo from "../assets/images/awaca_logo_svg.svg";
import { Squeeze as Hamburger } from "hamburger-react";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="bg-palette-color-lighter">
      <nav className="mx-auto flex w-11/12 items-center justify-between">
        <div>
          <img src={awacaLogo} alt="awaca_logo" className="w-20"></img>
        </div>
        <div
          className={
            isOpen === true
              ? "item-center absolute left-0 top-[9%] flex min-h-fit min-h-[60vh] w-full px-5 md:static"
              : "item-center absolute left-0 top-[-100%] flex min-h-fit min-h-[60vh] w-full px-5 md:static"
          }
        >
          <ul className="flex flex-col gap-8 bg-palette-color-lighter md:flex-row md:items-center md:gap-4">
            <li>
              <a target="_blank" rel="noopener">
                {" "}
                HOME
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener">
                {" "}
                HOME
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener">
                {" "}
                HOME
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener">
                {" "}
                HOME
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <button className="rounded-full bg-palette-color-darker px-5 py-2 text-[#ffff] hover:bg-palette-color-medium">
            {" "}
            Sign in{" "}
          </button>
          <div className="md:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
      </nav>
    </header>
  );
}
