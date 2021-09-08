import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { useEffect } from 'react';

import { logout } from '../../store/action/auth';
import classes from '../../style/logout.module.css';

function Logout ({ logout, loggedOut }) {
    const { push } = useHistory();

    useEffect(() => {    
        logout();
    }, [logout]);

    let logoutRender;

    if (!loggedOut) {
        logoutRender = <div>logging out......</div>
    } else {
        push('/')
    }

    return (
        <div
            className={ classes.container }
        >
            { logoutRender }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        loggedOut: state.auth.token === ''
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Logout);