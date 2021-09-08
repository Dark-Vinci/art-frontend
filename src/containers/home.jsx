import { useState } from 'react';
import { connect } from 'react-redux';

import NavContext from '../context/home';
import Header from '../components/main/header';

function Home ({ loggedIn }) {
    const [ open, setOpen ] = useState(false);

    const openChangeHandler = () => {
        setOpen(!open);
    }

    return (
        <div style={{ maxWidth: '100vw' }}>
            <NavContext.Provider value={{ 
                value: open, 
                valueHandler: openChangeHandler
            }}>
                <Header 
                    loged={loggedIn}
                />
            </NavContext.Provider>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        loggedIn: state.auth.token !== ''
    }
}

export default connect (mapStateToProps)(Home);