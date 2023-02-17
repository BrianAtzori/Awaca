import React from "react";

import SectionTitle from "./SectionTitle";
import ListObject from "./ListObject";

import Styles from "../styles/modules/dialog.module.scss"

//A simple flag in the state will determine if the dialog is needed and if needed in which version

export default function Dialog() {

  //Data should be loaded dynamically from the backend/cms

  const benefits: string[] = ["Benefit #1", "Benefit #2", "Benefit#3"];
  const sectionTitle: string = "Why you should be growing awareness with Awaca?"
  const sectionSubTitle: string = "Benefits of meditation:"

  return (
    <div className="flex flex-col p-5">
      <SectionTitle title={sectionTitle} subTitle={sectionSubTitle}></SectionTitle>
      {benefits.map((item) => {
        return <ListObject content={item}></ListObject>;
      })}
    </div>
  );
}
