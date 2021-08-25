import { memo } from 'react'

function Node({ name, clicked, border, currentShape, shouldPaint, currentColor, canvasColor, color }) {
    const classes = [ 'node' ];

    if (currentShape === 1) {
        // sqaure
        classes.push('square');
    } else if (currentShape === 2) {
        // a little bit round
        classes.push('25%round');
    } else {
        classes.push('circle');
    }

    const clickHandler = (name, shouldPaint, currentColor, canvasColor) => {
        clicked(name, shouldPaint, currentColor, canvasColor);
    }

    return (
        <div
            className={ classes.join(' ') }
            onClick={ () => clickHandler(name, shouldPaint, currentColor, canvasColor) }
            style={{
                backgroundColor: color,
                width: 'auto',
                height: '10px',
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

export default memo(Node);