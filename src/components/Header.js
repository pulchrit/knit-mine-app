import React from 'react'
import {Link} from 'react-router-dom'
import Nav from './Nav'
import '../css/Header.css'

const Header = () => {

    return (
        <header role="banner">

            <Link to="/" className="logo">
                Knit Mine
            </Link>

            <Nav />

        </header>

    );

}

export default Header;