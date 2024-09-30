import React, { useEffect, useState} from 'react'; 
import { profileUser } from '../../services/useServices';
import { deleteAnimal } from '../../services/animalServices';
import { FaTrashAlt, FaEdit  } from 'react-icons/fa';
import Span from '../../atoms/span/Span';
import Image from '../../atoms/image/image';
import Title from '../../atoms/title/Title';
import Button from '../../atoms/button/Button';
import ButtonIcon from '../../atoms/button/IconButton';
import Card from '../../atoms/card/Card';
import Modal from '../../atoms/modal/Modal';
import AddAnimal from './AddAnimal';
import './animal.css';

const Animal = ( ) => {
    const [userProfile, setUserProfile] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(true); 
    const [perfilsAni, setPerfilsAni] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchProfile = async() => {
            try {
                const data = await profileUser();
                setUserProfile(data);       
                setPerfilsAni(data.Animals);
            } catch (error) {
                console.log(error.data);
                setErrorMessage(error.data);
            } finally {
                setLoading(false);
            }
        }
        fetchProfile();
    }, []);         

   // Función que se pasa a AddAnimal para agregar un nuevo animal y actualizar el estado
   const handleAnimalAdded = (newAnimal) => {
        setPerfilsAni((prevAnimals) => [...prevAnimals, newAnimal.data]); // Agrega el nuevo animal a la lista
        handleCloseModal(); // Cierra el modal después de agregar el animal
    };
    
    const handleDeleteAnimal = async (animalId) => {
        try {
            await deleteAnimal(animalId); 
            setPerfilsAni((prevPerfilsAni) => prevPerfilsAni.filter(animal => animal.id !== animalId)); // Actualiza el estado para remover el animal
        } catch (error) {
            console.error("Erreur lors de la suppression de l'animal: ", error);
        }
    };
    
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    if (loading) {
        return <div>Chargement en cours...</div>;
    }

    if (errorMessage) {
        return <div>Erreur de chargement : {errorMessage.description}</div>;
    }

    return (
        <section className="card-profile-animal">
             <Title className="title-animal">Vos animaux de compagnie {userProfile.first_name}</Title>
             <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <AddAnimal closeModal={handleCloseModal} onAnimalAdded={handleAnimalAdded} /> 
            </Modal>
             <div className="card-profile-animal-block">
           { 
                perfilsAni.length > 0 ? 
                perfilsAni.map((animal, index)=> (
                    <Card key={`${animal.id}-${index}`}>  
                      <Title>{animal.nom} </Title>
                       <ul className="profile-animal-ul">
                            <li>Espèce : {animal.espece}</li>
                            <li> Race : {animal.race}</li>
                            <li>Couleur : {animal.couleur} </li>
                            <li>Sexe : {animal.sexe}</li>
                            <li>Poids : {animal.poids}</li>
                            <li>Sterilization : {animal.sterilisation}</li>
                            <li>Date de naissance : {animal.date_naissance}</li>
                            <li>Information : {animal.information}</li>
                       </ul>
                       <div className="btn-animal-crud">
                            <ButtonIcon onClick={handleOpenModal} ><FaEdit/></ButtonIcon>
                            <ButtonIcon onClick={() => handleDeleteAnimal(animal.id)}><FaTrashAlt/></ButtonIcon> 
                        </div>
                    </Card>
                ))
                : 
                <Card>
                    <Image className="card-profile-avatar" image="https://ik.imagekit.io/logoMGM/sosvet/logo-.webp?updatedAt=1727378751576" width="100px" height="100px"/>
                    <Span>Vous n'avez pas d'animal de compagnie, cliquez sur le bouton pour en ajouter un !</Span>            
                </Card>
            }
           </div>
           <Button text="Ajouter un animal" onClick={handleOpenModal} />
        </section>
    );
};

export default Animal;