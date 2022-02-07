import Aside from "src/common/components/Aside";
import Ballance from "src/common/components/Ballance";
// import Footer from "src/common/components/Footer";
import Header from "src/common/components/Header";
import TransactionHistory from "src/common/components/TransactionHistory";
import UserChart from "src/common/components/UserChart";
import styles from "src/common/styles/Dashboard.module.css";
// import Image from "next/image";
import Link from 'next/link';

export default function Dashboard() {
  return (
    <>
      <Header />

      <div className="p-1 mx-2">
        {/* left component */}
        <div className="row w-100 mx-auto">
          <div className="co-11 col-sm-12 col-md-3 col-lg-3">
            <Aside />
          </div>
          {/* main content */}
          <div className="col-11 col-sm-12 col-md-8 col-lg-8">
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
                    <Link href='/' passHref>
                    
                    <a>
                      <p className={styles.allHistory}>see all</p>
                    </a>
                    </Link>
                  </div>
                  <TransactionHistory />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
