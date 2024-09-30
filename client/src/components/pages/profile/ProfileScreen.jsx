import React from 'react'; 
import { useNavigate } from 'react-router-dom';
import Profile from '../../organisms/profile/Profile'; 

const ProfileScreen = () => {
    const navigate = useNavigate();

    return (
        <main className='main-profileScreen'>
            <Profile onNavigate={() => navigate('/animal')} /> 
        </main>
    );
};

export default ProfileScreen;
