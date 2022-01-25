import React from "react";
import { FaCarAlt } from "react-icons/fa";
import { Context } from "../context/Context";
import { useContext } from "react";

function Confirmationcard({
  images,
  name,
  distance,
  baseprice,
  totalprice,
  cartype,
  nperson,
  func,
}) {
  const { sendOtp } = useContext(Context);
  const handleClick = (func) => {
    func();
    sendOtp();
  };
  return (
    <div
      style={{
        padding: "1rem",
      }}
      className="ccard__container"
    >
      <div className="fc">
        <div
          style={{
            padding: "1rem",
            background: "#C4C4C4",
            width: "fit-content",
            borderRadius: "1rem",
            marginBottom: "1rem",
            fontWeight: "bold",
          }}
        >
          Booking summary
        </div>
        <div className="fr">
          <img
            style={{
              height: "4rem",
              width: "auto",
              marginRight: "1rem",
            }}
            src={images}
            alt=""
          />
          <div className="data__pane">
            <p className="dp__options">cab type: cab names</p>
            <p className="dp__options">journey type: oneway/rounf</p>
            <p className="dp__options">from: </p>
            <p className="dp__options">to: </p>
            <p className="dp__options">pickup date: </p>
            <p className="dp__options">return date(if req): </p>
            <p className="dp__options">base fare:</p>
            <p className="dp__options">driver fee: </p>
            <p className="dp__options">total fare: </p>
            <p className="dp__options">distance: </p>
            <p className="dp__options">Extra km charges: </p>
          </div>
        </div>
      </div>
      <button
        style={{ margin: ".5rem 0" }}
        id="submit-btn"
        onClick={() => handleClick(func)}
      >
        Book Now
      </button>
    </div>
  );
}

export default Confirmationcard;
