import {useState} from 'react';

const useGeolocation = () => {
    const [location, setLocation] = useState({
        loaded: false,
        coordinates: {latitude: 0, longitude: 0}
    });

    navigator.geolocation.getCurrentPosition(location => {
        setLocation({
            loaded: true,
            coordinates: {
                latitude: location.coords.latitude, 
                longitude: location.coords.longitude
            }
        });
    });

    return location;
};

export default useGeolocation;