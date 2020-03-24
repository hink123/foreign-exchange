import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    let nav = props.user ?
    <div className='navbar is-dark'>
        <div className='navbar-brand'>
            <Link to='/' className="navbar-item">Home</Link>
            <button className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarDrop">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
            </button>
        </div>
        <div id="navbarDrop" className="navbar-menu">
            <Link to='/favorites' className="navbar-item navbar-right">Favorites</Link>
            <Link to='' className="navbar-item navbar-right" onClick={props.handleLogout}>Logout</Link>
            <div className="navbar-item navbar-right">{props.user.name}</div>
        </div>
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