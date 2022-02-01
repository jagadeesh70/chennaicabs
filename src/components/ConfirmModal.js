import React from "react";
import { useContext } from "react";
import { MapContext } from "../context/MapContext";
import Button from "@mui/material/Button";
import { FaCarAlt } from "react-icons/fa";
import { Context } from "../context/Context";

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

  return (
    <>
      <div
        style={{
          justifyContent: "flex-end",
          paddingRight: "1rem",
          width: "300px",
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
      <h4 className="cbody__name">{name}</h4>
      <div className="card-header">
        <img src={src} alt="rover" />
      </div>
      <div className="card-body">
        <p
          style={{
            margin: ".7rem 0",
          }}
        >
          Distance: {distance} km
        </p>

        <p
          style={{
            marginLeft: "auto",
            fontWeight: "bold",
            marginBottom: ".2rem",
          }}
        >
          Estimated Fare: ₹{Totalprice}
        </p>
        <p
          style={{
            marginLeft: "8rem",
            marginBottom: ".7rem",
            fontSize: ".9rem",
          }}
        >
          (up to 288 km)
        </p>
        <p
          style={{
            marginLeft: "auto",
            fontWeight: "bold",
            marginBottom: ".7rem",
          }}
        >
          Base Fare: ₹700
        </p>
        <p
          style={{
            marginLeft: "auto",
            fontWeight: "bold",
            marginBottom: ".7rem",
          }}
        >
          Driver allowance: ₹{driverfee}
        </p>
        <p
          style={{
            fontSize: "12px",
            marginBottom: ".7rem",
            color: "red",
          }}
        >
          *Toll/Parking/Permit charges extra*
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
