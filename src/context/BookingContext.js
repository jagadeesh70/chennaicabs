import { createContext, useState } from "react";

const BookingContext = createContext();

const BookingContextProvider = ({ children }) => {
  const [triptype, settriptype] = useState("One Way Trip");
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
  const [pickDate, setpickDate] = useState(null);
  const [dropDate, setdropDate] = useState(null);
  const [pickTime, setpickTime] = useState(null);
  const [daysLeft, setDaysLeft] = useState(null);
  const [sedanFare, SetSedanFare] = useState();
  const [suvFare, setSuvFare] = useState();
  const [suvplusFare, setSuvplusFare] = useState();
  const [executiveFare, setExecutiveFare] = useState();
  const [tempoFare, setTempoFare] = useState();
  const [cartype, setCartype] = useState();

  const DaysLeft = () => {
    let days;
    if (pickDate && dropDate) {
      days = parseInt(dropDate.getDate() - pickDate.getDate());
    }
    return days;
  };

  const TotalFare = (distance, triptype, days) => {
    SedanFare(distance, triptype, days);
    SuvFare(distance, triptype, days);
    SuvPlusFare(distance, days);
    ExecutiveFare(distance, days);
    TempoFare(distance, days);
  };

  const SedanFare = (distance, tripType, days) => {
    let fare;
    if (tripType === "One Way Trip") {
      if (distance < 130) {
        fare = oneWayBaseFareSmallCar + driverFeeSmall;
      } else {
        fare =
          oneWayBaseFareSmallCar +
          driverFeeSmall +
          (distance - oneWayBaseDistance) * 13;
      }
    } else {
      if (distance * 2 < twoWayBaseDistance * days) {
        fare = driverFeeSmall * days + twoWayBaseFareSmall * days;
      } else {
        fare =
          driverFeeSmall * days +
          twoWayBaseFareSmall * days +
          (distance * 2 - twoWayBaseDistance * days) * 11;
      }
    }
    SetSedanFare(fare);
    return fare;
  };

  const SuvFare = (distance, tripType, days) => {
    let fare;
    if (tripType === "One Way Trip") {
      if (distance < 130) {
        fare = oneWayBaseFareLargeCar + driverFeeSmall;
      } else {
        fare =
          oneWayBaseFareLargeCar +
          driverFeeSmall +
          (distance - oneWayBaseDistance) * 18;
      }
    } else {
      if (distance * 2 < twoWayBaseDistance * days) {
        fare = driverFeeSmall * days + twoWayBaseFareMedium * days;
      } else {
        fare =
          driverFeeSmall * days +
          twoWayBaseFareMedium * days +
          (distance * 2 - twoWayBaseDistance * days) * 15;
      }
    }
    setSuvFare(fare);
    return fare;
  };

  const SuvPlusFare = (distance, days) => {
    let fare;
    if (distance * 2 < twoWayBaseDistance * days) {
      fare = driverFeeMedium * days + twoWayBaseFareMedium * days;
    } else {
      fare =
        driverFeeMedium * days +
        twoWayBaseFareMedium * days +
        (distance * 2 - twoWayBaseDistance * days) * 15;
    }
    setSuvplusFare(fare);
    return fare;
  };

  const ExecutiveFare = (distance, days) => {
    let fare;
    if (distance * 2 < twoWayBaseDistance * days) {
      fare = driverFeeMedium * days + twoWayBaseFareMedium * days;
    } else {
      fare =
        driverFeeLarge * days +
        twoWayBaseFareLarge * days +
        (distance * 2 - twoWayBaseDistance * days) * 17;
    }
    setExecutiveFare(fare);
    return fare;
  };
  const TempoFare = (distance, days) => {
    let fare;
    if (distance * 2 < twoWayBaseDistance * days) {
      fare = driverFeeVan * days + twoWayBaseFareVan * days;
    } else {
      fare =
        driverFeeVan * days +
        twoWayBaseFareVan * days +
        (distance * 2 - twoWayBaseDistance * days) * 19;
    }
    setTempoFare(fare);
    return fare;
  };

  return (
    <BookingContext.Provider
      value={{
        distance,
        setDistance,
        vehicle,
        setVehicle,
        pickDate,
        setpickDate,
        dropDate,
        setdropDate,
        pickTime,
        setpickTime,
        DaysLeft,
        daysLeft,
        triptype,
        settriptype,
        sedanFare,
        TotalFare,
        suvFare,
        suvplusFare,
        executiveFare,
        tempoFare,
        SedanFare,
        cartype,
        setCartype,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export { BookingContext, BookingContextProvider };
