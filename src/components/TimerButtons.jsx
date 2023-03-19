import React from "react";
import { Fade } from "react-awesome-reveal";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseTimer,
  decreaseTimer,
  startTimer,
  pauseTimer,
} from "../features/timer/timerSlice";

export default function TimerButtons({ startFunction }) {
  const isTimerPlaying = useSelector((state) => state.timer.isPlaying);
  const dispatch = useDispatch();

  return (
    <>
      <div className="mx-auto mt-6 grid grid-cols-3">
          <button
            onClick={() => dispatch(decreaseTimer())}
            className="h-12 w-12 justify-self-center rounded-full border-2 bg-palette-color-darker font-lato  text-xl font-bold text-palette-color-whitesmoke transition-colors ease-in-out hover:border-palette-color-dark-blue 2xl:h-20 2xl:w-20 2xl:text-3xl"
            disabled={isTimerPlaying ? true : false}
          >
            -
          </button>

          <button
            onClick={
              isTimerPlaying
                ? () => dispatch(pauseTimer())
                : () => dispatch(startTimer())
            }
            className=" h-20 w-20 justify-self-center rounded-full border-2 bg-palette-color-darker font-dosis text-palette-color-whitesmoke transition-colors ease-in-out hover:border-palette-color-dark-blue 2xl:h-28 2xl:w-28 2xl:text-3xl"
          >
            {isTimerPlaying ? "PAUSE" : "START"}
          </button>

          <button
            onClick={() => dispatch(increaseTimer())}
            className=" h-12 w-12 justify-self-center rounded-full border-2 bg-palette-color-darker font-lato text-xl font-bold text-palette-color-whitesmoke transition-colors ease-in-out hover:border-palette-color-dark-blue 2xl:h-20 2xl:w-20 2xl:text-3xl"
            disabled={isTimerPlaying ? true : false}
          >
            +
          </button>
      </div>
    </>
  );
}
