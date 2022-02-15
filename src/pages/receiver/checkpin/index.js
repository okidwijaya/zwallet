import Layout from "src/common/components/Layout";
import React, { useState } from "react";
// import ReactCodeInput from "react-code-input";
import styles from "src/common/styles/Account.module.css";
import { pinChecker } from "src/modules/api/checkpin";
import { transfer } from "src/modules/api/transaction";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PinCode(props) {
  // const [isPinCodeValid, setIsPinCodeValid] = useState(true);
  // const [btnIsPressed, setBtnIsPressed] = useState(false);

  // const CORRECT_PIN_CODE = "111222";

  // const isPinCodeValid = pinCode === CORRECT_PIN_CODE;
  const [pinCode, setPinCode] = useState("");
  const router = useRouter();
  const cekpin = (event) => {
    event.preventDefault();
    const pin = event.target.pin.value;
    const token = props.token;
    pinChecker(pin, token)
      .then((res) => {
        console.log(res);
        const body = {
          receiverId: props.transfer.id,
          amount: props.transfer.amount,
          notes: props.transfer.notes,
        };
        // const token = props.token;
        transfer(body, token)
          .then((response) => {
            console.log("response", response);
            console.log(response.data);
            setTimeout(() => {
              // router.push("/receiver/success");
              router.push("/receiver/success");
            }, 2000);
          })
          .catch((error) => {
            console.log(error.response);
          });
      })
      .catch((err) => console.log(err));
  };

  const notify = () => {
    toast.info(" success", {
      position: "top",
    });
  };

  // const checkPinCode = () => {
  //   // setBtnIsPressed(true);
  //   setPinCode("");
  //   console.log(pinCode);
  //   const token = props.token;
  //   console.log(token);
  //   // const pinCode = 121212;
  //   pinChecker(pinCode, token)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => console.log(err));
  // };

  // const handlePinChange = (pinCode) => {
  //   setPinCode(pinCode);
  //   setBtnIsPressed(false);
  // };

  return (
    <>
      <Layout>
        <div className={styles.ReceiverCardPin}>
          <div className={styles.ReceiverCard}>
            <div className="container-fluid w-100 h-25 mx-auto mt-3">
              <p className={styles["right-title"]}>6 Digits PIN</p>
              <p className={styles["right-description"]}>
                Create 6 digits pin to secure all your money and your data
              </p>
              <form className={styles.login} onSubmit={cekpin}>
                <div className={`${styles["form-input-warppe10"]} form-group`}>
                  <input type="number" name="pin" className="form-control" />
                  {/* <ReactCodeInput
                  id="pinCode"
                  type="password"
                  // isValid={isPinCodeValid}
                  fields={6}
                  // onChange={handlePinChange}
                  value={pinCode}
                />
                <p>PinCode from state: {pinCode}</p> */}
                  {/* <p>Correct pin code: {CORRECT_PIN_CODE}</p> */}
                  {/* <p>{isPinCodeValid && btnIsPressed && "Valid"}</p> */}
                  {/* <p>{!isPinCodeValid && btnIsPressed && "Not valid"}</p> */}
                  <div>
                    <button
                      type="submit"
                      // onClick={checkPinCode}
                      className="btn btn-block btn-secondary w-100 mt-2"
                      onClick={notify}
                    >
                      Check pin
                    </button>
                    <ToastContainer />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

// export default PinCode;
const mapStateToProps = (state) => {
  return {
    token: state.auth.userData.token,
    id: state.auth.userData.id,
    pin: state.auth.userData.pin,
    transfer: state.transfer.data,
    user: state.user.data,
  };
};

export default connect(mapStateToProps)(PinCode);
