import {
  createContext,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from "react";

const MapContext = createContext();

const MapContextProvider = ({ children }) => {
  const [distance, setDistance] = useState();

  const [map, setMap] = useState();
  const [searchBoxA, setSearchBoxA] = useState();
  const [searchBoxB, setSearchBoxB] = useState();
  const [pointA, setPointA] = useState();
  const [pointB, setPointB] = useState();
  const [pickup, setPickup] = useState();
  const [drop, setDrop] = useState();
  const [fromId, setFromId] = useState();
  const [toId, setToId] = useState();
  const [fromLocation, setFromLocation] = useState();
  const [toLocation, setToLocation] = useState();

  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [response, setResponse] = useState();
  useEffect(() => {
    traceRoute();
  }, [distance, pointA, pointB]);

  const position = {
    lat: -27.590824,
    lng: -48.551262,
  };

  const onMapLoad = (map) => {
    setMap(map);
  };

  const onLoadA = (ref) => {
    setSearchBoxA(ref);
  };

  const onLoadB = (ref) => {
    setSearchBoxB(ref);
  };

  const getAddressCity = (address, length) => {
    const findType = (type) => type.types[0] === "locality";
    const location = address.map((obj) => obj);
    const rr = location.filter(findType)[0];
    return length === "short" ? rr.short_name : rr.long_name;
  };

  const onPlacesChangedA = () => {
    const places = searchBoxA.getPlaces();
    const place = places[0];
    setFromLocation(getAddressCity(place.address_components, "short"));
    setPickup(place.formatted_address);
    setFromId(place.place_id);
    const location = {
      lat: place?.geometry?.location?.lat() || 0,
      lng: place?.geometry?.location?.lng() || 0,
    };
    setPointA(location);
    setOrigin(null);
    setDestination(null);
    setResponse(null);
    map?.panTo(location);
  };

  const onPlacesChangedB = () => {
    const places = searchBoxB.getPlaces();
    const place = places[0];
    setToLocation(getAddressCity(place.address_components, "short"));
    setDrop(place.formatted_address);
    setToId(place.place_id);
    const location = {
      lat: place?.geometry?.location?.lat() || 0,
      lng: place?.geometry?.location?.lng() || 0,
    };
    setPointB(location);
    setOrigin(null);
    setDestination(null);
    setResponse(null);
    map?.panTo(location);
  };

  const traceRoute = () => {
    if (pointA && pointB) {
      setOrigin(pointA);
      setDestination(pointB);
    }
  };

  const directionsServiceOptions =
    // @ts-ignore
    useMemo(() => {
      return {
        origin,
        destination,
        travelMode: "DRIVING",
      };
    }, [origin, destination]);

  const directionsCallback = useCallback((res) => {
    if (res !== null && res.status === "OK") {
      setResponse(res);
      setDistance(parseInt(res.routes[0].legs[0].distance.text.match(/\d+/g)));
    } else {
    }
  }, []);

  const directionsRendererOptions = useMemo(() => {
    return {
      directions: response,
    };
  }, [response]);

  return (
    <MapContext.Provider
      value={{
        searchBoxA,
        setSearchBoxA,
        pointB,
        setPointB,
        pointA,
        setPointA,
        searchBoxB,
        setSearchBoxB,
        origin,
        setOrigin,
        destination,
        setDestination,
        response,
        setResponse,
        onLoadA,
        onLoadB,
        onPlacesChangedA,
        onPlacesChangedB,
        onMapLoad,
        position,
        directionsServiceOptions,
        directionsCallback,
        directionsRendererOptions,
        traceRoute,
        distance,
        pickup,
        drop,
        fromId,
        toId,
        fromLocation,
        toLocation,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};

export { MapContext, MapContextProvider };
