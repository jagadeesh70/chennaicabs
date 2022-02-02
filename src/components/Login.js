import React from "react";
import "./Login.css";
import { Context } from "../context/Context";
import { useContext } from "react";
import { HashLoader } from "react-spinners";

function Login() {
  const { setPhone, onSignInSubmit, setUsername, loginLoading, authstate } =
    useContext(Context);
  return (
    <div className="login__root__container">
      <div id="card">
        <div id="card-content">
          {authstate && loginLoading ? (
            <div
              style={{
                width: "367px",
                height: "292px",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <HashLoader color="green" />
            </div>
          ) : (
            <>
              <div id="card-title">
                <h2>LOGIN</h2>
                <div className="underline-title"></div>
              </div>
              <form onSubmit={onSignInSubmit}>
                <label style={{ paddingTop: "13px", paddingBottom: "2rem" }}>
                  &nbsp;Enter your Name:
                </label>
                <input
                  id="user-email"
                  className="form-content"
                  type="text"
                  autoComplete="off"
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />
                <div className="form-border"></div>
                <br />
                <label style={{ paddingTop: "13px", marginTop: "1rem" }}>
                  &nbsp;Mobile Number:
                </label>
                <input
                  id="user-email"
                  className="form-content"
                  type="text"
                  name="number"
                  autoComplete="on"
                  required
                  onChange={(e) => setPhone(e.target.value)}
                />
                <div className="form-border"></div>
                <button type="submit" name="submit" id="submit-btn-2">
                  Login
                </button>
                <div id="sign-in-button" style={{ visibility: "hidden" }}></div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
