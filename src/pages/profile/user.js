import styles from "src/common/styles/User.module.css";
import Layout from "src/common/components/Layout.js";
import Link from "next/link";
import { connect } from "react-redux";


function userinfo(props) {
  return (
    <>
      <Layout>
        <div className="container-fluid w-100">
      <div className={styles.userInfoCard}>
          <div className={styles.succesInformation}>
            <p className={styles.t}>Personal Information</p>
            <p className={styles.description}>
              We got your personal information from the sign up proccess.<br/> If you
              want to make changes on your information, contact our support.000
            </p>

            <p className={styles.title}>First Name</p>
            <p className={styles.description}>{props.user.firstName}</p>

            <p className={styles.title}>Last Name</p>
            <p className={styles.description}>{props.user.lastName}</p>

            <p className={styles.title}>Verified E-mail</p>
            <p className={styles.description}>{props.user.email}</p>

            <p className={styles.title}>Phone Number</p>
            <p className={styles.description}>{props.user.noTelp !== null ? props.user.noTelp : "-"}</p>
          </div>
          <Link href="/phone/add" passHref>
            <button className="btn btn-primary">Manage</button>
          </Link>
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

export default connect(mapStateToProps)(userinfo)
