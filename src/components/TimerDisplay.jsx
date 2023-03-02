import React from "react";
import { useSelector } from "react-redux";

export default function TimerDisplay({ remainingTime }) {
  const timerValue = useSelector((state) => state.timer.value);

  return (
    <div className="w-full rounded-md bg-[#0c4a6e]">
      <h1 className="text-center font-dosis text-6xl font-bold text-[#f4f5fc]">
        {timerValue === 0 ? "00:00" : remainingTime}
      </h1>
    </div>
  );
}
