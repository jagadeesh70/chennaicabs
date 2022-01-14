import { GoogleMap, useJsApiLoader, DirectionsService,DirectionsRenderer } from '@react-google-maps/api'
import React, { useState, useContext } from 'react'
import "./Maps.css"
import { Context } from '../context/Context'

const isLoaded = true
const containerStyle = {
    width: '300px',
    height: '300px'
}


const Maps = () => {
    const {origin,destination} = useContext(Context)
    const DirectionsService = new window.google.maps.DirectionsService()
    let [direction,setDirection] = useState("")
    DirectionsService.route(
            {
                origin: { lat: 12.5244, lng:  77.3792 },
                destination: { lat: 18.5244, lng:  80.3792 },
                travelMode: window.google.maps.TravelMode.DRIVING
            },
            (result,status) =>{
                if(status === window.google.maps.DirectionsStatus.OK){
                    setDirection(result)
                    console.log(result)
                }else{
                    console.log(`error ::: ${result}`)
                }
            }
        )

    return (
        <div className='map-container'>
            <div className="googlemap">
                <GoogleMap 
                defaultZoom={10}
                mapContainerStyle={containerStyle}
                
                >
                    {direction && <DirectionsRenderer directions={direction}/>}
                </GoogleMap>
            </div>
        </div>
    )
}

export default Maps
