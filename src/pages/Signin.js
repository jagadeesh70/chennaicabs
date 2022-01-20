import React, { useEffect } from "react";
import Login from "../components/Login";
import { useContext } from "react";
import { Context } from "../context/Context";
import Otp from "../components/Otp";

function Signin() {
  const { otpsent } = useContext(Context);
  useEffect(() => {}, [otpsent]);
  if (otpsent) {
    return <Otp />;
  } else {
    return <Login />;
  }
}

export default Signin;
