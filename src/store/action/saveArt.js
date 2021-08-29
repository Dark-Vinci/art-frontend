import * as actionType from './actionType';
import { saveExtractionHelper } from '../../utils/extractColor';
import axios from 'axios';

const saveStart = () => {
    window.alert('saved');
    
    return {
        type: actionType.SAVE_ART_START
    }
}

const saveFail = () => {
    return {
        type: actionType.SAVE_ART_FAIL
    }
}

const saveSuccess = () => {
    return {
        type: actionType.SAVE_ART_SUCCESS
    }
}

async function saveHelper (dispatch, token, data, name) {
    try {
        const toSend = {
            pixel: data,
            name: name
        }

        // console.log(token);
        // console.log(tos);
        const response = await axios.post('http://localhost:3030/api/art/create', toSend, {
            headers: { 'x-auth-token': token }
        });

        console.log(response);
        dispatch(saveSuccess());  
    } catch (err) {
        console.log(err);
        dispatch(saveFail());
    }
}

export const save = (token, data, name) => {
    const transformedData = saveExtractionHelper(data);
    return dispatch => {
        dispatch(saveStart());
        saveHelper(dispatch, token, transformedData, name);
    }
}