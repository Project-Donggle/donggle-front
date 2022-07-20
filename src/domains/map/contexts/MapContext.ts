import React from "react"
import { createContext } from 'react'



type Location = {
    lat: number,
    lng :number
}

const MapContext = createContext<Location | null>(null);

const LocationStore = (props: React.ReactNode) => {
    
    const currentLocation = {
        lat: 0,
        lng: 0
    }
    return (
        <MapContext value= { currentLocation } > </MapContext>
    //
    )
 }

export default LocationStore