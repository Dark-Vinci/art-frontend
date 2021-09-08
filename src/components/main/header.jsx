import { useContext } from 'react';

import Main from './headerMain';
import NavContext from '../../context/home';

function Header ({ loged }) {
    const { value } = useContext(NavContext);

    return (
        <header>
            <Main 
                value={ value }
                loged={ loged }
            />
        </header>
    );
}

export default Header;