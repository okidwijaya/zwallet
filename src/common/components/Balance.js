import React, { useState } from "react";
import { connect } from "react-redux";
import TopupModal from "src/pages/topupModal";
import styles from "src/common/styles/Dashboard.module.css";
import Link from "next/link";

function Balance(props) {
  const [show, setShow] = useState(false);

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
            <h1>Rp.{props.user.balance}</h1>
            <p> {props.user.noTelp !== null ? props.user.noTelp : "-"}</p>
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

const mapStateToProps = (state) => {
  return {
    token: state.auth.userData.token,
    id: state.auth.userData.id,
    user: state.user.data,
  };
};

export default connect(mapStateToProps)(Balance);
