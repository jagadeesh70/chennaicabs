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
  let dropdownDate = new Date(dropDate).toLocaleDateString();

  const sedan = () => {
    addNewTrip(
      fromId,
      toId,
      "asbdgsdgysd",
      pickup,
      drop,
      pickupDate,
      distance,
      pickDate, //timestamp
      "sedan",
      dropdownDate,
      "300",
      "1234567890",
      `${sedanFare()} Rs`,
      "nub",
      pickupTime,
      fromLocation,
      toLocation,
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
