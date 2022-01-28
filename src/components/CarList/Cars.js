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
  const {
    triptype,
    sedanFare,
    suvFare,
    suvplusFare,
    executiveFare,
    tempoFare,
  } = useContext(BookingContext);

  return (
    <div className="cars__container">
      {triptype === "One Way Trip" ? (
        <>
          <SingleCard
            src={Sedan}
            name="Etios/Dzire or Equivalent"
            price={11}
            type="sedan"
            npersons="4"
            Totalprice={sedanFare}
            cartype="sedanoneway"
          />
          <SingleCard
            src={Suv}
            name="Innova/Xylo or Equivalent"
            price={15}
            type="suv"
            npersons="7"
            Totalprice={suvFare}
            cartype="suvoneway"
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
            cartype="sedan"
          />
          <SingleCard
            src={Suv}
            name="Innova/Xylo or Equivalent"
            price={15}
            type="suv"
            npersons="7"
            Totalprice={suvFare}
            cartype="suv"
          />
          <SingleCard
            src={Suv_plus}
            name="Toyota Innova"
            price={15}
            type="suv+"
            npersons="7"
            Totalprice={suvplusFare}
            cartype="suvplus"
          />
          <SingleCard
            src={Executive}
            name="Toyota Crysta"
            price={17}
            type="executive"
            npersons="6"
            Totalprice={executiveFare}
            cartype="executive"
          />
          <SingleCard
            src={Van}
            name="Force traveller"
            price={19}
            type="tempo"
            npersons="12"
            Totalprice={tempoFare}
            cartype="tempo"
          />
        </>
      )}
    </div>
  );
}

export default Cars;
