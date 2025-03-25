import React from "react";
import { Link } from "react-router-dom";

export default function AboutAnimation() {
  return (
    <>
      <div className="feature-area fix bg-color area-padding">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="feature-all wow fadeInLeft" data-wow-delay="0.5s">
                <div className="left-headline">
                  <h2>Anamation studio support client online long time</h2>
                  <p>
                    The phrasal sequence of the Lorem Ipsum text is now so and
                    that many the phrase when found, an alarm can be raised.
                  </p>
                </div>
                {/* about single */}
                <div className="support-services">
                  <Link className="support-images" to="/about">
                    <img src="img/icon/ab2.png" alt="" />
                  </Link>
                  <div className="support-content">
                    <h4>3D Quality video</h4>
                    <p>
                      The Lorem Ipsum text is now so and that many found, an
                      alarm can be raised.
                    </p>
                  </div>
                </div>
                {/* about single */}
                <div className="support-services">
                  <Link className="support-images" to="/about">
                    <img src="img/icon/ab1.png" alt="" />
                  </Link>
                  <div className="support-content">
                    <h4>Visual after effect</h4>
                    <p>
                      The Lorem Ipsum text is now so and that many found, an
                      alarm can be raised.
                    </p>
                  </div>
                </div>
                {/* about single */}
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div
                className="feature-content wow fadeInRight"
                data-wow-delay="0.5s"
              >
                <div className="feature-images">
                  <div className="about-feature video-image">
                    <img src="img/about/ab4.jpg" alt="" className="over-img" />
                    <div className="video-content image-video-content">
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
    </>
  );
}
