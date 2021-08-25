import * as actionType from './actionType';

export const shouldErase = () => {
    return {
        type: actionType.SHOULD_ERASE
    }
}

export const changeBorder = () => {
    return {
        type: actionType.CHANGE_BORDER
    }
}

export const changeColor = (color) => {
    return {
        type: actionType.COLOR_CHANGE,
        color: color
    }
}

export const changeCanvasColor = (color) => {
    return {
        type: actionType.CHANGE_CANVAS_COLOR,
        color: color
    }
}