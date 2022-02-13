import { ACTION_STRING } from "src/store/actions/actionString";
// import { ActionType } from "redux-promise-middleware";

const initialState = {
  userLogin: null,
};

const profileUser = (prevState = initialState, action) => {
  switch (action.type) {
    case ACTION_STRING.userLogin:
      const data = action.payload;
      console.log("data user", data);
      return {
        ...data,
      };
    default:
      return prevState;
  }
};

export default profileUser;