import React from "react";
import "./End.css";
import BookingDone from "./BookingDone";

function End() {
  return (
    <div className="end-container">
      <div className="end-heading">
        Why choose <span className="green-quote">Chennai Cabs</span>
      </div>
      <div className="end-main">
        <div className="end-content">
          <i className="fas fa-shipping-fast fa-2x main-logo"></i>
          <div className="end-single">
            <div className="end-head">Fast & easy booking</div>
            <div className="end-body">
              Avail on-time pick up & Drop with most reliable Chennai to
              southern part of India Cab Booking.
            </div>
          </div>
        </div>
        <div className="end-content">
          <i className="far fa-credit-card fa-2x main-logo"></i>
          <div className="end-single">
            <div className="end-head">Transparent billing</div>
            <div className="end-body">
              We have a completely transparent billing policy - that means no
              hidden charges!
            </div>
          </div>
        </div>
        <div className="end-content">
          <i className="fas fa-history fa-2x main-logo"></i>
          <div className="end-single">
            <div className="end-head">24/7 Cutomer Support</div>
            <div className="end-body">
              Friendly & Helpful Support Team. Ride with expert chauffeurs,
              specifically trained for outstation rides.
            </div>
          </div>
        </div>
        <div className="end-content">
          <i class="fas fa-heartbeat fa-2x main-logo"></i>
          <div className="end-single">
            <div className="end-head">Safe & Secure</div>
            <div className="end-body">
              Sanitized Cabs and Vaccinated drivers to ensure you a safe travel
              experience.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default End;
