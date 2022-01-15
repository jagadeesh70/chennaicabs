import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import "./PlaceSuggestion.css";
import { TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";

class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: "" };
  }

  handleChange = (address) => {
    this.setState({ address });
    console.log(this.state);
  };

  handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => console.log("Success", latLng))
      .catch((error) => console.error("Error", error));
  };

  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <>
            <TextField
              size="small"
              id="free-solo-2-demo"
              className="form__autocomplete"
              label={this.props.inputType}
              InputProps={{
                type: "search",
                ...getInputProps({
                  placeholder: "Search Places ...",
                  className: "location-search-input",
                }),
              }}
            />
            {/* <Autocomplete
              size="small"
              freeSolo
              id="free-solo-2-demo"
              className="form__autocomplete"
              disableClearable
              options={
                suggestions.map((suggestion) => suggestion.description)
              }
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
            /> */}
            <div className="auto-complete-container">
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion) => {
                  const className = suggestion.active
                    ? "suggestion-item--active"
                    : "suggestion-item";
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? {
                        backgroundColor: "#24c64f",
                        cursor: "pointer",
                        width: "100%",
                      }
                    : {
                        backgroundColor: "#a6f77b",
                        cursor: "pointer",
                        width: "29%",
                      };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </PlacesAutocomplete>
    );
  }
}

export default LocationSearchInput;
