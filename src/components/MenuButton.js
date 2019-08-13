import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import '../css/MenuButton.css';

const MenuButton = ({name, setShow, show}) => {

    return (
        <button 
            className="menu-button" 
            type="button"
            onClick={e => setShow(!show)} 
        >
            {show 
                ? <FontAwesomeIcon className='caret-icon' icon={faCaretUp} />
                : <FontAwesomeIcon className='caret-icon' icon={faCaretDown} />
            }
            {name}
        </button>
    )
    
}

export default MenuButton;