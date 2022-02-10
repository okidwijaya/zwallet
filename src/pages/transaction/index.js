import Link from "next/link";
import Layout from "src/common/components/Layout";
import TransactionHistory from "src/common/components/HistoryCard";
import styles from "src/common/styles/Dashboard.module.css";

export default function Transaction() {
  return (
    <>
      <Layout>
        <div className="col-10 col-sm-10 col-md-10 mx-auto my-5">
          <div className={styles.TransactionHistory}>
            <div className="d-flex justify-content-between">
              <p>
                <strong>Transaction History</strong>
              </p>
              <Link href="/" passHref>
                <button className="btn btn-primary">--Search filter--</button>
              </Link>
            </div>
            <TransactionHistory />
          </div>
        </div>
      </Layout>
    </>
  );
}
