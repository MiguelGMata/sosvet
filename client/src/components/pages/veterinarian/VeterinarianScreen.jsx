import React from 'react';
import { veterinarianGet } from '../../services/useServices';
import './veterinarianScreen.css';

const VeterinarianScreen = () => {
    veterinarianGet();
    return(
        <>
            <main className="main-veterinarianScreen">
                <section className="section-veterinarianScreen">
                    <h1>Veterinarian</h1>
                </section>
            </main>
          
        </>
    );
};
export default VeterinarianScreen;