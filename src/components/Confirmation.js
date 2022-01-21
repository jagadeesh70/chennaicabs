import React from "react";
import { Context } from "../context/Context";
import { useContext } from "react";
import { MapContext } from "../context/MapContext";
import { BookingContext } from "../context/BookingContext";

function Confirmation() {
  const { addNewTrip, username, uid, phone } = useContext(Context);
  const { pickup, drop, distance, fromId, toId } = useContext(MapContext);
  const { pickDate, dropDate, pickTime, triptype } = useContext(BookingContext);
  const {
    triptype,
    sedanFare,
    suvFare,
    suvplusFare,
    executiveFare,
    tempoFare,
  } = useContext(BookingContext);

  const { addNewTrip, username, uid, phone } = useContext(Context);
  const { pickup, drop, distance, fromId, toId, fromLocation, toLocation } =
    useContext(MapContext);
  const { pickDate, dropDate, pickTime } = useContext(BookingContext);

  let pickupDate = new Date(pickDate).toLocaleDateString();
  let pickupTime = new Date(pickTime).toLocaleTimeString();
  let pickupDay = new Date(pickDate).toLocaleDateString();
  let dropdownDate = new Date(dropDate).toLocaleDateString();

  const sedanOneWay = () => {
    addNewTrip(
      fromId,
      toId,
      uid,
      pickup,
      drop,
      pickupDate,
      `${distance} km`,
      pickDate, //timestamp
      "sedan",
      "", //no return date for one way
      "300",
      phone,
      sedanFare - 300,
      username, //done
      pickupTime,
      fromLocation,
      toLocation,
      pickupDay, //change
      "one_way",
      sedanFare,
      sedanFare
    );
  };

  const suvOneWay = () => {
    addNewTrip(
      fromId,
      toId,
      "asbdgsdgysd",
      pickup,
      drop,
      pickupDate,
      `${distance} km`,
      pickDate, //timestamp
      "suv",
      "", //no return date for one way
      "300",
      "1234567890",
      suvFare,
      "nub", //done
      pickupTime,
      fromLocation,
      toLocation,
      pickupDay, //change
      "one_way",
      suvFare,
      suvFare
    );
  };

  const sedanTwoWay = () => {
    addNewTrip(
      fromId,
      toId,
      "asbdgsdgysd",
      pickup,
      drop,
      pickupDate,
      `${distance} km`,
      pickDate, //timestamp
      "sedan",
      dropDate, //no return date for one way
      "300",
      "1234567890",
      sedanFare,
      "nub", //done
      pickupTime,
      fromLocation,
      toLocation,
      pickupDay, //change
      "two_way",
      sedanFare,
      sedanFare
    );
  };

  const suvTwoWay = () => {
    addNewTrip(
      fromId,
      toId,
      "asbdgsdgysd",
      pickup,
      drop,
      pickupDate,
      `${distance} km`,
      pickDate, //timestamp
      "sedan",
      "", //no return date for one way
      "300", //had to change
      "1234567890",
      sedanFare,
      "nub", //done
      pickupTime,
      fromLocation,
      toLocation,
      pickupDay, //change
      "one_way",
      sedanFare,
      sedanFare
    );
  };

  const suvPlusTwoWay = () => {
    addNewTrip(
      fromId,
      toId,
      "asbdgsdgysd",
      pickup,
      drop,
      pickupDate,
      `${distance} km`,
      pickDate, //timestamp
      "sedan",
      "", //no return date for one way
      "300",
      "1234567890",
      sedanFare,
      "nub", //done
      pickupTime,
      fromLocation,
      toLocation,
      pickupDay, //change
      "one_way",
      sedanFare,
      sedanFare
    );
  };

  return (
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
        <button id="submit-btn">Book Now</button>
      </div>
    </div>
  );
}

export default Confirmation;
