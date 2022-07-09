import axios from "axios";

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