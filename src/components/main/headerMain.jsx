import { useHistory, withRouter } from 'react-router-dom';

import classes from '../../style/main.module.css';
import NavItem from './navItem';

function Main ({ loged }) {
    const { push } = useHistory();

    const buttonClickHandler = () => {
        push('/mine');
    }

    console.log('main ', loged)

    return (
        <main className={ classes.container }>
            <NavItem 
                loged={loged}
            />
            <div className={ classes.main }>
                <div className={ classes.mainmain}>
                    <h1>nft digital mine</h1>
                    <p>
                        welcome to digital nft gold mine, the is best mine for mining good digital artwork for free
                    </p>
                    <button
                        onClick={ buttonClickHandler }
                    >start mining</button>
                </div>
            </div>
        </main>
    );
}

export default withRouter(Main);