import Link from "next/link";
import Image from "next/image";
import logo from "src/assets/image/ZwalletLogo.svg";
import styles from "src/common/styles/Header.module.css";
    

export default function Nav() {
  return (
    <>
      <nav
        className={`${styles["navbar-header"]} navbar navbar-expand-lg navbar-light bg-light `}
      >
        <Link href="/">
          <a className="navbar-brand">
            <Image src={logo} alt="logo" />
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <div className="position-absolute end-0 my-2 my-lg-0">
            <Link href={"/account/login"} passHref>
              <button className={`${styles.login} btn btn-outline-primary`}>
                Login
              </button>
            </Link>
            <Link href={"/account/register"} passHref>
            <button className={`${styles.signup} btn btn-primary`}>
              {" "}
              Sign Up
            </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
