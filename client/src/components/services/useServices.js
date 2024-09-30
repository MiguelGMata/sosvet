import axiosInstance from "./axios";

export const loginUser = async (email, password) => {
    const response = await axiosInstance.post('/sos/connexion', { email, password });
    if(response.data.token){
        localStorage.setItem('token', response.data.token)
    }else {
        console.error('erreur de token :', response.data);
    }
    return response.data     
 
};

export const signupUser = async(userData) => {
    try {
        const response = await axiosInstance.post('/sos/inscription', userData);
        return response.data; // Devuelve los datos de respuesta si todo sale bien
      } catch (error) {
        /*console.log(error.response.data.description,'<---')*/
        if (error.response && error.response.data) {
          // Si el servidor devuelve un error de validación o negocio
          throw new Error(error.response.data.description || 'Erreur lors de l\'inscription');
        } else {
          // Para cualquier otro error (red, servidor no disponible, etc.)
          throw new Error('Une erreur est survenue. Veuillez réessayer plus tard.');
        }
      }
};

export const profileUser = async () => {
    try {
        const response = await axiosInstance.get('/sos/profil');
        return response.data; 
    } catch (error) {
        if (error.response && error.response.data) {
            throw new Error(error.response.data.message || 'Erreur profil');
          } else {
            throw new Error('Une erreur est survenue. Veuillez réessayer plus tard.');
          }
    }
};
