import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom'

import DrawingBoard from "../components/drawingBoard";
import { generate } from '../store/action/node';
import { shouldErase, changeBorder, changeColor, changeCanvasColor } from '../store/action/general';
import {  updateBackground, clearCanvas } from '../store/action/node';
import classes from '../style/drawingPage.module.css';
import { save } from '../store/action/saveArt';

function DrawingPage ({ 
    isPainting, border, changeBorder, 
    changeColor, changeCanvasColor, 
    generateNode, shouldErase, clearCanvas,
    updateBackground, canvasBackgroundColor, 
    token, nodes, save
}) {
    const { push } = useHistory();
    const [ color, setColor ] = useState('#00ff00');
    const [ canvasColor, setCanvasColor ] = useState("#555555");
    const [ colorHelper, setColorHelper ] = useState('');
    const [ backgroundColorHelper, setBackgroundColorHelper ] = useState('');

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
        if (colorHelper === '') {
            return;
        }
        // console.log(color)
        setColor(colorHelper);
        // console.log(event.target.value);
        changeColor(colorHelper);
        console.log(color)
    }

    // handler for changing background color
    const canvasColorChangeHandler = (event) => {
        if (backgroundColorHelper === '') {
            return;
        }
        // update the color of every node
        updateBackground(backgroundColorHelper, canvasBackgroundColor);
        // change the canvas color in the store
        changeCanvasColor(backgroundColorHelper);
        // set the state of the background color
        setCanvasColor(backgroundColorHelper);
        // ! to be removed changeCanvasColor(event.target.value);
    }

    const clearCanvasButtonHandler = () => {
        if (window.confirm('are you sure you want to clear the canvas?')) {
            clearCanvas(canvasBackgroundColor);
        } else {
            return;
        }
    }

    const saveButtonHandler = () => {
        // get node, token
        // dispatch
        // ! remove console.log('[the token]', token);
        if (!token.trim()) {
            push('/login');
        } else {
            const name = window.prompt('what do you want to call the artwork?');
            save(token, nodes, name);
        }
    }

    return (
        <div className={ classes.container }>
            {/* nft mine */}
            <div className={ classes.buttons }>
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
                            'no border':
                            'use border'
                    }
                </button>

                <button
                    onClick={ clearCanvasButtonHandler }
                >   clear canvas
                </button>
            </div>

            
            <div
                style={{ 
                    width: "100%", 
                    display: 'flex', 
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '0px 30px',
                    flexDirection: 'column',
                    fontSize: '30px',
                    fontWeight: 'bold',
                    marginTop: '2px',
                    paddingTop: '2px',
                    color: 'purple'
                }}
            >
                nft mine 
                <DrawingBoard />
            </div>

            <div className={ classes.colorchange }>
                <div>
                    <button
                        onClick={ colorChangeHandler }
                    >apply col</button>
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
                        className={ classes.second }
                        onClick={ canvasColorChangeHandler }
                    >apply bg</button>
                    {/* canvasColorChangeHandler */}
                    <input 
                        type="color"
                        onChange={ (event) => {
                            setBackgroundColorHelper(event.target.value)
                        } } 
                        value={canvasColor}
                    />
                </div>
                <button
                    style={{ 
                        width: '116px',
                        color: 'white',
                        border: 'none',
                        borderRadius: '20px',
                        height: '40px',
                        backgroundColor: 'purple',
                        padding: '0px',
                        marginTop: '2px'
                    }}
                    onClick={ () => push('/print')}
                >print</button>

                <button
                    style={{ 
                        width: '116px',
                        color: 'white',
                        border: 'none',
                        borderRadius: '20px',
                        height: '40px',
                        backgroundColor: 'purple',
                        padding: '0px',
                        marginTop: '2px'
                    }}
                    onClick={ saveButtonHandler }
                >save to db</button>
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        generateNode: () => dispatch(generate()),
        clearCanvas: (bgcolor) => dispatch(clearCanvas(bgcolor)),
        shouldErase: () => dispatch(shouldErase()),
        changeBorder: () => dispatch(changeBorder()),
        changeColor: (color) => dispatch(changeColor(color)),
        changeCanvasColor: (color) => dispatch(changeCanvasColor(color)),
        updateBackground: (color, oldBackground) => dispatch(updateBackground(color, oldBackground)),
        save: (token, data, name) => dispatch(save(token, data, name))
    }
}

const mapStateToProps = (state) => {
    return {
        isPainting: state.gnr.shouldPaint,
        border: state.gnr.border,
        canvasBackgroundColor: state.gnr.canvasColor,
        nodes: state.node.nodes,
        token: state.auth.token
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawingPage);