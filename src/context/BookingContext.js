import { createContext, useState } from "react";

const BookingContext = createContext();

const BookingContextProvider = ({ children }) => {
  let totalfare = 0;
  //Driver Fee based on vehicle
  const driverFeeSmall = 300;
  const driverFeeMedium = 400;
  const driverFeeLarge = 500;
  const driverFeeVan = 600;
  //One way fare price based on Vehicle
  const oneWayBaseFareSmallCar = 1690;
  const oneWayBaseFareLargeCar = 2340;
  //once way Base Distance
  const oneWayBaseDistance = 130;
  //Two way base distance
  const twoWayBaseDistance = 250;
  //Two way base fare price
  const twoWayBaseFareSmall = 2750;
  const twoWayBaseFareMedium = 3750;
  const twoWayBaseFareLarge = 4250;
  const twoWayBaseFareVan = 4750;

  //States
  const [distance, setDistance] = useState("");
  const [vehicle, setVehicle] = useState();
  const [totalFare, setTotalFare] = useState();

  const oneWayTrip = (distances, vehicles) => {
    if (distances && vehicles) {
      if (distances < 130) {
        switch (vehicles) {
          case "Etios/Dzire or Equivalent":
            totalfare = oneWayBaseFareSmallCar + driverFeeSmall;
            console.log(totalfare);
            break;
          case "Innova/Xylo or Equivalent":
            totalfare = oneWayBaseFareLargeCar + driverFeeSmall;
            break;
          default:
            console.log("something is wrong");
            break;
        }
      } else if (distances > 130) {
        switch (vehicles) {
          case "Etios/Dzire or Equivalent":
            totalfare =
              oneWayBaseFareSmallCar +
              driverFeeSmall +
              (distances - oneWayBaseDistance) * 13;
            break;
          case "Innova/Xylo or Equivalent":
            totalfare =
              oneWayBaseFareLargeCar +
              driverFeeSmall +
              (distances - oneWayBaseDistance) * 18;
            break;
          default:
            console.log("something is wrong");
            break;
        }
      }
    }
    console.log(totalfare);
    setTotalFare(totalfare);
  };

  const TwoWayTrip = (distances, vehicles, days) => {
    if (distances && vehicles && days) {
      if (distances < twoWayBaseDistance * days) {
        switch (vehicles) {
          case "Etios/Dzire or Equivalent":
            totalfare = driverFeeSmall * days + twoWayBaseFareSmall * days;
            break;
          case "Innova/Xylo or Equivalent":
            totalfare = driverFeeSmall * days + twoWayBaseFareMedium * days;
            break;
          case "Toyota Innova":
            totalfare = driverFeeMedium * days + twoWayBaseFareMedium * days;
            break;
          case "Toyota Crysta":
            totalfare = driverFeeLarge * days + twoWayBaseFareLarge * days;
            break;
          case "Force traveller":
            totalfare = driverFeeVan * days + twoWayBaseFareVan * days;
            break;
          default:
            break;
        }
      } else {
        switch (vehicles) {
          case "Etios/Dzire or Equivalent":
            totalfare =
              driverFeeSmall * days +
              twoWayBaseFareSmall * days +
              (distances - twoWayBaseDistance * days) * 11;
            break;
          case "Innova/Xylo or Equivalent":
            totalfare =
              driverFeeSmall * days +
              twoWayBaseFareMedium * days +
              (distances - twoWayBaseDistance * days) * 15;
            break;
          case "Toyota Innova":
            totalfare =
              driverFeeMedium * days +
              twoWayBaseFareMedium * days +
              (distances - twoWayBaseDistance * days) * 15;
            break;
          case "Toyota Crysta":
            totalfare =
              driverFeeLarge * days +
              twoWayBaseFareLarge * days +
              Math.abs((distances - twoWayBaseDistance * days) * 17);
            break;
          case "Force traveller":
            totalfare =
              driverFeeVan * days +
              twoWayBaseFareVan * days +
              (distances - twoWayBaseDistance * days) * 19;
            break;
          default:
            break;
        }
      }
    }
  };
  // oneWayTrip(319,"Innova/Xylo or Equivalent")
  // TwoWayTrip(638,"Force traveller",5)

  return (
    <BookingContext.Provider
      value={{
        distance,
        setDistance,
        vehicle,
        setVehicle,
        oneWayTrip,
        TwoWayTrip,
        totalFare,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export { BookingContext, BookingContextProvider };
