import AXIOS from "../services/Axios";

const BASE_URL = "https://nutri-saga.onrender.com/api/v1";

//to get all dishes -- get request.
export const getDishes = async () => {
  const response = {
    data: null,
    err: null,
  };
  try {
    const { data } = await AXIOS.get(`${BASE_URL}/dishes/`);
    response.data = data.dishes;
  } catch (error) {
    response.err = error.message;
  }
  return response;
};

//get single dish by id-- get request
export const getDish = async (id) => {
  const response = {
    data: null,
    err: null,
  };
  try {
    const { data } = await AXIOS.get(`${BASE_URL}/dishes/${id}`);

    response.data = data.dish;
  } catch (error) {
    response.err = error.message;
  }
  return response;
};

//delete single dish by id-- deleete request
export const deleteDish = async (id) => {
  const response = {
    success: null,
    err: null,
  };
  try {
    const { data } = await AXIOS.delete(`${BASE_URL}/dishes`, { data: { id } });
    response.success = data.success;
  } catch (error) {
    response.err = error.response.data.message;
  }
  return response;
};

//to update dish --> put request
export const updateDish = async (modalData) => {
  const response = {
    success: false,
    err: null,
  };
  try {
    const { data } = await AXIOS.put(`${BASE_URL}/dishes/`, modalData);
    response.success = data.success;
  } catch (error) {
    if (error.response.status === 413) {
      response.err = "Image is too large";
      return response;
    }
    response.err = error.message;
  }
  return response;
};

//to add dish --> post request
export const addDish = async (modalData) => {
  const response = {
    success: false,
    err: null,
  };
  try {
    const { data } = await AXIOS.post(`${BASE_URL}/dishes/`, modalData);
    response.success = data.success;
  } catch (error) {
    if (error.response.status === 413) {
      response.err = "Image is too large";
      return response;
    }
    response.err = error.message;
  }
  return response;
};

export const userLogin = async (username, password) => {
  const response = {
    data: false,
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
    response.err = error.message;
  }
  return response;
};
