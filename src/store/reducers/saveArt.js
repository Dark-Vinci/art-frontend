import * as actionType from '../action/actionType';

const initialState = {
    loading: false,
    error: false
}

const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case actionType.SAVE_ART_START:
            return {
                ...state,
                loading: true,
                error: false
            }

        case actionType.SAVE_ART_FAIL:
            return {
                ...state,
                loading: false,
                error: true
            }

        case actionType.SAVE_ART_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false
            }
    
        default:
            return state
    }
}

export default reducer;