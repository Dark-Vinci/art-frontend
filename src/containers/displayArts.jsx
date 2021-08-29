import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom'

import { fetchArt } from '../store/action/fetchArt';
import DrawingBoard from '../components/drawingBoard';
import classes from '../style/displayArts.module.css';

function ArtDisplay ({ fetch, token, name, loading, error }) {
    const { id } = useParams();
    const { push } = useHistory();

    useEffect(() => {
        fetch(token, id);
    }, [token, id, fetch]);   

    const buttonClickHandler = () => {
        push('/print');
    }


    return (
        <div className={ classes.container }>
            <div className={ classes.top }>
                <h3>nft mine</h3>
                <div>
                    <p>nft name:  { name }</p>
                    <button
                        onClick={ buttonClickHandler }
                    >print</button>
                </div>
            </div>
            {
                loading ?
                    <h3>loading...</h3> :
                        error ? 
                            <h2> SOMETHING WENT WRONG </h2>:
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
            }
        </div>
    );
}

const mapStateToProps = ( state ) => {
    return {
        nodes: state.node.nodes,
        token: state.auth.token,
        loading: state.fetchArt.loading,
        error: state.fetchArt.error,
        name: state.fetchArt.name
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        fetch: (token, id) => dispatch(fetchArt(token, id))
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(ArtDisplay);