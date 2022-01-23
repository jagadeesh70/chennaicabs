import React from "react";
import { Context } from "../context/Context";
import { useContext } from "react";
import { MapContext } from "../context/MapContext";
import { BookingContext } from "../context/BookingContext";
import Confirmationcard from "./Confirmationcard";
import Executive from "../images/executive.png";
import Sedan from "../images/sedan.png";
import Suv_plus from "../images/suv_plus.png";
import Suv from "../images/suv.png";
import Van from "../images/van.png";

function Confirmation() {
  const { sedanFare, suvFare, suvplusFare, executiveFare, tempoFare } =
    useContext(BookingContext);

  const { addNewTrip, username, uid, phone } = useContext(Context);
  const { pickup, drop, distance, fromId, toId, fromLocation, toLocation } =
    useContext(MapContext);
  const { pickDate, dropDate, pickTime, cartype, daysLeft } =
    useContext(BookingContext);

  let nowdate = Date.now();
  let bookingDate = new Date(nowdate).toLocaleDateString("hi-IN");
  let bookingTime = new Date(nowdate).toLocaleTimeString("hi-IN");

  let pickupDate = new Date(pickDate).toLocaleDateString();
  let pickupTime = new Date(pickTime).toLocaleTimeString();
  let pickupDay = new Date(pickDate).toLocaleDateString();
  let dropdownDate = new Date(dropDate).toLocaleDateString();

  const sedanOneWay = () => {
    addNewTrip(
      bookingTime,
      fromId,
      toId,
      uid,
      bookingDate,
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
      bookingTime,
      fromId,
      toId,
      uid,
      bookingDate,
      pickup,
      drop,
      pickupDate,
      `${distance} km`,
      pickDate, //timestamp
      "suv",
      "", //no return date for one way
      "300",
      phone,
      suvFare - 300,
      username, //done
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
      bookingTime,
      fromId,
      toId,
      uid,
      bookingDate,
      pickup,
      drop,
      pickupDate,
      `${distance} km`,
      pickDate, //timestamp
      "sedan",
      dropdownDate, //no return date for one way
      300 * daysLeft,
      phone,
      sedanFare,
      username, //done
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
      bookingTime,
      fromId,
      toId,
      uid,
      bookingDate,
      pickup,
      drop,
      pickupDate,
      `${distance} km`,
      pickDate, //timestamp
      "suv",
      dropdownDate, //no return date for one way
      300 * daysLeft, //had to change
      phone,
      suvFare,
      username, //done
      pickupTime,
      fromLocation,
      toLocation,
      pickupDay, //change
      "one_way",
      suvFare,
      suvFare
    );
  };

  const suvPlusTwoWay = () => {
    addNewTrip(
      bookingTime,
      fromId,
      toId,
      uid,
      bookingDate,
      pickup,
      drop,
      pickupDate,
      `${distance} km`,
      pickDate, //timestamp
      "suv+",
      dropdownDate, //no return date for one way
      400 * daysLeft,
      phone,
      suvplusFare,
      username, //done
      pickupTime,
      fromLocation,
      toLocation,
      pickupDay, //change
      "round_way",
      suvplusFare,
      suvplusFare
    );
  };
  const executiveTwoWay = () => {
    addNewTrip(
      bookingTime,
      fromId,
      toId,
      uid,
      bookingDate,
      pickup,
      drop,
      pickupDate,
      `${distance} km`,
      pickDate, //timestamp
      "executive",
      dropdownDate, //no return date for one way
      500 * daysLeft,
      phone,
      executiveFare,
      username, //done
      pickupTime,
      fromLocation,
      toLocation,
      pickupDay, //change
      "round_way",
      executiveFare,
      executiveFare
    );
  };
  const tempoTwoWay = () => {
    addNewTrip(
      bookingTime,
      fromId,
      toId,
      uid,
      bookingDate,
      pickup,
      drop,
      pickupDate,
      `${distance} km`,
      pickDate, //timestamp
      "tempo",
      dropdownDate, //no return date for one way
      600 * daysLeft,
      phone,
      tempoFare,
      username, //done
      pickupTime,
      fromLocation,
      toLocation,
      pickupDay, //change
      "round_way",
      tempoFare,
      tempoFare
    );
  };

  const carFunc = (cartype) => {
    let card;
    switch (cartype) {
      case "sedanoneway":
        card = (
          <Confirmationcard
            images={Sedan}
            name="sedan"
            distance={distance}
            baseprice={sedanFare - 300}
            totalprice={sedanFare}
            cartype={cartype}
            nperson={4}
            func={sedanOneWay}
          />
        );
        break;
      case "suvoneway":
        card = (
          <Confirmationcard
            images={Suv}
            name="suv"
            distance={distance}
            baseprice={suvFare - 300}
            totalprice={suvFare}
            cartype={cartype}
            nperson={7}
            func={suvOneWay}
          />
        );
        break;
      case "sedan":
        card = (
          <Confirmationcard
            images={Sedan}
            name="suv"
            distance={distance}
            baseprice={sedanFare - 300}
            totalprice={sedanFare}
            cartype={cartype}
            nperson={4}
            func={sedanTwoWay}
          />
        );
        break;
      case "suv":
        card = (
          <Confirmationcard
            images={Suv}
            name="suv"
            distance={distance}
            baseprice={suvFare - 300}
            totalprice={suvFare}
            cartype={cartype}
            nperson={4}
            func={suvTwoWay}
          />
        );
        break;
      case "suvplus":
        card = (
          <Confirmationcard
            images={Suv_plus}
            name="suv+"
            distance={distance}
            baseprice={suvplusFare - 300}
            totalprice={suvplusFare}
            cartype={cartype}
            nperson={7}
            func={suvPlusTwoWay}
          />
        );
        break;
      case "executive":
        card = (
          <Confirmationcard
            images={Executive}
            name="executive"
            distance={distance}
            baseprice={executiveFare - 300}
            totalprice={executiveFare}
            cartype={cartype}
            nperson={6}
            func={executiveTwoWay}
          />
        );
        break;
      case "tempo":
        card = (
          <Confirmationcard
            images={Van}
            name="Tempo"
            distance={distance}
            baseprice={tempoFare - 300}
            totalprice={tempoFare}
            cartype={cartype}
            nperson={12}
            func={tempoTwoWay}
          />
        );
        break;

      default:
        break;
    }
    return card;
  };

  return <div>{carFunc(cartype)}</div>;
}

export default Confirmation;
