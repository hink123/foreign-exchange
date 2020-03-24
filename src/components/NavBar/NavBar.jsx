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
            <div className="navbar-item">
                <Link to='/favorites' className='navbar-text'>Favorites</Link>
            </div>
            <Link to='' className="navbar-item navbar-text" onClick={props.handleLogout}>Logout</Link>
            <div className="navbar-item navbar-end navbar-text">{props.user.name}</div>
        </div>
    </div>
    :
    <div className="navbar is-dark">
        <div className='navbar-brand'>
            <Link to='/' className="navbar-item navbar-text">Home</Link>
            <button className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarDrop">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
            </button>
        </div>
        <div id='navbarDrop' className="navbar-menu">
            <Link to='/login' className="navbar-item navbar-text">Login</Link>
            <Link to='/signup' className="navbar-item navbar-text">Signup</Link>
        </div>
    </div>
    return (
        <div>
            {nav}
        </div>
    )
}

export default NavBar;