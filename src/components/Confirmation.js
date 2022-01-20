import React from "react";
import { Context } from "../context/Context";
import { useContext } from "react";
import { MapContext } from "../context/MapContext";
import { BookingContext } from "../context/BookingContext";

function Confirmation() {
  const { addNewTrip, username, uid, phone } = useContext(Context);
  const { pickup, drop, distance } = useContext(MapContext);
  const { pickDate, dropDate, pickTime } = useContext(BookingContext);
  addNewTrip();

  return <div></div>;
}

export default Confirmation;
