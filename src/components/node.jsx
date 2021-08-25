


function Node({ name, clicked, border, currentShape, shouldPaint, currentColor, canvasColor, color }) {
    const classes = [ 'node' ];

    if (border) {
        classes.push('border');
    } 

    if (currentShape === 1) {
        // sqaure
        classes.push('square');
    } else if (currentShape === 2) {
        // a little bit round
        classes.push('25%round');
    } else {
        //circular grid;
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
                width: '10px',
                height: '10px',
                border: '2px solid blue'
            }}
        ></div>
    );
}

export default Node;