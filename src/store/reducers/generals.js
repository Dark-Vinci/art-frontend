import * as actionType from '../action/actionType';

// initial state of the drawing page
const initialState = {
    shouldPaint: true,
    canvasColor: 'yellow',
    currentColor: '#00ff00',
    shrink: false,
    border: true,
    currentShape: 1
}

// reducer for manipulating the general state of the drawing page
const generalReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.SHOULD_ERASE:
            // to set if the clicking should paint or erase
            return {
                ...state,
                shouldPaint: !state.shouldPaint
            }

        case actionType.CHANGE_BORDER:
            // to toggle the border on each node element
            return {
                ...state,
                border: !state.border
            }

        case actionType.COLOR_CHANGE:
            // to change the painting color of the app
            return {
                ...state,
                currentColor: action.color
            }

            case actionType.CHANGE_CANVAS_COLOR:
                // to change the color of the canvas
                return {
                    ...state,
                    canvasColor: action.color
                }
    
        default: return state;
    }
}

export default generalReducer;