import React from "react";
import { useSelector } from "react-redux";

import Dialog from "../components/Dialog";
import MeditationSection from "../components/MeditationSection";
import Hero from "../components/Hero";

//A simple flag in the state will determine if the dialog is needed and if needed in which version

export default function Hompage() {
  const showDialog = useSelector((state) => state.dialog.value);
  return (
    <>
      {showDialog && <Dialog></Dialog>}
      {showDialog || (
        <>
          <Hero></Hero>
          <MeditationSection></MeditationSection>
        </>
      )}
    </>
  );
}
