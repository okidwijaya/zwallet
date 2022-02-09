import Layout from "src/common/components/Layout";
import UserCard from "src/common/components/UserCard";
import styles from "src/common/styles/Dashboard.module.css";
import { useEffect, useState } from "react";
import {connect} from 'react-redux';
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { getUserList } from "src/modules/getUser";

function Reciver(props) {
  const router = useRouter();
  const state = useSelector((state) => state);
  console.log(state);
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    const query = `?page=1&limit=4&sort=firstName DESC`;
    getUserList(query)
      .then((res) => setUserList(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  const onClickHandler = (id) => {
    router.push(`/pokemon/${id[0]}`);
  };
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
            <section className="container-fluid w-50">
              {Array.isArray(userList) &&
                userList.length > 0 &&
                userList.map((userLists, idx) => (
                  <UserCard
                    name={userLists.firstName}
                    phone={userLists.noTelp}
                    key={idx}
                  />
                ))}
              <UserCard />
              <UserCard />
            </section>
          </div>
        </div>
      </Layout>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    // token: state.userData.token,
  };
};

export default connect(mapStateToProps)(Reciver);
