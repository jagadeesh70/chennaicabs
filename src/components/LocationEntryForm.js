import { useState, useEffect, useContext, useRef } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import MobileTimePicker from "@mui/lab/MobileTimePicker";
import DateAdapter from "@mui/lab/AdapterDateFns";
import { BookingContext } from "../context/BookingContext";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import "./PlaceSuggestion.css";
import "./LocationEntryForm.css";
import { StandaloneSearchBox } from "@react-google-maps/api";
import { MapContext } from "../context/MapContext";
import { id } from "date-fns/locale";

function LocationEntryForm() {
  const {
    onLoadA,
    onPlacesChangedA,
    onPlacesChangedB,
    onLoadB,
    traceRoute,
    distance,
  } = useContext(MapContext);
  const {
    oneWayTrip,
    TwoWayTrip,
    setdropDate,
    setpickDate,
    setpickTime,
    pickDate,
    pickTime,
    dropDate,
    setVehicle,
    DaysLeft,
    daysLeft,
    triptype,
    settriptype,
  } = useContext(BookingContext);
  const [cabtype, setcabtype] = useState("");
  const [cabchoices, setcabchoices] = useState([]);
  const [value, setValue] = useState(null);
  const [pickInput, setPickInput] = useState();
  const [dropInput, setdropInput] = useState();

  const dist = () => {
    oneWayTrip(distance, cabtype);
  };
  const dist2 = () => {
    TwoWayTrip(distance, cabtype, daysLeft);
  };

  const oneWayFun = () => {
    dist();
  };
  const twoWayFun = () => {
    dist2();
  };
  useEffect(() => {
    if (triptype === "Drop Trip") {
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
      <div className="form__container">
        <div className="form__chip__container">
          {["Drop Trip", "Round Trip"].map((e, i) => (
            <button
              key={i}
              style={{
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
          <label>Enter Pick Up Location</label>
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
          <label>Enter Destination Loaction</label>
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
        <label>Choose Vehicle</label>
        <Select
          size="small"
          variant="outlined"
          className="form__autocomplete"
          value={cabtype}
          onChange={(event) => {
            setVehicle(event.target.value);
            setcabtype(event.target.value);
            traceRoute();
          }}
        >
          {cabchoices.map((e) => (
            <MenuItem value={e}>{e}</MenuItem>
          ))}
        </Select>
        <MobileDatePicker
          label="Enter Pickup Date"
          value={pickDate}
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
            />
          )}
        />
        {triptype == "Round Trip" && (
          <>
            <MobileDatePicker
              label="Enter Drop Date"
              value={dropDate}
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
        {triptype === "Round Trip" ? (
          <button
            type="button"
            id="submit-btn"
            onClick={() => {
              twoWayFun();
              DaysLeft(pickDate, dropDate);
            }}
          >
            Search Cabs
          </button>
        ) : (
          <button type="button" id="submit-btn" onClick={oneWayFun}>
            Search Cabs
          </button>
        )}
      </div>
    </LocalizationProvider>
  );
}

export default LocationEntryForm;
