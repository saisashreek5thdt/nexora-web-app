import React from "react";
import {
  Intro,
  Services,
  About,
  Counter,
  WhatWeDo,
  HowWeWork,
  ContactUs,
} from "./Components/index";

export default function Home() {
  return (
    <>
      {/* Intro Start */}
      <Intro />
      {/* Intro End */}
      {/* Service Start */}
      <Services />
      {/* Service End */}
      {/* About Start */}
      <About />
      {/* About End */}
      {/* Counter Start */}
      <Counter />
      {/* Counter End */}
      {/* What We Do Start */}
      <WhatWeDo />
      {/* What We Do End */}
      {/* How We Work Start */}
      <HowWeWork />
      {/* How We Work End */}
      {/* Contact Us Start */}
      <ContactUs />
      {/* Contact Us End */}
    </>
  );
}
