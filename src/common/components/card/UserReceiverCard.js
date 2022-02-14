import Image from "next/image";
import clientpic from "src/assets/image/clientst.png";
import styles from "src/common/styles/Dashboard.module.css";
// import Link from "next/link";
import { transferUser } from "src/store/actions/transfer";
import { connect } from "react-redux";
import { useRouter } from "next/router";

function ReceiverCard(props) {
  // const balance = props.balance;
  // console.log(balance);
  // const balance = props.balance;
 const router = useRouter();
  const transferSubmit = (event) => {
    event.preventDefault();
    const data = {
      amount: event.target.amount.value,
      notes: event.target.notes.value,
      firstName:props.firstName,
      lastName:props.lastName,
      noTelp:props.noTelp,
      id: props.id,
    };
    console.log(data);
    props.dispatch(transferUser(data));
    router.push("/receiver/confirmation");
  };

  return (
    <div className={styles.ReceiverCard}>
      <form onSubmit={transferSubmit}>
        {/* <p>{firstName}</p> */}
        {/* {Array.isArray(id) &&
        id.length >= 0 &&
        id.map((userId) => ( */}
        <div
          className="col-10 col-sm-10 col-md-10 col-lg-12 my-4 d-flex"
          key={props.id}
        >
          <div className="mx-2">
            <Image src={clientpic} alt="google" width={50} height={50} />
          </div>
          <div className="w-50 my-auto">
            <p className={styles.userName}>
              {props.firstName}
              {props.lastName}
            </p>
            <p className={styles["transaction-description"]}>
              {props.noTelp !== null ? props.noTelp : "-"}
            </p>
          </div>
        </div>
        {/* ))} */}
        {/* <p>{id}</p> */}
        <div>
          <p className={styles.successTitles}>
            Type the amount you want to transfer and then <br />
            press continue to the next steps.
          </p>
          <div className="form-group d-flex justify-content-center">
            <input
              type="number"
              name="amount"
              className={`${styles.amountTranasfer} form-control`}
              placeholder="0.00"
              required
            />
          </div>
          <p className={styles.amountBallanceDescription}>Rp{props.user.balance}</p>
          <div className="form-group">
            <input
              name="notes"
              type="text"
              placeholder="add some notes here"
              className={`${styles.notesTransfer} form-control`}
            />
          </div>
          {/* <Link href="confirmation" passHref> */}
          <button type="submit" className="btn btn-primary">
            continue
          </button>
          {/* </Link> */}
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user : state.user.data,
  };
};

export default connect(mapStateToProps)(ReceiverCard);
