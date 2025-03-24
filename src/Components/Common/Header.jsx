import React from "react";
import { TopBar, Logo, Menu } from "./index";

export default function Header() {
  return (
    <>
      <header className="header-one">
        {/* Start header top */}
        <TopBar />
        {/* End header top */}
        <div id="sticker" className="header-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="row">
                  <Logo />
                  <Menu />
                </div>
              </div>
              <div className="col-12">
                <div className="mobile-menu"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
