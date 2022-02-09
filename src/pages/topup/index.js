import Layout from "src/common/components/Layout";
import styles from "src/common/styles/Account.module.css";
import Link from "next/Link";

export default function Topup() {
  return (
    <>
      <Layout>
        <p><strong>TopUp</strong></p>
        <p>Enter the amount of money, and click submit</p>
        <form className={styles.login}>
          <div className={`${styles["form-input-warpper"]} form-group w-25 mx-auto mt-5 p-5`}>
            <div
              className={`${styles["style-input"]} d-flex justify-content-center`}
            >
              <input
                type="number"
                name="money"
                className="form-control"
                placeholder=""
                required
              />
            </div>
          <Link href="/dashboard" passHref>
          <button
              type="submit"
              className="btn btn-block btn-secondary w-100"
              >
              Submit
            </button>
          </Link>
              </div>
        </form>
      </Layout>
    </>
  );
}
