import React, { useState, useEffect, useContext } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Signin from "../pages/Signin";
import temp from "../images/sedan.png";
import { Context } from "../context/Context";
import Executive from "../images/executive.png";
import Sedan from "../images/sedan.png";
import Suv_plus from "../images/suv_plus.png";
import Suv from "../images/suv.png";
import Van from "../images/van.png";
import ConfirmModal from "./ConfirmModal";
import { BookingContext } from "../context/BookingContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  border: "0",
  p: 1,
};

function ConfirmationModal({ open, handleClose, cartype }) {
  const { setAuthstate, setotpsent } = useContext(Context);
  const {
    triptype,
    sedanFare,
    suvFare,
    suvplusFare,
    executiveFare,
    tempoFare,
  } = useContext(BookingContext);

  const [isconfirmed, setisconfirmed] = useState(false);

  const confirmCase = () => {
    let card;
    switch (cartype) {
      case "sedanoneway":
        card = (
          <ConfirmModal
            src={Sedan}
            name={"Etios/Dzire or Equivalent"}
            price={sedanFare - 300}
            Totalprice={sedanFare}
            type={"sedan"}
            handleClose={handleClose}
            setisconfirmed={setisconfirmed}
          />
        );
        break;
      case "suvoneway":
        card = (
          <ConfirmModal
            src={Suv}
            name={"Innova/Xylo or Equivalent"}
            price={suvFare - 300}
            Totalprice={suvFare}
            type={"suv"}
            handleClose={handleClose}
            setisconfirmed={setisconfirmed}
          />
        );
        break;
      case "sedan":
        card = (
          <ConfirmModal
            src={Sedan}
            name={"Etios/Dzire or Equivalent"}
            price={sedanFare - 300}
            Totalprice={sedanFare}
            type={"sedan"}
            handleClose={handleClose}
            setisconfirmed={setisconfirmed}
          />
        );
        break;
      case "suv":
        card = (
          <ConfirmModal
            src={Suv}
            name={"Innova/Xylo or Equivalent"}
            price={suvFare - 300}
            Totalprice={suvFare}
            type={"suv"}
            handleClose={handleClose}
            setisconfirmed={setisconfirmed}
          />
        );
        break;
      case "suvplus":
        card = (
          <ConfirmModal
            src={Suv_plus}
            name={"Toyota Innova"}
            price={suvplusFare - 400}
            Totalprice={suvplusFare}
            type={"suv+"}
            handleClose={handleClose}
            setisconfirmed={setisconfirmed}
          />
        );
        break;
      case "executive":
        card = (
          <ConfirmModal
            src={Executive}
            name={"Toyota Crysta"}
            price={executiveFare - 500}
            Totalprice={executiveFare}
            type={"executive"}
            handleClose={handleClose}
            setisconfirmed={setisconfirmed}
          />
        );
        break;
      case "tempo":
        card = (
          <ConfirmModal
            src={Van}
            name={"Force traveller"}
            price={tempoFare - 600}
            Totalprice={tempoFare}
            type={"tempo"}
            handleClose={handleClose}
            setisconfirmed={setisconfirmed}
          />
        );
        break;

      default:
        break;
    }
    return card;
  };

  return (
    <Modal
      open={open}
      onClose={() => handleClose(setisconfirmed, setAuthstate, setotpsent)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>{isconfirmed ? <Signin /> : confirmCase()}</Box>
    </Modal>
  );
}

export default ConfirmationModal;
