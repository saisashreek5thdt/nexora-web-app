import React from "react";
import { FooterCopyRight, FooterHead, FooterInfo, FooterServices } from "./index";

export default function Footer() {
  return (
    <>
      <footer className="footer1">
        <div className="footer-area">
          <div className="container">
            <div
              className="row footer-center-bg wow fadeInUp"
              data-wow-delay="0.10s"
            >
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div
                  className="footer-content logo-footer wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <FooterHead />
                </div>
              </div>
              {/* end single footer */}
              <div className="col-xl-2 col-lg-2 col-md-6">
                <div className="footer-content wow fadeInUp" data-wow-delay="0.5s">
                  <FooterServices />
                </div>
              </div>
              {/* end single footer */}
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div
                  className="footer-content last-content wow fadeInUp"
                  data-wow-delay="0.9s"
                >
                  <FooterInfo />
                </div>
              </div>
            </div>
          </div>
          <div className="footer-top-image wow fadeInLeft" data-wow-delay="0.2s">
            <img src="img/background/foot1.png" alt="" />
          </div>
          <div className="footer-top-image-2 wow fadeInRight" data-wow-delay="0.2s">
            <img src="img/background/foot2.png" alt="" />
          </div>
        </div>
        {/* Start Footer Bottom Area */}
        <FooterCopyRight />
        {/* End Footer Bottom Area */}
      </footer>
    </>
  );
}
