import React from "react";
import "./SingleCard.css";
import { FaCarAlt } from "react-icons/fa";
import ConfirmationModal from "../Modal";
import { checkEmptyvalues } from "../LocationEntryForm";
import { useContext } from "react";
import { BookingContext } from "../../context/BookingContext";
import Context from "../../context/Context";

function SingleCard({ src, name, price, type, npersons, Totalprice, cartype }) {
  const { setCartype } = useContext(BookingContext);
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
      />
      <div className="card">
        <div className="card-header">
          <img src={src} alt="rover" />
        </div>
        <div className="card-body">
          <h4 className="cbody__name">{name}</h4>
          <p
            style={{
              marginBottom: ".7rem",
            }}
          >
            Distance:kms
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
            Price: ₹{price}/km
          </p>
          <p
            style={{
              marginLeft: "auto",
              fontWeight: "bold",
              marginBottom: ".7rem",
            }}
          >
            Total Price: ₹{Totalprice}/km
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
