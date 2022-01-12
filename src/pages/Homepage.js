import React from 'react'
import Header from '../components/Header'
import LocationEntryForm from '../components/LocationEntryForm'
import Maps from '../components/Maps'

function Homepage() {
    return (
        <div>
            <Header></Header>
            <LocationEntryForm/>
            <Maps></Maps>
        </div>
    )
}

export default Homepage
