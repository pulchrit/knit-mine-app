import React from 'react';
import {Link} from 'react-router-dom';
import '../css/AddButton.css';

const AddButton = ({name, route, otherClassName}) => {
    return (
        <button className={`button ${otherClassName ? otherClassName : ''}`} type="button">
            <Link to={route}>{name}</Link>
        </button>
    )
}

export default AddButton