import { createContext, useState, useEffect } from "react";
import { auth, db } from "../config/firebase-config";
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  setDoc,
} from "firebase/firestore";

const BookingContext = createContext();

const BookingContextProvider = ({ children }) => {
  const [triptype, settriptype] = useState("One Way Trip");
  const [bookingData, setBookingData] = useState();
  let oneWaySedanFee;
  let oneWaySuvFee;
  let sedanDriverfee;
  let suvDriverfee;
  let suvplusDriverfee;
  let executiveDriverfee;
  let tempoDriverfee;

  let oneWaySedanFare;
  let oneWaySuvFare;
  let sedanfare;
  let suvfare;
  let suvplusfare;
  let executivefare;
  let tempofare;

  useEffect(async () => {
    onSnapshot(collection(db, "car_modes"), (snap) => {
      setBookingData(snap.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);
  if (bookingData) {
    oneWaySedanFee = bookingData[0].sedan.driver_fee;
    oneWaySuvFee = bookingData[0].suv.driver_fee;
    oneWaySedanFare = bookingData[0].sedan.fare;
    oneWaySuvFare = bookingData[0].suv.fare;

    sedanDriverfee = bookingData[2].sedan.driver_fee;
    suvDriverfee = bookingData[2].suv.driver_fee;
    suvplusDriverfee = bookingData[2]["suv+"].driver_fee;
    executiveDriverfee = bookingData[2].executive.driver_fee;
    tempoDriverfee = bookingData[2].tempo.driver_fee;
    sedanfare = bookingData[2].sedan.fare;
    suvfare = bookingData[2].suv.fare;
    suvplusfare = bookingData[2]["suv+"].fare;
    executivefare = bookingData[2].executive.fare;
    tempofare = bookingData[2].tempo.fare;
  }

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
  const [pickDate, setpickDate] = useState(new Date());
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
        fare = 130 * oneWaySedanFare + oneWaySedanFee;
      } else {
        fare =
          130 * oneWaySedanFare +
          oneWaySedanFee +
          (distance - oneWayBaseDistance) * oneWaySedanFare;
      }
    } else {
      if (distance * 2 < twoWayBaseDistance * days) {
        fare = sedanDriverfee * days + twoWayBaseFareSmall * days;
      } else {
        fare =
          sedanDriverfee * days +
          twoWayBaseFareSmall * days +
          (distance * 2 - twoWayBaseDistance * days) * oneWaySuvFare;
      }
    }
    SetSedanFare(fare);
    return fare;
  };

  const SuvFare = (distance, tripType, days) => {
    let fare;
    if (tripType === "One Way Trip") {
      if (distance < 130) {
        fare = 130 * oneWaySuvFare + oneWaySedanFee;
      } else {
        fare =
          130 * oneWaySuvFare +
          oneWaySuvFee +
          (distance - oneWayBaseDistance) * oneWaySuvFare;
      }
    } else {
      if (distance * 2 < twoWayBaseDistance * days) {
        fare = suvDriverfee * days + twoWayBaseFareMedium * days;
      } else {
        fare =
          suvDriverfee * days +
          twoWayBaseFareMedium * days +
          (distance * 2 - twoWayBaseDistance * days) * suvfare;
      }
    }
    setSuvFare(fare);
    return fare;
  };

  const SuvPlusFare = (distance, days) => {
    let fare;
    if (distance * 2 < twoWayBaseDistance * days) {
      fare = suvplusDriverfee * days + twoWayBaseFareMedium * days;
    } else {
      fare =
        suvplusDriverfee * days +
        twoWayBaseFareMedium * days +
        (distance * 2 - twoWayBaseDistance * days) * 15;
    }
    setSuvplusFare(fare);
    return fare;
  };

  const ExecutiveFare = (distance, days) => {
    let fare;
    if (distance * 2 < twoWayBaseDistance * days) {
      fare = suvplusDriverfee * days + twoWayBaseFareMedium * days;
    } else {
      fare =
        executiveDriverfee * days +
        twoWayBaseFareLarge * days +
        (distance * 2 - twoWayBaseDistance * days) * 17;
    }
    setExecutiveFare(fare);
    return fare;
  };
  const TempoFare = (distance, days) => {
    let fare;
    if (distance * 2 < twoWayBaseDistance * days) {
      fare = tempoDriverfee * days + twoWayBaseFareVan * days;
    } else {
      fare =
        tempoDriverfee * days +
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
        oneWaySedanFare,
        oneWaySuvFare,
        sedanfare,
        suvfare,
        suvplusfare,
        executivefare,
        tempofare,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export { BookingContext, BookingContextProvider };
