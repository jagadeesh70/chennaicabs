import React, { useContext } from "react";
import DoneIcon from "@mui/icons-material/Done";
import "./Booking.css";
import { Context } from "../context/Context";
function BookingDone() {
  const { bookingId, username } = useContext(Context);
  const handleClick = () => {
    window.location.reload(true);
  };
  return (
    <div className="card">
      <div className="card-body">
        <div className="modal-dialog modal-confirm">
          <div className="modal-content">
            <div className="modal-header">
              <div className="icon-box">
                <DoneIcon sx={{ fontSize: 50 }} />
              </div>
              <h4 className="modal-title w-100">Hi {username}!</h4>
            </div>
            <div className="modal-body">
              <p className="text-center">
                Your booking has been confirmed. Make sure you received SMS on
                your booking <strong>{bookingId}</strong>.If not please contact{" "}
                <strong>+919841346080</strong>
              </p>
            </div>
            <div className="modal-footer">
              <button
                className="btn"
                data-dismiss="modal"
                onClick={handleClick}
              >
                <strong>Done</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingDone;
