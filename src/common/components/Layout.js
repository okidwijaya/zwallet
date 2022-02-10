import React from "react";
import Aside from "./Aside";
import Header from "src/common/components/Header";
import FooterUser from "src/common/components/FooterUser";

export default function Layout({ children }) {
  return (
    <>
    <Header />
      <div className="row w-100 mx-auto my-2">
        <div className="co-11 col-sm-12 col-md-3 col-lg-3">
          <Aside />
        </div>
        {/* main content */}
        <div className="col-11 col-sm-12 col-md-9 col-lg-9">
          <div >{children}</div>
        </div>
      </div>
      <FooterUser />
    </>
  );
}
