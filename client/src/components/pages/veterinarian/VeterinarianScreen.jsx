import React, { useState, useEffect } from 'react';
import { veterinarianGet } from '../../services/useServices';
import CardVeterinarians from '../../molecules/card/CardVeterinarians';
import './veterinarianScreen.css';

const VeterinarianScreen = () => {
    const [veterinarians, setVeterinarians] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fechVeterinarians = async() =>{
            try{
                const data = await veterinarianGet();
                setVeterinarians(data);
            }catch{(error) =>{
                setErrorMessage(error.data.description);
                }

            }finally{
                setLoading(false);
            }
        }
        fechVeterinarians();
    },[]);

    if(loading){
        return <div>Loading...</div>
    }
    if (errorMessage) {
        return <div>Error al cargar el perfil: {errorMessage}</div>;
    }

    veterinarianGet();
    return(
        <>
            <main className="main-veterinarianScreen">
            <section className="section-veterinarianScreen">
                <h1>GoogleMap</h1>
            </section>
                <section className="section-veterinarianScreen">
                    <div>
                        <h1>rechercher</h1>
                    </div>
                    {veterinarians.length > 0 ? 
                        veterinarians.map((vet) => 
                            <CardVeterinarians 
                                key={vet.id} 
                                nom={vet.nom} 
                                adresse={vet.adresse} 
                                lieux={vet.lieux} 
                                postal={vet.postal} 
                                phone={vet.phone} 
                                pictures={vet.pictures} 
                            />      
                        ) 
                    : 
                    <p>Aucun veterinaires disponible</p>
                    }
                </section>
            </main>
          
        </>
    );
};
export default VeterinarianScreen;