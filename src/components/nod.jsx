import { memo } from 'react';
import { useRouteMatch, withRouter } from 'react-router-dom';

function Node({ name, clicked, border, currentShape, shouldPaint, currentColor, canvasColor, color }) {
    const classes = [ 'node' ];

    // click handler for a single node element
    const clickHandler = (name, shouldPaint, currentColor, canvasColor) => {
        clicked(name, shouldPaint, currentColor, canvasColor);
    }

    const { url } = useRouteMatch();

    return (
        <div
            className={ classes.join(' ') }
            onClick={ () => url === '/mine' ? clickHandler(name, shouldPaint, currentColor, canvasColor) : null }
            style={{
                backgroundColor: color,
                // width: '3vmin',
                // height: '3vmin',
                minWidth: '11px',
                minHeight: '11px',
                maxWidth: '15px',
                maxHeight: '15px',
                // width: '3vmin',
                // height: '3vmin',
                width: url === '/mine' ? '3vmin': '100%',
                height: url === '/mine' ? '3vmin': 'auto',
                borderBottom: border ? '1px solid black' : 'none',
                borderLeft: border ? '1px solid black': 'none',
                borderRight: 'none',
                borderTop: 'none',
                boxSizing: 'border-box',
                margin: '0px'
            }}  
        ></div>
    );
}   

export default memo(withRouter(Node));