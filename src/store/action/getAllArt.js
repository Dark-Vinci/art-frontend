import * as actionType from './actionType';
import axios from 'axios';

const getAllStart = () => {
    return {
        type: actionType.GET_ALL_START
    }
}

const getAllFail = () => {
    return {
        type: actionType.GET_ALL_FAIL
    }
}

const getAllSuccess = (data) => {
    return {
        type: actionType.GET_ALL_SUCCESS,
        data: data
    }
}

async function getAllHelper (dispatch, token) {
    try {
        const response = await axios.get('http://localhost:3030/api/art/my-arts', {
            headers: { 'x-auth-token': token }
        });
        const data = response.data.data;

        // console.log(data);
        dispatch(getAllSuccess(data));
    } catch (err) {
        // console.log(err)
        dispatch(getAllFail());
    }
}

export const getAllArts = (token) => {
    return dispatch => {
        dispatch(getAllStart());
        getAllHelper(dispatch, token);
    }
}