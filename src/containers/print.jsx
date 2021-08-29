import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import DrawingBoard from '../components/drawingBoard';

function Print ({ redirect }) {
    // if the length of the nodes in the store is less
    // than 0, we redirect to the mine page

    useEffect(() => {
        // print if we are not redirecting
        if ( !redirect ) {
            window.print();
        }
    }, [redirect]);

    return (
        redirect ? <Redirect to='/mine'/> :
        <div
            style={{ 
                width:'100vw',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        > 
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
                <DrawingBoard />
            </div>
        </div>
    );
}

// check if the node length is store is greater than 0
const mapStateToProps = state => {
    return {
        redirect: state.node.nodes.length > 0 ? false : true
    }
}

export default connect(mapStateToProps)(Print);