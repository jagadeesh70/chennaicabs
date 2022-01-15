import { createContext,useState } from "react";

const BookingContext = createContext()

const BookingContextProvider = ({children}) =>{
    const driverFee = 300
    const baseFare = 1690
    const baseDistance = 130

    const [origin,setOrigin] = useState()
    const [destination, setDestination] = useState()
    const [distance, setDistance] = useState()
    const [vehicle, setVehicle] = useState()
    const [totalFare] = useState()


    const onwWayTrip = (distance,vehicle,) =>{
        if(distance && vehicle){
            if(distance < 130){
                
            }
        }
    }

    return(
        <BookingContext.Provider value={
            origin,setOrigin,
            destination, setDestination,
            distance,setDistance,
            vehicle,setVehicle
        }>
            {children}
        </BookingContext.Provider>
    )
}

export {BookingContext,BookingContextProvider}