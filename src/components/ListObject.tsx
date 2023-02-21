import React from "react";

import "../styles/modules/list-object.module.scss"

//Here the component will be dynamic with props and children

export default function ListObject({ content }) {
  return (
    <div className="flex gap-5 text m-5 bg-palette-color-light p-1 rounded-md items-center">
      <img className="rounded-md" src="https://dummyimage.com/100x100/1d3773/fff" alt="benefit_of_meditation"></img>
      <p className='font-lato text-lg text-[#0c4a6e]'>{content}</p>
    </div>
  );
}
