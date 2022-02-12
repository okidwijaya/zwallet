import Image from "next/image";
import clientpic from "src/assets/image/clientst.png";
import styles from "src/common/styles/Dashboard.module.css";
// import Link from "next/link";

function ReceiverCard({ firstName, lastName, noTelp, id }) {
  //, id
  return (
    <div>
      {/* <p>{firstName}</p> */}
      {/* {Array.isArray(id) &&
        id.length >= 0 &&
        id.map((userId) => ( */}
      <div
        className="col-10 col-sm-10 col-md-10 col-lg-12 my-4 d-flex"
        key={id}
      >
        <div className="mx-2">
          <Image src={clientpic} alt="google" width={50} height={50} />
        </div>
        <div className="w-50 my-auto">
          <p className={styles.userName}>
            {firstName}
            {lastName}
          </p>
          <p className={styles["transaction-description"]}>
            {noTelp !== null ? noTelp : "-"}
          </p>
        </div>
      </div>
      {/* ))} */}
      <p>{id}</p>
    </div>
  );
}

export default ReceiverCard;
