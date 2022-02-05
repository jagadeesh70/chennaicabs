import React from "react";
import Cars from "../components/CarList/Cars";
import Footer from "../components/Footer";
import LocationEntryForm from "../components/LocationEntryForm";
import "./Homepage.css";
import FareDisplay from "../components/FareDisplay";
import Map from "../components/Map";
import End from "../components/End";
import dial from "../images/dial.png";
import Marquee from "react-fast-marquee";
import Offer from "../components/Offer";

function Homepage() {
  return (
    <>
      <div>
        <a href="https://play.google.com/store/apps/details?id=com.cabs.chennaicabs">
          <Marquee
            play={true}
            speed={40}
            style={{
              backgroundColor: "none",
              color: "white",
            }}
            gradient={false}
          >
            <div
              style={{
                fontWeight: "bolder",
                marginTop: "10px",
              }}
            >
              We are available at playstore now .{" "}
              <span style={{ color: "#ff7fe1", fontSize: "14px" }}>
                CLICK HERE
              </span>{" "}
              to download our App Now...
            </div>
          </Marquee>
        </a>
        <Offer />
        <div
          className="fr"
          style={{
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            paddingTop: "1rem",
            fontSize: "34px",
            fontWeight: "bold",
            display: "flex",
          }}
          className="q-Quotes"
        >
          <div>
            <p className="main-quote">
              Book a Taxi to your
              <span className="green-quote"> destination</span> with{" "}
            </p>
            <p className="green-quote">CHENNAI CABS</p>
          </div>
        </div>

        <div className="entry-container">
          <LocationEntryForm />
          <FareDisplay />
          <Map></Map>
        </div>
        <Cars />
        <End />
        <a href="tel:+919551114411">
          <img src={dial} className="dial-float" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=+919841346080"
          className="float"
          target="_blank"
        >
          <i className="fa fa-whatsapp my-float"></i>
        </a>
        <Footer></Footer>
      </div>
    </>
  );
}

export default Homepage;
