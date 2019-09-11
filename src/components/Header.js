import React from 'react'
import {Link} from 'react-router-dom'
import Nav from './Nav'
import '../css/Header.css'

const Header = ({accountName, changeAccountName}) => {

    return (
        <header role="banner">

            <Link to="/" className="logo">
                Knit Mine
            </Link>

            <Nav 
                accountName={accountName} 
                changeAccountName={changeAccountName}
            />

        </header>

    );

}

export default Header;