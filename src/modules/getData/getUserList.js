import axios from "axios";

const url = process.env.NEXT_PUBLIC_API_URL + '/user';

export const getUserList = (query, token) => {
  return axios.get(url.concat(query), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// /profile

export const getUserId = (ReceiverId, token) => {
  return axios.get(url.concat("/profile/", ReceiverId), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
