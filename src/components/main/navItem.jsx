import { Link, withRouter } from 'react-router-dom';

import classes from '../../style/navItem.module.css';

function NavItem ({ loged }) {
    let toRenderUser ;
    let toRenderLogout;

    if (loged) {
        toRenderUser = (
            <li>
                <Link
                    to='/user'
                    exact='true'
                >user</Link>
            </li>
        );

        toRenderLogout = ( 
            <li>
                <Link
                    to='/logout'
                    exact='true'
                >logout</Link>
            </li>
        );
    } else {
        toRenderUser = (
            <li>
                <Link
                    to='/login'
                    exact='true'
                >login</Link>
            </li>
        );

        toRenderLogout = ( 
            <li>
                <Link
                    to='/register'
                    exact='true'
                >register</Link>
            </li>
        );
    }

    return (
        <ul className={ classes.container }>
            <li>
                <Link
                    to='/mine'
                    exact='true'
                >mine</Link>
            </li>

            { toRenderUser }
            { toRenderLogout }
        </ul>
    )
}

export default withRouter(NavItem);