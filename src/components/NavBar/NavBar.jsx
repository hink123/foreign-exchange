import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    let nav = props.user ?
    <div className='navbar'>
        <Link to='/' className="navbar-item navbar-start">Home</Link>
        <Link to='/favorites' className="navbar-item">Favorites</Link>
        <Link to='/logout' className="navbar-item">Logout</Link>
    </div>
    :
    <div className="navbar">
        <Link to='/' className="navbar-item navbar-start">Home</Link>
        <Link to='/login' className="navbar-item">>Login</Link>
        <Link to='/signup' className="navbar-item">>Signup</Link>
    </div>
    return (
        <div>
            {nav}
        </div>
    )
}

export default NavBar;