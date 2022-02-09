import Image from "next/image";
import clientpic from "src/assets/image/clientst.png";
import Layout from "src/common/components/Layout";
import styles from "src/common/styles/Dashboard.module.css";
import Link from "next/link";

export default function Confirmation() {
  return (
    <>
      <Layout>
        <div className="container-fluid mx-auto w-100 my-5">
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
            <div className={styles.succesInformation}>
              <p className={styles.userName}>Details</p>
              <p className={styles.successTitles}>Amount</p>
              <p className={styles.successDescription}>Rp100.000</p>
              <p className={styles.successTitles}>Balance Left</p>
              <p className={styles.successDescription}>Rp20.000</p>
              <p className={styles.successTitles}>Date & time</p>
              <p className={styles.successDescription}>May 11, 2020 - 12.20</p>
              <p className={styles.successTitles}>Notes</p>
              <p className={styles.successDescription}>For buying some socks</p>
            </div>
          </div>
          <Link href="/reciver/success" passHref>
          <button className="btn btn-primary d-flex align-items-end justify-content-end">
            continue
          </button>
          </Link>
        </div>
      </Layout>
    </>
  );
}
