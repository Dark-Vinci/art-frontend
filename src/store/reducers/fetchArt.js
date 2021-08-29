import * as actionType from '../action/actionType';

const initialState = {
    error: false,
    loading: false,
    name: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.FETCH_START:
            return {
                ...state,
                loading: true,
                error: false,
                name: ''
            }

        case actionType.FETCH_FAIL:
            return {
                ...state,
                loading: false,
                error: true,
                name: ''
            }

        case actionType.FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                name: action.name
            }

        default:
            return state
    }
}

export default reducer;