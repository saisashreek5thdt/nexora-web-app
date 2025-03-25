import React from "react";
import { Header, Footer } from "./Components/index";

export default function RootLayout({ children }) {
  return (
    <>
      {/* Header Start */}
      <Header />
      {/* Header End */}
      {/* Main Start */}
      <main>{children}</main>
      {/* Main End */}
      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
    </>
  );
}
