import React, { useEffect, useState } from "react";

import Quote from "./Quote";
import sampleBackground from "../assets/images/background_pic_sample.jpg";
import getResourcesFromAPI from "../contentfulClient";

export default function Hero() {
  const [quote, setQuote] = useState(
    ""
  );

  async function getQuote() {
    let retrievedQuotes = await getResourcesFromAPI("quotes");

    let singleQuote =
      retrievedQuotes[Math.floor(Math.random() * (retrievedQuotes.length-1 - 1) + 0)];

    setQuote(singleQuote);
  }

  useEffect( () => {
    getQuote()
  },[])
  return (
    <div
      className="absolute -z-10 flex h-2/4 w-full items-center justify-center bg-cover bg-center bg-no-repeat p-12 text-center text-2xl opacity-75 2xl:h-1/3 2xl:text-4xl"
      style={{ backgroundImage: `url(${sampleBackground})` }}
    >
      <Quote quote={quote}></Quote>
    </div>
  );
}
