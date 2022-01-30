import React from "react";
import "./SingleCard.css";
import { FaCarAlt } from "react-icons/fa";
import ConfirmationModal from "../Modal";
import { checkEmptyvalues } from "../LocationEntryForm";
import { useContext } from "react";
import { BookingContext } from "../../context/BookingContext";
import { MapContext } from "../../context/MapContext";

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
        <div
          style={{
            position: "absolute",
            backgroundColor: "rgb(150, 224, 12)",
            right: "-5px",
            top: "-20px",
            borderRadius: "5px",
          }}
        >
          <p
            style={{
              width: "auto",
              marginTop: ".2rem",
              marginBottom: ".2rem",
              marginLeft: ".5rem",
              marginRight: ".5rem",
              fontWeight: "bold",
              fontSize: "14px",
            }}
          >
            Fare: <span style={{ fontSize: "18px" }}>₹{price}</span>/km
          </p>
        </div>
        <h4 className="cbody__name">{name}</h4>
        <div className="card-header">
          <img src={src} alt="rover" />
        </div>
        <div className="card-body">
          <p
            style={{
              marginBottom: ".7rem",
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
          <p
            style={{
              marginLeft: "auto",
              fontWeight: "bold",
              marginBottom: ".7rem",
            }}
          >
            Estimated Fare: ₹{Totalprice}
          </p>
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
            <p>AC</p>
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
