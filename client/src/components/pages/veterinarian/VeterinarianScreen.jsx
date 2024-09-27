import React, { useState, useEffect } from 'react';
import CardVeterinarians from '../../molecules/card/CardVeterinarians';
import SearchBar from '../../molecules/search/SearchBar';
import './veterinarianScreen.css';


const VeterinarianScreen = () => {
    

    return(
        <>
            <main className="main-veterinarianScreen">
            <section className="section-veterinarianScreen">
                <h1>GoogleMap</h1>
            </section>
            <section className="section-veterinarianScreen">
                    <SearchBar className="searchBar-block-vet"/>
            </section>
            </main>
          
        </>
    );
};
export default VeterinarianScreen;