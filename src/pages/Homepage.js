import React from "react";
import Cars from "../components/CarList/Cars";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LocationEntryForm from "../components/LocationEntryForm";
import "./Homepage.css";
import { BookingContextProvider } from "../context/BookingContext";
import FareDisplay from "../components/FareDisplay";
import Map from "../components/Map";

function Homepage() {
  return (
    <div>
      <Header></Header>
      <div
        className="fr"
        style={{
          position: "absolute",
          justifyContent: "center",
          width: "100%",
          paddingTop: "1rem",
          textAlign: "center",
          fontSize: "34px",
          fontWeight: "bold",
        }}
        className="q-Quotes"
      >
        <p className="main-quote">
          Book a City Taxi to your
          <span className="green-quote"> destination</span> in{" "}
          <span className="green-quote">town</span>
        </p>
        <p className="main-quote">
          <span className="green-quote">Choose</span> from a range of{" "}
          <span className="green-quote">categories</span> and{" "}
          <span className="green-quote">prices</span>
        </p>
      </div>

      <div className="entry-container">
        <LocationEntryForm />
        <FareDisplay />
        <Map></Map>
      </div>
      <Cars />
      <Footer></Footer>
    </div>
  );
}

export default Homepage;
