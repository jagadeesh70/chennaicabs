import React from "react";
import "./Footer.css";
import logo from "../images/logo.png";
function Footer() {
  return (
    <div className="footer-container">
      <img src={logo} alt="Chennai cabs" className="footer-logo" />
      <a href="https://play.google.com/store/apps/details?id=com.cabs.chennaicabs&hl=en_IN&gl=US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
        <img
          className="footer-logo"
          style={{ width: "200px", height: "80px", "margin-right": "60px" }}
          alt="Get it on Google Play"
          src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
        />
      </a>
      <div className="tc">
        <div>Terms & conditions</div>
        <div>Privacy Policy</div>
      </div>
      <div className="socialmedia">
        <i className="fab fa-facebook-square fa-2x"></i>
        <i className="fab fa-instagram-square fa-2x"></i>
        <i className="fab fa-twitter-square fa-2x"></i>
        <i className="fab fa-youtube fa-2x"></i>
      </div>
    </div>
  );
}

export default Footer;
