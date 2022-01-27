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
          style={{
            width: "200px",
            height: "80px",
          }}
          alt="Get it on Google Play"
          src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
        />
      </a>
      <div className="ft__1">
        Terms & conditions &nbsp; &nbsp; &nbsp;Privacy Policy
      </div>
      <div className="socialmedia">
        <a
          href="https://m.facebook.com/Chennai-Cabs-2002469283178934/?tsid=0.3134908302767774&source=result"
          style={{ textDecoration: "none" }}
        >
          <i className="fab fa-facebook-square fa-2x"></i>
        </a>
        <a href="https://www.instagram.com/chennaicabs/">
          <i className="fab fa-instagram-square fa-2x"></i>
        </a>
        <a href="http://">
          <i className="fab fa-twitter-square fa-2x"></i>
        </a>
        <a href="https://youtube.com/channel/UC0iKI98LLYQB6pcuWZmh7Og">
          <i className="fab fa-youtube fa-2x"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
