import React from "react";
import { Link } from "react-router-dom";

function FooterCopyRight() {

    const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="footer-area-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="copyright">
                <p className="text-center">
                  Copyright © {currentYear} {" "} 
                  <Link to="/">Nexora {" "} </Link> {" "} All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterCopyRight;
