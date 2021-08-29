import * as _ from 'lodash';

import * as actionType from '../action/actionType';
import generate from '../../utils/nodeGenerator';

const initialState = {
    nodes: []
}

const nodeReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.GENERATE_NODE:
            // generate the nodes array with the utils function
            const color = action.payload.color
            return {
                nodes: [ ...generate(40, 50, color) ]
            }
        
        case actionType.PAINT:
            // extract the name and remove 0 when the row/column startswith 0
            const data = []
            const splitname = action.payload.name.split('|');

            // remove the xtra 0 defore the number
            if (splitname[0].startsWith('0')  && splitname[0].length === 2) {
                const i = splitname[0][1];
                data.push(+i);
            } else {
                data.push(splitname[0])
            }

            // remove the xtra 0 defore the number
            if (splitname[1].startsWith('0') && splitname[1].length === 2) {
                const j = splitname[1][1];
                data.push(+j);
            } else {
                data.push(splitname[1])
            }

            // deep clone the nodes array to modify with ease
            const newNodes = _.cloneDeep(state.nodes);
            // modify the color
            console.log(data);
            newNodes[data[0]][data[1]].color = action.payload.currentColor
            console.log(action.payload.currentColor)
            return {
                ...state,
                nodes: [ ...newNodes ]
            }

        case actionType.ERASE:
            // extract the name and remove 0 when the row/column startswith 0
            const dataE = []
            const splitnameE = action.payload.name.split('|');

            // remove the xtra 0 defore the number
            if (splitnameE[0].startsWith('0') ) {
                const i = splitnameE[0][1];
                dataE.push(+i);
            } else {
                dataE.push(splitnameE[0])
            }

            // remove the xtra 0 defore the number
            if (splitnameE[1].startsWith('0')) {
                const j = splitnameE[1][1];
                dataE.push(+j);
            } else {
                dataE.push(splitnameE[1])
            }
    
            // deep clone the nodes array to modify with ease
            const newNodesE = _.cloneDeep(state.nodes);
            // modify the color
            newNodesE[dataE[0]][dataE[1]].color = action.payload.canvasColor

            return {
                ...state,
                nodes: [ ...newNodesE ]
            }

        case actionType.UPDATE_COLOR:
            // clone
            // a forEach loop on every newNodesE
            // check if the color is different from the backgroun color before
                // if yes, dont change the color
                // else we change the color to the new background color
            // return the new node state
            const clonedNode = _.cloneDeep(state.nodes);

            clonedNode.forEach((row) => {
                row.forEach((node) => {
                    if (node.color === action.payload.oldBackground) {
                        node.color = action.payload.color
                    }
                });
            });

            return {
                ...state,
                nodes: clonedNode
            }

        case actionType.CLEAR_CANVAS:
            const cloned = _.cloneDeep(state.nodes);

            cloned.forEach((row) => {
                row.forEach((node) => {
                    node.color = action.backgroundColor
                });
            });

            return {
                ...state,
                nodes: cloned
            }

        case actionType.IMPORT_NODE:
            return {
                ...state,
                nodes: [
                    ...action.data
                ]
            }
        default: return state;
    }
}

export default nodeReducer;