import Layout from "src/common/components/Layout";
import dynamic from "next/dynamic";
import styles from "src/common/styles/Account.module.css";

export default function Topup() {
  const ReactCodeInput = dynamic(import("react-code-input"));

  return (
    <>
      <Layout>
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
      </Layout>
    </>
  );
}
