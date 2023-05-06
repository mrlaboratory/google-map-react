import { GoogleMap, LoadScript, DirectionsService , DirectionsRenderer } from '@react-google-maps/api';
import React, { useState } from 'react';
const apiKey = import.meta.env.VITE_APIKEY 

const Direction = () => {
 
    const [response, setResponse] = useState(null);
    const origin = 'mirpur 10 circle dhaka';
    const destination= 'gulsan 1 circle dhaka';
  

    const center = {
        lat: 22.29575244644284, 
        lng: 91.8776804202272
      };

    const directionsCallback = (res) => {

      if (res !== null && !response) {
        if (res.status === 'OK') {
          setResponse(res);
          
        } else {
          console.log('response: ', res);
        }
      }

    };
  
    return (
      <div>
        <LoadScript googleMapsApiKey={apiKey}>
          <GoogleMap
            id="direction-example"
            mapContainerStyle={{
              height: '100vh',
              width: '100vw'
            }}
            zoom={15}
            center={center}
          >
            {destination !== '' && origin !== '' && (
              <DirectionsService
                options={{
                  destination: destination,
                  origin: origin,
                  travelMode: 'DRIVING'
                }}
                callback={directionsCallback}
              />
            )}
  
            {response !== null && (
              <DirectionsRenderer
                options={{
                  directions: response
                }}
              />
            )}
          </GoogleMap>
        </LoadScript>
      </div>
    );
};

export default Direction;