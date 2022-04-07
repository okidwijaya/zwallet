// import React, { useState } from "react";
// import { connect } from "react-redux";
import TopupModal from "src/pages/topupModal";
import styles from "src/common/styles/Dashboard.module.css";
import Link from "next/link";
import { getUserId } from "src/modules/getData/getUserList";
import React, { useState, useEffect } from "react";
// import { profileUser } from "src/store/actions/user";
import { connect } from "react-redux";

function Balance(props) {
  const [show, setShow] = useState(false);

  const [user, setUser] = useState({});

  const token = props.token;
  const receiverId = props.id;
  // // const balance = props.balance;
  // // console.log(balance)
  useEffect(() => {
    getUserId(receiverId, token)
      .then((res) => {
        setUser({ ...res.data.data });
        const data = {
          // ...res.data.data
          balance: res.data.data.balance,
          firstName: res.data.data.firstName,
          lastName: res.data.data.lastName,
          noTelp: res.data.data.noTelp,
          image: res.data.data.image,
          email: res.data.data.email,
          id: res.data.data.id,
        };
        // console.log(res.data.data);
        // props.userDispatch(data);
        // dispatch(profileUser(data));
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <>
      <section className={styles.ballanceInfo}>
        <div className="row w-100">
          <div className="col-11 col-sm-6 mx-auto">
            <p>Balance</p>
            <h1>Rp.{user.balance}</h1>
            <p> {user.noTelp !== null ? user.noTelp : "-"}</p>
          </div>
          <div className="col-11 col-sm-4 my-auto float-right">
            <Link href="/receiver" onClick={handleClick} passHref>
              <button className="btn btn-block">
                <span>
                  <i className="bi bi-arrow-up"></i>
                </span>
                Transfer
              </button>
            </Link>
            <button className="btn btn-block" onClick={() => setShow(true)}>
              <span>
                <i className="bi bi-plus-lg"></i>
              </span>
              Top up
            </button>
            <TopupModal onClose={() => setShow(false)} show={show} />
          </div>
        </div>
      </section>
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
    user: state.data,
  };
};

export default connect(mapStateToProps)(Balance);
