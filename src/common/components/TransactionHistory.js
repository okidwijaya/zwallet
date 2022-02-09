import Image from "next/image";
import clientpic from "src/assets/image/clientst.png";
import styles from "src/common/styles/Dashboard.module.css";
import Link from "next/link";

export default function TransactionHistory() {
  return (
    <>
        <div className="row">
          <div className="col-8 col-md-8 d-flex">
            <div className="w-20 mx-2 ">
              <Image src={clientpic} alt="google" width={50} height={50} />
            </div>
            <div className="w-50 text-left my-auto">
              <p className={styles.userName}>Netflix</p>
              <p className={styles["transaction-description"]}>Transfer</p>
            </div>
          </div>

          <div className="col-3 col-md-3 my-auto text-center">
            <p className={styles.income}>+Rp50.000</p>
            {/* green color profit */}
          </div>
        </div>

        <div className="row">
          <div className="col-8 col-md-8 d-flex">
            <div className="w-20 mx-2 ">
              <Image src={clientpic} alt="google" width={50} height={50} />
            </div>
            <div className="w-50 text-left my-auto">
              <p className={styles.userName}>Netflix</p>
              <p className={styles["transaction-description"]}>Transfer</p>
            </div>
          </div>

          <div className="col-3 col-md-3 my-auto text-center">
            <p className={styles.spending}>-Rp149.000</p>
            {/* gred color loss */}
          </div>
        </div>

        <div className="row">
          <div className="col-8 col-md-8 d-flex">
            <div className="w-20 mx-2 ">
              <Image src={clientpic} alt="google" width={50} height={50} />
            </div>
            <div className="w-50 text-left my-auto">
              <p className={styles.userName}>Netflix</p>
              <p className={styles["transaction-description"]}>Transfer</p>
            </div>
          </div>

          <div className="col-3 col-md-3 my-auto text-center">
            <p className={styles.spending}>-Rp149.000</p>
            {/* gred color loss */}
          </div>
        </div>

        <div className="row">
          <div className="col-8 col-md-8 d-flex">
            <Link href="/reciver/confirmation" passHref>
            <div className="w-20 mx-2 ">
              <Image src={clientpic} alt="google" width={50} height={50} />
            </div>
            </Link>
            <div className="w-50 text-left my-auto">
              <p className={styles.userName}>Netflix</p>
              <p className={styles["transaction-description"]}>Transfer</p>
            </div>
          </div>

          <div className="col-3 col-md-3 my-auto text-center">
            <p className={styles.spending}>-Rp149.000</p>
            {/* gred color loss */}
          </div>
        </div>
  
    </>
  );
}
