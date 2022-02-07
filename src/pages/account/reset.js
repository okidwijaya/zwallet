import Account from "src/common/components/account";
import styles from "src/common/styles/Account.module.css";

export default function Reset() {
  return (
    <>
      <Account>
        <div className="container-fluid">
          <p className={styles["right-title"]}>
            Did You Forgot Your Password? Don’t Worry, You Can Reset Your
            Password In a Minutes.
          </p>
          <p className={styles["right-description"]}>
            To reset your password, you must type your e-mail and we will send a
            link to your email and you will be directed to the reset password
            screens.
          </p>
          <form className={styles.login}>
            <div className={`${styles["form-input-warpper"]} form-group my-5`}>
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
            <button
              type="submit"
              className="btn btn-block btn-secondary w-100 mt-5"
            >
              Confirm
            </button>
          </form>
        </div>
      </Account>
      </>
  );
}
