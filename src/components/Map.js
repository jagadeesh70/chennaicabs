import React, { useContext } from "react";
import {
  GoogleMap,
  Marker,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { MapContext } from "../context/MapContext";
import "./Maps.css";

function Map() {
  const {
    pointB,
    pointA,
    origin,
    destination,
    response,
    onMapLoad,
    position,
    directionsServiceOptions,
    directionsCallback,
    directionsRendererOptions,
  } = useContext(MapContext);
  return (
    <div className="map-container">
      <div className="googlemap">
        <GoogleMap
          options={{
            mapTypeControl: false,
            streetViewControl: false,
            zoomControl: true,
            fullscreenControl: false,
          }}
          onLoad={onMapLoad}
          mapContainerStyle={{ width: "400px", height: "425px" }}
          center={position}
          zoom={15}
        >
          {!response && pointA && <Marker position={pointA} />}
          {!response && pointB && <Marker position={pointB} />}

          {origin && destination && (
            <DirectionsService
              options={directionsServiceOptions}
              callback={directionsCallback}
            />
          )}

          {response && directionsRendererOptions && (
            <DirectionsRenderer options={directionsRendererOptions} />
          )}
        </GoogleMap>
      </div>
    </div>
  );
}

export default Map;
