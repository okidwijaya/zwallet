import Link from "next/link";
import Image from "next/image";
import logo from "src/assets/image/ZwalletLogo.svg";
import styles from "src/common/styles/Header.module.css";
// import UserCard from "src/common/components/UserCard";
import clientpic from "src/assets/image/clientst.png";

export default function Header() {
  return (
    <>
      <nav
        className={`${styles["navbar-header"]} navbar navbar-expand-lg navbar-light bg-light justify-content-between`}
      >
        <Link href="/">
          <a className="navbar-brand">
            <Image src={logo} alt="logo" />
          </a>
        </Link>
        <div className="container-fluid justify-content-end">
            <div className="col-2 d-flex">
              <div className="mx-2">
                <Image src={clientpic} alt="google" width={50} height={50} />
              </div>
              <div className="w-50 my-auto">
                <p className={`${styles.userName} my-0`}>Netflix</p>
                <p className={`${styles["transaction-description"]} my-0`}>phone</p>
              </div>
            </div>
            <button className={`${styles.signup} btn btn-light`}>
              <i className="bi bi-bell"></i>
            </button>
        </div>
      </nav>
    </>
  );
}
