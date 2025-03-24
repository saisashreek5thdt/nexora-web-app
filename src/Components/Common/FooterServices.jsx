import React from "react";
import { Link } from "react-router-dom";

export default function FooterServices() {
  return (
    <>
      <div className="footer-head">
        <h4>Services Link</h4>
        <ul className="footer-list">
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
            <Link to="/">IP</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
