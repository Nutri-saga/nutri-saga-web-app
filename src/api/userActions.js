import AXIOS from "../services/Axios";

import { BASE_URL } from "./baseUrl";

//user login
export const userLogin = async (username, password) => {
  const response = {
    data: null,
    err: null,
  };
  try {
    const { data } = await AXIOS.post(`${BASE_URL}/auth/signin`, {
      username,
      password,
      confirm_password: password,
    });
    response.data = data;
  } catch (error) {
    response.err = error?.response?.data?.message || "Something went wrong.";
  }
  return response;
};
