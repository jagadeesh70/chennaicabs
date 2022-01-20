import React, { useContext, useEffect } from "react";
import { FaCarAlt } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { RiArrowUpDownLine } from "react-icons/ri";
import { RiBuildingLine } from "react-icons/ri";
import "./FareDisplay.css";
import { MapContext } from "../context/MapContext";
import { BookingContext } from "../context/BookingContext";

function FareDisplay() {
  const { pickup, drop, distance } = useContext(MapContext);
  const { totalFare, pickDate, dropDate, pickTime, vehicle } =
    useContext(BookingContext);

  const pick = () => {
    if (pickup) {
      return <p>{pickup}</p>;
    } else {
      return <p>Enter the pick up Location</p>;
    }
  };
  let pickupDate = new Date(pickDate).toLocaleDateString();
  let pickupTime = new Date(pickTime).toLocaleTimeString();
  let dropdownDate = new Date(dropDate).toLocaleDateString();
  return (
    <div className="form__container">
      <div className="fare__topbar fc">
        <div className="fare__topbar__location1 fr">
          <FiMapPin size="1.6rem" className="ft__icons" color="#15FE1E" />
          {pick()}
        </div>
        <div style={{ margin: ".3rem 0" }} className="fare__topbar__mlogo">
          <RiArrowUpDownLine
            size="1.6rem"
            className="ft__icons"
            color="#15FE1E"
          />
        </div>
        <div className="fare__topbar__location2 fr">
          <RiBuildingLine size="1.6rem" className="ft__icons" color="#15FE1E" />
          {drop ? <p>{drop}</p> : <p>Enter the Destination Location</p>}
        </div>
      </div>
      <p
        style={{
          padding: ".5rem 0",
          borderBottom: ".2rem solid #15FE1E",
          marginBottom: ".8rem",
        }}
      >
        Ride Details
      </p>
      <div className="fare__middlebar fc">
        <div className="fare__middlebar__row1 fr" style={{ width: "100%" }}>
          <div className="fm__col1">
            <FaCarAlt size={"2rem"} />
          </div>
          <div className="fm__col2 fc">
            <div
              className="fm__col2__row1"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            >
              {vehicle ? (
                <strong>{vehicle}</strong>
              ) : (
                <strong>Choose mode of Travel</strong>
              )}
            </div>
            <div className="fm__col2__row2" style={{ marginLeft: "auto" }}>
              price per KM
            </div>
          </div>
        </div>
        <div className="fare__middlebar__row2 fr">
          <div className="fare__middlebar__row2__col1 fr">
            <FaCarAlt
              style={{
                marginRight: ".3rem",
              }}
            />
            <b>Sedan</b>
          </div>
          <b>4 person</b>
          <p>AC</p>
        </div>
      </div>
      <div className="fare__bottombar fc">
        <div className="fb__row1 fr">
          <div className="fb__row1__col1 fc">
            {pickDate ? (
              <p>
                Pickup Date: <strong>{pickupDate}</strong>
              </p>
            ) : (
              <p>Pickup Date:</p>
            )}
            {dropDate ? (
              <p>
                Return Date: <strong>{dropdownDate}</strong>
              </p>
            ) : (
              <p>Return Date:</p>
            )}
          </div>
          <div className="fb__row1__col2 fc">
            {pickTime ? (
              <p>
                Pick Up Time: <strong>{pickupTime}</strong>
              </p>
            ) : (
              <p>Pick Up Time:</p>
            )}
            {distance ? (
              <p>
                Distance: <strong>{distance} km</strong>
              </p>
            ) : (
              <p>Distance: -</p>
            )}
          </div>
        </div>
        <div className="fb__row2">
          {totalFare ? (
            <p>
              Total Fare: <strong>₹{totalFare}</strong>
            </p>
          ) : (
            <p>Total Fare: -</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default FareDisplay;
