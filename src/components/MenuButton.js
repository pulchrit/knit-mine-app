import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import TokenService from '../services/token-service'
import '../css/MenuButton.css'

const MenuButton = ({name, setShow, show}) => {

    return (
        <button 
            className="menu-button" 
            type="button"
            onClick={e => setShow(!show)} 
        >
            {show 
                ? <FontAwesomeIcon className='nav-icon' icon={faCaretUp} />
                : <FontAwesomeIcon className='nav-icon' icon={faCaretDown} />
            }
            {name}
            {TokenService.hasAuthToken() && name === 'My Account' ? <FontAwesomeIcon className="nav-icon user" icon={faUser} /> : '' }
        </button>
    )
    
}

export default MenuButton;