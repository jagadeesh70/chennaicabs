import React from 'react'
import {useNavigate} from 'react-router-dom'
function LoginSuccess() {
    const navigate = useNavigate()
    const redirect = () =>{
        navigate('/')
    }
    return (
        <div>
            <div>
                Login Successful
            </div>
            <button onClick={redirect}>Close</button>
        </div>

    )
}

export default LoginSuccess
