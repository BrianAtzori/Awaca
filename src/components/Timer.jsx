import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useSelector } from "react-redux";

import TimerButtons from "./TimerButtons";

import sampleBackground from "../assets/images/background_pic_sample.jpg";

// https://www.npmjs.com/package/react-countdown-circle-timer

// Vedere bene funzioni Timer

//Da gestire disable bottoni del tempo quando timer va e cambio testo bottone in pause

export default function Timer() {
  const timerAmount = useSelector((state) => state.timer.value);
  const isTimerPlaying = useSelector((state) => state.timer.isPlaying);

  const timerSectors = [
    (timerAmount / 4) * 3,
    (timerAmount / 4) * 2,
    timerAmount / 4,
  ];

  return (
    <main
      className="mt-10 flex h-96 flex-auto flex-col bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: `url(${sampleBackground})` }}
    >
      <h2 className="mb-6 rounded-md bg-palette-color-medium pl-2 pr-2 text-center font-dosis text-lg font-bold text-[#0c4a6e]">
        {" "}
        Now use the buttons to select the amount of minutes you want to spend
        meditating:
      </h2>
      <div className="mx-auto">
        <CountdownCircleTimer
          isPlaying={isTimerPlaying === true ? true : false}
          duration={timerAmount}
          colors={["#3c979f", "#73b3b2", "#aecfd0", "#bed9dd"]}
          colorsTime={timerSectors}
          size={200} // Gestisco con size del parent per responsiveness?
          //Prop Children
        >
          {({ remainingTime }) => remainingTime /60}
        </CountdownCircleTimer>
      </div>
      <TimerButtons></TimerButtons>
    </main>
  );
}
