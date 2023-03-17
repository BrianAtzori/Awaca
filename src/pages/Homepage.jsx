import React from "react";

import MeditationSection from "../components/MeditationSection";
import Hero from "../components/Hero";
import Footer from "../components/Footer";


//A simple flag in the state will determine if the dialog is needed and if needed in which version

export default function Homepage() {
  return (
    <>
      <Hero></Hero>

      <MeditationSection></MeditationSection>
      <Footer></Footer>
    </>
  );
}
