import React from "react";
import nextId from "react-id-generator";

//Receive an article from the API as an array of paragraph and it renders each paragraph to create an article

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
