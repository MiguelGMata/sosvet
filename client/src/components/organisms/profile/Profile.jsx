import React, { useEffect, useState } from 'react';
import { profileUser } from '../../services/useServices';
import { getSoin, getInsurance } from '../../services/animalServices';
import { FaHeartbeat, FaAmbulance } from 'react-icons/fa';
import CardProfile from '../../molecules/card/CardProfile';
import Card from '../../atoms/card/Card';
import Button from '../../atoms/button/Button';
import Title from '../../atoms/title/Title';
import ButtonIcon from '../../atoms/button/IconButton';
import './profile.css';


const Profile = ({ onNavigate }) => {
    const [userProfile, setUserProfile] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(true);
    const [perfilsAni, setPerfilsAni] = useState([]);
    const [insurance, setInsurance] = useState([]);
    const [careSoin, setCareSoin] = useState([]);


    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const data = await profileUser();
                setUserProfile(data);
                setPerfilsAni(data.Animals);
                const dataInsurance = await getInsurance();
                const dataSoin = await getSoin();
                const filterInsurance = dataInsurance.filter((insu) => insu.animalId)
                const filterSoin = dataSoin.filter((soin) => soin.animalId)
                setInsurance(filterInsurance);
                setCareSoin(filterSoin);

            } catch (error) {
                console.log(error.data);
                setErrorMessage(error.data);
            } finally {
                setLoading(false);
            }
        }
        fetchProfile();
    }, []);

    const filteredSoin = careSoin.length > 0 && userProfile
        ? careSoin.filter((soin) => soin.animalId === userProfile.id)
        : [];
    console.log(insurance)
    const filteredInsurance = insurance.length > 0 && userProfile
        ? insurance.filter((insu) => insu.animalId === userProfile.id)
        : [];

    if (loading) {
        return <div>Chargement en cours...</div>;
    }

    if (errorMessage) {
        return <div>Erreur de chargement : {errorMessage.description}</div>;
    }

    return (
        <section className="section-profile">
            <Title>Bienvenu à votre profil</Title>
            <CardProfile firstName={userProfile.first_name} lastName={userProfile.last_name} email={userProfile.email} />
            <Title>Votre animal de compagnie {userProfile.id} </Title>
            <div className="card-block-profile">
                {
                    perfilsAni.length > 0 ?
                        perfilsAni.map(animal => (
                            <Card key={animal.id} >
                                <Title className="title-primary">{animal.nom} </Title>
                                <ul className="profile-animal-ul">
                                    <li>Espèce : {animal.espece}</li>
                                    <li> Race : {animal.race}</li>
                                    <li>Couleur : {animal.couleur} </li>
                                    <li>Sexe : {animal.sexe}</li>
                                </ul>
                                <div className="profile-animal-btn">
                                    <Title className="title-secondary">Soins et Assurance</Title>
                                    <ButtonIcon onClick={onNavigate}><FaHeartbeat /> {filteredSoin.length} </ButtonIcon>
                                    <ButtonIcon onClick={onNavigate}> <FaAmbulance /> {filteredInsurance.length}</ButtonIcon>
                                </div>
                            </Card>
                        ))
                        :
                        <Card key={perfilsAni.id} >
                            Il n'y a pas d'animal ajouté, cliquez sur le bouton pour en ajouter un !
                            <Button text="Ajouter" onClick={onNavigate} />
                        </Card>
                }
            </div>
        </section>
    );
};

export default Profile;
