import React from "react";
import SingleCard from "./SingleCard";
import Executive from "../../images/executive.png";
import Sedan from "../../images/sedan.png";
import Suv_plus from "../../images/suv_plus.png";
import Suv from "../../images/suv.png";
import Van from "../../images/van.png";
import { BookingContext } from "../../context/BookingContext";
import { useContext } from "react";
import { Context } from "../../context/Context";
import { MapContext } from "../../context/MapContext";

function Cars() {
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
    <div className="cars__container">
      {triptype === "Drop Trip" ? (
        <>
          <SingleCard
            src={Sedan}
            name="Etios/Dzire or Equivalent"
            price={11}
            type="sedan"
            npersons="4"
            Totalprice={sedanFare}
            onClick={sedanOneWay}
          />
          <SingleCard
            src={Suv}
            name="Innova/Xylo or Equivalent"
            price={15}
            type="suv"
            npersons="7"
            Totalprice={suvFare}
          />
        </>
      ) : (
        <>
          <SingleCard
            src={Sedan}
            name="Etios/Dzire or Equivalent"
            price={11}
            type="sedan"
            npersons="4"
            Totalprice={sedanFare}
          />
          <SingleCard
            src={Suv}
            name="Innova/Xylo or Equivalent"
            price={15}
            type="suv"
            npersons="7"
            Totalprice={suvFare}
          />
          <SingleCard
            src={Suv_plus}
            name="Toyota Innova"
            price={15}
            type="suv+"
            npersons="7"
            Totalprice={suvplusFare}
          />
          <SingleCard
            src={Executive}
            name="Toyota Crysta"
            price={17}
            type="executive"
            npersons="6"
            Totalprice={executiveFare}
          />
          <SingleCard
            src={Van}
            name="Force traveller"
            price={19}
            type="tempo"
            npersons="12"
            Totalprice={tempoFare}
          />
        </>
      )}
    </div>
  );
}

export default Cars;
