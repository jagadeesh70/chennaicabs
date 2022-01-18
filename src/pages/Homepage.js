import React from "react";
import Cars from "../components/CarList/Cars";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LocationEntryForm from "../components/LocationEntryForm";
import Maps from "../components/Maps";
import "./Homepage.css";
import { BookingContextProvider } from "../context/BookingContext";
import FareDisplay from "../components/FareDisplay";
import Map from "../components/Map";

function Homepage() {
  return (
    <div>
      <Header></Header>
      <div className="entry-container">
        <LocationEntryForm />
        <Map></Map>
        <FareDisplay />
      </div>
      <Cars />
      <Footer></Footer>
    </div>
  );
}

export default Homepage;
