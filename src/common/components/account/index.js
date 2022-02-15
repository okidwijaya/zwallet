// import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "src/common/styles/Account.module.css";
import registerImg from "src/assets/image/register.png";
import bg from "src/assets/image/registerbg.png";
import {useRouter} from "next/router";
import { useSelector } from "react-redux";

export default function Account({ children }) {
  const router = useRouter();
  const auth = useSelector((state) => state.auth.userData.token);
  console.log(auth);
  if (auth) {
    router.push("/dashboard");
  } 

  return (
    <>
      <div className="row mx-auto align-item-center justify-content-center">
        <div className="col-8 col-sm-6 col-md-6 col-lg-4 mx-auto">
          <Image
            src={bg}
            className={styles.imageBackground}
            alt="bg img"
            layout="fill"
            objectFit="cover"
            objectPosition="left"
          />
          <Link href="/" passHref>
            <p className={styles.title}>Zwallet</p>
          </Link>
          {/* <div className="container"> */}
          <Image
            src={registerImg}
            className={styles.imageStarter}
            alt="register"
            width={400}
            height={450}
            // layout="fill"
            // objectFit="scale-down"
            // objectPosition="static"
          />
          {/* </div> */}
          <p className={styles["left-title"]}>
            App that Covering Banking Needs.
          </p>
          <p className={styles["left-description"]}>
            Zwallet is an application that focussing in banking needs for all
            users in the world. Always updated and always following world
            trends. 5000+ users registered in Zwallet everyday with worldwide
            users coverage.
          </p>
        </div>

        <div
          className={`${styles.formContainer} col-12 col-sm-5 col-md-6 col-lg-6`}
        >
          {children}
        </div>
      </div>
    </>
  );
}
