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
        console.log(response.data)
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


export const addSoin= async(careData) => {
    try {
        const response = await axiosInstance.post('/sos/soin', careData)
        return response.data;
    } catch (error) {
        if (error.response && error.response.data) {
            throw new Error(error.response.data.message || "Erreur lors d'ajouter un soin");
        } else {
            // Para cualquier otro error (red, servidor no disponible, etc.)
            throw new Error('Une erreur est survenue. Veuillez réessayer plus tard.');
        }
    }
}


export const getSoin = async(id) => {
    try {
        const response = await axiosInstance.get(`/sos/soins`);
        return response.data;
    } catch (error) {
        console.error('Une erreur est survenue. Veuillez réessayer plus tard.', error);
        throw error;
    }
};



export const deleteSoin = async(id) => {
    try {
        const response = await axiosInstance.delete(`/sos/soin/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`, 
            },
        });
        return response.data; 
        
    } catch (error) {
        if (error.response && error.response.data) {
            throw new Error(error.response.data.message || "Erreur lors d'effacer le soin");
        } else {
            throw new Error('Une erreur est survenue. Veuillez réessayer plus tard.');
        }
    }
};



/*******************************************Insurance*********************************************** */
export const addInsurance = async(insuranceData) => {
    try {
        const response = await axiosInstance.post('/sos/assureur', insuranceData)
        return response.data;
    } catch (error) {
        if (error.response && error.response.data) {
            throw new Error(error.response.data.message || "Erreur lors d'ajouter un assureur");
        } else {
            // Para cualquier otro error (red, servidor no disponible, etc.)
            throw new Error('Une erreur est survenue. Veuillez réessayer plus tard.');
        }
    }
}

export const getInsurance = async() => {
    try {
        const response = await axiosInstance.get(`/sos/assureurs`);      
        return response.data;
    } catch (error) {
        console.error('Une erreur est survenue. Veuillez réessayer plus tard.', error);
        throw error;
    }
};


export const deleteInsurance = async(id) => {
    try {
        const response = await axiosInstance.delete(`/sos/assureur/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`, 
            },
        });
        return response.data; 
        
    } catch (error) {
        if (error.response && error.response.data) {
            throw new Error(error.response.data.message || "Erreur lors d'effacer le assureur");
        } else {
            throw new Error('Une erreur est survenue. Veuillez réessayer plus tard.');
        }
    }
};           