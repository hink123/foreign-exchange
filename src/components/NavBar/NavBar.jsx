import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/'>Favorites</Link>
        </div>
    )
}

export default NavBar;