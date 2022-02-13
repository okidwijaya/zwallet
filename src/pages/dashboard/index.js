import Balance from "src/common/components/Balance";
import HistoryDashboard from "src/pages/transactionHistory";
import UserChart from "src/common/components/UserChart";
import styles from "src/common/styles/Dashboard.module.css";
import Link from "next/link";
import Layout from "src/common/components/Layout";
import { getUserId } from "src/modules/getData/getUserList";
import React, { useState, useEffect } from "react";
import { profileUser } from "src/store/actions/user";
import { connect } from "react-redux";

function Dashboard(props) {
  const [user, setUser] = useState({});

  const token = props.token;
  const receiverId = props.id;
  const balance = props.balance;
  console.log(balance)
  useEffect(() => {
    getUserId(receiverId, token)
      .then((res) => {
        setUser({ ...res.data.data });
        const data = { 
          ...res.data.data 
          // balance: res.data.data.balance,
          // firstName: res.data.data.firstName,
        };
        // console.log(res.data.data);
        props.userDispatch(data);
        // dispatch(profileUser(data));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Layout>
        <div>
          <Balance />
          <div className="row mx-auto w-100">
            <div className="col-10 col-sm-10 col-md-7">
              <UserChart />
            </div>
            <div className="col-10 col-sm-10 col-md-5">
              <div className={styles.TransactionHistory}>
                <div className="d-flex justify-content-between">
                  <p>
                    <strong>Transaction History</strong>
                  </p>
                  <Link href="/history" passHref>
                    <a>
                      <p className={styles.allHistory}>see all</p>
                    </a>
                  </Link>
                </div>
                <HistoryDashboard />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.userData.token,
    id: state.auth.userData.id,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    userDispatch: (data) => {
      dispatch(profileUser(data));
      // console.log("user data :" + data);
    },
  };
};

export default connect(mapStateToProps ,mapDispatchToProps)(Dashboard);