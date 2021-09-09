import axios from 'axios';

import * as actionType from './actionType';
import { saveExtractionHelper } from '../../utils/extractColor';

const saveStart = () => {
    return {
        type: actionType.SAVE_ART_START
    }
}

const saveFail = () => {
    window.alert('something went wrong');

    return {
        type: actionType.SAVE_ART_FAIL
    }
}

const saveSuccess = () => {
    window.alert('saved');

    return {
        type: actionType.SAVE_ART_SUCCESS
    }
}

async function saveHelper (dispatch, token, data, name) {
    try {
        const toSend = { pixel: data, name: name }

        // await axios.post('http://localhost:3030/api/art/create', toSend, {
        //     headers: { 'x-auth-token': token }
        // });

        await axios.post(`https://proj-pix-art-wxv19.herokuapp.com/api/art/create`, toSend, {
            headers: { 'x-auth-token': token }
        });

        dispatch(saveSuccess());  
    } catch (err) {
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