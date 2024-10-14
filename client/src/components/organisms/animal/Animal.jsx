import React, { useEffect, useState } from 'react';
import { profileUser } from '../../services/useServices';
import { addAnimal, putAnimal, deleteAnimal } from '../../services/animalServices';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import Span from '../../atoms/span/Span';
import Image from '../../atoms/image/image';
import Title from '../../atoms/title/Title';
import Button from '../../atoms/button/Button';
import ButtonIcon from '../../atoms/button/IconButton';
import Card from '../../atoms/card/Card';
import Modal from '../../atoms/modal/Modal';
import FormAnimal from '../../molecules/form/FormAnimal';
import Care from './Care';
import Insurance from './Insurance';
import MessageModal from '../../atoms/modal/MessageModal';
import moment from 'moment';
import 'moment/locale/fr';
import './animal.css';


const Animal = () => {
    const [userProfile, setUserProfile] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(true);
    const [perfilsAni, setPerfilsAni] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [animalData, setAnimalData] = useState({
        nom: '',
        espece: '',
        race: '',
        couleur: '',
        sexe: '',
        poids: '',
        sterilisation: '',
        information: '',
        date_naissance: '',
    });
    const [isEditing, setIsEditing] = useState(false); // Estado para saber si estamos editando
    const [currentAnimalId, setCurrentAnimalId] = useState(null); // Guardar el ID del animal que estamos editando
    const [error, setError] = useState(null);

    const handleAnimalAdded = async (newAnimalData) => {
        try {
            const newAnimal = await addAnimal(newAnimalData);
            setPerfilsAni((prevAnimals) => [...prevAnimals, newAnimal.data]);
            handleCloseModal();
        } catch (error) {
            setError(error.message);
        }
    };

    const handleEditAnimal = async (animalId, updatedData) => {
        try {
            const response = await putAnimal(animalId, updatedData);
            if (response.success) {
                // Actualiza el estado perfilsAni
                setPerfilsAni((prevAnimals) =>
                    prevAnimals.map(animal =>
                        animal.id === animalId ? { ...animal, ...updatedData } : animal
                    )
                );
                handleCloseModal();
            } else {
                alert("Error: " + response.message);
            }
        } catch (error) {
            setError(error.message);
        }
    };



    const handleDeleteAnimal = async (animalId) => {
        try {
            await deleteAnimal(animalId);
            setPerfilsAni((prevPerfilsAni) =>
                prevPerfilsAni.filter((animal) => animal.id !== animalId)
            );
        } catch (error) {
            setError(error.message);
        }
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
        setIsEditing(false); // Al abrir para agregar, no estamos editando
        setAnimalData({
            nom: '',
            espece: '',
            race: '',
            couleur: '',
            sexe: '',
            poids: '',
            sterilisation: '',
            information: '',
            date_naissance: '',
        });
        setError(null); // Limpiar el error al abrir el modal
    };

    const handleOpenEditModal = (animal) => {
        setIsModalOpen(true);
        setIsEditing(true); // Estamos en modo de edición
        setCurrentAnimalId(animal.id); // Guardamos el ID del animal que estamos editando
        setAnimalData(animal); // Cargamos los datos del animal en el formulario
        setError(null); // Limpiar el error al abrir el modal
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setCurrentAnimalId(null);
    };

    const handleAnimalSubmit = (event) => {
        event.preventDefault();
        if (isEditing) {
            // Editar el animal existente
            handleEditAnimal(currentAnimalId, animalData);
        } else {
            // Agregar un nuevo animal
            handleAnimalAdded(animalData);
        }
    };

    const handleAnimalChange = (event) => {
        const { name, value } = event.target;
        setAnimalData({ ...animalData, [name]: value });
    };

    const formatDate = (isoString) => {
        return moment(isoString).locale('fr').format('DD/MM/YYYY');
    };

    const closeModal = () => {
        setError(null);
    };
    console.log(perfilsAni)
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const data = await profileUser();
                setUserProfile(data);
                setPerfilsAni(data.Animals);
            } catch (error) {
                setErrorMessage(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchProfile();
    }, []);


    if (loading) {
        return <div>Chargement en cours...</div>;
    }

    if (errorMessage) {
        return <div>Erreur de chargement : {errorMessage.description}</div>;
    }
    console.log(userProfile.id)
    return (
        <section className="card-profile-animal">
            <Title className="title-primary">Vos animaux de compagnie {userProfile.first_name}</Title>
            {error && <MessageModal message={error} onClose={closeModal} className="error" />}
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <FormAnimal
                    animalData={animalData}
                    onChange={handleAnimalChange}
                    onSubmit={handleAnimalSubmit}
                />
            </Modal>
            <div className="card-profile-animal-block">
                {perfilsAni.length > 0 ? (
                    perfilsAni.map((animal, index) => (
                        animal && (
                            <Card key={`${animal.id}-${index}`} className="profile-animal-card">
                                <Title className="title-profil-animal">{animal.nom}</Title>
                                <ul className="profile-animal-ul">
                                    <li>Espèce : {animal.espece}</li>
                                    <li>Race : {animal.race}</li>
                                    <li>Couleur : {animal.couleur}</li>
                                    <li>Sexe : {animal.sexe}</li>
                                    <li>Poids : {animal.poids}kg</li>
                                    <li>Sterilization : {animal.sterilisation}</li>
                                    <li>Date de naissance : {formatDate(animal.date_naissance)}</li>
                                    <li>Information : {animal.information}</li>
                                </ul>
                                <div className="btn-animal-crud">
                                    <ButtonIcon onClick={() => handleOpenEditModal(animal)}><FaEdit /></ButtonIcon>
                                    <ButtonIcon onClick={() => handleDeleteAnimal(animal.id)}><FaTrashAlt /></ButtonIcon>
                                </div>
                                <div className="card-animal-soin">
                                    <Care animalId={userProfile.id} />
                                    <Insurance animalId={userProfile.id} />
                                </div>
                            </Card>
                        )
                    ))
                ) : (
                    <Card>
                        <Image className="card-profile-avatar" image="https://ik.imagekit.io/logoMGM/sosvet/logo-.webp?updatedAt=1727378751576" width="100px" height="100px" />
                        <Span>Vous n'avez pas d'animal de compagnie, cliquez sur le bouton pour en ajouter un !</Span>
                    </Card>
                )}
            </div>

            <Button text="Ajouter un animal" onClick={handleOpenModal} />
        </section>
    );
};

export default Animal;
