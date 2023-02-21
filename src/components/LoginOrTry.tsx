import React from "react";

export default function LoginOrTry() {
  return (
    <div className="flex justify-center gap-5">
      <button className="ease-in-out transition-colors bg-palette-color-darker border-transparent border-2 p-2 w-1/4 rounded-md font-lato text-[#ffff] hover:bg-transparent hover:animation-none hover:text-palette-color-darker hover:border-solid hover:border-palette-color-darker hover:border-2"> Login </button>
      <button className=" ease-in-out transition-all bg-palette-color-darker border-transparent border-2 p-2 w-1/4 rounded-md font-lato text-[#ffff] hover:bg-transparent hover:animation-none hover:text-palette-color-darker hover:border-solid hover:border-palette-color-darker hover:border-2 animate-bounce hover:animate-none"> Try Awaca </button>
    </div>
  );
}
