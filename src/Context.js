import {createContext,useState,useEffect} from 'react'
import { auth } from './config/firebase-config'

const Context = createContext()


const ContextProvider = ({children}) =>{
    const [username, setUsername] = useState("")
    if(auth.currentUser != null){
        setUsername(auth.currentUser)
    }

    return(
        <Context.Provider value={{
            username,
            setUsername
        }}
        >
            {children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}