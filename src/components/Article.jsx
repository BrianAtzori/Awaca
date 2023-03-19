import React from "react";
import nextId from "react-id-generator";

export default function Article({ text }) {
  if (text) {
    return (
      <div className="text flex flex-col gap-2 font-lato text-palette-color-dark-blue 2xl:text-3xl">
        {text.content.map((item) => {
          return <p key={nextId()}>{item.content[0].value}</p>;
        })}
      </div>
    );
  }
}
