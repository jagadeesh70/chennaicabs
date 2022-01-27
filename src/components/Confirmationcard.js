import React, { useState } from "react";
import { FaCarAlt } from "react-icons/fa";
import { Context } from "../context/Context";
import { useContext } from "react";
import { MapContext } from "../context/MapContext";
import { BookingContext } from "../context/BookingContext";
function Confirmationcard({
  images,
  name,
  baseprice,
  totalprice,
  func,
  extraCharges,
  driverfee,
}) {
  const { sendOtp, setBookingConfirmed } = useContext(Context);
  const { pickup, drop, distance } = useContext(MapContext);
  const { pickDate, dropDate, pickTime, triptype } = useContext(BookingContext);
  let pickupDate = new Date(pickDate).toLocaleDateString();
  let pickupTime = new Date(pickTime).toLocaleTimeString();
  let dropdownDate = new Date(dropDate).toLocaleDateString();

  const handleClick = (func) => {
    func();
    sendOtp();
    setBookingConfirmed(true);
  };
  return (
    <div
      style={{
        padding: "1rem",
      }}
      className="ccard__container"
    >
      <div className="fc">
        <div
          style={{
            padding: "1rem",
            background: "#C4C4C4",
            width: "fit-content",
            borderRadius: "1rem",
            marginBottom: "1rem",
            fontWeight: "bold",
          }}
        >
          Booking summary
        </div>
        <div className="fr">
          <img
            style={{
              height: "4rem",
              width: "auto",
              marginRight: "1rem",
            }}
            src={images}
            alt=""
          />
          <div className="data__pane">
            <p className="dp__options">cab type: {name}</p>
            <p className="dp__options">journey type: oneway</p>
            <p className="dp__options">from: {pickup} </p>
            <p className="dp__options">to: {drop} </p>
            <p className="dp__options">pickup date:{pickupDate} </p>
            <p className="dp__options">return date: --- </p>
            <p className="dp__options">base fare: ₹{baseprice}</p>
            <p className="dp__options">driver fee: ₹{driverfee} </p>
            <p className="dp__options">total fare: ₹{totalprice} </p>
            <p className="dp__options">distance: {distance} </p>
            <p className="dp__options">Extra km charges: ₹{extraCharges}/km </p>
          </div>
        </div>
      </div>
      <button
        style={{ margin: ".5rem 0" }}
        id="submit-btn"
        onClick={() => handleClick(func)}
      >
        Book Now
      </button>
    </div>
  );
}

export default Confirmationcard;
