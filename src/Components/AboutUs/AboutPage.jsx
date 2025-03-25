import React from "react";

export default function AboutPage() {
  return (
    <>
      <div className="about-area bg-color area-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="center-bg">
                <div className="row d-flex align-items-center">
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div
                      className="about-images wow fadeInLeft"
                      data-wow-delay="0.5s"
                    >
                      <div className="about-top-image">
                        <img className="ab-image" src="img/about/ani.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div
                      className="about-content wow fadeInRight"
                      data-wow-delay="0.5s"
                    >
                      <div className="section-headline section-left-headline">
                        <span className="title-up"> About us</span>
                        <h2>About Company</h2>
                        <p style={{ textAlign: "justify" }}>
                          About our company you know and works in film and
                          media. Works in film and media . A Digital agency
                          media firm is a business. Of one or more experts that
                          provides professional work. The phrasal sequence of
                          the Lorem Ipsum. Media firm is a business of one or
                          more experts that provides.
                        </p>
                        <p style={{ textAlign: "justify" }}>
                          About our company you know and works in film and
                          media. Works in film and media . A Digital agency
                          media firm is a business. Of one or more experts that
                          provides professional work. The phrasal sequence of
                          the Lorem Ipsum. Media firm is a business of one or
                          more experts that provides.
                        </p>
                      </div>
                      <div className="about-company">
                        <div className="single-about">
                          <div className="ab-text-one">
                            <span className="about-icon">
                              <img src="img/about/ab1.png" alt="" />
                            </span>
                            <span className="ab-text">
                              Friendly <br />
                              Team
                            </span>
                          </div>
                        </div>
                        <div className="single-about">
                          <div className="ab-text-two">
                            <span className="about-icon">
                              <img src="img/about/ab2.png" alt="" />
                            </span>
                            <span className="ab-text">
                              Goal <br />
                              Achivment
                            </span>
                          </div>
                        </div>
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
