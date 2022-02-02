import React from "react";
import "./SingleCard.css";
import { FaCarAlt } from "react-icons/fa";
import ConfirmationModal from "../Modal";
import { checkEmptyvalues } from "../LocationEntryForm";
import { useContext } from "react";
import { BookingContext } from "../../context/BookingContext";
import { MapContext } from "../../context/MapContext";
import { Tooltip } from "@mui/material";
import { FaSnowflake } from "react-icons/fa";

function SingleCard({ src, name, price, type, npersons, Totalprice, cartype }) {
  const { setCartype } = useContext(BookingContext);
  const { distance } = useContext(MapContext);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    if (checkEmptyvalues("from locentryform")) {
      return;
    }
    setOpen(true);
  };
  const handleClose = (setisconfirmed, setAuthstate, setotpsent) => {
    setisconfirmed(false);
    setAuthstate(false);
    setOpen(false);
    setotpsent(false);
  };
  const handleCar = (cartype) => {
    handleOpen();
    setCartype(cartype);
  };
  return (
    <>
      <ConfirmationModal
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
        handleOpen={handleOpen}
        cartype={cartype}
      />
      <div className="card">
        <h3 className="cbody__name" style={{ marginTop: "10px" }}>
          {name}
        </h3>
        <div
          style={{
            position: "absolute",
            backgroundColor: "rgb(150, 224, 12)",
            right: "3px",
            top: "30px",
            borderRadius: "5px",
            marginTop: "8px",
          }}
        >
          <p
            style={{
              width: "auto",
              marginTop: ".1rem",
              marginBottom: ".1rem",
              marginLeft: ".5rem",
              marginRight: ".5rem",
              fontWeight: "bold",
              fontSize: "12px",
            }}
          >
            Fare: <span style={{ fontSize: "18px" }}>₹{price}</span>/km
          </p>
        </div>
        <div className="card-header">
          <img src={src} alt="rover" />
        </div>
        <div className="card-body">
          <p
            style={{
              marginBottom: ".7rem",
              marginLeft: "auto",
            }}
          >
            Distance: {distance} km
          </p>
          {/* <p
            style={{
              marginLeft: "auto",
              fontWeight: "bold",
              marginBottom: ".7rem",
            }}
          >
            Price: ₹{price}/km
          </p> */}
          <div
            style={{
              marginLeft: "auto",
              fontWeight: "bold",
              marginBottom: ".7rem",
              justifyContent: "center",
              display: "flex",
              fontSize: "18px",
            }}
          >
            <Tooltip
              title={`Total fare may change at the end of your trip if the distance travelled exceeds the estimated distance ${
                distance ? distance + "km" : ""
              }`}
              arrow
            >
              <i className="icon-info-sign info"></i>
            </Tooltip>
            Estimated Fare: ₹{Totalprice}
          </div>
          <p
            style={{
              marginLeft: "35px",
              fontSize: "11px",
              marginBottom: ".5rem",
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
            <p>{npersons} person</p>
            <div className="fare__middlebar__row2__col1 fr">
              <FaSnowflake
                style={{
                  marginRight: ".3rem",
                }}
              />
              <p>AC</p>
            </div>
          </div>
          <button
            id="submit-btn"
            onClick={() => {
              handleCar(cartype);
            }}
          >
            Book Now
          </button>
        </div>
      </div>
    </>
  );
}

export default SingleCard;
