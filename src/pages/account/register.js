import React, { useState } from "react";
import Link from "next/link";
import styles from "src/common/styles/Account.module.css";
import Account from "src/common/components/account";

export default function Register() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  return (
    <Account>
        <div className="container-fluid">
          <p className={styles["right-title"]}>
            Start Accessing Banking Needs With All Devices and All Platforms
            With 30.000+ Users
          </p>
          <p className={styles["right-description"]}>
            Transfering money is eassier than ever, you can access Zwallet
            wherever you are. Desktop, laptop, mobile phone? we cover all of
            that for you!
          </p>
          <form className={styles.login}>
            <div className={`${styles['form-input-warpper']} form-group`}>
              <div
                className={`${styles["style-input"]} d-flex justify-content-center`}
              >
                <i className="bi bi-person"></i>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Your First Name"
                  required
                />
              </div>
            </div>
            <div className={`${styles['form-input-warpper']} form-group`}>
              <div
                className={`${styles["style-input"]} d-flex justify-content-center`}
              >
                <i className="bi bi-person"></i>
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter Your Last Name"
                  required
                />
              </div>
            </div>
            <div className={`${styles['form-input-warpper']} form-group`}>
              <div
                className={`${styles["style-input"]} d-flex justify-content-center`}
              >
                <i className="bi bi-envelope"></i>
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  required
                />
              </div>
            </div>
            <div className={`${styles['form-input-warpper']} form-group mb-5`}>
              <div
                className={`${styles["style-input"]} d-flex justify-content-center`}
              >
                <i className="bi bi-lock"></i>
                <input
                  type={passwordShown ? "text" : "password"}
                  className="form-control bi bi-file-lock"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  required
                />
                <i onClick={togglePasswordVisiblity} className="bi bi-eye"></i>{" "}
              </div>
            </div>
            <button type="submit" className="btn btn-block btn-secondary w-100">
              Sign up
            </button>
          </form>
          <p className={styles["right-description"]}>
            Don’t have an account? Let’s
            <Link href="/account/login" passHref>
              <span> login</span>
            </Link>
          </p>
        </div>
      </Account>
  );
}
