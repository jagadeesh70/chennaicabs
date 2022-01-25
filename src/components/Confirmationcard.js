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
    //   <div className="card">
    //     <div className="card-header">
    //       <img src={images} />
    //     </div>
    //     <div className="card-body">
    //       <h4 className="cbody__name">{name}</h4>
    //       <p
    //         style={{
    //           marginBottom: ".7rem",
    //         }}
    //       >
    //         Distance:{distance} km
    //       </p>
    //       <p
    //         style={{
    //           fontSize: "14px",
    //           marginBottom: ".7rem",
    //         }}
    //       >
    //         Extra Toll at actuals + Extra Permit charges applicable.
    //       </p>
    //       <p
    //         style={{
    //           marginLeft: "auto",
    //           fontWeight: "bold",
    //           marginBottom: ".7rem",
    //         }}
    //       >
    //         Base Price: ₹{baseprice}
    //       </p>
    //       <p
    //         style={{
    //           marginLeft: "auto",
    //           fontWeight: "bold",
    //           marginBottom: ".7rem",
    //         }}
    //       >
    //         Total Price: ₹{totalprice}
    //       </p>
    //       <div
    //         style={{ width: "100%", marginBottom: ".5rem" }}
    //         className="fare__middlebar__row2 fr"
    //       >
    //         <div className="fare__middlebar__row2__col1 fr">
    //           <FaCarAlt
    //             style={{
    //               marginRight: ".3rem",
    //             }}
    //           />
    //           <p>{cartype}</p>
    //         </div>
    //         <p>{nperson} person</p>
    //         <p>AC</p>
    //       </div>
    //       <button id="submit-btn" onClick={() => handleClick(func)}>
    //         Book Now
    //       </button>
    //     </div>
    //   </div>
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
          }}
        >
          Booking summary
        </div>
        <div className="fr">
          <img
            style={{
              height: "3rem",
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
    </div>
  );
}

export default Confirmationcard;
