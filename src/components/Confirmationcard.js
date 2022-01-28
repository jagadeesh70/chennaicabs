import React, { useState } from "react";
import { FaCarAlt } from "react-icons/fa";
import { Context } from "../context/Context";
import { useContext } from "react";
import { MapContext } from "../context/MapContext";
import { BookingContext } from "../context/BookingContext";
import "./Confirmationcard.css";
import { GrLocation } from "react-icons/gr";
import { RiBuildingLine } from "react-icons/ri";
import { AiOutlineCalendar } from "react-icons/ai";
function Confirmationcard({
  name,
  baseprice,
  totalprice,
  extraCharges,
  driverfee,
  returndate,
  func,
}) {
  const { sendOtp, setBookingConfirmed } = useContext(Context);
  const { pickup, drop, distance } = useContext(MapContext);
  const { pickDate, dropDate, pickTime, triptype } = useContext(BookingContext);
  let pickupDate = new Date(pickDate).toISOString().split("T")[0];

  const handleClick = (func) => {
    func();
    sendOtp();
    setBookingConfirmed(true);
  };
  return (
    <div className="ccard__container">
      <h2>Booking summary</h2>
      <div
        style={{
          borderBottom: "1px solid black",
        }}
        className="ccard__r1 fc"
      >
        <div className="fr">
          <GrLocation className="ccard__icon" /> <p>From: {pickup}</p>
        </div>
        <div className="fr">
          <RiBuildingLine className="ccard__icon" /> <p>To: {drop}</p>
        </div>

        <div className="fr">
          <AiOutlineCalendar className="ccard__icon" />
          <p style={{ whiteSpace: "nowrap" }}>Pickup Date: {pickupDate} </p>
        </div>
        <div className="fr">
          <AiOutlineCalendar className="ccard__icon" />
          <p style={{ whiteSpace: "nowrap" }}>Return Date: {returndate} </p>
        </div>
      </div>
      <div
        style={{
          borderBottom: "1px solid black",
        }}
        className="ccard__r1 fc"
      >
        <p>cab type: {name}</p>
        <p>journey type:{triptype}</p>
        <p>base fare: ₹ {baseprice}</p>
        <p>driver fee: ₹ {driverfee}</p>
      </div>
      <div className="ccard__r1 fc">
        <p>distance: {distance} km</p>
        <p>Extra kilometer charges: ₹ {extraCharges}/km</p>
        <h4 style={{ marginLeft: "auto" }}>Total fare: ₹{totalprice}</h4>
      </div>
      <div
        style={{
          width: "fit-content",
          display: "flex",
          alignItems: "center",
          padding: "1rem",
          textAlign: "center",
          justifyContent: "center",
          fontWeight: "unset",
        }}
        id="submit-btn"
        onClick={() => handleClick(func)}
      >
        Book now
      </div>
    </div>
  );
}

export default Confirmationcard;
