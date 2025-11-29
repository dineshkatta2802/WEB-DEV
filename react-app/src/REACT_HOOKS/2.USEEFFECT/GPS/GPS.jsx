import React, { useState } from 'react';
import "./GPS.css"

export default function GPS(){
    const [coords, setCoords] = useState(null); // An object of latitude and the longitude
    const [loading, setLoading] = useState(true); // An text saying it is searching...
    const [fail, setFail] = useState(null); // An error mssg

    useState(() => {
        navigator.geolocation.getCurrentPosition( // Asks the permission
            (pos) => {
                setCoords({
                    lat : pos.coords.latitude,
                    lon : pos.coords.longitude
                });
                setLoading(false);
            }
        );
    }, [])

    return(
        <div className='GPSCon'>
            {loading && <p>Contacting the Satellite...</p>}

            {!loading && coords && (
                <div className="coords">
                    <p className='heading'>Device Coordinates : </p>
                    <p>Latitude : {coords.lat}</p>
                    <p>Longitude : {coords.lon}</p>
                </div>
            )}

            {!loading && fail && (
                <p>Error : {fail}</p>
            )}
        </div>
    );
}