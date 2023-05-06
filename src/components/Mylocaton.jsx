import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100vw',
  height: '500px'
};

const center = {
  lat: 22.29575244644284, 
  lng: 91.8776804202272
};

const apiKey = import.meta.env.VITE_APIKEY 
console.log(apiKey)
function Mylocaton() {
  return (
    <LoadScript
      googleMapsApiKey={apiKey}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <Marker position={center}></Marker>
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Mylocaton)