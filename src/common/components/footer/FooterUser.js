import styles from "src/common/styles/Footer.module.css"

export default function FooterUser() {
  return (
    <footer className={styles.userFooter}>
        <div className="row">
          <div className="col-12 col-sm-8 col-md-5">
            <p>2020 Zwallet. All right reserved.</p>
          </div>
          <div className="col-10 col-sm-5 col-md-4">
            <p className={styles.right}>+62 5637 8882 9901</p>
          </div>
          <div className="col-10 col-sm-5 col-md-3">
            <p className={styles.right}>contact@zwallet.com</p>
          </div>
        </div>
    </footer>
  );
}
