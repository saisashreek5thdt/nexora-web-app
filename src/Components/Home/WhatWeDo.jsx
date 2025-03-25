import React from "react";

export default function WhatWeDo() {
  return (
    <>
      <div className="services-area bg-color fix area-padding">
        <div className="container">
          <div className="row d-flex flex-wrap align-items-center justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div
                className="section-headline text-center wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <span className="title-up">What we do</span>
                <h2>Our Services</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="service-images-inner">
                <div className="services-image">
                  <img src="img/background/ani1.png" alt="" />
                </div>
                <div className="row service-wrapper">
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div
                      className="single-services wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <div className="single-services-rare">
                        <div className="services-img">
                          <a className="big-img" href="#">
                            <img src="img/icon/ser1.png" alt="" />
                          </a>
                        </div>
                        <div className="main-wel">
                          <div className="wel-content">
                            <a href="#">
                              <h4>Animation</h4>
                            </a>
                            <p>
                              Nexora engages in animation, gaming, edutainment,
                              infotainment, and content creation, serving as an
                              IP producer, partner, and distributor.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div
                      className="single-services right-services wow fadeInUp"
                      data-wow-delay="0.5s"
                    >
                      <div className="services-img video-image">
                        <a className="big-img" href="#">
                          <img src="img/icon/ser2.png" alt="" />
                        </a>
                      </div>
                      <div className="main-wel">
                        <div className="wel-content">
                          <a href="#">
                            <h4>Gaming</h4>
                          </a>
                          <p>
                            Nexora engages in animation, gaming, edutainment,
                            infotainment, and content creation, serving as an IP
                            producer, partner, and distributor.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div
                      className="single-services wow fadeInUp"
                      data-wow-delay="0.7s"
                    >
                      <div className="services-img video-image">
                        <a className="big-img" href="#">
                          <img src="img/icon/ser3.png" alt="" />
                        </a>
                      </div>
                      <div className="main-wel">
                        <div className="wel-content">
                          <a href="#">
                            <h4>Edu & Infotainment</h4>
                          </a>
                          <p>
                            Nexora engages in animation, gaming, edutainment,
                            infotainment, and content creation, serving as an IP
                            producer, partner, and distributor.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div
                      className="single-services right-services wow fadeInUp"
                      data-wow-delay="0.9s"
                    >
                      <div className="services-img video-image">
                        <a className="big-img" href="#">
                          <img src="img/icon/ser4.png" alt="" />
                        </a>
                      </div>
                      <div className="main-wel">
                        <div className="wel-content">
                          <a href="#">
                            <h4>Content Creation & IP</h4>
                          </a>
                          <p>
                            Nexora engages in animation, gaming, edutainment,
                            infotainment, and content creation, serving as an IP
                            producer, partner, and distributor.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* single-services End */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
