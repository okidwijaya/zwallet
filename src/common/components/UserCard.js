import Image from "next/image";
import clientpic from "src/assets/image/clientst.png";
import styles from "src/common/styles/Dashboard.module.css";

export default function UserCard() {
  return (
    <>
      <div className="col-10 col-sm-10 col-md-10 col-lg-12 my-4 d-flex">
        <div className="mx-2">
          <Image src={clientpic} alt="google" width={50} height={50} />
        </div>
        <div className="w-50 my-auto">
          <p className={styles.userName}>Netflix</p>
          <p className={styles["transaction-description"]}>phone</p>
        </div>
      </div>
    </>
  );
}
