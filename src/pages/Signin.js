import React, { useEffect } from "react";
import Login from "../components/Login";
import { useContext } from "react";
import { Context } from "../Context";
import Otp from "../components/Otp";

function Signin() {
  const {otpsent} = useContext(Context)
  useEffect(() => {
    console.log(otpsent)
  }, [otpsent])
  if(otpsent){
    return <Otp/>
  }else{
    return <Login/>
  }
}


export default Signin;
