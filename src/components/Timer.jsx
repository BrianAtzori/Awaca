import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { resetTimer } from "../features/timer/timerSlice";
import { useState } from "react";

import TimerButtons from "./TimerButtons";
import TimerDisplay from "./TimerDisplay";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import useSound from "use-sound";
import bellSFX from "../assets/sounds/bell_sfx.mp3";

// https://www.npmjs.com/package/react-countdown-circle-timer
// https://www.npmjs.com/package/react-confetti
// https://www.joshwcomeau.com/react/announcing-use-sound-react-hook/

export default function Timer() {
  const timerAmount = useSelector((state) => state.timer.value);
  const isTimerPlaying = useSelector((state) => state.timer.isPlaying);

  const dispatch = useDispatch();

  const [playBell] = useSound(bellSFX);

  const timerSectors = [
    (timerAmount / 4) * 3,
    (timerAmount / 4) * 2,
    timerAmount / 4,
  ];

  let remainingMinutes = 0;

  function manageTimeConversion(time, operator) {
    switch (operator) {
      case "/": {
        let minutes = Math.floor(time / 60);
        if (minutes < 10) {
          return "0" + minutes.toString();
        }
        return minutes;
      }

      case "%": {
        let seconds = Math.floor(time % 60);
        if (seconds < 10) {
          return "0" + seconds.toString();
        }
        return seconds;
      }

      default:
        break;
    }
  }

  function timerDisplayGeneration(remainingSeconds) {
    remainingMinutes =
      manageTimeConversion(remainingSeconds, "/") +
      ":" +
      manageTimeConversion(remainingSeconds, "%");

    return <TimerDisplay remainingTime={remainingMinutes}></TimerDisplay>;
  }

  function timerComplete() {
    if (isTimerPlaying) {
      playBell();
      dispatch(resetTimer());
    }
  }

  function calculateSize() {
    console.log(window.innerWidth);
    let timerSize = 0;

    if (window.innerWidth < 500) {
      timerSize = window.innerWidth - (window.innerWidth * 30) / 100;
      console.log(timerSize);
      return timerSize;
    }

    if (window.innerWidth > 500 && window.innerWidth < 1000) {
      timerSize = window.innerWidth - (window.innerWidth * 70) / 100;
      console.log(timerSize);
      return timerSize;
    }

    if (window.innerWidth > 1000 && window.innerWidth <1400) {
      timerSize = window.innerWidth - (window.innerWidth * 75) / 100;
      console.log(timerSize);
      return timerSize;
    }

    if (window.innerWidth > 1400 && window.innerWidth  < 1900) {
      timerSize = window.innerWidth - (window.innerWidth * 80) / 100;
      console.log(timerSize);
      return timerSize;
    }

    if (window.innerWidth > 1900) {
      timerSize = window.innerWidth - (window.innerWidth * 85) / 100;
      console.log(timerSize);
      return timerSize;
    }
  }

  return (
    <main className="mt-10 flex h-96 flex-col bg-cover bg-center bg-no-repeat lg:w-8/12">
      <h2 className="mb-6 rounded-md bg-palette-color-medium pl-2 pr-2 text-center font-dosis text-lg font-bold text-[#0c4a6e]">
        Use the buttons to select the amount of minutes you want to spend
        meditating:
      </h2>
      <div className="mx-auto flex w-full justify-center">
        <CountdownCircleTimer
          isPlaying={isTimerPlaying}
          duration={timerAmount}
          colors={["#3c979f", "#73b3b2", "#aecfd0", "#bed9dd"]}
          colorsTime={timerSectors}
          size={calculateSize()}
          onComplete={() => {
            timerComplete();
            return { shouldRepeat: true };
          }}
        >
          {({ remainingTime }) => timerDisplayGeneration(remainingTime)}
        </CountdownCircleTimer>
      </div>
      <TimerButtons
        buttonAction={isTimerPlaying ? "PAUSE" : "START"}
      ></TimerButtons>
    </main>
  );
}
