import axios from "axios";

//to get all dishes -- get request.
export const getDishes = async () => {
    const response = {
        data: null,
        err: null
    }
    try {
        const {
            data
        } = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/dishes/`
        );
        response.data = data.dishes;
    } catch (error) {
        ;
        response.err = error.message;
    }
    return response;
}

//get single dish by id-- get request
export const getDish = async (id) => {
    const response = {
        data: null,
        err: null
    }
    try {
        const {
            data
        } = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/dishes/${id}`
        );
  
        response.data = data.dish;
    } catch (error) {
        response.err = error.message;
    }
    return response;
}

//delete single dish by id-- deleete request
export const deleteDish = async (id) => {
    const response = {
        success: null,
        err: null
    }
    try {
        const {
            data
        } = await axios.delete(
            `${process.env.REACT_APP_BASE_URL}/dishes/${id}`
        );
        response.success = data.success;
    } catch (error) {
        response.err = error.response.data.message;
    }
    return response;
}

//to update dish --> put request
export const updateDish = async (modalData) => {
    const response = {
        success: false,
        err: null
    }
    try {
        const {
            data
        } = await axios.put(
            `${process.env.REACT_APP_BASE_URL}/dishes/`, modalData
        );
        response.success = data.success;
    } catch (error) {
        if(error.response.status === 413){
            response.err = "Image is too large"
            return response;
        }
        response.err = error.message;
    }
    return response;
}

//to add dish --> post request
export const addDish = async (modalData) => {
    const response = {
        success: false,
        err: null
    }
    try {
        const {
            data
        } = await axios.post(
            `${process.env.REACT_APP_BASE_URL}/dishes/`, modalData
        );
        response.success = data.success;
    } catch (error) {
        if(error.response.status === 413){
            response.err = "Image is too large"
            return response;
        }
        response.err = error.message;
    }
    return response;
}