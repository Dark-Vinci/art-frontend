import * as actionType from '../action/actionType';

// the initial state of the authentication reducer
const initialState = {
    userId: '', 
    token: '', 
    error: false,
    loading: false,
    username: ''
}

// authentication reducer
const reducer = ( state = initialState, action ) => {
    switch(action.type) {
        case actionType.START_REGISTER:
            // registration starts
            return {
                ...state,
                loading: true,
                error: false,
                userId: '',
                username: ''
            }

        case actionType.REGISTER_FAIL:
            // failed registration
            return {
                ...state,
                loading: false,
                error: true,
                userId: '',
                username: ''
            }

        case actionType.REGISTER_SUCCESS:
            // successful registration
            return {
                ...state,
                loading: false,
                error: false,
                token: action.payload.token,
                userId: action.payload.id,
                username: action.payload.username
            }
        case actionType.LOGIN_START:
            // login starts
            return {
                ...state,
                loading: true,
                error: false,
                userId: '',
                username: ''
            }

        case actionType.LOGIN_FAIL:
            // failed loging in
            return {
                ...state,
                loading: false,
                error: true,
                userId: '',
                username: ''
            }

        case actionType.LOGIN_SUCCESS:
            // successful user login
            return {
                ...state,
                loading: false,
                userId: action.payload.id,
                token: action.payload.token,
                username: action.payload.username
            }

        case actionType.LOGOUT:
            // loging a user out
            return {
                ...state,
                loading: false,
                userId: '',
                token: '', 
                error: false,
                username: ''
            }

        case actionType.AUTO_SIGN:
            // signing in automatically by browser
            return {
                ...state,
                loading: false,
                userId: action.payload.id,
                token: action.payload.token,
                error: false,
                username: action.payload.username
            }
        default:
            return state
    }
}

export default reducer;