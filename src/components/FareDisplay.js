import React, { useContext, useEffect } from "react";
import { FiMapPin } from "react-icons/fi";
import { RiArrowUpDownLine } from "react-icons/ri";
import { RiBuildingLine } from "react-icons/ri";
import "./FareDisplay.css";
import { MapContext } from "../context/MapContext";
import { BookingContext } from "../context/BookingContext";

function FareDisplay() {
  const { pickup, drop, distance } = useContext(MapContext);
  const { pickDate, dropDate, pickTime, triptype } = useContext(BookingContext);

  const pick = () => {
    if (pickup) {
      return (
        <p title={pickup} className="faredis__locs">
          {pickup}
        </p>
      );
    } else {
      return (
        <p title="pick up Location" className="faredis__locs">
          Pick Up Location
        </p>
      );
    }
  };
  let pickupDate = new Date(pickDate).toLocaleDateString();
  let pickupTime = new Date(pickTime).toLocaleTimeString();
  let dropdownDate = new Date(dropDate).toLocaleDateString();
  return (
    <div id="fare__container" className="form__container">
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
          {drop ? (
            <p title={drop} className="faredis__locs">
              {drop}
            </p>
          ) : (
            <p title="Destination Location" className="faredis__locs">
              Destination Location
            </p>
          )}
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
            {triptype === "Round Trip" ? (
              dropDate ? (
                <p>
                  Return Date: <strong>{dropdownDate}</strong>
                </p>
              ) : (
                <p>Return Date:</p>
              )
            ) : (
              <></>
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
      </div>
    </div>
  );
}

export default FareDisplay;
