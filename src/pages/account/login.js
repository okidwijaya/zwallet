import React, { useState } from "react";
// import Image from "next/image";
import Link from "next/link";
import styles from "src/common/styles/Account.module.css";
import Account from "src/common/components/account";
// import registerImg from "src/assets/image/register.png";
// import bg from "src/assets/image/registerbg.png";

export default function Login() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  // const { register, handleSubmit } = useForm();
  // const onSubmit = data => {
  //   console.log(data);
  // };
  //reac hook use form
  // ref={register({ required: "This is required." })}

  return (
    <>
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
              <div className={`${styles["form-input-warpper"]} form-group`}>
                <label>Email address</label>
                <div
                  className={`${styles["style-input"]} d-flex justify-content-center`}
                >
                  <i className="bi bi-envelope"></i>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    required
                  />
                </div>
              </div>
              <div className={`${styles["form-input-warpper"]} form-group`}>
                <label>Password</label>
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
                  <i
                    onClick={togglePasswordVisiblity}
                    className="bi bi-eye"
                  ></i>{" "}
                </div>
              </div>
              <Link href="/account/reset" passHref>
                <a className={`${styles.reset} btn`}>forgot password</a>
              </Link>
              <button
                type="submit"
                className="btn btn-block btn-secondary w-100"
              >
                Login
              </button>
            </form>
            <p className={styles["right-description"]}>
              Don’t have an account? Let’s
              <Link href="/account/register" passHref>
                <span> Sign Up</span>
              </Link>
            </p>
          </div>
      </Account>
    </>
  );
}
