import React from "react";
import { Fade } from "react-awesome-reveal";

import SectionTitle from "./SectionTitle";
import ListObject from "./ListObject";

import Styles from "../styles/modules/dialog.module.scss";
import LoginOrTry from "./LoginOrTry.tsx";

//A simple flag in the state will determine if the dialog is needed and if needed in which version

export default function Dialog() {
  //Data should be loaded dynamically from the backend/cms

  const benefits: string[] = ["Benefit #1", "Benefit #2", "Benefit#3"];
  const sectionTitle: string =
    "Why you should be growing awareness with Awaca?";
  const sectionSubTitle: string = "Benefits of meditation:";

  return (
    <Fade direction="down" className="container  mx-auto px-3">
      <div className="lg:9/12  m-5 mx-auto flex flex-col gap-2 rounded-md border-2 border-palette-color-darker bg-palette-color-lighter p-2 md:w-3/5 xl:w-6/12">
        <SectionTitle
          title={sectionTitle}
          subTitle={sectionSubTitle}
        ></SectionTitle>
        {benefits.map((item) => {
          return <ListObject content={item}></ListObject>;
        })}
        <LoginOrTry></LoginOrTry>
      </div>
    </Fade>
  );
}
