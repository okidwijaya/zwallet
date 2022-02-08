import { ACTION_STRING } from "src/store/actions/actionString";
import { ActionType } from "redux-promise-middleware";

const initialState = {
  userData: {
    token: null,
    pin: null,
    id:null,
  },
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  err: {},
};
const authReducer = (prevState = initialState, action) =>{
// return {...prevState}
const { authLogin} = ACTION_STRING; //pending, fulfill, rejected
const {Pending, Fulfilled, Rejected} = ActionType;

switch (action.type) {
  // case authLogin + pending:
  case authLogin.concat("_", Pending):
    return {
      ...prevState,
      isPending: true,
      isFulfilled: false,
      isRejected: false,
    };

  // case authLogin + fulfilled:
  case authLogin.concat("_", Fulfilled):
    const data = action.payload.data;
    const userData = {
      ...prevState.userData,
      token: data.data.token,
      pin: data.data.pin,
      id: data.data.id,
      // user: data.result,
    };
    return {
      ...prevState,
      isPending: false,
      isFulfilled: true,
      userData,
    };

  // case authLogin + rejected:
  case authLogin.concat("_", Rejected):
    const err = action.payload;
    return {
      ...prevState,
      isPending: false,
      isRejected: true,
      err,
    };

    // case authPin:
    //   const newPin = action.payload;
    //   return {
    //     ...prevState,
    //     userData: {
    //       ...prevState.userData,
    //       pin: newPin,
    //     },
    //   };

  default:
    return prevState;
}   
}


export default authReducer;