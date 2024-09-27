import axios from 'axios';

const API_KEY = 'AIzaSyDwexGWsqU8s6-osfk1MD3eGUWhwVmosz8'; // Reemplaza con tu clave real

export const getCoordinatesFromAddress = async (address) => {
  try {
    const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json`, {
      params: {
        address: address,
        key: API_KEY,
      },
    });

    if (response.data.status === 'OK') {
      const { lat, lng } = response.data.results[0].geometry.location;
      return { lat, lng };
    } else {
      throw new Error('No se pudo encontrar la dirección');
    }
  } catch (error) {
    console.error('Error al obtener coordenadas:', error);
    throw error;
  }
};
