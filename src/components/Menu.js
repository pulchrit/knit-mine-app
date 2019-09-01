import React from 'react';
import TokenService from '../services/token-service';
import {Link} from 'react-router-dom';
import '../css/Menu.css';

const Menu = ({setShow, clickLogout, menuRoutesOptions}) => {
    return (
        <ul className="menu" onClick={event => setShow(false)}>
            {menuRoutesOptions.map((menu, i) => 
                <li className="menu-options" key={`menuOptions-${i}`}>
                    <Link 
                        to={menu.route} 
                        className="menu-option" 
                        onClick={TokenService.hasAuthToken() ? clickLogout : null}
                    >
                        {menu.option}
                    </Link>
                </li>
            )}
        </ul>
    )
}

export default Menu;