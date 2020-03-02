import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    let nav = props.user ?
    <div>
        <Link to='/'>Home</Link>
        <Link to='/favorites'>Favorites</Link>
        <Link to='/logout'>Logout</Link>
    </div>
    :
    <div>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/signup'>Signup</Link>
    </div>
    return (
        <div>
            {nav}
        </div>
    )
}

export default NavBar;