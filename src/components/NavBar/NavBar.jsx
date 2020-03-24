import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    let nav = props.user ?
    <div className='navbar is-dark'>
        <Link to='/' className="navbar-item navbar-start">Home</Link>
        <Link to='/favorites' className="navbar-item">Favorites</Link>
        <Link to='' className="navbar-item" onClick={props.handleLogout}>Logout</Link>
        <div className="navbar-end">{props.user.name}</div>
    </div>
    :
    <div className="navbar is-dark">
        <Link to='/' className="navbar-item navbar-start">Home</Link>
        <Link to='/login' className="navbar-item">Login</Link>
        <Link to='/signup' className="navbar-item">Signup</Link>
    </div>
    return (
        <div>
            {nav}
        </div>
    )
}

export default NavBar;