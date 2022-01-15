import { createContext,useState } from "react";

const BookingContext = createContext()

const BookingContextProvider = ({children}) =>{
    const driverFee = 300
    const baseFareSmall = 1690
    const baseFareLarge = 2340
    const baseDistance = 130

    const [origin,setOrigin] = useState()
    const [destination, setDestination] = useState()
    const [distance, setDistance] = useState("")
    const [vehicle, setVehicle] = useState(1)
    const [totalFare,setTotalFare] = useState()


    const oneWayTrip = (distances,vehicles) =>{
        if(distances && vehicles){
            if(distance < 130){
                switch (vehicles) {
                    case "Etios/Dzire or Equivalent":
                        setTotalFare(baseFareSmall+driverFee)
                        break;
                    case "Innova/Xylo or Equivalent":
                        setTotalFare(baseFareLarge+driverFee)
                        break
                    default:
                        console.log("something is wrong")
                        break;
                }
            }
            if(distances > 130){
                switch (vehicles) {
                    case "Etios/Dzire or Equivalent":
                        setTotalFare(baseFareSmall+driverFee+((baseDistance - distance)* 13))
                        break;
                    case "Innova/Xylo or Equivalent":
                        setTotalFare(baseFareSmall+driverFee+((baseDistance - distance)* 18))
                        break
                    default:
                        console.log("something is wrong")
                        break;
                }

            }
        }
        }
        oneWayTrip(319,"Etios/Dzire or Equivalent")
        return(
            <BookingContext.Provider value={{
                origin,setOrigin,
                destination, setDestination,
                distance,
                setDistance,
                vehicle,
                setVehicle
            }}>
            {children}
        </BookingContext.Provider>
    )
    
}

export {BookingContext,BookingContextProvider}