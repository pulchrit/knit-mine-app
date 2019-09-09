import React from 'react'
import {Link} from 'react-router-dom'
import '../css/Menu.css'

const Menu = ({setShow, clickLogout, menuRoutesOptions}) => {

    

    return (
        <ul className="menu" onClick={event => setShow(false)}>
            {menuRoutesOptions.map((menu, i) => 
                <li className="menu-options" key={`menuOptions-${i}`}>
                    <Link 
                        to={menu.route} 
                        className="menu-option" 
                        onClick={(menu.option === 'Logout') ? clickLogout : null}
                    >
                        {menu.option}
                    </Link>
                </li>
            )}
        </ul>
    )
}

export default Menu;