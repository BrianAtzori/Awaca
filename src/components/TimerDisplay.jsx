import React from "react";
import { useSelector } from "react-redux";

export default function TimerDisplay({ remainingTime }) {
  const timerValue = useSelector((state) => state.timer.value);

  return (
    <div className="w-full rounded-md bg-palette-color-dark-blue">
      <h1 className="text-center font-dosis text-6xl font-bold text-palette-color-whitesmoke">
        {timerValue === 0 ? "00:00" : remainingTime}
      </h1>
    </div>
  );
}
