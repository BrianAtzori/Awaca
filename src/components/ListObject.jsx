import React from "react";

import "../styles/modules/list-object.module.scss"

//Here the component will be dynamic with props and children

export default function ListObject({ content }) {
  return (
    <div>
      <p className='font-lato'>{content}</p>
    </div>
  );
}
