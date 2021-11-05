import React, { useState } from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const location = {
    lat: 23.731560,
    lng: 90.387779
};

const Direction = ({ origin, destination }) => {
    const [response, setResponse] = useState(null);

    const directionsCallback = res => {
        if (res != null) {
            setResponse(res);
        }
    }

    return (
        <div>
            <LoadScript
                googleMapsApiKey="AIzaSyBwK88gb3F_0VpB18tyFekcVofQPmd7DpY"
            >
                <GoogleMap
                    // required
                    id='direction-example'
                    // required
                    mapContainerStyle={{
                        height: '500px',
                        width: '100%'
                    }}
                    // required
                    zoom={16}
                    // required
                    center={location}
                >
                    <DirectionsService
                        // required
                        options={{
                            origin: origin,
                            destination: destination,
                            travelMode: 'DRIVING'
                        }}
                        // required
                        callback={directionsCallback}
                    />

                    {
                        response !== null && (
                            <DirectionsRenderer
                                // required
                                options={{
                                    directions: response
                                }}
                            />
                        )
                    }
                </GoogleMap>

            </LoadScript>
        </div>
    );
};

export default Direction;