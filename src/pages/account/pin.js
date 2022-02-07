import Image from "next/image";
// import Link from "next/link";
import dynamic from "next/dynamic";
import styles from "src/common/styles/Account.module.css";
import registerImg from "src/assets/image/register.png";
import bg from "src/assets/image/registerbg.png";
// import { useState } from "react";

export default function Insertpin() {
  const ReactCodeInput = dynamic(import("react-code-input"));

  // const [pinCode, setpinCode] = useState("");
  
  // const handlePinChange = pinCode => {
  //   setpinCode(pinCode);
  // };
  return (
    <>
      <div className="row mx-auto align-item-center justify-content-center">
        <Image
          src={bg}
          className={styles.imageBackground}
          alt="bg img"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <div className="col-8 col-sm-6 col-md-6 col-lg-4 mx-auto">
          <p className={styles.title}>Zwallet</p>
          {/* <div className="container"> */}
          <Image
            src={registerImg}
            className={styles.imageStarter}
            alt="register"
            width={400}
            height={450}
            // layout="fill"
            // objectFit="scale-down"
            // objectPosition="static"
          />
          {/* </div> */}
          <p className={styles["left-title"]}>
            App that Covering Banking Needs.
          </p>
          <p className={styles["left-description"]}>
            Zwallet is an application that focussing in banking needs for all
            users in the world. Always updated and always following world
            trends. 5000+ users registered in Zwallet everyday with worldwide
            users coverage.
          </p>
        </div>

        <div
          className={`${styles.formContainer} col-12 col-sm-6 col-md-6 col-lg-6`}
        >
          <div className="container-fluid">
            <p className={styles["right-title"]}>
              Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN
              That You Created Yourself.
            </p>
            <p className={styles["right-description"]}>
              Create 6 digits pin to secure all your money and your data in
              Zwallet app. Keep it secret and don’t tell anyone about your
              Zwallet account password and the PIN.
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
      </div>
    </>
  );
}
