import React from 'react';
import './homeScreen.css';
import HomeHeader from '../../organisms/header/HomeHeader';

const HomeScreen = () => {

    return(
        <>
            <HomeHeader/>
            <main className="main-homeScreen">
                <section className="section-homeScreen">
                    <h1>Home</h1>
                </section>
            </main>
          
        </>
    );
};
export default HomeScreen;
