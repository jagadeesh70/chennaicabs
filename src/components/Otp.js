import React from "react";
import "./Login.css";
import { Context } from "../context/Context";
import { useContext } from "react";

function Otp() {
  const { setotp, onSubmitOtp, authstate } = useContext(Context);
  if (authstate) {
    return <h1>Booking COnfirmed</h1>;
  } else {
    return (
      <div className="login__root__container">
        <div id="card">
          <div id="card-content">
            <div id="card-title">
              <h2>LOGIN</h2>
              <div className="underline-title"></div>
            </div>
            <form onSubmit={onSubmitOtp}>
              <label style={{ paddingTop: "13px" }}>&nbsp;Enter OTP</label>
              <input
                id="OTP"
                className="form-content"
                type="number"
                name="number"
                autoComplete="off"
                required
                onChange={(e) => setotp(e.target.value)}
              />
              <div className="form-border"></div>
              <button type="submit" name="submit" id="submit-btn-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Otp;
