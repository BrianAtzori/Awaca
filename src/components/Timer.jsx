import React from "react";
import TimerButtons from "./TimerButtons";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import sampleBackground from "../assets/images/background_pic_sample.jpg";

// https://www.npmjs.com/package/react-countdown-circle-timer

export default function Timer() {
  return (
    <main className="flex h-96 flex-auto flex-col mt-10 bg-no-repeat bg-cover bg-center " style={{backgroundImage: `url(${sampleBackground})`}}>
      <h2 className="text-[#0c4a6e] font-dosis font-bold text-lg bg-palette-color-medium pl-2 pr-2 rounded-md text-center mb-6"> Now use the buttons to select the amount of minutes you want to spend meditating:</h2>
      <div className="mx-auto">
        <CountdownCircleTimer
          //isPlaying
          duration={0}
          colors={["#3c979f", "#73b3b2", "#aecfd0", "#bed9dd", "#deebec"]}
          colorsTime={[45, 30, 15, 10, 5]}
          size={200} // Gestisco con size del parent per responsiveness?
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
      </div>
      <TimerButtons></TimerButtons>
    </main>
  );
}
