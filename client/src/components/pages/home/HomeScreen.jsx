import React from 'react';
import './homeScreen.css';
import HomeHeader from '../../organisms/header/HomeHeader';
import SearchBar from '../../molecules/search/SearchBar';

const HomeScreen = () => {

    return(
        <>
            <HomeHeader/>
            <main className="main-homeScreen">
                <section className="section-homeScreen">
                    <SearchBar/>
                </section>
            </main>
          
        </>
    );
};
export default HomeScreen;
