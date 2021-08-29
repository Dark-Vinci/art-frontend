import classes from '../../style/nav.module.css';


function Nav ({ click }) {
    return (
        <nav className={ classes.container }>
            <h3>nft mine</h3>
            <i
                onClick={ click }
            >icon</i>
        </nav>
    )
}

export default Nav;