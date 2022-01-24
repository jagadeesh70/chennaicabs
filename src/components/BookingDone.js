import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import "./Booking.css";
function BookingDone() {
  const handleClick = () => {
    console.log("hello");
  };
  return (
    <div className="card">
      <div className="card-body">
        <div class="modal-dialog modal-confirm">
          <div class="modal-content">
            <div class="modal-header">
              <div class="icon-box">
                <DoneIcon />
              </div>
              <h4 class="modal-title w-100">Awesome!</h4>
            </div>
            <div class="modal-body">
              <p class="text-center">
                Your booking has been confirmed. Check your email for detials.
              </p>
            </div>
            <div class="modal-footer">
              <button class="btn btn-success btn-block" data-dismiss="modal">
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingDone;
