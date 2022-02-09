import Image from "next/image";
import clientpic from "src/assets/image/clientst.png";
import styles from "src/common/styles/User.module.css";
import Layout from "src/common/components/Layout.js";
import Link from "next/link";

export default function Profile() {
  return (
    <>
      <Layout>
        <div className="d-flex justify-content-center align-items-center mt-5">
          <div className="col-6 col-md-6 mx-auto text-center">
            <div className="mx-2">
              <Image src={clientpic} alt="google" width={50} height={50} />
              <div>
                <i className="bi bi-pencil"></i> edit
              </div>
              <div className="w-50 my-auto mx-auto">
                <p className={styles.userName}>Netflix</p>
                <p className={styles.phoneNumber}>+9883 939 32939</p>
              </div>
            </div>
            <div className="text-align-left">
              <Link href="/profile/user" passHref>
                <button className="btn btn-secondary btn-block w-100 my-2">
                  Personal Information <i className="bi bi-chevron-right"></i>
                </button>
              </Link>

              <Link href="/profile/password" passHref>
                <button className="btn btn-secondary btn-block w-100 my-2">
                  Change Password <i className="bi bi-chevron-right"></i>
                </button>
              </Link>

              <Link href="/pin" passHref>
                <button className="btn btn-secondary btn-block w-100 my-2">
                  Change Pin <i className="bi bi-chevron-right"></i>
                </button>
              </Link>

              <Link href="/" passHref>
                <button className="btn btn-secondary btn-block w-100 my-2">
                  Logout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
