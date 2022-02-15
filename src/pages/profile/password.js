import styles from "src/common/styles/Account.module.css";
import React, { useState } from "react";
import Layout from "src/common/components/Layout.js";

export default function ForgotPassword() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  return (
    <>
      <Layout>
        <div className={styles.ReceiverCardUserForgotWrapper}>
          <div className={styles.ReceiverCardUserForgot}>
            <div className="container-fluid w-100 mx-auto pt-5">
              <form className={styles.login}>
                <div
                  className={`${styles["form-input-warpper"]} form-group mb-5`}
                >
                  <div
                    className={`${styles["style-input"]} d-flex justify-content-center`}
                  >
                    <i className="bi bi-lock"></i>
                    <input
                      type={passwordShown ? "text" : "password"}
                      name="password"
                      className="form-control bi bi-file-lock"
                      placeholder="Old Password"
                      required
                    />
                    <i
                      onClick={togglePasswordVisiblity}
                      className="bi bi-eye"
                    ></i>{" "}
                  </div>
                </div>
                <div
                  className={`${styles["form-input-warpper"]} form-group mb-5`}
                >
                  <div
                    className={`${styles["style-input"]} d-flex justify-content-center`}
                  >
                    <i className="bi bi-lock"></i>
                    <input
                      type={passwordShown ? "text" : "password"}
                      name="password"
                      className="form-control bi bi-file-lock"
                      placeholder="New Password"
                      required
                    />
                    <i
                      onClick={togglePasswordVisiblity}
                      className="bi bi-eye"
                    ></i>{" "}
                  </div>
                </div>
                <div
                  className={`${styles["form-input-warpper"]} form-group mb-5`}
                >
                  <div
                    className={`${styles["style-input"]} d-flex justify-content-center`}
                  >
                    <i className="bi bi-lock"></i>
                    <input
                      type={passwordShown ? "text" : "password"}
                      name="password"
                      className="form-control bi bi-file-lock"
                      placeholder="Confirm New Password"
                      required
                    />
                    <i
                      onClick={togglePasswordVisiblity}
                      className="bi bi-eye"
                    ></i>{" "}
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-block btn-secondary w-100"
                >
                  Change Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
