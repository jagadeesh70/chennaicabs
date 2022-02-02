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
        <p
          style={{
            marginBottom: ".7rem",
          }}
        >
          Distance: {distance} km
        </p>
        <p
          style={{
            marginLeft: "auto",
            fontWeight: "bold",
            marginBottom: ".7rem",
          }}
        >
          Driver Fee: ₹{driverfee} /km
        </p>
        <p
          style={{
            marginLeft: "auto",
            fontWeight: "bold",
            marginBottom: ".7rem",
          }}
        >
          Total Price: ₹{Totalprice} /km
        </p>
        <p
          style={{
            fontSize: "12px",
            marginBottom: ".7rem",
            color: "red",
          }}
        >
          Extra Toll at actuals + Extra Permit charges applicable.
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
