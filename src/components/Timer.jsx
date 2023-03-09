import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { resetTimer } from "../features/timer/timerSlice";

import TimerButtons from "./TimerButtons";
import TimerDisplay from "./TimerDisplay";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

// https://www.npmjs.com/package/react-countdown-circle-timer
// https://www.npmjs.com/package/react-confetti
// https://www.joshwcomeau.com/react/announcing-use-sound-react-hook/

//Da gestire disable bottoni del tempo quando timer va e cambio testo bottone in pause

export default function Timer() {
  const timerAmount = useSelector((state) => state.timer.value);
  const isTimerPlaying = useSelector((state) => state.timer.isPlaying);

  const dispatch = useDispatch();

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

  function timerRestart() {
    dispatch(resetTimer());
  }

  return (
    <main className="mt-10 flex h-96 flex-auto flex-col bg-cover bg-center bg-no-repeat ">
      <h2 className="mb-6 rounded-md bg-palette-color-medium pl-2 pr-2 text-center font-dosis text-lg font-bold text-[#0c4a6e]">
        Use the buttons to select the amount of minutes you want to spend
        meditating:
      </h2>
      <div className="mx-auto">
        <CountdownCircleTimer
          isPlaying={isTimerPlaying}
          duration={timerAmount}
          colors={["#3c979f", "#73b3b2", "#aecfd0", "#bed9dd"]}
          colorsTime={timerSectors}
          size={200} // Gestisco con size del parent per responsiveness?
          onComplete={() => {
            timerRestart();
            return { shouldRepeat: true };
          }}
        >
          {({ remainingTime }) => timerDisplayGeneration(remainingTime)}
        </CountdownCircleTimer>
      </div>
      <TimerButtons buttonAction={isTimerPlaying ? "PAUSE" : "START"}></TimerButtons>
    </main>
  );
}
