import styles from "src/common/styles/User.module.css";

export default function addPhone() {
  return (
    <>
      <div className={styles.addPhoneWrapper}>
        <div className={styles.phoneTitle}>
        <p className={styles.userName}>Add Phone Number</p>
        <p className={styles.phoneNumber}>
          Add at least one phone number for the transfer ID so you can start
          transfering your money to another user.
        </p>
        </div>

        <form className={styles.phone}>
          <div className={`${styles["form-input-warpper"]} form-group`}>
            <div
              className={`${styles["style-input"]} d-flex justify-content-center`}
            >
              <i className="bi bi-telephone"></i>
              <p>+62</p>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter your phone number"
                required
              />
            </div>
          </div>
          <button type="submit" className="btn btn-block btn-secondary w-100">
            add phone number
          </button>
        </form>
      </div>
    </>
  );
}
