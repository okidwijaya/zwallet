import dynamic from "next/dynamic";
import styles from "src/common/styles/Account.module.css";
import Layout from "src/common/components/Layout.js";
// import Link from "next/link";
import { useState } from "react";

export default function Inputpin() {
  const ReactCodeInput = dynamic(import("react-code-input"));

  const [pinCode, setpinCode] = useState("");

  const handlePinChange = (pinCode) => {
    setpinCode(pinCode);
    console.log(pinCode);
  };
  // const onClickHandler = (pinCode) => {
  //   // router.push(`/receiver/${id[0]}`);
  //   console.log(pinCode);
  // };
  return (
    <>
      <Layout>
      <div className={styles.ReceiverCard}>
        <div className="container-fluid w-50 h-25 mx-auto my-5">
          <p className={styles["right-title"]}>6 Digits PIN</p>
          <p className={styles["right-description"]}>
            Create 6 digits pin to secure all your money and your data
          </p>
          <form className={styles.login}>
            <div className={`${styles["form-input-warpper"]} form-group my-5`}>
              <ReactCodeInput type="password" fields={6}
              value={pinCode}
              onChange={handlePinChange} />
              <p>{pinCode}</p>
            </div>
            {/* <Link href="/" passHref> */}

            <button
              // type="submit"
              onClick={() => onClickHandler()}
              className="btn btn-block btn-secondary w-100 mt-5"
            >
              Confirm
            </button>
            {/* </Link> */}
          </form>
        </div>
        </div>
      </Layout>
    </>
  );
}
