import React from "react";
import { Link } from "react-router-dom";

function FooterSocial() {
  return (
    <>
      <div className="footer-icons">
        <ul>
          <li>
            <Link to="/">
              <img src="img/about/midea1.png" alt="" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src="img/about/midea2.png" alt="" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src="img/about/midea3.png" alt="" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src="img/about/midea4.png" alt="" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src="img/about/midea5.png" alt="" />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default FooterSocial;
