import { useState, useEffect } from "react";
import Link from "next/link";
import Layout from "src/common/components/Layout";
import styles from "src/common/styles/Dashboard.module.css";
import { getHistory } from "src/modules/getData/getHistory";
import TransactionHistory from "src/common/components/history/HistoryCard";
import { connect } from "react-redux";

function History(props) {
  const [history, setHistory] = useState([]);
  useEffect(() => {
    const query = "?page=1&limit=6&filter=WEEK";
    const token = props.token;
    getHistory(query, token)
      .then((res) => {
        setHistory(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Layout>
        <div className="col-10 col-sm-10 col-md-10 mx-auto my-5">
          <div className={styles.TransactionHistory}>
            <div className="d-flex justify-content-between">
              <p>
                <strong>Transaction History</strong>
              </p>
              <Link href="/" passHref>
                <button className="btn btn-light">--Search filter--</button>
              </Link>
            </div>
            <section>
              {Array.isArray(history) &&
                history.length > 0 &&
                history.map((lists, id) => (
                  <TransactionHistory
                    key={id}
                    name={lists.fullName}
                    amount={lists.amount}
                    type={lists.type}
                  />
                ))}
            </section>
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
  };
};

export default connect(mapStateToProps)(History);
