import React from "react";
import SingleCard from "./SingleCard";
import Executive from "../../images/executive.png";
import Sedan from "../../images/sedan.png";
import Suv_plus from "../../images/suv_plus.png";
import Suv from "../../images/suv.png";
import Van from "../../images/van.png";
import { BookingContext } from "../../context/BookingContext";
import { useContext } from "react";

function Cars() {
  const { triptype } = useContext(BookingContext);
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
          />
          <SingleCard
            src={Executive}
            name="Innova/Xylo or Equivalent"
            price={15}
            type="suv"
            npersons="7"
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
          />
          <SingleCard
            src={Executive}
            name="Innova/Xylo or Equivalent"
            price={15}
            type="suv"
            npersons="7"
          />
          <SingleCard
            src={Suv_plus}
            name="Toyota Innova"
            price={15}
            type="suv+"
            npersons="7"
          />
          <SingleCard
            src={Suv}
            name="Toyota Crysta"
            price={17}
            type="executive"
            npersons="6"
          />
          <SingleCard
            src={Van}
            name="Force traveller"
            price={19}
            type="tempo"
            npersons="12"
          />
        </>
      )}
    </div>
  );
}

export default Cars;
