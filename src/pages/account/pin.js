import dynamic from "next/dynamic";
import Account from "src/common/components/account";
import styles from "src/common/styles/Account.module.css";

export default function Insertpin() {
  const ReactCodeInput = dynamic(import("react-code-input"));

  // const [pinCode, setpinCode] = useState("");

  // const handlePinChange = pinCode => {
  //   setpinCode(pinCode);
  // };
  return (
    <>
      <Account>
        <div className="container-fluid">
          <p className={styles["right-title"]}>
            Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN
            That You Created Yourself.
          </p>
          <p className={styles["right-description"]}>
            Create 6 digits pin to secure all your money and your data in
            Zwallet app. Keep it secret and don’t tell anyone about your Zwallet
            account password and the PIN.
          </p>
          <form className={styles.login}>
            <div className={`${styles["form-input-warpper"]} form-group my-5`}>
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
      </Account>
    </>
  );
}
