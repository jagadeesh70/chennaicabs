import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ContextProvider } from "./context/Context";
import { BookingContextProvider } from "./context/BookingContext";
import { MapContextProvider } from "./context/MapContext";

ReactDOM.render(
  <MapContextProvider>
    <BookingContextProvider>
      <ContextProvider>
        <App />
      </ContextProvider>
    </BookingContextProvider>
  </MapContextProvider>,
  document.getElementById("root")
);
