import { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import MobileTimePicker from "@mui/lab/MobileTimePicker";
import { ccontainer_ref } from "./CarList/Cars";
import DateAdapter from "@mui/lab/AdapterDateFns";
import { BookingContext } from "../context/BookingContext";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import "./PlaceSuggestion.css";
import "./LocationEntryForm.css";
import { StandaloneSearchBox } from "@react-google-maps/api";
import { MapContext } from "../context/MapContext";
let Total;

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

  const [isunfilled, setisunfilled] = useState([]);

  const checkEmptyvalues = () => {
    let tempval = null;
    setisunfilled([]);
    if (pickup == undefined) {
      setisunfilled([1]);
      tempval = true;
    }
    if (drop == undefined) {
      setisunfilled((oldarray) => [...oldarray, 2]);
      tempval = true;
    }
    if (pickTime == null) {
      setisunfilled((oldarray) => [...oldarray, 3]);
      tempval = true;
    }
    if (triptype == "Round Trip" && dropDate == null) {
      setisunfilled((oldarray) => [...oldarray, 4]);
      tempval = true;
    }
    return tempval;
  };

  Total = () => {
    if (checkEmptyvalues()) {
      return;
    }
    ccontainer_ref.current.scrollIntoView();
    TotalFare(distance, triptype, getDate(pickDate, dropDate) + 1);
    return true;
  };
  const getDate = (pickDates, dropDates) => {
    let days;
    if (pickDates && dropDates) {
      days = parseInt(dropDates.getDate() - pickDates.getDate());
    }
    return days;
  };
  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
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
              inputRef={(input) => {
                if (isunfilled.indexOf(1) == 0 && input != null) {
                  input.focus();
                }
              }}
              error={isunfilled.includes(1)}
              size="small"
              id="txtfld__1"
              className="form__autocomplete"
              fullWidth={true}
              helperText={
                isunfilled.includes(1) ? "Please Enter Pickup Location" : ""
              }
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
              inputRef={(input) => {
                if (isunfilled.indexOf(2) == 0 && input != null) {
                  input.focus();
                }
              }}
              error={isunfilled.includes(2)}
              size="small"
              className="form__autocomplete"
              fullWidth={true}
              helperText={
                isunfilled.includes(2)
                  ? "Please Enter Destination Location"
                  : ""
              }
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
        <MobileTimePicker
          label="Enter Pickup Time"
          value={pickTime}
          onChange={(e) => setpickTime(e)}
          renderInput={(params) => (
            <TextField
              className="form__autocomplete"
              size="small"
              {...params}
              inputRef={(input) => {
                if (isunfilled.indexOf(3) == 0 && input != null) {
                  input.focus();
                }
              }}
              error={isunfilled.includes(3)}
              helperText={
                isunfilled.includes(3) ? "Please Enter Pickup Time" : ""
              }
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
                  inputRef={(input) => {
                    if (isunfilled.indexOf(4) == 0 && input != null) {
                      input.focus();
                    }
                  }}
                  error={isunfilled.includes(4)}
                  helperText={
                    isunfilled.includes(4) ? "Please Enter Pickup Time" : ""
                  }
                />
              )}
            />
          </>
        )}
        <button type="button" id="submit-btn" onClick={Total}>
          Search Cab
        </button>
      </div>
    </LocalizationProvider>
  );
}

export { Total };
export default LocationEntryForm;
