import React from "react";
import Cars from "../components/CarList/Cars";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LocationEntryForm from "../components/LocationEntryForm";
import "./Homepage.css";
import FareDisplay from "../components/FareDisplay";
import Map from "../components/Map";
import End from "../components/End";

function Homepage() {
  return (
    <div>
      <Header></Header>
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
          marginTop: "20px",
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
      <Footer></Footer>
    </div>
  );
}

export default Homepage;
