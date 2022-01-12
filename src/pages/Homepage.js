import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LocationEntryForm from '../components/LocationEntryForm'
import Maps from '../components/Maps'


function Homepage() {
    return (
        <div>
            <Header></Header>
            <LocationEntryForm/>
            <Maps></Maps>
            <Footer></Footer>
        </div>
    )
}

export default Homepage
