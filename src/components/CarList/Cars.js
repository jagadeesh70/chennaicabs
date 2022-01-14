import React from "react";
import SingleCard from "./SingleCard";
import Executive from "../../images/executive.png";
import Sedan from "../../images/sedan.png";
import Suv_plus from "../../images/suv_plus.png";
import Suv from "../../images/suv.png";
import Van from "../../images/van.png";

function Cars() {
  return (
    <div className="cars__container">
      <SingleCard src={Executive} />
      <SingleCard src={Sedan} />
      <SingleCard src={Suv_plus} />
      <SingleCard src={Suv} />
      <SingleCard src={Van} />
    </div>
  );
}

export default Cars;
