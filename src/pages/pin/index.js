import Image from "next/image";
// import Link from "next/link";
import dynamic from "next/dynamic";
import styles from "src/common/styles/Account.module.css";
import registerImg from "src/assets/image/register.png";
import bg from "src/assets/image/registerbg.png";
// import { useState } from "react";

export default function Inputpin() {
  const ReactCodeInput = dynamic(import("react-code-input"));

  // const [pinCode, setpinCode] = useState("");
  
  // const handlePinChange = pinCode => {
  //   setpinCode(pinCode);
  // };
  return (
    <>

        <div>
          <div className="container-fluid w-25 h-25 mx-auto my-5">
            <p className={styles["right-title"]}>6 Digits PIN
            </p>
            <p className={styles["right-description"]}>
              Create 6 digits pin to secure all your money and your data
            </p>
            <form className={styles.login}>
              <div
                className={`${styles["form-input-warpper"]} form-group my-5`}
              >
                <ReactCodeInput type="password" fields={6} />
                {/* value={pinCode}
                onChange={handlePinChange}
                <p>{pinCode}</p> */}
              </div>
              <button
                type="submit"
                className="btn btn-block btn-secondary w-100 mt-5"
              >
                Confirm
              </button>
            </form>
          </div>
        </div>
    </>
  );
}
