import { memo } from 'react';  

import Node from "./nod";
import classes from '../style/nodes.module.css'


function Nodes ({ nodes, currentColor, shouldPaint, canvasColor, currentShape, clicked, border }) {
    return (
        <div className= { classes.container }>
            {
                nodes.map((nodeRow) => {
                    return nodeRow.map(nodeEl => {  
                        return    <div key={ nodeEl.name } style={{ margin: '0px', width: 'auto' }}>
                                <Node 
                                    key={ nodeEl.name }
                                    name={ nodeEl.name }
                                    color={ nodeEl.color }
                                    currentShape={ currentShape }
                                    canvasColor = { canvasColor }
                                    shouldPaint={ shouldPaint }
                                    currentColor={ currentColor }
                                    clicked={ clicked }
                                    border={ border }
                                />
                            </div>
                    });
                })
            }
        </div>
    );
}

export default memo(Nodes);