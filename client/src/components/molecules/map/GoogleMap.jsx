import React, { useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};
const defaultCenter = { lat: 48.8566, lng: 2.3522 }; // Centro de París
const defaultZoom = 12; // Nivel de zoom predeterminado

const GoogleMapComponent = ({ veterinarians }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDwexGWsqU8s6-osfk1MD3eGUWhwVmosz8',
  });

  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);

  const onLoad = React.useCallback((map) => {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(() => {
    setMap(null);
  }, []);

  // Función para convertir dirección a lat y lng
  const geocodeAddress = (address) => {
    const geocoder = new window.google.maps.Geocoder();
    
    return new Promise((resolve, reject) => {
      geocoder.geocode({ address }, (results, status) => {
        if (status === 'OK') {
          const { lat, lng } = results[0].geometry.location;
          resolve({ lat: lat(), lng: lng(), title: address });
        } else {
          console.error('Geocode error:', status);
          reject(status);
        }
      });
    });
  };

  useEffect(() => {
    const handleAddressSearch = async () => {
      const addressArray = veterinarians.map((dire) => `${dire.adresse}, ${dire.lieux}`);
      
      // Geocodificamos todas las direcciones
      const markerPromises = addressArray.map(address => geocodeAddress(address));
      
      try {
        const markerResults = await Promise.all(markerPromises);
        setMarkers(markerResults); // Actualizamos los marcadores en el mapa
      } catch (error) {
        console.error('Error geocoding addresses:', error);
      }
    };
    
    if (isLoaded) {
      handleAddressSearch(); // Ejecutamos la búsqueda de direcciones cuando el mapa esté cargado
    }
  }, [veterinarians, isLoaded]);
  
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={defaultCenter}
      zoom={defaultZoom}
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
  ) : <></>;
};

export default React.memo(GoogleMapComponent);