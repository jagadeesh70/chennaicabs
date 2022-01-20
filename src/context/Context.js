import { createContext, useState, useEffect } from "react";
import { auth, db } from "../config/firebase-config";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  updateProfile,
} from "firebase/auth";
import {
  collection,
  doc,
  Firestore,
  getDoc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [authstate, setAuthstate] = useState(false);
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState();
  const [otp, setotp] = useState();
  const [otpsent, setoptsent] = useState(false);
  const [uid, setUid] = useState();

  useEffect(async () => {
    onSnapshot(collection(db, "profile"), (snap) => {
      console.log(snap.docs.map((doc) => doc.data()));
    });
  }, []);
  const generateBookingId = async () => {
    let bookingId = "CC";
    let docRef = doc(db, "total_trips", "total");
    let docData = await getDoc(docRef);
    let total_trips = docData.data().total.toString();
    for (let i = 0; i < 8 - total_trips.length; i++) {
      bookingId += "0";
    }
    return bookingId + total_trips;
  };
  generateBookingId();
  const configureCaptcha = (e) => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          console.log(response);
          console.log("recap done");
          onSignInSubmit();
        },
      },
      auth
    );
  };
  const onSignInSubmit = (e) => {
    e.preventDefault();
    configureCaptcha();
    const phoneNumber = "+91" + phone;
    console.log(phoneNumber);
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setoptsent(true);
        console.log("OTP sent");
      })
      .catch((error) => {
        console.log(error);
        console.log("OTP not Sent");
      });
  };

  const onSubmitOtp = async (e) => {
    e.preventDefault();
    const code = otp;
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        const user = result.user;
        updateProfile(auth.currentUser, { displayName: "noob" });
        console.log(JSON.stringify(user));
        console.log("Login successful");
        createUser(user.uid, user.displayName, user.phoneNumber);
        setUsername(user.displayName);
        setPhone(user.phoneNumber);
        setUid(user.uid);
      })
      .catch((error) => {
        console.log(error, "Login failed");
      })
      .then(() => {
        setAuthstate(true);
      });
  };

  const generateOtp = () => {
    let digits = "1234567890";
    let otp = "";
    for (let i = 0; i < 4; i++) {
      otp += digits[Math.floor(Math.random() * 10)].toString();
    }
    return otp;
  };

  const createUser = async (uid, userName, phoneNumber) => {
    await setDoc(doc(db, "profile", uid), {
      name: userName,
      phone_number: phoneNumber,
      referral_points: 0,
      notification_token: "",
      total_points: 0,
      disabled: false,
      referred_by: "",
      referral_link: "",
    });
  };

  const addNewTrip = async (
    fromId, //done
    toId, //done
    uid, //dome
    fromAddress, //done
    toAddress, //done
    tripStartDate, //done
    distance, //done
    timeStamp, //done
    car_mode,
    tripReturnDate, //done
    driverFee,
    phoneNumber,
    baseFare,
    username,
    time,
    from_location,
    to_location,
    day,
    trip_type,
    subTotal,
    total_fare
  ) => {
    await setDoc(doc(db, "new_booking"), {
      booking_id: generateBookingId(),
      from_address: fromAddress,
      to_address: toAddress,
      from_id: fromId,
      to_id: toId,
      user_id: uid,
      trip_status: "ongoing",
      referred_by: "",
      reward_points: "",
      booking_date: Date.now(),
      trip_start_date: tripStartDate,
      distance: distance,
      timestamp: timeStamp,
      car_mode: car_mode,
      ratings: -1,
      trip_return_date: tripReturnDate,
      driver_fee: driverFee,
      phone_number: phoneNumber,
      base_fare: baseFare,
      user_name: username,
      driver_name: "",
      driver_number: "",
      car_name: "",
      car_number: "",
      booking_time: "",
      time: time,
      driver_accepted: 0,
      otp: generateOtp(),
      from_location: from_location,
      to_location: to_location,
      day: day,
      trip_type: trip_type,
      subtotal: subTotal,
      total_fare: total_fare,
    });
  };

  return (
    <Context.Provider
      value={{
        username,
        setUsername,
        phone,
        setPhone,
        setotp,
        onSignInSubmit,
        onSubmitOtp,
        otpsent,
        authstate,
        addNewTrip,
        uid,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
