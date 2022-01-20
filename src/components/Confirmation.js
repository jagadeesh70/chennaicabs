import React from "react";
import { Context } from "../context/Context";
import { useContext } from "react";
import { MapContext } from "../context/MapContext";
import { BookingContext } from "../context/BookingContext";

function Confirmation() {
  const { addNewTrip, username, uid, phone } = useContext(Context);
  const { pickup, drop, distance, fromId, toId } = useContext(MapContext);
  const { pickDate, dropDate, pickTime, triptype } = useContext(BookingContext);
  addNewTrip();

  return <div></div>;
}

export default Confirmation;
