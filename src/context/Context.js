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
  const [otpsent, setotpsent] = useState(false);
  const [uid, setUid] = useState();
  const [bookingId, setBookingId] = useState();
  const [servOtp, setServOtp] = useState();
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  useEffect(async () => {
    generateBookingId();
    generateOtp();
    onSnapshot(
      collection(db, "profile"),
      (snap) => {
        snap.docs.map((doc) => doc.data());
      },
      () => console.log()
    );
  }, [otpsent, uid]);
  const generateBookingId = async () => {
    try {
      let bookingIds = "CC";
      let docRef = doc(db, "total_trips", "total");
      let docData = await getDoc(docRef);
      let total_trips = docData.data().total.toString();
      for (let i = 0; i < 8 - total_trips.length; i++) {
        bookingIds += "0";
      }
      setBookingId(bookingIds + total_trips);
    } catch {}
  };
  const configureCaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: () => {
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
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier).then(
      (confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setotpsent(true);
      }
    );
  };

  const onSubmitOtp = async (e) => {
    e.preventDefault();
    const code = otp;
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        const user = result.user;
        updateProfile(auth.currentUser, { displayName: username });
        createUser(user.uid, user.displayName, user.phoneNumber);
        setPhone(user.phoneNumber);
        setUid(user.uid);
        setAuthstate(true);
      })
      .catch(() => {
        setAuthstate(false);
      });
  };
  const generateOtp = () => {
    let digits = "1234567890";
    let otp = "";
    for (let i = 0; i < 4; i++) {
      otp += digits[Math.floor(Math.random() * 10)].toString();
    }
    setServOtp(otp);
  };

  const sendOtp = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
      "Access-Control-Allow-Origin": "*",
    };

    fetch(
      `http://login.blesssms.com/api/mt/SendSMS?senderid=CHCABS&channel=Trans&DCS=0&flashsms=0&number=${phone}&text=DO NOT SHARE: ${servOtp} is the OTP for your ride ${bookingId} with Chennai cabs.Share this OTP with our driver, once you have verified the starting KM reading.Thank you.&route=10&APIKey=jPT9C6DKXUmc8jDkBAq06w`,
      requestOptions
    );
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
    booking_time,
    fromId, //done
    toId, //done
    uid, //dome
    booking_date,
    fromAddress, //done
    toAddress, //done
    tripStartDate, //done
    distance, //done
    timeStamp, //done
    car_mode,
    tripReturnDate, //done
    driverFee,
    phoneNumber, //done
    baseFare,
    username, //done
    time,
    from_location, //done
    to_location, //done
    day,
    trip_type, //done
    subTotal, //done
    total_fare //done
  ) => {
    let collRef = collection(db, `profile/${uid}/trips`);
    await setDoc(doc(db, "new_booking", bookingId), {
      booking_id: bookingId,
      from_address: fromAddress,
      to_address: toAddress,
      from_id: fromId,
      to_id: toId,
      user_id: uid,
      trip_status: "ongoing",
      referred_by: "",
      reward_points: 0,
      booking_date: booking_date,
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
      booking_time: booking_time,
      time: time,
      driver_accepted: 0,
      otp: servOtp,
      from_location: from_location,
      to_location: to_location,
      day: day,
      trip_type: trip_type,
      subtotal: subTotal,
      total_fare: total_fare,
    });
    await setDoc(doc(collRef, bookingId), {
      booking_id: bookingId,
      from_address: fromAddress,
      to_address: toAddress,
      from_id: fromId,
      to_id: toId,
      user_id: uid,
      trip_status: "ongoing",
      referred_by: "",
      reward_points: 0,
      booking_date: booking_date,
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
      booking_time: booking_time,
      time: time,
      driver_accepted: 0,
      otp: servOtp,
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
        setAuthstate,
        authstate,
        addNewTrip,
        uid,
        setotpsent,
        sendOtp,
        bookingConfirmed,
        setBookingConfirmed,
        bookingId,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
