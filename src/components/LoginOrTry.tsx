import React from "react";

export default function LoginOrTry() {
  return (
    <div className="flex justify-center gap-5">
      <button className="bg-palette-color-darker p-2 w-1/4 rounded-md font-lato text-[#ffff]"> Login </button>
      <button className="bg-palette-color-darker p-2 w-1/4 rounded-md font-lato text-[#ffff] animate-bounce"> Try Awaca </button>
    </div>
  );
}
