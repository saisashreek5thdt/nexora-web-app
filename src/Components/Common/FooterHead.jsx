import React from "react";
import { Link } from "react-router-dom";
import FooterSocial from "./FooterSocial";

function FooterHead() {
  return (
    <>
      <div className="footer-head">
        <div className="footer-logo">
          <Link to="/">
            <img src="img/logo/logo2.png" alt="" />
          </Link>
        </div>
        <p>
          When replacing a multi lined selection of text dummy text maintains
          the amount of lines. When replacing a selection.
        </p>
        <FooterSocial />
      </div>
    </>
  );
}

export default FooterHead;
