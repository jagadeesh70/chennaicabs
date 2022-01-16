import React from "react";
import Cars from "../components/CarList/Cars";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LocationEntryForm from "../components/LocationEntryForm";
import Maps from "../components/Maps";
import "./Homepage.css";
import { BookingContextProvider } from "../context/BookingContext";

function Homepage() {
  return (
    <div>
      <Header></Header>
      <div className="entry-container">
        <LocationEntryForm />
        <Maps></Maps>
      </div>
      <Cars />
      <Footer></Footer>
    </div>
  );
}

export default Homepage;
