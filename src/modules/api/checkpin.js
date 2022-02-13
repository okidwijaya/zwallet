import axios from 'axios';
const baseurl = process.env.NEXT_PUBLIC_API_URL + '/user';

export const pinChecker = (pin, token) => {
    const url = baseurl + '/pin?pin=' + pin ;
    return axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };