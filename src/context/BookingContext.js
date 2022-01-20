import { createContext, useState } from "react";

const BookingContext = createContext();

const BookingContextProvider = ({ children }) => {
  let totalfare = 0;
  const [triptype, settriptype] = useState("Drop Trip");
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
  const [pickDate, setpickDate] = useState(null);
  const [dropDate, setdropDate] = useState(null);
  const [pickTime, setpickTime] = useState(null);
  const [daysLeft, setDaysLeft] = useState(null);
  const [sedanFare, SetSedanFare] = useState();
  const [suvFare, setSuvFare] = useState();
  const [suvplusFare, setSuvplusFare] = useState();
  const [executiveFare, setExecutiveFare] = useState();
  const [tempoFare, setTempoFare] = useState();
  console.log(pickDate);

  const DaysLeft = (pickDates, dropDates) => {
    if (pickDates && dropDates) {
      let days = parseInt(dropDates.getDate() - pickDates.getDate());
      setDaysLeft(days + 1);
    }
  };
  console.log(daysLeft);

  const TotalFare = (distance, triptype, days) => {
    SedanFare(distance, triptype, days);
    SuvFare(distance, triptype, days);
    SuvPlusFare(distance, days);
    ExecutiveFare(distance, days);
    TempoFare(distance, days);
  };

  const SedanFare = (distance, tripType, days) => {
    let fare;
    if (tripType === "Drop Trip") {
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
    if (tripType === "Drop Trip") {
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

  // const oneWayTrip = (distances, vehicles) => {
  //   if (distances && vehicles) {
  //     if (distances < 130) {
  //       switch (vehicles) {
  //         case "Etios/Dzire or Equivalent":
  //           totalfare = oneWayBaseFareSmallCar + driverFeeSmall;
  //           console.log(totalfare);
  //           break;
  //         case "Innova/Xylo or Equivalent":
  //           totalfare = oneWayBaseFareLargeCar + driverFeeSmall;
  //           break;
  //         default:
  //           console.log("something is wrong");
  //           break;
  //       }
  //     } else if (distances > 130) {
  //       switch (vehicles) {
  //         case "Etios/Dzire or Equivalent":
  //           totalfare =
  //             oneWayBaseFareSmallCar +
  //             driverFeeSmall +
  //             (distances - oneWayBaseDistance) * 13;
  //           break;
  //         case "Innova/Xylo or Equivalent":
  //           totalfare =
  //             oneWayBaseFareLargeCar +
  //             driverFeeSmall +
  //             (distances - oneWayBaseDistance) * 18;
  //           break;
  //         default:
  //           console.log("something is wrong");
  //           break;
  //       }
  //     }
  //   }
  //   setTotalFare(totalfare);
  // };

  // const TwoWayTrip = (distances, vehicles, days) => {
  //   if (distances && vehicles && days) {
  //     if (distances < twoWayBaseDistance * days) {
  //       switch (vehicles) {
  //         case "Etios/Dzire or Equivalent":
  //           totalfare = driverFeeSmall * days + twoWayBaseFareSmall * days;
  //           break;
  //         case "Innova/Xylo or Equivalent":
  //           totalfare = driverFeeSmall * days + twoWayBaseFareMedium * days;
  //           break;
  //         case "Toyota Innova":
  //           totalfare = driverFeeMedium * days + twoWayBaseFareMedium * days;
  //           break;
  //         case "Toyota Crysta":
  //           totalfare = driverFeeLarge * days + twoWayBaseFareLarge * days;
  //           break;
  //         case "Force traveller":
  //           totalfare = driverFeeVan * days + twoWayBaseFareVan * days;
  //           break;
  //         default:
  //           break;
  //       }
  //     } else {
  //       switch (vehicles) {
  //         case "Etios/Dzire or Equivalent":
  //           totalfare =
  //             driverFeeSmall * days +
  //             twoWayBaseFareSmall * days +
  //             (distances - twoWayBaseDistance * days) * 11;
  //           break;
  //         case "Innova/Xylo or Equivalent":
  //           totalfare =
  //             driverFeeSmall * days +
  //             twoWayBaseFareMedium * days +
  //             (distances - twoWayBaseDistance * days) * 15;
  //           break;
  //         case "Toyota Innova":
  //           totalfare =
  //             driverFeeMedium * days +
  //             twoWayBaseFareMedium * days +
  //             (distances - twoWayBaseDistance * days) * 15;
  //           break;
  //         case "Toyota Crysta":
  //           totalfare =
  //             driverFeeLarge * days +
  //             twoWayBaseFareLarge * days +
  //             Math.abs((distances - twoWayBaseDistance * days) * 17);
  //           break;
  //         case "Force traveller":
  //           totalfare =
  //             driverFeeVan * days +
  //             twoWayBaseFareVan * days +
  //             (distances - twoWayBaseDistance * days) * 19;
  //           break;
  //         default:
  //           break;
  //       }
  //     }
  //   }
  //   setTotalFare(totalfare);
  // };
  // oneWayTrip(319,"Innova/Xylo or Equivalent")
  // TwoWayTrip(638,"Force traveller",5)

  return (
    <BookingContext.Provider
      value={{
        distance,
        setDistance,
        vehicle,
        setVehicle,
        // oneWayTrip,
        // TwoWayTrip,
        totalFare,
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
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export { BookingContext, BookingContextProvider };
