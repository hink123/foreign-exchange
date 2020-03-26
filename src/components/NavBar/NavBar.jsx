import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    let nav = props.user ?
    <div className='navbar is-dark'>
        <div className='navbar-brand'>
            <Link to='/' className="navbar-item navbar-text">Foreign Exchange</Link>
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
            <div className='navbar-item navbar-end'>
                <Link to='' className=" navbar-text" onClick={props.handleLogout}>Logout</Link>
            </div>
            <div className="navbar-item navbar-name">{props.user.name}</div>
        </div>
    </div>
    :
    <div className="navbar is-dark">
        <div className='navbar-brand'>
            <Link to='/' className="navbar-item navbar-text">Foreign Exchange</Link>
            <button className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarDrop">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
            </button>
        </div>
        <div id='navbarDrop' className="navbar-menu">
            <div className='navbar-item navbar-end'>
                <Link to='/login' className="navbar-text">Login</Link>
            </div>
            <div className='navbar-item'>
                <Link to='/signup' className="navbar-text">Signup</Link>
            </div>
        </div>
    </div>
    return (
        <div>
            {nav}
        </div>
    )
}

export default NavBar;