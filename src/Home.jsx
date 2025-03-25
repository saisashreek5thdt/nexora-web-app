import React from "react";
import {
  Header,
  Footer,
  Intro,
  Services,
  About,
  Counter,
  WhatWeDo,
  HowWeWork,
  ContactUs
} from "./Components/index";

export default function Home() {
  return (
    <>
      {/* Header Start */}
      <Header />
      {/* Header End */}
      {/* Main Start */}
      <main>
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
      </main>
      {/* Main End */}
      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
    </>
  );
}
