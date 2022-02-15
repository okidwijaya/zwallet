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
      </nav>
    </>
  );
}
