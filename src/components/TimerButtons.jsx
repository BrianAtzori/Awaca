import React from "react";
import { useDispatch } from "react-redux";
import { increaseTimer, decreaseTimer } from "../features/timer/timerSlice";

export default function TimerButtons() {

  const dispatch = useDispatch()

  return (
    <div className="mt-6 grid grid-cols-3 mx-auto">
      <button onClick={() =>dispatch(decreaseTimer())} className="justify-self-center h-12 w-12  rounded-full rounded-full border-2 bg-palette-color-dark font-lato  text-xl font-bold text-[#fff]">
        -
      </button>

      <button className=" justify-self-center h-20 w-20 rounded-full border-2 bg-palette-color-dark font-dosis text-[#fff]">
        START
      </button>

      <button onClick={() => dispatch(increaseTimer())} className=" justify-self-center h-12 w-12 rounded-full border-2 bg-palette-color-dark font-lato text-xl font-bold text-[#fff]">
        +
      </button>
    </div>
  );
}
