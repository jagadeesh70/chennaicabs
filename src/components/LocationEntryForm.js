import { useState, useEffect, useContext, useRef } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import MobileTimePicker from "@mui/lab/MobileTimePicker";
import DateAdapter from "@mui/lab/AdapterDateFns";
import { BookingContext } from "../context/BookingContext";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import PlacesSuggestion from "./PlacesSuggestion";
import "./LocationEntryForm.css";

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
];
function LocationEntryForm() {
  const { origin, destination, setOrigin, setDestination } =
    useContext(BookingContext);
  const [triptype, settriptype] = useState("Drop Trip");
  const [cabtype, setcabtype] = useState("Etios/Dzire or Equivalent");
  const [cabchoices, setcabchoices] = useState([]);
  const [value, setValue] = useState(null);

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
  }, [triptype]);
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

        <PlacesSuggestion />
        <Autocomplete
          size="small"
          freeSolo
          id="free-solo-2-demo"
          className="form__autocomplete"
          disableClearable
          options={top100Films.map((option) => option.title)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Enter the Destination Location"
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
        <Select
          labelId="demo-simple-select-label2"
          id="demo-simple-select"
          size="small"
          variant="outlined"
          className="form__autocomplete"
          value={cabtype}
          onChange={(event) => {
            setcabtype(event.target.value);
          }}
        >
          {cabchoices.map((e) => (
            <MenuItem value={e}>{e}</MenuItem>
          ))}
        </Select>
        {triptype == "Round Trip" && (
          <>
            <MobileDatePicker
              label="Enter Pickup Date"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => (
                <TextField
                  className="form__autocomplete"
                  size="small"
                  {...params}
                />
              )}
            />
            <MobileDatePicker
              label="Enter Drop Date"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
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
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
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

        <button id="submit-btn" className="form__submit">
          Search Cabs
        </button>
      </div>
    </LocalizationProvider>
  );
}

export default LocationEntryForm;
