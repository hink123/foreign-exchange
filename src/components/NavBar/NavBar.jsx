import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/favorites'>Favorites</Link>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
            <Link to='/logout'>Logout</Link>
        </div>
    )
}

export default NavBar;