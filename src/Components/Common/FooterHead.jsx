import React from "react";
import { Link } from "react-router-dom";
import FooterSocial from "./FooterSocial";

function FooterHead() {
  return (
    <>
      <div className="footer-head">
        <div className="footer-logo">
          <Link to="/">
            <img src="img/logo/logoFooter.png" alt="" />
          </Link>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <FooterSocial />
      </div>
    </>
  );
}

export default FooterHead;
