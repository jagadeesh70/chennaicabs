import { createContext,useEffect,useState } from "react";

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
    useEffect(()=>{
        oneWayTrip(319,"Innova/Xylo or Equivalent")
        return () =>{
            setTotalFare()
        }
    },[])


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
            }else if(distances > 130){
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
        
        console.log(totalFare)
        
        return(
            <BookingContext.Provider value={{
                origin,setOrigin,
                destination, setDestination,
                distance,
                setDistance,
                vehicle,
                setVehicle,
                oneWayTrip
            }}>
            {children}
        </BookingContext.Provider>
    )
    
}

export {BookingContext,BookingContextProvider}