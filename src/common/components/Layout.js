import React from "react";
import Aside from "./Aside";
import Header from "src/common/components/Header";
import Footer from "src/common/components/Footer";

export default function Layout({ children }) {
  return (
    <>
    <Header />
      <div className="row w-100 mx-auto">
        <div className="co-11 col-sm-12 col-md-3 col-lg-3">
          <Aside />
        </div>
        {/* main content */}
        <div className="col-11 col-sm-12 col-md-8 col-lg-8">
          <div>{children}</div>
        </div>
      </div>
      <Footer />
    </>
  );
}
