import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {

    state={
        dropDown: false
    }

    toggleDropDown = () => {
        this.setState({
            dropDown: !this.state.dropDown
        })
    }
    render() {
        let nav = this.props.user ?
        <div className='navbar'>
            <div className='navbar-brand'>
                <div className='navbar-item'>
                    <Link to='/' className="navbar-text" onClick={this.props.handleNewSearch}>Foreign Exchange</Link>
                </div>
                <button className={this.state.dropDown ? "navbar-burger burger is-active" : "navbar-burger burger"} aria-label="menu" aria-expanded="false" data-target="navbarDrop" onClick={this.toggleDropDown}>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                </button>
            </div>
            <div id="navbarDrop" className={this.state.dropDown ? "navbar-menu is-active" : "navbar-menu"}>
                <div className="navbar-item">
                    <Link to='/favorites' onClick={this.props.handleNewSearch} className='navbar-text'>Favorites</Link>
                </div>
                <div className='navbar-item navbar-end'>
                    <Link to='' className="navbar-text" onClick={this.props.handleLogout}>Logout</Link>
                </div>
                <div className="navbar-item navbar-name">{this.props.user.name}</div>
            </div>
        </div>
        :
        <div className="navbar">
            <div className='navbar-brand'>
                <div className='navbar-item'>
                    <Link to='/' className="navbar-text" onClick={this.props.handleNewSearch}>Foreign Exchange</Link>
                </div>
                <button className={this.state.dropDown ? "navbar-burger burger is-active" : "navbar-burger burger"} aria-label="menu" aria-expanded="false" data-target="navbarDrop" onClick={this.toggleDropDown}>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                </button>
            </div>
            <div id='navbarDrop' className={this.state.dropDown ? "navbar-menu is-active" : "navbar-menu"}>
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
}

export default NavBar;