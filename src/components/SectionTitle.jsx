import React from "react";

//Component that renders the heading of a page dynamically based on the props that receives

export default function SectionTitle({ title, subTitle }) {
  return (
    <div className="">
      <h2 className=" my-2 rounded-md bg-palette-color-medium pl-2 pr-2 font-dosis text-2xl font-bold text-palette-color-light-blue 2xl:text-4xl">
        {title}
      </h2>
      <div></div>
      <h3 className=" font-lato text-xl font-bold text-palette-color-dark-blue decoration-palette-color-dark-blue underline-offset-2 2xl:text-3xl">
        {subTitle}
      </h3>
    </div>
  );
}
