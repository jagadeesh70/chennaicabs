import React from "react";
import { useContext } from "react";
import { MapContext } from "../context/MapContext";
import Button from "@mui/material/Button";
import { FaCarAlt } from "react-icons/fa";
import { Context } from "../context/Context";
import { BookingContext } from "../context/BookingContext";

function ConfirmModal({
  src,
  name,
  Totalprice,
  type,
  handleClose,
  setisconfirmed,
  numofper,
  driverfee,
}) {
  const { pickup, drop, distance, fromId, toId, fromLocation, toLocation } =
    useContext(MapContext);
  const { setAuthstate, setotpsent } = useContext(Context);
  const { DaysLeft, triptype } = useContext(BookingContext);
  let style1 = {
    marginLeft: "auto",
    fontWeight: "bold",
    marginTop: ".7rem",
  };
  let style2 = {
    margin: ".2rem",
    fontSize: ".9rem",
    fontWeight: "500",
    color: "grey",
  };

  return (
    <>
      <div
        style={{
          justifyContent: "flex-end",
        }}
        className="fr"
      >
        <button
          onClick={() => handleClose(setisconfirmed, setAuthstate, setotpsent)}
          style={{
            background: "none",
            border: "none",
            padding: ".5rem",
            color: "red",
            fontWeight: "bold",
          }}
        >
          X
        </button>
      </div>
      <div
        className="card-header"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <h4 className="cbody__name">{name}</h4>
        <img src={src} alt="rover" style={{ height: "140px" }} />
      </div>
      <div className="card-body">
        <p>Distance: {distance} km</p>
        <p style={style1}>Driver Fee: ₹{driverfee} /day</p>
        <p
          style={{
            marginLeft: "11.7rem",
            fontSize: ".9rem",
            fontWeight: "500",
            color: "grey",
          }}
        >
          (up to 288 km)
        </p>
        <p style={style1}>
          Base Fare: ₹
          {triptype == "One Way Trip"
            ? Totalprice - driverfee
            : Totalprice - driverfee * (DaysLeft() + 1)}
        </p>
        <p style={style1}>Estimated Fare: ₹{Totalprice}</p>
        <p style={style2}>
          Excludes toll costs, parking, permits and state tax
        </p>
        <p style={style2}>₹13/km will be charged for extra km</p>
        <p style={style2}>
          Extra fare may apply if you don`t end trip at madurai
        </p>
        <p
          style={{
            fontSize: "12px",
            margin: ".7rem 0",
            color: "red",
          }}
        >
          *Toll Charges - FREE/Parking/Permit charges extra*
        </p>
        <div
          style={{ width: "100%", marginBottom: ".5rem" }}
          className="fare__middlebar__row2 fr"
        >
          <div className="fare__middlebar__row2__col1 fr">
            <FaCarAlt
              style={{
                marginRight: ".3rem",
              }}
            />
            <p>{type}</p>
          </div>
          <p>{numofper} person</p>
          <p>AC</p>
        </div>
      </div>
      <div className="fr">
        <Button
          variant="text"
          style={{
            marginLeft: "auto",
            marginRight: ".5rem",
          }}
          onClick={() => {
            setisconfirmed(true);
          }}
        >
          Confirm
        </Button>
        <Button
          onClick={() => handleClose(setisconfirmed, setAuthstate, setotpsent)}
          variant="text"
          color="error"
        >
          Cancel
        </Button>
      </div>
    </>
  );
}

export default ConfirmModal;
