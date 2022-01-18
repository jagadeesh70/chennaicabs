import React from "react";
import "./Header.css";
import logo from "../images/logo.png";
import { useContext } from "react";
import { Context } from "../context/Context";
import { useNavigate } from "react-router-dom";
import ResponsiveAppBar from "./Appbar";

function Header() {
  const { username } = useContext(Context);
  const navigate = useNavigate();

  return <ResponsiveAppBar />;
}

export default Header;
