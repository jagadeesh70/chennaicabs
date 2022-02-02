import React from "react";
import "./Loader.css";
import { PropagateLoader } from "react-spinners";
import logo from "../images/logo.png";

function Loader() {
  return (
    <div
      className="progresscontainer"
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img src={logo} width="300px" />
      <PropagateLoader color="green" />
    </div>
  );
}

export default Loader;
