import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseTimer, decreaseTimer, startTimer } from "../features/timer/timerSlice";



export default function TimerButtons() {

  const dispatch = useDispatch()

  const isTimerPlaying = useSelector((state) => state.timer.isPlaying);

  return (
    <div className="mt-6 grid grid-cols-3 mx-auto">
      <button disabled={isTimerPlaying} onClick={() => dispatch(decreaseTimer())} className="justify-self-center h-12 w-12  rounded-full rounded-full border-2 bg-palette-color-dark font-lato  text-xl font-bold text-[#fff]">
        -
      </button>

      <button onClick={() => dispatch(startTimer())} className=" justify-self-center h-20 w-20 rounded-full border-2 bg-palette-color-dark font-dosis text-[#fff]">
        START
      </button>

      <button disabled={isTimerPlaying} onClick={() => dispatch(increaseTimer())} className=" justify-self-center h-12 w-12 rounded-full border-2 bg-palette-color-dark font-lato text-xl font-bold text-[#fff]">
        +
      </button>
    </div>
  );
}
