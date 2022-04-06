import React, { useState } from "react";
import styles from "src/common/styles/Aside.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import TopupModal from "src/pages/topupModal";
import { logoutAction } from "src/store/actions/auth";
import { logoutAuth } from "src/modules/utils/auth";
import { useSelector, useDispatch } from "react-redux";
// useRouter

export default function Aside() {
  const token = useSelector((state) => state.auth.userData.token);
  const router = useRouter();
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleLogout = () => {
    // localStorage.clear();
    logoutAuth(token)
      .then((res) => {
        dispatch(logoutAction());
        localStorage.clear("persist:root");
        router.push("/account/login");
      })
      .catch((err) => {
        console.log(err);
      });

    // navigate("/login");
    // setTimeout(() => {
    // }, 1000)
  };

  // const router = useRouter();
  const style = {
    marginRight: 10,
    // color: router.asPath === href ? 'red' : 'black',
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };
  return (
    <aside className={styles.menu}>
      <div className={styles.linkWrapper}>
        <Link href="/dashboard" onClick={handleClick} style={style} passHref>
          <a pathname={router.pathname}>
            {" "}
            <i className="bi bi-grid"></i>
            Dashboard
          </a>
        </Link>
      </div>

      <div className={styles.linkWrapper}>
        <Link href="/receiver" onClick={handleClick} style={style} passHref>
          <a pathname={router.pathname}>
            {" "}
            <i className="bi bi-arrow-up"></i>
            Transfer
          </a>
        </Link>
      </div>

      <div className={styles.linkWrapper}>
        {/* <Link href="/topup" onClick={handleClick} style={style} passHref> */}
        <a onClick={() => setShow(true)}>
          <i className="bi bi-plus-lg"></i>
          Top up
        </a>
        <TopupModal onClose={() => setShow(false)} show={show} />
        {/* </Link> */}
      </div>
      <div className={styles.linkWrapper}>
        <Link href="/profile" onClick={handleClick} style={style} passHref>
          <a pathname={router.pathname}>
            <i className="bi bi-person"></i>
            Profil
          </a>
        </Link>
      </div>

      <button className={styles.logout} onClick={handleLogout}>
        <i className="bi bi-upload"></i>
        Logout
      </button>
    </aside>
  );
}
