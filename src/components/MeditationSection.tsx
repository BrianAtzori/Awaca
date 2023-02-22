import React from "react";

import Quote from "./Quote.tsx";
import Timer from "./Timer.tsx";
import Spotify from "./Spotify.tsx";

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
    <section className=" container mx-auto flex flex-col p-10 gap-3">
      <h1 className="text-[#0c4a6e] font-dosis font-bold text-lg bg-palette-color-medium pl-2 pr-2 rounded-md text-center"> Embrace Awareness with Awaca</h1>
      <Quote quote={quote}></Quote>
      <Timer></Timer>
      <Spotify></Spotify>
    </section>
  );
}
