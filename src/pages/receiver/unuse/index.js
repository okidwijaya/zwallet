import Layout from "src/common/components/Layout";
import React, { useState, useEffect } from "react";
import ReactCodeInput from "react-code-input";
import styles from "src/common/styles/Account.module.css";
import { pinChecker } from "src/modules/api/checkpin";
import { connect } from "react-redux";

function PinCode(props) {
  // const [isPinCodeValid, setIsPinCodeValid] = useState(true);
  const [pinCode, setPinCode] = useState("");
  // const [btnIsPressed, setBtnIsPressed] = useState(false);

  // const CORRECT_PIN_CODE = "111222";
  

  // const isPinCodeValid = pinCode === CORRECT_PIN_CODE;
  const cekpin = (event) => {
    event.preventDefault();
    const pin = event.target.pin.value;
    const token = props.token;
    pinChecker(pin, token)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
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
        <div className={styles.ReceiverCard}>
          <div className="container-fluid w-50 h-25 mx-auto my-5">
            <p className={styles["right-title"]}>6 Digits PIN</p>
            <p className={styles["right-description"]}>
              Create 6 digits pin to secure all your money and your data
            </p>
            <form className={styles.login} onSubmit={cekpin}>
              <div
                className={`${styles["form-input-warpper"]} form-group my-5`}
              >
                 <input type="number"
                  name="pin" className="form-control"
                />
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
                    className="btn btn-block btn-secondary w-100 mt-5"
                  >
                    Check pin
                  </button>
                </div>
              </div>
            </form>
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
  };
};

export default connect(mapStateToProps)(PinCode);
