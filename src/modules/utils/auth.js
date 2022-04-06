import axios from "axios";

const URL = process.env.NEXT_PUBLIC_API_URL + "/auth/login";
export const loginAuth = (body) => {
  return axios.post(URL, body);
};

const URLregister = process.env.NEXT_PUBLIC_API_URL + "/auth/register";
export const registerAuth = (body) => {
  return axios.post(URLregister, body);
};

export const logoutAuth = (token) => {
  const URLlogout = process.env.NEXT_PUBLIC_API_URL + "/auth/logout";
  return axios.post(URLlogout, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
