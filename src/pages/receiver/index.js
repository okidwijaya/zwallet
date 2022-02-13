import Layout from "src/common/components/Layout";
import UserCard from "src/common/components/card/ReceiverCard";
import styles from "src/common/styles/Dashboard.module.css";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { getUserList } from "src/modules/getData/getUserList";

function Receiver(props) {
  const [searchUser, setSearchUser] = useState({});
  const router = useRouter();
  const state = useSelector((state) => state);
  console.log("current state" + state);
  const [userLists, setUserList] = useState([]);

  const handleSearch = (event) => {
    const newSearch = {
      ...searchUser,
      search: event.target.value,
    };
    return setSearchUser(newSearch);
  };
  useEffect(() => {
    const query = "?page=1&limit=6&search=&sort=firstName DESC";
    const token = props.token;
    getUserList(query, token)
      .then((res) => {
        setUserList(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const onClickHandler = (id) => {
    router.push(`/receiver/${id[0]}`);
    console.log(id);
  };

  return (
    <>
      <Layout>
        <div className={styles.ReceiverWrapper}>
          <p>
            <strong>Search Receiver</strong>
          </p>
          <div className={styles.search}>
            <div
              className={`${styles["style-input"]} d-flex justify-content-center`}
            >
              <i className="bi bi-search"></i>
              <input
                className="form-control"
                placeholder="Serach receiver here"
              onChange={(event) => handleSearch(event)}
              />
            </div>
          </div>
          <section className="w-100">
            {Array.isArray(userLists) &&
              userLists.length > 0 &&
              userLists.map((user, idx) => (
                <UserCard
                  name={user.firstName}
                  lastname={user.lastName}
                  phone={user.noTelp}
                  id={user.id}
                  key={idx}
                  onClickHandler={() => onClickHandler}
                />
              ))}
          </section>
          <h5>{userLists.length == 0 ? "Not Found" : ""}</h5>
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
