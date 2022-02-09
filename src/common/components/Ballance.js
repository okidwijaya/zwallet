import styles from "src/common/styles/Dashboard.module.css";

export default function Ballance() {
  return (
    <>
      <section className={styles.ballanceInfo}>
        <div className="row w-100">
          <div className="col-11 col-sm-6 mx-auto">
            <p>Ballance</p>
            <h1>Rp.150.000</h1>
            <p>+62 232-1234-1212</p>
          </div>
          <div className="col-11 col-sm-4 my-auto float-right">
            <button className="btn btn-block">
              <span>
                <i className="bi bi-arrow-up"></i>
              </span>
              Transfer
            </button>
            <button className="btn btn-block">
              <span>
                <i className="bi bi-plus-lg"></i>
              </span>
              Top up
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
