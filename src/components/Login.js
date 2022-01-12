import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login__root__container">
      <div id="card">
        <div id="card-content">
          <div id="card-title">
            <h2>LOGIN</h2>
            <div className="underline-title"></div>
          </div>
          <label for="user-email" style={{ paddingTop: "13px" }}>
            &nbsp;Mobile Number
          </label>
          <input
            id="user-email"
            className="form-content"
            type="email"
            name="email"
            autocomplete="on"
            required
          />
          <div className="form-border"></div>
          <label for="user-password" style={{ paddingTop: "22px" }}>
            &nbsp;Password
          </label>
          <input
            id="user-password"
            className="form-content"
            type="password"
            name="password"
            required
          />
          <div className="form-border"></div>
          <button
            id="signup"
            style={{
              background: "none",
              border: "none",
            }}
          >
            Forgot password?
          </button>
          <input id="submit-btn-2" type="submit" name="submit" value="LOGIN" />
          <button
            style={{
              background: "none",
              border: "none",
            }}
            id="signup"
          >
            Don't have account yet?
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
