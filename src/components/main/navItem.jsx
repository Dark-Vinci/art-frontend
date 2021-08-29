import { Link, withRouter } from 'react-router-dom';

import classes from '../../style/navItem.module.css';

function NavItem () {
    return (
        <ul className={ classes.container }>
            <li>
                <Link
                    to='/mine'
                    exact='true'
                >mine</Link>
            </li>
            <li>
                <Link
                    to='/login'
                    exact='true'
                >login</Link>
            </li>
            {/* ! shlould be guarded */}
            <li>
                <Link
                    to='/user'
                    exact='true'
                >user</Link>
            </li>

            <li>
                <Link
                    to='/register'
                    exact='true'
                >register</Link>
            </li>
        </ul>
    )
}

export default withRouter(NavItem);