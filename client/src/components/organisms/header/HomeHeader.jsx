import React from 'react';
import Logo from '../../atoms/logoBtn/Logo';
import VideoBack from '../../atoms/video/VideoBack';
import './homeHeader.css'
import Title from '../../atoms/title/Title';


const HomeHeader = () => {

    return(
        <header className="header-homeheader">
             <Logo className="logo-header" image="./logososvet.png" />
             <Title className="title-header">Bienvenu</Title>
            <div className="header-content">
               <VideoBack video="https://ik.imagekit.io/logoMGM/sosvet/videososvet.mp4?updatedAt=1727343934302"/>
            </div>
        </header>
    );
};
export default HomeHeader;