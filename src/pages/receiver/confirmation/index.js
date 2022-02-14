import Image from "next/image";
import clientpic from "src/assets/image/clientst.png";
import Layout from "src/common/components/Layout";
import styles from "src/common/styles/Dashboard.module.css";
import { transfer } from "src/modules/api/transaction";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";

function Confirmation(props) {
  //{ firstName, lastName, noTelp, id },
  // router = useRouter();
  // ReceiverId = router.query.ReceiverId;
  // const iduser = props.transfer;
  // console.log(iduser);
  // const idx = props.transfer.id;
  // console.log(idx);
  // const a = props.transfer.amount;
  // console.log(a);
  // const n = props.transfer.notes;
  // console.log(n);
  const router = useRouter();

  const pin = props.pin;
  console.log("userpin :" + pin);

  // const transferBallance = (event) => {
  //   event.preventDefault();
  //   const body = {
  //     receiverId: props.transfer.id,
  //     amount: props.transfer.amount,
  //     notes: props.transfer.notes,
  //   };
  //   const token = props.token;
  //   transfer(body, token)
  //     .then((response) => {
  //       console.log("response", response);
  //       console.log(response.data);
  //       setTimeout(() => {
  //         // router.push("/receiver/success");
  //         router.reload(window.location.success);
  //       }, 2000);
  //     })
  //     .catch((error) => {
  //       console.log(error.response);
  //     });
  // };
  return (
    <>
      <Layout>
        {/* <p>user id is : {ReceiverId}</p> */}
        <div className={styles.ReceiverCard}>
          <div className="container-fluid mx-auto w-100 my-5">
            <p className={styles.userName}>Transfer to</p>

            <div className="col-8 col-md-8 d-flex">
              <div className="mx-2 ">
                <Image src={clientpic} alt="google" width={50} height={50} />
              </div>
              <div className="w-50 text-left my-auto">
                <p className={styles.userName}>
                  {" "}
                  {props.transfer.firstName}
                  {props.transfer.lastName}
                </p>
                <p className={styles["transaction-description"]}> {props.transfer.noTelp !== null ? props.transfer.noTelp : "-"}</p>
              </div>
            </div>
            {/* <form onSubmit={transferBallance}> */}
              {/* <p>{props.transfer.id}</p> */}
              {/* <div className="form-group">
                <input
                value={props.transfer.id} 
                  name="receiverId"
                />
              </div> */}
              <div
                className={styles.succesInformation}
                // name="receiverId"
                // key={props.transfer.id}
                // value={props.transfer.id}
              >
                <p className={styles.userName}>Details</p>
                <div className="form-group">
                  <label className={styles.successTitles}>Amount</label>
                  <p name="amount" className={styles.successDescription}>
                    Rp{props.transfer.amount}
                  </p>
                  {/* <input
                value={props.transfer.amount} 
                  name="amount"
                  type="number"
                  className={`${styles.successDescription} form-control`}
                  placeholder="amount ex. Rp.100.000"
                /> */}
                </div>
                <label className={styles.successTitles}>Balance Left</label>
                <p className={styles.successDescription}>
                  Rp{props.user.balance}
                </p>
                <label className={styles.successTitles}>Date & time</label>
                <p className={styles.successDescription}>
                  May 11, 2020 - 12.20
                </p>
                <div className="form-group">
                  <label className={styles.successTitles}>Notes</label>
                  <p name="notes" className={styles.successDescription}>
                    {props.transfer.notes}
                  </p>
                  {/* <input
                 value={props.transfer.notes}
                  name="notes"
                  type="text"
                  placeholder="notes here"
                  className={`${styles.successDescription} form-control`}
                /> */}
                </div>
              </div>

              <Link href="/receiver/checkpin" passHref>
              <button
                type="submit"
                className="btn btn-primary mx-0 my-0 d-flex align-items-end justify-content-end"
              >
                continue
              </button>
              </Link>
            {/* </form> */}
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
    pin: state.auth.userData.pin,
    transfer: state.transfer.data,
    user: state.user.data,
  };
};

export default connect(mapStateToProps)(Confirmation);
