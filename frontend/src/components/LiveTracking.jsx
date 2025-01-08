import React, { useState, useEffect, useContext } from 'react'
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api'
import { SocketContext } from '../context/SocketContext';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const LiveTracking = ({ userType, userId }) => {
  const [currentPosition, setCurrentPosition] = useState(center);
  const socket = useContext(SocketContext);

  useEffect(() => {
    const updatePosition = () => {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setCurrentPosition({
          lat: latitude,
          lng: longitude
        });

        // Emit location update to the server
        socket.emit('update-location', {
          userId,
          userType,
          location: {
            lat: latitude,
            lng: longitude
          }
        })
      });
    };

    updatePosition();
    const intervalId = setInterval(updatePosition, 10000);

    return () => clearInterval(intervalId);
  }, [socket, userId, userType]);

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={currentPosition}
        zoom={15}
      >
        <Marker position={currentPosition} />
      </GoogleMap>
    </LoadScript>
  )
}

export default LiveTracking