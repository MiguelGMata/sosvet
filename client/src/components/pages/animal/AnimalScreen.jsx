import React from 'react';
import './animalScreen.css';
import Animal from '../../organisms/animal/Animal' ;

const AnimalScreen = () => {
    
    return(
        <>
            <main className="main-animalScreen">
                <section className="section-animalScreen">
                    <Animal/>
                </section>
            </main>
        </>
    );
};
export default AnimalScreen;