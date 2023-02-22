import React from "react";
import TimerButtons from "./TimerButtons.tsx";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

// https://www.npmjs.com/package/react-countdown-circle-timer

export default function Timer() {
  return (
    <main className="mb-6 flex h-96 flex-auto flex-col justify-center p-5">
      <div className="mx-auto">
        <CountdownCircleTimer
          isPlaying
          duration={60}
          colors={["#3c979f", "#73b3b2", "#aecfd0", "#bed9dd", "#deebec"]}
          colorsTime={[45, 30, 15, 10, 5]}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
      </div>
      <TimerButtons></TimerButtons>
    </main>
  );
}
