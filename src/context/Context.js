import {createContext,useState} from 'react'
import { auth } from '../config/firebase-config'
import { RecaptchaVerifier,signInWithPhoneNumber } from 'firebase/auth'

const Context = createContext()

const ContextProvider = ({children}) =>{

    const [authstate,setAuthstate] = useState(false)
    const [username, setUsername] = useState("")
    const [phone, setPhone] = useState()
    const [otp, setotp] = useState()
    const [otpsent, setoptsent] = useState(false)
    
    
    const configureCaptcha = (e) =>{
        window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
        'size': 'invisible',
        'callback': (response) => {
        console.log(response)
        console.log("recap done")
        onSignInSubmit();}}, auth);
        }
    const onSignInSubmit = (e) =>{
        e.preventDefault()
        configureCaptcha()
        const phoneNumber = "+91" + phone
        console.log(phoneNumber)
        const appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        setoptsent(true)
        console.log("OTP sent")

        }).catch((error) => {
            console.log(error)
        console.log("OTP not Sent")
        });
}

    const onSubmitOtp = (e) =>{
        e.preventDefault()
        const code = otp
        window.confirmationResult.confirm(code).then((result) => {
            const user = result.user;
            setAuthstate(true)
            console.log(JSON.stringify(user))
            console.log("Login successful")
        }).catch((error) => {
            console.log(error, "Login failed")
        });
    }
    
    return(
        <Context.Provider value={{
            username,
            setUsername,
            phone,
            setPhone,
            setotp,
            onSignInSubmit,
            onSubmitOtp,
            otpsent,
            authstate,
            
        }}
        >
            {children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}