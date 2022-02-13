import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "src/common/styles/Account.module.css";
import Account from "src/common/components/account";
import { loginAction } from "src/store/actions/auth";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

function Login(props) {
  const router = useRouter();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const body = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    props.loginDispatch(body);
  };
  useEffect(() => {
    if (props.auth.isFulfilled === true) {
      router.push("/dashboard");
    }
  });
  const notify = () => {
    toast.info("Login success", {
      position: "top",
    });
  };
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
          <form className={styles.login} onSubmit={submitHandler}>
            <div className={`${styles["form-input-warpper"]} form-group`}>
              <label>Email address</label>
              <div
                className={`${styles["style-input"]} d-flex justify-content-center`}
              >
                <i className="bi bi-envelope"></i>
                <input
                  name="email"
                  type="email"
                  className="form-control"
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
                  name="password"
                  placeholder="Password"
                  required
                />
                <i onClick={togglePasswordVisiblity} className="bi bi-eye"></i>{" "}
              </div>
            </div>
            <Link href="/account/reset" passHref>
              <a className={`${styles.reset} btn`}>forgot password</a>
            </Link>
            <button
              type="submit"
              className="btn btn-block btn-secondary w-100"
              onClick={notify}
            >
              Login
            </button>
            <ToastContainer />
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

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginDispatch: (body) => {
      dispatch(loginAction(body));
      console.log("login body :" + body);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
