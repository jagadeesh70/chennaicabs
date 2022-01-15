import { GoogleMap,DirectionsRenderer } from '@react-google-maps/api'
import React, { useState, useContext } from 'react'
import "./Maps.css"
import { BookingContext } from '../context/BookingContext'
const containerStyle = {
    width: '350px',
    height: '400px'
}


const Maps = () => {
    const {origin,destination,setDistance} = useContext(BookingContext)
    const DirectionsService = new window.google.maps.DirectionsService()
    let [direction,setDirection] = useState("")
    const Mapdirection =  () =>{
        
        DirectionsService.route(
            {
                origin: { lat: 13.5244, lng:  80.3792 },
                destination: { lat: 12.5244, lng:  77.3792 },
                travelMode: window.google.maps.TravelMode.DRIVING,
                region: "IN",
                
            },

            (result,status) =>{
                setTimeout(() =>{
                    if(status === window.google.maps.DirectionsStatus.OK){
                        setDirection(result)
                    }
                    else{
                        console.log(`error ::: ${result}`)
                    }
                }
                    ,2000)
                }
                )
        }
        Mapdirection()
            
            return (
                <div className='map-container'>
            <div className="googlemap">
                <GoogleMap 
                options={{
                    mapTypeControl: false,
                    streetViewControl: false,
                    zoomControl: true,
                    fullscreenControl: false,
                    styles: containerStyle,
                    minZoom: 7,
                    maxZoom: 20
                }}
                mapContainerStyle={containerStyle}
                
                >
                    {direction && <DirectionsRenderer directions={direction}/>}
                </GoogleMap>
            </div>
        </div>
    )
}

export default Maps
