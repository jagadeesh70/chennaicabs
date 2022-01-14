import React from "react";
import Cars from "../components/CarList/Cars";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LocationEntryForm from "../components/LocationEntryForm";
import Maps from "../components/Maps";

function Homepage() {
  return (
    <div>
      <Header></Header>
      <LocationEntryForm />
      {/* <Maps></Maps> */}
      <Cars />
      <Footer></Footer>
    </div>
  );
}

export default Homepage;
