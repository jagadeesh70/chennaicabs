import React from 'react'
import "./Footer.css"
import logo from "../images/logo.png"
function Footer() {
    return (
        <div className='footer-container'>
            <img src={logo} alt="Chennai cabs" className='footer-logo' />
            <div className="tc">
                <div>Terms & conditions</div>
                <div>Privacy Policy</div>
            </div>
            <div className="socialmedia">
            <i class="fab fa-facebook-square fa-2x"></i>
            <i class="fab fa-instagram-square fa-2x"></i>
            <i class="fab fa-twitter-square fa-2x"></i>
            <i class="fab fa-youtube fa-2x"></i>
            </div>
        </div>
    )
}

export default Footer
