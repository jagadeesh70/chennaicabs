import React from "react";
import "./SingleCard.css";

function SingleCard({ src }) {
  return (
    // <div className="card__container">
    //   <div className="img__container">
    //     <img src={src} alt="" />
    //   </div>
    //   <p>Good Car</p>
    //   <button id="submit-btn">Book Now</button>
    // </div>
    <div className="card">
      <div className="card-header">
        <img src={src} alt="rover" />
      </div>
      <div className="card-body">
        <h4>Why is the Tesla Cybertruck designed the way it is?</h4>
        <p>An exploration into the truck's polarising design</p>
        {/* <div className="user">
          <img
            src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo"
            alt="user"
          />
          <div className="user-info">
            <h5>July Dec</h5>
            <small>2h ago</small>
          </div>
        </div> */}
        <button id="submit-btn">Book Now</button>
      </div>
    </div>
  );
}

export default SingleCard;
