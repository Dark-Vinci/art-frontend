import { connect } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';

import Nodes from "./nodes";
import { clicked, updateBackground } from '../store/action/node';

// we need shrink here for margin or not
function DrawingBoard ({ 
    nodes, currentColor, shouldPaint, 
    canvasColor, currentShape, border, 
    clicked, backgroundIsChanged,
    updateBackground
}) {
    const { url } = useRouteMatch();

    // console.log(url);
    return (
        <div className="drawingBoard">
            <Nodes 
                nodes={ nodes }
                currentColor={ currentColor }
                shouldPaint={ shouldPaint }
                canvasColor={ canvasColor }
                currentShape={ currentShape }
                // border={ border || null }
                border={ 
                    url === '/mine' ?
                    border: null
                }
                clicked={ clicked }
                backgroundChange= { backgroundIsChanged }
            />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        currentColor: state.gnr.currentColor,
        shouldPaint: state.gnr.shouldPaint,
        canvasColor: state.gnr.canvasColor,
        border: state.gnr.border,
        nodes: state.node.nodes,
        currentShape: state.gnr.currentShape,
        shrink: state.gnr.shrink,
        backgroundIsChanged: state.gnr.canvasColor !== 'yellow'
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clicked: (name, shouldPaint, currentColor, canvasColor) => dispatch(clicked(name, shouldPaint, currentColor, canvasColor)),
        updateBackground: (color, oldBackground) => dispatch(updateBackground(color, oldBackground))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawingBoard);