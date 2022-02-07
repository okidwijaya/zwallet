import styles from "src/common/styles/User.module.css";

export default function userinfo() {
  return (
    <>
      <div className={styles.succesInformation}>
        <p className={styles.t}>Personal Information</p>
        <p className={styles.description}>We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.000</p>

        <p className={styles.title}>First Name</p>
        <p className={styles.description}>John</p>

        <p className={styles.title}>Last Name</p>
        <p className={styles.description}>Wick</p>

        <p className={styles.title}>Verified E-mail</p>
        <p className={styles.description}>fortstemai@gmial.com</p>

        <p className={styles.title}>Phone Number</p>
        <p className={styles.description}>+3939 99393 99</p>
      </div>
      <button className="btn btn-light">Manage</button>
    </>
  );
}
