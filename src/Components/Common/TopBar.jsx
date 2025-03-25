import React from "react";
import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <>
      <div className="top-bar fix">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-4"></div>
            <div className="col-xl-6 col-lg-6 col-md-8">
              <div className="top-heder-inner">
                <div className="header-social-icons header-social-icons-black">
                  <ul>
                    <li>
                      <Link to="/">
                        <i className="fa fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="fa fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="mailto:info@nexora.com">
                        <i className="fa fa-envelope"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="tel:+919962900211">
                        <i className="fa fa-phone"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
