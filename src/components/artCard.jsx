import { useHistory, withRouter } from 'react-router-dom';

import classes from '../style/artCard.module.css';

function ArtCard ({ name, createdAt, id }) {
    const { push } = useHistory();

    const clickHandler = () => {
        push(`/my-art/${ id }`);
    }

    return (
        <div
            className={ classes.container }
            onClick={ clickHandler }
        >
            <div>name: { name }</div>
            <div>createdAt: { new Date(createdAt).toDateString() }</div>
        </div>
    );
}

export default withRouter(ArtCard);