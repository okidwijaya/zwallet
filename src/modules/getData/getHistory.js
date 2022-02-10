import axios from "axios";

const url = process.env.NEXT_PUBLIC_API_URL + '/transaction/history';

export const getHistory = (query, token) => {
  return axios.get(url.concat(query), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
