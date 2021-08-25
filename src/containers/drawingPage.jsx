import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import DrawingBoard from "../components/drawingBoard";
import { generate } from '../store/action/node';
import { shouldErase, changeBorder, changeColor, changeCanvasColor } from '../store/action/general';
import {  updateBackground } from '../store/action/node';

function DrawingPage ({ 
    generateNode, shouldErase, 
    isPainting, border, changeBorder, 
    changeColor, changeCanvasColor, 
    updateBackground, canvasBackgroundColor
}) {
    const [ color, setColor ] = useState('#00ff00');
    const [ canvasColor, setCanvasColor ] = useState('#ffff00');
    const [ colorHelper, setColorHelper ] = useState('');
    const [ backgroundColorHelper, setBackgroundColorHelper ] = useState('');
    // const [ canvasBackground, setCanvasBackground] = useState('yellow');

    useEffect(() => {
        // generate nodes
        generateNode();
    }, [generateNode]);

    const eraseButtonHandler = () => {
        shouldErase();
    }

    const borderButtonHandler = () => {
        changeBorder();
    }

    // handler for changing painting color
    const colorChangeHandler = () => {
        // console.log(color)
        setColor(colorHelper);
        // console.log(event.target.value);
        changeColor(colorHelper);
        console.log(color)
    }

    // handler for changing background color
    const canvasColorChangeHandler = (event) => {
        // update the color of every node
        updateBackground(backgroundColorHelper, canvasBackgroundColor);
        // change the canvas color in the store
        changeCanvasColor(backgroundColorHelper);
        // set the state of the background color
        setCanvasColor(backgroundColorHelper);
        // ! to be removed changeCanvasColor(event.target.value);
    }

    return (
        <div className="container">
            buttons[]
            colorpalete
            drawingBoard
            <div>pain</div>

            <button
                onClick={ eraseButtonHandler }
            >   {
                    isPainting ?
                        'erase':
                        'paint'
                }
            </button>

            <button
                onClick={ borderButtonHandler }
            >   {
                    border ?
                        'remove border':
                        'put border'
                }
            </button>

            <div>
                <button
                    onClick={ colorChangeHandler }
                >use color</button>
                {/* colorChangeHandler */}
                <input 
                    type="color"
                    onChange={ (event) => {
                        setColorHelper(event.target.value)
                    } } 
                    value={color}
                />
            </div>

            <div>
                <button
                    onClick={ canvasColorChangeHandler }
                >use background</button>
                {/* canvasColorChangeHandler */}
                <input 
                    type="color"
                    onChange={ (event) => {
                        setBackgroundColorHelper(event.target.value)
                    } } 
                    value={canvasColor}
                />
            </div>
            <DrawingBoard />
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        generateNode: () => dispatch(generate()),
        shouldErase: () => dispatch(shouldErase()),
        changeBorder: () => dispatch(changeBorder()),
        changeColor: (color) => dispatch(changeColor(color)),
        changeCanvasColor: (color) => dispatch(changeCanvasColor(color)),
        updateBackground: (color, oldBackground) => dispatch(updateBackground(color, oldBackground))
    }
}

const mapStateToProps = (state) => {
    return {
        isPainting: state.gnr.shouldPaint,
        border: state.gnr.border,
        canvasBackgroundColor: state.gnr.canvasColor
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawingPage);