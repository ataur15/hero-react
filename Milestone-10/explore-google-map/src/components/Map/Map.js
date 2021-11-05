import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '600px',
    height: '500px'
};

const center = {
    lat: 23.731560,
    lng: 90.387779
};

const Map = () => {
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyBwK88gb3F_0VpB18tyFekcVofQPmd7DpY"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={14}
            >
                { /* Child components, such as markers, info windows, etc. */}
                <></>
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;