import React from 'react';
import {Link} from 'react-router-dom';
import '../css/Menu.css';

const Menu = ({setShow, menuRoutesOptions}) => {
    return (
        <ul className="menu" onClick={event => setShow(false)}>
            {menuRoutesOptions.map((menu, i) => 
                <li className="menu-options" key={`menuOptions-${i}`}>
                    <Link to={menu.route} className="menu-option">
                        {menu.option}
                    </Link>
                </li>
            )}
        </ul>
    )
}

export default Menu;