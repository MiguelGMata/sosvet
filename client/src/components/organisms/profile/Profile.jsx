// Profile.jsx
import React, { useEffect, useState } from 'react'; 
import { profileUser } from '../../services/useServices';
import CardProfile from '../../molecules/card/CardProfile';
import Card from '../../atoms/card/Card';
import CardAnimal from '../../molecules/card/CardAnimal';
import Button from '../../atoms/button/Button';
import Title from '../../atoms/title/Title';
import './profile.css'; // Cambia a un archivo CSS específico para el organismo

const Profile = ({ onNavigate }) => {
    const [userProfile, setUserProfile] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(true); 
    const [perfilsAni, setPerfilsAni] = useState([]);

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

    if (loading) {
        return <div>Chargement en cours...</div>;
    }

    if (errorMessage) {
        return <div>Erreur de chargement : {errorMessage.description}</div>;
    }

    return (
        <section className="section-profile">
            <Title>Bienvenu à votre profil</Title>
            <CardProfile firstName={userProfile.first_name} lastName={userProfile.last_name} email={userProfile.email}/> 
            <Title>Votre animal de compagnie </Title>
           <div className="card-block-profile">
           { 
                perfilsAni.length > 0 ? 
                perfilsAni.map(animal => (
                    <Card key={animal.id} >   
                      <Title>{animal.nom} </Title>
                       <ul className="profile-animal-ul">
                            <li>Espèce : {animal.espece}</li>
                            <li> Race : {animal.race}</li>
                            <li>Couleur : {animal.couleur} </li>
                            <li>Sexe : {animal.sexe}</li>
                       </ul>
                    </Card>
                ))
                : 
                <Card  key={perfilsAni.id} >
                    Il n'y a pas d'animal ajouté, cliquez sur le bouton pour en ajouter un !
                          <Button text="Ajouter" onClick={onNavigate}/>
                </Card>
            }
           </div>
        </section>
    );
};

export default Profile;
