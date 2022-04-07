// import { getUserId } from "src/modules/getData/getUserList";
// import { profileUser } from "src/store/actions/user";
import { connect } from "react-redux";
// import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import logo from "src/assets/image/ZwalletLogo.svg";
import styles from "src/common/styles/Header.module.css";
import clientpic from "src/assets/image/clientst.png";
// import { useSelector } from "react-redux";
import ProfileNav from "./ProfileNav";

function Header(props) {
  // const [user, setUser] = useState({});
  const router = useRouter();
  const token = props.token;
  const receiverId = props.id;
  if (token === null || token === undefined || token === "") {
    router.push("/");
  }
  // const auth = useSelector((state) => state.auth.userData.token);
  // const user = useSelector((state) => state.user);
  // console.log(receiverId, token);

  // useEffect(() => {
  //   getUserId(receiverId, token)
  //     .then((res) => {
  //       setUser({ ...res.data.data });
  //       const data = {
  //         // ...res.data.data
  //         balance: res.data.data.balance,
  //         firstName: res.data.data.firstName,
  //         lastName: res.data.data.lastName,
  //         noTelp: res.data.data.noTelp,
  //         image: res.data.data.image,
  //         email: res.data.data.email,
  //         id: res.data.data.id,
  //       };
  //       // console.log(res.data.data);
  //       props.userDispatch(data);
  //       // dispatch(profileUser(data));
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

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
            <div>
              <ProfileNav />
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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     userDispatch: (data) => {
//       dispatch(profileUser(data));
//       // console.log("user data :" + data);
//     },
//   };
// };

const mapStateToProps = (state) => {
  return {
    token: state.auth.userData.token,
    id: state.auth.userData.id,
    user: state.user.data,
  };
};

export default connect(mapStateToProps)(Header);
