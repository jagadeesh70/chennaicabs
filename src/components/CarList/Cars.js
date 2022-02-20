import React, { useRef } from "react";
import SingleCard from "./SingleCard";
import Executive from "../../images/executive.png";
import Sedan from "../../images/sedan.png";
import Suv_plus from "../../images/suv_plus.png";
import Suv from "../../images/suv.png";
import Van from "../../images/van.png";
import { BookingContext } from "../../context/BookingContext";
import { useContext } from "react";
let ccontainer_ref;

function Cars() {
  const {
    triptype,
    sedanFare,
    suvFare,
    suvplusFare,
    executiveFare,
    tempoFare,
    oneWaySedanFare,
    oneWaySuvFare,
    sedanfare,
    suvfare,
    suvplusfare,
    executivefare,
    tempofare,
  } = useContext(BookingContext);
  ccontainer_ref = useRef();
  return (
    <div ref={ccontainer_ref} className="cars__container">
      {triptype === "One Way Trip" ? (
        <>
          <SingleCard
            src={Sedan}
            name="Etios/Dzire or Equivalent"
            price={oneWaySedanFare}
            type="sedan"
            npersons="4"
            Totalprice={sedanFare}
            cartype="sedanoneway"
          />
          <SingleCard
            src={Suv}
            name="Innova/Xylo or Equivalent"
            price={oneWaySuvFare}
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
            price={sedanfare}
            type="sedan"
            npersons="4"
            Totalprice={sedanFare}
            cartype="sedan"
          />
          <SingleCard
            src={Suv}
            name="Innova/Xylo or Equivalent"
            price={suvfare}
            type="suv"
            npersons="7"
            Totalprice={suvFare}
            cartype="suv"
          />
          <SingleCard
            src={Suv_plus}
            name="Toyota Innova"
            price={suvplusfare}
            type="suv+"
            npersons="7"
            Totalprice={suvplusFare}
            cartype="suvplus"
          />
          <SingleCard
            src={Executive}
            name="Toyota Crysta"
            price={executivefare}
            type="executive"
            npersons="6"
            Totalprice={executiveFare}
            cartype="executive"
          />
          <SingleCard
            src={Van}
            name="Force traveller"
            price={tempofare}
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

export { ccontainer_ref };
export default Cars;
