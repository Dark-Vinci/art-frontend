import * as actionType from '../action/actionType';

const initialState = {
    arts: [],
    error: false,
    loading: false
}

const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case actionType.GET_ALL_START:
            return {
                ...state,
                loading: true,
                error: false
            }

        case actionType.GET_ALL_FAIL:
            return {
                ...state,
                loading: false,
                error: true
            }

        case actionType.GET_ALL_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                arts: [
                    ...action.data
                ]
            }
    
        default:
            return state;
    }
}

export default reducer