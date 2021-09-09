import axios from 'axios';

import * as actionType from './actionType'
import { importNode } from './node';
import { transformServerData } from '../../utils/extractColor';

const fetchStart = () => {
    return {
        type: actionType.FETCH_START
    }
}

const fetchFail = () => {
    return {
        type: actionType.FETCH_FAIL
    }
}

const fetchSuccess = (name) => {
    return {
        type: actionType.FETCH_SUCCESS,
        name: name
    }
}

async function fetchHelper (dispatch, token, id) {
    try {
        // const response = await axios.get(`http://localhost:3030/api/art/my-art/${ id }`, {
        //     headers: { 'x-auth-token': token }
        // });

        // ! to be changed
        const response = await axios.get(`https://proj-pix-art-wxv19.herokuapp.com/api/art/my-art/${ id }`, {
            headers: { 'x-auth-token': token }
        });

        const name = response.data.data.name

        dispatch(fetchSuccess(name));
        const transformed = transformServerData(40, 50, response.data.data.pixel);
        dispatch(importNode(transformed));
    } catch (err) {
        dispatch(fetchFail());
    }
}

export const fetchArt = (token, id) => {
    return dispatch => {
        dispatch(fetchStart());
        fetchHelper(dispatch, token, id)
    }
}