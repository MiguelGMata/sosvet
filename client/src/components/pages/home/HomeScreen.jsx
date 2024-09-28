import React from 'react';
import './homeScreen.css';
import HomeHeader from '../../organisms/header/HomeHeader';
import SearchBar from '../../molecules/search/SearchBar';
import Test from '../test';
const HomeScreen = () => {

    return(
        <>
            <HomeHeader/>
            <main className="main-homeScreen">
                <Test/>
                <section className="section-homeScreen">
                    <SearchBar/>
                </section>
            </main>
          
        </>
    );
};
export default HomeScreen;
