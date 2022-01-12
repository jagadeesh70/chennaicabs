import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./LocationEntryForm.css";

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
];

function LocationEntryForm() {
  const [triptype, settriptype] = useState("Drop Trip");
  const [cabtype, setcabtype] = useState(1);
  const [ndays, setndays] = useState(0);
  const [cabchoices, setcabchoices] = useState([]);
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
    <div className="form__container">
      <div className="form__chip__container">
        {["Drop Trip", "Round Trip"].map((e) => (
          <button
            style={{
              background:
                triptype === e
                  ? "linear-gradient(to left, #a6f77b, #2dbd6e)"
                  : "none",
              boxShadow: triptype === e ? "0px 1px 8px #24c64f" : "none",
            }}
            className="form__chip"
            onClick={() => settriptype(e)}
          >
            {e}
          </button>
        ))}
      </div>
      <p>Pickup Location</p>
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
            label="Enter the Pickup Location"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
      />
      <p>Destination Location</p>
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

      <p>Select The Cab Type</p>

      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        size="small"
        className="form__autocomplete"
        value={cabtype}
        // label="Age"
        onChange={(event) => {
          setcabtype(event.target.value);
        }}
      >
        {/* <MenuItem value={1}>suv</MenuItem>
        <MenuItem value={2}>sedan</MenuItem>
        <MenuItem value={3}>suv+</MenuItem> */}

        {cabchoices.map((e, index) => (
          <MenuItem value={index}>{e}</MenuItem>
        ))}
      </Select>
      {triptype === "Round Trip" && (
        <>
          <p>Select The Number Of Days</p>
          <TextField
            id="outlined-basic"
            variant="outlined"
            className="form__autocomplete"
            size="small"
            type="number"
            value={ndays}
            onChange={(event) => {
              if (event.target.value >= 0) {
                setndays(event.target.value);
              }
            }}
          />
        </>
      )}

      <button id="submit-btn" className="form__submit">
        Search Cabs
      </button>
    </div>
  );
}

export default LocationEntryForm;
