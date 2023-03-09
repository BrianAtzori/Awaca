import React from "react";

import MeditationSection from "../components/MeditationSection";
import Hero from "../components/Hero";

//A simple flag in the state will determine if the dialog is needed and if needed in which version

export default function Hompage() {
  return (
    <>
          <Hero></Hero>
          <MeditationSection></MeditationSection>
    </>
  );
}
