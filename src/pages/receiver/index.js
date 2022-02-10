import Layout from "src/common/components/Layout";
import UserCard from "src/common/components/card/ReceiverCard";
import styles from "src/common/styles/Dashboard.module.css";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
// import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { getUserList } from "src/modules/getData/getUserList";

function Receiver(props) {
  // const router = useRouter();
  const state = useSelector((state) => state);
  console.log(state);
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    const query = "?page=1&limit=4&search=&sort=firstName DESC";
    const token = props.token;
    getUserList(query, token)
      .then((res) => {
        setUserList(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Layout>
        <div className={styles.ReceiverWrapper}>
          <p><strong>Search Receiver</strong></p>
          <div className={styles.search}>
            <form>
              <div className="form-group">
                <div
                  className={`${styles["style-input"]} d-flex justify-content-center`}
                >
                  <i className="bi bi-search"></i>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Serach receiver here"
                  />
                </div>
              </div>
            </form>
              </div>
            <section className="w-100">
              {Array.isArray(userList) &&
                userList.length > 0 &&
                userList.map((userLists, id) => (
                  <UserCard
                    name={userLists.firstName}
                    lastname={userLists.lastName}
                    phone={userLists.noTelp}
                    key={id}
                  />
                ))}
            </section>
        </div>
      </Layout>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.userData.token,
    id: state.auth.userData.id,
  };
};

export default connect(mapStateToProps)(Receiver);
