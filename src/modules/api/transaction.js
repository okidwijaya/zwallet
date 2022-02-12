import axios from 'axios';
const baseurl = process.env.NEXT_PUBLIC_API_URL + '/transaction';

export const topUp = (body, token) => {
    const url = baseurl + '/top-up';
    return axios.post(url, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  export const transfer = (body, token) => {
    const url = baseurl + '/transfer';
    return axios.post(url, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  