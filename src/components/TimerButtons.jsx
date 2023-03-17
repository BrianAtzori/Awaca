import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseTimer,
  decreaseTimer,
  startTimer,
  pauseTimer,
} from "../features/timer/timerSlice";

export default function TimerButtons({startFunction}) {
  const isTimerPlaying = useSelector((state) => state.timer.isPlaying);
  const dispatch = useDispatch();

  return (
    <div className="mx-auto mt-6 grid grid-cols-3">
      <button
        onClick={() => dispatch(decreaseTimer())}
        className="h-12 w-12 justify-self-center rounded-full border-2 bg-palette-color-dark font-lato  text-xl font-bold text-[#fff]"
        disabled={isTimerPlaying ? true : false}
      >
        -
      </button>

      <button
        onClick={ isTimerPlaying ? () => dispatch(pauseTimer()) :() => dispatch(startTimer())}
        className=" h-20 w-20 justify-self-center rounded-full border-2 bg-palette-color-dark font-dosis text-[#fff]"
      >
        {isTimerPlaying ? "PAUSE" : "START"}
      </button>

      <button
        onClick={() => dispatch(increaseTimer())}
        className=" h-12 w-12 justify-self-center rounded-full border-2 bg-palette-color-dark font-lato text-xl font-bold text-[#fff]"
        disabled={isTimerPlaying ? true : false}
      >
        +
      </button>
    </div>
  );
}
