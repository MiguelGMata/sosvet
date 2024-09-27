import React, { useState, useEffect } from 'react';
import CardVeterinarians from '../../molecules/card/CardVeterinarians';
import SearchBar from '../../molecules/search/SearchBar';
import './veterinarianScreen.css';
import Title from '../../atoms/title/Title';


const VeterinarianScreen = () => {
    

    return(
        <>
            <main className="main-veterinarianScreen">
            <section className="section-veterinarianScreen">
                <Title>Rechercher un vétérinaire autour de vous</Title>
            </section>
            <section className="section-veterinarianScreen">
                    <SearchBar className="searchBar-block-vet"/>
            </section>
            </main>
        </>
    );
};
export default VeterinarianScreen;