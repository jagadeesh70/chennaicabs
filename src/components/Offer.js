import React from "react";
import offer from "../images/offer.png";
import "./Offer.css";

function Offer() {
  return (
    <div
      className="blink-image"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "10px",
      }}
    >
      <img src={offer} style={{ width: "60px", height: "60px" }} />
      <span
        style={{
          color: "white",
          fontFamily: "serif",
          fontSize: "22px",
          fontWeight: "bolder",
        }}
      >
        Toll Charges - FREE
      </span>
      <img src={offer} style={{ width: "50px", height: "50px" }} />
    </div>
  );
}

export default Offer;
