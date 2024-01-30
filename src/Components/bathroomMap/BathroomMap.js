import React from 'react';
import {
    APIProvider,
    Map,
    AdvancedMarker,
    Pin
} from '@vis.gl/react-google-maps';

const BathroomMap = ({ bathroom }) => {
    const { latitude, longitude } = bathroom;

  
    const lat = parseFloat(latitude || '0');
    const lng = parseFloat(longitude || '0');

    const position = { lat, lng };

 
    let mapID = process.env.REACT_APP_GOOGLE_MAP_ID;
    let googleID = process.env.REACT_APP_GOOGLE_APP_API;

    return (
        <APIProvider apiKey={googleID}>
            <div style={{ height: '400px', width: '100%' }}>
                <Map
                    zoom={15}
                    center={position}
                    mapId={mapID}
                >
                    <AdvancedMarker position={position}>
                        <Pin
                            background={'lime'}
                            borderColor={'blue'}
                            glyphColor={'blue'}
                        />
                    </AdvancedMarker>
                </Map>
            </div>
        </APIProvider>
    );
};

export default BathroomMap;
