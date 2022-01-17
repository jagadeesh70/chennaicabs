import React from "react";
import "./SingleCard.css";

function SingleCard({ src }) {
  return (
    <div className="card">
      <div className="card-header">
        <img src={src} alt="rover" />
      </div>
      <div className="card-body">
        <h4>Why is the Tesla Cybertruck designed the way it is?</h4>
        <p>An exploration into the truck's polarising design</p>
        <button id="submit-btn">Book Now</button>
      </div>
    </div>
  );
}

export default SingleCard;
