import axiosInstance from './axios';

export const veterinarianGet = async () => {
  try {
    const response = await axiosInstance.get('/sos/veterinaires');
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || 'Erreur a recharger les veterinaires');
    } else {
      throw new Error('Une erreur est survenue. Veuillez réessayer plus tard.');
    }
  }
}