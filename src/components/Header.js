import React from 'react'
import "./Header.css"
import logo from "../images/logo.png"

function Header() {
    return (
        <div className='header-container'>
            <img src={logo} alt="Chennai Cabs" className='header-logo' />
            <div className="main-container">
            <div className="header">Home</div>
            <div className="header">About</div>
            <div className="header">Contact us</div>
            <button type='submit' className='signin-button'>Sign In</button>
        </div>
        </div>
    )
}

export default Header
