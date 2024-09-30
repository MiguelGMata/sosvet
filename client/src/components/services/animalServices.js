import axiosInstance from './axios';


export const animalsGet = async() => {
    const response = await axiosInstance.get('/sos/animals');
    return response.data;
};

export const addAnimal = async(animalData) => {
    try {
        const response = await axiosInstance.post('/sos/animal', animalData)
        return response.data;
    } catch (error) {
        if (error.response && error.response.data) {
            throw new Error(error.response.data.message || "Erreur lors d'ajouter votre animal");
        } else {
            // Para cualquier otro error (red, servidor no disponible, etc.)
            throw new Error('Une erreur est survenue. Veuillez réessayer plus tard.');
        }
    }
}

export const deleteAnimal = async(animalId) => {
    try {
        const response = await axiosInstance.delete(`/sos/animal/${animalId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`, // Si necesitas autenticación
            },
        });
        
        return response.data; // `axios` devuelve los datos de la respuesta en `data`
        
    } catch (error) {
        if (error.response && error.response.data) {
            throw new Error(error.response.data.message || "Erreur lors d'effacer l'animal");
        } else {
            throw new Error('Une erreur est survenue. Veuillez réessayer plus tard.');
        }
    }
};


export const putAnimal = async (animalId, updatedData) => {
    try {
        const response = await axiosInstance.put(`/sos/animal/${animalId}`, updatedData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`, 
            },
        });
        
        return response.data;
        
    } catch (error) {
        if (error.response && error.response.data) {
            throw new Error(error.response.data.message || "Erreur lors d'éditer l'animal");
        } else {
            throw new Error('Une erreur est survenue. Veuillez réessayer plus tard.');
        }
    }
};
