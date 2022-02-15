import Link from "next/link";
import Image from "next/image";
import logo from "src/assets/image/ZwalletLogo.svg";
import styles from "src/common/styles/Header.module.css";
import clientpic from "src/assets/image/clientst.png";
import { useSelector } from "react-redux";
// import { connect } from "react-redux";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const auth = useSelector((state) => state.auth.userData.token);
  console.log(auth);

  const user = useSelector((state) => state.user);
  if (auth === null || auth === undefined || auth === "") {
    router.push("/");
  } 

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
          <div className="col-3 d-flex">
            <div className="mx-2">
              <Image src={clientpic} alt="google" width={50} height={50} />
            </div>
            <div className="w-50 my-auto">
            <p className={`${styles["header-title"]} my-0`}>
                {user.data.lastName !== null || user.data.lastName !== undefined
                  ? user.data.lastName
                  : "-"}
                {user.data.firstName !== null ||
                user.data.firstName !== undefined
                  ? user.data.firstName
                  : "-"}
              </p>
              <p className={`${styles["header-title-desc"]} my-0`}>
                {user.data.noTelp !== null || user.data.noTelp !== undefined
                  ? user.data.noTelp
                  : "-"}
              </p>
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

// const mapStateToProps = (state) => {
//   return {
//     token: state.auth.userData.token,
//     id: state.auth.userData.id,
//     user: state.user.data,
//   };
// };

// export default connect(mapStateToProps)(Header);
