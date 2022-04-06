import Image from "next/image";
import clientpic from "src/assets/image/clientst.png";
import styles from "src/common/styles/User.module.css";
import Layout from "src/common/components/Layout.js";
import Link from "next/link";
import { connect } from "react-redux";

function Profile(props) {
  console.log(props);
  return (
    <>
      <Layout>
        <div className={styles.ReceiverCard}>
          <div className="d-flex justify-content-center align-items-center mt-4">
            <div className="col-6 col-md-6 mx-auto text-center">
              <div className="mx-2">
                <Image src={clientpic} alt="google" width={50} height={50} />
                <div>
                  <i className="bi bi-pencil"></i> edit
                </div>
                <div className="w-50 my-auto mx-auto">
                  <p className={styles.userName}>
                    {" "}
                    {props.id !== null
                      ? `${props.firstName}${props.lastName}`
                      : "-"}
                  </p>
                  <p className={styles.phoneNumber}>
                    {props.id !== null ? props.noTelp : "-"}
                  </p>
                </div>
              </div>
              <div className={styles.userMenuBtn}>
                <Link href="/profile/user" passHref>
                  <button className="btn btn-outline-dark btn-block w-100">
                    Personal Information <i className="bi bi-chevron-right"></i>
                  </button>
                </Link>

                <Link href="/profile/password" passHref>
                  <button className="btn btn-outline-dark btn-block w-100">
                    Change Password <i className="bi bi-chevron-right"></i>
                  </button>
                </Link>

                <Link href="/profile/changepin" passHref>
                  <button className="btn btn-outline-dark btn-block w-100">
                    Change Pin <i className="bi bi-chevron-right"></i>
                  </button>
                </Link>

                <Link href="/" passHref>
                  <button className="btn btn-outline-dark btn-block w-100">
                    Logout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.userData.token,
    id: state.auth.userData.id,
    user: state.user.data,
  };
};

export default connect(mapStateToProps)(Profile);
