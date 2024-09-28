import React, { useEffect, useState} from 'react'; 
import { useNavigate } from 'react-router-dom';
import { profileUser } from '../../services/useServices';
import Image from '../../atoms/image/image';
import Title from '../../atoms/title/Title';
import CardProfile from '../../molecules/card/CardProfile';
import CardAnimal from '../../molecules/card/CardAnimal';
import Card from '../../atoms/card/Card';
import Button from '../../atoms/button/Button';
import './profileScreen.css';

const ProfileScreen = () => {
    const [userProfile, setUserProfile] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(true); // Estado para manejar la carga
    const [perfilsAni, setperfilsAni] = useState([]); // Estado para manejar la carga
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async() => {
            try{
                const data = await profileUser();
                setUserProfile(data);       
                setperfilsAni(data.Animals)
            }catch (error){
                console.log(error.data)
                setErrorMessage(error.data);
            }finally{
                setLoading(false);
            }
        }
        fetchProfile();
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Muestra un mensaje de carga
    }

    if (errorMessage) {
        return <div>Error al cargar el perfil: {errorMessage.description}</div>; // Manejo de errores
    }

    return (
        <>
        <main className='main-profileScreen'>
            <section className="section-profile">
                <Title className="title-profile">Bienvenu à votre profil</Title>
                <CardProfile  firstName={userProfile.first_name} lastName={userProfile.last_name} email={userProfile.email}/> 
                { 
                    perfilsAni.length !== 0 ? 
                    <CardAnimal 
                        nom={perfilsAni.nom} 
                        espece={perfilsAni.espece}   
                        race={perfilsAni.race} 
                        couleur={perfilsAni.couleur}  
                        sexe={perfilsAni.sexe} 
                        poids={perfilsAni.poids } 
                        sterilisation={perfilsAni.sterilisation }  
                        date_naissance={perfilsAni.date_naissance}  
                        information={perfilsAni.information}   
                    />
                    : 
                    <Card>Il n'y a pas d'animal ajouté, cliquez sur le bouton pour en ajouter un !
                        <Button text="Ajouter" onClick={() => navigate('/animal')}/>
                    </Card>
                }
            </section>
          </main>
        </>
    );
};
export default ProfileScreen;