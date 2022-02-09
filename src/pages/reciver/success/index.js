import Image from "next/image";
import clientpic from "src/assets/image/clientst.png";
import Layout from "src/common/components/Layout";
import styles from "src/common/styles/Dashboard.module.css";
import Link from "next/link";

export default function Success() {
  return (
    <>
      <Layout>
        <div className="container-fluid mx-auto my-5">
          <div>
            <i className="bi bi-check-circle-fill"></i> transfer success
          </div>
          <div className={styles.succesInformation}>
            <p className={styles.successTitles}>Amount</p>
            <p className={styles.successDescription}>Rp100.000</p>
            <p className={styles.successTitles}>Balance Left</p>
            <p className={styles.successDescription}>Rp20.000</p>
            <p className={styles.successTitles}>Date & time</p>
            <p className={styles.successDescription}>May 11, 2020 - 12.20</p>
            <p className={styles.successTitles}>Notes</p>
            <p className={styles.successDescription}>For buying some socks</p>
          </div>
          <p className={styles.userName}>Transfer to</p>
          <div>
            <div className="col-8 col-md-8 d-flex">
              <div className="mx-2 ">
                <Image src={clientpic} alt="google" width={50} height={50} />
              </div>
              <div className="w-50 text-left my-auto">
                <p className={styles.userName}>Netflix</p>
                <p className={styles["transaction-description"]}>Transfer</p>
              </div>
            </div>
          </div>
          <Link href="/" passHref>
            <button className="btn btn-primary d-flex">back to home</button>
          </Link>
          <button className="btn btn-secondary d-flex">download pdf</button>
        </div>
      </Layout>
    </>
  );
}
