import { ACTION_STRING } from "src/store/actions/actionString";

export const profileUser = (data) => {
  return {
    type: ACTION_STRING.userLogin,
    payload: { data },
  };
};
