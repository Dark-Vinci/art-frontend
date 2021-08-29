import * as actionType from './actionType';

export const generate = () => {
    return {
        type: actionType.GENERATE_NODE,
        payload: { color: 'yellow' }
    }
}

export const clearCanvas = (backgroundColor) => {
    return {
        type: actionType.CLEAR_CANVAS,
        backgroundColor: backgroundColor
    }
}

export const updateBackground = (color, oldBackground) => {
    return {
        type: actionType.UPDATE_COLOR,
        payload: { color, oldBackground }
    }
}  

export const paint = (name, currentColor) => {
    return {
        type: actionType.PAINT,
        payload: { name, currentColor }
    }
}

export const erase = (name, canvasColor) => {
    return {
        type: actionType.ERASE,
        payload: { name, canvasColor }
    }
}

export const clicked = (name, shouldPaint, currentColor, canvasColor) => {
    return dispatch => {
        if (shouldPaint) {
            dispatch(paint(name, currentColor));
        } else {
            dispatch(erase(name, canvasColor));
        }
    }
}

export const importNode = (data) => {
    return {
        type: actionType.IMPORT_NODE,
        data: data
    }
}