import React from "react";

import Quote from "./Quote.tsx";
import Timer from "./Timer.tsx";
import Spotify from "./Spotify.tsx";
import Footer from "./Footer.tsx";

//Here with props/state i'll have a dynimically generated quote from the CMS or from the API
//Here with props/state i'll have a dynamically generated background image or video from the CMS
//Here i'll props/state i'll embed a spotify playlist
//Here the movement of the mouse or the touch will trigger the end of the meditation -> So no pause?

//Logged users can:
//- Track the time of the meditation
//- Save the quote to their saved quotes
//- Change the playlist
//- Toggle Fullscreen directly from Awaca

//Bonus: Add overlay screen with countdown and tips for starting like relax, breath...
//Bonus: First time? Read This: -> Dialog?

export default function Meditation() {
  const quote: string =
    "“Distractions are everywhere. Notice what takes your attention, acknowledge it, and then let it go.”";

  return (
    <>
      <section className="container mx-auto flex flex-col p-10 md:w-11/12">
        <h1 className="rounded-md bg-palette-color-medium pl-2 pr-2 text-center font-dosis text-lg font-bold text-[#0c4a6e]">
          {" "}
          Embrace Awareness with Awaca, start with a nice quote:
        </h1>
        <Quote quote={quote}></Quote>
        <Timer></Timer>
        <Spotify></Spotify>
      </section>
      <Footer></Footer>
    </>
  );
}
