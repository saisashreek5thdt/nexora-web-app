import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <>
      <div className="col-xl-7 col-lg-7 col-md-9">
        <div className="header_menu f-right">
          <nav id="mobile-menu">
            <ul className="main-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li className="menu-item-has-children">
                <Link to="/">Services</Link>
                <ul className="submenu">
                  <li>
                    <Link to="/">Animation</Link>
                  </li>
                  <li>
                    <Link to="/">Gaming</Link>
                  </li>
                  <li>
                    <Link to="/">Edutainment</Link>
                  </li>
                  <li>
                    <Link to="/">Infotainment</Link>
                  </li>
                  <li>
                    <Link to="/">Content Creation</Link>
                  </li>
                  <li>
                    <Link to="/">IP</Link>
                  </li>
                </ul>
              </li>
              <li className="contact">
                <Link to="/">Get In Touch</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
