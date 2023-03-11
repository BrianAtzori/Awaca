import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Homepage from "./pages/Hompage";
import HowToMeditate from "./pages/HowToMeditate";
import WhyYouShouldMeditate from "./pages/WhyYouShouldMeditate";
import Links from "./pages/Links";
import About from "./pages/About";

import "./styles/global-styles.scss";

export default function App() { 

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route
          path="how-to-meditate"
          element={<HowToMeditate></HowToMeditate>}
        ></Route>
        <Route
          path="why-you-should-meditate"
          element={<WhyYouShouldMeditate></WhyYouShouldMeditate>}
        ></Route>
        <Route path="awaka-links" element={<Links></Links>}></Route>
        <Route path="about-awaka" element={<About></About>}></Route>
      </Routes>
    </>
  );
}
