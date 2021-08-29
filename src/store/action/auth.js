import * as actionType from './actionType';
import axios from 'axios';

// action creator for starting registration
export const authStart = () => {
    return {
        type: actionType.START_REGISTER
    }
}

// action creator for failed registration
export const authFail = () => {
    return {
        type: actionType.REGISTER_FAIL
    }
}

// action creator for successful registration
export const authSuccess = (payload) => {
    return {
        type: actionType.REGISTER_SUCCESS,
        payload: payload
    }
}

// ! not yet
// action creator for starting loging in
export const loginStart = () => {
    return {
        type: actionType.LOGIN_START
    }
}

// ! not yet
// action creator for failed login
export const loginFail = (error) => {
    return {
        type: actionType.LOGIN_FAIL,
        error: error
    }
}

// ! not yet
// action creator for successful login
export const loginSuccess = (payload) => {
    return {
        type: actionType.LOGIN_SUCCESS,
        payload: payload
    }
}

// ! not yet
// action creator for signing in automatically
export const autoSign = (payload) => {
    return {
        type: actionType.AUTO_SIGN,
        payload: payload
    }
}

// ! not yet
// action creator for logging users out
export const logout = () => {
    // remove the id, token and exipration date from local storage
    localStorage.removeItem('id');
    localStorage.removeItem('token');
    localStorage.removeItem('expiryDate');
    localStorage.removeItem('username');

    return {
        type: actionType.LOGOUT
    }
}

// ! not yet
// expiry logout timout dispatcher
export const countDown = (time) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, time * 1000);
    }
}

// asynchrous registration function helper
async function register (load, dispatch, push) {
    try {
        // post to the server
        const response = await axios.post('http://localhost:3030/api/register', load);

        // set token, id and expiration date
        console.log(response);
        const token = response.headers['x-auth-token'];
        const id = response.data.data._id;
        const expiresIn = +response.data.data.expiresIn;
        const username = response.data.data.username;


        // calculate the expiration date in milliseconds
        const expiryDate = (new Date()).getTime() + expiresIn * 1000;

        const payload = { id, token, username }

        // store id, token, exipration date in local storage
        localStorage.setItem('id', id);
        localStorage.setItem('token', token);
        localStorage.setItem('username', username);
        localStorage.setItem('expiryDate', expiryDate);

        // dispatch authenication success and logout countdown
        dispatch(authSuccess(payload));
        dispatch(countDown(expiresIn));

        // redirect to /my-messages
        push('/my-messages');
    } catch (ex) {
        // dispatch failure to register
        console.log(ex);
        dispatch(authFail());
    }
}

// ! not yet
async function login (load, dispatch, push) {
    try {
        // post login request to the server
        const response = await axios.post('http://localhost:3030/api/login', load);

        console.log(response)
        // set token, id, expiresIn
        const token = response.headers['x-auth-token'];
        const id = response.data.data._id;
        const expiresIn = +response.data.data.expiresIn;
        const username = response.data.data.username;

        // set the expiration date in milliseconds
        const expiryDate = (new Date()).getTime() + expiresIn * 1000;

        // payload for successful login
        const payload = { id, token, username }

        // set the id, token and expirationdate in the local storage
        localStorage.setItem('id', id);
        localStorage.setItem('token', token);
        localStorage.setItem('expiryDate', expiryDate); 
        localStorage.setItem('username', username);

        // dispatch login and countdown for logging out when token expires;
        console.log(expiresIn);
        dispatch(loginSuccess(payload));
        dispatch(countDown(expiresIn));

        push('/user');
    } catch (ex) {
        // dispatch login failure
        dispatch(loginFail(ex.message));
    }
}

// dispatch login start and reaches out to the web with the login helper
export const onLogin = (payload, push) => {
    return dispatch => {
        dispatch(loginStart());
        login(payload, dispatch, push);
    }
}

// ! not yet
// dispatch register start and reaches out to the web with the register helper
export const auth = ( payload, push ) => {
    return dispatch => {
        dispatch(authStart());
        register(payload, dispatch, push);
    }
}

// ! not yet
// dispatch for auto logging in of the user when the site is visited
export const autoLogin = () => {
    return dispatch => {
        // get the token, id and expiry date from the loacl storage
        const token = localStorage.getItem('token');
        const id = localStorage.getItem('id');
        const expiryDate = localStorage.getItem('expiryDate');
        const username = localStorage.getItem('username');
        const dateInSeconds = +expiryDate

        if (!token || !id) {
            // dispatch logout if theres is no token or id in the localstorage
            dispatch(logout());
        } else {
            if (dateInSeconds < (new Date().getTime())) {
                // dispatch logout if the token has expired
                dispatch(logout());
            } else {
                // get the time left in milliseconds
                const timeLeft = dateInSeconds - (new Date().getTime());

                const payload = { id, token, username }

                // dispatch autoSignIn and logout countdown timer 
                dispatch(autoSign(payload));
                dispatch(countDown(timeLeft / 1000));
            }
        }
    }
}