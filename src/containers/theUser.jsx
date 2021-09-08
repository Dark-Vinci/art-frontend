import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import ArtCards from '../components/ArtCards';
import { getAllArts } from '../store/action/getAllArt';
import classes from '../style/userPage.module.css';


function UserPage ({ fetch, data, token, loading, error, username, loggedIn }) {
    const { push } = useHistory();

    useEffect(() => {
        // fetch the data
        fetch(token);
    }, [fetch, token]);

    return (
        <div className={ classes.container }>
            <div className={ classes.main }>
                <h3>nft mine</h3>
                <p> welcome { username } </p>
                <button
                    onClick={ () => {
                        push('/mine');
                    }}
                >mine</button>
                <div>
                    <h4>here are your list of artworks</h4>
                    {
                        loading ?
                            // would be replaced by a spinner
                            <div>loading...</div> :
                                error ? 
                                    <h2>something went wrong</h2> :
                                        data.length === 0 ?
                                            'You have not made any artwork' :
                                            <ArtCards 
                                                data={ data }
                                            />
                    }
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = ( state ) => {
    return {
        data: state.getArts.arts,
        token: state.auth.token, 
        error: state.getArts.error,
        loading: state.getArts.loading,
        username: state.auth.username,
        loggedIn: state.auth.token !== ''
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        fetch: (token) => dispatch(getAllArts(token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);