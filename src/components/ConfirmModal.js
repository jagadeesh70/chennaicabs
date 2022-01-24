import React from "react";
import { useContext } from "react";
import { MapContext } from "../context/MapContext";

function ConfirmModal() {
  const { pickup, drop, distance, fromId, toId, fromLocation, toLocation } =
    useContext(MapContext);
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
      <div className="card-header">
        <img src={temp} alt="rover" />
      </div>
      <div className="card-body">
        <h4 className="cbody__name">name</h4>
        <p
          style={{
            marginBottom: ".7rem",
          }}
        >
          Distance: {distance} km
        </p>
        <p
          style={{
            fontSize: "14px",
            marginBottom: ".7rem",
          }}
        >
          Extra Toll at actuals + Extra Permit charges applicable.
        </p>
        <p
          style={{
            marginLeft: "auto",
            fontWeight: "bold",
            marginBottom: ".7rem",
          }}
        >
          Price: ₹/km
        </p>
        <p
          style={{
            marginLeft: "auto",
            fontWeight: "bold",
            marginBottom: ".7rem",
          }}
        >
          Total Price: ₹/km
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
            <p>type</p>
          </div>
          <p>person</p>
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
