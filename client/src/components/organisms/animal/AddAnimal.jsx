import React, { useState } from 'react';
import { addAnimal } from '../../services/animalServices';
import Span from '../../atoms/span/Span';
import FormAnimal from '../../molecules/form/test';
import './addAnimal.css';


const AddAnimal  = ({ closeModal, onAnimalAdded }) => {
    const [error, setError] = useState(null);
    const [animalData, setAnimalData] = useState({
        nom:'',
        espece:'',
        race:'',
        couleur:'',
        sexe:'',
        poids:'',
        sterilisation:'',
        information:'',
        date_naissance:'',
  
    });

 // Función para manejar el cambio en los inputs
    const handleAnimal = (e) => {
        const { name, value } = e.target; // Obtenemos el nombre y valor del input
        //console.log(value, '<-- valor ingresado'); //Esto mostrará el valor ingresado correctamente en la consola
        setAnimalData((prevData) => ({
        ...prevData, // Mantiene el resto del estado
        [name]: value, // Actualiza solo el campo correspondiente
        }));
    };
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        //console.log("Datos del animal listo para enviar:", animalData);//
       try{
        const data  = await addAnimal(animalData);
            if(data){
                onAnimalAdded(data);
                closeModal();
            }
        } catch(error){
            setError(error.message);
        }
    };
    

    return(
        <div>
             {error && <Span className="error-message">{error}</Span>}
            <FormAnimal animalData={animalData} onChange={handleAnimal} onSubmit={handleSubmit} />
        </div>
    );

}
export default AddAnimal;
