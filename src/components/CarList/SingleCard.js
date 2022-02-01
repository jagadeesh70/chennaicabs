import React from "react";
import "./SingleCard.css";
import { FaCarAlt } from "react-icons/fa";
import { BsFillInfoCircleFill } from "react-icons/bs";
import ConfirmationModal from "../Modal";
import { checkEmptyvalues } from "../LocationEntryForm";
import { useContext } from "react";
import { BookingContext } from "../../context/BookingContext";

function SingleCard({ src, name, price, type, npersons, Totalprice, cartype }) {
  const { setCartype, distance } = useContext(BookingContext);
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
        <h4 className="cbody__name">{name}</h4>
        <p
          style={{
            width: "fit-content",
            marginLeft: "auto",
            marginTop: ".5rem",
            marginRight: ".5rem",
            fontWeight: "bold",
          }}
        >
          Fare: ₹{price}/km
        </p>
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
          <p
            style={{
              marginLeft: "auto",
              fontWeight: "bold",
              marginBottom: ".7rem",
              display: "flex",
            }}
          >
            <BsFillInfoCircleFill
              title="Total fare may change at the end of your trip if the distance travelled exceeds the estimated distance 347 km"
              style={{
                margin: "auto .5rem",
              }}
              color="grey"
            />
            Estimated Fare: ₹{Totalprice}
          </p>
          <p
            style={{
              fontSize: "14px",
              marginBottom: ".7rem",
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
