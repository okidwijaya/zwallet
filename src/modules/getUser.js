import axios from "axios";

const url = process.env.NEXT_PUBLIC_HOST + '/user';

export const getUserList = (params) => {
  return axios.get(url.concat(params), {
    headers: {
      // Authorization: `Bearer ${token}`,
    },
  });
};