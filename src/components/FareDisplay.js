import React from "react";
import { FaCarAlt } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { RiArrowUpDownLine } from "react-icons/ri";
import { RiBuildingLine } from "react-icons/ri";
import "./FareDisplay.css";

function FareDisplay() {
  return (
    <div className="form__container">
      <div className="fare__topbar fc">
        <div className="fare__topbar__location1 fr">
          <FiMapPin size="1.6rem" className="ft__icons" color="#15FE1E" />
          <p>Chennai</p>
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
          <p>Bengaluru</p>
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
              Car name----------till this
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
            <p>Sedan</p>
          </div>
          <p>4 person</p>
          <p>AC</p>
        </div>
      </div>
      <div className="fare__bottombar fc">
        <div className="fb__row1 fr">
          <div className="fb__row1__col1 fc">
            <p>Pickup Date:</p>
            <p>Return Date:</p>
          </div>
          <div className="fb__row1__col2 fc">
            <p>Pick Up Time:</p>
            <p>Distance:</p>
          </div>
        </div>
        <div className="fb__row2">Total Fare:</div>
      </div>
    </div>
  );
}

export default FareDisplay;
