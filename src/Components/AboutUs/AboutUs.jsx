import React from 'react';
import { Breadcrumbs } from "../Common/index";
import { AboutPage, AboutAnimation } from "./index";
import { Services } from "../index";

export default function AboutUs() {
  return (
    <>
        {/* Breadcrumbs Start */}
        <Breadcrumbs currentPage={`About Us`} />
        {/* Breadcrumbs End */}
        {/* About Us Page Content Start */}
        <AboutPage />
        {/* About Us Page Content End */}
        {/* About Animation Project Start */}
        <Services />
        {/* About Animation Project End */}
        {/* About Animation Start */}
        <AboutAnimation />
        {/* About Animation End */}
    </>
  )
}