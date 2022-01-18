import React, { useContext } from "react";
import {
  GoogleMap,
  Marker,
  DirectionsService,
  DirectionsRenderer,
  LoadScript,
} from "@react-google-maps/api";
import { MapContext } from "../context/MapContext";

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
    <div
      style={{
        height: "fit-content",
        marginTop: "auto",
        marginBottom: "auto",
        marginLeft: "auto",
        marginRight: "auto",
      }}
      className="map-container"
    >
      <div className="googlemap">
        <GoogleMap
          options={{
            mapTypeControl: false,
            streetViewControl: false,
            zoomControl: true,
            fullscreenControl: false,
          }}
          onLoad={onMapLoad}
          mapContainerStyle={{ width: "350px", height: "400px" }}
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
