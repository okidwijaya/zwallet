import Ballance from "src/common/components/Ballance";
// import TransactionHistory from "src/common/components/history/HistoryCard";
import HistoryDashboard from "src/pages/transactionHistory";
import UserChart from "src/common/components/UserChart";
import styles from "src/common/styles/Dashboard.module.css";
import Link from "next/link";
import Layout from "src/common/components/Layout";

export default function Dashboard() {
  return (
    <>
      <Layout>
        {/* main content */}
        <div>
          <Ballance />
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
