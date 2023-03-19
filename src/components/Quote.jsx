import React from "react";

//Component that receive a prop and it renders a mindfulness quote based on the prop

export default function Quote({ quote }) {
  return (
    <h2 className="rounded-md bg-palette-color-lighter p-2 align-middle font-lato italic text-palette-color-light-blue opacity-100 drop-shadow-2xl">
      {quote}
    </h2>
  );
}
