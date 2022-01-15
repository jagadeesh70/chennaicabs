import React from 'react'
import "./Header.css"
import logo from "../images/logo.png"
import { useContext } from 'react'
import {Context} from '../context/Context'
import { useNavigate } from 'react-router-dom'


function Header() {
    const {username}  = useContext(Context)
    const navigate = useNavigate()

    return (
        <div className='header-container'>
            <div></div>
            <div className='logo-container'>
                <img src={logo} alt="Chennai Cabs" className='header-logo' onClick={navigate("/")} />
                <div className='logo-name'>CHENNAI CABS</div>
            </div>
            
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
