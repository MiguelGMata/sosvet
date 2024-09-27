
import React, { useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = { lat: 48.8566, lng: 2.3522 }; // Centro de París

const GoogleMapComponent = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDwexGWsqU8s6-osfk1MD3eGUWhwVmosz8',
  });

  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  
  const onLoad = React.useCallback((map) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(() => {
    setMap(null);
  }, []);

  // Función para convertir dirección a lat y lng
  const geocodeAddress = (address) => {
    const geocoder = new window.google.maps.Geocoder();
    
    geocoder.geocode({ address }, (results, status) => {
      if (status === 'OK') {
        const { lat, lng } = results[0].geometry.location;
        const newMarker = { lat: lat(), lng: lng(), title: address };
        setMarkers((current) => [...current, newMarker]);
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  };

  // Ejemplo de uso de la función geocodeAddress
  const handleAddressSearch = () => {
    const address = '56 Rue Sadi Carnot, Bagnolet'; // Cambia esta dirección por la que quieras
    geocodeAddress(address);
  };

  return isLoaded ? (
    <>
      <button onClick={handleAddressSearch}>Rechercher adresse</button>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={110}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={{ lat: marker.lat, lng: marker.lng }}
            title={marker.title}
          />
        ))}
      </GoogleMap>
    </>
  ) : <></>;
};

export default React.memo(GoogleMapComponent);