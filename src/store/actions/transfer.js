import { ACTION_STRING } from "src/store/actions/actionString";

export const transferUser = (data) => {
    return {
      type: ACTION_STRING.dataTransfer,
      payload: {data},
    };
  };