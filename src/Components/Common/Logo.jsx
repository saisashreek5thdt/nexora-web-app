import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <>
      <div className="col-xl-5 col-lg-5 col-md-3">
        <div className="header-logo">
          <Link to="/">
            <img src="img/logo/logoHeader.png" alt="" />
          </Link>
        </div>
      </div>
    </>
  );
}
