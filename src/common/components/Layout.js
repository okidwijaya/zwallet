import React from "react";
import Aside from "./Aside";
import Header from "src/common/components/header/Header";
import FooterUser from "src/common/components/footer/FooterUser";
import styles from "src/common/styles/Dashboard.module.css";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const auth = useSelector((state) => state.auth.userData.token);
  const router = useRouter();
  // console.log(auth);

  if (auth === null || auth === undefined || auth === "") {
    router.push("/");
  }

  return (
    <>
      <Header />
      <div className="row w-100 mx-auto my-2">
        <div className="co-11 col-sm-12 col-md-3 col-lg-3">
          <Aside />
        </div>
        {/* main content */}
        <div className="col-11 col-sm-12 col-md-9 col-lg-9">
          <div className={styles.userContent}>{children}</div>
        </div>
      </div>
      <FooterUser />
    </>
  );
}
