import { ACTION_STRING } from "src/store/actions/actionString";
import { loginAuth } from "src/utils/https/auth";

export const loginAction = (body) => {
  return {
    type: ACTION_STRING.authLogin,
    payload: loginAuth(body),
  };
};


