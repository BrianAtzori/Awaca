import React from "react";

import Quote from "./Quote";
import sampleBackground from "../assets/images/background_pic_sample.jpg";

export default function Hero() {
  const quote =
    "“Distractions are everywhere. Notice what takes your attention, acknowledge it, and then let it go.”";

  return (
    <div className="w-full bg-cover bg-no-repeat absolute h-2/4 text-2xl opacity-75 text-center bg-center flex justify-center items-center" style={{backgroundImage: `url(${sampleBackground})`}}>
      <Quote quote={quote}></Quote>
    </div>
  );
}
