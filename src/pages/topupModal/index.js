import { connect } from "react-redux";
import styles from "src/common/styles/Topup.module.css";
import { topUp } from "src/modules/api/transaction";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";

function TopupModal(props) {
  const router = useRouter();
  if (!props.show) {
    return null;
  }

  const topupUser = (event) => {
    event.preventDefault();
    const body = {
      amount: event.target.amount.value,
    };
    const token = props.token;
    console.log(props.token);
    topUp(body, token)
      .then((response) => {
        console.log("response", response);
        console.log(response.data);
        console.log(response.data.data.redirectUrl);

        setTimeout(() => {
          window.open(response.data.data.redirectUrl, "_blank");
        }, 2000);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const onClickHandler = () => {
    // router.push("/dashboard");
    router.reload();
  };

  const forceRefresh = () => {
    router.reload(window.location.dashboard);
    // router.reload();
  };
  const notify = () => {
    toast.info("topup success", {
      position: "top",
    });
  };

  // const closeOnEscapeKeyDown = (e) => {
  //   if ((e.charCode || e.keyCode) === 27) {
  //     props.onClose();
  //   }
  // };

  //   useEffect(() => {
  //     document.body.addEventListener("keydown", closeOnEscapeKeyDown);
  //     return function cleanup() {
  //       document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
  //     };
  //   }, []);

  return (
    <>
      <ToastContainer />
      <div className={styles.topupModal} onClick={onClickHandler}>
        {/* <div className={styles.containerToast}> */}
        {/* </div> */}

        <div onClick={(e) => e.stopPropagation()}>
          <div className={styles.topup}>
            <div className="d-flex justify-content-between mx-0 mt-4">
              <div className="col-7">
                {" "}
                <p>
                  <strong>TopUp</strong>
                </p>
                <p>Enter the amount of money, and click submit</p>
              </div>

              <div className="col-2">
                <a className="btn btn-light" onClick={forceRefresh}>
                  <i className="bi bi-x-lg"></i>
                </a>
              </div>
            </div>

            <form onSubmit={topupUser}>
              <div className="form-group d-flex justify-content-center">
                <input
                  type="number"
                  name="amount"
                  className="form-control"
                  placeholder=""
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-block btn-secondary"
                onClick={notify}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    token: state.auth.userData.token,
    id: state.auth.userData.id,
  };
};

export default connect(mapStateToProps)(TopupModal);
