import { useState, useEffect } from "react";
import styles from "src/common/styles/Dashboard.module.css";
import { getHistory } from "src/modules/getData/getHistory";
import { connect } from "react-redux";
import Image from "next/image";
import clientpic from "src/assets/image/clientst.png";

function HistoryDashboard(props) {
  const [history, setHistory] = useState([]);
  useEffect(() => {
    const query = "?page=1&limit=4&filter=WEEK";
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
      <section>
        {Array.isArray(history) &&
          history.length > 0 &&
          history.map((lists, id) => (
            <div key={id}>
              <div className="row">
                <div className="col-8 col-md-8 d-flex">
                  <div className="w-20 mx-2 ">
                    <Image
                      src={clientpic}
                      alt="google"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="w-50 text-left my-auto">
                    <p className={styles.userName}>{lists.fullName}</p>
                    <p className={styles["transaction-description"]}>
                      {lists.type}
                    </p>
                  </div>
                </div>

                <div className="col-4 col-md-4 my-auto text-center">
                  <p className={styles.income}>+Rp{lists.amount}</p>
                  {/* green color profit */}
                </div>
              </div>
            </div>
          ))}
      </section>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.userData.token,
    id: state.auth.userData.id,
  };
};

export default connect(mapStateToProps)(HistoryDashboard);
