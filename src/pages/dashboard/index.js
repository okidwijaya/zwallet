import Balance from "src/common/components/Balance";
import HistoryDashboard from "src/pages/transactionHistory";
import UserChart from "src/common/components/UserChart";
import styles from "src/common/styles/Dashboard.module.css";
import Link from "next/link";
import Layout from "src/common/components/Layout";


function Dashboard() {


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

// const mapStateToProps = (state) => {
//   return {
//     token: state.auth.userData.token,
//     id: state.auth.userData.id,
//     user: state.user.data,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     userDispatch: (data) => {
//       dispatch(profileUser(data));
//       // console.log("user data :" + data);
//     },
//   };
// };

export default Dashboard;