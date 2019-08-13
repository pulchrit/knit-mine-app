import React from 'react';
import {Link} from 'react-router-dom';
import '../css/Menu.css';

const Menu = ({menuRoutesOptions}) => {
    return (
        <ul className="menu">
            {menuRoutesOptions.map((menu, i) => 
                <li className="menu-options" key={i}><Link to={menu.route} className="menu-option">{menu.option}</Link></li>
            )}
        </ul>
    )
}

export default Menu;