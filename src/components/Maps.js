import { GoogleMap, DirectionsRenderer } from "@react-google-maps/api";
import React, { useState, useContext, useCallback } from "react";
import "./Maps.css";
import { MapContext } from "../context/MapContext";
const containerStyle = {
  width: "350px",
  height: "400px",
};

const Maps = () => {
  const { setPointA, setPointB, pointA, pointB } = useContext(MapContext);
  const DirectionsService = new window.google.maps.DirectionsService();
  let [direction, setDirection] = useState("");
  const Mapdirection = () => {
    DirectionsService.route(
      {
        origin: { lat: 13.5244, lng: 80.3792 },
        destination: { lat: 12.5244, lng: 77.3792 },
        travelMode: window.google.maps.TravelMode.DRIVING,
        region: "IN",
      },
      useCallback((res) => {
        let num = false;
        if (res !== null && res.status === "OK" && !num) {
          console.log("nn");
          setDirection(res);
          num = true;
          setTimeout(5000);
        } else {
          console.log(res);
          num = false;
        }
      }, [])
      // (result, status) => {
      //   setTimeout(() => {
      //     if (status === window.google.maps.DirectionsStatus.OK) {
      //       setDirection(result);
      //     } else {
      //       console.log(`error ::: ${result}`);
      //     }
      //   }, 2000);
      // }
    );
  };

  //Mapdirection();
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
        {pointA && pointB ? (
          <GoogleMap
            options={{
              mapTypeControl: false,
              streetViewControl: false,
              zoomControl: true,
              fullscreenControl: false,
              styles: containerStyle,
              minZoom: 7,
              maxZoom: 20,
            }}
            mapContainerStyle={containerStyle}
          >
            {direction && <DirectionsRenderer directions={direction} />}
          </GoogleMap>
        ) : (
          <GoogleMap
            options={{
              mapTypeControl: false,
              streetViewControl: false,
              zoomControl: true,
              fullscreenControl: false,
            }}
            center={{ lat: 13.5244, lng: 80.3792 }}
            mapContainerStyle={containerStyle}
          >
            <div></div>
          </GoogleMap>
        )}
      </div>
    </div>
  );
};

export default Maps;
