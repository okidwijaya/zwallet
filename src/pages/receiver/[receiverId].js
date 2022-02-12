import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import clientpic from "src/assets/image/clientst.png";
import Layout from "src/common/components/Layout";
import styles from "src/common/styles/Dashboard.module.css";
import { getUserId } from "src/modules/getData/getUserList";
import ReceiverCard from "src/common/components/card/UserReceiverCard";
import Link from "next/link";

function ReceiverDetail(props) {
  const router = useRouter();
  const [user, setUser] = useState({});
  const receiverId = router.query.receiverId;
  useEffect(() => {
    console.log(router);
    const token = props.token;
    if (Object.keys(router.query).includes("receiverId")) {
      getUserId(receiverId, token)
        .then((res) => {
          setUser(
            // {
            //   firstName: res.data.firstName,
            //   lastName: res.data.lastName,
            //   noTelp: res.data.noTelp,
            //   id: res.data.id,
            // }
            {...res.data.data}
            );
            console.log(res.data.data)
          // {...}
        })
        .catch((err) => console.log(err));
    }
  }, [router.query]);

  return (
    <Layout>
      <p><small>user url id : {receiverId}</small></p>
      <div className="container-fluid mx-auto w-100 my-5">
        <p className={styles.userName}>Transfer Money</p>
        <section className="w-100">
        {Object.keys(user).length >= 3 && (
        <ReceiverCard
          firstName={user.firstName}
          lastName={user.lastName}
          noTelp={user.noTelp}
          id={user.id}
        />
      )}
          </section>
      </div>
      <Link href="confirmation" passHref>
      <button className="btn btn-light">continue</button>
      </Link>
    </Layout>
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.userData.token,
    id: state.auth.userData.id,
  };
};

export default connect(mapStateToProps)(ReceiverDetail);
