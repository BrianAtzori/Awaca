import React from "react";
import { Fade } from "react-awesome-reveal";

export default function Footer() {
  return (
    <>
    <Fade delay={500}>
      <footer className="mx-auto mt-10 flex w-full flex-col gap-2 bg-palette-color-dark-blue p-4 text-center font-lato text-palette-color-whitesmoke 2xl:text-3xl">
        <p>Designed with 🧡 by Brian Atzori </p>
        <p>P.IVA: 03929620122</p>
        <a
          className="font-bold underline underline-offset-4"
          href="https://linktr.ee/brianatzori"
          target="_blank"
          rel=" noreferrer noopener"
        >
          {" "}
          Find out more about me here 🔗
        </a>
      </footer>
      </Fade>
    </>
  );
}
