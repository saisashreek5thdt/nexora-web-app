import React from "react";
import { Link } from "react-router-dom";

export default function Intro() {
  return (
    <>
      <div className="intro-area intro-home">
        <div className="bg-wrapper">
          <img src="img/slider/slider-bg1.jpg" alt="" />
        </div>
        <div className="intro-content">
          <div className="slider-content">
            <div className="container">
              <div className="row d-flex align-items-center">
                <div className="col-xl-5 col-lg-5 col-md-6">
                  <div className="slide-all-text">
                    {/* layer 2 */}
                    <div className="layer-2 wow fadeInUp" data-wow-delay="0.3s">
                      <h1 className="title-2">Animation Studio</h1>
                    </div>
                    {/* layer 3 */}
                    <div className="layer-3 wow fadeInUp" data-wow-delay="0.7s">
                      <Link to="/" className="ready-btn anti-btn">
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-7 col-md-6">
                  <div
                    className="slide-images-inner wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <div className="slide-images video-image">
                      <div className="video-content slide-video-content">
                        <a
                          href="https://www.youtube.com/watch?v=ckHzmP1evNU"
                          className="video-play video-zone"
                        >
                          <i className="fa fa-play"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
