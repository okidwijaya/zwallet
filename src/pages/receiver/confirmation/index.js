import Image from "next/image";
import clientpic from "src/assets/image/clientst.png";
import Layout from "src/common/components/Layout";
import styles from "src/common/styles/Dashboard.module.css";
import { transfer } from "src/modules/api/transaction";
import { connect } from "react-redux";
import { useRouter } from "next/router";

function Confirmation({ firstName, lastName, noTelp, id },props) {
  // router = useRouter();
  // ReceiverId = router.query.ReceiverId;
  // console.log(router);

  const pin = props.pin;
  console.log("userpin :" + pin);

  const transferBallance = (event) => {
    event.preventDefault();
    const body = {
      receiverId: event.target.receiverId.value,
      amount: event.target.amount.value,
      notes: event.target.notes.value,
    };
    const token = props.token;
    transfer(body, token)
      .then((response) => {
        console.log("response", response);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  return (
    <>
      <Layout>
        {/* <p>user id is : {ReceiverId}</p> */}
        <div className="container-fluid mx-auto w-100 my-5">
          <p className={styles.userName}>Transfer to</p>

          {/* card test start */}
          
          <div
            className="col-10 col-sm-10 col-md-10 col-lg-12 my-4 d-flex"
            key={id}
          >
            <div className="mx-2">
              <Image src={clientpic} alt="google" width={50} height={50} />
            </div>
            <div className="w-50 my-auto">
              <p className={styles.userName}>
                {firstName}
                {lastName}
              </p>
              <p className={styles["transaction-description"]}>
                {noTelp !== null ? noTelp : "-"}kmk
              </p>
            </div>
          </div>

          {/* end of test card */}

          <div className="col-8 col-md-8 d-flex">
            <div className="mx-2 ">
              <Image src={clientpic} alt="google" width={50} height={50} />
            </div>
            <div className="w-50 text-left my-auto">
              <p className={styles.userName}>Netflix</p>
              <p className={styles["transaction-description"]}>Transfer</p>
            </div>
          </div>
          <form onSubmit={transferBallance}>
            <div className="form-group">
              <label>test for transfer</label>
              <input
                name="receiverId"
                type="text"
                className="form-control"
                placeholder="test id"
              />
            </div>

            <div className={styles.succesInformation}>
              <p className={styles.userName}>Details</p>
              <div className="form-group">
                <label className={styles.successTitles}>Amount</label>
                <input
                  name="amount"
                  type="number"
                  className={`${styles.successDescription} form-control`}
                  placeholder="amount ex. Rp.100.000"
                />
                {/* Rp100.000</input> */}
              </div>
              <p className={styles.successTitles}>Balance Left</p>
              <p className={styles.successDescription}>Rp20.000</p>
              <p className={styles.successTitles}>Date & time</p>
              <p className={styles.successDescription}>May 11, 2020 - 12.20</p>
              <div className="form-group">
                <label className={styles.successTitles}>Notes</label>
                <input
                  name="notes"
                  type="text"
                  placeholder="notes here"
                  className={`${styles.successDescription} form-control`}
                />
                {/* For buying some socks</inpui> */}
              </div>
            </div>

            {/* <Link href="/receiver/success" passHref> */}
            <button
              type="submit"
              className="btn btn-primary d-flex align-items-end justify-content-end"
            >
              continue
            </button>
          </form>
        </div>
      </Layout>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.userData.token,
    id: state.auth.userData.id,
    pin: state.auth.userData.pin,
  };
};

export default connect(mapStateToProps)(Confirmation);
