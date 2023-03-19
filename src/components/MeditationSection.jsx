import React from "react";
import Timer from "./Timer";
import Spotify from "./Spotify";

//Main component that contains the core of the application, the timer section and the spotify playlist

export default function Meditation() {
  return (
    <>
      <section className="container mx-auto mt-96 mb-40 flex flex-col gap-24 p-10 sm:flex-row md:w-11/12 lg:pt-24 xl:pt-28 2xl:mt-[30vh] 2xl:w-full">
        <Timer></Timer>
        <Spotify></Spotify>
      </section>
    </>
  );
}
