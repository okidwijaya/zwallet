import Image from "next/image";
import clientpic from "src/assets/image/clientst.png";
import Layout from "src/common/components/Layout";
import styles from "src/common/styles/Dashboard.module.css";

export default function Reciver() {
  return (
    <>
      <Layout>
        <div>
          <p>Search Reciver</p>
          <div>
            <form className={styles.search}>
              <div className={`${styles["form-input-warpper"]} form-group`}>
                <div
                  className={`${styles["style-input"]} d-flex justify-content-center`}
                >
                  <i className="bi bi-search"></i>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Serach reciver here"
                  />
                </div>
              </div>
            </form>
            <div className="col-8 col-md-8 d-flex">
              <div className="mx-2 ">
                <Image src={clientpic} alt="google" width={50} height={50} />
              </div>
              <div className="w-50 text-left my-auto">
                <p className={styles.userName}>Netflix</p>
                <p className={styles["transaction-description"]}>Transfer</p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
