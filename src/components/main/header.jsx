import { useContext } from 'react';

import Nav from './nav';
import Main from './headerMain';
import NavItem from './navItem';
import NavContext from '../../context/home';
// import classes from '../../style/header.module.css';

function Header () {
    const { value, valueHandler } = useContext(NavContext);

    return (
        <header>
            <Nav 
                click={ valueHandler }
            />
            <Main 
                value={ value }
            />
        </header>
    );
}

export default Header;