import { createContext,useState } from "react";

const BookingContext = createContext()

const BookingContextProvider = ({children}) =>{
    const [origin,setOrigin] = useState()
    const [destination, setDestination] = useState()
    return(
        <BookingContext.Provider value={
            origin,setOrigin,
            destination, setDestination
        }>
            {children}
        </BookingContext.Provider>
    )
}

export {BookingContext,BookingContextProvider}