import { useState, useEffect, useContext, forwardRef } from "react";
import TextField from "@mui/material/TextField";

import MobileDatePicker from "@mui/lab/MobileDatePicker";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import TimePicker from "@mui/lab/TimePicker";
import MobileTimePicker from "@mui/lab/MobileTimePicker";
import DateAdapter from "@mui/lab/AdapterDateFns";
import { BookingContext } from "../context/BookingContext";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import "./PlaceSuggestion.css";
import "./LocationEntryForm.css";
import { StandaloneSearchBox } from "@react-google-maps/api";
import { MapContext } from "../context/MapContext";

let checkEmptyvalues;
const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function LocationEntryForm() {
  const {
    pickup,
    drop,
    onLoadA,
    onPlacesChangedA,
    onPlacesChangedB,
    onLoadB,
    traceRoute,
    distance,
  } = useContext(MapContext);
  const {
    setdropDate,
    setpickDate,
    setpickTime,
    pickDate,
    pickTime,
    dropDate,
    triptype,
    settriptype,
    TotalFare,
  } = useContext(BookingContext);
  const [cabtype, setcabtype] = useState("");
  const [cabchoices, setcabchoices] = useState([]);
  const [pickInput, setPickInput] = useState();
  const [dropInput, setdropInput] = useState();
  const [snackbar, setsnackbar] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setsnackbar(false);
  };

  checkEmptyvalues = (type) => {
    if (triptype == "One Way Trip") {
      if (
        pickup == undefined ||
        drop == undefined ||
        pickDate == null ||
        pickTime == null
      ) {
        if (type == "from locentryform") {
          document.querySelector("#LocationEntryForm").scrollIntoView();
        }
        setsnackbar(true);
        return true;
      }
    } else {
      if (
        pickup == undefined ||
        drop == undefined ||
        pickDate == null ||
        dropDate == null ||
        pickTime == null
      ) {
        if (type == "from locentryform") {
          document.querySelector("#LocationEntryForm").scrollIntoView();
        }
        setsnackbar(true);
        return true;
      }
    }
  };

  const Total = () => {
    if (checkEmptyvalues("from form")) {
      return;
    }
    document.querySelector(".cars__container").scrollIntoView();
    TotalFare(distance, triptype, getDate(pickDate, dropDate) + 1);
  };
  const getDate = (pickDates, dropDates) => {
    let days;
    if (pickDates && dropDates) {
      days = parseInt(dropDates.getDate() - pickDates.getDate());
    }
    return days;
  };

  useEffect(() => {
    if (triptype === "One Way Trip") {
      setcabchoices(["Etios/Dzire or Equivalent", "Innova/Xylo or Equivalent"]);
    } else {
      setcabchoices([
        "Etios/Dzire or Equivalent",
        "Innova/Xylo or Equivalent",
        "Toyota Innova",
        "Toyota Crysta",
        "Force traveller",
      ]);
    }
    setcabtype("");
    return () => {
      setcabchoices(["Etios/Dzire or Equivalent", "Innova/Xylo or Equivalent"]);
    };
  }, [triptype, pickInput, dropInput]);
  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <Snackbar open={snackbar} autoHideDuration={6000} onClose={handleClose}>
        <Alert severity="error">Please Fill all values</Alert>
      </Snackbar>
      <div id="LocationEntryForm" className="form__container">
        <div className="form__chip__container">
          {["One Way Trip", "Round Trip"].map((e, i) => (
            <button
              key={i}
              style={{
                fontWeight: 600,
                background:
                  triptype == e
                    ? "linear-gradient(to left, #a6f77b, #2dbd6e)"
                    : "none",
                boxShadow: triptype == e ? "0px 1px 8px #24c64f" : "none",
              }}
              className="form__chip"
              onClick={() => settriptype(e)}
            >
              {e}
            </button>
          ))}
        </div>
        <div>
          <label style={{ fontFamily: "Roboto" }}>Enter Pick Up Location</label>
          <StandaloneSearchBox
            onLoad={onLoadA}
            onPlacesChanged={onPlacesChangedA}
          >
            <TextField
              required
              size="small"
              className="form__autocomplete"
              fullWidth={true}
              onChange={(e) => setPickInput(e.target.value)}
            />
          </StandaloneSearchBox>
          <label style={{ fontFamily: "Roboto" }}>
            Enter Destination Loaction
          </label>
          <StandaloneSearchBox
            onLoad={onLoadB}
            onPlacesChanged={onPlacesChangedB}
          >
            <TextField
              size="small"
              className="form__autocomplete"
              fullWidth={true}
              onChange={(e) => setdropInput(e.target.value)}
            />
          </StandaloneSearchBox>
        </div>
        <MobileDatePicker
          label="Enter Pickup Date"
          value={pickDate}
          minDate={new Date()}
          onChange={(e) => setpickDate(e)}
          renderInput={(params) => (
            <TextField
              className="form__autocomplete"
              size="small"
              {...params}
            />
          )}
        />
        {/* <MobileTimePicker
          label="Enter Pickup Time"
          value={pickTime}
          onChange={(e) => setpickTime(e)}
          renderInput={(params) => (
            <TextField
              className="form__autocomplete"
              size="small"
              {...params}
            />
          )}
        /> */}
        <TimePicker
          label="Enter Pickup Time"
          value={pickTime}
          onChange={(e) => setpickTime(e)}
          renderInput={(params) => (
            <TextField
              className="form__autocomplete"
              size="small"
              {...params}
            />
          )}
        />
        {triptype == "Round Trip" && (
          <>
            <MobileDatePicker
              label="Enter Drop Date"
              value={dropDate}
              minDate={new Date()}
              onChange={(e) => setdropDate(e)}
              renderInput={(params) => (
                <TextField
                  className="form__autocomplete"
                  size="small"
                  {...params}
                />
              )}
            />
          </>
        )}
        <button type="button" id="submit-btn" onClick={Total}>
          Book Cab
        </button>
      </div>
    </LocalizationProvider>
  );
}

export { checkEmptyvalues };
export default LocationEntryForm;
