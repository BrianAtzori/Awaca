import React from "react";

export default function TimerButtons() {
  return (
    <div className="mt-6 grid grid-cols-3 mx-auto">
      <button className="justify-self-center h-12 w-12  rounded-full rounded-full border-2 bg-palette-color-dark font-lato  text-xl font-bold text-[#fff]">
        -
      </button>

      <button className=" justify-self-center h-20 w-20 rounded-full border-2 bg-palette-color-dark font-dosis text-[#fff]">
        START
      </button>

      <button className=" justify-self-center h-12 w-12 rounded-full border-2 bg-palette-color-dark font-lato text-xl font-bold text-[#fff]">
        +
      </button>
    </div>
  );
}
