import React from 'react';
import {Link} from 'react-router-dom';
import '../css/AddButton.css';

const AddButton = ({name, route}) => {
    return (
        <section className="add-project-pattern-section">
            <button className="button" type="button">
                <Link to={route}>{name}</Link>
            </button>
        </section>
    )
}

export default AddButton