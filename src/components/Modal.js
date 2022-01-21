import React, { useState, useEffect, useContext } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { FaCarAlt } from "react-icons/fa";
import Modal from "@mui/material/Modal";
import Signin from "../pages/Signin";
import temp from "../images/sedan.png";
import { Context } from "../context/Context";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 1,
};

function ConfirmationModal({ open, setOpen, handleOpen, handleClose }) {
  const { setAuthstate } = useContext(Context);

  const [isconfirmed, setisconfirmed] = useState(false);

  return (
    <Modal
      open={open}
      onClose={() => handleClose(setisconfirmed, setAuthstate)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {isconfirmed ? (
          <Signin />
        ) : (
          <>
            <div
              style={{
                justifyContent: "flex-end",
                paddingRight: "1rem",
              }}
              className="fr"
            >
              <button
                onClick={() => handleClose(setisconfirmed, setAuthstate)}
                style={{
                  background: "none",
                  border: "none",
                  padding: ".5rem",
                  color: "red",
                  fontWeight: "bold",
                }}
              >
                X
              </button>
            </div>
            <div className="card-header">
              <img src={temp} alt="rover" />
            </div>
            <div className="card-body">
              <h4 className="cbody__name">name</h4>
              <p
                style={{
                  marginBottom: ".7rem",
                }}
              >
                Distance:kms
              </p>
              <p
                style={{
                  fontSize: "14px",
                  marginBottom: ".7rem",
                }}
              >
                Extra Toll at actuals + Extra Permit charges applicable.
              </p>
              <p
                style={{
                  marginLeft: "auto",
                  fontWeight: "bold",
                  marginBottom: ".7rem",
                }}
              >
                Price: ₹/km
              </p>
              <p
                style={{
                  marginLeft: "auto",
                  fontWeight: "bold",
                  marginBottom: ".7rem",
                }}
              >
                Total Price: ₹/km
              </p>
              <div
                style={{ width: "100%", marginBottom: ".5rem" }}
                className="fare__middlebar__row2 fr"
              >
                <div className="fare__middlebar__row2__col1 fr">
                  <FaCarAlt
                    style={{
                      marginRight: ".3rem",
                    }}
                  />
                  <p>type</p>
                </div>
                <p>person</p>
                <p>AC</p>
              </div>
            </div>
            <div className="fr">
              <Button
                variant="text"
                style={{
                  marginLeft: "auto",
                  marginRight: ".5rem",
                }}
                onClick={() => {
                  setisconfirmed(true);
                }}
              >
                Confirm
              </Button>
              <Button
                onClick={() => handleClose(setisconfirmed, setAuthstate)}
                variant="text"
                color="error"
              >
                Cancel
              </Button>
            </div>
          </>
        )}
      </Box>
    </Modal>
  );
}

export default ConfirmationModal;
