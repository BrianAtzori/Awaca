import React from "react";

import Quote from "./Quote";
import Timer from "./Timer";
import Spotify from "./Spotify";
import Footer from "./Footer";

//Here with props/state i'll have a dynimically generated quote from the CMS or from the API
//Here with props/state i'll have a dynamically generated background image or video from the CMS
//Here i'll props/state i'll embed a spotify playlist
//Here the movement of the mouse or the touch will trigger the end of the meditation -> So no pause?

//A read from the "global state" will help to change the background of the homepage when the user is meditating, now is static

//Logged users can:
//- Track the time of the meditation
//- Save the quote to their saved quotes
//- Change the playlist
//- Toggle Fullscreen directly from Awaca

//Bonus: Add overlay screen with countdown and tips for starting like relax, breath...
//Bonus: First time? Read This: -> Dialog?

export default function Meditation() {
  const quote =
    "“Distractions are everywhere. Notice what takes your attention, acknowledge it, and then let it go.”";

    

  return (
    <>
      <section
        className="container mx-auto flex flex-col p-10 md:w-11/12"
      >
        <h1 className="rounded-md bg-palette-color-medium pl-2 pr-2 text-center font-dosis text-lg font-bold text-[#0c4a6e]">
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
